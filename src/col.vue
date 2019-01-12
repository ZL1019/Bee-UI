<template>
  <div :style="colStyle" :class="colClasses">
    <slot></slot>
  </div>
</template>

<script>
function validator (value,msg) {
  let keys = Object.keys(value)
  if (!keys.includes('span') && !keys.includes('offset')) {
    console.warn(`col prop ${msg}(object) must have one key of [span,offset] at least!`)
  }
  return true
};
export default {
  name: "bear-col",
  data () {
    return {
      gutter: 0
    }
  },
  props: {
    xs: {
      type: Object,
      validator
    },
    sm: {
      type: Object,
      validator
    },
    md: {
      type: Object,
      validator
    },
    lg: {
      type: Object,
      validator
    },
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    className:{
      type:String
    }
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
      let {
        span,
        offset,
        className,
        xs: { span: xsSpan, offset: xsOffset } = {},
        sm: { span: smSpan, offset: smOffset } = {},
        md: { span: mdSpan, offset: mdOffset } = {},
        lg: { span: lgSpan, offset: lgOffset } = {},
      } = this
      return [
        'b-col',
        className && `${className}`,
        span && `b-col-${span}`,
        offset && `b-offset-${offset}`,
        xsSpan && `b-xs-span-${xsSpan}`,
        smSpan && `b-sm-span-${smSpan}`,
        mdSpan && `b-md-span-${mdSpan}`,
        lgSpan && `b-lg-span-${lgSpan}`,
        xsOffset && `b-xs-offset-${xsOffset}`,
        smOffset && `b-sm-offset-${smOffset}`,
        mdOffset && `b-md-offset-${mdOffset}`,
        lgOffset && `b-lg-offset-${lgOffset}`
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
  @media screen and (min-width: 0px) {
    @for $n from 1 through 24 {
      &.b-xs-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-xs-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    @for $n from 1 through 24 {
      &.b-sm-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-sm-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
  @media screen and (min-width: 992px) {
    @for $n from 1 through 24 {
      &.b-md-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-md-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    @for $n from 1 through 24 {
      &.b-lg-span-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-lg-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
}
</style>
