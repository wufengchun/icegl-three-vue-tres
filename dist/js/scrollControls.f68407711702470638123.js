import{Z as v,k as n,a4 as m,a3 as h,o as g,c as C,a,C as p,a6 as x,J as s,a7 as y,D as R,a1 as S,a2 as k,au as w,av as V,V as e,aw as I,ax as B,at as N,ay as T,_ as b}from"./vendor.7fc73b731702470638123.js";const c=l=>(w("data-v-3a9657c1"),l=l(),V(),l),z=c(()=>e("TresPerspectiveCamera",{position:[0,2,5]},null,-1)),E=c(()=>e("TresGridHelper",{args:[10,10]},null,-1)),F=c(()=>e("main",null,[e("section",null,[e("h1",null,"First section")]),e("section",null,[e("h2",null,"Second section")])],-1)),G=v({__name:"scrollControls",setup(l){const u=n(),i=n(),t=n(),o=n(0);m(()=>{console.log("jaime ~ progress:",o.value)});const _={clearColor:"#333",alpha:!0,outputColorSpace:S,toneMapping:k},{onLoop:d}=h();return d(()=>{t.value&&(t.value.value.rotation.x=o.value*10,t.value.value.rotation.y=o.value*2)}),(M,r)=>(g(),C(R,null,[a(s(y),x(_,{"window-size":"",class:"canvas-class"}),{default:p(()=>[z,a(s(I),{radius:1}),E,a(s(B),{ref_key:"scRef",ref:u,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=f=>o.value=f),distance:10,"smooth-scroll":.1,"html-scroll":""},{default:p(()=>[a(s(N),{ref_key:"sphereRef",ref:i,scale:.1,position:[1,2,0]},null,512),a(s(T),{ref_key:"boxRef",ref:t,scale:.5,color:16711935,position:[-1,1,0]},null,512)]),_:1},8,["modelValue"])]),_:1},16),F],64))}});const j=b(G,[["__scopeId","data-v-3a9657c1"]]);export{j as default};
