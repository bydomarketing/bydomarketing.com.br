# Site da Bydo Marketing para o Antigravity

Site institucional público da Bydo Marketing, construído com React, vinext e Cloudflare Workers. O projeto reúne páginas institucionais, serviços, projetos, blog e a estrutura técnica de SEO do domínio `www.bydomarketing.com.br`.

Esta pasta é uma cópia independente e validada do site. Ela contém o código, as imagens, as configurações, a estrutura de SEO, o sitemap, o robots.txt, a página 404 e os testes necessários para reproduzir o projeto.

## Como abrir no Antigravity

1. Crie um projeto no Antigravity e escolha **Add Folder**.
2. Selecione esta pasta inteira. Não selecione somente a pasta `app`.
3. Abra o terminal do projeto e execute `npm ci`.
4. Depois execute `npm run dev`.
5. Abra o endereço local informado pelo terminal, normalmente `http://localhost:3000`.

O projeto deve ser aberto pela raiz desta pasta porque é nela que estão o arquivo `package.json`, a versão exata das dependências e todas as configurações de funcionamento.

## Requisitos

- Node.js `>=22.13.0`
- npm

## Desenvolvimento local

```bash
npm ci
npm run dev
npm run build
npm test
```

Use `npm ci` na primeira instalação para manter exatamente as versões validadas neste pacote.

## Estrutura principal

- `app/` contém páginas, componentes, metadados e estilos.
- `public/` contém os arquivos públicos, o sitemap e o robots.
- `worker/` contém a entrada do Cloudflare Worker e os cabeçalhos de segurança usados no deploy para a Cloudflare.
- `proxy.ts` contém os mesmos cabeçalhos de segurança, mas escritos de um jeito que funciona em qualquer lugar onde o site rodar, porque é aplicado automaticamente em toda requisição, tanto na Cloudflare quanto num servidor Node comum.
- `tests/` valida rotas, H1, metadados, canonicals, dados estruturados e 404.
- `.openai/hosting.json` mantém a configuração de hospedagem do Sites.

## Publicação de artigos

Os artigos reais são cadastrados em `app/blog/articles.ts`. Uma URL individual só passa a existir depois que o artigo completo é incluído nessa coleção. O sitemap deve ser atualizado na mesma publicação.

## Domínio oficial

Todas as referências técnicas usam `https://www.bydomarketing.com.br`. Antes da publicação definitiva, a configuração de DNS e os redirecionamentos precisam confirmar esse endereço como versão principal.

## Publicando em qualquer hospedagem Node, como a Hostinger

Esse projeto foi ajustado pra rodar em dois destinos diferentes a partir do mesmo código, então além do pacote pensado pra Cloudflare, o comando `npm run build` também gera sozinho um servidor Node completo e independente dentro de `dist/standalone/`, já com tudo que ele precisa pra funcionar, sem depender de nada exclusivo da Cloudflare.

Pra publicar esse resultado numa hospedagem Node comum, os passos são estes.

1. Rode `npm run build` normalmente, o que gera a pasta `dist/standalone/` pronta pra uso.
2. Configure o servidor de destino pra iniciar o arquivo `dist/standalone/server.js`, que é o ponto de entrada do site.
3. Defina a variável de ambiente `PORT` com a porta que a hospedagem exigir, e `HOST` como `0.0.0.0` quando o servidor pedir esse ajuste, porque o vinext usa `HOST` em vez do `HOSTNAME` mais comum em outros projetos Node.
4. Como o próprio `dist/standalone/` já inclui as dependências necessárias pra rodar, não é obrigatório instalar as dependências de novo no servidor final, só é preciso enviar essa pasta gerada e iniciar o `server.js`.

No caso específico da Hostinger, a documentação oficial descreve um app Node criado pelo hPanel com essas configurações.

- Versão do Node, escolher 22, que é a versão padrão da Hostinger e também a que esse projeto exige.
- Arquivo de entrada (entry file), apontar para `dist/standalone/server.js`.
- Comando de build, usar `npm run build`, porque ele já gera a pasta `dist/standalone/` automaticamente.
- Integração com GitHub, quando conectada, publica sozinha a cada push feito no repositório, então o fluxo de trabalho de subir código pelo Antigravity e ver o site atualizar continua funcionando, só que agora publicando de verdade dentro da Hostinger.

Não tenho confirmação direta de como a Hostinger define a variável `PORT` sozinha, então vale conferir esse detalhe nas configurações do app Node dentro do hPanel antes da primeira publicação.
