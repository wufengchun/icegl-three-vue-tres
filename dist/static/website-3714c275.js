import{Y as p,j as d,az as u,aA as m,o as r,s as n,B as t,U as s,a as c,I as e,af as h,aB as f,a5 as w,a6 as g,$ as b,a0 as x,a1 as C,a9 as B,aC as y}from"./vendor-71388792.js";const M=["object"],S=s("iframe",{class:"rounded-lg w-[1024px] h-[670px]",src:"https://www.icegl.cn",frameborder:"0"},null,-1),T=p({__name:"laptop",async setup(l){let a,o;const i=d(),{nodes:_}=([a,o]=u(()=>m("./plugins/basic/htmls/model/model.gltf",{draco:!0})),a=await a,o(),a);return(j,A)=>(r(),n(e(f),null,{default:t(()=>[s("primitive",{ref_key:"primitiveref",ref:i,object:e(_).Macbook},[c(e(h),{transform:"","wrapper-class":"webpage","distance-factor":11,position:[0,10.5,-13.6],occlude:"","rotation-x":-.256},{default:t(()=>[S]),_:1})],8,M)]),_:1}))}}),k=s("TresPerspectiveCamera",{position:[-5,4,3]},null,-1),v=s("TresAmbientLight",{intensity:1},null,-1),$=s("TresDirectionalLight",{intensity:2,position:[2,3,0],"cast-shadow":!0,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10},null,-1),z=p({__name:"website",setup(l){const a={clearColor:"#241a1a",shadows:!0,alpha:!1,shadowMapType:b,outputColorSpace:x,toneMapping:C};return(o,i)=>(r(),n(e(g),w(a,{"window-size":""}),{default:t(()=>[k,c(e(B)),(r(),n(y,null,{default:t(()=>[c(T)]),_:1})),v,$]),_:1},16))}});export{z as default};
