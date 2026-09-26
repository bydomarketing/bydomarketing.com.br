import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Faz o build gerar também um servidor Node autossuficiente em
  // dist/standalone/, além do pacote padrão para Cloudflare. Isso permite
  // publicar o mesmo código tanto na Cloudflare quanto em qualquer
  // hospedagem Node comum, como a Hostinger, sem precisar de dois projetos.
  output: "export",
};

export default nextConfig;
