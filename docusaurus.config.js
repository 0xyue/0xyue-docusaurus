// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TwitterSvg = '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

const TwitterSvg32 = '<svg style="fill: #1DA1F2; height="32" width="32" viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>';

const GitHubSvg = '<svg height="32" width="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1"  data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '0xyue',
  tagline: '学习笔记',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.0xyue.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xyue.xyz', // Usually your GitHub org/user name.
  projectName: '0xyue-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xyue/0xyue-docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xyue/0xyue-docusaurus/tree/main/',
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
      // Replace with your project's social card
      image: 'img/0xyue.png',
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ 如果我的笔记对你有帮助, 请在 <a target="_blank" rel="noopener noreferrer" href="https://github.com/0xyue/0xyue-docusaurus">GitHub</a> 上给它一颗星， 并在 <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xyue_web3">${TwitterSvg}Twitter </a>上关注我`,
      },
      navbar: {
        title: '0xyue',
        logo: {
          alt: '0xyue Logo',
          src: 'img/0xyue.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'trader',
            position: 'left',
            label: '交易笔记',
          },
          {
            type: 'dropdown',
            label: '产品',
            position: 'left',
            items: [
              {
                label: 'punch3(coming soon)',
                href: 'https:/www.punch3.xyz',
              },
            ],
          },
          // {
          //   href: 'https://github.com/0xyue/0xyue-docusaurus/tree/main/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
          {
            type: 'html',
            position: 'right',
            value: `<a target="_blank" rel="noopener noreferrer" href="https://github.com/0xyue/0xyue-docusaurus/tree/main/">${GitHubSvg} </a>`,
          },
          {
            type: 'html',
            position: 'right',
            value: `<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/0xyue_web3">${TwitterSvg32} </a>`,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/tutorial/intro',
              },
            ],
          },
          {
            title: '个人链接',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xyue_web3',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/AMFfrpVQUw',
              },
              {
                label: 'Mirror',
                href: 'https://mirror.xyz/0xyue.eth',
              },
              {
                label: 'Link3',
                href: 'https://link3.to/0xyue_web3',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 0xyue.xyz. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
