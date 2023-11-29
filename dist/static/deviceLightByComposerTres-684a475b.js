import{Y as y,az as E,aA as F,aM as G,bm as C,a3 as V,a2 as I,aL as O,o as g,c as Q,U as l,I as d,C as U,Z as _,$ as X,a0 as Y,a1 as Z,ae as j,s as M,B as w,a5 as q,a6 as H,a as x,a7 as S,a8 as k,a9 as J,aC as K}from"./vendor-f6d30434.js";import{r as W,u as ee}from"./device-b00e12ea.js";import"./BufferGeometryUtils-f7af870a.js";const te=["object"],ae=["object"],se=y({__name:"ByComposerTres",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(v){let r,n;const t=v,{nodes:a}=([r,n]=E(()=>F("./plugins/industry4/model/modelDraco.glb",{draco:!0})),r=await r,n(),r),i=W(a.Sketchfab_model),{camera:u,renderer:P,scene:h,sizes:B}=G();let p=null,m=null,s=null;const L=new C({color:"black"});V(()=>{if(u.value){const{finalComposer:e,effectComposer:o,bloomPass:D}=ee(h.value,u.value,P.value,B.width.value,B.height.value);p=e,m=o,s=D,s.threshold=t.threshold,s.strength=t.strength,s.radius=t.radius}t.threshold&&(s.threshold=t.threshold),t.strength&&(s.strength=t.strength),t.radius&&(s.radius=t.radius)});const c={},T=e=>{e.isMesh&&(c[e.uuid]=e.material,e.material=L)},N=e=>{c[e.uuid]&&(e.material=c[e.uuid],delete c[e.uuid])},{onLoop:z,onAfterLoop:A}=I();let b=.03,f=a.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),R=f.material.clone(),$=new C({color:new O("red"),transparent:!0,opacity:1});return z(({elapsed:e})=>{a.hull_turbine&&(a.hull_turbine.rotation.x+=b,a.blades_turbine_003.rotation.x+=b),Math.floor(e)%2?f.material=R:f.material=$}),A(({elapsed:e})=>{m&&(h.value.traverse(o=>{T(o)}),m.render(e)),p&&(h.value.traverse(o=>{N(o)}),p.render(e))}),(e,o)=>(g(),Q(U,null,[l("primitive",{object:d(a).Sketchfab_model},null,8,te),l("primitive",{object:d(i)},null,8,ae)],64))}}),re=l("TresPerspectiveCamera",{position:[5,5,5],fov:45,near:1,far:1e3},null,-1),oe=l("TresAmbientLight",{color:"#ffffff",intensity:"40"},null,-1),le=l("TresDirectionalLight",{position:[0,2,-4],intensity:1},null,-1),de=y({__name:"deviceLightByComposerTres",setup(v){const r=_({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:X,outputColorSpace:Y,toneMapping:Z}),n=_({autoRotate:!0}),t=_({threshold:0,strength:.972,radius:.21}),a=new j({title:"参数"});return a.addBinding(t,"threshold",{label:"阈值",min:0,max:1,step:.1}),a.addBinding(t,"strength",{label:"强度",min:0,max:3,step:.2}),a.addBinding(t,"radius",{label:"半径",min:0,max:1,step:.1}),a.addBlade({view:"text",label:"post-processing",parse:i=>String(i),value:"未完成：等待Tresjs库更新"}),(i,u)=>(g(),M(d(H),q(r,{"window-size":""}),{default:w(()=>[re,x(d(J),S(k(n)),null,16),oe,le,(g(),M(K,null,{default:w(()=>[x(se,S(k(t)),null,16)]),_:1}))]),_:1},16))}});export{de as default};
