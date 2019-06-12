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
      //this.eventBus.$emit('updateSelected', currentTabName);
      this.$children.forEach(tabsChild => {
        if (tabsChild.$options.name === 'bear-tabs-head') {
          tabsChild.$children.forEach(currentTab => {
            if (currentTab.name === this.value) {
              this.eventBus.$emit('updateSelected', this.value, currentTab);
            }
          });
        }
      });
    },
  },
  mounted() {
    this.eventBus.$on('tabItemClick', currentTab => {
      this.$emit('tab-click', currentTab);
    });
    this.eventBus.$on('updateSelected', tabName => {
      // console.log('tabs 接收到 updateSelected');
      this.$emit('input', tabName ? tabName : this.value);
    });
    this.checkChildren();
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  methods: {
    checkChildren() {
      this.$children.forEach(tabsChild => {
        if (tabsChild.$options.name === 'bear-tabs-head') {
          tabsChild.$children.forEach(currentTab => {
            if (currentTab.name === this.value) {
              this.eventBus.$emit('updateSelected', this.value, currentTab);
            }
          });
        }
      });
    },
  },
};
</script>
