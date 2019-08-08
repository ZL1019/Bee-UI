<template>
  <div class="b-scroll-container" ref="container">
    <div class="b-scroll" ref="child">
      <slot></slot>
    </div>
    <div class="b-scroll-track">
      <div class="b-scroll-bar-container" ref="scrollbar">
        <div class="b-scroll-bar"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-scroll',
  mounted() {
    let translateY = 0;
    let {child, container} = this.$refs;
    let { height: childHeight } = child.getBoundingClientRect();
    let { height: containerHeight } = container.getBoundingClientRect();
    
    let {
      borderTopWidth,
      borderBottomWidth,
      paddingTop,
      paddingBottom,
    } = window.getComputedStyle(container);
    let maxHeight =
      childHeight -
      containerHeight +
      parseInt(paddingTop) +
      parseInt(paddingBottom) +
      parseInt(borderTopWidth) +
      parseInt(borderBottomWidth);
    container.addEventListener('wheel', (e) => {
      if (e.deltaY > 20) {
        translateY -= 60;
      } else if (e.deltaY < -20) {
        translateY += 60;
      } else {
        translateY -= e.deltaY * 3;
      }

      if (translateY > 0) {
        translateY = 0;
      } else if (translateY < -maxHeight) {
        translateY = -maxHeight;
      }else{
        e.preventDefault();
      }
      child.style.transform = `translateY(${translateY}px)`;
      this.updateBarHeightAndPosition(childHeight, translateY)
    });

    this.updateBarHeightAndPosition(childHeight, translateY)
  },
  methods:{
    updateBarHeightAndPosition(childHeight, translateY){
      let containerHeight =  this.$refs.container.clientHeight
      let barHeight = Math.pow(containerHeight,2) / childHeight
      let y = translateY*containerHeight / childHeight

      this.$refs.scrollbar.style.height = barHeight+'px'
      this.$refs.scrollbar.style.transform = `translateY(${-y}px)`
    }
  }
};
</script>

<style lang="scss" scoped>
  .b-scroll-container{
    overflow: hidden;
    position: relative;
  }
  .b-scroll{
    transition: transform 0.05s ease;
  }
  .b-scroll-track{
    position:absolute;
    top:0;
    right:0;
    width:12px;
    background: #fafafa;
    border-left:1px #e8e8e8 solid;
    height:100%;
  }
  .b-scroll-bar-container{
    position:absolute;
    right:0;
    width:8px;
    left:50%;    
    margin-left:-4px;
    padding:2px 0px;
  }
  .b-scroll-bar{
    background:#c2c2c2;
    border-radius:4px;
    height:100%;
  }
</style>

