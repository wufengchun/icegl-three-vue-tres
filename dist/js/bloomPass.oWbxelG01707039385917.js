import{$ as _,as as E,a5 as L,a4 as M,o as w,v as P,K as c,aL as N,aq as R,aY as T,ap as V,an as k,a_ as y,D as z,a8 as F,a as f,ab as G,W as d}from"./vendor.hEjh--PP1707039385917.js";import{R as p,E as H}from"./EffectComposer.j8RwlsO31707039385917.js";import{U as S}from"./UnrealBloomPass.yEGn0T9q1707039385917.js";import{F as U}from"./FilmPass.Wqyj9lYw1707039385917.js";const $=_({__name:"bloomPass",setup(v){const{camera:n,renderer:i,scene:g,sizes:s}=E(),l={threshold:0,strength:.972,radius:.21};let e=null;const b=(a,t,m,h,u)=>{const o=new p(a,t),r=new S(new T(h,u),l.strength,l.radius,l.threshold);e=new H(m),e.addPass(o),e.addPass(r)},C=(a,t,m,h,u)=>{let o=new V(new k(1,1,1),new y);o.position.set(0,2,-4),a.add(o);var r=new p(a,t);r.clear=!1,e.addPass(r);const B=new U;e.addPass(B)};L(()=>{s.width.value&&(b(g.value,n.value,i.value,s.width.value,s.height.value),C(new R,n.value,i.value,s.width.value,s.height.value))});const{onLoop:x}=M();return x(()=>{e&&e.render()}),(a,t)=>(w(),P(c(N),{args:[1,1,1],color:"orange",position:[3,2,1]}))}}),q=d("TresPerspectiveCamera",{position:[10,10,10]},null,-1),A=d("TresAmbientLight",{intensity:1},null,-1),D=d("TresGridHelper",{args:[10,10]},null,-1),j=_({__name:"bloomPass",setup(v){return(n,i)=>(w(),P(c(F),{disableRender:"","window-size":""},{default:z(()=>[q,A,f(c(G)),D,f($)]),_:1}))}});export{j as default};