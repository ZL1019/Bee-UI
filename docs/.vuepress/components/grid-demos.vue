<template>
  <div class="grids">
    <span>1. 基础用法：</span>
    <b-row>
      <b-col span='12'>
        <div>col-12</div>
      </b-col>
      <b-col span='12'>
        <div>col-12</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col span='8'>
        <div>col-8</div>
      </b-col>
      <b-col span='8'>
        <div>col-8</div>
      </b-col>
      <b-col span='8'>
        <div>col-8</div>
      </b-col>
    </b-row>

    <b-row>
      <b-col span='6'>
        <div>col-6</div>
      </b-col>
      <b-col span='6'>
        <div>col-6</div>
      </b-col>
      <b-col span='6'>
        <div>col-6</div>
      </b-col>
      <b-col span='6'>
        <div>col-6</div>
      </b-col>
    </b-row>

    <span>2. 区块间隔：</span>
    <b-row gutter="20">
      <b-col span="8">
        <div>col-8</div>
      </b-col>
      <b-col span="8">
        <div>col-8</div>
      </b-col>
      <b-col span="8">
        <div>col-8</div>
      </b-col>
    </b-row>

    <span>3. 左右偏移：</span>
    <b-row>
      <b-col span="4" offset="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4" offset="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4" offset="4">
        <div>col-4</div>
      </b-col>
    </b-row>

    <span>4. 横向排列：</span>
    <b-row justify="start">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <b-row justify="around">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <b-row justify="center">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <b-row justify="between">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <b-row justify="end">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <span>5. 竖向排列：</span>
    <b-row align="top">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4 <br>text</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <b-row align="middle">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4<br>text</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <b-row align="bottom">
      <b-col span="4">
        <div>col-4</div>
      </b-col>
      <b-col span="4">
        <div>col-4<br>text</div>
      </b-col>
      <b-col span="4">
        <div>col-4</div>
      </b-col>
    </b-row>
    <span>6. 响应式：</span>
    <b-row >
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
      <b-col :xs={span:24} :md={span:8} :lg={span:4}>
        <div>col</div>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import Row from '../../../src/components/row';
import Col from '../../../src/components/col';
export default {
  components: {
    'b-row': Row,
    'b-col': Col,
  }
};
</script>

<style lang="scss" scoped>
.grids {
  margin-left: 16px;
  .b-row {
    margin-bottom: 20px;
  }
  .b-col {
    div {
      padding: 10px 0;
      color: #fff;
      text-align: center;
    }
    &:nth-child(even) {
      div{
        background: rgba(0, 153, 229, 0.9);
      }
      
    }
    &:nth-child(odd) {
      div{
        background: rgba(0, 153, 229, 0.7);
      }
      
    }
  }
}
</style>
