# Bear UI
[![Build Status](https://www.travis-ci.org/ZL1019/Bee-UI.svg?branch=master)](https://www.travis-ci.org/ZL1019/Bee-UI)
## A Vue UI framework
## 开始使用
1. 添加样式
使用前，请在 CSS 中开启 border-box
```
    *,*::before,*::after{
        box-sizing: border-box;
    }
```
设置颜色变量
```
    html {
      --btn-radius: 4px;
      --btn-font-size: 12px;
      --btn-line-height: 1.5;
      /*bg*/
      /*default*/
      --btn-bg: #fff;
      /*primary*/
      --btn-bg-primary: #2d8cf0;
      --btn-bg-primary-hover: #57a3f3;
      --btn-bg-primary-active: #2b85e4;
      /*info*/
      --btn-bg-info: #2db7f5;
      --btn-bg-info-hover: #57c5f7;
      --btn-bg-info-active: #2baee9;
      /*success*/
      --btn-bg-success: #19be6b;
      --btn-bg-success-hover: #47cb89;
      --btn-bg-success-active: #18b566;
      /*color*/
      /*default*/
      --btn-color: #515a6e;
      --btn-color-hover: #57a3f3;
      --btn-color-active: #2b85e4;
      /*primary*/
      --btn-color-primary: #fff;
      --btn-color-primary-active: #f2f2f2;
      /*info*/
      --btn-color-info: #fff;
      --btn-color-info-active: #f2f2f2;
      /*success*/
      --btn-color-success: #fff;
      --btn-color-success-active: #f2f2f2;
      /*border*/
      /*default*/
      --btn-border-color: #dcdee2;
      --btn-border-color-hover: #57a3f3;
      --btn-border-color-active: #2b85e4;
      /*primary*/
      --btn-border-color-primary: #2d8cf0;
      --btn-border-color-primary-hover: #57a3f3;
      --btn-border-color-primary-active: #2b85e4;
      /*info*/
      --btn-border-color-info: #2db7f5;
      --btn-border-color-info-hover: #57c5f7;
      --btn-border-color-info-active: #2baee9;
      /*success*/
      --btn-border-color-success: #19be6b;
      --btn-border-color-success-hover: #47cb89;
      --btn-border-color-success-active: #18b566;
      /*padding*/
      --btn-padding-vertial: 5px;
      --btn-padding-horizontal: 15px;
      --btn-padding-vertial-icon: 8px;
    }
```
2.安装
```
    npm i bear-ui --save
```
3.引入
```
    import {Button, Icon, ButtonGroup} from 'bear-ui'
    import 'bear-ui/dist/index.css'
    export default {
        name: 'app',
        components: {
          'b-icon': Icon,
          'b-button': Button,
          'b-button-group': ButtonGroup
        }
    }
```
## 文档
## 变更记录
## 联系方式
