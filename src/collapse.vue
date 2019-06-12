<template>
  <div class="b-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'bear-collapse',
  props: {
    selected: {
      type: [String, Number, Array],
    },
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected);

    this.eventBus.$on('addSelected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.accordion) {
        selectedCopy = [];
      }
      selectedCopy.push(name);
      this.eventBus.$emit('update:selected', selectedCopy);
      this.$emit('update:selected', selectedCopy);
    });

    this.eventBus.$on('removeSelected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      let index = selectedCopy.indexOf(name);
      selectedCopy.splice(index, 1);
      this.eventBus.$emit('update:selected', selectedCopy);
      this.$emit('update:selected', selectedCopy);
    });
  },
};
</script>

<style lang="scss">
.b-collapse {
  border-radius: 4px;
  border: 1px solid #dcdee2;
}
</style>