<template>
  <transition name="slide">
    <div :class="classes" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bear-slides-item',
  data() {
    return {
      visible: false,
      reverse: false,
    };
  },
  props: {
    name: { type: String, required: true },
    transitionName: { type: String, default: '' },  
  },

  computed: {
    classes() {
      return {
        'slides-item': true,
        'slides-item-reverse': this.reverse,
      };
    },
  },
};
</script>

<style lang="scss">
.slides-item {
  width: 100%;
  border: 1px blue solid;
}
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.slides-item-reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.slides-item-reverse {
  transform: translateX(100%);
}
</style>