<template>
  <ul class="icon-warpper">
    <li><b-icon name="set"></b-icon></li>
    <li><b-icon name="search"></b-icon></li>
    <li><b-icon name="left"></b-icon></li>
    <li><b-icon name="right"></b-icon></li>
    <li><b-icon name="download"></b-icon></li>
    <li><b-icon name="loading"></b-icon></li>
    <li><b-icon name="close"></b-icon></li>    
  </ul>
</template>

<script>
import Icon from '../../../src/components/icon';
export default {
  components: {
    'b-icon': Icon,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    download() {
      this.isLoading = !this.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-warpper {
  list-style: none;
  padding:0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
li{
  border: 1px solid #eaeefb;
  margin-right:-1px;
  margin-top:-1px;
  width:120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 2em;
  height: 2em;
  
}
</style>