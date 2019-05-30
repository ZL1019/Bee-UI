import Message from './src/message'

export default {
  install(Vue, options){
    Vue.prototype.$message = (value,props)=>{
      let Constructor = Vue.extend(Message)
      let message = new Constructor({
        propsData: props
      })
      console.log('props: ', props);
      console.log('message.$props: ', message.$props);

      message.$slots.default = [value]

      // $mount() 返回实例自身，故可链式调用
      message.$mount()
      // 文档外渲染，所以要插入文档
      document.body.append(message.$el)
    }
  }
}

// const MyPlugin = {}
// MyPlugin.install = ()=>{}
// export default MyPlugin
