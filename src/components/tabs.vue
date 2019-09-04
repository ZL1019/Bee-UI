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
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  watch: {
    value() {
      this.checkChildren()
      // this.$children.forEach(tabsChild => {
      //   if (tabsChild.$options.name === 'bear-tabs-head') {
      //     tabsChild.$children.forEach(currentTab => {
      //       if (currentTab.name === this.value) {
      //         this.eventBus.$emit('updateSelected', this.value, currentTab);
      //       }
      //     });
      //   }
      // });
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
