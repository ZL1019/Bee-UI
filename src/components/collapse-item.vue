<template>
  <div class="b-collapse-item">
    <div @click="onClick" :class="classes">
      <icon name="right" :class="iconClasses"></icon>
      <span>{{title}}</span>  
    </div>
    <div v-show="open" class="b-collapse-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import icon from './icon'

export default {
  name: 'bear-collapse-item',
  components:{ icon },
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    classes() {
      return {
        'b-collapse-item-title': true,
        'b-collapse-item-title-last': !this.open,
      };
    },
    iconClasses(){
      return {
        'b-collapse-icon': true,
        'b-collapse-icon-open': this.open
      }
    }
  },
  mounted() {
    this.eventBus.$on('updateSelected', names => {
      if (names.indexOf(this.name) > -1) {
        this.open = true;
      } else {
        this.open = false;
      }
    });
  },
  methods: {
    onClick() {
      if (this.open) {
        this.eventBus.$emit('removeSelected', this.name);
      } else {
        this.eventBus.$emit('addSelected', this.name);
      }
    },
  },
};
</script>

<style lang="scss">
.b-collapse-item {
  > .b-collapse-item-title {
    cursor: pointer;
    padding: 8px 16px;
    margin: -1px -1px 0;
    border: 1px solid #dcdee2;
    color: #666;
    font-size: 12px;
    line-height: 1.5;
    display: flex;
    align-items: center;
    .b-collapse-icon{
      transition: transform 0.1s ease-in-out;
    }
    .b-collapse-icon-open{
      transform: rotate(90deg);
    }
    span{
      margin-left:8px;
    }
  }
  &:first-child {
    > .b-collapse-item-title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .b-collapse-item-title.b-collapse-item-title-last {
      margin-bottom: -1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .b-collapse-item-content {
    color: #515a6e;
    font-size: 12px;
    padding: 8px 16px;
  }
}
</style>