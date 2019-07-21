const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  // 行为驱动测试(由 Moka 引入，断言由 chai 引入)：行为描述
  // 通过 it 函数来隔绝测试用例，函数名叫 '存在'
  it('存在.', () => {
    // expect(Button).be.ok
    expect(Button).to.exist
    // expect(Button).be.not.ok
    // expect([1,2]).to.deep.eq([1,3])
  });
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'set'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#b-set')
    vm.$destroy()
  })
  it('可以设置disabled.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    let disabled = vm.$el.getAttribute('disabled')
    expect(disabled).to.eq('disabled')
    vm.$destroy()
  })
  it('可以设置type.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        type: 'success'
      }
    }).$mount()
    let haveTypeClass = vm.$el.className.indexOf('b-btn-success') > -1
    expect(haveTypeClass).to.eq(true)
    vm.$destroy()
  })
  it('可以设置 circle.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        circle: true
      }
    }).$mount()
    let haveCircleClass = vm.$el.className.indexOf('b-btn-circle') > -1
    expect(haveCircleClass).to.eq(true)
    vm.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'set',
        loading: true
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#b-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 0', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'set',
      }
    })
    vm.$slots.default = [{'text':'test'}];
    vm.$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('0')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'download',
        iconPosition: 'right'
      },
    })
    vm.$slots.default = [{'text':'test'}];
    vm.$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        iconName: 'set',
      }
    }).$mount()

    const callback = sinon.fake();
    // const callback = function(){};
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
})