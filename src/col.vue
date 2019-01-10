<template>
  <div :style="colStyle" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bear-col",
  data () {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
  },
  computed: {
    colStyle () {
      let { gutter } = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    },
    colClasses () {
      let { span, offset } = this
      return [
        'b-col',
        span && `b-col-${span}`,
        offset && `b-offset-${offset}`
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.b-col {
  width: 100%;
  @for $n from 1 through 24 {
    &.b-col-#{$n} {
      width: ($n/24) * 100%;
    }
  }
  @for $m from 1 through 24 {
    &.b-offset-#{$m} {
      margin-left: ($m/24) * 100%;
    }
  }
}
</style>
