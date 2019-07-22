---
title: 按钮
---

#### 基础用法

<ClientOnly>
  <button-demos></button-demos>
</ClientOnly>


#### 示例代码
```html
    <b-button>Default</b-button>
    <b-button type="primary">Primary</b-button>
    <b-button type="success">Success</b-button>
    <b-button type="info">Information</b-button>

    <b-button disabled>Disabled</b-button>

    <b-button icon-name="like">With Icon</b-button>
    <b-button icon-name="edit" icon-position="right">Change Icon Position</b-button>

    <b-button icon-name="search" circle></b-button>
    <b-button type="info" icon-name="download" @click="download" :loading="isLoading" circle></b-button>

    <b-button-group>
      <b-button icon-name="left">Backward</b-button>
      <b-button>Home</b-button>
      <b-button icon-name="right" icon-position="right">Forward</b-button>
    </b-button-group>

    <script>
    export default {
      data() {
        return {
          isLoading: false,
        };
      },
      methods: {
        download() {
          this.isLoading = true;
          setTimeout(() => {
            this.isLoading = false;
          }, 3000);
        },
      },
    };
    </script>
```

#### API
#### Button(ButtonGroup) props
属性| 说明 | 类型 | 默认值
---|---|---|---
type | 按钮的类型，可选值 default、primary、success、info | String | 'default'
disabled | 设置按钮为禁用状态 | Boolean | false
circle | 设置按钮为圆形(只在单独图标下生效) | Boolean | false
loading | 设置按钮为加载中状态 | Boolean | false
icon-name | 设置按钮的图标 | String | -
icon-position | 设置按钮的图标的位置，可选值有 left、right | String | left
