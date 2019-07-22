<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "bear-button-group"
};
</script>

<style scoped lang="scss">
@import '../style/var.scss';
.button-group {
  display: inline-flex;
  & > .b-btn {
    border-radius: 0;
    &:not(first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $btn-radius;
      border-bottom-left-radius: $btn-radius;
    }
    &:last-child {
      border-top-right-radius: $btn-radius;
      border-bottom-right-radius: $btn-radius;
    }
  }
  > .b-btn:hover {
    position: relative;
    z-index: 1;
  }
}
</style>
