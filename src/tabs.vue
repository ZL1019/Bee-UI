<template>
  <div class="b-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'bear-tabs',
  props: {
    value: {
      type: [String, Number],
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  watch: {
    value(currentTabName) {
      this.eventBus.$emit('updateSelected', currentTabName);
    },
  },
  mounted() {
    this.eventBus.$emit('updateSelected', this.value);

    this.eventBus.$on('tabItemClick', currentTab => {
      this.$emit('tab-click', currentTab);
    });

    this.eventBus.$on('updateSelected', tabName => {
      this.$emit('input', tabName ? tabName : this.value);
    });
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
};
</script>

<style lang="scss">
</style>