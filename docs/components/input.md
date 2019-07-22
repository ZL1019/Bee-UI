---
title: 输入框
---

#### 基础用法

<ClientOnly>
  <input-demos></input-demos>
</ClientOnly>


#### 示例代码
```html

  <!-- 基础用法 -->
  <b-input v-model="value1" placeholder="请输入..."></b-input>      

  <!-- 清空属性 -->
  <b-input v-model="value2" placeholder="请输入..." clearable></b-input>      

  <!-- 只读状态 -->
  <b-input v-model="value3" placeholder="请输入..." readonly></b-input>      

  <!-- 禁用状态： -->
  <b-input v-model="value4" placeholder="请输入..." disabled></b-input>      

  <!-- 错误状态： -->
  <b-input v-model="value5" placeholder="请输入..." error></b-input>      

  <!-- 文本类型： --> 
  <b-input v-model="value6" placeholder="请输入..." type="textarea"></b-input>      

  <!-- 自动高度： -->
  <b-input v-model="value7" placeholder="请输入..." type="textarea" autosize></b-input>     

  <script>
    export default {
      data() {
        return {
          value1: '',
          value2: '',
          value3: 'readonly',
          value4: 'disabled',
          value5: 'error',
          value6: '',
          value7: '',
        };
      },
    };
  </script>
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







