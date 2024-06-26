// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doing Azure',
  tagline: 'Coming soon to a web browser near you!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doingazure.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Doing Azure',
        logo: {
          alt: 'Doing Azure logo',
          src: 'img/doingazure-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/doingazure/doingazure.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social Media',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              {
                label: 'X / Twitter',
                href: 'https://twitter.com/doingazure',
              },
              {
                label: 'LinkedIn (maybe?)',
                href: 'https://twitter.com/doingazure',
              },
              {
                label: 'Facebook (maybe?)',
                href: 'https://twitter.com/doingazure',
                },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'Blog (coming soon?)',
                to: '/blog',
              },
              {
                label: 'Source code on GitHub',
                href: 'https://github.com/doingazure/doingazure.com',
              },
            ],
          },
          {
            title: 'Resources Elsewhere',
            items: [
              {
                label: 'Boston Azure on YouTube',
                href: 'https://www.youtube.com/bostonazure',
              },
              {
                label: 'Boston Azure Meetups',
                href: 'https://meetup.com/bostonazure',
              },
              {
                label: 'Microsoft Learn for Azure',
                href: 'https://learn.microsoft.com/en-us/azure/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Doing Azure project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
