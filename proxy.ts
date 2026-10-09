import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Cabeçalhos de segurança do site.
 *
 * Este arquivo roda em toda requisição, em qualquer lugar onde o site for
 * publicado, seja na Cloudflare, seja num servidor Node comum como a
 * Hostinger, porque faz parte do próprio código da aplicação e não de uma
 * configuração específica de um único destino. Assim os dois destinos
 * mantêm exatamente a mesma proteção sem precisar duplicar essa lógica.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const hostname = request.nextUrl.hostname;
  const isPreviewOrDev =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.includes("run.app") ||
    hostname.includes("web.app");

  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  response.headers.set("X-Content-Type-Options", "nosniff");

  if (isPreviewOrDev) {
    response.headers.set("Content-Security-Policy", "base-uri 'self'; object-src 'none'");
  } else {
    response.headers.set("Content-Security-Policy", "base-uri 'self'; frame-ancestors 'self'; object-src 'none'");
    response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    response.headers.set("X-Frame-Options", "SAMEORIGIN");
  }

  return response;
}
