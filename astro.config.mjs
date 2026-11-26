import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hephaestusforge.vercel.app',
  integrations: [
    starlight({
      title: 'HephaestusForge',
      description:
        'Desktop file-over-app workbench for indie game development with Godot 4, 37 built-in studios, live GDD, Kanban, and local Kenney starter packs.',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/forge-logo.svg',
        alt: 'HephaestusForge',
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#0f0d0c' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'website' },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://hephaestusforge.vercel.app/og-image.png',
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:width', content: '1200' },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image:height', content: '630' },
        },
        {
          tag: 'meta',
          attrs: { name: 'twitter:card', content: 'summary_large_image' },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://hephaestusforge.vercel.app/og-image.png',
          },
        },
      ],
      components: {
        Head: './src/components/Head.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
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
              label: 'File Formats & Schemas',
              translations: { 'pt-BR': 'Formatos de Arquivo & Schemas' },
              slug: 'guide/file-formats',
            },
            {
              label: 'Keyboard Shortcuts',
              translations: { 'pt-BR': 'Atalhos de Teclado' },
              slug: 'guide/shortcuts',
            },
            {
              label: 'FAQ',
              translations: { 'pt-BR': 'Perguntas Frequentes (FAQ)' },
              slug: 'guide/faq',
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
