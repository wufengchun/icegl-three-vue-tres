import{_ as u}from"./pagesShow.vue_vue_type_script_setup_true_lang.8b10d85c1703747450293.js";import{_ as h}from"./threeWater2.vue_vue_type_script_setup_true_lang.8b384fb31703747450293.js";import{Z as p,aB as w,aC as g,$ as v,af as b,o,c as y,V as x,J as m,v as i,C as l,a as _,a6 as B,aA as f,ab as C,a4 as R,a3 as $}from"./vendor.bb7c097e1703747450293.js";import"./vanilla-307d3a93.esm.44d748071703747450293.js";import"./_commonjsHelpers.725317a41703747450293.js";import"./Reflector.2f1ed9531703747450293.js";const V={position:[0,0,-2]},k=["object"],G=p({__name:"index",async setup(d){let e,t;const{scene:r,nodes:a}=([e,t]=w(()=>g("https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf")),e=await e,t(),e);r.renderOrder=9999,a.mesh_0.material.transparent=!0,a.mesh_0.material.depthWrite=!0,a.mesh_0.material.depthTest=!0,a.mesh_0.material.opacity=.7;const s=v({color:"#f857cc",scale:3.1,modelVisible:!0}),n=new b({title:"河流参数",expanded:!0});return n.addBinding(s,"modelVisible",{label:"模型显示"}).on("change",c=>{a.mesh_0.visible=c.value}),n.addBinding(s,"scale",{label:"分辨率",min:.1,max:10,step:.1}),n.addBinding(s,"color",{label:"河水颜色"}),(c,S)=>(o(),y("TresGroup",V,[x("primitive",{object:m(r)},null,8,k),(o(),i(f,null,{default:l(()=>[_(h,B({"position-y":1e-4,waterGeometry:m(a).mesh_0.geometry},s),null,16,["waterGeometry"])]),_:1}))]))}}),T=p({__name:"cityRiver",setup(d){const e=C(null);R(()=>{e.value&&e.value.$refs.perspectiveCameraRef.position.set(4,2.15,3.6)});const{onLoop:t}=$();return t(()=>{e.value&&console.log(e.value.$refs.perspectiveCameraRef)}),(r,a)=>(o(),i(u,{showAxesHelper:!1,showGridHelper:!1,showBuildings:!1,ref_key:"pagesShowRef",ref:e,autoRotate:!1},{ability:l(()=>[(o(),i(f,null,{default:l(()=>[_(G)]),_:1}))]),_:1},512))}});export{T as default};