<template>
  <div class="b-cascader-items" :style="{height:popoverHeight}">
    <div class="b-cascader-items-left">
      <div v-for="(item,index) in options" :key="index" @click="leftItem = item" class="b-cascader-label">
        {{item.label}}
        <Icon v-if="item.children" style="margin-left:8px;" name="right" />
      </div>
    </div>
    <div class="b-cascader-items-right" v-if="rightItem">
      <bear-cascader-items :options="rightItem"></bear-cascader-items>
    </div>
  </div>
</template>

<script>

import Icon from './icon';

export default {
  name: 'bear-cascader-items',
  props: {
    options: {
      type: Array
    },
    popoverHeight:{
      type: [String,Number]
    }
  },
  components:{
    Icon
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
    height: 100%;
    display: flex;
    .b-cascader-items-left{
      height: 100%;
      padding:8px 0px;
      cursor: pointer;
      .b-cascader-label{
        padding:4px 16px;
        display: flex;
        align-items: center;
      }
      .b-cascader-label:hover{
        background:#f3f3f3;
      }
    }
    .b-cascader-items-right{
      border-left: 1px #e8eaec solid;
    }
  }
</style>