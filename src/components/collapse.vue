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
      type: Array,
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
    this.eventBus.$emit('updateSelected', this.selected);
    this.listenAddSelected();
    this.listenRemoveSelected();
  },
  methods: {
    listenAddSelected() {
      this.eventBus.$on('addSelected', name => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        this.accordion ? (selectedCopy = []) : '';
        selectedCopy.push(name);
        this.emitUpdateSelected(selectedCopy);
      });
    },
    listenRemoveSelected() {
      this.eventBus.$on('removeSelected', name => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        selectedCopy.splice(selectedCopy.indexOf(name), 1);
        this.emitUpdateSelected(selectedCopy);
      });
    },
    emitUpdateSelected(selectedCopy) {
      this.$emit('update:selected', selectedCopy);
      this.eventBus.$emit('updateSelected', selectedCopy);
    },

  },
};
</script>

<style lang="scss">
.b-collapse {
  border-radius: 4px;
  border: 1px solid #dcdee2;
  
}
</style>