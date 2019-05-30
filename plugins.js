import Message from './src/message'

let currentMessage 

export default {
  install(Vue, options) {
    Vue.prototype.$message = (value, props) => {
      if(currentMessage){
        currentMessage.close()      
      }
      currentMessage = createMessage(Vue,props,value,()=>{
        currentMessage =  null
      })
    }
  }
}


function createMessage(Vue,props,value,onClose) {
  let Constructor = Vue.extend(Message)
  let message = new Constructor({
    propsData: props
  })
  message.$slots.default = [value]
  // $mount() 返回实例自身，故可链式调用
  message.$mount()
  message.$on('close',onClose)
  // 文档外渲染，所以要插入文档
  document.body.append(message.$el)
  return message
}
// const MyPlugin = {}
// MyPlugin.install = ()=>{}
// export default MyPlugin