import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "./site";

export const metadata: Metadata = {
  title: "Página não encontrada | Bydo Marketing",
  description: "A página solicitada não foi encontrada.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <><Header /><main className="not-found-page"><div><span>Erro 404</span><h1>Esta página não foi encontrada.</h1><p>O endereço pode ter mudado ou não existir. Você pode voltar para a página principal e continuar conhecendo a Bydo Marketing.</p><Link className="button" href="/">Voltar para a página inicial</Link></div></main><Footer /></>;
}
