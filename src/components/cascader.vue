<template>
  <div class="b-cascader">
    <div class="b-cascader-trigger" @click="popVisiable = !popVisiable" >
      <slot></slot>
    </div>
    <div class="b-cascader-popover" v-if="popVisiable">
      <cascader-items :options="options" :selected="selected" @updateSelected="updateSelected" :popover-height="popoverHeight"></cascader-items>
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
      default: () => [],
    },
    popoverHeight: {
      type: [String, Number],
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      popVisiable: false,
    };
  },
  methods: {
    updateSelected(item) {
      this.$emit('updateSelected', item);
    },
  },
};
</script>

<style lang="scss">
@import '../style/var.scss';
.b-cascader {
  position: relative;
  .b-cascader-popover {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border-radius: 4px;
    @extend .box-shadow;
  }
}
</style>