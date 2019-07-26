import { expect } from 'chai'
import { mount } from "@vue/test-utils";
import Input from "@/components/input.vue";

describe('Input', () => {
  it('Input: 存在.', () => {
    expect(Input).to.exist
  });
  it('Input: 可以设置 value.', () => {
    const wrapper = mount(Input, {
      propsData: {
        value: 'test value'
      }
    })
    const inputEl = wrapper.vm.$el.querySelector('input')
    expect(inputEl.value).to.equal('test value')
  })
  it('Input: 可以设置 disabled.', () => {
    const wrapper = mount(Input, {
      propsData: {
        disabled: true
      }
    })
    let inputEl = wrapper.vm.$el.querySelector('input')
    let disabled = inputEl.getAttribute('disabled')
    expect(disabled).to.eq('disabled')
  })
  it('Input: 可以设置 readonly.', () => {
    const wrapper = mount(Input, {
      propsData: {
        readonly: true
      }
    })
    let inputEl = wrapper.vm.$el.querySelector('input')
    let readonly = inputEl.getAttribute('readonly')
    expect(readonly).to.eq('readonly')
  })
  it('Input: 可以设置 autofocus.', () => {
    const wrapper = mount(Input, {
      propsData: {
        autofocus: true
      }
    })
    let inputEl = wrapper.vm.$el.querySelector('input')
    let autofocus = inputEl.getAttribute('autofocus')
    expect(autofocus).to.eq('autofocus')
  })
  it('Input: 可以设置 maxlength.', () => {
    const wrapper = mount(Input, {
      propsData: {
        maxlength: 2
      }
    })
    let inputEl = wrapper.vm.$el.querySelector('input')
    let maxlength = inputEl.getAttribute('maxlength')
    expect(maxlength).to.eq('2')
  })
  it('Input: 可以设置 autocomplete.', () => {
    const wrapper = mount(Input, {
      propsData: {
        autocomplete: "on"
      }
    })
    let inputEl = wrapper.vm.$el.querySelector('input')
    let autocomplete = inputEl.getAttribute('autocomplete')
    expect(autocomplete).to.eq('on')
  })
  it('Input: 可以设置 placeholder.', () => {
    const wrapper = mount(Input, {
      propsData: {
        placeholder: '888'
      }
    })
    let inputEl = wrapper.vm.$el.querySelector('input')
    let placeholder = inputEl.getAttribute('placeholder')
    expect(placeholder).to.eq('888')
  })
})