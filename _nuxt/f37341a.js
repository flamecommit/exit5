(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{514:function(t,n,o){var content=o(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("de5c5c4c",content,!0,{sourceMap:!1})},523:function(t,n,o){"use strict";o(514)},524:function(t,n,o){var c=o(33)(!1);c.push([t.i,".list-musician{display:flex;flex-wrap:wrap;grid-row-gap:15px;row-gap:15px;grid-column-gap:15px;-moz-column-gap:15px;column-gap:15px}.list-musician li button{display:block;width:100%;padding:12px 24px;border:1px solid #ccc;text-align:left}.list-musician li button:hover{background:#f7f7f7}",""]),t.exports=c},535:function(t,n,o){"use strict";o.r(n);var c=o(2).a.extend({props:{musicians:Array},methods:{pushRouter:function(path){this.$store.commit("set_loading",!0),this.$router.push({path:"/article/list/score_".concat(path)})}}}),e=(o(523),o(15)),component=Object(e.a)(c,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ul",{staticClass:"list-musician"},t._l(t.musicians,(function(n,c){return o("li",{key:c},[o("button",{attrs:{type:"button"},on:{click:function(o){return t.pushRouter(n.eng)}}},[t._v(t._s(n.kor))])])})),0)}),[],!1,null,null,null);n.default=component.exports}}]);