__NUXT_JSONP__("/article/dev/react-13", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT){return {data:[{article:{slug:"13",title:"[React] State Hook 사용하기",author:"신용준",date:"2021-04-20",toc:[{id:ak,depth:H,text:al},{id:am,depth:H,text:an},{id:ao,depth:H,text:ap},{id:aq,depth:H,text:ar},{id:as,depth:H,text:at},{id:au,depth:H,text:av}],body:{type:"root",children:[{type:b,tag:I,props:{id:ak},children:[{type:b,tag:F,props:{href:"#hook%EA%B3%BC-%EA%B0%99%EC%9D%80-%EA%B8%B0%EB%8A%A5%EC%9D%84-%ED%95%98%EB%8A%94-%ED%81%B4%EB%9E%98%EC%8A%A4-%EC%98%88%EC%8B%9C",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:al}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"React에서 클래스를 사용해봤다면, 아래의 코드는 익숙할 겁니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aw}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ax}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ay}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:_}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n\n  "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"render"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j,$]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,f]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aE,s,u]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:"\n          "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ah}]},{type:a,value:" me\n        "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:aC},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"위 코드에서 state는 { count: 0 } 이며 사용자가 this.setState() 를 호출하는 버튼을 클릭했을 때 state.count를 증가시킵니다. 위의 클래스 예시를 해당 페이지에서 계속 사용할 예정입니다."}]},{type:a,value:h},{type:b,tag:I,props:{id:am},children:[{type:b,tag:F,props:{href:"#hook%EA%B3%BC-%ED%95%A8%EC%88%98-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:an}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"React의 함수 컴포넌트는 이렇게 생겼습니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aH}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"function-variable",s]},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:N}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,f]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:aI}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,j,$]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"또는 이렇게 생겼습니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:N}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:aI}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,j,$]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"함수 컴포넌트를 \"state가 없는 컴포넌트\"로 알고 있었을 겁니다. 하지만 Hook은 React state를 함수 안에서 사용할 수 있게 해줍니다."}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"Hook은 클래스 안에서 동작하지 않습니다. 하지만 클래스를 작성하지 않고 사용할 수 있습니다."}]},{type:a,value:h},{type:b,tag:I,props:{id:ao},children:[{type:b,tag:F,props:{href:"#hook%EC%9D%B4%EB%9E%80",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ap}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"React의 useState Hook을 사용해봅시다!"}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,j,Z]},children:[{type:a,value:aK}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aL]},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,Z]},children:[{type:a,value:aN}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aO]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:N}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002F ..."}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"Hook이란? Hook은 특별한 함수입니다. 예를 들어 useState는 state를 함수 컴포넌트 안에서 사용할 수 있게 해줍니다. 다른 Hook들은 나중에 살펴봅시다!"}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"언제 Hook을 사용할까? 함수 컴포넌트를 사용하던 중 state를 추가하고 싶을 때 클래스 컴포넌트로 바꾸곤 했을 겁니다. 하지만 이제 함수 컴포넌트 안에서 Hook을 이용하여 state를 사용할 수 있습니다."}]},{type:a,value:h},{type:b,tag:I,props:{id:aq},children:[{type:b,tag:F,props:{href:"#state-%EB%B3%80%EC%88%98-%EC%84%A0%EC%96%B8%ED%95%98%EA%B8%B0",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ar}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"클래스를 사용할 때, constructor 안에서 this.state를 { count: 0 }로 설정함으로써 count를 0으로 초기화했습니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aw}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ax}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ay}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:_}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"함수 컴포넌트는 this를 가질 수 없기 때문에 this.state를 할당하거나 읽을 수 없습니다. 대신, useState Hook을 직접 컴포넌트에 호출합니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,j,Z]},children:[{type:a,value:aK}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aL]},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j,Z]},children:[{type:a,value:aN}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aO]},children:[{type:a,value:aP}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:aQ},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:N}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,Y]},children:[{type:a,value:"\u002F\u002F 새로운 state 변수를 선언하고, 이것을 count라 부르겠습니다."}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aH}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aj}]},{type:a,value:" setCount"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"useState"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"useState를 호출하는 것은 무엇을 하는 걸까요? \"state 변수\"를 선언할 수 있습니다. 위에 선언한 변수는 count라고 부르지만 banana처럼 아무 이름으로 지어도 됩니다. useState는 클래스 컴포넌트의 this.state가 제공하는 기능과 똑같습니다. 일반적으로 일반 변수는 함수가 끝날 때 사라지지만, state 변수는 React에 의해 사라지지 않습니다."}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"useState의 인자로 무엇을 넘겨주어야 할까요? useState() Hook의 인자로 넘겨주는 값은 state의 초기 값입니다. 함수 컴포넌트의 state는 클래스와 달리 객체일 필요는 없고, 숫자 타입과 문자 타입을 가질 수 있습니다. 위의 예시는 사용자가 버튼을 얼마나 많이 클릭했는지 알기를 원하므로 0을 해당 state의 초기 값으로 선언했습니다. (2개의 다른 변수를 저장하기를 원한다면 useState()를 두 번 호출해야 합니다.)"}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"useState는 무엇을 반환할까요? state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다. 이것이 바로 const [count, setCount] = useState() 라고 쓰는 이유입니다. 클래스 컴포넌트의 this.state.count 와 this.setState 와 유사합니다."}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"이제 useState를 이용하여 많은 것을 만들 수 있습니다."}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"count라고 부르는 state 변수를 선언하고 0으로 초기화합니다. React는 해당 변수를 리렌더링할 때 기억하고, 가장 최근에 갱신된 값을 제공합니다. count 변수의 값을 갱신하려고 setCount를 호출하면 됩니다."}]},{type:a,value:h},{type:b,tag:I,props:{id:as},children:[{type:b,tag:F,props:{href:"#state-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:at}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"클래스 컴포넌트는 count를 보여주기 위해 this.state.count를 사용합니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"반면 함수 컴포넌트는 count를 직접 사용할 수 있습니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:I,props:{id:au},children:[{type:b,tag:F,props:{href:"#state-%EA%B0%B1%EC%8B%A0%ED%95%98%EA%B8%B0",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:av}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"클래스 컴포넌트는 count를 갱신하기 위해 this.setState()를 호출합니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,f]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,aE,s,u]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:R}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ah}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"반면 함수 컴포넌트는 setCount와 count 변수를 가지고 있으므로 this를 호출하지 않아도 됩니다."}]},{type:a,value:h},{type:b,tag:t,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W,f]},children:[{type:a,value:X}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"setCount"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"count "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,Q]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:ah}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:"br",props:{},children:[]},{type:a,value:h},{type:b,tag:i,props:{},children:[{type:a,value:"출처 : "},{type:b,tag:F,props:{href:aS,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:aS}]}]}]},dir:"\u002Fdev\u002Freact",path:"\u002Fdev\u002Freact\u002F13",extension:".md",createdAt:aT,updatedAt:aT}}],fetch:{"data-v-4b51cfe8:0":{categories:[{name:"dev",depth2:[{name:"css"},{name:"java"},{name:"react"},{name:"vue"}]},{name:"etc",depth2:[{name:"dystopia"}]}]}},mutations:[]}}("text","element","span","token","punctuation","operator"," ","\n","p","keyword","{","}","(",")","\u003C","\u003E",".","\n  ","function","div","property-access","maybe-class-name","nuxt-content-highlight","pre","language-js","line-numbers","code",";","\u002F","\n    ","this","a","=",2,"h2","true",-1,"icon","icon-link","Example","props","state","number","count","class-name","React","parameter",":","arrow","=\u003E","comment","module","0","control-flow","return","You"," clicked "," times","button onClick","+","1","Click","button",",","hook과-같은-기능을-하는-클래스-예시","Hook과 같은 기능을 하는 클래스 예시","hook과-함수-컴포넌트","Hook과 함수 컴포넌트","hook이란","Hook이란?","state-변수-선언하기","state 변수 선언하기","state-가져오기","state 가져오기","state-갱신하기","state 갱신하기","class","extends","Component","constructor","super","\n      count","\n      ","\n        ","method","setState"," count","const","\u002F\u002F 여기서 Hook을 사용할 수 있습니다","div ","import","imports"," useState ","from","string","'react'","\n\n"," me\n","https:\u002F\u002Freactjs.org\u002Fdocs\u002Fhooks-state.html","2021-09-12T06:29:20.142Z")));