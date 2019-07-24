<template>
  <div class="cascaders">
    <b-cascader   
      trigger="click" 
      :load-data="loadData" 
      :options.sync=options 
      popover-height="180px" 
      :selected.sync=selectedCascader
    >
    </b-cascader>
  </div>
</template>

<script>

import Cascader from '../../../src/components/cascader';
import cityies from './city_data';

function ajax(parentId = 0) {
  console.log(123);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = cityies.filter(item => item.parent_id === parentId);
      resolve(result);
    }, 200);
  });
}

export default {
  components: {
    'b-cascader': Cascader,
  },
  data() {
    return {
      options: [],
      selectedCascader: [],
    };
  },
  mounted() {
    ajax().then(res => {
      this.options = [...res];
    });
  },
  methods: {
    loadData({ id }, callback) {
      ajax(id).then(res => {
        callback(res);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cascaders {
  margin-left: 16px;
}
</style>
