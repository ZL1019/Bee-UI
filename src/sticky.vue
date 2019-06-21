<template>
  <div class="b-sticky-wrapper" ref="wrapper" :style="{height}">
    <div :class="{'b-sticky':sticky}" :style="{width}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-sticky',
  data() {
    return {
      sticky: false,
      width: undefined,
      height: undefined,
    };
  },

  mounted() { 
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.getTop()) {
        console.log(123);
        this.setWidthHeight()
        window.addEventListener('resize',() => {
          this.setWidthHeight()
        })
        this.sticky = true;
      } else {
        this.sticky = false;
        [this.height, this.width] = [undefined, undefined]
      }
    });
  },
  methods: {
    getTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY;
    },
    setWidthHeight(){
      let {width, height } = this.$refs.wrapper.getBoundingClientRect();
      [this.height, this.width] = [height+'px', width+'px']
    }
  },
};
</script>

<style lang="scss">
.b-sticky-wrapper {
  width:50%;
  margin: 0 auto;
  border:1px blue solid;
  padding:20px;
  .b-sticky {
    top: 0;
    position: fixed;
    border:1px red solid;
  }
}
</style>