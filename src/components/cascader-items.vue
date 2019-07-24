<template>
  <div class="b-cascader-items" :style="{height:popoverHeight+'px'}">
    <div class="b-cascader-items-left">
      <div v-for="(item,index) in options" :key="index" @click="onClick(item)" class="b-cascader-label">
        <span 
          class="b-cascader-label-text" 
          :class="{'label-active': labels.indexOf(item.label) > -1}"
          >
          {{item.label}}
        </span>
        <bear-icon v-if="loadData ? loadItem.id === item.id : null" name="loading" class="b-cascader-loading-icon" />
        <template v-else>
          <bear-icon v-if="loadData ? !item.isLeaf : item.children" name="right" 
          class="b-cascader-arrow-icon" 
          :class="{'icon-active': labels.indexOf(item.label) > -1}"
          />
        </template>
      </div>
    </div>
    <div class="b-cascader-items-right" v-if="rightItem">
      <bear-cascader-items @close="$emit('close')" :level="level+1" :options="rightItem" :selected="selected" :load-data="loadData" :load-item="loadItem" @update:selected="updateSelected">
      </bear-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from './icon';

export default {
  name: 'bear-cascader-items',
  inject: ['root'],
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
    loadItem:{
      type: Object,
      default: () => {{}}
    }
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
    labels(){
      return this.root.selected.map(item => item.label)
    },

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
    },
  },
  methods: {
    onClick(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit('update:selected', copy);
      if((this.loadData && item.isLeaf) || (!this.loadData && !item.children)){
        this.$emit('close')
      }    
    },
    updateSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    },
    updateOptions() {},
  },
};
</script>

<style lang="scss">

@import '../style/var.scss';

.b-cascader-items {
  height: 100%;
  display: flex;
  overflow: hidden;
  padding:8px 0;
  .b-cascader-items-left {
    overflow: auto;
    height: 100%;
    cursor: pointer;
    .b-cascader-label {
      padding: 4px 16px 4px 24px;
      display: flex;
      align-items: center;
      .b-cascader-label-text {
        margin-right: 2em;
        line-height: 1.5;
      }
      .label-active{
        color: #2d8cf0;
      }
      .b-cascader-arrow-icon {
        margin-left: auto;
      }
      .icon-active{
        fill: #2d8cf0;
      }
      .b-cascader-loading-icon{
        margin-left: auto;
        animation: spin 1.5s linear infinite;
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