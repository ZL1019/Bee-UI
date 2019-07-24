---
title: 弹出框
---

#### 基础用法

<ClientOnly>
  <popover-demos></popover-demos>
</ClientOnly>


#### 示例代码
```html
      <!-- 基础用法： -->
      <b-popover>
        <template slot="content">
          内容文字一
        </template>
        <b-button>click 激活</b-button>
      </b-popover>

      <b-popover trigger="hover">
        <template slot="content">
          内容文字二
        </template>
        <b-button>hover 激活</b-button>
      </b-popover>

      <!-- 不同方位： -->
      <b-popover trigger="hover" position="bottom">
        <!-- top bottom left right -->
        <template slot="content">
          内容文字一
        </template>
        <b-button>下方</b-button>
      </b-popover>

      <!-- 手动关闭： -->
      <b-popover>
        <template slot="content" slot-scope={close}>
          内容文字一
          <b-button @click="close">关闭</b-button>
        </template>
        <b-button>Click</b-button>
      </b-popover>
```

#### API
#### Message props
属性| 说明 | 类型 | 默认值
---|---|---|---
trigger | 触发方式: click、hover	 | String | 'click'
position | 出现位置: top、bottom、left、right	 | String | 'top'
contentStyle | 弹出框样式	 | Object | { width: '200px' }






