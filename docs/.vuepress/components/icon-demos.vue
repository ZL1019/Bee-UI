<template>
  <ul class="icon-warpper">
    <li>
      <b-icon name="set"></b-icon>
      <div>set</div>
    </li>
    <li>
      <b-icon name="search" color="red">search</b-icon><div>search</div>
    </li>
    <li>
      <b-icon name="left">left</b-icon><div>left</div>
    </li>
    <li>
      <b-icon name="right">right</b-icon><div>right</div>
    </li>
    <li>
      <b-icon name="download">download</b-icon><div>download</div>
    </li>
    <li>
      <b-icon name="loading">loading</b-icon><div>loading</div>
    </li>
    <li>
      <b-icon name="close">close</b-icon><div>close</div>
    </li>
    <li>
      <b-icon name="clock">clock</b-icon><div>clock</div>
    </li>
    <li>
      <b-icon name="remind">remind</b-icon><div>remind</div>
    </li>
    <li>
      <b-icon name="delete">delete</b-icon><div>delete</div>
    </li>
    <li>
      <b-icon name="category">category</b-icon><div>category</div>
    </li>
    <li>
      <b-icon name="export">export</b-icon><div>export</div>
    </li>
    <li>
      <b-icon name="import">import</b-icon><div>import</div>
    </li>
    <li>
      <b-icon name="refeash">refeash</b-icon><div>refeash</div>
    </li>
    <li>
      <b-icon name="just">just</b-icon><div>just</div>
    </li>
    <li>
      <b-icon name="clear">clear</b-icon><div>clear</div>
    </li>
    <li>
      <b-icon name="download2">download2</b-icon><div>download2</div>
    </li>
    <li>
      <b-icon name="data">data</b-icon><div>data</div>
    </li>
    <li>
      <b-icon name="video">video</b-icon><div>video</div>
    </li>
    <li>
      <b-icon name="add">add</b-icon><div>add</div>
    </li>
    <li>
      <b-icon name="msg">msg</b-icon><div>msg</div>
    </li>
    <li>
      <b-icon name="like">like</b-icon><div>like</div>
    </li>
    <li>
      <b-icon name="maintain">maintain</b-icon><div>maintain</div>
    </li>
    <li>
      <b-icon name="img">img</b-icon><div>img</div>
    </li>
    <li>
      <b-icon name="home">home</b-icon><div>home</div>
    </li>
    <li>
      <b-icon name="notice">notice</b-icon><div>notice</div>
    </li>
    <li>
      <b-icon name="remind2">remind2</b-icon><div>remind2</div>
    </li>
    <li>
      <b-icon name="search2">search2</b-icon><div>search2</div>
    </li>
    <li>
      <b-icon name="audit">audit</b-icon><div>audit</div>
    </li>
    <li>
      <b-icon name="collect">collect</b-icon><div>collect</div>
    </li>
    <li>
      <b-icon name="cart">cart</b-icon><div>cart</div>
    </li>
    <li>
      <b-icon name="scan">scan</b-icon><div>scan</div>
    </li>
    <li>
      <b-icon name="set2">set2</b-icon><div>set2</div>
    </li>
    <li>
      <b-icon name="delete2">delete2</b-icon><div>delete2</div>
    </li>
    <li>
      <b-icon name="calendar">calendar</b-icon><div>calendar</div>
    </li>
    <li>
      <b-icon name="empty">empty</b-icon><div>empty</div>
    </li>
    <li>
      <b-icon name="task">task</b-icon><div>task</div>
    </li>
    <li>
      <b-icon name="clock2">clock2</b-icon><div>clock2</div>
    </li>
    <li>
      <b-icon name="write">write</b-icon><div>write</div>
    </li>
    <li>
      <b-icon name="view">view</b-icon><div>view</div>
    </li>
    <li>
      <b-icon name="gift">gift</b-icon><div>gift</div>
    </li>
    <li>
      <b-icon name="vip">vip</b-icon><div>vip</div>
    </li>
    <li>
      <b-icon name="pass">pass</b-icon><div>pass</div>
    </li>
    <li>
      <b-icon name="box">box</b-icon><div>box</div>
    </li>
    <li>
      <b-icon name="user">user</b-icon><div>user</div>
    </li>
    <li>
      <b-icon name="locate">locate</b-icon><div>locate</div>
    </li>
    <li>
      <b-icon name="order">order</b-icon><div>order</div>
    </li>
    <li>
      <b-icon name="like2">like2</b-icon><div>like2</div>
    </li>
    <li>
      <b-icon name="computer">computer</b-icon><div>computer</div>
    </li>
    <li>
      <b-icon name="address">address</b-icon><div>address</div>
    </li>
    <li>
      <b-icon name="safe">safe</b-icon><div>safe</div>
    </li>
    <li>
      <b-icon name="print">print</b-icon><div>print</div>
    </li>
    <li>
      <b-icon name="cancel">cancel</b-icon><div>cancel</div>
    </li>
    <li>
      <b-icon name="edit">edit</b-icon><div>edit</div>
    </li>
    <li>
      <b-icon name="save">save</b-icon><div>save</div>
    </li>
    <li>
      <b-icon name="upload">upload</b-icon><div>upload</div>
    </li>
    <li>
      <b-icon name="reset">reset</b-icon><div>reset</div>
    </li>
    <li>
      <b-icon name="down">down</b-icon><div>down</div>
    </li>
    <li>
      <b-icon name="attachment">attachment</b-icon><div>attachment</div>
    </li>
    <li>
      <b-icon name="input-close">input-close</b-icon><div>input-close</div>
    </li>
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
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
li {
  border: 1px solid #eaeefb;
  margin-right: -1px;
  margin-top: -1px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    margin-top: 12px;
  }
}
.icon {
  width: 2em;
  height: 2em;
}
</style>