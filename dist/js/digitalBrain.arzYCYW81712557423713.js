import{a0 as b,a1 as s,ap as y,aC as C,a2 as S,a3 as v,a4 as x,r as T,o as n,c as k,a as m,K as l,D as f,a7 as i,E as P,ab as R,a9 as M,aa as N,X as d,v as c,Y as _,af as O}from"./vendor.dUBjHEtG1712557423713.js";import{O as $,l as G}from"./util.16LH260y1712557423713.js";/* empty css                                                                                 */import{_ as J}from"./randomLoading.vue_vue_type_script_setup_true_lang.stGZkhgZ1712557423713.js";import{_ as V}from"./cloudPoints.vue_vue_type_script_setup_true_lang.V80Zqh8z1712557423713.js";import{_ as z,a as A}from"./bubblesEffect.vue_vue_type_script_setup_true_lang.q7VqMPjc1712557423713.js";import"./starLoading.w76dfb821712557423713.js";import"./bubbleLoading.A9DPqFKr1712557423713.js";import"./BufferGeometryUtils.H8mHnHC81712557423713.js";const E=d("TresPerspectiveCamera",{position:[100,400,500],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),L=d("TresAmbientLight",{intensity:.5},null,-1),D={position:[0,120,0]},F=d("TresGridHelper",{args:[400,10]},null,-1),H="./plugins/medical/model/brainparts.OBJ",oa=b({__name:"digitalBrain",async setup(K){let r,u;const e=s({color:"#fff",show:!0,opacity:1}),a=new y({title:"参数"});a.addBinding(e,"show",{label:"点云显示"}),a.addBinding(e,"color",{label:"点云颜色"}),a.addBinding(e,"opacity",{label:"点云透明度",min:0,max:1,step:.1});const o=s({color:"#84ccff",show:!0,opacity:1});a.addBinding(o,"show",{label:"脑轮廓显示"}),a.addBinding(o,"color",{label:"脑轮廓颜色"}),a.addBinding(o,"opacity",{label:"脑轮廓透明度",min:0,max:1,step:.1});const t=s({color:"#9e00af",show:!0,opacity:1});a.addBinding(t,"show",{label:"脑组织显示"}),a.addBinding(t,"color",{label:"脑组织颜色"}),a.addBinding(t,"opacity",{label:"脑组织透明度",min:0,max:1,step:.1});const h=new $,p=([r,u]=C(()=>G(H,h)),r=await r,u(),r),w=s({clearColor:"#000",shadows:!0,alpha:!1,shadowMapType:S,outputColorSpace:v,toneMapping:x}),B=s({autoRotate:!0,autoRotateSpeed:2});return(W,X)=>{const g=T("TresCanvas");return n(),k(P,null,[m(l(J)),m(g,i(w,{"window-size":""}),{default:f(()=>[E,m(l(R),M(N(B)),null,16),L,d("TresGroup",D,[e.show?(n(),c(V,i({key:0,model:l(p)},e),null,16,["model"])):_("",!0),(n(),c(O,null,{default:f(()=>[o.show?(n(),c(z,i({key:0,model:l(p)},o),null,16,["model"])):_("",!0)]),_:1})),t.show?(n(),c(A,i({key:1,model:l(p)},t),null,16,["model"])):_("",!0)]),F]),_:1},16)],64)}}});export{oa as default};
