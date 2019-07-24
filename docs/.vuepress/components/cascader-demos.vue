<template>
  <div class="cascaders">
    <div>
      <span>基础用法：</span>
      <b-cascader trigger="click" :options.sync=options1 :selected.sync=selectedCascader1 placeholder="请选择相应城市">
      </b-cascader>
    </div>
    <div style="margin-top:30px;">
      <span>动态加载：</span>
      <b-cascader trigger="click" :options.sync=options2 :selected.sync=selectedCascader2 placeholder="请选择相应城市" :load-data="loadData">
      </b-cascader>
    </div>
  </div>
</template>

<script>
import Cascader from '../../../src/components/cascader';
import cityies from './city_data';

function ajax(parentId = 0) {
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
      options2: [],
      selectedCascader1: [],
      selectedCascader2: [],
      options1: [
        {
          id: 1,
          label: '江苏',
          children: [
            {
              id: 2,
              label: '苏州',
              children: [
                {
                  id: 3,
                  label: '姑苏',
                },
              ],
            },
          ],
        },
        {
          id: 4,
          label: '浙江',
          children: [
            {
              id: 5,
              label: '杭州',
              children: [
                {
                  id: 6,
                  label: '西湖',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    ajax().then(res => {
      this.options2 = [...res];
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
