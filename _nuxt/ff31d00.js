(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,11,12,13,14,15],{505:function(t,e,r){var content=r(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("64e42db6",content,!0,{sourceMap:!1})},506:function(t,e,r){var content=r(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("e2470b8c",content,!0,{sourceMap:!1})},507:function(t,e,r){"use strict";r(505)},508:function(t,e,r){var o=r(33)(!1);o.push([t.i,'.article-chord[data-v-76814b66]{padding:20px 20px 20px 40px;background:#fff}.article-chord .chord-name[data-v-76814b66]{text-align:center;font-weight:700;font-size:30px;line-height:1;margin-bottom:30px}.article-chord .chord-score[data-v-76814b66]{position:relative;display:flex;border-left:1px solid #000}.article-chord .chord-score.start-0[data-v-76814b66]:before{display:block;content:"";position:absolute;top:0;left:-5px;bottom:0;width:5px;border-top:1px solid #000;border-left:3px solid #000;border-bottom:1px solid #000}.article-chord .chord-score .plat[data-v-76814b66]{position:relative;display:grid;grid-row-gap:20px;row-gap:20px;border-right:1px solid #000}.article-chord .chord-score .plat .plat-number[data-v-76814b66]{position:absolute;top:-22px;left:-5px}.article-chord .chord-score .plat .line[data-v-76814b66]{position:relative;width:120px;border-bottom:1px solid #000}@media screen and (max-width:768px){.article-chord .chord-score .plat .line[data-v-76814b66]{width:80px}}.article-chord .chord-score .plat .line .circle[data-v-76814b66]{position:absolute;top:-7px;left:calc(50% - 8px);width:16px;height:16px;border-radius:50%;background:#000}.article-chord .chord-score .plat .line .mute[data-v-76814b66]{position:absolute;top:-7px;left:-24px;width:16px;height:16px}.article-chord .chord-score .plat .line .mute[data-v-76814b66]:before{display:block;content:"";width:1px;height:100%;background:#000;position:absolute;top:0;left:7px;transform:rotate(-45deg)}.article-chord .chord-score .plat .line .mute[data-v-76814b66]:after{display:block;content:"";width:1px;height:100%;background:#000;position:absolute;top:0;left:7px;transform:rotate(45deg)}.article-chord .chord-score .plat .line .open[data-v-76814b66]{position:absolute;top:-7px;left:-24px;width:16px;height:16px;border-radius:50%;border:1px solid #000}.article-chord .chord-score .plat .line .barre[data-v-76814b66]{position:absolute;top:-10px;left:calc(50% - 8px);width:16px;height:calc(21px*var(--barreHeight));border-radius:8px;background:#000}.article-chord.page .chord-name[data-v-76814b66]{font-size:20px}.article-chord.page .chord-score .plat[data-v-76814b66]{width:25%}.article-chord.page .chord-score .plat .line[data-v-76814b66]{width:100%}',""]),t.exports=o},509:function(t,e,r){"use strict";e.a=[{kor:"김광석",eng:"kimkwangseok"},{kor:"최호섭",eng:"choihosub"},{kor:"아이유",eng:"iu"},{kor:"변진섭",eng:"byunjinsub"},{kor:"이적",eng:"leejeok"},{kor:"들국화",eng:"deulgukhwa"},{kor:"자우림",eng:"jaurim"},{kor:"유재하",eng:"yoojaeha"},{kor:"이문세",eng:"leemoonse"},{kor:"도원경",eng:"dowonkyung"},{kor:"안치환",eng:"ahnchihwan"},{kor:"녹색지대",eng:"greenzone"},{kor:"김연숙",eng:"kimyeonsook"}]},510:function(t,e,r){"use strict";r.r(e);var o={props:{chord:{type:Object,default:{}}}},n=(r(507),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"article-chord"},[r("h1",{staticClass:"chord-name"},[t._v(t._s(t.chord.name))]),t._v(" "),r("div",{staticClass:"chord-score",class:"start-"+t.chord.start},t._l(t.chord.position,(function(e,o){return r("div",{key:o,staticClass:"plat"},[r("div",{staticClass:"plat-number"},[t._v(t._s(t.chord.start+o))]),t._v(" "),t._l(e,(function(line,e){return r("div",{key:e,staticClass:"line"},["M"===line?r("div",{staticClass:"mute"}):t._e(),t._v(" "),"O"===line?r("div",{staticClass:"open"}):t._e(),t._v(" "),"string"==typeof line&&"B"===line.charAt(0)?r("div",{staticClass:"barre",style:"--barreHeight: "+line.charAt(1)}):t._e(),t._v(" "),1===line?r("div",{staticClass:"circle"}):t._e()])}))],2)})),0)])}),[],!1,null,"76814b66",null);e.default=component.exports},511:function(t,e,r){"use strict";r(506)},512:function(t,e,r){var o=r(33)(!1);o.push([t.i,".popup-chord[data-v-237e36c6]{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:100;background:rgba(0,0,0,.7);color:#000}.fade-enter-active[data-v-237e36c6],.fade-leave-active[data-v-237e36c6]{transition:opacity .5s}.fade-enter[data-v-237e36c6],.fade-leave-to[data-v-237e36c6]{opacity:0}",""]),t.exports=o},513:function(t,e,r){"use strict";r.r(e);var o={props:{chord:{type:Object,default:{}},isPopupChord:{type:Boolean,default:!1}}},n=(r(511),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isPopupChord?r("div",{staticClass:"popup-chord",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("update:isPopupChord",!1)}}},[r("article-chord",{attrs:{chord:t.chord}})],1):t._e()}),[],!1,null,"237e36c6",null);e.default=component.exports;installComponents(component,{ArticleChord:r(510).default})},521:function(t,e,r){"use strict";var o=r(14),n=r(1),c=r(3),d=r(116),l=r(23),f=r(17),h=r(219),v=r(53),m=r(115),x=r(218),_=r(4),y=r(86).f,w=r(46).f,C=r(21).f,k=r(526),j=r(220).trim,P="Number",N=n.Number,O=N.prototype,E=n.TypeError,I=c("".slice),M=c("".charCodeAt),z=function(t){var e=x(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,r,o,n,c,d,l,code,f=x(t,"number");if(m(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=j(f),43===(e=M(f,0))||45===e){if(88===(r=M(f,2))||120===r)return NaN}else if(48===e){switch(M(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(d=(c=I(f,2)).length,l=0;l<d;l++)if((code=M(c,l))<48||code>n)return NaN;return parseInt(c,o)}return+f};if(d(P,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var T,$=function(t){var e=arguments.length<1?0:N(z(t)),r=this;return v(O,r)&&_((function(){k(r)}))?h(Object(e),r,$):e},A=o?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;A.length>D;D++)f(N,T=A[D])&&!f($,T)&&C($,T,w(N,T));$.prototype=O,O.constructor=$,l(n,P,$)}},522:function(t,e,r){var map={"./tab/folk/2-1.png":527,"./tab/folk/2-2.png":528};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=522},525:function(t,e,r){var content=r(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("0f91ea92",content,!0,{sourceMap:!1})},526:function(t,e,r){var o=r(3);t.exports=o(1..valueOf)},527:function(t,e,r){t.exports=r.p+"img/2-1.6bb5e50.png"},528:function(t,e,r){t.exports=r.p+"img/2-2.c3c5637.png"},529:function(t,e,r){var content=r(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("a6464ef2",content,!0,{sourceMap:!1})},530:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("ed2760bc",content,!0,{sourceMap:!1})},531:function(t,e,r){var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("783fd556",content,!0,{sourceMap:!1})},537:function(t,e,r){"use strict";r(525)},538:function(t,e,r){var o=r(33)(!1);o.push([t.i,".score-head[data-v-12710622]{padding:0 0 30px;margin-bottom:50px;border-bottom:2px solid #ddd}.score-head .hgroup[data-v-12710622]{text-align:center;margin-bottom:30px}.score-head .hgroup h1[data-v-12710622]{font-weight:700;font-size:32px}.score-head .hgroup .year[data-v-12710622]{margin-top:5px;font-size:14px;color:#666}.score-head .info[data-v-12710622]{display:flex;grid-column-gap:12px;-moz-column-gap:12px;column-gap:12px;font-size:12px}.score-head .info .writer[data-v-12710622]{margin-left:15px}@media screen and (max-width:1200px){.score-head .hgroup h1[data-v-12710622]{font-size:26px}}",""]),t.exports=o},539:function(t,e,r){"use strict";r(529)},540:function(t,e,r){var o=r(33)(!1);o.push([t.i,".score-tab[data-v-2b955b3f]{display:grid;grid-row-gap:30px;row-gap:30px}.score-tab .measure[data-v-2b955b3f]{position:relative}.score-tab .measure.isChord[data-v-2b955b3f]{padding-top:35px}.score-tab .measure.isLyrics[data-v-2b955b3f]{padding-bottom:40px}.score-tab .measure[data-v-2b955b3f]:not(.isTab){border:1px solid #ccc;padding:0;height:60px;margin:0 3px}.score-tab .measure:nth-child(4n+1) .line-list[data-v-2b955b3f]{border-left:1px solid #000}.score-tab .measure.isDisabled[data-v-2b955b3f]{border:none}.score-tab .measure .chord-list[data-v-2b955b3f]{position:absolute;top:0;left:0;width:100%;display:flex}.score-tab .measure .chord-list .chord[data-v-2b955b3f]{font-size:14px;line-height:30px;text-align:left;padding:0 5px}.score-tab .measure .chord-list .chord[data-v-2b955b3f]:hover{background:#f7f7f7}.score-tab .measure .tab-area[data-v-2b955b3f]{position:relative;display:flex;height:66px;padding:0 5px}.score-tab .measure .tab-area .line-list[data-v-2b955b3f]{position:absolute;top:0;left:0;bottom:0;width:100%;display:flex;flex-flow:column;justify-content:space-between;border-right:1px solid #000}.score-tab .measure .tab-area .line-list .line[data-v-2b955b3f]{width:100%;border-bottom:1px solid #bbb}.score-tab .measure .tab-area .node-list[data-v-2b955b3f]{position:relative;text-align:left;z-index:1;margin:-6px 0;padding:0 0 0 5px}.score-tab .measure .tab-area .node-list .node[data-v-2b955b3f]{position:relative;z-index:1;height:13px;font-size:12px;line-height:13px;text-shadow:-2px 0 #fff,0 2px #fff,2px 0 #fff,0 -2px #fff}.score-tab .measure .lyrics-list[data-v-2b955b3f]{position:absolute;bottom:0;left:0;width:100%;display:flex;justify-content:space-between;padding:0 5px;background:#f7f7f7}.score-tab .measure .lyrics-list .lyrics[data-v-2b955b3f]{font-size:14px;line-height:30px;height:30px}",""]),t.exports=o},541:function(t,e,r){"use strict";r(530)},542:function(t,e,r){var o=r(33)(!1);o.push([t.i,".score-image[data-v-2e6ecebe]{text-align:center}.score-image img[data-v-2e6ecebe]{max-width:100%}",""]),t.exports=o},543:function(t,e,r){"use strict";r(531)},544:function(t,e,r){var o=r(33)(!1);o.push([t.i,".score-chord[data-v-59a5c2b6]{display:grid;grid-row-gap:16px;row-gap:16px;grid-column-gap:5px;-moz-column-gap:5px;column-gap:5px;font-size:16px}.score-chord .measure[data-v-59a5c2b6]{display:grid;align-items:flex-start;border:1px solid #ccc}.score-chord .measure .chord[data-v-59a5c2b6]{display:flex;min-height:1.5em}.score-chord .measure .chord .chord-item[data-v-59a5c2b6]{text-align:left;padding:3px 5px}.score-chord .measure .chord .chord-item[data-v-59a5c2b6]:hover{background:#f7f7f7}.score-chord .measure .lyrics[data-v-59a5c2b6]{display:flex;justify-content:space-between;padding:3px 5px;min-height:1.5em}@media screen and (max-width:768px){.score-chord[data-v-59a5c2b6]{font-size:14px}}@media screen and (max-width:480px){.score-chord[data-v-59a5c2b6]{font-size:12px}}",""]),t.exports=o},549:function(t,e,r){var content=r(565);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("f30b52f4",content,!0,{sourceMap:!1})},555:function(t,e,r){"use strict";r.r(e);var o={props:{music:{type:Object,default:{}}}},n=(r(537),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"score-head"},[r("div",{staticClass:"hgroup"},[r("h2",[t._v(t._s(t.music.musician)+" - "+t._s(t.music.title))]),t._v(" "),r("div",{staticClass:"year"},[t._v(t._s(t.music.year))])]),t._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"date"},[t._v("Capo : "+t._s(t.music.capo))])])])}),[],!1,null,"12710622",null);e.default=component.exports},556:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(44),r(521),r(29),r(70),{data:function(){return{chord:null,isPopupChord:!1}},props:{measure:{measure:Number,default:4},score:{type:Object,required:!0}},computed:{dynamicImage:function(){return r(522)("./tab".concat(this.src))}},methods:{openPopupChord:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.replace(/\//gi,"_"),r.next=3,e.$content("chord/".concat(o)).fetch();case 3:n=r.sent,e.chord=n,e.isPopupChord=!0;case 6:case"end":return r.stop()}}),r)})))()}}}),c=(r(539),r(15)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"score-tab",style:"grid-template-columns: repeat("+t.measure+", 1fr);"},[t._l(t.score.contents,(function(e,o){return r("div",{key:o,staticClass:"measure",class:{isChord:e.chord,isLyrics:e.lyrics,isTab:e.nodelist,isDisabled:e.disabled}},[r("div",{staticClass:"chord-list"},t._l(e.chord,(function(o,n){return r("button",{key:n,staticClass:"chord",style:"\n          flex-grow: "+(o.grow?o.grow:1)+";\n          flex-basis: "+(o.grow?o.grow:1)/e.chord.length*100+"%;\n        ",attrs:{type:"button"},on:{click:function(e){return t.openPopupChord(o.name)}}},[t._v(t._s(o.name))])})),0),t._v(" "),e.nodelist?r("div",{staticClass:"tab-area"},[r("div",{staticClass:"line-list"},t._l(6,(function(line,t){return r("div",{key:t,staticClass:"line"})})),0),t._v(" "),t._l(e.nodelist,(function(o,n){return r("div",{key:n,staticClass:"node-list",style:"\n          flex-grow: "+o.grow+";\n          flex-basis: "+o.grow/e.nodelist.length*100+"%;\n        "},t._l(o.node,(function(e,o){return r("div",{key:o,staticClass:"node"},[t._v(t._s(null!==e?e:""))])})),0)}))],2):t._e(),t._v(" "),r("div",{staticClass:"lyrics-list"},t._l(e.lyrics,(function(e){return r("div",{staticClass:"lyrics"},[t._v(t._s(e))])})),0)])})),t._v(" "),r("popup-chord",{attrs:{isPopupChord:t.isPopupChord,chord:t.chord},on:{"update:isPopupChord":function(e){t.isPopupChord=e},"update:is-popup-chord":function(e){t.isPopupChord=e}}})],2)}),[],!1,null,"2b955b3f",null);e.default=component.exports;installComponents(component,{PopupChord:r(513).default})},557:function(t,e,r){"use strict";r.r(e);var o={props:{src:{type:String,required:!0},alt:{type:String,required:!1}},computed:{dynamicImage:function(){return r(522)("./tab".concat(this.src))}}},n=(r(541),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"score-image"},[r("img",{attrs:{src:t.dynamicImage,alt:t.alt}})])}),[],!1,null,"2e6ecebe",null);e.default=component.exports},558:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(44),r(521),r(29),r(70),{data:function(){return{chord:null,isPopupChord:!1}},props:{measure:{measure:Number,default:4},score:{type:Object,default:{}}},methods:{openPopupChord:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.replace(/\//gi,"_"),r.next=3,e.$content("chord/".concat(o)).fetch();case 3:n=r.sent,e.chord=n,e.isPopupChord=!0;case 6:case"end":return r.stop()}}),r)})))()}}}),c=(r(543),r(15)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"score-chord",style:"grid-template-columns: repeat("+t.measure+", 1fr);"},[t._l(t.score.contents,(function(e,o){return r("div",{key:o,staticClass:"measure"},[r("div",{staticClass:"chord"},t._l(e.chord,(function(o,n){return r("button",{key:n,staticClass:"chord-item",style:"\n          flex-grow: "+(o.grow?o.grow:1)+";\n          flex-basis: "+(o.grow?o.grow:1)/e.chord.length*100+"%;\n        ",attrs:{type:"button"},on:{click:function(e){return t.openPopupChord(o.name)}}},[t._v(t._s(o.name))])})),0),t._v(" "),"string"==typeof e.lyrics?r("div",{staticClass:"lyrics"},[t._v(t._s(e.lyrics))]):r("div",{staticClass:"lyrics"},t._l(e.lyrics,(function(e,o){return r("div",{key:o},[t._v(t._s(e))])})),0)])})),t._v(" "),r("popup-chord",{attrs:{isPopupChord:t.isPopupChord,chord:t.chord},on:{"update:isPopupChord":function(e){t.isPopupChord=e},"update:is-popup-chord":function(e){t.isPopupChord=e}}})],2)}),[],!1,null,"59a5c2b6",null);e.default=component.exports;installComponents(component,{PopupChord:r(513).default})},564:function(t,e,r){"use strict";r(549)},565:function(t,e,r){var o=r(33)(!1);o.push([t.i,".page-music-detail .score-contents[data-v-12293de1]{display:grid;grid-row-gap:100px;row-gap:100px}@media screen and (max-width:1200px){.page-music-detail .score-contents[data-v-12293de1]{grid-row-gap:50px;row-gap:50px}}",""]),t.exports=o},592:function(t,e,r){"use strict";r.r(e);var o=r(7),n=(r(44),r(29),r(70),r(114),r(216),r(9),r(72),r(509)),meta=r(50),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,d,l,title,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,t.store,e.next=3,r(o.slug.replace(/_/gi,"/"),o.id).fetch();case 3:return c=e.sent,d=o.slug.split("_"),l=n.a.find((function(t){return t.eng===d[1]})).kor,title="".concat(l," - ").concat(c.title," 악보, 가사, 코드"),f="".concat(l,", ").concat(c.title,", ").concat(meta.a.keywords),console.log(l),e.abrupt("return",{music:c,title:title,keywords:f});case 10:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},created:function(){this.$store.commit("set_loading",!1)}},d=(r(564),r(15)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"page-music-detail"},[r("config-head",{attrs:{title:t.title,keywords:t.keywords}}),t._v(" "),r("score-head",{attrs:{music:t.music}}),t._v(" "),r("div",{staticClass:"score-contents"},t._l(t.music.score,(function(e,o){return r("div",{key:o},["tab"===e.type?r("score-tab",{attrs:{score:e,measure:t.music.measure}}):t._e(),t._v(" "),"image"===e.type?r("score-image",{attrs:{src:e.src}}):t._e(),t._v(" "),"chord"===e.type?r("score-chord",{attrs:{measure:t.music.measure,score:e}}):t._e()],1)})),0)],1)}),[],!1,null,"12293de1",null);e.default=component.exports;installComponents(component,{ConfigHead:r(221).default,ScoreHead:r(555).default,ScoreTab:r(556).default,ScoreImage:r(557).default,ScoreChord:r(558).default})}}]);