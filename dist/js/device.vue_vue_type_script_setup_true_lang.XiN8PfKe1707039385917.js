import{$ as P,aj as L,ak as S,as as N,b2 as _,a5 as A,a4 as E,am as G,o as z,c as D,K as F}from"./vendor.hEjh--PP1707039385917.js";import{r as H,u as K}from"./device.-65Xg1Pq1707039385917.js";const O=["object"],$=P({__name:"device",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(p){let s,u;const t=p,{nodes:a}=([s,u]=L(()=>S("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),s=await s,u(),s),g=H(a.Sketchfab_model),{camera:h,renderer:v,scene:l,sizes:m}=N();let n=null,c=null,r=null;const M=new _({color:"black"});A(()=>{if(h.value){l.value.add(g);const{finalComposer:e,effectComposer:o,bloomPass:x}=K(l.value,h.value,v.value,m.width.value,m.height.value);n=e,c=o,r=x,r.threshold=t.threshold,r.strength=t.strength,r.radius=t.radius}t.threshold&&(r.threshold=t.threshold),t.strength&&(r.strength=t.strength),t.radius&&(r.radius=t.radius)});const i={},k=e=>{(e.isMesh||e.type==="GridHelper"||e.name==="reflectorShaderMesh")&&(i[e.uuid]=e.material,e.material=M)},b=e=>{i[e.uuid]&&(e.material=i[e.uuid],delete i[e.uuid])},{onLoop:B,onAfterLoop:w}=E();let f=.03,d=a.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),C=d.material.clone(),y=new _({color:new G("red"),transparent:!0,opacity:1});return B(({elapsed:e})=>{a.hull_turbine&&(a.hull_turbine.rotation.x+=f,a.blades_turbine_003.rotation.x+=f),Math.floor(e)%2?d.material=C:d.material=y}),w(({elapsed:e})=>{c&&(l.value.traverse(o=>{k(o)}),c.render(e)),n&&(l.value.traverse(o=>{b(o)}),n.render(e))}),(e,o)=>(z(),D("primitive",{object:F(a).Sketchfab_model},null,8,O))}});export{$ as _};