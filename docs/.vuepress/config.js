const { description } = require('../../package')

module.exports = {
  base: "/snippetshub/",
  title: '<SnippetsHub 🐱‍👤 />',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  // dark mood config start 1-2
  theme: 'vuepress-theme-default-vue-a11y', // or 'default-vue-a11y'
  // dark mood config end

  themeConfig: {
    // logo: 'https://simpleicons.org/icons/mixer.svg',
    // dark mood config start 2-2
    colorMode: {
      enabled: true,
      visible: true,
      props: {
        modes: [ 'light', 'dark', 'system', 'sepia' ]
      }
    },
    // dark mood config end
    // repo: 'Samk13/snippetshub',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Sam Arbid',
        link: 'https://github.com/Samk13'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/search'
  ]
}
