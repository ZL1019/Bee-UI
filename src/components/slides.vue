<template>
  <div class="b-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="b-slides-items-container">
      <slot></slot>
    </div>
    <div class="b-slides-pagination">
      <div 
        v-for="(n,index) in childrenLength" 
        :class="{
          'b-slides-bullet':true, 
          'b-slides-bullet-active': index === currentIndex,
        }"   
        :key="index" 
        @click ="emitUpdateSelected(index)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-slides',
  data(){
    return {
      childrenLength:0,
      timerId: undefined
    }
  },
  props: {
    selected: {
      type: String,
      required: true
    },
    interval: {
      type: Number,
      default: 3000,
    },
    isAutoPlay: {
      type: Boolean,
      default: true,
    },
    isLoop: {
      type: Boolean,
      default: true,
    },
    
  },
  mounted() { 
    this.childrenLength = this.$children.length
    this.updateSelected();
    if (this.isAutoPlay) {
      this.autoPlay();
    }
  },
  computed:{
    childNames(){
      return this.$children.map(child => child.name);
    },
    currentIndex(){
      return this.childNames.findIndex(name => name === this.selected)
    }
  },
  methods: {
    autoPlay() {
      if(this.timerId) return
      let loopPlay = () => {
        let nameIndex = this.childNames.findIndex(name => name === this.selected);   
        if (nameIndex !== this.childNames.length - 1) {             
          nameIndex = nameIndex + 1
        } else {
          nameIndex = 0;
        }
        this.emitUpdateSelected(nameIndex)
        this.timerId = setTimeout(loopPlay, this.interval);
      };
      this.timerId = setTimeout(loopPlay, this.interval);
    },
    onMouseEnter(){
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    onMouseLeave(){
      this.autoPlay()
    },
    emitUpdateSelected(nameIndex){   
      this.$emit('update:selected', this.childNames[nameIndex])
    },
    updateSelected() {
      this.$children.forEach(child => {
        // let names = this.$children.map(child => child.name);
        child.visible = child.name === this.selected;
        
        // let oldIndex = names.indexOf(child.name)
        // let newIndex = names.indexOf(this.selected)

        // child.reverse =  newIndex > oldIndex
      });
    },
  },
  updated() {
    this.updateSelected();
  },
};
</script>

<style lang="scss">
.b-slides {
  display: inline-block;
  position: relative;
  border:5px red solid;
  .b-slides-items-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }
  .b-slides-pagination{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    .b-slides-bullet{
      cursor: pointer;
      border-radius: 50%;
      width:10px;
      height:10px;
      background-color: #808695;
      margin:4px;
      transition: background-color 0.5s;
    }
    .b-slides-bullet-active{
      
      background-color: #5cadff;
    }
  }
}
</style>