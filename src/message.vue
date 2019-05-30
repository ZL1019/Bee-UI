<template>
  <div class="b-message">
    <slot></slot>
    <span @click="manuallyClose" v-if="!autoClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'bear-message',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: () => {
            this.close();
          }
        }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    manuallyClose() {
      this.close();
      this.closeButton.callback();
    },
  },
};
</script>

<style lang="scss" scoped>
.b-message {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  line-height: 1.5;
  color: #515a6e;
  font-size: 14px;
}
</style>