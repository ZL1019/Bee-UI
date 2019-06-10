<template>
  <div class="b-popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="b-poppover-pop" v-if="show">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
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
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    locateContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
      this.$refs.contentWrapper.style.top = top + window.scrollY +'px';
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
  border: 1px blue solid;
  top: 50px;
  .b-poppover-trigger {
    border: 1px green solid;
  }
}
.b-poppover-pop {
  position: absolute;
  border: 1px red solid;
  transform: translateY(-100%);
}
</style>