<template>
  <transition name="slide">
    <div class="slides-item" v-show="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'bear-slides-item',
  data(){
    return {
      visible: false
    }
  },
  props:{
    name: String,
    required: true
  },
  computed:{
    
  }
}
</script>

<style lang="scss">
  .slides-item{
    width:100%; 
    border:1px blue solid;
  }
  .slide-leave-active{
    position: absolute;
    top:0;
    left:0;
  }
  .slide-enter-active,.slide-leave-active{
    transition: all .5s;
  }
  .slide-enter{
    transform: translateX(100%);
  }
  .slide-leave-to{
    transform: translateX(-100%);
  }
</style>