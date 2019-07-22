---
title: 卡片
---

#### 基础用法

<ClientOnly>
  <card-demos></card-demos>
</ClientOnly>


#### 示例代码
```html
    <!-- 1. 基础用法： -->
    <b-card>
      <div slot="header">
        卡片名称
      </div>
      <p>内容一</p>
      <p>内容二</p>
    </b-card>

    <!-- 2. 简单卡片： -->
    <b-card>
      <p>内容一</p>
      <p>内容二</p>
    </b-card>

    <!-- 3. 卡片阴影： -->
    <b-card shadow="always">
      <!-- always hover never -->
      <p>总是显示</p>
    </b-card>
```

#### API
#### Card props
属性| 说明 | 类型 | 默认值
---|---|---|---
header | 设置 header，通过 slot#header 传入 DOM | String | -
body-style | 设置 body 的样式 | Object | { padding: '20px' }
header-style | 设置 header 的样式 | Object | -
shadow | 设置阴影显示时机：always、hover、never | String | 'always'





