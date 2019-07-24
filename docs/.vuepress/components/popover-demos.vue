<template>
  <div class="msgs">
    <div class="box1">
      <span>基础用法：</span>
      <b-popover>
        <template slot="content">
          内容文字一
        </template>
        <b-button>click 激活</b-button>
      </b-popover>

      <b-popover trigger="hover" style="margin-left:50px;">
        <template slot="content">
          内容文字二
        </template>
        <b-button>hover 激活</b-button>
      </b-popover>
    </div>

    <span>不同方位：</span>

    <div class="box2">
      <b-popover trigger="hover" id="top">
        <template slot="content">
          内容文字一
        </template>
        <b-button>上方</b-button>
      </b-popover>

      <b-popover position="bottom" trigger="hover" id="bottom">
        <template slot="content">
          内容文字一
        </template>
        <b-button>下方</b-button>
      </b-popover>

      <b-popover position="left" trigger="hover" id="left">
        <template slot="content">
          内容文字一
        </template>
        <b-button>左方</b-button>
      </b-popover>

      <b-popover position="right" trigger="hover" id="right">
        <template slot="content">
          内容文字一
        </template>
        <b-button>右方</b-button>
      </b-popover>
    </div>

    
    <div class="box3">
      <span>手动关闭：</span>
      <b-popover :content-style="contentStyle">
        <template slot="content" slot-scope={close}>
          内容文字一
          <b-button @click="close" style="margin-left:20px;">关闭</b-button>
        </template>
        <b-button>Click</b-button>
      </b-popover>
    </div>

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
  data() {
    return {
      contentStyle: {
        display: 'flex',
        'align-items': 'center',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.msgs {
  margin-left: 16px;
  .box1 {
  }
  .box2 {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    width: 200px;
    height: 200px;
    .b-popover#top {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .b-popover#bottom {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .b-popover#left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .b-popover#right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .box3{
    margin-top:160px;
  }
}
</style>
