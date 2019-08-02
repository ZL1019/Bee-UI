<template>
  <svg @click="$emit('click',$event)" v-if="name" class="icon" :style="{fill:`${color}`}">
    <use :xlink:href="`#b-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js';
export default {
  name: 'bear-icon',
  props: {
    name: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>