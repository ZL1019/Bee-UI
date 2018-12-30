<template>
  <div class="b-input" :type="type">
    <textarea
        :rows = rows
        ref ="textarea"
        :value = value
        class ="b-textarea"
        :autosize = autosize
        :readonly = readonly
        :disabled = disabled
        v-if="type === 'textarea'"
        :style="textareaCalcStyle"
        :placeholder = placeholder
        @input="$emit('input', $event.target.value)"></textarea>
    <input
          v-else
          ref = "input"
          :type = "type"
          :value = value
          :readonly = readonly
          :disabled = disabled
          :placeholder = placeholder
          :class="{
            'b-input-error': error,
            'b-input-disabled':disabled,
            'b-input-clearable':showClearable
          }"
          @input = "$emit('input', $event.target.value)"
      >
    <icon @click="clearValue"  ref="icon" class="b-input-icon" name="set"></icon>
  </div>
</template>

<script>
  import icon from './icon'
  import calcTextareaHeight from './calcTextareaHeight';

  export default {
    name: "b-input",
    components:{
      icon
    },
    data(){
      return {
        textareaCalcStyle: {},
      }
    },
    props:{
      type:{
        type: String,
        default:'text',
        validator(value){
          let incorrectType =  ['textarea','text','password','email','url','date'].indexOf(value) === -1
          if(incorrectType){
            console.warn('your b-input type is incorrect')
          }
          return true
        }
      },
      rows:{
        type: [String,Number],
        default: 2
      },
      value:{
        type: [String,Number],
        default:''
      },
      error:{
        type: Boolean,
        default: false
      },
      readonly:{
        type: Boolean,
        default: false
      },
      disabled:{
        type: Boolean,
        default: false
      },
      clearable:{
        type: Boolean,
        default: false
      },
      placeholder:{
        type: String,
      },
      autosize:{
        type: [Boolean,Object],
        default: false
      }
    },
    computed:{
      showClearable(){
        return this.clearable && !!(this.value+'') && !this.type
      },
    },
    methods:{
      clearValue() {
        this.$emit('input','')
      },
      resizeTextarea() {
        const { autosize, type } = this;
        if (type !== 'textarea') return;
        if (!autosize) {
          this.textareaCalcStyle = {
            minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
          };
          return;
        }
        const minRows = autosize.minRows;
        const maxRows = autosize.maxRows;
        this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
      },
    },
    mounted(){
      this.resizeTextarea()
    },
    watch:{
      value(){
        this.$nextTick(this.resizeTextarea);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .b-input-icon{
    display: none;
  }
  .b-input-clearable:hover{
    .b-input-icon{
      display: block;
    }
  }
  .b-input-clearable:focus{
    .b-input-icon{
      display: block;
    }
  }
  .b-textarea{
    border:1px solid #dcdfe6;
    padding:5px 15px;
    border-radius: 4px;
    outline: none;
    color:#606266;
    transition: border-color 0.2s ease-in-out;
    display: block;
  }
  .b-textarea:hover{
    border-color:#c0c4cc;
  }
  .b-textarea:focus{
    outline: none;
    border-color:#409eff;
  }
  .b-input{
    display: inline-block;
    position: relative;
    vertical-align: top;
    input{
      height:32px;
      width:100%;
      background-color:#fff;
      border-radius:4px;
      border:1px solid #dcdfe6;
      font-size: inherit;
      line-height: 40px;
      color:#606266;
      padding:0 20px 0 15px;
      transition: border-color 0.2s ease-in-out;
    }
    input:hover{
      border-color:#c0c4cc;
    }
    input:focus{
      outline: none;
      border-color:#409eff;
    }
    .b-input-disabled{
      cursor: not-allowed;
      &:hover{
        border-color:#dcdfe6;
      }
    }

    .b-input-icon{
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 0.3s;
    }
  }
</style>
