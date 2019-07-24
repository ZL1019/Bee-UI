<template>
  <div class="tabs">
    <b-tabs v-model="selectedTab">
      <b-tabs-head>
        <b-tabs-item name="1">标签一</b-tabs-item>
        <b-tabs-item name="2">标签二</b-tabs-item>
        <b-tabs-item name="3">标签三</b-tabs-item>
      </b-tabs-head>
      <b-tabs-body>
        <b-tabs-pane name="1">内容一</b-tabs-pane>
        <b-tabs-pane name="2">内容二</b-tabs-pane>
        <b-tabs-pane name="3">内容三</b-tabs-pane>
      </b-tabs-body>
    </b-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/components/tabs';

import TabsHead from '../../../src/components/tabs-head';
import TabsBody from '../../../src/components/tabs-body';
import TabsItem from '../../../src/components/tabs-item';
import TabsPane from '../../../src/components/tabs-pane';

export default {
  components: {
    'b-tabs': Tabs,
    'b-tabs-head': TabsHead,
    'b-tabs-body': TabsBody,
    'b-tabs-item': TabsItem,
    'b-tabs-pane': TabsPane,
  },
  data() {
    return {
      selectedTab:'1'
    };
  },
  methods: {
    tabClick(currentTab) {
      
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  margin-left: 16px;
  .box1 {
  }
  .box2 {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    width: 200px;
    height: 200px;
    .b-popover#top {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .b-popover#bottom {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .b-popover#left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .b-popover#right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .box3 {
    margin-top: 160px;
  }
}
</style>
