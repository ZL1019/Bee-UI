<template>
  <div class="b-slides" 
    @mouseenter= "onMouseEnter" 
    @mouseleave= "onMouseLeave"
    @touchstart = "onTouchStart"
    @touchmove= "onTouchMove"
    @touchend = "onTouchEnd"
    >
    <div class="b-slides-items-container">
      <slot></slot>
    </div>
    <div class="b-slides-pre-btn">
      
    </div>
    <div class="b-slides-next-btn">

    </div>
    <div class="b-slides-pagination">
      <div v-for="(n,index) in childrenLength" :class="{
          'b-slides-bullet':true, 
          'b-slides-bullet-active': index === currentIndex,
        }" :key="index" @click="emitUpdateSelected(index, true)"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-slides',
  data() {
    return {
      childrenLength: 0,
      timerId: undefined,
      oldIndex: '',
      isReverse: false,
      startPoints:undefined
    };
  },
  props: {
    selected: {
      type: String,
      required: true,
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
    this.childrenLength = this.$children.length;
    this.updateSelected();
    if (this.isAutoPlay) {
      this.autoPlay();
    }
  },
  computed: {
    childNames() {
      return this.$children.map(child => child.name);
    },
    currentIndex() {
      return this.childNames.findIndex(name => name === this.selected);
    },
  },
  methods: {
    onTouchStart(event){
      this.startPoints = event.touches[0]
    },
    onTouchMove(){
      this.pause()
    },
    onTouchEnd(event){
      let {clientX:x1, clientY: y1} = this.startPoints
      let {clientX:x2, clientY: y2} = event.changedTouches[0]
      let x = Math.abs(x2-x1);
      // y 为上下差值也为 30度角所对的边
      let y = Math.abs(y2-y1);
      // 求三角形斜边长度 slash
      let slash = Math.sqrt(x*x+y*y)
      // 当斜线角度小于30 度 才认为滑动生效
      if(slash/y >= 2) {
        if(x1-x2 > 0){
          // 手势向左滑，滑动方向为右
          let targetIndex = this.currentIndex !== this.childrenLength -1 ? ++this.currentIndex : 0
          this.emitUpdateSelected(targetIndex)
        }else{
          let targetIndex = this.currentIndex !== 0 ? --this.currentIndex : this.childrenLength - 1
          this.emitUpdateSelected(targetIndex, true)
        }
      }else{
        console.log('invalid touch');
      }
      this.autoPlay()
    },
    autoPlay() {
      if (this.timerId) return;
      let loopPlay = () => {
        let nameIndex = this.currentIndex;
        nameIndex = nameIndex !== this.childNames.length - 1 ? ++nameIndex : 0;
        this.emitUpdateSelected(nameIndex);
        this.timerId = setTimeout(loopPlay, this.interval);
      };
      this.timerId = setTimeout(loopPlay, this.interval);
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.autoPlay();
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    emitUpdateSelected(nameIndex, isReverse) {
      this.pause()
      this.isReverse = isReverse;
      this.$emit('update:selected', this.childNames[nameIndex]);
    },
    setReverse(newIndex) {
      this.$children.forEach((child, index) => {
        //  是移动端 && 初始索引第 0个 && 目标索引最后一个 （从第一个倒滑（手势向右）至最后一个）
        if(window.ontouchstart !== undefined && this.oldIndex === 0 && newIndex === this.childrenLength-1 ){
          child.reverse = true
        }else{  
          // 当目标索引小于初始索引，并且是 bullet点击 或者滑动 触发 则切换子组件的 reverse
          child.reverse = this.oldIndex > newIndex && this.isReverse ? this.oldIndex === index || newIndex === index : false; 
        }
      });
      this.oldIndex = newIndex;
      return true;
    },
    updateSelected() {
      this.$children.forEach((child, newIndex) => {
        child.visible = child.name === this.selected && this.setReverse(newIndex);
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
  .b-slides-items-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }
  .b-slides-pagination {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    .b-slides-bullet {
      cursor: pointer;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      background-color: #808695;
      margin: 4px;
      transition: background-color 0.5s;
    }
    .b-slides-bullet-active {
      background-color: #5cadff;
    }
  }
}
</style>