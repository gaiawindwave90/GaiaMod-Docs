/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GaiaMod Documentation',
  url: 'https://gaiawindwave90.github.io',
  baseUrl: '/GaiaMod-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'GaiaMod',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'GaiaMod Documentation',
      items: [
        {
          href: 'https://types.turbowarp.org/',
          label: 'TurboWarp Type Reference',
          position: 'left'
        },
        {
          href: 'https://gaiawindwave90.github.io/GaiaMod',
          label: 'GaiaMod',
          position: 'right'
        },
        {
          href: 'https://github.com/gaiawindwave90/GaiaMod/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
      additionalLanguages: ['json']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
