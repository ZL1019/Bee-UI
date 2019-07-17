<template>
  <div class="b-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="b-slides-items-container">
      <slot></slot>
    </div>
    <div class="b-slides-pagination">
      <div v-for="(n,index) in childrenLength" :class="{
          'b-slides-bullet':true, 
          'b-slides-bullet-active': index === currentIndex,
        }" :key="index" @click="emitUpdateSelected(index)"></div>
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
    autoPlay() {
      if (this.timerId) return;
      let loopPlay = () => {
        let nameIndex = this.childNames.findIndex(
          name => name === this.selected,
        );
        if (nameIndex !== this.childNames.length - 1) {
          nameIndex = nameIndex + 1;
        } else {
          nameIndex = 0;
        }
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
    emitUpdateSelected(nameIndex) {
      this.pause();
      this.$emit('update:selected', this.childNames[nameIndex]);
    },
    setReverse(newIndex) {
      this.$children.forEach((child, index) => {
        if (this.oldIndex > newIndex) {
          child.reverse = this.oldIndex === index || newIndex === index;
        } else {
          child.reverse = false;
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
  border: 5px red solid;
  .b-slides-items-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }
  .b-slides-pagination {
    position: absolute;
    bottom: 10px;
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