import{Z as p,o as l,v as c,C as d,a6 as _,J as e,a7 as u,a0 as h,a2 as m,a,aB as f,aC as g,aD as C,V as s}from"./vendor.45c6b8731706673670030.js";const w=s("TresPerspectiveCamera",{position:[0,3,10]},null,-1),B=s("TresGridHelper",{args:[100,100]},null,-1),T=s("TresAmbientLight",{intensity:1},null,-1),M=p({__name:"firstPersonControls",setup(b){const n={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:h,toneMapping:m},r=o=>console.log(o);return(o,t)=>(l(),c(e(u),_(n,{"window-size":""}),{default:d(()=>[a(e(f)),w,a(e(g),{"make-default":"",onIsLock:t[0]||(t[0]=i=>r(i))}),a(e(C),{"head-bobbing":""}),B,T]),_:1},16))}});export{M as default};