import{Z as _,k as u,ab as r,w as d,o as h,v as f,C as n,a6 as M,J as s,a7 as g,a0 as m,a1 as T,a2 as y,V as e,a,aE as i,at as w,ay as x,aF as C,aa as B}from"./vendor.bb7c097e1703747450293.js";const k=e("TresPerspectiveCamera",{position:[3,3,3]},null,-1),v={"position-x":3},R=e("TresTorusKnotGeometry",{args:[1,.4,256,20]},null,-1),b={position:[0,0,-1]},G=e("TresPlaneGeometry",{args:[3,3]},null,-1),S=["side"],D=e("TresGridHelper",{args:[10,10]},null,-1),N=e("TresAmbientLight",{intensity:1},null,-1),P=e("TresDirectionalLight",{intensity:1,position:[2,2,2]},null,-1),L=_({__name:"glassMaterial",setup(V){const c={clearColor:"#82DBC5",shadows:!0,alpha:!1,shadowMapType:m,outputColorSpace:T,toneMapping:y},p=u(),t=r(),o=r();return d(t,l=>{o.value.value.material.dispose(),o.value.value.material=l.MeshGlassMaterialClass}),(l,z)=>(h(),f(s(g),M(c,{ref_key:"context",ref:p,"window-size":""}),{default:n(()=>[k,e("TresMesh",v,[R,a(s(i),{ref_key:"glassMaterialRef",ref:t},null,512)]),a(s(w),{scale:.5},{default:n(()=>[a(s(i))]),_:1}),a(s(x),{ref_key:"boxRef",ref:o,"position-x":-3},null,512),e("TresMesh",b,[G,e("TresMeshBasicMaterial",{side:s(C),color:16716049},null,8,S)]),D,N,P,a(s(B))]),_:1},16))}});export{L as default};