(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{C4nX:function(e,t){e.exports={title:"SIMPLIZM",description:"간소한 블로그.",author:"shinyj1991",siteUrl:"https://simplizm.xyz",links:{github:"https://github.com/shinyj1991",email:"mailto:shinyj1991@gmail.com",notion:"https://simplizm.notion.site/Simple-is-the-best-ab5993b7b6a9403088848359cd1f0b48"},utterances:{repo:"shinyj1991/simplizm",type:"pathname"}}},Dc22:function(e,t,n){"use strict";n.r(t);var r=n("vlBi"),o=n.n(r),a=n("q1tI"),i=n.n(a),l=n("vOnD"),c=n("ntAx"),d=[{user:"barney",active:!0},{user:"fred",active:!1},{user:"pebbles",active:!1}];o()(d,(function(e){return!e.active})),console.log(o()(d,(function(e){return!e.active})));var s=l.default.div.withConfig({displayName:"lodash-study__Wrapper",componentId:"sc-qhuhh-0"})(["display:grid;row-gap:50px;padding-block:30px;color:",";h2{margin-bottom:24px;font-weight:700;font-size:32px;line-height:1.5;}h3{margin-bottom:12px;font-weight:700;font-size:20px;}@media (max-width:768px){padding-inline:15px;}"],(function(e){return e.theme.colors.text}));t.default=function(){return i.a.createElement(c.a,null,i.a.createElement(s,null,i.a.createElement("section",null,i.a.createElement("h2",null,"Array"),i.a.createElement("p",null))))}},KxBF:function(e,t){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),o=n.n(r),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=o.a.createContext&&o.a.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function d(e){return function(t){return o.a.createElement(s,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return o.a.createElement(t.tag,l({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,d=c(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:n,style:l(l({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&o.a.createElement("title",null,i),e.children)};return void 0!==i?o.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},j2Dk:function(e,t,n){var r=n("KxBF");e.exports=function(e,t,n,o){for(var a=e.length,i=o?a:-1;(o?i--:++i<a)&&t(e[i],i,e););return n?r(e,o?0:i,o?i+1:a):r(e,o?i+1:0,o?a:i)}},ntAx:function(e,t,n){"use strict";var r,o,a=n("q1tI"),i=n.n(a),l=n("vOnD"),c=n("/MKj"),d=n("8eQZ"),s="#343a40",u="#495057",h="#868e96",p="#adb5bd",m="#ced4da",f="#f1f3f5",g={name:"light",colors:{bodyBackground:"#ffffff",text:"#212529",secondaryText:u,tertiaryText:h,mutedText:p,hoveredLinkText:"#f8f9fa",border:m,activatedBorder:h,background:f,icon:h,divider:"#e9ecef",headerBackground:"rgba(255, 255, 255, 0.85)",headerShadow:"rgba(0, 0, 0, 0.08)",inlineCodeBackground:"#e9ecef",inlineCodeBackgroundDarker:m,tagBackground:f,selectedTagBackground:u,hoveredTagBackground:"#dee2e6",hoveredSelectedTagBackground:s,nextPostButtonBackground:"rgba(0, 0, 0, 0.06)",hoveredNextPostButtonBackground:"rgba(0, 0, 0, 0.08)",seriesBackground:f,tagText:u,selectedTagText:"#f8f9fa",spinner:u,scrollTrack:f,scrollHandle:m,blockQuoteBorder:m,blockQuoteBackground:f,textFieldBorder:m,textFieldActivatedBorder:p,tableBackground:f,title:"#71ac42"}},b={name:"dark",colors:{bodyBackground:"#212529",text:"#f8f9fa",secondaryText:m,tertiaryText:p,mutedText:h,hoveredLinkText:"#212529",border:p,activatedBorder:"#dee2e6",background:s,icon:p,divider:s,headerBackground:"rgba(33, 37, 41, 0.85)",headerShadow:"rgba(255, 255, 255, 0.08)",inlineCodeBackground:u,inlineCodeBackgroundDarker:s,tagBackground:s,selectedTagBackground:"#e9ecef",hoveredTagBackground:u,hoveredSelectedTagBackground:f,nextPostButtonBackground:"rgba(255, 255, 255, 0.05)",hoveredNextPostButtonBackground:"rgba(255, 255, 255, 0.08)",seriesBackground:s,tagText:"#e9ecef",selectedTagText:"#212529",spinner:f,scrollTrack:s,scrollHandle:h,blockQuoteBorder:u,blockQuoteBackground:s,textFieldBorder:u,textFieldActivatedBorder:h,tableBackground:"#292e33",title:"#71ac42"}},x=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=Object(l.css)(r||(r=x(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),v=(Object(l.createGlobalStyle)(o||(o=x(["",""],["",""])),y),y),k=Object(l.createGlobalStyle)([""," body{font-family:'Noto Sans KR',sans-serif;background:",";}*{box-sizing:border-box;&::before,&::after{box-sizing:border-box;}}"],v,(function(e){return e.theme.colors.bodyBackground})),w=n("Wbzz"),B=n("C4nX"),E=n("ma3e"),T=l.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-p1hm65-0"})(["display:block;position:fixed;top:0;left:0;width:100%;min-width:320px;background-color:",";box-shadow:0 0 8px ",";backdrop-filter:blur(5px);z-index:999;"],(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.colors.headerShadow})),j=l.default.div.withConfig({displayName:"Header__Inner",componentId:"sc-p1hm65-1"})(["display:flex;align-items:center;justify-content:space-between;height:","px;padding:0 30px;@media (max-width:768px){padding:0 15px;}"],(function(e){return e.height})),z=l.default.div.withConfig({displayName:"Header__BlogTitle",componentId:"sc-p1hm65-2"})(['font-family:"roboto",sans-serif;font-weight:700;font-size:28px;color:',";> a{text-decoration:none;color:inherit;}@media (max-width:768px){font-size:22px;}"],(function(e){return e.theme.colors.title})),C=l.default.div.withConfig({displayName:"Header__Menu",componentId:"sc-p1hm65-3"})(["display:flex;justify-content:space-between;align-items:center;column-gap:15px;a{display:flex;align-items:center;width:20px;height:24px;}svg{width:20px;height:20px;cursor:pointer;}svg path{fill:",";transition:fill 0.3s;}svg:hover path{fill:",";}@media (max-width:768px){column-gap:10px;}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),q=l.default.div.withConfig({displayName:"Header__ToggleWrapper",componentId:"sc-p1hm65-4"})(["width:20px;height:20px;overflow:hidden;box-sizing:border-box;"]),O=l.default.div.withConfig({displayName:"Header__IconRail",componentId:"sc-p1hm65-5"})(["position:relative;display:flex;flex-direction:column;justify-content:space-between;height:40px;top:",";transition:top 0.4s;svg{transition:opacity 0.25s;}svg:first-child{opacity:",";}svg:last-child{opacity:",";}"],(function(e){return"light"===e.theme.name?"-20px":"0px"}),(function(e){return"light"===e.theme.name?0:1}),(function(e){return"dark"===e.theme.name?0:1})),I=function(e){var t=e.height,n=e.toggleTheme;return i.a.createElement(T,null,i.a.createElement(j,{height:t},i.a.createElement(z,null,i.a.createElement(w.Link,{to:"/"},B.title)),i.a.createElement(C,null,i.a.createElement(q,null,i.a.createElement(O,null,i.a.createElement(E.l,{onClick:n}),i.a.createElement(E.i,{onClick:n}))),i.a.createElement(w.Link,{to:"/tags"},i.a.createElement(E.m,null)),i.a.createElement(w.Link,{to:"/series"},i.a.createElement(E.h,null)),i.a.createElement(w.Link,{to:"/rss.xml"},i.a.createElement(E.j,null)),i.a.createElement(w.Link,{to:"/search"},i.a.createElement(E.k,{style:{marginRight:0}})))))},N=l.default.div.withConfig({displayName:"Body__BodyWrapper",componentId:"sc-161ja0p-0"})(["max-width:768px;margin:0 auto;padding:48px 0 96px;"]),_=function(e){var t=e.children;return i.a.createElement(N,null,t)},H=l.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1ean2rt-0"})(["position:absolute;right:0;bottom:0;left:0;height:","px;display:flex;align-items:center;justify-content:center;border-top:1px solid ",";font-size:11pt;font-weight:lighter;color:",";a{margin:0 0.3em;color:",";}abbr{text-decoration:none;}"],(function(e){return e.height}),(function(e){return e.theme.colors.divider}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.colors.text})),L=function(e){var t=e.height;return i.a.createElement(H,{height:t},i.a.createElement("div",{className:"copyright"},"© 2022. ",B.title," all rights reserved."))},S=l.default.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-gpmzld-0"})(["box-sizing:border-box;position:relative;min-width:320px;min-height:100vh;padding-top:","px;padding-bottom:","px;"],(function(e){return e.headerHeight}),(function(e){return e.footerHeight}));t.a=function(e){var t=e.children,n=Object(c.useDispatch)(),r=Object(c.useSelector)((function(e){return e.theme})).theme,o=null;"undefined"!=typeof window&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches);var s=null;"undefined"!=typeof localStorage&&(s=localStorage.getItem("theme"));return Object(a.useEffect)((function(){o&&!s?n(o?d.b:d.c):s&&n("dark"===s?d.b:d.c)}),[]),i.a.createElement(l.ThemeProvider,{theme:"light"===r?g:b},i.a.createElement(S,{headerHeight:56,footerHeight:96},i.a.createElement(k,null),i.a.createElement(I,{height:56,toggleTheme:function(){var e="dark"===r?"light":"dark";n("dark"===e?d.b:d.c),localStorage.setItem("theme",e)}}),i.a.createElement(_,null,t),i.a.createElement(L,{height:96})))}},vlBi:function(e,t,n){var r=n("ut/Y"),o=n("j2Dk");e.exports=function(e,t){return e&&e.length?o(e,r(t,3),!0,!0):[]}}}]);
//# sourceMappingURL=component---src-pages-demo-lodash-study-index-jsx-076257cb4d354a199fa8.js.map