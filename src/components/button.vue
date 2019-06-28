<template>
  <button :class=classes :disabled='disabled' @click="$emit('click')">
    <icon v-if="loading" name="loading" :color="iconColor"></icon>
    <icon v-else :name="iconName" :color="iconColor"></icon>
    <slot></slot>
  </button>
</template>

<script>
import icon from './icon';

export default {
  name: 'bear-button',
  components: {
    icon,
  },
  data() {
    return {};
  },
  computed: {
    iconColor() {
      return this.type !== 'default' ? 'white' : '';
    },
    haveSlot() {
      return this.$slots.default !== undefined;
    },
    classes() {
      return {
        'b-btn': true,
        'b-btn-circle': this.circle,
        [`b-btn-${this.type}`]: true,
        'b-btn-loading': this.loading,
        'b-btn-disabled': this.disabled,
        'b-btn-haveSlot': this.haveSlot,
        'b-btn-onlyIcon': !this.haveSlot,
        [`icon-${this.iconPosition}`]: true,
      };
    },
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        let state = ['left', 'right'].indexOf(value) === -1;
        if (state) {
          console.warn(
            `b-button prop icon-position not contain:${value},it must be left or right`,
          );
        }
        return true;
      },
    },
  },
};
</script>

<style scoped lang="scss">
$btn-radius: 4px;
$btn-font-size: 12px;
$btn-line-height: 1.5;
/*bg*/
/*default*/
$btn-bg: #fff;

/*primary*/
$btn-bg-primary: #2d8cf0;
$btn-bg-primary-hover: #57a3f3;
$btn-bg-primary-active: #2b85e4;
/*info*/
$btn-bg-info: #2db7f5;
$btn-bg-info-hover: #57c5f7;
$btn-bg-info-active: #2baee9;
/*success*/
$btn-bg-success: #19be6b;
$btn-bg-success-hover: #47cb89;
$btn-bg-success-active: #18b566;
/*color*/
/*default*/
$btn-color: #515a6e;
$btn-color-hover: #57a3f3;
$btn-color-active: #2b85e4;
/*primary*/
$btn-color-primary: #fff;
$btn-color-primary-active: #f2f2f2;
/*info*/
$btn-color-info: #fff;
$btn-color-info-active: #f2f2f2;
/*success*/
$btn-color-success: #fff;
$btn-color-success-active: #f2f2f2;
/*border*/
/*default*/
$btn-border-color: #dcdee2;
$btn-border-color-hover: #57a3f3;
$btn-border-color-active: #2b85e4;
/*primary*/
$btn-border-color-primary: #2d8cf0;
$btn-border-color-primary-hover: #57a3f3;
$btn-border-color-primary-active: #2b85e4;
/*info*/
$btn-border-color-info: #2db7f5;
$btn-border-color-info-hover: #57c5f7;
$btn-border-color-info-active: #2baee9;
/*success*/
$btn-border-color-success: #19be6b;
$btn-border-color-success-hover: #47cb89;
$btn-border-color-success-active: #18b566;
/*padding*/
$btn-padding-vertial: 5px;
$btn-padding-horizontal: 15px;
$btn-padding-vertial-icon: 8px;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.b-btn.b-btn-loading {
  pointer-events: none;
  position: relative;

  .icon {
    animation: spin 1.5s linear infinite;
  }
}

.b-btn {
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  outline: 0;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  transition: color 0.2s linear, border-color 0.2s linear,
    background-color 0.2s linear;
  color: $btn-color;
  font-size: $btn-font-size;
  background-color: $btn-bg;
  border: 1px solid $btn-border-color;
  line-height: $btn-line-height;
  padding: $btn-padding-vertial $btn-padding-horizontal;
  border-radius: $btn-radius;

  .icon {
    transition: fill 0.2s linear;
  }

  &:hover {
    color: $btn-color-hover;
    border-color: $btn-border-color-hover;

    .icon {
      fill: $btn-border-color-hover;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(45, 140, 240, 0.2);
  }

  &:active {
    color: $btn-color-active;
    border-color: $btn-border-color-active;
  }
}

.b-btn.b-btn-loading:before {
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: #fff;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.3;
  transition: opacity 0.2s;
}

.b-btn-onlyIcon.b-btn {
  padding: $btn-padding-vertial-icon $btn-padding-horizontal;
}

.b-btn-onlyIcon.b-btn.b-btn-circle {
  border-radius: 50%;
  padding: $btn-padding-vertial-icon $btn-padding-vertial-icon;
}

.icon-left.b-btn-haveSlot {
  .icon {
    order: 0;
    margin-right: 5px;
  }
}

.icon-right.b-btn-haveSlot {
  .icon {
    order: 1;
    margin-left: 5px;
  }
}

.b-btn-disabled {
  /*pointer-events: none;*/
  cursor: not-allowed;
}

.b-btn-primary {
  color: $btn-color-primary;
  background-color: $btn-bg-primary;
  border-color: $btn-border-color-primary;
}

.b-btn-primary:hover {
  color: $btn-color-primary;
  background-color: $btn-bg-primary-hover;
  border-color: $btn-border-color-primary-hover;
}

.b-btn-primary:active {
  color: $btn-color-primary-active;
  background-color: $btn-bg-primary-active;
  border-color: $btn-border-color-primary-active;
}

.b-btn-info {
  color: $btn-color-info;
  background-color: $btn-bg-info;
  border-color: $btn-border-color-info;
}

.b-btn-info:hover {
  color: $btn-color-info;
  background-color: $btn-bg-info-hover;
  border-color: $btn-border-color-info-hover;
}

.b-btn-info:active {
  color: $btn-color-info-active;
  background-color: $btn-bg-info-active;
  border-color: $btn-border-color-info-active;
}

.b-btn-success {
  color: $btn-color-success;
  background-color: $btn-bg-success;
  border-color: $btn-border-color-success;
}

.b-btn-success:hover {
  color: $btn-color-success;
  background-color: $btn-bg-success-hover;
  border-color: $btn-border-color-success-hover;
}

.b-btn-success:active {
  color: $btn-color-success-active;
  background-color: $btn-bg-success-active;
  border-color: $btn-border-color-success-active;
}

.b-btn-success:focus {
  box-shadow: 0 0 0 2px rgba(25, 190, 107, 0.2);
}
</style>

