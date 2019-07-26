import { expect } from 'chai'
import { mount ,shallowMount} from "@vue/test-utils";
import Col from "@/components/col.vue";
import Row from "@/components/row.vue";

import Vue from 'vue'




describe('Row', () => {
  // 行为驱动测试(由 Moka 引入，断言由 chai 引入)：行为描述
  // 通过 it 函数来隔绝测试用例，函数名叫 '存在'
  it('存在.', () => {
    // expect(Button).be.ok
    expect(Row).to.exist
    //expect(Row).be.not.ok
    // expect([1,2]).to.deep.eq([1,2])
  }); 
  // it('可以设置gutter.', (done) => {

    
  //   // Vue.component('b-row',Row)
  //   // Vue.component('b-col',Col)
  //   // const div = document.createElement('div')
  //   // document.body.appendChild(div)
  //   // div.innerHTML = `
  //   //   <b-row gutter='20'>
  //   //     <b-col span='12'></b-col>
  //   //     <b-col span='12'></b-col>
  //   //   </b-row>
  //   // `
  //   // const vm = new Vue({
  //   //   el: div
  //   // })
  //   // setTimeout(()=>{
  //   //   const row = vm.$el.querySelector('.b-row')
  //   //   expect(getComputedStyle(row).marginLeft).to.eq('-10px')
  //   //   expect(getComputedStyle(row).marginRight).to.eq('-10px')
  //   //   const col = vm.$el.querySelector('.b-col')
  //   //   expect(getComputedStyle(col).paddingLeft).to.eq('10px')
  //   //   expect(getComputedStyle(col).paddingRight).to.eq('10px')
  //   //   done()
  //   //   vm.$el.remove()
  //   //   vm.$destroy()  
  //   // })

  //   Vue.component('b-col',Col)
  //   const wrapper = shallowMount(Row, {
  //     attachToDocument: true,
  //     slots:{
  //       default:`
  //         <b-col span='12'></b-col>
  //         <b-col span='12'></b-col>
  //       `
  //     },
  //     propsData:{
  //       gutter: 20
  //     }
  //   })

  //   setTimeout(()=>{
  //     const row = wrapper.vm.$el.querySelector('.b-row')  
  //     console.log('row: ',typeof row);
  //     console.log('row: ', Object.keys(row));
  //     expect(getComputedStyle(row).marginLeft).to.eq('-10px')
  //     expect(getComputedStyle(row).marginRight).to.eq('-10px')
  //     const col = wrapper.vm.$el.querySelector('.b-col')
  //     expect(getComputedStyle(col).paddingLeft).to.eq('10px')
  //     expect(getComputedStyle(col).paddingRight).to.eq('10px')
  //     done()

  //   })    
  // });
  it('能设置 justify 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData:{
        justify:'end'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-end')
    vm.$el.remove()
    vm.$destroy()
  })
})