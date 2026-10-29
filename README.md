# VESSA

**Landing page de moda** · Next.js · TypeScript · Tailwind CSS · Framer Motion

[![Demo ao vivo](https://img.shields.io/badge/demo-online-BD5B35?style=flat-square)](https://vessa-atelie.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/license-MIT-BD5B35?style=flat-square)](LICENSE)

Landing page editorial para a VESSA, uma marca de roupas leves de costura aparente. A página inteira é costurada por um fio animado que nasce no logo, atravessa cada seção com curvas e nós e termina amarrado no footer, com galeria horizontal, hotspots de produto e pedidos que caem direto no WhatsApp.

🔗 **Demo:** [vessa-atelie.vercel.app](https://vessa-atelie.vercel.app)

![Captura de tela da VESSA](docs/img/preview.png)

> Projeto pessoal de portfólio. "VESSA" é uma marca fictícia: nome, conceito, textos, produtos e locais foram criados para este projeto, e as fotos são ilustrativas do [Unsplash](https://unsplash.com/license).

## Sobre o projeto

O conceito da marca é "bonita até do avesso": roupa feita à mão, em pequenas tiragens, com o mesmo cuidado no lado de dentro e no de fora. A interface traduz isso num elemento só, o fio, que costura a navegação de ponta a ponta e leva uma agulha na ponta: à frente, um alinhavo pontilhado mostra o caminho; atrás, o fio sólido marca o que já foi visto.

O objetivo foi ir além do template de landing page: animações com intenção, cenas de scroll que tocam uma vez e liberam a navegação, e desempenho medido. A rolagem caiu de 88% para 3% de quadros travados depois de mover toda a geometria do fio para JavaScript puro, sem consultas ao DOM durante o scroll.

## Funcionalidades

- **O fio**: SVG orgânico com nós e ondulações que é "costurado" conforme o scroll, no desktop e no mobile
- Menu hambúrguer em tela cheia com revelação circular, categorias e preview de foto no hover
- Hero com wordmark gigante e colagem de fotos com parallax pelo mouse
- Manifesto fixado no scroll, com as palavras acendendo uma a uma
- Coleção em galeria horizontal fixada no scroll, que depois vira carrossel livre (arrastar, deslizar, trackpad e setas), com etiquetas de roupa que balançam com o movimento
- Produto destaque com hotspots na foto e seletor de tamanho que monta a mensagem do WhatsApp
- "Onde encontrar" em painéis expansíveis com foto de cada ponto, alternando sozinhos
- Revenda com spotlight que segue o mouse e formulário em 3 etapas
- Comunidade em carrossel contínuo de fotos e CTA final com imagem que se expande no scroll
- Analytics (GA4 / Meta Pixel) nos cliques de WhatsApp e no envio do formulário de revenda
- SEO: metadata, OpenGraph, `sitemap.xml`, `robots.txt` e JSON-LD (`ClothingStore`)

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)**, tokens da marca em `src/app/globals.css`
- **[Framer Motion](https://www.framer.com/motion/)**, todas as animações e o fio
- **[Lenis](https://lenis.darkroom.engineering/)**, scroll suave
- **[Vercel](https://vercel.com)**, deploy

Projeto **frontend-only**: não há backend nem banco de dados. O formulário de revenda e os CTAs de produto convertem direto em um link do WhatsApp (`wa.me`) com mensagem pré-preenchida. Todo o conteúdo editável (produtos, locais, menu e fotos) fica em `src/lib/content.ts`.

## Como rodar localmente

```bash
git clone https://github.com/joaobatis1a/vessa.git
cd vessa
npm install
cp .env.example .env.local   # opcional: WhatsApp, Instagram, GA4 e Meta Pixel
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Sem `.env.local`, o site roda normalmente com os valores de exemplo.

## Autor

**João Batista da Silva Neto**

- GitHub: [@joaobatis1a](https://github.com/joaobatis1a)
- LinkedIn: [joao-batista-silva-neto](https://linkedin.com/in/joao-batista-silva-neto)
- E-mail: [profissionalba1is1a@gmail.com](mailto:profissionalba1is1a@gmail.com)

## Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais detalhes. As fotos seguem a [licença do Unsplash](https://unsplash.com/license).
