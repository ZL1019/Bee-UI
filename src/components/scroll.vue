<template>
  <div class="b-scroll-container" ref="container">
    <div class="b-scroll" ref="scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-scroll',
  mounted() {
    let translateY = 0;
    let scroll = this.$refs.scroll;
    let container = this.$refs.container;
    let { height: scrollHeight } = scroll.getBoundingClientRect();
    let { height: containerHeight } = container.getBoundingClientRect();
    let {
      borderTopWidth,
      borderBottomWidth,
      paddingTop,
      paddingBottom,
    } = window.getComputedStyle(container);
    let maxHeight =
      scrollHeight -
      containerHeight +
      parseInt(paddingTop) +
      parseInt(paddingBottom) +
      parseInt(borderTopWidth) +
      parseInt(borderBottomWidth);

    container.addEventListener('wheel', (e) => {
      if (e.deltaY > 20) {
        translateY = translateY - 60;
      } else if (e.deltaY < -20) {
        translateY = translateY + 60;
      } else {
        translateY = translateY - e.deltaY * 3;
      }
      if (translateY > 0) {
        translateY = 0;
      } else if (translateY < -maxHeight) {
        translateY = -maxHeight;
      }else{
        e.preventDefault();
      }
      scroll.style.transform = `translateY(${translateY}px)`;
    });
  },
};
</script>

<style lang="scss" scoped>
  .b-scroll-container{
    overflow: hidden;
  }
  .b-scroll{
    transition: transform 0.05s ease;
  }
</style>

