import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('b-button', Button);
Vue.component('b-icon', Icon);
Vue.component('b-button-group', ButtonGroup);

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);


new Vue({
  el: '#app',
  data() {
    return {
      isLoading: false,
      isDisabled: true
    }
  },
  methods: {
    openMsg() {
      alert('tip')
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
  let haveClass = classList.indexOf('b-btn-success') !== -1;
  expect(haveClass).to.eq(true)
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
}

{
  // order
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      iconName:'set',
      iconPosition: 'left',
    }
  })
  vm.$mount(div)
  let svgElement = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svgElement)
  expect(order).to.eq('0')
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
  let spy = chai.spy(function(){})
  vm.$mount()
  vm.$on('click',spy)
  vm.$el.click()
  expect(spy).to.have.been.called()
}