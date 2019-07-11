<template>
  <div class="b-slides">
    {{this.selected}}
    <div class="b-slides-item-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-slides',
  data() {
    return {};
  },
  props: {
    selected: {
      type: String,
    },
    time: {
      type: Number,
      default: 1000,
    },
    isAutoPlay: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    if (!this.selected) {
      this.$children[0].visible = true;
    } else {
      this.updateSelected();
    }
    if (this.isAutoPlay) {
      this.autoPlay();
    }
  },
  methods: {
    autoPlay() {
      let names = this.$children.map(child => child.name);
      let index = names.findIndex(item => this.selected === item);
      let fn = () => {
        if (index === names.length - 1) {
          index = 0;
        } else {
          index = index + 1;
        }
        this.$emit('update:selected', names[index]);
        setTimeout(() => {
          fn();
        }, this.time);
      };
      fn();
    },
    updateSelected() {
      this.$children.forEach(child => {
        let names = this.$children.map(child => child.name);

        child.visible = this.selected === child.name;
        let oldIndex = names.indexOf(child.name)
        let newIndex = names.indexOf(this.selected)
        child.reverse =  newIndex > oldIndex
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
  .b-slides-item-container {
    display: flex;
    overflow: hidden;
    position: relative;
    border: 1px red solid;
  }
}
</style>