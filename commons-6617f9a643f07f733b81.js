(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7dAM":function(e,t,n){var r=n("E9LY"),o=n("m/L8");e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),d.canUseDOM?t(l):n&&(l=n(l))}var d=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",c),d}}},C4nX:function(e,t){e.exports={title:"SIMPLIZM",description:"간소한 블로그.",author:"shinyj1991",siteUrl:"https://simplizm.xyz",links:{github:"https://github.com/shinyj1991",email:"mailto:shinyj1991@gmail.com",notion:"https://simplizm.notion.site/Simple-is-the-best-ab5993b7b6a9403088848359cd1f0b48"},utterances:{repo:"shinyj1991/simplizm",type:"pathname"}}},DGZL:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("qhky"),a=n("C4nX");t.a=function(e){var t=e.title,n=e.description,r=e.url;return o.a.createElement(i.a,null,o.a.createElement("title",null,t),o.a.createElement("meta",{property:"og:url",content:r}),o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:image",content:a.siteUrl+"/og-image.png"}),n&&o.a.createElement("meta",{name:"description",content:n}),n&&o.a.createElement("meta",{property:"og:description",content:n}))}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.a.createContext&&o.a.createContext(i),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function u(e){return function(t){return o.a.createElement(s,c({attr:c({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return o.a.createElement(t.tag,c({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,r=e.attr,i=e.size,a=e.title,u=l(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),o.a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&o.a.createElement("title",null,a),e.children)};return void 0!==a?o.a.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}},U3f4:function(e,t,n){var r=n("2oRo"),o=n("g6v/"),i=n("7dAM"),a=n("rW0t"),c=n("0Dky"),l=r.RegExp,u=l.prototype;o&&c((function(){var e=!0;try{l(".","d")}catch(c){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(u,"flags").get.call(t)!==r||n!==r}))&&i(u,"flags",{configurable:!0,get:a})},bmMU:function(e,t,n){n("U3f4");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(o&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(i&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,u[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],n[u[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},ntAx:function(e,t,n){"use strict";var r,o,i=n("q1tI"),a=n.n(i),c=n("vOnD"),l=n("/MKj"),u=n("8eQZ"),s="#343a40",d="#495057",f="#868e96",p="#adb5bd",h="#ced4da",m="#f1f3f5",g="#71ac42",b={name:"light",colors:{bodyBackground:"#ffffff",text:"#212529",secondaryText:d,tertiaryText:f,mutedText:p,hoveredLinkText:"#f8f9fa",border:h,activatedBorder:f,background:m,icon:f,divider:"#e9ecef",headerBackground:"rgba(255, 255, 255, 0.85)",headerShadow:"rgba(0, 0, 0, 0.08)",inlineCodeBackground:"#e9ecef",inlineCodeBackgroundDarker:h,tagBackground:m,selectedTagBackground:d,hoveredTagBackground:"#dee2e6",hoveredSelectedTagBackground:s,nextPostButtonBackground:"rgba(0, 0, 0, 0.06)",hoveredNextPostButtonBackground:"rgba(0, 0, 0, 0.08)",seriesBackground:m,tagText:d,selectedTagText:"#f8f9fa",spinner:d,scrollTrack:m,scrollHandle:h,blockQuoteBorder:h,blockQuoteBackground:m,textFieldBorder:h,textFieldActivatedBorder:p,tableBackground:m,title:g,link:g,accentColor1:g}},y={name:"dark",colors:{bodyBackground:"#212529",text:"#f8f9fa",secondaryText:h,tertiaryText:p,mutedText:f,hoveredLinkText:"#212529",border:p,activatedBorder:"#dee2e6",background:s,icon:p,divider:s,headerBackground:"rgba(33, 37, 41, 0.85)",headerShadow:"rgba(255, 255, 255, 0.08)",inlineCodeBackground:d,inlineCodeBackgroundDarker:s,tagBackground:s,selectedTagBackground:"#e9ecef",hoveredTagBackground:d,hoveredSelectedTagBackground:m,nextPostButtonBackground:"rgba(255, 255, 255, 0.05)",hoveredNextPostButtonBackground:"rgba(255, 255, 255, 0.08)",seriesBackground:s,tagText:"#e9ecef",selectedTagText:"#212529",spinner:m,scrollTrack:s,scrollHandle:f,blockQuoteBorder:d,blockQuoteBackground:s,textFieldBorder:d,textFieldActivatedBorder:f,tableBackground:"#292e33",title:g,link:g,accentColor1:g}},v=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},T=Object(c.css)(r||(r=v(["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],["\n/* http://meyerweb.com/eric/tools/css/reset/\n   v5.0.1 | 20191019\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"]))),w=(Object(c.createGlobalStyle)(o||(o=v(["",""],["",""])),T),T),x=Object(c.createGlobalStyle)([""," body{font-family:'Noto Sans KR',sans-serif;background:",";}*{box-sizing:border-box;&::before,&::after{box-sizing:border-box;}&:focus{outline:2px dashed #71ac42;}}"],w,(function(e){return e.theme.colors.bodyBackground})),k=n("Wbzz"),E=n("C4nX"),C=n("ma3e"),O=c.default.header.withConfig({displayName:"Header__HeaderWrapper",componentId:"sc-p1hm65-0"})(["display:block;position:fixed;top:0;left:0;width:100%;min-width:320px;background-color:",";box-shadow:0 0 8px ",";backdrop-filter:blur(5px);z-index:999;"],(function(e){return e.theme.colors.headerBackground}),(function(e){return e.theme.colors.headerShadow})),A=c.default.div.withConfig({displayName:"Header__Inner",componentId:"sc-p1hm65-1"})(["display:flex;align-items:center;justify-content:space-between;height:","px;padding:0 30px;@media (max-width:768px){padding:0 15px;}"],(function(e){return e.height})),S=c.default.div.withConfig({displayName:"Header__BlogTitle",componentId:"sc-p1hm65-2"})(['font-family:"roboto",sans-serif;font-weight:700;font-size:28px;color:',";> a{text-decoration:none;color:inherit;}@media (max-width:768px){font-size:22px;}"],(function(e){return e.theme.colors.title})),j=c.default.div.withConfig({displayName:"Header__Menu",componentId:"sc-p1hm65-3"})(["display:flex;justify-content:space-between;align-items:center;column-gap:15px;a{display:flex;align-items:center;width:20px;height:24px;}svg{width:20px;height:20px;cursor:pointer;}svg path{fill:",";transition:fill 0.3s;}svg:hover path{fill:",";}@media (max-width:768px){column-gap:10px;}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),B=c.default.div.withConfig({displayName:"Header__ToggleWrapper",componentId:"sc-p1hm65-4"})(["width:20px;height:20px;overflow:hidden;box-sizing:border-box;"]),I=c.default.div.withConfig({displayName:"Header__IconRail",componentId:"sc-p1hm65-5"})(["position:relative;display:flex;flex-direction:column;justify-content:space-between;height:40px;top:",";transition:top 0.4s;svg{transition:opacity 0.25s;}svg:first-child{opacity:",";}svg:last-child{opacity:",";}"],(function(e){return"light"===e.theme.name?"-20px":"0px"}),(function(e){return"light"===e.theme.name?0:1}),(function(e){return"dark"===e.theme.name?0:1})),L=function(e){var t=e.height,n=e.toggleTheme;return a.a.createElement(O,null,a.a.createElement(A,{height:t},a.a.createElement(S,null,a.a.createElement(k.Link,{to:"/"},E.title)),a.a.createElement(j,null,a.a.createElement(B,null,a.a.createElement(I,null,a.a.createElement(C.f,{onClick:n}),a.a.createElement(C.d,{onClick:n}))),a.a.createElement(k.Link,{to:"/tags"},a.a.createElement(C.g,null)),a.a.createElement(k.Link,{to:"/series"},a.a.createElement(C.c,null)),a.a.createElement(k.Link,{to:"/search"},a.a.createElement(C.e,{style:{marginRight:0}})))))},P=c.default.div.withConfig({displayName:"Body__BodyWrapper",componentId:"sc-161ja0p-0"})(["max-width:768px;margin:0 auto;padding:48px 0 96px;"]),N=function(e){var t=e.children;return a.a.createElement(P,null,t)},M=c.default.footer.withConfig({displayName:"Footer__FooterWrapper",componentId:"sc-1ean2rt-0"})(["position:absolute;right:0;bottom:0;left:0;height:","px;display:flex;align-items:center;justify-content:center;text-align:center;border-top:1px solid ",";font-size:12px;line-height:1.5;font-weight:lighter;color:",";.copyright{word-break:keep-all;}a{text-decoration:none;display:inline-block;margin:0 0.3em;color:",";}"],(function(e){return e.height}),(function(e){return e.theme.colors.divider}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.colors.text})),q=function(e){var t=e.height;return a.a.createElement(M,{height:t},a.a.createElement("div",{className:"copyright"},"© ",E.title,". Built with Gatsby and gatsby-starter-hoodie theme."))},_=n("DGZL"),H=c.default.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-gpmzld-0"})(["box-sizing:border-box;position:relative;min-width:320px;min-height:100vh;padding-top:","px;padding-bottom:","px;"],(function(e){return e.headerHeight}),(function(e){return e.footerHeight}));t.a=function(e){var t=e.children,n=Object(l.useDispatch)(),r=Object(l.useSelector)((function(e){return e.theme})).theme,o=null;"undefined"!=typeof window&&(o=window.matchMedia("(prefers-color-scheme: dark)").matches);var s=null;"undefined"!=typeof localStorage&&(s=localStorage.getItem("theme"));return Object(i.useEffect)((function(){o&&!s?n(o?u.b:u.c):s&&n("dark"===s?u.b:u.c)}),[]),a.a.createElement(c.ThemeProvider,{theme:"light"===r?b:y},a.a.createElement(_.a,{title:E.title,description:E.description,url:E.siteUrl}),a.a.createElement(H,{headerHeight:56,footerHeight:96},a.a.createElement(x,null),a.a.createElement(L,{height:56,toggleTheme:function(){var e="dark"===r?"light":"dark";n("dark"===e?u.b:u.c),localStorage.setItem("theme",e)}}),a.a.createElement(N,null,t),a.a.createElement(q,{height:96})))}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("E9XD");var r,o,i,a,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),d=n("bmMU"),f=n.n(d),p=n("q1tI"),h=n.n(p),m=n("YVoz"),g=n.n(m),b="bodyAttributes",y="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),x="cssText",k="href",E="http-equiv",C="innerHTML",O="itemprop",A="name",S="property",j="rel",B="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",N="defer",M="encodeSpecialCharacters",q="onChangeClientState",_="titleTemplate",H=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[T.NOSCRIPT,T.SCRIPT,T.STYLE],R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=J(e,T.TITLE),n=J(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,P);return t||r||void 0},Q=function(e){return J(e,q)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==x&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=g()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,d=e.title,f=e.titleAttributes;le(T.BODY,r),le(T.HTML,o),ce(d,f);var p={baseTag:ue(T.BASE,n),linkTags:ue(T.LINK,i),metaTags:ue(T.META,a),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),l(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=de(n,r),[h.a.createElement(T.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case y:return{toComponent:function(){return de(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===C||n===x){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,d=void 0===s?"":s,f=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(y,o,r),link:fe(T.LINK,i,r),meta:fe(T.META,a,r),noscript:fe(T.NOSCRIPT,c,r),script:fe(T.SCRIPT,l,r),style:fe(T.STYLE,u,r),title:fe(T.TITLE,{title:d,titleAttributes:f},r)}},he=s()((function(e){return{baseTag:X([k,I],e),bodyAttributes:V(b,e),defer:J(e,N),encode:J(e,M),htmlAttributes:V(y,e),linkTags:Z(T.LINK,[j,k],e),metaTags:Z(T.META,[A,w,E,S,O],e),noscriptTags:Z(T.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:Z(T.SCRIPT,[B,C],e),styleTags:Z(T.STYLE,[x],e),title:G(e),titleAttributes:V(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return D(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return U({},o,((t={})[r.type]=a,t.titleAttributes=U({},i),t));case T.BODY:return U({},o,{bodyAttributes:U({},i)});case T.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind}).call(this,n("yLpj"))},rW0t:function(e,t,n){"use strict";var r=n("glrk");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=commons-6617f9a643f07f733b81.js.map