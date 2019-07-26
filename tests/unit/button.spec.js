import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

import { mount } from "@vue/test-utils";
import Button from "@/components/button.vue";


describe("Button", () => {
  it('Button: 存在.', () => {
    expect(Button).to.exist
  });
  it('Button: 可以设置 icon.', () => {
    const wrapper = mount(Button, {
      propsData: {
        iconName: 'left',
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#b-left')
  })
  it('Button: 可以设置 disabled.', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    })
    const btn = wrapper.find('button')
    expect(btn.attributes()['disabled']).to.equal('disabled')
  })
  it('Button: 可以设置 type.', () => {
    const wrapper = mount(Button, {
      propsData: {
        type: 'success'
      }
    })
    let haveTypeClass = wrapper.vm.$el.className.indexOf('b-btn-success') > -1
    expect(haveTypeClass).to.eq(true)
  })
  it('Button: 可以设置 circle.', () => {
    const wrapper = mount(Button, {
      propsData: {
        circle: true
      }
    })
    let haveCircleClass = wrapper.vm.$el.className.indexOf('b-btn-circle') > -1
    expect(haveCircleClass).to.eq(true)
  })
  it('Button: 可以设置 loading.', () => {
    const wrapper = mount(Button, {
      propsData: {
        iconName: 'set',
        loading: true
      }
    })
    const useElement = wrapper.find('use')
    expect(useElement.attributes()['href']).to.equal('#b-loading')
  })
  it('Button: icon 默认的 order 是 0', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: 'set',
      },
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('0')

  })
  it('Button: 设置 iconPosition 可以改变 order', () => {
    const wrapper = mount(Button, {
      attachToDocument: true,
      propsData: {
        iconName: 'set',
        iconPosition: 'right'
      },
      slots: {
        default: 'test text'
      }
    })
    const vm = wrapper.vm
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
  })
  it('Button: 点击 button 触发 click 事件', () => {
    const vm = mount(Button).vm
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
});