<template>
  <div class="stickys">
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    <b-sticky top="100">
      <b-button>粘滞按钮</b-button>
    </b-sticky>
    <p>段落11</p>
    <p>段落12</p>
    <p>段落13</p>
    <p>段落14</p>
    <p>段落15</p>
    <p>段落16</p>
    <p>段落17</p>
    <p>段落18</p>
    <p>段落19</p>
    <p>段落20</p>
    <p>段落21</p>
    <p>段落22</p>
    <p>段落23</p>
    <p>段落24</p>
    <p>段落25</p>
    <p>段落26</p>
    <p>段落27</p>
    <p>段落28</p>
    <p>段落29</p>
    <p>段落30</p>
  </div>
</template>

<script>
import Button from '../../../src/components/button';
import Sticky from '../../../src/components/sticky';

export default {
  components: {
    'b-button': Button,
    'b-sticky': Sticky,
  },
  data() {
    return {
      contentStyle: {
        display: 'flex',
        'align-items': 'center',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.stickys {
  margin-left: 16px;
  .box1 {
  }
  .box2 {
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    width: 200px;
    height: 200px;
    .b-popover#top {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .b-popover#bottom {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    .b-popover#left {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .b-popover#right {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .box3{
    margin-top:160px;
  }
}
</style>
