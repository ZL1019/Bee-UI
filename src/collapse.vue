<template>
  <div class="b-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bear-collapse'
}
</script>

<style lang="scss">
  .b-collapse{
    border-radius: 4px; 
    border: 1px solid #dcdee2
  }
</style>