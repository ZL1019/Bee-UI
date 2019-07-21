<template>
  <div class="b-nav-item" :class={active,vertical} @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bear-nav-item',
  inject: ['root','vertical'],
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
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath()
      this.$emit('changeSelected', this.name);
    },
    onClickOnce() {
      this.onClick();
      this.onClickOnce = null
    },
  },
  updated(){
    this.active && this.onClickOnce && this.onClickOnce()
  }
};
</script>

<style lang="scss">
.b-nav-item {
  padding: 0px 20px;
  cursor: pointer;
  border-bottom: 2px transparent solid;
  transition: all 0.2s ease-in-out;
  z-index: 2;
  white-space: nowrap;
  line-height:2;
  &.active.vertical, &.vertical:hover {
    color: #2d8cf0;
    border-bottom: 2px transparent solid;
  }
  &.active, &:hover {
    color: #2d8cf0;
    border-bottom: 2px #2d8cf0 solid;
  }
}
</style>

