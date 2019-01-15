<script>
function validator (value, msg) {
  let keys = Object.keys(value)
  if (!keys.includes('span') && !keys.includes('offset')) {
    console.warn(`col prop ${msg}(object) must have one key of [span,offset] at least!`)
    return false
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
    tag: {
      type: String,
      default: 'div'
    },
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
  },
  methods: {
    createClass (obj, prefix = '') {
      if (!obj) { return [] }
      let array = []
      if (obj.span) { array.push(`b-col-${prefix}${obj.span}`) }
      if (obj.offset) { array.push(`b-col-${prefix}offset-${obj.offset}`) }
      return array
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
    // colClasses () {
    //   let {
    //     span,
    //     offset,
    //     xs: { span: xsSpan, offset: xsOffset } = {},
    //     sm: { span: smSpan, offset: smOffset } = {},
    //     md: { span: mdSpan, offset: mdOffset } = {},
    //     lg: { span: lgSpan, offset: lgOffset } = {},
    //   } = this
    //   return {
    //     'b-col': true,
    //     [`b-col-${span}`]: span,
    //     [`b-col-offset-${offset}`]: offset,
    //     [`b-col-xs-${xsSpan}`]: xsSpan,
    //     [`b-col-sm-${smSpan}`]: smSpan,
    //     [`b-col-md-${mdSpan}`]: mdSpan,
    //     [`b-col-lg-${lgSpan}`]: lgSpan,
    //     [`b-col-xs-offset-${xsOffset}`]: xsOffset,
    //     [`b-col-sm-offset-${smOffset}`]: smOffset,
    //     [`b-col-md-offset-${mdOffset}`]: mdOffset,
    //     [`b-col-lg-offset-${lgOffset}`]: lgOffset
    //   }
    // },
    colClasses () {
      let { span, offset, xs, sm, md, lg, createClass } = this
      return [
        'b-col',
        ...createClass(xs, 'xs-'),
        ...createClass(sm, 'sm-'),
        ...createClass(md, 'md-'),
        ...createClass(lg, 'lg-'),
        ...createClass({ span, offset })
      ]
    }
  },
  render (h) {
    return h(this.tag, {
      style: this.colStyle,
      class: this.colClasses,
    }, this.$slots.default)
  },
}
</script>

<style lang="scss">
.b-col {
  width: 100%;
  @for $n from 1 through 24 {
    &.b-col-#{$n} {
      width: ($n/24) * 100%;
    }
  }
  @for $m from 1 through 24 {
    &.b-col-offset-#{$m} {
      margin-left: ($m/24) * 100%;
    }
  }
  @media screen and (min-width: 0px) {
    @for $n from 1 through 24 {
      &.b-col-xs-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-col-xs-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    @for $n from 1 through 24 {
      &.b-col-sm-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-col-sm-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
  @media screen and (min-width: 992px) {
    @for $n from 1 through 24 {
      &.b-col-md-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-col-md-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    @for $n from 1 through 24 {
      &.b-col-lg-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $m from 1 through 24 {
      &.b-col-lg-offset-#{$m} {
        margin-left: ($m/24) * 100%;
      }
    }
  }
}
</style>
