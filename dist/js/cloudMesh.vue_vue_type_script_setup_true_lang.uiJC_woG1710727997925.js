import{$ as d,aA as m,bj as _,bV as s,bJ as g,b0 as i,aw as l,a4 as v,o as w,c as b,K as f}from"./vendor.Whz5JOL71710727997925.js";import{S as n}from"./SPE.gx951f7j1710727997925.js";const h=["object","position"],k=d({__name:"cloudMesh",props:{cPosition:{default:[0,200,0]}},async setup(y){let e,r;const{map:t}=([e,r]=m(()=>_({map:"./plugins/digitalCity/image/cloud.png"})),e=await e,r(),e);t.magFilter=s,t.minFilter=s;const a=new n.Group({texture:{value:t},blending:g,depthTest:!1,depthWrite:!1}),p=new n.Emitter({type:n.distributions.BOX,particleCount:26,maxAge:{value:10},position:{value:new i(0,0,0),spread:new i(2e3,100,2e3)},velocity:{value:new i(0,0,30)},wiggle:{spread:10},size:{value:520,spread:[100,220],randomise:!0},drag:{value:220},opacity:{value:[0,1,0],randomise:!0},color:{value:new l(1,1,1),spread:new l(.1,.1,.1)},angle:{value:[0,Math.PI*1/8]}});a.addEmitter(p);const c=a.mesh,{onLoop:u}=v();return u(({dt:o})=>{a.tick(o)}),(o,C)=>(w(),b("primitive",{object:f(c),position:o.cPosition,renderOrder:3e3},null,8,h))}});export{k as _};