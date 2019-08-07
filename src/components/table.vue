<template>
  <div class="b-table-container" :class=tableClasses ref="tableContainer">
    <!-- <div style="height: 200px;overflow: auto;"> -->
    <div style="overflow: auto;">
      <table class="b-table" ref="table">
        <thead>
          <tr>
            <th v-if="checkable">
              <input type="checkbox" @change="onChangeAllCheckbox" ref="checkboxForAll">
            </th>
            <th v-if="expandable">
            </th>
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
            <th v-if="showActions">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item,index) in data">
            <tr :key="index">
              <td v-if="checkable" class="checkableTd">
                <input type="checkbox" @change="onChangeRowCheckbox(item, $event)" :checked="selectedRows.some( row => row.id === item.id )">
              </td>
              <td v-if="expandable" @click="expandItem(item)" :class="{expandableTd:true,expandableActive:isInExpandIds(item)}">
                <b-icon name="right"></b-icon>
              </td>
              <template v-for="(column,tdIndex) in columns">
                <td :key="tdIndex">
                  <template v-if="column.render">
                    <vnodes :vnodes="column.render({value: item[column.field]})"></vnodes>
                  </template>
                  <template v-else>
                    {{item[column.field]}}
                  </template>
                </td>
              </template>
              <td v-if="showActions">
                <slot :item="item"></slot>
              </td>
            </tr>
            <tr :key="'expand'+index" v-show="isInExpandIds(item)" class="expandableTr">
              <td :colspan="columns.length+extraColspan" style="text-align:left;">
                <span style="margin-left:50px;">{{item[expandField] || '空'}}</span>
              </td>
            </tr>
          </template>
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
    vnodes: {
      functional: true,
      render: (h, context) => context.props.vnodes
    }
  },
  props: {
    data: {
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
    align: {
      type: String,
      default: 'left',
    },
    selectedRows: {
      type: Array,
      default: () => [],
    },
    expandField: {
      type: String,
    },
    checkable: {
      type: Boolean,
      default: false,
    },
    expandable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      columns: [],
      expandIds: [],
      sortOrder: '',
      sortField: '',  
      tableHead: null,
      tableBody: null,        
    };
  },
  mounted() {
    this.generateColumns();
    this.listenWindowResize();
    this.replaceTable()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeToChangeTheadWidth);
  },
  computed: {
    tableClasses() {
      return {
        [this.align]: true,
        border: this.border,
        striped: this.striped,  
      };
    },
    extraColspan() {
      return this.checkable ? 2 : 1;
    },
    showActions(){
      return this.$scopedSlots.default ? true : false;
    }
  },
  watch: {
    selectedRows() {
      let { length } = this.selectedRows;
      let { checkboxForAll } = this.$refs;
      checkboxForAll.checked = length === this.data.length;
      checkboxForAll.indeterminate = length !== 0 && length !== this.data.length;
    },
  },
  methods: {
    replaceTable(){
      let tableCopy = this.$refs.table.cloneNode(false);
      tableCopy.classList.add('b-table-copy');

      let { height } = this.tableHead.getBoundingClientRect();
      this.$refs.table.style.marginTop = height + 'px';

      tableCopy.appendChild(this.tableHead);
      this.$refs.tableContainer.appendChild(tableCopy);
    },
    generateColumns(){
      this.columns = this.$slots.default.map(node => {
        let { label, field, sortable } = node.componentOptions.propsData;
        let render = node.data.scopedSlots && node.data.scopedSlots.default;
        return { label, field, sortable, render };
      });
    },
    isInExpandIds({ id }) {
      return this.expandIds.indexOf(id) > -1;
    },
    expandItem({ id }) {
      let index = this.expandIds.indexOf(id)
      index > -1 ? this.expandIds.splice(index, 1) : this.expandIds.push(id);
    },
    listenWindowResize() {
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
  .checkableTd {
    width: 50px;
  }
  .expandableTd {
    width: 50px;
    cursor: pointer;
  }
  .expandableActive {
    transform: rotate(90deg);
  }
  &.striped {
    tbody {
      tr:not(.expandableTr):nth-child(even) {
        background: #fff;
      }
      tr:not(.expandableTr):nth-child(odd) {
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

