<template>
  <div @click="onClick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bear-tabs-item',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String , Number],
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  data(){
    return {
      active: false
    }
  },
  mounted() {
    this.eventBus.$on('updateSelected',(name)=>{
      // console.log('tabs-item 接收到 updateSelected');
      this.active = name === this.name
    })
  },
  computed:{
    classes(){
      return {
        'b-tabs-item': true,
        'b-tabs-item-active': this.active,
        'b-tabs-item-disabled': this.disabled
      }
    }
  },
  methods: {
    onClick() {
      this.eventBus.$emit('updateSelected', this.name, this);
      this.eventBus.$emit('tabItemClick',this) 
    }
  },
};
</script>

<style lang="scss">
  .b-tabs-item{
    padding:8px 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    line-height: 1.5;
    transition: color 0.3s ease-in-out;
    color: #515a6e;
    
    &:not(:last-child){
      margin-right:16px;
    }
    &:hover{
      color:#57a3f3;
    }

  }
  .b-tabs-item-active{
    color: #2d8cf0;;
  }
  .b-tabs-item-disabled{

    pointer-events: none;
    color: #ccc;
  }
</style>