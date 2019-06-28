module.exports = {
  base:'Bear-UI',
  title: 'Bear UI',
  description: 'A Vue.js 2.0 UI Toolkit for Web.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { 
        text: '组件',
        items: [
          { text: 'Icon', link: '/components/Icon' },
          { text: 'Button', link: '/components/Button' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/NO2046' },
    ],
    sidebar: [
      '/',
      {
        title: '开发指南',
        children:[
          '/install/',
          '/get-start/',
        ]
      },
      {
        title: '组件',
        children:[
          '/components/icon',
          '/components/button'
        ]      
      }     
    ]
  }

}