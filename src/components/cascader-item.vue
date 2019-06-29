<template>
  <div class="b-cascader-item">
    {{optionItem.label}}
    <bear-cascader-item 
      v-if="optionItem.children" 
      v-for="(item,index) in optionItem.children" 
      :optionItem="item" 
      :key="index">
    </bear-cascader-item>
  </div>
</template>

<script>
export default {
  name: 'bear-cascader-item',
  props: {
    optionItem: {
      type: Object
    },
  },
};
</script>

<style lang="scss">
  .b-cascader-item{
    border:1px red solid;
    margin:10px;
  }
</style>