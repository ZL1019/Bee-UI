<template>
  <svg v-if="name" class="icon" :style="{fill:`${color}`}">
    <use :xlink:href="`#b-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "icon",
    props: {
      name: {
        type: String,
      },
      color: {
        type: String,
      }
    }
  }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
  }
</style>