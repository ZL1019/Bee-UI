const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  });
  it('可以设置 value.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        value: '666'
      }
    }).$mount()
    const inputElement = vm.$el.querySelector('input')
    expect(inputElement.value).to.eq('666')
    vm.$destroy()
  })
  it('可以设置 disabled.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    let inputEl = vm.$el.querySelector('input')
    let disabled = inputEl.getAttribute('disabled')
    expect(disabled).to.eq('disabled')
    vm.$destroy()
  })
  it('可以设置 readonly.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    let inputEl = vm.$el.querySelector('input')
    let readonly = inputEl.getAttribute('readonly')
    expect(readonly).to.eq('readonly')
    vm.$destroy()
  })
  it('可以设置 autofocus.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        autofocus: true
      }
    }).$mount()
    let inputEl = vm.$el.querySelector('input')
    let autofocus = inputEl.getAttribute('autofocus')
    expect(autofocus).to.eq('autofocus')
    vm.$destroy()
  })
  it('可以设置 maxlength.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        maxlength: 2
      }
    }).$mount()
    let inputEl = vm.$el.querySelector('input')
    let maxlength = inputEl.getAttribute('maxlength')
    expect(maxlength).to.eq('2')
    vm.$destroy()
  })
  it('可以设置 autocomplete.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        autocomplete: "on"
      }
    }).$mount()
    let inputEl = vm.$el.querySelector('input')
    let autocomplete = inputEl.getAttribute('autocomplete')
    expect(autocomplete).to.eq('on')
    vm.$destroy()
  })
  it('可以设置 placeholder.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        placeholder: '888'
      }
    }).$mount()
    let inputEl = vm.$el.querySelector('input')
    let placeholder = inputEl.getAttribute('placeholder')
    expect(placeholder).to.eq('888')
    vm.$destroy()
  })
  // it('可以设置disabled.', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       disabled: true
  //     }
  //   }).$mount()
  //   let disabled = vm.$el.getAttribute('disabled')
  //   expect(disabled).to.eq('disabled')
  //   vm.$destroy()
  // })
  // it('可以设置type.', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       type: 'success'
  //     }
  //   }).$mount()
  //   let haveTypeClass = vm.$el.className.indexOf('b-btn-success') > -1
  //   expect(haveTypeClass).to.eq(true)
  //   vm.$destroy()
  // })
  // it('可以设置 circle.', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       circle: true
  //     }
  //   }).$mount()
  //   let haveCircleClass = vm.$el.className.indexOf('b-btn-circle') > -1
  //   expect(haveCircleClass).to.eq(true)
  //   vm.$destroy()
  // })
  // it('可以设置loading.', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       iconName: 'set',
  //       loading: true
  //     }
  //   }).$mount()
  //   const useElement = vm.$el.querySelector('use')
  //   let href = useElement.getAttribute('xlink:href')
  //   expect(href).to.eq('#b-loading')
  //   vm.$destroy()
  // })
  // it('icon 默认的 order 是 0', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       iconName: 'set',
  //     }
  //   })
  //   vm.$slots.default = [{'text':'test'}];
  //   vm.$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('0')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  // it('设置 iconPosition 可以改变 order', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       iconName: 'download',
  //       iconPosition: 'right'
  //     },
  //   })
  //   vm.$slots.default = [{'text':'test'}];
  //   vm.$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('1')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  // it('点击 button 触发 click 事件', () => {
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //     propsData: {
  //       iconName: 'set',
  //     }
  //   }).$mount()

  //   const callback = sinon.fake();
  //   // const callback = function(){};
  //   vm.$on('click', callback)
  //   vm.$el.click()
  //   expect(callback).to.have.been.called
  // })
})