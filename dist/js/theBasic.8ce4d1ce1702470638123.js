import{Z as d,$ as i,a0 as _,a1 as m,a2 as f,k as l,ab as T,a3 as M,a4 as g,a5 as w,o as v,v as P,C as y,a6 as S,J as c,a7 as R,a as b,a8 as k,a9 as x,aa as D,V as e}from"./vendor.7fc73b731702470638123.js";const A=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e3,"look-at":[0,0,0]},null,-1),C=e("TresAmbientLight",{intensity:.5},null,-1),L=e("TresSphereGeometry",{args:[2,32,32]},null,-1),z=e("TresMeshToonMaterial",{color:"#006060"},null,-1),B=[L,z],G=e("TresSphereGeometry",{args:[2,32,32]},null,-1),F=e("TresMeshToonMaterial",{color:"#006060"},null,-1),I=[G,F],Z=["rotation"],N=e("TresPlaneGeometry",{args:[20,20,20,20]},null,-1),V=e("TresMeshToonMaterial",null,null,-1),E=[N,V],j=e("TresDirectionalLight",{position:[10,2,4],intensity:1,"cast-shadow":""},null,-1),H=e("TresGridHelper",null,null,-1),K=d({__name:"theBasic",setup(J){const h=i({clearColor:"#201919",shadows:!0,alpha:!1,shadowMapType:_,outputColorSpace:m,toneMapping:f}),u=i({enableDamping:!0,dampingFactor:.05,enableZoom:!0,autoRotate:!1,autoRotateSpeed:2,maxPolarAngle:Math.PI,minPolarAngle:0,maxAzimuthAngle:Math.PI,minAzimuthAngle:-Math.PI,enablePan:!0,keyPanSpeed:7,maxDistance:100,minDistance:0,minZoom:0,maxZoom:100,zoomSpeed:1,enableRotate:!0,rotateSpeed:1}),t=l(),s=l(),o=T(),{onLoop:p}=M();p(({elapsed:a})=>{t.value&&(t.value.position.y+=Math.sin(a)*.01,s.value.position.y+=Math.sin(a)*.01)});function n(a){a&&a.object.material.color.set("#DFFF45")}function r(a){a&&a.material.color.set("#006060")}return g(()=>{o.value&&(o.value.shadow.mapSize.set(1e3,1e3),o.value.shadow.camera.near=.5,o.value.shadow.camera.top=20,o.value.shadow.camera.right=20,o.value.shadow.camera.left=-20,o.value.shadow.camera.bottom=-20)}),w(()=>{}),(a,$)=>(v(),P(c(R),S(h,{"window-size":""}),{default:y(()=>[A,b(c(D),k(x(u)),null,16),C,e("TresMesh",{ref_key:"sphereRef",ref:t,position:[0,4,0],"cast-shadow":"",onPointerEnter:n,onPointerLeave:r},B,544),e("TresMesh",{ref_key:"sphereRef2",ref:s,position:[4,4,0],"cast-shadow":"",onPointerEnter:n,onPointerLeave:r},I,544),e("TresMesh",{rotation:[-Math.PI/2,0,0],"receive-shadow":""},E,8,Z),e("TresDirectionalLight",{ref_key:"TDirectionalLight",ref:o,position:[10,8,4],intensity:1,"cast-shadow":""},null,512),j,H]),_:1},16))}});export{K as default};
