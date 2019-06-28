<template>
  <div ref="tabsHead" class="b-tabs-head">
    <div class="tabs-item-container">
      <slot></slot>
    </div>
    <div ref="tabsLine" class="b-tabs-line"></div>
  </div>
</template>

<script>
export default {
  name: 'bear-tabs-head',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('updateSelected', (tabName, tab) => {
      let { width, left } = tab.$el.getBoundingClientRect();
      let { left: headLeft } = this.$refs.tabsHead.getBoundingClientRect();
      this.$refs.tabsLine.style.width = `${width}px`;
      this.$refs.tabsLine.style.left = `${left - headLeft}px`;
    });
  },
};
</script>

<style lang="scss">
.b-tabs-head { 
  position: relative;
  .tabs-item-container{
    display: flex;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #dcdee2;
  }
  .b-tabs-line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px #2d8cf5 solid;
    transition: all 0.3s ease-in-out;
    z-index: 1;
  }
}
</style>