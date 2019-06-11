<template>
  <div class="b-popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" :class="classes" v-if="show">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper" class="b-popover-trigger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-popover',
  props: {
    title: {
      type: [Number, String],
    },
    content: {
      type: [Number, String],
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1;
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    classes() {
      return {
        'b-popover-content': true,
        [`position-${this.position}`]: true,
      };
    },
  },
  methods: {
    locateContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        left,
        top,
        width,
        height,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      if (this.position === 'top') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      } else if (this.position === 'bottom') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + height + 'px';
      } else if (this.position === 'left') {
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      } else {
        this.$refs.contentWrapper.style.left = left + window.scrollX + width + 'px';
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
      }
    },
    listenDocument() {
      console.log('++ 新增监听器');
      document.addEventListener('click', this.onClickDocument);
    },
    onClickDocument(event) {
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper.contains(event.target) ||
          this.$refs.popover.contains(event.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.show = true;
      this.$nextTick(() => {
        this.locateContent();
        this.listenDocument();
      });
    },
    close() {
      this.show = false;
      console.log('关闭 ');
      document.removeEventListener('click', this.onClickDocument);
      console.log('-- 移除监听器');
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.show) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>

<style lang="scss">
.b-popover {
  position: relative;
  top: 50px;
  display: inline-block;
}
.b-popover-content {
  position: absolute;
  
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  
  &.position-top {
    transform: translateY(-100%);
    margin-top: -8px;
    &:before {
      content: '';
      display: block;
      border: 6px transparent solid;
      border-top-color: white;
      position: absolute;
      top: 100%;
    }
  }
  &.position-bottom {
    margin-top: 8px;
    &:before {
      content: '';
      display: block;
      border: 6px transparent solid;
      border-bottom-color: white;
      position: absolute;
      bottom: 100%;
    }
  }
  &.position-left {
    margin-left: -8px;
    transform: translateX(-100%);
    &:before {
      content: '';
      display: block;
      border: 6px transparent solid;
      border-left-color: white;
      position: absolute;
      left:100%;
    }
  }
  &.position-right {
    margin-left: 8px;
    &:before {
      content: '';
      display: block;
      border: 6px transparent solid;
      border-right-color: white;
      position: absolute;
      right:100%;
    }
  }
}
.b-popover-trigger {
  display: inline-block;
}
</style>