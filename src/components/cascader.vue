<template>
  <div class="b-cascader">
    <div class="b-cascader-trigger" @click="popVisiable = !popVisiable">
      <slot></slot>
    </div>
    <div class="b-cascader-popover" v-if="popVisiable">
      <cascader-items :options="options" :popover-height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items';
export default {
  name: 'bear-cascader',
  components: {
    CascaderItems,
  },
  props: {
    options: {
      type: Array,
      default: [],
    },
    popoverHeight:{
      type: [String,Number]
    }
  },
  data() {
    return {
      popVisiable: false,
    };
  },
};
</script>

<style lang="scss">
  @import '../style/var.scss';
  .b-cascader{
    position: relative;
    .b-cascader-trigger{

    }
    .b-cascader-popover{
      position: absolute;
      top: 100%;
      left: 0;
      background: #fff;
      border-radius: 4px;
      @extend .box-shadow;
    }
  }
</style>