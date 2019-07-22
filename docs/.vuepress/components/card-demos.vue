<template>
  <div class="cards">
    <span>1. 基础用法：</span>
    <b-card>
      <div slot="header">
        卡片名称
      </div>
      <p>内容一</p>
      <p>内容二</p>
    </b-card>

    <span>2. 简单卡片：</span>
    <b-card>
      <p>内容一</p>
      <p>内容二</p>
    </b-card>

    <span>3. 卡片阴影：</span>
    <div class="shadowDemos">
      <b-card shadow="always">
        <p>总是显示</p>
      </b-card>

      <b-card shadow="hover">
        <p>鼠标悬浮时显示</p>
      </b-card>

      <b-card shadow="never">
        <p>从不显示</p>
      </b-card>
    </div>

  </div>
</template>

<script>
import Card from '../../../src/components/card';
export default {
  components: {
    'b-card': Card,
  },
  data() {
    return {
      bodyStyle: {
        padding: '20px',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.cards {
  margin-left: 16px;
  .b-card{
    margin:10px auto 20px;
  }
  .shadowDemos{
    display: flex;
    justify-content: space-between;
    .b-card{
      width:30%;
      
    }
  }
}

</style>
