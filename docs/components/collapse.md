---
title: 折叠面板
---

#### 基础用法

<ClientOnly>
  <collapse-demos></collapse-demos>
</ClientOnly>


#### 示例代码
```html
  <b-collapse :selected.sync="selected">
    <b-collapse-item name='a' title="标题一">内容 1</b-collapse-item>
    <b-collapse-item name='b' title="标题二">内容 2</b-collapse-item>
    <b-collapse-item name='c' title="标题三">内容 3</b-collapse-item>
  </b-collapse>

  <b-collapse :selected.sync="selected2" accordion>
    <b-collapse-item name='a' title="标题一">内容 1</b-collapse-item>
    <b-collapse-item name='b' title="标题二">内容 2</b-collapse-item>
    <b-collapse-item name='c' title="标题三">内容 3</b-collapse-item>
  </b-collapse>
```

#### API
#### Card props
属性| 说明 | 类型 | 默认值
---|---|---|---
selected | 当前激活的面板 | Array | -
accordion | 是否手风琴模式 | Boolean | false






