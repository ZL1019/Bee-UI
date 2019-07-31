<template>
  <div class="b-pager">
    <span class="b-pager-item icon" :class="{'disabled':currentPage === 1}">
      <b-icon name="left"></b-icon>
    </span>
    <template v-for="(page,index) in pages">
      <template v-if="page === currentPage">
        <span :key="index" class="b-pager-item active">{{page}}</span>
      </template>
      <template v-else-if="page === '...'" >
        <span :key="index" class="b-pager-item ellipsis">...</span>
      </template>
      <template v-else>
        <span :key="index" class="b-pager-item">{{page}}</span>
      </template>
    </template>
    <span class="b-pager-item icon" :class="{'disabled':currentPage === totalPage}">
      <b-icon name="right"></b-icon>
    </span>
  </div>
</template>

<script>

import Icon from './icon'

export default {
  name: 'bear-pager',
  components:{ 
    'b-icon':Icon
  },
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    let unUniquePages = [   
      1,
      this.currentPage - 2,
      this.currentPage - 1,
      this.currentPage,
      this.currentPage + 1,
      this.currentPage + 2,
      this.totalPage,
    ];
    let unique = (arr) => {
      return [...new Set(arr)].filter(item => item >= 1 && item <= this.totalPage);
    }
    let pagesNoEllipsis = unique(unUniquePages);
    let pages = pagesNoEllipsis.reduce((old, current, index) => {
      old.push(current);
      if (
        pagesNoEllipsis[index + 1] &&
        pagesNoEllipsis[index + 1] - pagesNoEllipsis[index] > 1
      ) {
        old.push('...');
      }
      return old;
    }, []);
    return {
      pages,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.b-pager {
  display: flex;
  span.b-pager-item {
    display:inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px #dcdee2 solid;
    border-radius: 4px;
    cursor: pointer;
    min-width: 34px;
    line-height: 32px;
    background-color: #fff;
    // text-align: center;
    color: #515a6e;
    font-size: 12px;
    transition: all 0.2s ease-in-out;;
    &.active{
      color: #2d8cf0;
      border-color: #2d8cf0;
    }
    &:hover{
      color: #2d8cf0;
      border-color: #2d8cf0;
    }
    &.ellipsis{
      border:none;
    }
    &.icon:hover{
      fill: #2d8cf0;
    }
    &.disabled{
      cursor: not-allowed;
      fill:#dcdee2;
    }
    &.disabled:hover{
      border-color: #dcdee2;
      fill:#dcdee2;
    }
  }
  span:not(:first-child) {
    margin-left: 4px;
  }
}
</style>

