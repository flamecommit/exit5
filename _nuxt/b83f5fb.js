(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{532:function(t,e,o){var content=o(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("389ecce3",content,!0,{sourceMap:!1})},534:function(t,e,o){"use strict";o(532)},535:function(t,e,o){var r=o(40)(!1);r.push([t.i,'.article-chord[data-v-909ebf74]{padding:20px 20px 20px 40px;background:#fff}.article-chord .chord-name[data-v-909ebf74]{text-align:center;font-weight:700;font-size:30px;line-height:1;margin-bottom:30px}.article-chord .chord-score[data-v-909ebf74]{position:relative;display:flex;border-left:1px solid #000}.article-chord .chord-score.start-0[data-v-909ebf74]:before{display:block;content:"";position:absolute;top:0;left:-5px;bottom:0;width:5px;border-top:1px solid #000;border-left:3px solid #000;border-bottom:1px solid #000}.article-chord .chord-score .plat[data-v-909ebf74]{position:relative;display:grid;grid-row-gap:20px;row-gap:20px;border-right:1px solid #000}.article-chord .chord-score .plat .plat-number[data-v-909ebf74]{position:absolute;top:-22px;left:-5px}.article-chord .chord-score .plat .line[data-v-909ebf74]{position:relative;width:120px;border-bottom:1px solid #000}@media screen and (max-width:768px){.article-chord .chord-score .plat .line[data-v-909ebf74]{width:80px}}.article-chord .chord-score .plat .line .circle[data-v-909ebf74]{position:absolute;top:-7px;left:calc(50% - 8px);width:16px;height:16px;border-radius:50%;background:#000}.article-chord .chord-score .plat .line .mute[data-v-909ebf74]{position:absolute;top:-7px;left:-24px;width:16px;height:16px}.article-chord .chord-score .plat .line .mute[data-v-909ebf74]:before{display:block;content:"";width:1px;height:100%;background:#000;position:absolute;top:0;left:7px;transform:rotate(-45deg)}.article-chord .chord-score .plat .line .mute[data-v-909ebf74]:after{display:block;content:"";width:1px;height:100%;background:#000;position:absolute;top:0;left:7px;transform:rotate(45deg)}.article-chord .chord-score .plat .line .open[data-v-909ebf74]{position:absolute;top:-7px;left:-24px;width:16px;height:16px;border-radius:50%;border:1px solid #000}.article-chord .chord-score .plat .line .barre[data-v-909ebf74]{position:absolute;top:-10px;left:calc(50% - 8px);width:16px;height:calc(21px*var(--barreHeight));border-radius:8px;background:#000}.article-chord.page .chord-name[data-v-909ebf74]{font-size:20px}.article-chord.page .chord-score .plat[data-v-909ebf74]{width:25%}.article-chord.page .chord-score .plat .line[data-v-909ebf74]{width:100%}',""]),t.exports=r},536:function(t,e,o){"use strict";o.r(e);var r={props:{chord:{type:Object,default:{}}}},c=(o(534),o(16)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-chord"},[o("h1",{staticClass:"chord-name"},[t._v(t._s(t.chord.name))]),t._v(" "),o("div",{staticClass:"chord-score",class:"start-"+t.chord.start},t._l(t.chord.position,(function(e,r){return o("div",{key:r,staticClass:"plat"},[o("div",{staticClass:"plat-number"},[t._v(t._s(t.chord.start+r))]),t._v(" "),t._l(e,(function(line,e){return o("div",{key:e,staticClass:"line"},["M"===line?o("div",{staticClass:"mute"}):t._e(),t._v(" "),"O"===line?o("div",{staticClass:"open"}):t._e(),t._v(" "),"string"==typeof line&&"B"===line.charAt(0)?o("div",{staticClass:"barre",style:"--barreHeight: "+line.charAt(1)}):t._e(),t._v(" "),1===line?o("div",{staticClass:"circle"}):t._e()])}))],2)})),0)])}),[],!1,null,"909ebf74",null);e.default=component.exports}}]);