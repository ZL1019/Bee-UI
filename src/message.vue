<template>
  <div id="xxx" class="b-message" :style="{top:`${this.top}px`}">
    <div class="b-message-content">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div v-if="showClose" @click="close" class="b-message-close">
      <Icon name="close" fill="#999" class="b-message-icon" />
    </div>
  </div>
</template>

<script>

import Icon from './icon';

export default {
  name: 'bear-message',
  components: { Icon },
  props: {
    top:{
      type: Number,
      default: 24
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3
    },
    onClose: {
      type: Function,
      default() {
        return () => {
          this.close()
        }
      }
    }
  },
  mounted() {
    console.log(this);
    this.autoClose();
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
      if (this.onClose && typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    autoClose() {
      setTimeout(() => {
        this.close();
      }, this.duration * 1000)
    }
  }
};
</script>

<style lang="scss" scoped>
.b-message {
  @keyframes showMessage{
    from {
      top: 0;
    }
    to{
      top:24px;
    }
  }
  animation: showMessage 0.2s ease-out;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  line-height: 1.5;
  color: #515a6e;
  font-size: 14px;
  display: flex;
  align-items: center;
  .b-message-content{
    padding:4px 8px;
  }
  .b-message-close {
    cursor: pointer;
    padding:8px;
    display: flex;
    align-items: center;
    &:hover {
      .b-message-icon{
        fill: #333;
      }    
    }
  }
}
</style>