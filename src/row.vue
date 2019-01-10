<template>
  <div class="b-row" :style='rowStyle'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bear-row",
  props: {
    gutter: {
      type: [String, Number]
    }
  },
  mounted () {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle () {
      let { gutter } = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.b-row {
  display: flex;
}
</style>
