<template>
  <div class="navs">
    <div>
      <span>基础菜单：</span>
      <b-nav :selected.sync="activeIndex1" style="margin-top:20px;">
        <b-nav-item name="hot-pot">
          火锅 🍲
        </b-nav-item>
        <b-sub-nav name='fruit'>
          <template slot="title">水果 🍓</template>
          <b-nav-item name="watermelon">
            西瓜 🍉
          </b-nav-item>
          <b-nav-item name="orange">
            橘子 🍊
          </b-nav-item>
          <b-sub-nav name='apple'>
            <template slot="title">苹果 🍎</template>
            <b-nav-item name="red-apple">
              红苹果 🍎
            </b-nav-item>
            <b-nav-item name="green-pple">
              青苹果 🍏
            </b-nav-item>
          </b-sub-nav>
        </b-sub-nav>
        <b-nav-item name="milk">
          牛奶 🥛
        </b-nav-item>
        <b-sub-nav name='hamburger'>
          <template slot="title">汉堡 🍔 </template>
          <b-nav-item name="burger-king">
            汉堡王 🍔
          </b-nav-item>
          <b-nav-item name="fanzai">
            凡仔汉堡 🍔
          </b-nav-item>
        </b-sub-nav>
      </b-nav>
    </div>

    <div class="box">
      <span>垂直菜单：</span>
      <b-card style="margin-top:20px;">
        <b-nav :selected.sync="activeIndex2" vertical class="verticalNav">
          <b-nav-item name="hot-pot">
            火锅 🍲
          </b-nav-item>
          <b-sub-nav name='fruit'>
            <template slot="title">水果 🍓</template>
            <b-nav-item name="watermelon">
              西瓜 🍉
            </b-nav-item>
            <b-nav-item name="orange">
              橘子 🍊
            </b-nav-item>
            <b-sub-nav name='apple'>
              <template slot="title">苹果 🍎</template>
              <b-nav-item name="red-apple">
                红苹果 🍎
              </b-nav-item>
              <b-nav-item name="green-pple">
                青苹果 🍏
              </b-nav-item>
            </b-sub-nav>
          </b-sub-nav>
          <b-nav-item name="milk">
            牛奶 🥛
          </b-nav-item>
          <b-sub-nav name='hamburger'>
            <template slot="title">汉堡 🍔 </template>
            <b-nav-item name="burger-king">
              汉堡王 🍔
            </b-nav-item>
            <b-nav-item name="fanzai">
              凡仔汉堡 🍔
            </b-nav-item>
          </b-sub-nav>
        </b-nav>
      </b-card>

    </div>

  </div>
</template>

<script>
import Nav from '../../../src/components/nav';
import SubNav from '../../../src/components/sub-nav';
import NavItem from '../../../src/components/nav-item';
import Card from '../../../src/components/card';
export default {
  components: {
    'b-nav': Nav,
    'b-sub-nav': SubNav,
    'b-nav-item': NavItem,
    'b-card': Card,
  },
  data() {
    return {
      activeIndex1: ['red-apple'],
      activeIndex2: ['fanzai'],
    };
  },
  methods: {
    tabClick(currentTab) {},
  },
};
</script>

<style lang="scss" scoped>
.navs {
  margin-left: 16px;
  .verticalNav {
    width: 200px;
    border-right: 1px #dcdee2 solid;
  }
  .box {
    margin-top: 50px;
  }
}
</style>
