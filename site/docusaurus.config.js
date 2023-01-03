// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rocket',
  tagline: '',
  url: 'https://github.com',
  baseUrl: '/iamjoel/rocket',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'iamjoel', // Usually your GitHub org/user name.
  projectName: 'Rocket', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rocket',
        logo: {
          alt: 'Rocket Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'philosophy/intro',
            position: 'left',
            label: '理念',
          },
          {
            type: 'doc',
            docId: 'tool/intro',
            position: 'left',
            label: '工具',
          },
          {
            type: 'doc',
            docId: 'solution/intro',
            position: 'left',
            label: '应用',
          },
          // right
          {
            href: 'https://github.com/iamjoel/rocket',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Rocket, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
