(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{126:function(a,t,e){"use strict";var s=e(87);e.n(s).a},127:function(a,t,e){},159:function(a,t,e){"use strict";var s={name:"bear-card",data:function(){return{}},props:{bodyStyle:{type:Object},headerStyle:{type:Object},shadow:{type:String,default:"always",validator:function(a){return["always","hover","never"].indexOf(a)>-1}}},computed:{classes:function(){return{"b-card":!0,"is-hover-shadow":"hover"===this.shadow,"is-always-shadow":"always"===this.shadow}}}},r=(e(126),e(1)),n=Object(r.a)(s,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{class:a.classes},[a.$slots.header?e("div",{staticClass:"b-card-header",style:a.headerStyle},[a._t("header")],2):a._e(),a._v(" "),e("div",{staticClass:"b-card-body",style:a.bodyStyle},[a._t("default")],2)])},[],!1,null,null,null);t.a=n.exports},238:function(a,t,e){"use strict";var s=e(127);e.n(s).a},293:function(a,t,e){"use strict";e.r(t);var s={components:{"b-card":e(159).a},data:function(){return{bodyStyle:{padding:"20px"}}}},r=(e(238),e(1)),n=Object(r.a)(s,function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"cards"},[e("span",[a._v("1. 基础用法：")]),a._v(" "),e("b-card",[e("div",{attrs:{slot:"header"},slot:"header"},[a._v("\n      卡片名称\n    ")]),a._v(" "),e("p",[a._v("内容一")]),a._v(" "),e("p",[a._v("内容二")])]),a._v(" "),e("span",[a._v("2. 简单卡片：")]),a._v(" "),e("b-card",[e("p",[a._v("内容一")]),a._v(" "),e("p",[a._v("内容二")])]),a._v(" "),e("span",[a._v("3. 卡片阴影：")]),a._v(" "),e("div",{staticClass:"shadowDemos"},[e("b-card",{attrs:{shadow:"always"}},[e("p",[a._v("总是显示")])]),a._v(" "),e("b-card",{attrs:{shadow:"hover"}},[e("p",[a._v("鼠标悬浮时显示")])]),a._v(" "),e("b-card",{attrs:{shadow:"never"}},[e("p",[a._v("从不显示")])])],1)],1)},[],!1,null,"d4e48228",null);t.default=n.exports},87:function(a,t,e){}}]);