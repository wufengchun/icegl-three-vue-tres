import{$ as m,ak as P,k as t,a5 as p,a4 as E,o as v,c as M,a as f,K as _,a$ as $,W as s,E as b,aH as R,v as L,D as N,a8 as G,ab as H}from"./vendor.arGmYKdh1710982118573.js";import{R as V,E as z}from"./EffectComposer.7oQL_Av71710982118573.js";import{U as D}from"./UnrealBloomPass.hE5W28AH1710982118573.js";const U=s("TresBoxGeometry",{args:[1,1,1]},null,-1),A=s("TresMeshNormalMaterial",null,null,-1),F=[U,A],I=s("TresBoxGeometry",{args:[1,1,1]},null,-1),K=s("TresMeshNormalMaterial",null,null,-1),S=[I,K],W=m({__name:"ecLayers",setup(y){const{camera:e,renderer:a,scene:o,sizes:l}=P(),n=t(),c=t(),i=t();let r=null;p(()=>{n.value&&n.value.value.layers.set(0),c.value&&c.value.layers.set(1),i.value&&i.value.layers.set(2),l.width.value&&x(o.value,e.value,a.value,l.width.value,l.height.value)});const u={threshold:0,strength:.972,radius:.21},x=(d,h,g,w,k)=>{const T=new V(d,h),C=new D(new R(w,k),u.strength,u.radius,u.threshold);r=new z(g),r.addPass(T),r.addPass(C)},{onLoop:B}=E();return B(()=>{r&&e.value&&(a.value.clear(),e.value.layers.set(1),r.render(),a.value.clearDepth(),e.value.layers.set(0),a.value.render(o.value,e.value))}),(d,h)=>(v(),M(b,null,[f(_($),{ref_key:"normalBox",ref:n,args:[1,1,1],color:"orange",position:[3,2,1]},null,512),s("TresMesh",{ref_key:"shineBox",ref:c,position:[0,2,-4]},F,512),s("TresMesh",{ref_key:"filmBox",ref:i,position:[1,2,3]},S,512)],64))}}),j=s("TresPerspectiveCamera",{position:[10,10,10]},null,-1),q=s("TresAmbientLight",{intensity:1},null,-1),J=s("TresGridHelper",{args:[10,10]},null,-1),Y=m({__name:"effectComposerLayers",setup(y){const e=t();return p(()=>{if(e.value){let a=e.value.context.renderer.value;a.autoClear=!1}}),(a,o)=>(v(),L(_(G),{disableRender:"","window-size":"",ref_key:"tcRef",ref:e},{default:N(()=>[j,q,f(_(H)),J,f(W)]),_:1},512))}});export{Y as default};