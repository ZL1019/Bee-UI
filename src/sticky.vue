<template>
  <div class="b-sticky-wrapper" ref="wrapper" :style="{height}">
    <div :class=classes :style="{width, top:`${top}px`}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-sticky',
  data() {
    return {
      sticky: false,
      width: undefined,
      height: undefined,
    };
  },
  props: {
    top: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    classes() {
      return {
        'b-sticky-content': true,
        'b-sticky-active': this.sticky,
      };
    },
  },
  mounted() {
    this.windowScrollHandler();
    window.addEventListener('scroll', this.windowScrollHandler);
  },
  methods: {
    windowScrollHandler() {
      if (window.scrollY > this.getTop()) {
        this.setWidthHeight();
        window.addEventListener('resize', this.setWidthHeight);
        this.sticky = true;
      } else {
        this.sticky = false;
        [this.height, this.width] = [undefined, undefined];
      }
    },
    getTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY - this.top;
    },
    setWidthHeight() {
      let { width, height } = this.$refs.wrapper.getBoundingClientRect();
      [this.height, this.width] = [height + 'px', width + 'px'];
    },
    destroy() {
      this.$el.remove();
      this.$destroy();
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setWidthHeight);
    window.removeEventListener('scroll', this.windowScrollHandler);
  },
};
</script>

<style lang="scss">
.b-sticky-wrapper {
  border: 1px red solid;
  .b-sticky-active {
    position: fixed;
  }
  .b-sticky-content {
    border: 1px blue solid;
    width: 100%;
  }
}
</style>