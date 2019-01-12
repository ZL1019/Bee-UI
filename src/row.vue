<template>
  <div class="b-row" :style='rowStyle' :class='rowClasses'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bear-row",
  props: {
    gutter: {
      type: [String, Number]
    },
    justify:{
      type: String,
      validator(value){
        let valueArray = ['start','end','center','space-around','space-between']
        if(valueArray.indexOf(value) === -1){
          console.warn(`b-row's prop justify must be one of [${valueArray}]`)
        }
        return true
      }
    },
    align:{
      type: String,
      validator(value){
        let valueArray = ['top','middle','bottom']
        if(valueArray.indexOf(value) === -1){
          console.warn(`b-row's prop justify must be one of [${valueArray}]`)
        }
        return true
      }
    },
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
    },
    rowClasses () {
      let {justify,align} = this
      return [
        justify && `b-justify-${justify}`,
        align && `b-align-${align}`
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.b-row {
  display: flex;
  flex-wrap: wrap;
}
.b-justify-center{
  justify-content: center;
}
.b-justify-start{
  justify-content: flex-start;
}
.b-justify-end{
  justify-content: flex-end;
}
.b-justify-around{
  justify-content: space-around;
}
.b-justify-between{
  justify-content: space-between;
}
.b-align-top{
  align-items: flex-start;
}
.b-align-middle{
  align-items: center;
}
.b-align-bottom{
  align-items: flex-end;
}
</style>
