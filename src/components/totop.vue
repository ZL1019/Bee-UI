<template>
  <div class="totop">
    <h1 @click="onClick">to top</h1>
  </div>
</template>

<script>
export default {
  name:'bear-totop',
  methods:{
    onClick(){
      // this.$el.scrollTop
      console.log('this.$el.scrollTop: ', this.$el.scrollTop);
    }
  }
}
</script>