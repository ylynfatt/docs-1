const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GetCandy 2 Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3C82F6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Roadmap',
        link: 'https://portal.productboard.com/getcandy/1-getcandy',
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/v6qVWaf'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/getcandy/getcandy'
      }
    ],
    sidebar: [
      {
        title: 'Getting Started',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/',
          '/installation',
          '/configuration',
          '/upgrading'
        ]
      },
      {
        title: 'Guide',
        collapsable: false, // optional, defaults to true
        children: [
          '/getcandy/activity-log',
          '/getcandy/addresses',
          '/getcandy/associations',
          '/getcandy/attributes',
          '/getcandy/carts',
          '/getcandy/channels',
          '/getcandy/collections',
          '/getcandy/currencies',
          '/getcandy/customers',
          '/getcandy/images',
          '/getcandy/languages',
          '/getcandy/orders',
          '/getcandy/products',
          '/getcandy/search',
          '/getcandy/tags',
          '/getcandy/taxation',
          '/getcandy/urls'
        ]
      },
      {
        title: 'Admin Hub',
        collapsable: false, // optional, defaults to true
        children: [
          '/admin-hub/overview',
          '/admin-hub/staff'
        ]
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
