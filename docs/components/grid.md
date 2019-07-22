---
title: 栅格
---

#### 基础用法

<ClientOnly>
  <grid-demos></grid-demos>
</ClientOnly>


#### 示例代码
```html
    <!-- 1. 基础用法： -->
    <b-row>
      <b-col span='12'>
        <!-- 12 8 6 -->
        <div>col-12</div>
      </b-col>
      <b-col span='12'>
        <div>col-12</div>
      </b-col>
    </b-row>
```
```html
    <!-- 2. 区块间隔： -->
    <b-row gutter="20">
      <b-col span="8">
        <div>col-8</div>
      </b-col>
      <b-col span="8">
        <div>col-8</div>
      </b-col>
      <b-col span="8">
        <div>col-8</div>
      </b-col>
    </b-row>
```
```html
    <!-- 3. 左右偏移： -->
    <b-row>
      <b-col span="4" offset="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4" offset="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4" offset="4">
        <div>col-4</div>
      </b-col>
    </b-row>
```
```html
    <!-- 4. 横向排列： -->
    <b-row justify="start"> 
      <!-- start around center between end -->
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
```
```html
    <!-- 5. 竖向排列： -->
    <b-row align="top">
      <!-- top middle bottom -->
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4 <br>text</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
```
```html
    <!-- 6. 响应式： -->
    <b-row >
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
    </b-row>
```

#### API
#### Row props
属性| 说明 | 类型 | 默认值
---|---|---|---
tag | 自定义元素标签 | String | 'div'
gutter | 栅格间距，单位 px，左右平分 | String / Number | -
align | flex 布局下的垂直对齐方式，可选值为top、middle、bottom | String | -
justify | flex 布局下的水平排列方式，可选值为	start、around、center、between、end | String | -

#### Col props
属性| 说明 | 类型 | 默认值
---|---|---|---
tag | 自定义元素标签 | String | 'div'
span | 栅格的占位格数，可选值为0~24的整数| String / Number | -
offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | String / Number | -
xs | <768px 响应式栅格 (:xs={span:24}) | Object | -
sm | 768px=< sm <992px 响应式栅格 | Object | -
md | 992px=< md <1200px 响应式栅格 | Object | -
lg | >=1200px 响应式栅格 | Object | -




