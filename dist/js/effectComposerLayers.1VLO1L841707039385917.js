import{$ as m,as as P,k as t,a5 as p,a4 as E,o as v,c as L,a as f,K as _,aL as M,W as s,E as b,aY as R,v as $,D as N,a8 as G,ab as V}from"./vendor.hEjh--PP1707039385917.js";import{R as z,E as D}from"./EffectComposer.j8RwlsO31707039385917.js";import{U as H}from"./UnrealBloomPass.yEGn0T9q1707039385917.js";const U=s("TresBoxGeometry",{args:[1,1,1]},null,-1),A=s("TresMeshNormalMaterial",null,null,-1),F=[U,A],I=s("TresBoxGeometry",{args:[1,1,1]},null,-1),K=s("TresMeshNormalMaterial",null,null,-1),S=[I,K],W=m({__name:"ecLayers",setup(y){const{camera:e,renderer:a,scene:o,sizes:l}=P(),n=t(),c=t(),i=t();let r=null;p(()=>{n.value&&n.value.value.layers.set(0),c.value&&c.value.layers.set(1),i.value&&i.value.layers.set(2),l.width.value&&x(o.value,e.value,a.value,l.width.value,l.height.value)});const u={threshold:0,strength:.972,radius:.21},x=(d,h,g,w,T)=>{const k=new z(d,h),C=new H(new R(w,T),u.strength,u.radius,u.threshold);r=new D(g),r.addPass(k),r.addPass(C)},{onLoop:B}=E();return B(()=>{r&&e.value&&(a.value.clear(),e.value.layers.set(1),r.render(),a.value.clearDepth(),e.value.layers.set(0),a.value.render(o.value,e.value))}),(d,h)=>(v(),L(b,null,[f(_(M),{ref_key:"normalBox",ref:n,args:[1,1,1],color:"orange",position:[3,2,1]},null,512),s("TresMesh",{ref_key:"shineBox",ref:c,position:[0,2,-4]},F,512),s("TresMesh",{ref_key:"filmBox",ref:i,position:[1,2,3]},S,512)],64))}}),Y=s("TresPerspectiveCamera",{position:[10,10,10]},null,-1),j=s("TresAmbientLight",{intensity:1},null,-1),q=s("TresGridHelper",{args:[10,10]},null,-1),X=m({__name:"effectComposerLayers",setup(y){const e=t();return p(()=>{if(e.value){let a=e.value.context.renderer.value;a.autoClear=!1}}),(a,o)=>(v(),$(_(G),{disableRender:"","window-size":"",ref_key:"tcRef",ref:e},{default:N(()=>[Y,j,f(_(V)),q,f(W)]),_:1},512))}});export{X as default};