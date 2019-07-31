module.exports = {
  // base:'/Bear-UI/',
  head:[
		['link',{rel:'icon',href:'/favicon.ico'}]
	],
  title: 'Bear UI',
  description: 'A Vue.js 2.0 UI Toolkit for Web.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '安装', link: '/install/' },
      { 
        text: '组件',
        items: [
          { text: '图标', link: '/components/Icon' },
          { text: '按钮', link: '/components/Button' },
          { text: '输入框', link: '/components/Input' },
          { text: '栅格', link: '/components/Grid' },
          { text: '卡片', link: '/components/Card' },
          { text: '折叠面板', link: '/components/Collapse' },
          { text: '消息提示', link: '/components/Message' },
          { text: '弹出框', link: '/components/Popover' },
          { text: '粘滞', link: '/components/Sticky' },
          { text: '标签页', link: '/components/Tabs' },
          { text: '级联选择器', link: '/components/Cascader' },
          { text: '导航菜单', link: '/components/Nav' },
          { text: '回到顶部', link: '/components/Backtop' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/NO2046/Bear-UI' },
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children:[
          '/install/',
          '/get-start/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children:[
          '/components/icon',
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/card',
          '/components/collapse',
          '/components/message',
          '/components/popover',
          '/components/sticky',
          '/components/tabs',
          '/components/cascader',
          '/components/nav',
          '/components/backtop',
        ]      
      }     
    ]
  }

}