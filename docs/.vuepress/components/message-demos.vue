<template>
  <div class="msgs">
    <div class="box">
      <span>基础用法：</span>
      <b-button @click="open1">点击打开消息提示</b-button>
    </div>
    <div class="box">
      <span>可关闭：</span>
      <b-button @click="open2">点击打开消息提示</b-button>
    </div>
    <div class="box">
      <span>使用 HTML 片段：</span>
      <b-button @click="open3">点击打开消息提示</b-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import plugins from '../../../src/plugins';
import Button from '../../../src/components/button';
Vue.use(plugins);

export default {
  components: {
    'b-button': Button,
  },
  data() {
    return {};
  },
  methods: {
    open1() {
      this.$message('这是一条消息提示！');
    },
    open2() {
      this.$message('这是一条消息提示！', {
        duration: 3,
        showClose: true,
      });
    },
    open3() {
      this.$message('<strong>这是 strong 标签里面的内容</strong>', {
        enableHtml: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.msgs {
  margin-left: 16px;
  .box {
    margin-bottom: 20px;
  }
}
</style>
