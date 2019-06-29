<template>
  <div class="b-cascader-items">
    <div class="b-cascader-items-left">
      <div v-for="(item,index) in options" :key="index" @click="leftItem = item">
        {{item.label}}
      </div>
    </div>
    <div class="b-cascader-items-right" v-if="rightItem">
      <bear-cascader-items :options="rightItem"></bear-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-cascader-items',
  props: {
    options: {
      type: Array
    },
  },
  data(){
    return {
      leftItem: null,
    }
  },
  computed:{
    rightItem(){
      if(this.leftItem && this.leftItem.children){
        return this.leftItem.children
      }else{
        return null
      }
    }
  }
};
</script>

<style lang="scss">
  .b-cascader-items{
    display: flex;
    .b-cascader-items-left{
      border:1px red solid;
    }
  }
</style>