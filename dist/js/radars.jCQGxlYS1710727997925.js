import{$ as f,k as u,a0 as n,an as p,o as t,c as _,a as d,K as s,D as x,E as B,v as l,X as c}from"./vendor.Whz5JOL71710727997925.js";/* empty css                                                                                 */import{_ as h}from"./default.vue_vue_type_script_setup_true_lang.8fluCWMQ1710727997925.js";import{_ as g,a as w}from"./radraB.vue_vue_type_script_setup_true_lang.MhxocKJF1710727997925.js";import"./SPE.gx951f7j1710727997925.js";import{_ as b}from"./pagesShow.vue_vue_type_script_setup_true_lang.PL43AZ611710727997925.js";import"./vanilla-307d3a93.esm.oDMQ5mjs1710727997925.js";import"./_commonjsHelpers.5-cIlDoe1710727997925.js";import"./LineSegments2.VW83iRZ61710727997925.js";const z=f({__name:"radars",setup(k){const m=u(),a=n({show:!0,color:"#00c0ff",radius:300}),i=new p({title:"雷达效果",expanded:!0}),e=i.addFolder({title:"A型"});e.addBinding(a,"show",{label:"显示"}),e.addBinding(a,"color",{label:"颜色"}),e.addBinding(a,"radius",{label:"大小",min:1,max:400,step:10});const o=n({show:!0,color:"#ffff00",maxRadius:300}),r=i.addFolder({title:"B型"});return r.addBinding(o,"show",{label:"显示"}),r.addBinding(o,"color",{label:"颜色"}),r.addBinding(o,"maxRadius",{label:"大小",min:10,max:400,step:10}),(R,y)=>(t(),_(B,null,[d(s(h)),d(b,null,{ability:x(()=>[a.show?(t(),l(s(g),{key:0,ref_key:"radraARef",ref:m,color:a.color,radius:a.radius,size:300,position:[10,60,0]},null,8,["color","radius"])):c("",!0),o.show?(t(),l(s(w),{key:1,position:[600,30,0],color:o.color,height:80,maxRadius:o.maxRadius},null,8,["color","maxRadius"])):c("",!0)]),_:1})],64))}});export{z as default};