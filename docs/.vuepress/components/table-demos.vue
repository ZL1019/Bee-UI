<template>
  <div class="tables">
    <b-table checkable expandable expand-field='ds' :loading="loading" @sortChange="sortChange" :data="tableData" border striped align="left" :selectedRows.sync="selectedRows">
      <b-table-column label="姓名" field="name">
        <template slot-scope="row">
          <a href="#">
            {{row.value}}
          </a>
        </template>
      </b-table-column>
      <b-table-column label="成绩" field="score" :sortable="true">
      </b-table-column>
      <b-table-column label="排名" field="ranking">
      </b-table-column>
      <template slot-scope="row">
        <b-button @click="edit(row)">编辑</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import Table from '../../../src/components/table';
import Button from '../../../src/components/button';
import TableColumn from '../../../src/components/table-column';

export default {
  components: {
    'b-table': Table,
    'b-button': Button,
    'b-table-column': TableColumn,
  },
  data() {
    return {
      loading: false,
      selectedRows: [],
      tableData: [
        { id: 1, name: '木木', score: 70, ranking: 3, ds: '123 测试' },
        { id: 2, name: '小小', score: 99, ranking: 1 },
        { id: 3, name: '冰冰', score: 78, ranking: 2 },
        { id: 4, name: '薯片', score: 27, ranking: 5 },
        { id: 5, name: '小龙', score: 46, ranking: 4 },
      ],
    };
  },
  methods: {
    edit() {},
    sortChange() {},
  },
};
</script>

<style lang="scss">
.tables {
  margin-left: 16px;
  table {
    display: table !important;
    margin: 0;
  }
}
</style>
