<template>
  <div ref="tabsHead" class="b-tabs-head">
    <slot></slot>
    <div ref="tabsLine" class="b-tabs-line"></div>
  </div>
</template>

<script>
export default {
  name: 'bear-tabs-head',
  inject: ['eventBus'],
  mounted(){
    this.eventBus.$on('updateSelected',(tabName,tab)=>{
      let {width,left} = tab.$el.getBoundingClientRect()
      let {left:headLeft} = this.$refs.tabsHead.getBoundingClientRect()

      console.log('left: ', left);
      console.log('width: ', width);
      this.$refs.tabsLine.style.width = `${width}px`
      this.$refs.tabsLine.style.left = `${left - headLeft}px`

    })
  }
}
</script>

<style lang="scss">
  .b-tabs-head{
    display: flex;
    position: relative;
    .b-tabs-line{
      position: absolute;
      bottom:0;
      border-bottom:2px red solid;
    }
  }
</style>