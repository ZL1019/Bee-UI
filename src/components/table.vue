<template>
  <div class="b-table-container" :class=tableClasses ref="tableContainer">
    <!-- <div style="height: 200px;overflow: auto;"> -->
    <div style="overflow: auto;">
      <table class="b-table" ref="table">
        <thead>
          <tr>
            <th v-if="checkable" class="checkboxTh">
              <input type="checkbox" @change="onChangeAllCheckbox" ref="checkboxForAll">
            </th>
            <th v-if="expandable" class="expandableTh"></th>
            <th v-for="(column,index) in columns" :key="index" :style="thStyle(column)">
              <div class="thInnerWrapper" :style="thAlign(column)">
                <span class="thLabel">{{column.label}}</span>
                <span v-if="column.sortable" class="b-sort-icons">
                  <b-icon name="triangle-up" @click="emitSort(column,'asc')" :class="{'active':sortOrder === 'asc' && sortField === column.field}">
                  </b-icon>
                  <b-icon name="triangle-down" @click="emitSort(column,'desc')" :class="{'active':sortOrder === 'desc' && sortField === column.field}">
                  </b-icon>
                </span>
              </div>
            </th>
            <th v-if="$scopedSlots.action" class="actionTh">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item,index) in data">
            <tr :key="index" :class="stripedClass(index)">
              <td v-if="checkable" class="checkIcon">
                <input type="checkbox" @change="onChangeRowCheckbox(item, $event)" :checked="selectedRows.some( row => row.id === item.id )">
              </td>
              <td v-if="expandable" @click="expandItem(item)" :class="expandIconClass(item)">
                <b-icon name="right"></b-icon>
              </td>
              <template v-for="(column,tdIndex) in columns">
                <td :style="tdStyle(column)" :key="tdIndex">
                  <template v-if="column.render">
                    <vnodes :vnodes="column.render({value: item[column.field]})"></vnodes>
                  </template>
                  <template v-else>
                    <span class="tdContent">{{item[column.field]}}</span>  
                  </template>
                </td>
              </template>
              <td v-if="$scopedSlots.action" class="actionTd">
                <slot name="action" :item="item"></slot>
              </td>
            </tr>
            <tr v-show="isInExpandIds(item)" :key="'expand'+index">
              <td :colspan="expandTdColspan" class="expandTd">
                <span :style="expandTdStyle">{{item[expandField]}}</span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div v-if="loading" class="tableLoading">
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
      render: (h, context) => context.props.vnodes,
    },
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
    this.replaceTable();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeToChangeTheadWidth);
  },
  computed: {
    tableClasses() {
      return {
        border: this.border,
        striped: this.striped,
      };
    },

    expandTdColspan() {
      let length = 1;
      this.checkable ? (length = length + 1) : '';
      this.$scopedSlots.default ? (length = length + 1) : '';
      return this.columns.length + length;
    },
    expandTdStyle() {
      return {
        paddingLeft: this.checkable ? '100px' : '50px',
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
    stripedClass(index) {
      let oddClass = { oddTr: true };
      let evenClass = { evenTr: true };
      return index % 2 !== 0 ? oddClass : evenClass;
    },
    expandIconClass(item){
      return {
        expandIcon: true,
        expandIconActive: this.isInExpandIds(item)
      }
    },
    tdStyle({ align, minWidth }) {
      return {
        textAlign: align ? align : 'center',
        minWidth: minWidth ? minWidth + 'px' : 'auto',
      };
    },
    thStyle({ minWidth }) {
      return {
        minWidth: minWidth ? minWidth + 'px' : 'auto',
      };
    },

    thAlign({ headerAlign }) {
      let align;
      switch (headerAlign) {
        case 'left':
          align = 'flex-start';
          break;
        case 'center':
          align = 'center';
          break;
        case 'right':
          align = 'flex-end';
          break;
      }
      return {
        justifyContent: align,
      };
    },
    replaceTable() {
      let tableCopy = this.$refs.table.cloneNode(false);
      tableCopy.classList.add('b-table-copy');

      let { height } = this.tableHead.getBoundingClientRect();
      this.$refs.table.style.marginTop = height + 'px';

      tableCopy.appendChild(this.tableHead);
      this.$refs.tableContainer.appendChild(tableCopy);
    },
    generateColumns() {
      let filterSolts = this.$slots.default.filter(node => node.tag);
      this.columns = filterSolts.map(node => {
        let {
          label,
          field,
          sortable,
          align,
          headerAlign,
          minWidth,
        } = node.componentOptions.propsData;
        let render = node.data.scopedSlots && node.data.scopedSlots.default;
        return { label, field, sortable, align, headerAlign, minWidth, render };
      });
    },
    isInExpandIds({ id }) {
      return this.expandIds.indexOf(id) > -1;
    },
    expandItem({ id }) {
      let index = this.expandIds.indexOf(id);
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

<style lang="scss" scoped>
@import '../style/var.scss';

.b-table-container {
  position: relative;
  border-radius: 2px;
  box-sizing: border-box;
  .b-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    line-height: 1.5;
    position: relative;

    tr {
      border-bottom: 1px #ebebeb solid;
      transition: background-color 0.2s ease;
    }
    td,
    th {
      padding: 12px 10px;
      box-sizing: border-box;
    }
    th {
      color: #909399;
    }
    td {
      color: #515a6e;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      word-break: break-all;
    }
    th > .thInnerWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    tbody {
      tr:hover {
        background-color: #f4f6f9;
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
  .expandableTh,
  .checkboxTh {
    min-width: 50px;
  }
  .actionTh {
    min-width: 150px;
  }
  .checkIcon {
    width: 50px;
    min-width: 50px;
    text-align: center;
  }
  .expandIcon {
    width: 50px;
    min-width: 50px;
    text-align: center;
    cursor: pointer;
    position: relative;
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -0.5em;
      margin-left: -0.5em;
      transition: transform 0.2s ease;
    }
  }
  .expandIconActive {
    .icon {
      transform: rotate(90deg);
    }
  }
  &.striped {
    tbody {
      tr.oddTr {
        background: #f9f9f9;
      }
      tr.evenTr {
        background: #fff;
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
  .actionTd {
    text-align: center;
  }
  .tableLoading {
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

