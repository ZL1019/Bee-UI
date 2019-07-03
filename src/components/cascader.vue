<template>
  <div class="b-cascader">
    <bear-popover position="bottom" :trigger="trigger">
      <template slot="content">
        <div class="b-cascader-popover">
          <cascader-items :options="options" :selected="selected" :load-data="loadData" @update:selected="updateSelected" :popover-height="popoverHeight">
          </cascader-items>
        </div>
      </template>
      <div class="b-cascader-trigger">
        <div v-if="$slots.default" @click="toggle">
          <slot></slot>
        </div>
        <div v-else>
          <Bear-Input :value="result" clearable></Bear-Input>
        </div>
      </div>
    </bear-popover>

  </div>
</template>

<script>
import BearInput from './input';
import BearPopover from './popover';
import CascaderItems from './cascader-items';

export default {
  name: 'bear-cascader',
  components: {
    BearInput,
    BearPopover,
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
    loadData: {
      type: Function,
    },
    trigger:{
      type: String,
      default: 'click',
      validator(value){
        return ['click','hover'].indexOf(value) > -1
      }
    }
  },
  data() {
    return {
      popVisible: false,
    };
  },
  methods: {
    open() {
      this.popVisible = true;
    },
    close() {
      this.popVisible = false;
    },
    toggle() {
      if (this.popVisible) {
        this.close();
      } else {
        this.open();
      }
    },
    updateSelected(item) {
      this.$emit('update:selected', item);
      let clickedItem = item[item.length - 1];

      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };

      let complex = (children, id) => {
        let noChildren = [];
        let haveChildren = [];
        children.forEach(item => {
          if (item.children) {
            haveChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });

        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(haveChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < haveChildren.length; i++) {
              found = complex(haveChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };

      if (!clickedItem.isLeaf) {
        this.loadData &&
          this.loadData(clickedItem, res => {
            let copy = JSON.parse(JSON.stringify(this.options));
            let targetItem = complex(copy, clickedItem.id);
            targetItem.children = res;
            this.$emit('update:options', copy);
          });
      }
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
.b-popover-content {
  width: auto !important;
}
.b-cascader {
  // position: relative;

  .b-cascader-popover {
    // position: absolute;
    // top: 100%;
    // left: 0;
    margin-top: 2px;
    background: #fff;
    border-radius: 4px;
    @extend .box-shadow;
  }
}
</style>