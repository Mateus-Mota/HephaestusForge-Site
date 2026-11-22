import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hephaestusforge.vercel.app',
  integrations: [
    starlight({
      title: 'HephaestusForge',
      description:
        'Documentação oficial e Wiki do HephaestusForge — estação desktop file-over-app para conceber, organizar e produzir jogos com Godot 4 e ferramentas externas.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Português (BR)',
          lang: 'pt-BR',
        },
      },
      customCss: ['./src/styles/forge-theme.css'],
      social: {
        github: 'https://github.com/Mateus-Mota/HephaestusForge',
      },
      editLink: {
        baseUrl: 'https://github.com/Mateus-Mota/HephaestusForge-Site/edit/main/',
      },
      sidebar: [
        {
          label: 'Começando',
          items: [
            { label: 'Primeiros Passos & Ritual', slug: 'guide/getting-started' },
            { label: 'Downloads (v0.3.0)', slug: 'downloads' },
          ],
        },
        {
          label: 'Guias Práticos',
          items: [
            { label: 'Assets, Starter Packs & Ferramentas', slug: 'guide/assets-and-starter-packs' },
            { label: 'Workspace & Barra Customizável', slug: 'guide/workspace-and-tools' },
            { label: 'Godot 4 & Solução de Problemas', slug: 'guide/godot-integration-and-troubleshooting' },
          ],
        },
        {
          label: 'Referência',
          items: [
            { label: 'Catálogo de Estúdios (A–H)', slug: 'guide/studios-catalog' },
            { label: 'Changelog', slug: 'changelog' },
          ],
        },
      ],
    }),
  ],
});
