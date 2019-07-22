import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import {
  shallowMount, mount
} from "@vue/test-utils";
import Button from "@/components/button.vue";
import Vue from 'vue'
chai.use(sinonChai)

describe("Button", () => {
  it('存在.', () => {
    expect(Button).to.exist
  });
  it('可以设置 icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        iconName: 'left'
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#b-left')
  })
  it('可以设置 disabled.', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    const btn = wrapper.find('button')
    expect(btn.attributes()['disabled']).to.equal('disabled')
  })
  it('可以设置 type.', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'success'
      }
    })
    let haveTypeClass = wrapper.vm.$el.className.indexOf('b-btn-success') > -1
    expect(haveTypeClass).to.eq(true)
  })
  it('可以设置 circle.', () => {
    const wrapper = mount(Button, {
      propsData: {
        circle: true
      }
    })
    let haveCircleClass = wrapper.vm.$el.className.indexOf('b-btn-circle') > -1
    expect(haveCircleClass).to.eq(true)
  })
  it('可以设置 loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        iconName: 'set',
        loading: true
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#b-loading')
  })
  it('icon 默认的 order 是 0', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: 'set',
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('0')

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
    vm.$slots.default = [{
      'text': 'TestText'
    }];
    vm.$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()

    // const wrapper = mount(Button, {
    //   attachToDocument: true,
    //   propsData: {
    //     iconPosition: 'right',
    //     iconName: 'download',
        
    //   },
      
    // })
    // const vm = wrapper.vm
    // vm.$slots.default = [{
    //   'text': 'test'
    // }];
    // const icon = vm.$el.querySelector('svg')
    // expect(getComputedStyle(icon).order).to.eq('1')
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
});