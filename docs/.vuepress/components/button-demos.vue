<template>
  <div>
    <b-button>Default</b-button>
    <b-button disabled>Disabled</b-button>
    <b-button type="primary" icon-name="set" icon-position="right">Primary</b-button>
    <b-button type="info" icon-name="search">Information</b-button>
    <b-button type="success" icon-name="download">Success</b-button>
    <b-button type="info" icon-name="download" @click="download" :loading="isLoading" circle></b-button>
  </div>
</template>

<script>
import Button from '../../../src/components/button';
export default {
  components: {
    'b-button': Button,
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