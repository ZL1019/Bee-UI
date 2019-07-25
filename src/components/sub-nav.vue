<template>
  <div class="b-sub-nav" v-click-outside="close">
    <div @click="visible = !visible" :class="classes">
      <div class="b-sub-nav-label">
        <slot name="title"></slot>
      </div>
      <div v-if="vertical" class="b-sub-nav-icon-vertical ">
        <icon name="down" :class="{'b-sub-nav-down-icon-active':visible}"></icon>
      </div>
      <div v-else class="b-sub-nav-icon">
        <icon name="right" :class="{'b-sub-nav-icon-active':visible}"></icon>
      </div>
    </div>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-leave="afterLeave" @after-enter="afterEnter">
        <div v-show="visible" :class="{'b-sub-nav-horizontal':true, vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div v-show="visible" class="b-sub-nav-horizontal">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import icon from './icon';
import ClickOutside from './click-outside.js';
export default {
  inject: ['root', 'vertical'],
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
        vertical: this.vertical,
        'b-sub-nav-title': true,
        'b-sub-nav-active': this.root.namePath.indexOf(this.name) > -1,
        'b-sub-nav-top-active':
          this.root.namePath.indexOf(this.name) === 0 && !this.vertical,
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
    enter(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener('transitionend', () => {
        done();
      });
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
      el.addEventListener('transitionend', () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = 'auto';
    },
    afterLeave(el) {
      el.style.height = 'auto';
    },
    close() {
      if(!this.vertical){
        this.visible = false;
      }   
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (!this.vertical) {
        this.closeSelf();
      }
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
    justify-content: space-between;
    .b-sub-nav-label {
      flex-shrink: 0;
      display: flex;
      margin-right:1em;
    }
    &:not(.vertical):hover {
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
    background: #fff;
    transition: height 0.3s ease-in-out;

    &.vertical {
      margin-left: 1em;
      position: static;
      box-shadow: none;
      border-radius: none;
      overflow: hidden;
    }
  }
  .b-sub-nav-horizontal .b-sub-nav-horizontal {
    top: 0;
    left: 100%;
    margin-left: 2px;
    &.vertical {
      margin-left: 1em;
    }
  }
  .b-sub-nav {
    .b-sub-nav-icon,
    .b-sub-nav-icon-vertical {
      display: flex;
      .b-sub-nav-icon-active {
        transition: all 0.1s ease-in-out;
        transform: rotate(-180deg);
      }
    }

    .b-sub-nav-title:hover {
      border-bottom: 2px transparent solid;
    }
  }
  .b-sub-nav-down-icon-active {
    transition: all 0.1s ease-in-out;
    transform: rotate(-180deg);
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

