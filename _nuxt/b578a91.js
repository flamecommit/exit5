(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{500:function(t,e,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("45513348",content,!0,{sourceMap:!1})},501:function(t,e,r){"use strict";var n=r(14),l=r(2),o=r(3),c=r(112),d=r(22),f=r(15),h=r(211),v=r(51),m=r(111),x=r(210),_=r(4),y=r(85).f,N=r(45).f,I=r(21).f,w=r(502),E=r(212).trim,k="Number",C=l.Number,A=C.prototype,O=l.TypeError,j=o("".slice),L=o("".charCodeAt),P=function(t){var e=x(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,r,n,l,o,c,d,code,f=x(t,"number");if(m(f))throw O("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=E(f),43===(e=L(f,0))||45===e){if(88===(r=L(f,2))||120===r)return NaN}else if(48===e){switch(L(f,1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+f}for(c=(o=j(f,2)).length,d=0;d<c;d++)if((code=L(o,d))<48||code>l)return NaN;return parseInt(o,n)}return+f};if(c(k,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var T,M=function(t){var e=arguments.length<1?0:C(P(t)),r=this;return v(A,r)&&_((function(){w(r)}))?h(Object(e),r,M):e},F=n?y(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;F.length>R;R++)f(C,T=F[R])&&!f(M,T)&&I(M,T,N(C,T));M.prototype=A,A.constructor=M,d(l,k,M)}},502:function(t,e,r){var n=r(3);t.exports=n(1..valueOf)},503:function(t,e,r){"use strict";r(500)},504:function(t,e,r){var n=r(33)(!1);n.push([t.i,".article-list{padding:50px 50px 100px;max-width:1000px}.article-list ul li{border-left:3px solid #2c343e}.article-list ul li:not(:first-child){margin-top:24px}.article-list ul li a{padding:12px 24px;display:block}.article-list ul li a:hover{background:#2c343e}.article-list ul li a .category{margin-bottom:5px;font-size:12px}.article-list ul li a .subject{font-size:16px}.article-list ul li a .info{display:flex;margin-top:10px;font-size:12px}.article-list ul li a .info .author{margin-left:15px}.article-list .btn_area{margin-top:30px}.article-list .btn_area button{padding:12px 30px;transition:all .3s}.article-list .btn_area button:hover{text-decoration:underline}.article-list .loading{margin-top:30px;padding:12px 30px}@media screen and (max-width:1200px){.article-list{padding:50px 20px}}",""]),t.exports=n},507:function(t,e,r){"use strict";r.r(e);r(501);var n=r(0).a.extend({props:{articles:Array,page:Number,lastPage:Number,loading:Boolean}}),l=(r(503),r(20)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-list"},[r("ul",t._l(t.articles,(function(article,e){return r("li",{key:e},[r("nuxt-link",{attrs:{to:{path:article.path}}},[r("div",{staticClass:"category"},[t._v(t._s(article.dir.replace("/","")))]),t._v(" "),r("div",{staticClass:"subject"},[t._v(t._s(article.title))]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"date"},[t._v(t._s(article.date))]),t._v(" "),r("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0),t._v(" "),t.page<t.lastPage&&!t.loading?r("div",{staticClass:"btn_area"},[r("button",{on:{click:function(e){return t.$emit("incrementPage")}}},[t._v("더보기")])]):t._e(),t._v(" "),t.loading?r("div",{staticClass:"loading"},[t._v("Loading...")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},530:function(t,e,r){"use strict";r.r(e);var n,l=r(106),o=r(7),c=(r(71),r(70),r(44),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,l=10,e.next=4,r(n.directory).only([]).fetch();case 4:return o=e.sent,c=Math.ceil(o.length/l),e.next=8,r(n.directory,{deep:!0}).limit(l).sortBy("date","desc").fetch();case 8:return d=e.sent,console.log(d),e.abrupt("return",{visibleLength:l,lastPage:c,directory:n.directory,articles:d});case 11:case"end":return e.stop()}}),e)})))()},mounted:function(){},data:function(){return{page:1,loading:!1}},watch:{page:(n=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$content(this.directory).sortBy("date","desc").limit(this.visibleLength).skip(this.visibleLength*r).fetch();case 3:n=t.sent,setTimeout((function(){o.loading=!1,o.articles=[].concat(Object(l.a)(o.articles),Object(l.a)(n))}),10);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}}}),d=c,f=r(20),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("article-list",{attrs:{articles:t.articles,page:t.page,lastPage:t.lastPage,loading:t.loading},on:{incrementPage:function(e){t.page++}}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:r(507).default})}}]);