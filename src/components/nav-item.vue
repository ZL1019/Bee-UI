<template>
  <div class="b-nav-item" :class={active} @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bear-nav-item',
  inject: ['root'],
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: { type: String, required: true },
  },
  mounted() {
    this.root.getChildren(this);
  },
  methods: {
    onClick() {
      this.$emit('changeSelected', this.name);
    },
  },
};
</script>

<style lang="scss">
.b-nav-item {
  padding: 0px 20px;
  cursor: pointer;
  border-bottom: 2px transparent solid;
  transition: all 0.2s ease-in-out;
  z-index: 99;
  white-space: nowrap;
  line-height:2;
  &.active, &:hover {
    color: #2d8cf0;
    border-bottom: 2px #2d8cf0 solid;
  }
}
</style>

