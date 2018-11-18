<template>
  <button class="b-button">
    <slot/>
  </button>
</template>

<script>
  export default {
    name: "b-button"
  }
</script>

<style scoped lang="scss">
  .b-button {
    outline: 0;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    transition: color 0.2s linear,border-color 0.2s linear,background-color 0.2s linear;
    color: var(--btn-color);
    font-size: var(--btn-font-size);
    background-color:var(--btn-bg);
    border: 1px solid var(--btn-border-color);
    line-height: var(--btn-line-height);
    padding: var(--btn-padding-vertial) var(--btn-padding-horizontal);
    border-radius: var(--btn-radius);

  }
  .b-button:hover{
    color: var(--btn-color-hover);
    border-color: var(--btn-border-color-hover);
  }
  .b-button:focus{
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);
  }
  .b-button:active{
    color: var(--btn-color-active);
    border-color: var(--btn-border-color-active);
  }
</style>

