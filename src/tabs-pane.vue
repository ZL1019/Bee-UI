<template>
  <div class="b-tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bear-tabs-pane',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String , Number],
      required: true
    }
  },
  data(){
    return {
      active: false
    }
  },
  mounted() {
    this.eventBus.$on('updateSelected', name => {
      // console.log('tabs-pane 接收到 updateSelected');
      this.active = this.name === name
    });
  },
};
</script>

<style lang="scss">
</style>