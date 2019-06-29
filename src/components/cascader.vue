<template>
  <div class="b-cascader">
    <div class="cascader-trigger" @click="popVisiable = !popVisiable">
      <slot></slot>
    </div>
    <div class="cascader-pop" v-if="popVisiable">
      <cascader-items :options="options"></cascader-items>
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
  },
  data() {
    return {
      popVisiable: false,
    };
  },
};
</script>