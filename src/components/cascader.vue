<template>
  <div class="b-cascader">
    <div class="cascader-trigger">
      <slot></slot>
    </div>
    <div class="cascader-pop">
      <div v-for="(item,index) in options" :key="index">
        <cascader-item :option-item="item"></cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './cascader-item';
export default {
  name: 'bear-cascader',
  components: {
    CascaderItem,
  },
  props: {
    options: {
      type: Array,
      default: [],
    },
  },
};
</script>