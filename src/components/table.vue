<template>
  <div class="b-table-container" :class=classes ref="tableContainer">
    <div style="height: 200px;overflow: auto;">
      <table class="b-table" ref="table">
        <thead>
          <tr>
            <th><input type="checkbox" @change="onChangeAllCheckbox" ref="checkboxForAll"></th>
            <th v-if="showIndex">#</th>
            <th v-for="(column,index) in columns" :key="index">
              <div class="thInnerWrapper">
                <span>{{column.label}}</span>
                <span v-if="column.sortable" class="b-sort-icons">
                  <b-icon name="triangle-up" @click="emitSort(column,'asc')" :class="{'active':sortOrder === 'asc' && sortField === column.field}">
                  </b-icon>
                  <b-icon name="triangle-down" @click="emitSort(column,'desc')" :class="{'active':sortOrder === 'desc' && sortField === column.field}">
                  </b-icon>
                </span>
              </div>
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
              <td :key="index2">{{item[column.field]}}</td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="loading" class="b-table-loading">
      <b-icon name="loading"></b-icon>
    </div>
  </div>
</template>

<script>
import Icon from './icon';
export default {
  name: 'bear-table',
  components: {
    'b-icon': Icon,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    height: {
      type: [String, Number],
    },
    loading: {
      type: Boolean,
      default: false,
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
  data() {
    return {
      tableHead: null,
      tableBody: null,
      sortOrder: '',
      sortField: '',
      activeField: '',
    };
  },
  mounted() {


    this.listenToWindowResize();

    let tableCopy = this.$refs.table.cloneNode(false);
    tableCopy.classList.add('b-table-copy');

    let { height } = this.tableHead.getBoundingClientRect();
    this.$refs.table.style.marginTop = height + 'px';

    tableCopy.appendChild(this.tableHead);
    this.$refs.tableContainer.appendChild(tableCopy);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeToChangeTheadWidth);
  },
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
      checkboxForAll.checked = length === this.data.length;
      checkboxForAll.indeterminate =
        length !== 0 && length !== this.data.length;
    },
  },
  methods: {
    listenToWindowResize() {
      this.tableHead = this.$refs.table.children[0];
      this.tableBody = this.$refs.table.children[1];
      this.onResizeToChangeTheadWidth = this.changeTheadWidth;
      this.onResizeToChangeTheadWidth();
      window.addEventListener('resize', this.onResizeToChangeTheadWidth);
    },
    changeTheadWidth() {
      this.$nextTick(() => {
        Array.from(this.tableBody.children[0].children).map((item, index) => {
          let { width } = item.getBoundingClientRect();
          this.tableHead.children[0].children[index].style.width = width + 'px';
        });
      });
    },
    emitSort(column, order) {
      this.sortOrder = order;
      this.sortField = column.field;
      this.$emit('sortChange', { column, field: column.field, order });
    },
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
@import '../style/var.scss';

.b-table-container {
  position: relative;
  // height:200px;
  // overflow: auto;

  .b-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 2px;
    line-height: 1.5;
    position: relative;

    tr {
      border-bottom: 1px #ebebeb solid;
    }
    td,
    th {
      padding: 12px 10px;
    }
    th > .thInnerWrapper {
      display: inline-flex;
      align-items: center;
    }
    tbody {
      th {
        //text-align: center;
      }
      tr:hover {
        background: #f4f6f9;
      }
    }
    .b-sort-icons {
      display: inline-flex;
      flex-direction: column;
      margin-left: 8px;
      .icon {
        width: 0.5em;
        height: 0.5em;
        cursor: pointer;
        fill: #c5c8ce;
      }
      .icon.active {
        fill: #2d8cf0;
      }
    }
  }
  .b-table-copy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
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
  .b-table-loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsla(0, 0%, 100%, 0.8);
    border: 1px #ebebeb solid;
    border-radius: 2px;
    .icon {
      @include spin;
    }
  }
}
</style>

