import{$ as S,a0 as o,an as C,aA as x,a1 as k,a2 as v,a3 as P,o as i,c as $,a as l,K as e,D as f,a7 as c,a8 as R,E as T,ab as z,a9 as h,aa as g,W as u,v as d,X as m,ag as M}from"./vendor.Whz5JOL71710727997925.js";import{O as N,l as O}from"./util.YAP4pdmo1710727997925.js";import{_ as A}from"./reflectorMesh.vue_vue_type_script_setup_true_lang.NazMW-S01710727997925.js";/* empty css                                                                                 */import{_ as G}from"./randomLoading.vue_vue_type_script_setup_true_lang.hSXHCiBS1710727997925.js";import{_ as J}from"./cloudPoints.vue_vue_type_script_setup_true_lang.W6uaU5YP1710727997925.js";import{_ as L,a as V}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.OzdZaLBW1710727997925.js";import"./Reflector.-4c0x0YS1710727997925.js";import"./starLoading.mr1ZamTG1710727997925.js";import"./bubbleLoading.y5kDGaPO1710727997925.js";import"./BufferGeometryUtils.c6umBKMC1710727997925.js";const E=u("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),F=u("TresAmbientLight",{intensity:.5},null,-1),D={position:[0,120,0]},I="./plugins/medical/model/brainparts.OBJ",sa=S({__name:"digitalBrainFloor",async setup(K){let r,_;const w=o({mirrorSize:500,gridSize:490,mirrorColor:"#efefef",divisions:10,colorCenterLine:"#444444",colorGrid:"#888888"}),t=o({color:"#fff",show:!0,opacity:1}),a=new C({title:"参数"});a.addBinding(t,"show",{label:"点云显示"}),a.addBinding(t,"color",{label:"点云颜色"}),a.addBinding(t,"opacity",{label:"点云透明度",min:0,max:1,step:.1});const s=o({color:"#84ccff",show:!0,opacity:1});a.addBinding(s,"show",{label:"脑轮廓显示"}),a.addBinding(s,"color",{label:"脑轮廓颜色"}),a.addBinding(s,"opacity",{label:"脑轮廓透明度",min:0,max:1,step:.1});const n=o({color:"#9e00af",show:!0,opacity:1});a.addBinding(n,"show",{label:"脑组织显示"}),a.addBinding(n,"color",{label:"脑组织颜色"}),a.addBinding(n,"opacity",{label:"脑组织透明度",min:0,max:1,step:.1});const B=new N,p=([r,_]=x(()=>O(I,B)),r=await r,_(),r),b=o({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:k,outputColorSpace:v,toneMapping:P}),y=o({autoRotate:!0,autoRotateSpeed:2});return(W,X)=>(i(),$(T,null,[l(e(G)),l(e(R),c(b,{"window-size":""}),{default:f(()=>[E,l(e(z),h(g(y)),null,16),F,u("TresGroup",D,[t.show?(i(),d(J,c({key:0,model:e(p)},t),null,16,["model"])):m("",!0),(i(),d(M,null,{default:f(()=>[s.show?(i(),d(L,c({key:0,model:e(p)},s),null,16,["model"])):m("",!0)]),_:1})),n.show?(i(),d(V,c({key:1,model:e(p)},n),null,16,["model"])):m("",!0)]),l(A,h(g(w)),null,16)]),_:1},16)],64))}});export{sa as default};