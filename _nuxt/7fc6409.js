(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{445:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("2b1f7ed1",content,!0,{sourceMap:!1})},446:function(t,e,n){"use strict";n(445)},447:function(t,e,n){var r=n(33)(!1);r.push([t.i,".article_list{padding:50px 50px 100px;max-width:1000px}.article_list ul li a{padding:12px 24px;display:block}.article_list ul li a:hover{background:#2c343e}.article_list ul li a .subject{font-weight:700;font-size:16px}.article_list ul li a .info{display:flex;margin-top:10px;font-size:12px}.article_list ul li a .info .author{margin-left:15px}.article_list .btn_area{margin-top:30px}.article_list .btn_area button{padding:12px 30px;background:#f7f7f7;transition:all .3s}.article_list .btn_area button:hover{background:#3273eb;color:#fff}",""]),t.exports=r},450:function(t,e,n){"use strict";n.r(e);n(446);var r=n(35),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"article_list"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);var r,c=n(87),l=n(6),o=(n(42),n(43),n(70),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,o,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=10,e.next=4,n(r.directory).sortBy("createdAt","desc").fetch();case 4:return l=e.sent,console.log(l),o=l.length,d=Math.ceil(o/c),f=l.slice(0,c),e.abrupt("return",{visibleLength:c,lastPage:d,directory:r.directory,articles:f});case 10:case"end":return e.stop()}}),e)})))()},mounted:function(){},data:function(){return{page:1}},watch:{page:(r=Object(l.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(this.directory).only(["title","description","slug","author","updatedAt","date"]).sortBy("createdAt","desc").limit(this.visibleLength).skip(this.visibleLength*n).fetch();case 2:r=t.sent,this.articles=[].concat(Object(c.a)(this.articles),Object(c.a)(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}}}),d=n(35),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ArticleList",[n("ul",t._l(t.articles,(function(article){return n("li",{key:article.path},[n("NuxtLink",{attrs:{to:{path:"/article"+article.path}}},[n("div",{staticClass:"subject"},[t._v(t._s(article.title))]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"date"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),n("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0),t._v(" "),t.page<t.lastPage?n("div",{staticClass:"btn_area"},[n("button",{on:{click:function(e){t.page++}}},[t._v("더보기")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:n(450).default})}}]);