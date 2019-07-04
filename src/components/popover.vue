<template>
  <div ref="popover" class="b-popover">
    <div v-if="show" ref="contentWrapper" :class="classes">
      <slot name="content" :close="close"></slot>
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
  mounted() {
    const { triggerWrapper } = this.$refs;
    if (this.trigger === 'click') {
      triggerWrapper.addEventListener('click', this.onClick);
    } else {
      triggerWrapper.addEventListener('mouseenter', this.open);
    }
  },
  beforeDestroy() {
    const { triggerWrapper } = this.$refs;
    if (this.trigger === 'click') {
      triggerWrapper.removeEventListener('click', this.onClick);
    } else {
      triggerWrapper.removeEventListener('mouseenter', this.open);
    }
    document.removeEventListener('click', this.onClickDocument);
  },
  methods: {
    locateContent() {
      const { contentWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let {
        top,
        left,
        width,
        height,
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      const positions = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY,
          left: left + window.scrollX + width,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + window.scrollY + height,
        },
      };
      contentWrapper.style.top = positions[this.position].top + 'px';
      contentWrapper.style.left = positions[this.position].left + 'px';
    },
    listenDocument() {
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
      document.removeEventListener('click', this.onClickDocument);
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
  display: inline-block;
}
.b-popover-content {
  width: 200px;
  position: absolute;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  padding: 8px 16px;
  word-break: break-all;
  color: #515a6e;
  &:before {
    content: '';
    display: block;
    border: 6px transparent solid;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -8px;
    &:before {
      top: 100%;
      border-bottom: none;
      border-top-color: white;
    }
  }
  &.position-bottom {
    margin-top: 8px;
    &:before {
      bottom: 100%;
      border-top: none;
      border-bottom-color: white;
    }
  }
  &.position-left {
    margin-left: -8px;
    transform: translateX(-100%);
    &:before {
      left: 100%;
      border-right: none;
      border-left-color: white;
    }
  }
  &.position-right {
    margin-left: 8px;
    &:before {
      right: 100%;
      border-left: none;
      border-right-color: white;
    }
  }
}
.b-popover-trigger {
  display: inline-block;
}
</style>