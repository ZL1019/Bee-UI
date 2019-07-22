<template>
  <div class="collapses">
    <span>1. 基础用法：</span>
    <b-collapse :selected.sync="selected">
      <b-collapse-item name='a' title="标题一">内容 1</b-collapse-item>
      <b-collapse-item name='b' title="标题二">内容 2</b-collapse-item>
      <b-collapse-item name='c' title="标题三">内容 3</b-collapse-item>
    </b-collapse>

    <span>2. 手风琴效果：（每次只能展开一个面板）</span>
    <b-collapse :selected.sync="selected2" accordion>
      <b-collapse-item name='a' title="标题一">内容 1</b-collapse-item>
      <b-collapse-item name='b' title="标题二">内容 2</b-collapse-item>
      <b-collapse-item name='c' title="标题三">内容 3</b-collapse-item>
    </b-collapse>


  </div>
</template>

<script>
import Collapse from '../../../src/components/collapse';
import CollapseItem from '../../../src/components/collapse-item';
export default {
  components: {
    'b-collapse': Collapse,
    'b-collapse-item': CollapseItem,
  },
  data() {
    return {
      selected: ['a', 'b'],
      selected2: ['a'],
    };
  },
};
</script>

<style lang="scss" scoped>
.collapses {
  margin-left: 16px;
  .b-collapse{
    margin:10px auto 30px;
  }
}
</style>
