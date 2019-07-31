---
title: 回到顶部
---

#### 基础用法

<ClientOnly>
  <backtop-demos></backtop-demos>
</ClientOnly>


#### 示例代码
```html
    <p>段落1</p>
    <!-- ... -->
    <p>段落50</p>
    <!-- 基础用法 -->
    <b-backtop></b-backtop>

    <!-- 可添加自定义内容 -->
    <b-backtop bottom="100">UP</b-backtop>
```

#### API
#### Backtop props
属性| 说明 | 类型 | 默认值
---|---|---|---
target | 触发滚动的对象，默认为 document | String  | -
visibility-height	 | 滚动高度达到此参数值才出现 | Number  | 200
right | 回到顶部按钮固定定位的 right | Number  | 40
bottom | 回到顶部按钮固定定位的 bottom | Number  | 40

#### Backtop Events
属性| 说明 | 返回值 
---|---|---
click|点击按钮时触发| 点击事件







