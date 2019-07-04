<template>
  <div :class="classes">
    <div class="b-card-header" v-if="$slots.header" :style="headerStyle">
      <slot name="header"></slot>
    </div>
    <div class="b-card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-card',
  data(){
    return {
      headerVisible: false
    }
  },
  props:{
    shadow:{
      type: String,
      default:'always',
      validator(value){
        return ['always','hover','never'].indexOf(value) > -1
      }
    },
    bodyStyle:{
      type: Object,
    },
    headerStyle:{
      type: Object,
    },
  },
  mounted(){
    console.log(this.$slots.header);
  },
  computed:{
    classes(){
      return {
        'b-card': true,
        'is-hover-shadow': this.shadow === 'hover',
        'is-always-shadow': this.shadow === 'always'
      }
    }
  }
};
</script>

<style lang="scss">
.b-card {
  color: #303133;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  transition: box-shadow 0.2s;
  &.is-always-shadow{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &.is-hover-shadow:hover{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .b-card-header{
    padding:18px 20px;
    border-bottom: 1px solid #ebeef5;
  }
  .b-card-body{
    font-size: 14px;
    padding: 20px;
  }
}
</style>