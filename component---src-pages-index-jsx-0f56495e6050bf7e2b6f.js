(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/9aa":function(t,e,n){var o=n("NykK"),i=n("ExA7");t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==o(t)}},AP2z:function(t,e,n){var o=n("nmnc"),i=Object.prototype,r=i.hasOwnProperty,a=i.toString,c=o?o.toStringTag:void 0;t.exports=function(t){var e=r.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(l){}var i=a.call(t);return o&&(e?t[c]=n:delete t[c]),i}},Dtc0:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),i=n.n(o),r=n("ntAx"),a=n("bSql"),c=n("PZY4"),l=n("XUsr");e.default=function(t){var e=t.data.allMarkdownRemark.nodes;return 0===e.length?i.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):i.a.createElement(r.a,null,i.a.createElement(a.a,null),i.a.createElement(l.a,null),i.a.createElement(c.a,{postList:e}))}},DzJC:function(t,e,n){var o=n("sEfC"),i=n("GoyQ");t.exports=function(t,e,n){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),o(t,e,{leading:r,maxWait:e,trailing:a})}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var o=n("WFqU"),i="object"==typeof self&&self&&self.Object===Object&&self,r=o||i||Function("return this")();t.exports=r},NykK:function(t,e,n){var o=n("nmnc"),i=n("AP2z"),r=n("KfNM"),a=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):r(t)}},PZY4:function(t,e,n){"use strict";var o=n("DzJC"),i=n.n(o),r=n("q1tI"),a=n.n(r),c=n("vOnD"),l=n("Wbzz"),u=n("PyCY"),s=n("XUsr"),f=n("GxtF"),p=n("sNMZ"),d=c.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-1ipbbmk-0"})(["@media (max-width:768px){padding:0 10px;}"]),m=c.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-1ipbbmk-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),v=c.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-1ipbbmk-2"})(["margin-bottom:15px;font-size:12px;color:",";"],(function(t){return t.theme.colors.tertiaryText})),x=c.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-1ipbbmk-3"})(["margin-bottom:32px;line-height:1.6;max-height:3.4em;font-size:14px;color:",";overflow:hidden;text-overflow:ellipsis;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;"],(function(t){return t.theme.colors.secondaryText}));e.a=function(t){var e=t.postList,n=Object(r.useState)(!1),o=n[0],c=n[1],h=Object(r.useState)(10),g=h[0],b=h[1],y=i()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&g<e.length&&(c(!0),setTimeout((function(){b(g+10),c(!1)}),300))}),250);return Object(r.useEffect)((function(){return window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[g,e]),Object(r.useEffect)((function(){b(10)}),[e]),a.a.createElement(d,null,e.slice(0,g).map((function(t,n){var o=t.frontmatter,i=o.title,r=o.date,c=o.tags,p=t.excerpt,d=t.fields.slug;return a.a.createElement("div",{key:t.fields.slug},a.a.createElement(m,null,a.a.createElement(u.a,{size:"bg"},a.a.createElement(l.Link,{to:d},i)),a.a.createElement(v,null,r),a.a.createElement(x,null,p),a.a.createElement(f.a,{tagList:c})),g-1!==n&&e.length-1!==n&&a.a.createElement(s.a,{mt:"48px",mb:"32px"}))})),o&&a.a.createElement(p.a,null))}},PyCY:function(t,e,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("vOnD").default.h1.withConfig({displayName:"Title__Wrapper",componentId:"sc-1f05epd-0"})(["margin-bottom:15px;font-size:",";font-weight:700;line-height:1.2;color:",";word-break:break-all;> a{text-decoration:none;color:inherit;transition:color 0.2s;&:hover{color:",";}}"],(function(t){return t.size}),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.accentColor1}));e.a=function(t){var e=t.size,n=t.children;return i.a.createElement(r,{size:{sm:"16px",md:"20px",bg:"24px"}[e]},n)}},QIyF:function(t,e,n){var o=n("Kz5y");t.exports=function(){return o.Date.now()}},TO8r:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},bSql:function(t,e,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("vOnD"),a=(n("Wbzz"),n("C4nX")),c=r.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-jvqlsx-0"})(["display:flex;align-items:center;column-gap:16px;@media (max-width:768px){padding-inline:15px;}"]),l=r.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-jvqlsx-1"})(["flex:0 0 auto;width:128px;height:128px;border-radius:50%;background:#f7f7f7;"]),u=r.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-jvqlsx-2"})(["margin-bottom:4.8px;a{font-size:24px;font-weight:700;text-decoration:none;color:",";}"],(function(t){return t.theme.colors.text})),s=r.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-jvqlsx-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(function(t){return t.theme.colors.secondaryText})),f=r.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-jvqlsx-4"})(["display:flex;column-gap:9.6px;svg{width:25.6px;height:25.6px;cursor:pointer;path{fill:",";transition:fill 0.3s;}}a:hover svg path{fill:",";}"],(function(t){return t.theme.colors.icon}),(function(t){return t.theme.colors.text}));e.a=function(){a.links.github,a.links.email;return i.a.createElement(c,{id:"bio"},i.a.createElement(l,null),i.a.createElement("div",null,i.a.createElement(u,null,"@",a.author),i.a.createElement(s,null,a.description),i.a.createElement(f,null)))}},jXQH:function(t,e,n){var o=n("TO8r"),i=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(i,""):t}},nmnc:function(t,e,n){var o=n("Kz5y").Symbol;t.exports=o},sEfC:function(t,e,n){var o=n("GoyQ"),i=n("QIyF"),r=n("tLB3"),a=Math.max,c=Math.min;t.exports=function(t,e,n){var l,u,s,f,p,d,m=0,v=!1,x=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=l,o=u;return l=u=void 0,m=e,f=t.apply(o,n)}function b(t){return m=t,p=setTimeout(w,e),v?g(t):f}function y(t){var n=t-d;return void 0===d||n>=e||n<0||x&&t-m>=s}function w(){var t=i();if(y(t))return E(t);p=setTimeout(w,function(t){var n=e-(t-d);return x?c(n,s-(t-m)):n}(t))}function E(t){return p=void 0,h&&l?g(t):(l=u=void 0,f)}function j(){var t=i(),n=y(t);if(l=arguments,u=this,d=t,n){if(void 0===p)return b(d);if(x)return clearTimeout(p),p=setTimeout(w,e),g(d)}return void 0===p&&(p=setTimeout(w,e)),f}return e=r(e)||0,o(n)&&(v=!!n.leading,s=(x="maxWait"in n)?a(r(n.maxWait)||0,e):s,h="trailing"in n?!!n.trailing:h),j.cancel=function(){void 0!==p&&clearTimeout(p),m=0,l=d=u=p=void 0},j.flush=function(){return void 0===p?f:E(i())},j}},tLB3:function(t,e,n){var o=n("jXQH"),i=n("GoyQ"),r=n("/9aa"),a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=c.test(t);return n||l.test(t)?u(t.slice(2),n?2:8):a.test(t)?NaN:+t}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-0f56495e6050bf7e2b6f.js.map