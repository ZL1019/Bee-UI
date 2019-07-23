<template>
  <div class="msgs">
    <div class="box">
      <span>基础用法：</span>
      <b-popover>
        <template slot="content">
          内容文字一
        </template>
        <b-button>click 激活</b-button>
      </b-popover>

      <b-popover trigger="hover" position="bottom">
        <template slot="content">
          内容文字二
        </template>
        <b-button>hover 激活</b-button>
      </b-popover>
    </div>

    <b-popover>
      <template slot="content" slot-scope={close}>
        内容文字一
        <b-button @click="close">关闭</b-button>
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
</template>

<script>
import Button from '../../../src/components/button';
import Popover from '../../../src/components/popover';

export default {
  components: {
    'b-button': Button,
    'b-popover': Popover,
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
