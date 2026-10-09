/** Cloudflare Worker entry point for the Bydo Marketing site. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

function withSecurityHeaders(response: Response, isPreviewOrDev = false) {
  const headers = new Headers(response.headers);
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Content-Type-Options", "nosniff");

  if (isPreviewOrDev) {
    headers.set("Content-Security-Policy", "base-uri 'self'; object-src 'none'");
  } else {
    headers.set("Content-Security-Policy", "base-uri 'self'; frame-ancestors 'self'; object-src 'none'");
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("X-Frame-Options", "SAMEORIGIN");
  }

  const body = [101, 204, 205, 304].includes(response.status) ? null : response.body;
  return new Response(body, { status: response.status, statusText: response.statusText, headers });
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const isPreviewOrDev =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname.includes("run.app") ||
      url.hostname.includes("web.app");

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return withSecurityHeaders(response, isPreviewOrDev);
    }

    return withSecurityHeaders(await handler.fetch(request, env, ctx), isPreviewOrDev);
  },
};

export default worker;
