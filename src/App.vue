<template>
  <div id="app" style="padding:16px;">
    <br>
    <br>
    <!-- :load-data="loadData"  -->
    <b-card shadow='hover' :body-style="bodyStyle">
       <div slot="header">
         卡片名称23
       </div>
       <p>内容一</p>
       <p>内容二</p>
      <b-cascader :options.sync=options :load-data="loadData" trigger="hover" popover-height="180px" :selected.sync=selectedCascader>
          <!-- <b-button type="primary">Trigger</b-button> -->
      </b-cascader>
    </b-card>

    <!-- 
    {{selected}}
    <b-collapse :selected.sync="selected">
      <b-collapse-item name='a' title="标题一">内容 1</b-collapse-item>
      <b-collapse-item name='b' title="标题二">内容 2</b-collapse-item>
      <b-collapse-item name='c' title="标题三">内容 3</b-collapse-item>
    </b-collapse> -->

<div style="margin-left:50px;">
    <b-popover>
      <template slot="content" slot-scope={close}>
        内容文字一
        <b-button @click="close">close</b-button>
      </template>
      <b-button>上方</b-button>
    </b-popover>
    <b-popover position="bottom" trigger="hover">
      <template slot="content">
        Easily sync your GitHub projects with Travis CI and you’ll be testing your code in minutes! Sign Up The home of
        open source testing Over 900k open... </template>
      <b-button>下方</b-button>
    </b-popover>
    <br>
    <b-popover position="left" trigger="hover" style="margin-top:200px;">
      <template slot="content">
        内容文字三
      </template>
      <b-button>左方</b-button>
    </b-popover>
    <b-popover position="right" trigger="hover">
      <template slot="content">
        内容文字四
      </template>
      <b-button>右方</b-button>
    </b-popover>
</div>


    <!-- <div>
      <b-tabs v-model="selectedTab" type='card' @tab-click='tabClick'>
        <b-tabs-head>
          <b-tabs-item name="item1">
            标签一</b-tabs-item>
          <b-tabs-item :name="2">标签二</b-tabs-item>
          <b-tabs-item name="item3">标签三</b-tabs-item>
        </b-tabs-head>
        <b-tabs-body>
          <b-tabs-pane name="item1">内容一</b-tabs-pane>
          <b-tabs-pane :name="2">内容二</b-tabs-pane>
          <b-tabs-pane name="item3">内容三</b-tabs-pane>
        </b-tabs-body>
      </b-tabs>
    </div> -->

    <!-- <div class="grid" style="margin:30px; vertical-align: middle; border:1px solid #eee;">
      <div style="margin-bottom:20px;">Grid: </div>
      <b-row tag='div' style='margin-bottom: 20px;'>
        <b-col :xs={span:24} :md={span:8} :lg={span:4}>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col :xs={span:24} :md={span:8} :lg={span:4}>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col :xs={span:24} :md={span:8} :lg={span:4}>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col :xs={span:24} :md={span:8} :lg={span:4}>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col :xs={span:24} :md={span:8} :lg={span:4}>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col :xs={span:24} :md={span:8} :lg={span:4}>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
      </b-row>
      <b-row gutter=20 style='margin-bottom: 20px;'>
        <b-col span="2">
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col span="4">
          <div style='background-color:#2db7f5;'>col 2</div>
        </b-col>
        <b-col span="6">
          <div style='background-color:#2db7f5;'>col 3</div>
        </b-col>
      </b-row>
      <b-row justify="around" style='margin-bottom: 20px;'>
        <b-col span="4">
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col span="4">
          <div style='background-color:#2db7f5;'>col 2</div>
        </b-col>
        <b-col span="4">
          <div style='background-color:#2db7f5;'>col 3</div>
        </b-col>
      
      </b-row>
      <b-row style='margin-bottom: 20px;'>
        <b-col span="4" offset=2>
          <div style='background-color:#2db7f5;'>col 1</div>
        </b-col>
        <b-col span="2" offset=2>
          <div style='background-color:#2db7f5;'>col 2</div>
        </b-col>
        <b-col span="2" offset=2>
          <div style='background-color:#2db7f5;'>col 3</div>
        </b-col>
        <b-col span="2" offset=1>
          <div style='background-color:#2db7f5;'>col 4</div>
        </b-col>
        <b-col span="4" offset=3>
          <div style='background-color:#2db7f5;'>col 5</div>
        </b-col>
      </b-row>
    </div>
-->

    <!-- <div class="buttons">
      <span style="margin-right:20px;">Button: </span>
      <b-button>Default</b-button>
      <b-button disabled>Disabled</b-button>
      <b-button type="primary" icon-name="set" icon-position="right">Primary</b-button>
      <b-button type="info" icon-name="search">Information</b-button>
      <b-button type="success" icon-name="download">Success</b-button>
      <b-button type="info" icon-name="download" @click="download" :loading="isLoading" circle></b-button>
      <b-button-group>
        <b-button icon-name="left">上一页</b-button>
        <b-button>当前页</b-button>
        <b-button icon-name="right" icon-position="right">下一页</b-button>
      </b-button-group>
    </div>
    <div class="inputs" style="margin:30px 0; vertical-align: middle;">
      <span style="margin-right:20px;" @click="focus">Input: </span>
      <b-input xx="qq" autocomplete="on" autofocus ref="input" clearable v-model="value1" @on-enter="inputEnter" @on-focus="inputFocus" @on-blur="inputBlur"></b-input>
      <b-input clearable v-model="value2" @on-change="inputChange" type="password"></b-input>
      <b-input value="disabled" disabled></b-input>
      <b-input value="readonly" readonly></b-input>
      <b-input value="error" error @on-keypress="inputKeyup"></b-input>
      <b-input clearable v-model="value3" type="textarea" :rows="5" :autosize="{minRows:2,maxRows:8}" ></b-input>
    </div> -->

    <!-- <b-sticky>
      <b-button>STICKY</b-button>
    </b-sticky> -->

  </div>
</template>

<script>
import cityies from './assets/city_data';
import { setTimeout } from 'timers';
function ajax(parentId = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = cityies.filter(item => item.parent_id === parentId);
      // result.forEach( node => {
      //   if(cityies.filter(item => item.parent_id === node.id).length >0 ){
      //     node.isLeaf = false
      //   }else{
      //     node.isLeaf = true
      //   }
      // })
      resolve(result);
    }, 200);
  });
}
export default {
  name: 'app',
  components: {},
  data() {
    return {
      bodyStyle:{
        // padding:"10px",
      },
      selectedCascader: [],
      options: [],
      isLoading: false,
      isDisabled: true,
      value1: '',
      value2: '',
      value3: '',
      selectedTab: 'item3',
      selected: ['a', 'b'],
      qqq: cityies,
      testData: [
        {
          id: 1,
          label: '江苏',
          parent_id: 0,
          children: [
            {
              id: 2,
              label: '苏州',
              parent_id: 1,
              children: [
                {
                  id: 3,
                  label: '姑苏',
                  parent_id: 2,
                },
              ],
            },
          ],
        },
      ],
    };
  },
  watch: {
    selectedTab(newValue, oldValue) {
      // console.log('oldValue: ', oldValue);
      // console.log('newValue: ', newValue);
    },
  },
  mounted() {
    // this.options = cityies;
    ajax().then(res => {
      this.options = [...res];
    });
  },
  methods: {
    loadData({ id }, callback) {
      console.log('~~加载数据');
      ajax(id).then(res => {
        callback(res);
      });
    },
    focus() {
      this.$refs.input.focus();
    },
    inputKeyup(value) {
      console.log('keyup: ', value);
    },
    inputBlur(value) {
      console.log('blur: ', value);
    },
    inputFocus(value) {
      console.log('focus: ', value);
    },
    inputEnter(value) {
      console.log('enter: ', value);
    },
    inputChange(value) {
      console.log('change: ', value);
    },
    tabClick(a, b) {
      // console.log('b: ', b);
      // console.log('a: ', a);
    },
    changeSelected(name) {
      this.selectedTab = name;
    },
    xxx() {
      console.log('xxx');
      console.log(this.selectedTab);
    },
    openMsg() {
      this.$message(`网络错误!!! ${(Math.random() * 100).toFixed(2)}`, {
        top: 24,
        enableHtml: true,
        duration: 100,
        showClose: true,
        onClose: () => {
          console.log('用户关闭 message 之后的回调');
        },
      });
    },
    download() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
#app {
}
</style>
