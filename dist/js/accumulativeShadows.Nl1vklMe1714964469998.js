import{a1 as u,a2 as t,ba as _,ad as f,a6 as b,aq as w,o as l,x as d,E as c,a8 as x,L as o,bb as y,a as i,aa as m,ab as p,ac as T,ag as B,Y as e,az as M}from"./vendor.IRvbaiXg1714964469998.js";import{_ as v}from"./component.vue_vue_type_script_setup_true_lang.LusOskdF1714964469998.js";import"./index.vue_vue_type_script_setup_true_lang.2SfXwBA71714964469998.js";import{_ as S}from"./accumulativeShadowsCom.vue_vue_type_script_setup_true_lang.9pJOsBBw1714964469998.js";import"./shaderMaterial.uKBUt1dc1714964469998.js";import"./MeshDiscardMaterial.XzgTO0kb1714964469998.js";const j=e("TresPerspectiveCamera",{position:[2,3,4],fov:45,near:1,far:1e3},null,-1),P=e("TresAmbientLight",{intensity:.5},null,-1),z=e("TresMesh",{position:[2,.5,-1.5],"receive-shadow":"","cast-shadow":"",name:"sphere"},[e("TresSphereGeometry",{args:[.5]}),e("TresMeshStandardMaterial",{color:16724991,roughness:0,metalness:1})],-1),C=e("TresMesh",{position:[-1.5,.5,1.5],"receive-shadow":"","cast-shadow":"",name:"cube"},[e("TresCylinderGeometry",{args:[.5,.5,1]}),e("TresMeshStandardMaterial",{color:3407871,roughness:0,metalness:0})],-1),k=e("TresMesh",{position:[0,.9,0],"receive-shadow":"","cast-shadow":"",name:"torus"},[e("TresTorusKnotGeometry",{args:[.5,.2,80,64]}),e("TresMeshStandardMaterial",{color:16777011,roughness:.3,metalness:.5})],-1),W=u({__name:"accumulativeShadows",setup(R){const g=t({alpha:!0,shadows:!0,shadowMap:!0,toneMapping:_}),h=t({enableDamping:!0,autoRotate:!1}),n=f();b(()=>{if(n.value){const r=n.value.context.scene.value;r.background=new M("grey")}});const a=t({opacity:.8,alphaTest:.9,color:"#000000",blend:2,lightPosition:{x:3,y:5,z:3},frames:60,blendWindow:100,ambient:.5}),s=new w({title:"参数"});return s.addBinding(a,"opacity",{label:"透明度",min:0,max:1,step:.1}),s.addBinding(a,"alphaTest",{label:"透明检测",min:0,max:1,step:.1}),s.addBinding(a,"color",{label:"颜色"}),s.addBinding(a,"blend",{label:"颜色混合",min:0,max:3,step:.1}),s.addBinding(a,"lightPosition",{label:"光源位置",x:{min:-5,max:5},y:{min:1,max:5},z:{min:-5,max:5}}),s.addBinding(a,"frames",{label:"渲染帧数",min:1,max:100,step:1}),s.addBinding(a,"blendWindow",{label:"blend",min:1,max:100,step:1}),s.addBinding(a,"ambient",{label:"ambient",min:0,max:1,step:.1}),(r,E)=>(l(),d(o(y),x(g,{ref_key:"tcRef",ref:n,"window-size":""}),{default:c(()=>[j,i(o(T),m(p(h)),null,16),P,z,C,k,i(S,m(p(a)),null,16),(l(),d(B,null,{default:c(()=>[i(o(v),{files:["pos-x.jpg","neg-x.jpg","pos-y.jpg","neg-y.jpg","pos-z.jpg","neg-z.jpg"],path:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6jpg/"},null,8,["files"])]),_:1}))]),_:1},16))}});export{W as default};