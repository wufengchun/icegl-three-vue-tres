import{Z as _,k as u,aB as f,a5 as w,ag as y,$ as p,o as d,v as s,C as h,J as g,W as m}from"./vendor.6862d6441704936894284.js";import{_ as C,l as B,a as x,b as k}from"./pagesShow.vue_vue_type_script_setup_true_lang.d2f075331704936894284.js";import"./vanilla-307d3a93.esm.19acf9c11704936894284.js";import"./_commonjsHelpers.725317a41704936894284.js";import"./LineSegments2.e2b263211704936894284.js";const X=_({__name:"buildings",async setup(v){let t,r;const b=u(),n=u(!1),c=([t,r]=f(()=>B()),t=await t,r(),t);n.value=!0,w(()=>{const l=new y({title:"建筑效果",expanded:!0}),o=l.addFolder({title:"线条"});o.addBinding(i,"show",{label:"显示"}),o.addBinding(i,"color",{label:"颜色"}),o.addBinding(i,"width",{label:"宽度",min:0,max:10,step:1}),o.addBinding(i,"opacity",{label:"透明度",min:0,max:1,step:.1});const e=l.addFolder({title:"建筑物"});e.addBinding(a,"show",{label:"显示"}),e.addBinding(a,"bulidingsColor",{label:"楼宇颜色"}),e.addBinding(a,"gradient",{label:"渐变"}),e.addBinding(a,"opacity",{label:"透明度",min:0,max:1,step:.1}),e.addBinding(a,"landColor",{label:"地面颜色"})});const i=p({width:1,color:"#000",opacity:1,show:!0}),a=p({bulidingsColor:"#e523ff",landColor:"#112233",opacity:.9,show:!0,gradient:!0});return(l,o)=>(d(),s(C,{showBuildings:!1,ref_key:"pagesShowRef",ref:b},{ability:h(()=>[a.show&&n.value?(d(),s(x,{key:0,model:g(c),bulidingsColor:a.bulidingsColor,landColor:a.landColor,gradient:a.gradient,opacity:a.opacity},null,8,["model","bulidingsColor","landColor","gradient","opacity"])):m("",!0),i.show&&n.value?(d(),s(k,{key:1,builds:g(c).city,width:i.width,color:i.color,opacity:i.opacity},null,8,["builds","width","color","opacity"])):m("",!0)]),_:1},512))}});export{X as default};