import{_ as u}from"./pagesShow.vue_vue_type_script_setup_true_lang.PL43AZ611710727997925.js";import{_ as h}from"./threeWater2.vue_vue_type_script_setup_true_lang.snBD-8il1710727997925.js";import{$ as p,aA as g,aB as w,a0 as v,an as y,o,c as b,W as x,K as m,v as n,D as l,a as _,a7 as B,ag as f,ac as R,a5 as C,a4 as $}from"./vendor.Whz5JOL71710727997925.js";import"./vanilla-307d3a93.esm.oDMQ5mjs1710727997925.js";import"./_commonjsHelpers.5-cIlDoe1710727997925.js";import"./LineSegments2.VW83iRZ61710727997925.js";import"./Water2.GJkq7RKA1710727997925.js";import"./Reflector.-4c0x0YS1710727997925.js";const k={position:[0,0,-2]},G=["object"],S=p({__name:"index",async setup(d){let e,t;const{scene:r,nodes:a}=([e,t]=g(()=>w("https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf")),e=await e,t(),e);r.renderOrder=9999,a.mesh_0.material.transparent=!0,a.mesh_0.material.depthWrite=!0,a.mesh_0.material.depthTest=!0,a.mesh_0.material.opacity=.7;const s=v({color:"#f857cc",scale:3.1,modelVisible:!0}),i=new y({title:"河流参数",expanded:!0});return i.addBinding(s,"modelVisible",{label:"模型显示"}).on("change",c=>{a.mesh_0.visible=c.value}),i.addBinding(s,"scale",{label:"分辨率",min:.1,max:10,step:.1}),i.addBinding(s,"color",{label:"河水颜色"}),(c,V)=>(o(),b("TresGroup",k,[x("primitive",{object:m(r)},null,8,G),(o(),n(f,null,{default:l(()=>[_(h,B({"position-y":1e-4,waterGeometry:m(a).mesh_0.geometry},s),null,16,["waterGeometry"])]),_:1}))]))}}),D=p({__name:"cityRiver",setup(d){const e=R(null);C(()=>{e.value&&e.value.$refs.perspectiveCameraRef.position.set(4,2.15,3.6)});const{onLoop:t}=$();return t(()=>{e.value&&console.log(e.value.$refs.perspectiveCameraRef)}),(r,a)=>(o(),n(u,{showAxesHelper:!1,showGridHelper:!1,showBuildings:!1,ref_key:"pagesShowRef",ref:e,autoRotate:!1},{ability:l(()=>[(o(),n(f,null,{default:l(()=>[_(S)]),_:1}))]),_:1},512))}});export{D as default};