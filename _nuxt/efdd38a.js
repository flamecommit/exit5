(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{500:function(t,e,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("45513348",content,!0,{sourceMap:!1})},501:function(t,e,n){"use strict";var r=n(14),l=n(2),o=n(3),c=n(112),d=n(22),f=n(15),v=n(211),h=n(51),m=n(111),x=n(210),_=n(4),y=n(85).f,N=n(45).f,I=n(21).f,w=n(502),E=n(212).trim,k="Number",A=l.Number,C=A.prototype,L=l.TypeError,O=o("".slice),j=o("".charCodeAt),P=function(t){var e=x(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,n,r,l,o,c,d,code,f=x(t,"number");if(m(f))throw L("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=E(f),43===(e=j(f,0))||45===e){if(88===(n=j(f,2))||120===n)return NaN}else if(48===e){switch(j(f,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(c=(o=O(f,2)).length,d=0;d<c;d++)if((code=j(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+f};if(c(k,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var T,M=function(t){var e=arguments.length<1?0:A(P(t)),n=this;return h(C,n)&&_((function(){w(n)}))?v(Object(e),n,M):e},F=r?y(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;F.length>R;R++)f(A,T=F[R])&&!f(M,T)&&I(M,T,N(A,T));M.prototype=C,C.constructor=M,d(l,k,M)}},502:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},503:function(t,e,n){"use strict";n(500)},504:function(t,e,n){var r=n(33)(!1);r.push([t.i,".article-list{padding:50px 50px 100px;max-width:1000px}.article-list ul li{border-left:3px solid #2c343e}.article-list ul li:not(:first-child){margin-top:24px}.article-list ul li a{padding:12px 24px;display:block}.article-list ul li a:hover{background:#2c343e}.article-list ul li a .category{margin-bottom:5px;font-size:12px}.article-list ul li a .subject{font-size:16px}.article-list ul li a .info{display:flex;margin-top:10px;font-size:12px}.article-list ul li a .info .author{margin-left:15px}.article-list .btn_area{margin-top:30px}.article-list .btn_area button{padding:12px 30px;transition:all .3s}.article-list .btn_area button:hover{text-decoration:underline}.article-list .loading{margin-top:30px;padding:12px 30px}@media screen and (max-width:1200px){.article-list{padding:50px 20px}}",""]),t.exports=r},507:function(t,e,n){"use strict";n.r(e);n(501);var r=n(0).a.extend({props:{articles:Array,page:Number,lastPage:Number,loading:Boolean}}),l=(n(503),n(20)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},[n("ul",t._l(t.articles,(function(article,e){return n("li",{key:e},[n("nuxt-link",{attrs:{to:{path:article.path}}},[n("div",{staticClass:"category"},[t._v(t._s(article.dir.replace("/","")))]),t._v(" "),n("div",{staticClass:"subject"},[t._v(t._s(article.title))]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"date"},[t._v(t._s(article.date))]),t._v(" "),n("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0),t._v(" "),t.page<t.lastPage&&!t.loading?n("div",{staticClass:"btn_area"},[n("button",{on:{click:function(e){return t.$emit("incrementPage")}}},[t._v("더보기")])]):t._e(),t._v(" "),t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):t._e()])}),[],!1,null,null,null);e.default=component.exports},529:function(t,e,n){"use strict";n.r(e);var r,l=n(106),o=n(7),c=(n(71),n(70),n(44),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,l=10,e.next=4,n({deep:!0}).only([]).fetch();case 4:return o=e.sent,c=Math.ceil(o.length/l),e.next=8,n({deep:!0}).limit(l).sortBy("date","desc").fetch();case 8:return d=e.sent,e.abrupt("return",{visibleLength:l,lastPage:c,directory:r.directory,articles:d});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{page:1,loading:!1}},watch:{page:(r=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$content({deep:!0}).sortBy("date","desc").limit(this.visibleLength).skip(this.visibleLength*n).fetch();case 3:r=t.sent,setTimeout((function(){o.loading=!1,o.articles=[].concat(Object(l.a)(o.articles),Object(l.a)(r))}),100);case 5:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}}}),d=c,f=n(20),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ArticleList",{attrs:{articles:t.articles,page:t.page,lastPage:t.lastPage,loading:t.loading},on:{incrementPage:function(e){t.page++}}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:n(507).default})}}]);