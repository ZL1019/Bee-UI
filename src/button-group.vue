<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
  import button from './button.vue'
  export default {
    name: "bear-button-group",
    components:{
      'b-button':button
    }
  }
</script>

<style scoped lang="scss">
  .button-group{
    display: inline-flex;
    &>.b-btn{
      border-radius:0;
      &:not(first-child){
        margin-left:-1px;
      }
      &:first-child{
        border-top-left-radius:var(--btn-radius);
        border-bottom-left-radius:var(--btn-radius);
      }
      &:last-child{
        border-top-right-radius:var(--btn-radius);
        border-bottom-right-radius:var(--btn-radius);
      }
    }
    >.b-btn:hover{
      position: relative;
      z-index: 1;
    }
  }
</style>