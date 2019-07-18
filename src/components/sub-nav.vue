<template>
  <div class="b-sub-nav">
    <div @click="visible = !visible">
      <slot name="title"></slot>
    </div>
    <div v-show="visible" class="b-sub-nav-horizontal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bear-sub-nav',
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="scss">
.b-sub-nav {
  position: relative;
  cursor: pointer;
  padding: 0 20px;
  .b-sub-nav-horizontal {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top:2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius:4px;
  }
  .b-sub-nav-horizontal .b-sub-nav-horizontal {
    top: 0;
    left: 100%;
    margin-left: 2px;
  }
  .b-nav-item {
    transition: all 0.2s ease-in-out;
    &.active,
    &:hover {
      color: #2d8cf0;
      border-bottom-color:transparent;
    }
  }
}
</style>

