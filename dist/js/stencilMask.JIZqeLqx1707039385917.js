import{$ as k,aj as M,ak as T,b6 as j,o as r,c as x,K as t,bT as z,c0 as i,ap as w,W as e,c1 as a,c2 as l,a as _,D as f,aN as P,E as v,v as d,a8 as G,ab as B,ai as m}from"./vendor.hEjh--PP1707039385917.js";import{_ as F}from"./skyBoxDmesh.vue_vue_type_script_setup_true_lang.YsqpHmmr1707039385917.js";const S=["object"],$=k({__name:"stencilMaskBox",async setup(g){let s,c;const{nodes:h}=([s,c]=M(()=>T("./plugins/eCommerce/model/box.glb")),s=await s,c(),s),n=h.Sketchfab_model.getObjectByName("Cube004__0");return n.renderOrder=1,n.material.depthTest=!0,n.material.side=j,(y,b)=>{var p;return r(),x("primitive",{position:[0,0,0],object:(p=t(n))==null?void 0:p.clone(),scale:.5},null,8,S)}}}),C={name:"front-face",position:[0,0,.5]},I=e("TresPlaneGeometry",{args:[1,1]},null,-1),A=["stencil-func","stencil-z-pass"],O=["rotation-z","object"],R=["rotation-x"],L=e("TresPlaneGeometry",{args:[1,1]},null,-1),N=["stencil-func","stencil-z-pass"],W={name:"bottom-face-object",scale:.5},q=e("TresBoxGeometry",{args:[1,1,1]},null,-1),D=["stencil-func"],E=["rotation-x"],V=e("TresPlaneGeometry",{args:[1,1]},null,-1),K=["stencil-func","stencil-z-pass"],H={name:"top-face-object",scale:.05},J=e("TresConeGeometry",{args:[5,10]},null,-1),Q=["stencil-func"],U=["rotation-y"],X=e("TresPlaneGeometry",{args:[1,1]},null,-1),Y=["stencil-func","stencil-z-pass"],Z=["object","rotation-y"],ee=["rotation-y"],te=e("TresPlaneGeometry",{args:[1,1]},null,-1),se=["stencil-func","stencil-z-pass"],ne={name:"right-face-object",scale:.05},oe=e("TresTorusGeometry",{args:[5,2]},null,-1),ce=["stencil-func"],ie=["rotation-y"],ae=e("TresPlaneGeometry",{args:[1,1]},null,-1),le=["stencil-func","stencil-z-pass"],re={name:"back-face-object",scale:.05},_e=e("TresDodecahedronGeometry",{args:[5,0]},null,-1),fe=["stencil-func"],he={__name:"stencilMaskModels",async setup(g){let s,c;const{nodes:h,materials:n,animations:y}=([s,c]=M(()=>T("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/eCommerce/eFan/nFan.gltf")),s=await s,c(),s),{actions:b}=z(y,h.Sketchfab_model);b.Animation.play(),n["Material.001"].stencilWrite=!0,n["Material.001"].stencilRef=1,n["Material.001"].stencilFunc=i,n["材质.002"].stencilWrite=!0,n["材质.002"].stencilRef=1,n["材质.002"].stencilFunc=i,h.Sketchfab_model.traverse(o=>{o instanceof w&&(o.renderOrder=1)});let u=([s,c]=M(()=>T("./plugins/basic/htmls/model/model.gltf",{draco:!0,decoderPath:"./draco/"})),s=await s,c(),s);return u=u.nodes.Macbook,u.traverse(o=>{o instanceof w&&(o.renderOrder=1,o.material.stencilWrite=!0,o.material.stencilRef=4,o.material.stencilFunc=i)}),(o,Me)=>(r(),x(v,null,[e("TresMesh",C,[I,e("TresMeshPhongMaterial",{color:16216071,"stencil-write":"","stencil-ref":1,"stencil-func":t(a),"stencil-z-pass":t(l),"depth-write":!1},null,8,A)]),_(t(P),{speed:2},{default:f(()=>[e("primitive",{"rotation-z":-Math.PI/2,object:t(h).Sketchfab_model,position:[0,-.35,0],scale:.5},null,8,O)]),_:1}),e("TresMesh",{name:"bottom-face","rotation-x":Math.PI*.5,position:[0,-.5,0]},[L,e("TresMeshPhongMaterial",{color:16250871,"stencil-write":"","stencil-ref":2,"stencil-func":t(a),"stencil-z-pass":t(l),"depth-write":!1},null,8,N)],8,R),e("TresMesh",W,[q,e("TresMeshPhongMaterial",{color:16776960,"stencil-write":"","stencil-ref":2,"stencil-func":t(i)},null,8,D)]),e("TresMesh",{name:"top-face","rotation-x":Math.PI*-.5,position:[0,.5,0]},[V,e("TresMeshPhongMaterial",{color:16250871,"stencil-write":"","stencil-ref":3,"stencil-func":t(a),"stencil-z-pass":t(l),"depth-write":!1},null,8,K)],8,E),e("TresMesh",H,[J,e("TresMeshPhongMaterial",{color:16711935,"stencil-write":"","stencil-ref":3,"stencil-func":t(i)},null,8,Q)]),e("TresMesh",{name:"left-face","rotation-y":Math.PI*-.5,position:[-.5,0,0]},[X,e("TresMeshPhongMaterial",{color:2365978,"stencil-write":"","stencil-ref":4,"stencil-func":t(a),"stencil-z-pass":t(l),"depth-write":!1},null,8,Y)],8,U),_(t(P),{speed:2},{default:f(()=>[e("primitive",{object:t(u),"rotation-y":-Math.PI/2,position:[-.1,-.2,0],scale:.02},null,8,Z)]),_:1}),e("TresMesh",{name:"right-face","rotation-y":Math.PI*.5,position:[.5,0,0]},[te,e("TresMeshPhongMaterial",{color:16250871,"stencil-write":"","stencil-ref":5,"stencil-func":t(a),"stencil-z-pass":t(l),"depth-write":!1},null,8,se)],8,ee),e("TresMesh",ne,[oe,e("TresMeshPhongMaterial",{color:255,"stencil-write":"","stencil-ref":5,"stencil-func":t(i)},null,8,ce)]),e("TresMesh",{name:"back-face","rotation-y":Math.PI,position:[0,0,-.5]},[ae,e("TresMeshPhongMaterial",{color:16250871,"stencil-write":"","stencil-ref":6,"stencil-func":t(a),"stencil-z-pass":t(l),"depth-write":!1},null,8,le)],8,ie),e("TresMesh",re,[_e,e("TresMeshPhongMaterial",{color:6689075,"stencil-write":"","stencil-ref":6,"stencil-func":t(i)},null,8,fe)])],64))}},ue=e("TresPerspectiveCamera",{position:[-1,0,2],fov:45,aspect:1,near:.1,far:1e3},null,-1),de=e("TresPointLight",{position:[0,0,1],intensity:1},null,-1),pe=e("TresDirectionalLight",{position:[1,1,1],intensity:3},null,-1),me=e("TresAmbientLight",{intensity:2},null,-1),ye={__name:"stencilMask",setup(g){return(s,c)=>(r(),d(t(G),{ref:"canvasRef","window-size":"","clear-color":"#111"},{default:f(()=>[ue,_(t(B),{"auto-rotate":""}),(r(),d(m,null,{default:f(()=>[_(F,{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/workshop_blur.jpg"})]),_:1})),(r(),d(m,null,{default:f(()=>[_($)]),_:1})),(r(),d(m,null,{default:f(()=>[_(he)]),_:1})),de,pe,me]),_:1},512))}};export{ye as default};