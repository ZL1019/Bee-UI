<template>
  <div class="b-sticky-wrapper" ref="wrapper" :style="{height,width,left}">
    <div :class="{'b-sticky':sticky}" ref="content">
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
      left:undefined,
      width:undefined,
      height:undefined,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > this.getTop()) {
        let { left, width, height } = this.$refs.wrapper.getBoundingClientRect();
        [this.height, this.width, this.left] = [height+'px', width+'px', left+'px']

        this.sticky = true;
      } else {
        this.sticky = false;
        [this.height, this.width, this.left] = ['auto', 'auto', 'auto']
      }
    });
  },
  methods: {
    getTop() {
      let { top } = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY;
    },
  },
};
</script>

<style lang="scss">
.b-sticky-wrapper {
  .b-sticky {
    top: 0;
    left: 0;
    position: fixed;
    background: red;   
  }
}
</style>