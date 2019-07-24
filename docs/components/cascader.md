---
title: 级联选择器
---

#### 基础用法

<ClientOnly>
  <cascader-demos></cascader-demos>
</ClientOnly>

#### 示例代码

```html
    <!-- 基础用法 -->
    <b-cascader 
      :options.sync="options1" 
      :selected.sync="selected1"
      placeholder="请选择相应城市"
    >
    </b-cascader>

    <!-- 动态加载 -->
    <b-cascader
      :options.sync="options2"
      :selected.sync="selected2"
      placeholder="请选择相应城市"
      :load-data="loadData"
    >
    </b-cascader>

    <script>
      export default {
        data() {
          return {      
            selected1: [],
            selected2: [],
            options1: [
              { id: 1, label: '江苏', children: [{ id: 2, label: '苏州', children: [{ id: 3, label: '姑苏'}]}]},
              { id: 4, label: '浙江', children: [{ id: 5, label: '杭州', children: [{ id: 6, label: '西湖'}]}]}
            ],
            options2: []
          }
        },
        methods: {
          loadData({ id }, callback) {
            ajax(id).then(res => {
              callback(res);
            });
          },
        },
      };
    </script>
```

#### API

#### Cascader props

| 属性 | 说明                              | 类型            | 默认值 |
| ---- | --------------------------------- | --------------- | ------ |
| options | 要渲染的源数据 | Array | -      |
| selected | 选中的数据 | Array | -      |
| placeholder | 占位文本 | String | -      |
| clearable | 是否显示清空按钮 | Boolean | true     |
| popover-height | 悬浮框的高度 | String / Number | 180     |
| trigger | 触发悬浮框的方式 hover、click | String | 'click'     |
| loadData | 动态获取数据，第二个参数为回调函数，函数参数为 动态获取的数据 | Function | - |

