# SNADRILL Máquinas e Serviços

One page em React + TypeScript + Tailwind CSS (v4) + Framer Motion.

## Rodar

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components/` — seções da página (Header, Hero, Equipamentos, Sobre, Servicos, Beneficios, Contato, Footer, WhatsAppFloat)
- `src/lib/contact.ts` — dados de contato centralizados (WhatsApp, telefone, e-mail, endereço)
- `src/assets/` — imagens do site
- `legacy/` — HTML estático original (referência)

## SEO

Meta tags, Open Graph, Twitter card, JSON-LD (LocalBusiness), `robots.txt` e `sitemap.xml` em `public/`. Ajuste o domínio real em `index.html` e `public/robots.txt` / `sitemap.xml` antes do deploy.
