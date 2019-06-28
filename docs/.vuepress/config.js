module.exports = {
  title: 'Bear UI',
  description: 'A Vue.js 2.0 UI Toolkit for Web.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { 
        text: '组件',
        items: [
          { text: 'Button', link: '/button' },
          { text: 'Input', link: '/input' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/NO2046' },
    ],
    sidebar: [
      '/',
      '/install/',
      '/get-start/'
    ]
  }

}