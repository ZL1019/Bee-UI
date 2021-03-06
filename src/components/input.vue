<template>
  <div :class="classes" :type="type">
    <textarea 
      :rows=rows 
      :value=value 
      ref="textarea"   
      class="b-textarea" 
      :autosize=autosize 
      :readonly=readonly 
      :disabled=disabled
      :autofocus=autofocus
      :maxlength=maxlength
      :placeholder=placeholder
      :autocomplete=autocomplete
      v-if="type === 'textarea'"    
      :style="textareaCalcStyle"   
      @input="$emit('input', $event.target.value)">
    </textarea>
    <input 
      v-else 
      ref="input" 
      :type="type" 
      :value=value  
      :readonly=readonly 
      :disabled=disabled 
      :class=inputClasses 
      :autofocus=autofocus
      :maxlength=maxlength 
      :placeholder=placeholder 
      :autocomplete=autocomplete
      @blur="$emit('on-blur')"
      @click="$emit('on-click')"
      @focus="$emit('on-focus')"  
      @keyup.enter="$emit('on-enter')"    
      @keyup="$emit('on-keyup',$event)"  
      @change="$emit('on-change',$event)"
      @keydown="$emit('on-keydown',$event)"
      @keypress="$emit('on-keypress',$event)"
      @input="$emit('input', $event.target.value)">
    <icon @click="clearValue" class="b-input-icon" name="close" />
  </div>
</template>

<script>
import icon from './icon';
import calcTextareaHeight from './calcTextareaHeight';

export default {
  name: 'bear-input',
  components: {
    icon,
  },
  data() {
    return {
      textareaCalcStyle: {},
    };
  },
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        let incorrectType =
          ['textarea', 'text', 'password', 'email', 'url', 'date'].indexOf(
            value,
          ) === -1;
        if (incorrectType) {
          console.warn('your b-input type is incorrect');
        }
        return true;
      },
    },
    rows: {
      type: [String, Number],
      default: 2,
    },
    value: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
    autosize: {
      type: [Boolean, Object],
      default: false,
    },
    maxlength:{
      type: Number
    },
    autofocus:{
      type: Boolean,
      default: false
    },
    autocomplete:{
      type: String,
      default: 'off'
    },
  },
  computed: {
    showClearable() {
      return this.clearable && !!(this.value + '') && this.type !== 'textarea'
    },
    classes() {
      return {
        'b-input': true,
        'b-input-clearable': this.showClearable,
      };
    },
    inputClasses() {
      return {
        'b-input-error': this.error,
        'b-input-disabled': this.disabled,
      };
    },
  },
  methods: {
    clearValue() {
      this.$emit('input', '');
    },
    resizeTextarea() {
      const { autosize, type } = this;
      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight,
        };
        return;
      }
      const minRows = autosize.minRows;
      const maxRows = autosize.maxRows;
      this.textareaCalcStyle = calcTextareaHeight(
        this.$refs.textarea,
        minRows,
        maxRows,
      );
    },
  },
  mounted() {
    // console.log(this.$listeners);
    this.resizeTextarea();
    this.focus = ()=>{
      this.type === 'textarea' ? this.$refs.textarea.focus() : this.$refs.input.focus()
    }
  },
  watch: {
    value() {
      this.$nextTick(this.resizeTextarea);
    },
  },
};
</script>

<style lang="scss" scoped>
::placeholder {
  color: #dcdfe6;
}
.b-input-icon {
  display: none;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: pointer;
  fill:rgba(0,0,0,0.45);
}
.b-input-clearable:hover,
.b-input-clearable:focus {
  .b-input-icon {
    display: block;
  }
  .b-input-icon:hover {
    fill:rgba(0,0,0,0.9);
  }
}
.b-textarea {
  border: 1px solid #dcdfe6;
  padding: 5px 15px;
  border-radius: 4px;
  outline: none;
  color: #606266;
  transition: border-color 0.2s ease-in-out;
  display: block;
}
.b-textarea:hover {
  border-color: #c0c4cc;
}
.b-textarea:focus {
  outline: none;
  border-color: #409eff;
}
.b-input {
  display: inline-block;
  position: relative;
  vertical-align: top;
  input {
    height: 32px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    font-size: inherit;
    line-height: 40px;
    color: #606266;
    padding: 0 20px 0 15px;
    transition: border-color 0.2s ease-in-out;
  }
  input:hover {
    border-color: #c0c4cc;
  }
  input:focus {
    outline: none;
    border-color: #409eff;
  }
  input.b-input-error{
    border-color:#ed4014;
  }
  input.b-input-error:hover{
    border-color:#ed4014;
  }
  input.b-input-error:focus{
    border-color:#ed4014;
  }
  .b-input-disabled {
    cursor: not-allowed;
    &:hover {
      border-color: #dcdfe6;
    }
  }
}
</style>
