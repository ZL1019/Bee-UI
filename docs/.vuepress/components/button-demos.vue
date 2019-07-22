<template>
  <div class="btns">
    <div>
      <span>基础按钮：</span>
      <b-button>Default</b-button>
      <b-button type="primary">Primary</b-button>
      <b-button type="success">Success</b-button>
      <b-button type="info">Information</b-button>
      
    </div>
    <div>
      <span>禁用按钮：</span>
      <b-button disabled>Disabled</b-button>
    </div>
    <div>
      <span>添加图标：</span>
      <b-button icon-name="like">With Icon</b-button>
      <b-button icon-name="edit" icon-position="right">Change Icon Position</b-button>
    </div>
    <div>
      <span>圆形按钮：</span>
      <b-button icon-name="search" circle></b-button>
      <b-button type="info" icon-name="download" @click="download" :loading="isLoading" circle></b-button>
    </div>
    <div>
      <span>成组按钮：</span>
      <b-button-group>
        <b-button icon-name="left">Backward</b-button>
        <b-button>Home</b-button>
        <b-button icon-name="right" icon-position="right">Forward</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import Button from '../../../src/components/button';
import ButtonGroup from '../../../src/components/button-group';
export default {
  components: {
    'b-button': Button,
    'b-button-group': ButtonGroup,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    download() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.btns {
  display: flex;
  flex-wrap: wrap;
  height: 200px;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 16px;
}
</style>
