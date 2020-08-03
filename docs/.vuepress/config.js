module.exports = {
  title: 'Sequelize 非官方中文文档',
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
        text: 'External',
        link: 'https://google.com'
      },
    ],
    sidebar: 'auto'
  }
}