var B=Object.defineProperty;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var _=(s,a,e)=>a in s?B(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,c=(s,a)=>{for(var e in a||(a={}))b.call(a,e)&&_(s,e,a[e]);if(m)for(var e of m(a))R.call(a,e)&&_(s,e,a[e]);return s};import{Z as v,$ as p,aB as z,aQ as g,k as h,a4 as x,w as k,o as f,v as C,J as S,bB as Y,bC as w,af as Z,c as $,a as d,C as y,D as X,a8 as P,a9 as A,aA as E}from"./vendor.bb7c097e1703747450293.js";import{_ as F}from"./pagesShow.vue_vue_type_script_setup_true_lang.8b10d85c1703747450293.js";import{_ as M}from"./loading.vue_vue_type_script_setup_true_lang.da879b401703747450293.js";import"./vanilla-307d3a93.esm.44d748071703747450293.js";import"./_commonjsHelpers.725317a41703747450293.js";const D=v({__name:"precipitation",props:{speed:{default:12},randomness:{default:0},count:{default:6e3},size:{default:7},areaX:{default:1500},areaY:{default:1e3},areaZ:{default:1500},type:{default:"snow"},color:{default:"#fff"}},async setup(s){let a,e;const t=s,n={snow:"./plugins/digitalCity/image/snow.png",rain:"./plugins/digitalCity/image/rain.png",cilcle:"./plugins/digitalCity/image/cilcle.png"},i=p({});n[t.type]&&(i.value=([a,e]=z(()=>g({map:n[t.type]})),a=await a,e(),a));const o=h();return x(async()=>{}),k(()=>t.type,async(r,l)=>{var u;r!=l&&((u=i.value)!=null&&u.map&&i.value.map.dispose(),i.value=await g({map:n[r]?n[r]:n.cilcle}))}),(r,l)=>(f(),C(S(Y),{ref_key:"precipitationRef",ref:o,position:[0,t.areaY/2,0],speed:t.speed,color:t.color,alphaTest:.5,area:[t.areaX,t.areaY,t.areaZ],count:t.count,depthWrite:!0,randomness:t.randomness,size:t.size,opacity:1,map:i.value.map,alphaMap:i.value.map},null,8,["position","speed","color","area","count","randomness","size","map","alphaMap"]))}}),W=v({__name:"weather",setup(s){const a=h();x(()=>{a.value&&a.value.$refs.perspectiveCameraRef.position.set(750,500,800)});const e=p({speed:12,size:10,count:6e3,color:"#fff",type:"snow"}),t=p({areaX:1500,areaY:1e3,areaZ:1500}),n=p(c(c({},w(e)),w(t))),o=new Z({title:"天气",expanded:!0}).addFolder({title:"下落物"});return o.addBinding(e,"speed",{label:"速度",min:0,max:30,step:1}),o.addBinding(e,"color",{label:"颜色"}),o.addBinding(e,"size",{label:"大小",min:0,max:26,step:1}),o.addBinding(e,"count",{label:"数量",min:1e3,max:1e4,step:100}),o.addBinding(e,"type",{view:"list",label:"类型",options:[{text:"雪",value:"snow"},{text:"雨",value:"rain"},{text:"点",value:"point"}]}),(r,l)=>(f(),$(X,null,[d(M),d(F,{ref_key:"pagesShowRef",ref:a,autoRotate:!1},{ability:y(()=>[(f(),C(E,null,{default:y(()=>[d(D,P(A(n)),null,16)]),_:1}))]),_:1},512)],64))}});export{W as default};