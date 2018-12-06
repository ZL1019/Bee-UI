import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);


new Vue({
  el: '#app',
  data(){
    return {
      isLoading: false
    }
  },
  methods:{
    download(){
      this.isLoading = true;
      setTimeout(()=>{
        this.isLoading = false
      },2000)
    }
  }
});
