<template>
  <div class="pagers">
    <b-pager :totalPage="20" :currentPage.sync="currentPage"></b-pager>
  </div>
</template>

<script>
import Pager from '../../../src/components/pager';

export default {
  components: {
    'b-pager': Pager,
  },
  data() {
    return {
      currentPage:3
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pagers {
  margin-left: 16px;
}
</style>
