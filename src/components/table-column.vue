<template>
  <div class="b-table-column"></div>
</template>

<script>
export default {
  name: 'bear-table-column',
  props: {
    label: {
      type: String,
      required: true,
    },
    field: {
      type: String,
      required: true,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'center',
      validator(value) {
        return ['center', 'left', 'right'].indexOf(value) > -1;
      },

    },
    headerAlign: {
      type: String,
      default: 'center',
      validator(value) {
        return ['center', 'left', 'right'].indexOf(value) > -1;
      },
    },
    minWidth:{
      type: [String,Number]
      
    }
  },
};
</script>
