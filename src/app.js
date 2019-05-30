import Vue from 'vue'
import Icon from './icon'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('b-icon', Icon);
Vue.component('b-button', Button);
Vue.component('b-button-group', ButtonGroup);
Vue.component('b-input', Input);
Vue.component('b-row', Row)
Vue.component('b-col', Col)

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
      msg:123
    }
  },
  methods: {
    openMsg() {
      this.$message('This is a message !',{
        autoClose: false,
        closeButton: {
          text: 'close',
          callback: ()=>{
            console.log('用户关闭 message 之后的回调')
          }
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
