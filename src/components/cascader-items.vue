<template>
  <div class="b-cascader-items" :style="{height:popoverHeight}">
    <div class="b-cascader-items-left">
      <div v-for="(item,index) in options" :key="index" @click="onClick(item)" class="b-cascader-label">
        {{item.label}}
        <Icon v-if="item.children" style="margin-left:8px;" name="right" />
      </div>
    </div>
    <div class="b-cascader-items-right" v-if="rightItem">
      <bear-cascader-items :options="rightItem" :level="level+1" :selected="selected" @updateSelected="onUpdateSelected"></bear-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon';

export default {
  name: 'bear-cascader-items',
  props: {
    options: {
      type: Array,
    },
    popoverHeight: {
      type: [String, Number],
    },
    selected: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      leftItem: null,
    };
  },
  computed: {
    rightItem() {
      let currentSelected = this.selected[this.level]
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    },
  },
  methods: {
    onClick(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level+1)
      this.$emit('updateSelected', copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit('updateSelected', newSelected);
    },
  },
};
</script>

<style lang="scss">
.b-cascader-items {
  height: 100%;
  display: flex;
  .b-cascader-items-left {
    height: 100%;
    padding: 8px 0px;
    cursor: pointer;
    .b-cascader-label {
      padding: 4px 16px;
      display: flex;
      align-items: center;
    }
    .b-cascader-label:hover {
      background: #f3f3f3;
    }
  }
  .b-cascader-items-right {
    border-left: 1px #e8eaec solid;
  }
}
</style>