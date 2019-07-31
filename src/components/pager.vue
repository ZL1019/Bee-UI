<template>
  <div class="b-pager">
    <span class="b-pager-item icon" :class="{'disabled':currentPage === 1}" @click="onClick(currentPage - 1)">
      <b-icon name="left"></b-icon>
    </span>
    <template v-for="(page,index) in pages">
      <template v-if="page === currentPage">
        <span :key="index" class="b-pager-item active">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span :key="index" class="b-pager-item ellipsis">...</span>
      </template>
      <template v-else>
        <span :key="index" class="b-pager-item" @click="onClick(page)">{{page}}</span>
      </template>
    </template>
    <span class="b-pager-item icon" :class="{'disabled':currentPage === totalPage}" @click="onClick(currentPage + 1)">
      <b-icon name="right"></b-icon>
    </span>
  </div>
</template>

<script>
import Icon from './icon';

export default {
  name: 'bear-pager',
  components: {
    'b-icon': Icon,
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
  methods: {
    onClick(page) {
      this.$emit('update:currentPage', page);
    },
  },
  computed: {
    pages() {
      let originalPages= [
        1,
        this.currentPage - 2,
        this.currentPage - 1,
        this.currentPage,
        this.currentPage + 1,
        this.currentPage + 2,
        this.totalPage,
      ];
      let pages =  [...new Set(originalPages)].filter( n => n >= 1 && n <= this.totalPage);
    
      return pages.reduce((preArr, current, index) => {
        preArr.push(current);
        if (
          pages[index + 1] &&
          pages[index + 1] - pages[index] > 1
        ) {
          if (pages[index + 1] - pages[index] === 2) {
            preArr.push(pages[index] + 1);
          } else {
            preArr.push('...');
          }
        }
        return preArr;
      }, []);
    },
  },
};
</script>

<style lang="scss" scoped>
.b-pager {
  display: flex;
  span.b-pager-item {
    display: inline-flex;
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
    transition: all 0.2s ease-in-out;
    &.active {
      color: #2d8cf0;
      border-color: #2d8cf0;
    }
    &:hover {
      color: #2d8cf0;
      border-color: #2d8cf0;
    }
    &.ellipsis {
      border: none;
    }
    &.icon:hover {
      fill: #2d8cf0;
    }
    &.disabled {
      cursor: not-allowed;
      fill: #dcdee2;
    }
    &.disabled:hover {
      border-color: #dcdee2;
      fill: #dcdee2;
    }
  }
  span:not(:first-child) {
    margin-left: 4px;
  }
}
</style>

