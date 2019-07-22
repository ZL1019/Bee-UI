<template>
  <div class="btns">
    <div>
      <span>基础用法：</span>
      <b-input v-model="value1" placeholder="请输入..."></b-input>      
    </div>
    <div>
      <span>清空属性：</span>
      <b-input v-model="value2" placeholder="请输入..." clearable></b-input>      
    </div>
    <div>
      <span>只读状态：</span>
      <b-input v-model="value3" placeholder="请输入..." readonly></b-input>      
    </div>
    <div>
      <span>禁用状态：</span>
      <b-input v-model="value4" placeholder="请输入..." disabled></b-input>      
    </div>
    <div>
      <span>错误状态：</span>
      <b-input v-model="value5" placeholder="请输入..." error></b-input>      
    </div>
    <div>
      <span>文本类型：</span>
      <b-input v-model="value6" placeholder="请输入..." type="textarea"></b-input>      
    </div>
    <div>
      <span>自动高度：</span>
      <b-input v-model="value7" placeholder="请输入..." type="textarea" autosize></b-input>      
    </div>
  </div>
</template>

<script>
import Input from '../../../src/components/input';
export default {
  components: {
    'b-input': Input,
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: 'readonly',
      value4: 'disabled',
      value5: 'error',
      value6: '',
      value7: '',
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 16px;
}
</style>
