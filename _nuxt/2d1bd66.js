(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{448:function(t,e,n){var content=n(454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("74200310",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n(448)},454:function(t,e,n){var r=n(32)(!1);r.push([t.i,".blog_index[data-v-268221fc]{padding:50px 50px 100px;max-width:1000px}.blog_index ul li a[data-v-268221fc]{padding:12px 24px;display:block}.blog_index ul li a[data-v-268221fc]:hover{background:#2c343e}.blog_index ul li a .subject[data-v-268221fc]{font-weight:700;font-size:16px}.blog_index ul li a .info[data-v-268221fc]{display:flex;margin-top:10px;font-size:12px}.blog_index ul li a .info .author[data-v-268221fc]{margin-left:15px}.blog_index .btn_area[data-v-268221fc]{margin-top:30px}.blog_index .btn_area button[data-v-268221fc]{padding:12px 30px;background:#f7f7f7;transition:all .3s}.blog_index .btn_area button[data-v-268221fc]:hover{background:#3273eb;color:#fff}",""]),t.exports=r},471:function(t,e,n){"use strict";n.r(e);var r,c=n(86),o=n(6),l=(n(37),n(38),n(69),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,console.log("async",n),c=10,e.next=5,n(r.directory).sortBy("createdAt","desc").fetch();case 5:return o=e.sent,l=o.length,d=Math.ceil(l/c),f=o.slice(0,c),e.abrupt("return",{visibleLength:c,lastPage:d,directory:r.directory,articles:f});case 10:case"end":return e.stop()}}),e)})))()},mounted:function(){},data:function(){return{page:1}},watch:{page:(r=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$content(this.directory).only(["title","description","slug","author","updatedAt","date"]).sortBy("createdAt","desc").limit(this.visibleLength).skip(this.visibleLength*n).fetch();case 2:r=t.sent,this.articles=[].concat(Object(c.a)(this.articles),Object(c.a)(r));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return r.apply(this,arguments)})},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}}}),d=(n(453),n(34)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog_index"},[n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("NuxtLink",{attrs:{to:{path:"/article/"+t.directory+"/"+article.slug}}},[n("div",{staticClass:"subject"},[t._v(t._s(article.title))]),t._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"date"},[t._v(t._s(t.formatDate(article.createdAt)))]),t._v(" "),n("div",{staticClass:"author"},[t._v(t._s(article.author))])])])],1)})),0),t._v(" "),t.page<t.lastPage?n("div",{staticClass:"btn_area"},[n("button",{on:{click:function(e){t.page++}}},[t._v("더보기")])]):t._e()])}),[],!1,null,"268221fc",null);e.default=component.exports}}]);