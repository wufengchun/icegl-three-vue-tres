import{a0 as p,ac as C,ak as u,a6 as w,o as c,c as _,$ as x,k as v,a5 as B,az as h,a1 as m,a2 as b,a3 as A,b4 as M,aq as R,r as T,v as g,D as f,a7 as $,a as i,a9 as L,aa as S,K as o,ab as k,ag as P,X as d,b3 as D}from"./vendor.fZWouSnL1712126651134.js";import{L as z,C as G,D as V}from"./vanilla.9zLr8prN1712126651134.js";import"./OimoPhysicsBuffer.-Azeqs8E1712126651134.js";import{_ as E}from"./reflectorDUDV.vue_vue_type_script_setup_true_lang.SOecLHbE1712126651134.js";import"./vanilla.MD--V1Gz1712126651134.js";import"./_commonjsHelpers.5-cIlDoe1712126651134.js";import"./dither.glsl.y2WXw1t-1712126651134.js";class F extends z{constructor(e={}){super(e)}init(e){this.layers=e[0].children.map(r=>r.el),this.refresh()}}const N=["args"],q=p({__name:"component",props:{layers:{},color:{},alpha:{},lighting:{},name:{}},setup(l,{expose:e}){const r=l,a=C(),{extend:s}=u();return s({LayerMaterialCom:F}),e({LayerMaterialClass:a}),w(()=>{a.value.init(a.value.__vnode.children)}),(t,n)=>(c(),_("TresLayerMaterialCom",{ref_key:"LayerMaterialClass",ref:a,args:[r]},[x(t.$slots,"default")],8,N))}}),H=["args"],I=p({__name:"color",props:{color:{},alpha:{},mode:{},name:{},visible:{type:Boolean}},setup(l){const e=l,{extend:r}=u();r({Color:G});const a=v();return B(()=>{a.value&&(e.color&&(a.value.color=new h(e.color)),e.alpha&&(a.value.alpha=e.alpha))}),(s,t)=>(c(),_("TresColor",{ref_key:"colorRef",ref:a,args:[e],visible:!0},null,8,H))}}),K=["args"],X=p({__name:"depth",props:{colorA:{},colorB:{},alpha:{},near:{},far:{},origin:{},mapping:{},mode:{},name:{},visible:{type:Boolean}},setup(l){const e=l,{extend:r}=u();r({Depth:V});const a=v();return B(()=>{a.value&&(e.colorA&&(a.value.colorA=new h(e.colorA)),e.colorB&&(a.value.colorB=new h(e.colorB)),e.alpha&&(a.value.alpha=e.alpha),e.near&&(a.value.near=e.near),e.far&&(a.value.far=e.far))}),(s,t)=>(c(),_("TresDepth",{ref_key:"instanceRef",ref:a,args:[e],visible:!0},null,8,K))}}),j=d("TresPerspectiveCamera",{position:[5,10,5],fov:30,near:1,far:1e3},null,-1),J=d("TresAmbientLight",{color:"#ffffff",intensity:"2"},null,-1),O={position:[0,.5,0]},Q=d("TresSphereGeometry",{args:[1,500,500]},null,-1),sa=p({__name:"layerMaterial",setup(l){const e=m({clearColor:"#000000",shadows:!0,alpha:!1,antialias:!0,pixelRatio:window.devicePixelRatio,shadowMapType:b,outputColorSpace:A,toneMapping:void 0,useLegacyLights:!0}),r=m({autoRotate:!0}),a=M({color1:"#000000",alpha1:1,colorA:"#ed08ff",colorB:"#1bff00",alpha2:1.1,near:.87,far:299.77}),s=new R({expanded:!0}),t=s.addFolder({title:"Color层"});t.addBinding(a,"color1",{label:"颜色"}),t.addBinding(a,"alpha1",{label:"alpha",step:.1,min:0,max:2});const n=s.addFolder({title:"Depth层"});return n.addBinding(a,"colorA",{label:"颜色A"}),n.addBinding(a,"colorB",{label:"颜色B"}),n.addBinding(a,"alpha2",{label:"alpha",step:.1,min:0,max:2}),n.addBinding(a,"near",{label:"near",step:.01,min:0,max:1}),n.addBinding(a,"far",{label:"far",step:.01,min:299,max:300}),(U,W)=>{const y=T("TresCanvas");return c(),g(y,$(e,{"window-size":""}),{default:f(()=>[j,i(o(k),L(S(r)),null,16),J,(c(),g(P,null,{default:f(()=>[i(o(E),{reflectivity:2.6,showGridHelper:"",position:[0,-.6,0]})]),_:1})),d("TresMesh",O,[Q,i(o(q),{color:"white",lighting:"physical"},{default:f(()=>[i(o(I),{color:o(a).color1,alpha:o(a).alpha1},null,8,["color","alpha"]),i(o(X),{colorA:o(a).colorA,colorB:o(a).colorB,alpha:o(a).alpha2,mode:"normal",near:o(a).near,far:o(a).far,origin:new D(100,100,100)},null,8,["colorA","colorB","alpha","near","far","origin"])]),_:1})])]),_:1},16)}}});export{sa as default};
