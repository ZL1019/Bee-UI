---
title: 导航菜单
---

#### 基础用法

<ClientOnly>
  <nav-demos></nav-demos>
</ClientOnly>

#### 示例代码

```html
  <!-- 基础菜单： -->
  <b-nav :selected.sync="activeIndex1" style="margin-top:20px;">
    <b-nav-item name="hot-pot">
      火锅 🍲
    </b-nav-item>
    <b-sub-nav name="fruit">
      <template slot="title">水果 🍓</template>
      <b-nav-item name="watermelon">
        西瓜 🍉
      </b-nav-item>
      <b-nav-item name="orange">
        橘子 🍊
      </b-nav-item>
      <b-sub-nav name="apple">
        <template slot="title">苹果 🍎</template>
        <b-nav-item name="red-apple">
          红苹果 🍎
        </b-nav-item>
        <b-nav-item name="green-pple">
          青苹果 🍏
        </b-nav-item>
      </b-sub-nav>
    </b-sub-nav>
    <b-nav-item name="milk">
      牛奶 🥛
    </b-nav-item>
    <b-sub-nav name="hamburger">
      <template slot="title">汉堡 🍔</template>
      <b-nav-item name="burger-king">
        汉堡王 🍔
      </b-nav-item>
      <b-nav-item name="fanzai">
        凡仔汉堡 🍔
      </b-nav-item>
    </b-sub-nav>
  </b-nav>

  <!-- 垂直菜单： -->
  <b-nav :selected.sync="activeIndex2" vertical>
    <b-nav-item name="hot-pot">
      火锅 🍲
    </b-nav-item>
    <b-sub-nav name="fruit">
      <template slot="title">水果 🍓</template>
      <b-nav-item name="watermelon">
        西瓜 🍉
      </b-nav-item>
      <b-nav-item name="orange">
        橘子 🍊
      </b-nav-item>
      <b-sub-nav name="apple">
        <template slot="title">苹果 🍎</template>
        <b-nav-item name="red-apple">
          红苹果 🍎
        </b-nav-item>
        <b-nav-item name="green-pple">
          青苹果 🍏
        </b-nav-item>
      </b-sub-nav>
    </b-sub-nav>
    <b-nav-item name="milk">
      牛奶 🥛
    </b-nav-item>
    <b-sub-nav name="hamburger">
      <template slot="title">汉堡 🍔</template>
      <b-nav-item name="burger-king">
        汉堡王 🍔
      </b-nav-item>
      <b-nav-item name="fanzai">
        凡仔汉堡 🍔
      </b-nav-item>
    </b-sub-nav>
  </b-nav>

  <script>
  export default {
    data() {
      return {
        activeIndex1: ['red-apple'],
        activeIndex2: ['fanzai']
      }
    }
  }
  </script>
```

#### API

#### Nav props

| 属性 | 说明                              | 类型            | 默认值 |
| ---- | --------------------------------- | --------------- | ------ |
| selected | 当前激活菜单的 name | Array | -      |
| vertical | 开启垂直模式 | Boolean | false     |

#### SubNav Events

| 属性       | 说明                  | 返回值              |
| ---------- | --------------------- | ------------------- |
| name | 唯一标志，必须 | String | -
#### NavItem Events

| 属性       | 说明                  | 返回值              |
| ---------- | --------------------- | ------------------- |
| name | 唯一标志，必须 | String | -
