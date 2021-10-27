__NUXT_JSONP__("/blog/vue/12", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{article:{slug:"12",title:"[Nuxt.js] google map 적용하기",author:"신용준",date:"2021-09-17",toc:[],body:{type:"root",children:[{type:b,tag:y,props:{},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"dependencies 설치 "},{type:b,tag:w,props:{},children:[{type:a,value:"npm install nuxt-gmaps"}]}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:g},{type:b,tag:z,props:{},children:[{type:a,value:"modules 추가"}]},{type:a,value:g}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:r,props:{className:[A]},children:[{type:b,tag:c,props:{className:[B]},children:[{type:a,value:"nuxt.config.js"}]},{type:b,tag:C,props:{className:[D,"language-js"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,E,F]},children:[{type:a,value:"export"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,E,F]},children:[{type:a,value:"default"}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,H,s]},children:[{type:a,value:I}]},{type:a,value:"\n  modules"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:J}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"'nuxt-gmaps'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"\n      key"},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:J}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"'Google API Key값'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,H,s]},children:[{type:a,value:I}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:y,props:{start:3},children:[{type:a,value:g},{type:b,tag:v,props:{},children:[{type:a,value:"적용"}]},{type:a,value:g}]},{type:a,value:g},{type:b,tag:r,props:{className:[A]},children:[{type:b,tag:c,props:{className:[B]},children:[{type:a,value:"components\u002Fexample.vue"}]},{type:b,tag:C,props:{className:[D,"language-html"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"map_area"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:Q}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"gmap"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"ref"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"gMap"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"language"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"ko"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":center"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":options"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"{fullscreenControl: false, styles: {height: 600}}"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":height"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"600"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":zoom"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:"16"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:S}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:":position"}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:b,tag:c,props:{className:[d,e,k]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:f}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]}]},{type:a,value:g}]}]}]}]},dir:"\u002Fvue",path:"\u002Fvue\u002F12",extension:".md",createdAt:T,updatedAt:T}}],fetch:{"data-v-cb593ac8:0":{directory_list:["java","react","vue"]}},mutations:[]}}("text","element","span","token","punctuation","\"","\n","tag","attr-name","attr-value","attr-equals","=","\u003E","\n      "," ","\n  ","\n    ","div","operator","\u003C","\u003C\u002F","li","code",",","ol","p","nuxt-content-highlight","filename","pre","line-numbers","keyword","module","{","spread","...",":","[","string","}","]","template","class","GMap","{lat: 37.502478393636146, lng: 127.0551555637546}","GMapMarker","2021-10-27T01:47:17.804Z")));