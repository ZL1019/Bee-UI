export default {
  bind: function (el,binding) {
    document.addEventListener('click',(e)=>{
       if(el !== e.target && !el.contains(e.target)){
        binding.value()
       }  
    })
  }
}
