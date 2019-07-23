---
title: 消息提示
---

#### 基础用法

<ClientOnly>
  <message-demos></message-demos>
</ClientOnly>


#### 示例代码
```html
      <!-- 基础用法： -->
      <b-button @click="open1">点击打开消息提示</b-button>

      <!-- 可关闭： -->
      <b-button @click="open2">点击打开消息提示</b-button>

      <!-- 使用 HTML 片段： -->
      <b-button @click="open3">点击打开消息提示</b-button>
```

#### API
#### Message props
属性| 说明 | 类型 | 默认值
---|---|---|---
duration | 显示时间, 秒 | Number | 3
showClose | 是否显示关闭按钮	 | Boolean | false
enableHtml | 是否使用 HTML 片段作为消息内容	 | Boolean | false
onClose | 关闭时的回调函数, 参数为被关闭的 message 实例	 | Function | -






