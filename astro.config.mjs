import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://docs.menthoros.com',
  integrations: [
    starlight({
      title: 'Menthoros — Documentação',
      logo: { src: './src/assets/logo-menthoros.png', replacesTitle: true },
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'root',
      locales: { root: { label: 'Português', lang: 'pt-BR' } },
      sidebar: [
        { label: 'Treinador', items: [{ autogenerate: { directory: 'treinador' } }] },
        { label: 'Atleta', items: [{ autogenerate: { directory: 'atleta' } }] },
        { label: 'FAQ', link: '/faq/' },
      ],
    }),
  ],
});