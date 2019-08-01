export default function(data, rules){
  let errors = {}
  rules.forEach(rule => {
    let value = data[rule.key]
    if(rule.required){
      if(value!==0 && !value){
        errors[rule.key] = {
          required:'必填'
        }
        return
      }
    }
    if(rule.pattern){
      if(!rule.pattern.test(value)){
        // errors[rule.key] = {
        //   pattern: '格式不正确'
        // }
        errors = Object.assign({},errors,{
          pattern: '格式不正确'
        })
      }
    }
    if(rule.minLength){
      if(value.length < rule.minLength){
        // errors[rule.key] = {
        //   minLength: '长度不得小于'+rule.minLength
        // }
        errors = Object.assign({},errors,{
          minLength: '长度不得小于'+rule.minLength
        })
      }
    }
  });
  return errors
}