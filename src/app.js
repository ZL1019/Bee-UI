import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Sticky from './sticky'

Vue.component('b-icon', Icon);
Vue.component('b-button', Button);
Vue.component('b-button-group', ButtonGroup);
Vue.component('b-input', Input);
Vue.component('b-row', Row)
Vue.component('b-col', Col)
Vue.component('b-tabs', Tabs)
Vue.component('b-tabs-head', TabsHead)
Vue.component('b-tabs-body', TabsBody)
Vue.component('b-tabs-item', TabsItem)
Vue.component('b-tabs-pane', TabsPane)
Vue.component('b-popover', Popover)
Vue.component('b-collapse', Collapse)
Vue.component('b-collapse-item', CollapseItem)
Vue.component('b-sticky', Sticky)

import plugins from '../plugins'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
//Vue.use(iView);
Vue.use(plugins)

new Vue({
  el: '#app',
  data() {
    return {
      isLoading: false,
      isDisabled: true,
      value1:'',
      value2:'',
      value3:'',
      selectedTab:'item3',
      selected:['a','b']
    }
  },
  watch:{
    selectedTab(newValue,oldValue){
      // console.log('oldValue: ', oldValue);
      // console.log('newValue: ', newValue);
    }
  },
  methods: {
    focus(){
      this.$refs.input.focus()
    },
    inputKeyup(value){
      console.log('keyup: ', value);
    },
    inputBlur(value){
      console.log('blur: ', value);
    },
    inputFocus(value){
      console.log('focus: ', value);
    },
    inputEnter(value){
      console.log('enter: ', value);
    },
    inputChange(value){
      console.log('change: ', value);
    },
    tabClick(a,b){
      // console.log('b: ', b);
      // console.log('a: ', a);

    },
    changeSelected(name){
      this.selectedTab = name
    },
    xxx(){
      console.log('xxx')
      console.log(this.selectedTab);
    },
    openMsg() {
      this.$message(`网络错误!!! ${(Math.random()*100).toFixed(2)}`,{
        top: 24,
        enableHtml: true,
        duration:100,
        showClose: true,
        onClose: ()=> {
          console.log('用户关闭 message 之后的回调')
        }
      })
    },
    download() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
});



