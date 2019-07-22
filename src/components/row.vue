<script>
export default {
  name: "bear-row",
  data(){
    return { 
      responsive:false
    }
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: [String, Number]
    },
    justify: {
      type: String,
      validator (value) {
        let valueArray = ['start', 'end', 'center', 'around', 'between']
        let res = valueArray.includes(value)
        res || console.warn(`b-row's prop justify must be one of [${valueArray}]`)
        return res
      }
    },
    align: {
      type: String,
      validator (value) {
        let valueArray = ['top', 'middle', 'bottom']
        let res = valueArray.includes(value)
        res || console.warn(`b-row's prop justify must be one of [${valueArray}]`)
        return res
      }
    },
  },
  mounted () {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
      this.responsive = vm.xs || vm.sm || vm.md || vm.lg ? true : false
    })
  },
  computed: {
    rowStyle () {
      let { gutter, responsive } = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px',
        flexWrap: responsive ? 'wrap' : 'no-warp'
      }
    },
    rowClasses () {
      let { justify, align } = this;
      return {
        [`b-align-${align}`]: align,
        [`b-justify-${justify}`]: justify,
      }
    }
  },
  render (h) {
    return h(this.tag, {
      style: this.rowStyle,
      class: { 'b-row': true, ...this.rowClasses }
    }, this.$slots.default)
  },
}
</script>

<style  lang="scss">
.b-row {
  display: flex;
}
.b-align-top {
  align-items: flex-start;
}
.b-align-middle {
  align-items: center;
}
.b-align-bottom {
  align-items: flex-end;
}
.b-justify-center {
  justify-content: center;
}
.b-justify-start {
  justify-content: flex-start;
}
.b-justify-end {
  justify-content: flex-end;
}
.b-justify-around {
  justify-content: space-around;
}
.b-justify-between {
  justify-content: space-between;
}
</style>
