import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Personal Wiki',
  tagline: 'A collection of my thoughts, ideas, and knowledge across various topics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://horia-delicoti.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'horia-delicoti', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/horia-delicoti/wiki/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/horia-delicoti/wiki/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'My Personal Wiki',
      logo: {
        alt: 'Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'medicalSidebar',
          position: 'left',
          label: 'Medical',
        },
        {
          type: 'docSidebar',
          sidebarId: 'schoolSidebar',
          position: 'left',
          label: 'School',
        },
        {
          type: 'docSidebar',
          sidebarId: 'lifeSidebar',
          position: 'left',
          label: 'Life',
        },
        {
          type: 'docSidebar',
          sidebarId: 'programmingSidebar',
          position: 'left',
          label: 'Programming',
        },
        {
          type: 'docSidebar',
          sidebarId: 'spaceSidebar',
          position: 'left',
          label: 'Space',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/horia-delicoti/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Topics',
          items: [
            {
              label: 'Medical',
              to: '/docs/medical/intro',
            },
            {
              label: 'School',
              to: '/docs/school/intro',
            },
            {
              label: 'Life',
              to: '/docs/life/intro',
            },
            {
              label: 'Programming',
              to: '/docs/programming/intro',
            },
            {
              label: 'Space',
              to: '/docs/space/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/horia-delicoti/wiki',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Personal Wiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
