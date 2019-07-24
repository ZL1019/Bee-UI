<template>
  <div :class="classes">
    <b-popover position="bottom" :trigger="trigger" :content-style="contentStyle">
      <template slot="content" slot-scope={close}>
        <cascader-items @close="close" :options="options" :selected="selected" :load-data="loadData" :load-item="loadItem" @update:selected="updateSelected" :popover-height="popoverHeight">
        </cascader-items>
      </template>
      <div class="b-cascader-trigger">
        <div v-if="$slots.default">
          <slot></slot>
        </div>
        <div v-else>
          <b-input :value="result" readonly style="pointer-events:none;" placeholder="请选择"></b-input>
          <b-icon @click.stop="clear" name="close" class="b-cascader-icon-close" />
        </div>
      </div>
    </b-popover>
  </div>
</template>

<script>
import BIcon from './icon';
import BInput from './input';
import BPopover from './popover';
import CascaderItems from './cascader-items';

export default {
  name: 'bear-cascader',
  components: {
    BIcon,
    BInput,
    BPopover,
    CascaderItems,
  },
  props: {
    loadData: {
      type: Function,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: Array,
      default: () => [],
    },
    popoverHeight: {
      type: [String, Number],
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      loadItem: {},
      contentStyle: {
        width: 'auto',
        padding: '0px',
      }  
    };
  },
  mounted() {},
  methods: {
    clear() {
      this.$emit('update:selected', []);
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
          item.children ? haveChildren.push(item) : noChildren.push(item);
        });

        let found = simplest(noChildren, id);

        if (!found) {
          found = simplest(haveChildren, id);
          if (!found) {
            for (let i = 0; i < haveChildren.length; i++) {
              found = complex(haveChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          } else {
            return found;
          }
        } else {
          return found;
        }
      };

      let updateOptions = res => {
        this.loadItem = {};
        let copy = JSON.parse(JSON.stringify(this.options));
        let targetItem = complex(copy, clickedItem.id);
        targetItem.children = res;
        this.$emit('update:options', copy);
      };
      if (!clickedItem.isLeaf && this.loadData) {
        this.loadData(clickedItem, updateOptions);
        this.loadItem = clickedItem;
      }
    },
  },

  computed: {
    result() {
      return this.selected.map(item => item.label).join(' / ');
    },
    classes() {
      return {
        'b-cascader': true,
        'b-cascader-show-close': this.clearable && !!(this.result + ''),
      };
    },
  },
};
</script>

<style lang="scss">
.b-cascader {
  color: #515a6e;
  display: inline-block;
  background: #fff;
  .b-cascader-trigger {
    cursor: pointer;
  }
  .b-cascader-icon-close {
    display: none;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    cursor: pointer;
    fill: rgba(0, 0, 0, 0.45);
  }
  &.b-cascader-show-close:hover,
  &.b-cascader-show-close:focus {
    .b-cascader-icon-close {
      display: block;
    }
  }
}
</style>