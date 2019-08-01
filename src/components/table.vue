<template>
  <div class="b-table-container">
    <table class="b-table" :class=classes>
      <thead>
        <tr>
          <th><input type="checkbox" @change="onChangeAllCheckbox" ref="checkboxForAll"></th>
          <th v-if="showIndex">#</th>
          <th v-for="(column,index) in columns" :key="index">
            {{column.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in data" :key="index">
          <td>
            <input type="checkbox" @change="onChangeRowCheckbox(item, $event)" :checked="selectedRows.some( row => row.id === item.id )">
          </td>
          <td v-if="showIndex">{{index+1}}</td>
          <template v-for="(column,index2) in columns">
            <td :key="index2">{{item[column.filed]}}</td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'bear-table',
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
    selectedRows: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  computed: {
    classes() {
      this.align;
      return {
        border: this.border,
        striped: this.striped,
        [this.align]: true,
      };
    },
  },
  watch: {
    selectedRows() {
      let { length } = this.selectedRows;
      let { checkboxForAll } = this.$refs;
      checkboxForAll.checked = length === this.data.length
      checkboxForAll.indeterminate = length !== 0 && length !== this.data.length
    },
  },
  methods: {
    onChangeRowCheckbox(item, event) {
      let checked = event.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectedRows));
      if (checked && copy.every(i => i.id !== item.id)) {
        copy.push(item);
      } else {
        copy = copy.filter(i => i.id !== item.id);
      }
      this.$emit('update:selectedRows', copy);
    },
    onChangeAllCheckbox(event) {
      let checked = event.target.checked;
      this.$emit('update:selectedRows', checked ? this.data : []);
    },
  },
};
</script>

<style lang="scss">
.b-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 2px;
  line-height: 1.5;
  tr {
    border-bottom: 1px #ebebeb solid;
  }
  td,
  th {
    padding: 12px 10px;
  }

  tbody {
    th {
      //text-align: center;
    }
    tr:hover {
      background: #f4f6f9;
    }
  }
  &.striped {
    tbody {
      tr:nth-child(even) {
        background: #fff;
      }
      tr:nth-child(odd) {
        background: #f9f9f9;
      }
      tr:hover {
        background: #f4f6f9;
      }
    }
  }
  &.border {
    border: 1px solid #ebebeb;
    td,
    th {
      border: 1px #ebebeb solid;
    }
  }
  &.left {
    thead {
      th {
        text-align: left;
      }
    }
  }
  &.center {
    tbody {
      td {
        text-align: center;
      }
    }
  }
  &.right {
    thead {
      th {
        text-align: right;
      }
    }
    tbody {
      td {
        text-align: right;
      }
    }
  }
}
</style>

