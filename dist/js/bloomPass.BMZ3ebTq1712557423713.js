import{a0 as p,aj as B,a5 as T,o as v,v as w,K as P,a_ as G,aE as M,a8 as N,aG as R,av as V,aK as k,b9 as y,r as z,D as F,a as _,ab as K,X as d}from"./vendor.dUBjHEtG1712557423713.js";import{R as f,E as L}from"./EffectComposer.5Aa6ATvp1712557423713.js";import{U as S}from"./UnrealBloomPass.Vqu0VzRV1712557423713.js";import{F as U}from"./FilmPass.Qv7FB9BG1712557423713.js";const j=p({__name:"bloomPass",setup(g){const{camera:n,renderer:i,scene:l,sizes:s}=B(),c={threshold:0,strength:.972,radius:.21};let e=null;const C=(a,o,m,h,u)=>{const t=new f(a,o),r=new S(new R(h,u),c.strength,c.radius,c.threshold);e=new L(m),e.addPass(t),e.addPass(r)},b=(a,o,m,h,u)=>{let t=new V(new k(1,1,1),new y);t.position.set(0,2,-4),a.add(t);var r=new f(a,o);r.clear=!1,e.addPass(r);const x=new U;e.addPass(x)};T(()=>{s.width.value&&(C(l.value,n.value,i.value,s.width.value,s.height.value),b(new M,n.value,i.value,s.width.value,s.height.value))});const{onLoop:E}=N();return E(()=>{e&&e.render()}),(a,o)=>(v(),w(P(G),{args:[1,1,1],color:"orange",position:[3,2,1]}))}}),A=d("TresPerspectiveCamera",{position:[10,10,10]},null,-1),D=d("TresAmbientLight",{intensity:1},null,-1),H=d("TresGridHelper",{args:[10,10]},null,-1),I=p({__name:"bloomPass",setup(g){return(n,i)=>{const l=z("TresCanvas");return v(),w(l,{disableRender:"","window-size":""},{default:F(()=>[A,D,_(P(K)),H,_(j)]),_:1})}}});export{I as default};
