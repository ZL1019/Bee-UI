<template>
  <div class="b-nav">
    {{namePath}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bear-nav',
  provide(){
    return {
      root: this
    }
  },
  data() {
    return {
      items:[],
      namePath:[]
    };
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.updateSelected();
    this.listenSelectedChange();
  },
  methods: {
    getChildren(child){
      this.items.push(child)
    },
    updateSelected() {
      this.items.forEach(item => {
        item.active = this.selected.indexOf(item.name) > -1;
      });
    },
    listenSelectedChange() {
      this.items.forEach(item => {
        item.$on('changeSelected', name => {
          if (this.selected.indexOf(name) < 0) {
            let copy = JSON.parse(JSON.stringify(this.selected));
            this.multiple ? '' : copy = [];
            copy.push(name);
            this.$emit('update:selected', copy);
            this.$nextTick(() => this.updateSelected());
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.b-nav {
  display: flex;
  line-height: 2;
  font-size: 14px;
  position: relative;
  &::after{
    content:'';
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    background:#dcdee2;
    height:1px;
    display: block;
  }
}
</style>
