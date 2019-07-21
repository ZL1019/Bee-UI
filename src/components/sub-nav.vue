<template>
  <div class="b-sub-nav" v-click-outside="close">
    <div @click="visible = !visible" :class="classes">
      <div>
        <slot name="title"></slot>
      </div>
      <div class="b-sub-nav-icon">
        <icon v-if="visible" name="left"></icon>
        <icon v-else name="right"></icon>
      </div>
    </div>
    <div v-show="visible" class="b-sub-nav-horizontal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import icon from './icon';
import ClickOutside from './click-outside.js';
export default {
  inject: ['root'],
  directives: { ClickOutside },
  name: 'bear-sub-nav',
  components: {
    icon,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    classes() {
      return {
        'b-sub-nav-title': true,
        'b-sub-nav-active': this.root.namePath.indexOf(this.name) > -1,
        'b-sub-nav-top-active': this.root.namePath.indexOf(this.name) === 0,
      };
    },
  },
  props: {
    name: { type: String, required: true },
  },
  mounted() {
    this.names = this.$children.map(item => item.name);
  },
  methods: {
    close() {
      this.visible = false;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);

      this.closeSelf();

      this.$parent.updateNamePath && this.$parent.updateNamePath();
    },
    closeSelf() {
      let index = this.root.namePath.indexOf(this.name);
      if (index === this.root.namePath.length - 1) {
        this.close();
        this.closeParent();
      }
    },
    closeParent() {
      if (this.$parent.$options.name === 'bear-sub-nav') {
        this.$parent.visible = false;
        this.$parent.closeParent();
      }
    },
  },
};
</script>

<style lang="scss">
.b-sub-nav {
  position: relative;
  cursor: pointer;
  z-index: 2;
  .b-sub-nav-title {
    display: flex;
    border-bottom: 2px transparent solid;
    padding: 0 20px;
    transition: all 0.2s;
    align-items: center;
    div {
      flex-shrink: 0;
    }
    &:hover {
      color: #2d8cf0;
      border-bottom: 2px #2d8cf0 solid;
    }
    .b-sub-nav-icon {
      display: none;
    }
  }
  .b-sub-nav-active {
    color: #2d8cf0;
  }
  .b-sub-nav-top-active {
    border-bottom: 2px #2d8cf0 solid;
  }
  .b-sub-nav-horizontal {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .b-sub-nav-horizontal .b-sub-nav-horizontal {
    top: 0;
    left: 100%;
    margin-left: 2px;
  }
  .b-sub-nav {
    .b-sub-nav-icon {
      display: flex;
    }
    .b-sub-nav-title:hover {
      border-bottom: 2px transparent solid;
    }
  }
  .b-nav-item {
    transition: all 0.2s ease-in-out;
    &.active,
    &:hover {
      color: #2d8cf0;
      border-bottom-color: transparent;
    }
  }
}
</style>

