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
    accordion: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: [String, Number, Array],
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    this.$children.forEach(vm => vm.accordion = this.accordion)
  
    this.eventBus.$on('update:selected', name => {
      this.$emit('update:selected', name);
    });
    this.eventBus.$emit('update:selected', this.selected);
    
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
};
</script>

<style lang="scss">
.b-collapse {
  border-radius: 4px;
  border: 1px solid #dcdee2;
}
</style>