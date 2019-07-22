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
#### Input props
属性| 说明 | 类型 | 默认值
---|---|---|---
type | 类型：textarea、text、password、email、url、date| String | text
value | 绑定的值，可使用 v-model 双向绑定 | String / Number | 空
placeholder | 占位文本	 | String | -
clearable | 是否显示清空按钮	 | Boolean | false
readonly | 设置输入框为只读 | Boolean | false
disabled | 设置输入框为禁用状态	 | Boolean | false
error | 设置输入框为错误状态	 | Boolean | false
maxlength | 最大输入长度	 | Number | -
autofocus | 自动获取焦点	 | Boolean | false
autocomplete | 原生的自动完成功能		 | String | 'off'
rows | 文本域默认行数，仅在 textarea 类型下有效	 | Number | 2
autosize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } | Boolean / Object	 | false

#### Input events
属性| 说明 | 返回值 
---|---|---|---
on-enter |按下回车键时触发|	无
on-focus	|输入框聚焦时触发	|无
on-blur	|输入框失去焦点时触发|	无
on-change	|数据改变时触发|	event
on-keyup	|原生的 keyup 事件|	event
on-keydown	|原生的 keydown 事件|	event
on-keypress	|原生的 keypress 事件|	event







