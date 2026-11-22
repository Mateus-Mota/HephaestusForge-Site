import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hephaestusforge.vercel.app',
  integrations: [
    starlight({
      title: 'HephaestusForge',
      description:
        'Desktop file-over-app workbench for indie game development with Godot 4, 36 built-in studios, live GDD, Kanban, and local Kenney starter packs.',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        pt: {
          label: 'Português (BR)',
          lang: 'pt-BR',
        },
      },
      customCss: ['./src/styles/forge-theme.css'],
      social: {
        github: 'https://github.com/Mateus-Mota/HephaestusForge-Site',
      },
      editLink: {
        baseUrl: 'https://github.com/Mateus-Mota/HephaestusForge-Site/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: { 'pt-BR': 'Começando' },
          items: [
            {
              label: 'Quick Start & Creation Ritual',
              translations: { 'pt-BR': 'Primeiros Passos & Ritual' },
              slug: 'guide/getting-started',
            },
            {
              label: 'Downloads (v0.3.0)',
              translations: { 'pt-BR': 'Downloads (v0.3.0)' },
              slug: 'downloads',
            },
          ],
        },
        {
          label: 'Guides',
          translations: { 'pt-BR': 'Guias Práticos' },
          items: [
            {
              label: 'Assets, Starter Packs & External Tools',
              translations: { 'pt-BR': 'Assets, Starter Packs & Ferramentas' },
              slug: 'guide/assets-and-starter-packs',
            },
            {
              label: 'Workspace & Customizable Sidebar',
              translations: { 'pt-BR': 'Workspace & Barra Customizável' },
              slug: 'guide/workspace-and-tools',
            },
            {
              label: 'Godot 4 & Troubleshooting',
              translations: { 'pt-BR': 'Godot 4 & Solução de Problemas' },
              slug: 'guide/godot-integration-and-troubleshooting',
            },
          ],
        },
        {
          label: 'Reference',
          translations: { 'pt-BR': 'Referência' },
          items: [
            {
              label: 'Studios Catalog (Blocks A–H)',
              translations: { 'pt-BR': 'Catálogo de Estúdios (A–H)' },
              slug: 'guide/studios-catalog',
            },
            {
              label: 'Changelog',
              translations: { 'pt-BR': 'Changelog' },
              slug: 'changelog',
            },
          ],
        },
      ],
    }),
  ],
});
