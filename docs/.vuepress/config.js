module.exports = {
  title: 'Sequelize 中文文档',
  description: 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: 'logo-small.png'
    }]
  ],
  themeConfig: {
    logo: 'brand_logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/putdoc/sequelize-docs-Zh-CN'
      },
    ],
    sidebar: 'auto'
  }
}