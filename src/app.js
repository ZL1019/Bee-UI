import Vue from 'vue'
import Button from './button'

Vue.component('b-button',Button)

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


new Vue({
  el:'#app'
})
