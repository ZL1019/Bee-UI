<template>
  <div class="b-cascader">
    <div class="b-cascader-trigger">
      <div v-if="$slots.default" @click="popVisiable = !popVisiable">
        <slot></slot>
      </div>
      <div v-else>
        <Bear-Input @on-click="popVisiable = !popVisiable" :value="result" clearable></Bear-Input>
      </div>
    </div>
    <div class="b-cascader-popover" v-if="popVisiable">
      <cascader-items :options="options" :selected="selected" @update:selected="updateSelected" :popover-height="popoverHeight"></cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from './cascader-items';
import Input from './input';
export default {
  name: 'bear-cascader',
  components: {
    CascaderItems,
    BearInput: Input,
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
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popVisiable: false,
    };
  },
  methods: {
    updateSelected(item) {
      this.$emit('update:selected', item);
      let targetItem = item[0];
      this.loadData(targetItem, res => {
        this.options.forEach(item => {
          if (item.id === targetItem.id) {
            this.$set(item, 'children', res);
          }
        });
      });
    },
  },

  computed: {
    result() {
      return this.selected.map(item => item.label).join('/');
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
    margin-top: 2px;
    background: #fff;
    border-radius: 4px;
    @extend .box-shadow;
  }
}
</style>