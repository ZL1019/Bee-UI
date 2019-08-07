<template>
  <div class="b-table-column"></div>
</template>

<script>
export default {
  name: 'bear-table-column',
  props:{
    label:{
      type: String,
      required: true
    },
    field:{
      type: String,
      required: true
    },
    sortable:{
      type: Boolean,
      default: false
    }
  }
}
</script>
