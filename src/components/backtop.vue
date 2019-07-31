<template>
  <transition name="fade-in">
    <div 
      v-if="visible" 
      class="b-backtop" 
      @click.stop="onClick" 
      :style="{
        right:`${this.right}px`,
        bottom:`${this.bottom}px`}"
      >
      <slot>
        <b-icon 
          name="down" 
          color="#409eff" 
          style="transform: rotate(180deg)">
        </b-icon>
      </slot>
    </div>
  </transition>
</template>

<script>

import Icon from './icon'
import { throttle } from 'throttle-debounce';

export default {
  name: 'bear-backtop',
  components:{ 
    'b-icon':Icon
  },
  data() {
    return {
      el: null,
      visible: false,
      container: null   
    }
  },
  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    document.addEventListener('scroll', this.throttledScrollHandler);
  },
  props: {
    target: {
      type: String,
    },
    right: {
      type:Number,
      default:40
    },
    bottom: {
      type:Number,
      default:40
    },
    visibilityHeight: {
      type: Number,
      default: 200,
    },
  },
  methods: {
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },
    onScroll() {
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },
    onClick(e){
      this.scrollToTop()
      this.$emit('click',e)
    },
    scrollToTop(){
      let el = this.el
      let step = 10
      let intervalId = setInterval(() => {
        if(el.scrollTop<=0){
          clearInterval(intervalId)
          return
        }
        step += 10
        el.scrollTop -= step
      }, 20);
    },
    beforeDestroy() {
      this.container.removeEventListener('scroll',this.throttledScrollHandler)
    },
  },
};
</script>

<style lang="scss" scoped>
.b-backtop {
  position: fixed;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:#fff;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  cursor:pointer;
  display: flex;
  align-items: center;
  justify-content:center;
  &:hover{
    background-color:#f2f6fc;
  }
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.3s cubic-bezier(.18,1.06,.51,.22);
}
.fade-in-enter .fade-in-leave-to{
  opacity:0;
}
</style>
