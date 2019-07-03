<template>
  <div class="b-cascader-items" :style="{height:popoverHeight}">
    <div class="b-cascader-items-left">
      <div v-for="(item,index) in options" :key="index" @click="onClick(item)" class="b-cascader-label">
        <span class="b-cascader-label-text">{{item.label}}</span>
        <bear-icon v-if="loadData ? !item.isLeaf : item.children" name="right" class="b-cascader-label-icon" />
      </div>
    </div>
    <div class="b-cascader-items-right" v-if="rightItem">
      <bear-cascader-items :level="level+1" :options="rightItem" :selected="selected" :load-data="loadData" @update:selected="updateSelected">
      </bear-cascader-items>
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
    loadData: {
      type: Function,
    },
  },
  components: {
    'bear-icon': Icon,
  },
  data() {
    return {
      leftItem: null,
    };
  },
  computed: {
    rightItem() {
      if (this.selected[this.level]) {
        let selected = this.options.filter(
          item => item.id === this.selected[this.level].id,
        );
        if (
          selected &&
          selected[0].children &&
          selected[0].children.length > 0
        ) {
          return selected[0].children;
        }
      }
      // let currentSelected = this.selected[this.level];
      // if (currentSelected && currentSelected.children) {
      //   return currentSelected.children;
      // } else {
      //   return null;
      // }
    },
  },
  methods: {
    onClick(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit('update:selected', copy);
    },
    updateSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    },
    updateOptions() {},
  },
};
</script>

<style lang="scss">
.b-cascader-items {
  height: 100%;
  display: flex;
  .b-cascader-items-left {
    overflow: auto;
    height: 100%;
    padding: 8px 0px;
    cursor: pointer;
    .b-cascader-label {
      padding: 4px 16px;
      display: flex;
      align-items: center;
      .b-cascader-label-text {
        margin-right: 1em;
      }
      .b-cascader-label-icon {
        margin-left: auto;
      }
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