import{$ as M,ak as R,aD as T,aE as k,bf as c,az as B,aH as v,aw as C,o as l,c as P,K as m,v as u,D as d,a8 as I,a as h,ab as D,ag as G,W as e}from"./vendor.arGmYKdh1710982118573.js";import{R as N}from"./ReflectorMaterial.GVReyPVb1710982118573.js";import{R as j}from"./OimoPhysicsBuffer.9xwE5Q8Q1710982118573.js";import{m as S}from"./BufferGeometryUtils.NMFmMg3b1710982118573.js";import"./dither.glsl.y2WXw1t-1710982118573.js";const V=["rotation-x","position","object"],Z=M({__name:"sciFiModular",props:{position:{default:[0,-1,0]}},async setup(p){let o,n;const x=p,{scene:g}=R(),{nodes:w}=([o,n]=T(()=>k("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/floor/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,n(),o),a=w.Cube016__0;console.log(a);const r=a.geometry,y=S([r.clone(),r.clone().applyMatrix4(new c().makeRotationZ(-Math.PI/2)),r.clone().applyMatrix4(new c().makeRotationZ(Math.PI/2)),r.clone().applyMatrix4(new c().makeRotationZ(-Math.PI))]),s=new j,i=new N({reflectivity:6,mirror:.1,mixStrength:3,color:new B("#fff"),map:a.material.map.clone(),normalMap:a.material.normalMap.clone(),normalScale:new v(1,1),fog:g.fog,dithering:!0});i.uniforms.tReflect=s.renderTargetUniform,i.uniforms.uMatrix=s.textureMatrixUniform;const t=new C(y,i);return t.add(s),t.onBeforeRender=(f,_,b)=>{t.visible=!1,s.update(f,_,b),t.visible=!0},(f,_)=>(l(),P("primitive",{"rotation-x":-Math.PI/2,position:x.position,object:m(t)},null,8,V))}}),$=e("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e5,"look-at":[0,0,0]},null,-1),z=e("TresAmbientLight",{intensity:10},null,-1),A=e("TresMesh",{position:[3,2,0]},[e("TresBoxGeometry",{args:[2,2,2]}),e("TresMeshNormalMaterial",{wireframe:!0})],-1),E=e("TresMesh",{position:[0,1.2,0]},[e("TresBoxGeometry",{args:[1,1,1]}),e("TresMeshNormalMaterial")],-1),L=M({__name:"showFloor",setup(p){return(o,n)=>(l(),u(m(I),{clearColor:"#201919","window-size":""},{default:d(()=>[$,h(m(D),{enableDamping:""}),z,A,E,(l(),u(G,null,{default:d(()=>[h(Z,{position:[0,0,0]})]),_:1}))]),_:1}))}});export{L as default};