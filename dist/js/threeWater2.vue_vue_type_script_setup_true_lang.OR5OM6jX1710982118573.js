import{$ as n,bt as c,aD as i,aH as m,ap as p,a5 as u,o as _,c as f,K as w,bd as d}from"./vendor.arGmYKdh1710982118573.js";import{W as h}from"./Water2.6ucHrh3t1710982118573.js";const g=["object","rotation-x"],M=n({__name:"threeWater2",props:{waterGeometry:{default:new c(20,20)},color:{default:"#FFF"},scale:{default:1}},async setup(s){let a,r;const e=s,o=([a,r]=i(()=>d(["./plugins/water/images/Water_1_M_Normal.jpg","./plugins/water/images/Water_2_M_Normal.jpg"])),a=await a,r(),a),l=e.waterGeometry.clone(),t=new h(l,{color:e.color,scale:e.scale,flowDirection:new m(1,1),textureWidth:1024,textureHeight:1024,normalMap0:o[0],normalMap1:o[1]});return t.material.transparent=!0,t.material.depthWrite=!0,t.material.depthTest=!0,t.material.side=p,u(()=>{e.color&&t.material.uniforms.color.value.set(e.color),e.scale&&(t.material.uniforms.config.value.w=e.scale)}),(x,W)=>(_(),f("primitive",{object:w(t),"rotation-x":-Math.PI/2},null,8,g))}});export{M as _};