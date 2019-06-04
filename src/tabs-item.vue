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
    }
  },
  data(){
    return {
      active: false
    }
  },
  mounted() {
    this.eventBus.$on('updateSelected',(name)=>{
      this.active = name === this.name
    })
  },
  computed:{
    classes(){
      return {
        'b-tabs-item': true,
        'b-tabs-item-active': this.active
      }
    }
  },
  methods: {
    onClick() {
      this.eventBus.$emit('updateSelected', this.name);
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
    transition: color 0.3s ease-in-out;
    color: #515a6e;
    &:hover{
      color:#57a3f3;
    }
  }
  .b-tabs-item-active{
    color: #2d8cf0;;
  }
</style>