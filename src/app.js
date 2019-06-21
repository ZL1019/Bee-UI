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

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

// 单元测试
{
  // type
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      type: 'success'
    }
  })
  vm.$mount()
  let classList = vm.$el.classList.value;
  let haveType = classList.indexOf('b-btn-success') !== -1;
  expect(haveType).to.eq(true)
  vm.$destroy()
}
{
  // circle
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      circle: true
    }
  })
  vm.$mount()
  let classList = vm.$el.classList.value;
  let haveCircle = classList.indexOf('b-btn-circle') !== -1;
  expect(haveCircle).to.eq(true)
  vm.$destroy()
}
{
  // iconName
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      iconName: 'left'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#b-left')
  vm.$destroy()
}
{
  // loading
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      iconName: 'left',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#b-loading')
  vm.$destroy()
}
{
  // disabled
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      disabled: true,
    }
  })
  vm.$mount()
  let disabled = vm.$el.disabled
  expect(disabled).to.eq(true)
  vm.$destroy()
}
{
  // order
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      iconName: 'set',
      iconPosition: 'right',
    },
  })
  vm.$slots.default = [{'text': 'test'}];
  vm.$mount(div)
  let svgElement = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svgElement)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

{
  // click
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      iconName: 'left',
      loading: true
    }
  })
  let spy = chai.spy(function () {
  })
  vm.$mount()
  vm.$on('click', spy)
  vm.$el.click()
  expect(spy).to.have.been.called()
  vm.$destroy()
}
