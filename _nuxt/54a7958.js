(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{519:function(t,e,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("60ba9b08",content,!0,{sourceMap:!1})},537:function(t,e,r){"use strict";r(519)},538:function(t,e,r){var o=r(38)(!1);o.push([t.i,".list-score{display:grid;grid-template-columns:repeat(3,1fr);grid-row-gap:15px;row-gap:15px;grid-column-gap:15px;-moz-column-gap:15px;column-gap:15px}.list-score li{flex:1 0 auto;overflow:hidden}.list-score li a{display:block;width:100%;padding:12px 24px;border:1px solid #ccc;text-align:left}.list-score li a:hover{background:#f7f7f7}.list-score li a .category{margin-bottom:5px;font-size:12px}.list-score li a .subject{width:100%;font-size:16px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list-score li a .info{display:flex;grid-column-gap:15px;-moz-column-gap:15px;column-gap:15px;margin-top:10px;font-size:12px}@media screen and (max-width:768px){.list-score{grid-template-columns:repeat(2,1fr)}}",""]),t.exports=o},542:function(t,e,r){"use strict";r.r(e);r(30),r(19),r(29),r(9),r(40),r(20),r(41);var o=r(11),c=r(2),l=r(32);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=c.a.extend({props:{articles:Array},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({is_loading:function(t){return t.is_loading}}))}),f=d,x=(r(537),r(17)),component=Object(x.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-score"},t._l(t.articles,(function(article,e){return r("li",{key:e},[r("nuxt-link",{attrs:{to:"/article/detail/"+article.path.slice(1).replace(/\//gi,"_")}},[r("div",{staticClass:"category"},[t._v(t._s(article.dir.replace("/","")))]),t._v(" "),r("div",{staticClass:"subject"},[t._v(t._s(article.musician)+" - "+t._s(article.title))]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"date"},[t._v(t._s(article.date))]),t._v(" "),r("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);