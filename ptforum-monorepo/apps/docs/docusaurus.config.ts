/**
 * ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
 * ┃           @ptforum/docs – Docusaurus Config           ┃
 * ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
 * Main configuration for the PFSA documentation app.
 */

import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'PFSA Docs',
  tagline: 'Guides for developers and contributors',
  favicon: 'img/favicon.ico',
  url: 'https://docs.portugueseforum.org.za',
  baseUrl: '/',
  organizationName: 'ptforum',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: { label: 'English' },
      pt: { label: 'Português' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/portugueseforum/monorepo/edit/main/apps/docs/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          path: 'blog',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/portugueseforum/monorepo/edit/main/apps/docs/',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: ['docusaurus-plugin-search-local'],

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'PFSA Docs',
      logo: {
        alt: 'PFSA Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', label: 'Docs', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { type: 'localeDropdown', position: 'right' },
        {
          href: 'https://github.com/portugueseforum/monorepo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Introduction', to: '/' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Forum', href: 'https://portugueseforum.org.za' },
            { label: 'Discord', href: 'https://discord.gg/portugueseforum' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Portuguese Forum of South Africa`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['typescript', 'bash'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
  },
};

export default config;
