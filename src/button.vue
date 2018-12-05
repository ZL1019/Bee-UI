<template>
  <button class="b-btn"
          :class="{[`b-btn-${type}`]:true}">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: "b-button",
    data() {
      return {}
    },
    props: {
      type: {
        type: String,
        default: 'default'
      }
    }
  }
</script>

<style scoped lang="scss">
  .b-btn {
    outline: 0;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    transition: color 0.2s linear, border-color 0.2s linear, background-color 0.2s linear;
    color: var(--btn-color);
    font-size: var(--btn-font-size);
    background-color: var(--btn-bg);
    border: 1px solid var(--btn-border-color);
    line-height: var(--btn-line-height);
    padding: var(--btn-padding-vertial) var(--btn-padding-horizontal);
    border-radius: var(--btn-radius);
    &:hover {
      color: var(--btn-color-hover);
      border-color: var(--btn-border-color-hover);
    }
    &:focus {
      box-shadow: 0 0 0 2px rgba(45, 140, 240, .2);
    }
    &:active {
      color: var(--btn-color-active);
      border-color: var(--btn-border-color-active);
    }
  }

  .b-btn-primary {
    color: var(--btn-color-primary);
    background-color: var(--btn-bg-primary);
    border-color: var(--btn-border-color-primary);
  }

  .b-btn-primary:hover {
    color: var(--btn-color-primary);
    background-color: var(--btn-bg-primary-hover);
    border-color: var(--btn-border-color-primary-hover);
  }

  .b-btn-primary:active {
    color: var(--btn-color-primary-active);
    background-color: var(--btn-bg-primary-active);
    border-color: var(--btn-border-color-primary-active);
  }

  .b-btn-info {
    color: var(--btn-color-info);
    background-color: var(--btn-bg-info);
    border-color: var(--btn-border-color-info);
  }
  .b-btn-info:hover {
    color: var(--btn-color-info);
    background-color: var(--btn-bg-info-hover);
    border-color: var(--btn-border-color-info-hover);
  }
  .b-btn-info:active {
    color: var(--btn-color-info-active);
    background-color: var(--btn-bg-info-active);
    border-color: var(--btn-border-color-info-active);
  }

  .b-btn-success {
    color: var(--btn-color-success);
    background-color: var(--btn-bg-success);
    border-color: var(--btn-border-color-success);
  }
  .b-btn-success:hover {
    color: var(--btn-color-success);
    background-color: var(--btn-bg-success-hover);
    border-color: var(--btn-border-color-success-hover);
  }
  .b-btn-success:active {
    color: var(--btn-color-success-active);
    background-color: var(--btn-bg-success-active);
    border-color: var(--btn-border-color-success-active);
  }
  .b-btn-success:focus {
    box-shadow: 0 0 0 2px rgba(25,190,107,.2);
  }
</style>

