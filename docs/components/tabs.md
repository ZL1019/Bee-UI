---
title: 标签页
---

#### 基础用法

<ClientOnly>
  <tabs-demos></tabs-demos>
</ClientOnly>


#### 示例代码
```html
    <b-tabs v-model="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="1">标签一</b-tabs-item>
        <b-tabs-item name="2">标签二</b-tabs-item>
        <b-tabs-item name="3">标签三</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="1">内容一</b-tabs-pane>
        <b-tabs-pane name="2">内容二</b-tabs-pane>
        <b-tabs-pane name="3">内容三</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
```

#### API
#### TabsItem/TabsPane props
属性| 说明 | 类型 | 默认值
---|---|---|---
name | 每个 TabsItem 和 TabsPane 的 name	 | String / Number | -

#### Tabs Events
属性| 说明 | 返回值 
---|---|---
tabs-click|点击 tabs-item 时触发| 选中的 tab Vue 实例







