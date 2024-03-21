import{$ as b,aD as S,bd as R,bk as G,b3 as C,bY as k,a4 as T,o as u,c as y,E as B,G as E,W as v,K as n,bq as O,bp as W,bo as j,bf as H,bh as N,k as q,bQ as A,ak as $,a5 as D,aR as F,az as P,ap as U,a as p,v as h,D as g,ag as _,ac as V,a0 as Z,a1 as J,a2 as Q,a3 as Y,be as I,a7 as K,a8 as X}from"./vendor.arGmYKdh1710982118573.js";import{C as ee}from"./vanilla-307d3a93.esm._eBNqVRC1710982118573.js";import{L as oe,a as te,b as ne}from"./LineSegments2.IbB4S1d71710982118573.js";import{T as ie}from"./TilesRenderer.i8Mah7o51710982118573.js";import{l as x,U as ae,M as re,P as se,a as le,T as ue,O as ce,r as pe}from"./raycasterEvent.AjrlrFJV1710982118573.js";import{_ as me,a as fe}from"./radraB.vue_vue_type_script_setup_true_lang.GgWN621j1710982118573.js";import{_ as de}from"./precipitation.vue_vue_type_script_setup_true_lang.aOtjPjEg1710982118573.js";import{_ as ge}from"./cloudMesh.vue_vue_type_script_setup_true_lang.GAcmFWNN1710982118573.js";import{_ as L}from"./buildingsMarkA.vue_vue_type_script_setup_true_lang.-swLLVGL1710982118573.js";import{_ as he}from"./fireA.vue_vue_type_script_setup_true_lang.QsDdVKoI1710982118573.js";import{_ as _e}from"./fireB.vue_vue_type_script_setup_true_lang.oWLkGhfl1710982118573.js";import{_ as we}from"./smokeA.vue_vue_type_script_setup_true_lang.maA_HVZz1710982118573.js";import{_ as ye}from"./rippleMesh.vue_vue_type_script_setup_true_lang.lAcPvokl1710982118573.js";import{l as ve}from"./utils.qrOPZObp1710982118573.js";import"./_commonjsHelpers.5-cIlDoe1710982118573.js";import"./BufferGeometryUtils.NMFmMg3b1710982118573.js";import"./ExtensionUtilities.lD_0252w1710982118573.js";import"./SPE.oo5Z1QTF1710982118573.js";import"./Water2.6ucHrh3t1710982118573.js";import"./Reflector.bYMHWcft1710982118573.js";const Me={renderOrder:3e3},Ce=["args"],be=["map","side","color"],Pe=b({__name:"roadLightByLonLat",props:{geoJson:{},color:{default:"#ffff00"},radius:{default:2},speed:{default:1}},async setup(r){let t,e;const o=r,{map:a}=([t,e]=S(()=>R({map:"./plugins/digitalCity/image/line.png"})),t=await t,e(),t);a.needsUpdate=!0,a.wrapS=a.wrapT=G,a.repeat.set(1,1);const s=([t,e]=S(()=>ve(o.geoJson)),t=await t,e(),t);let m=[];for(var f=0;f<s.length;f++){const i=s[f],l=[];i.geometry.coordinates.forEach(w=>{const M=x(w[0],w[1],50);l.push(new C(M[0],0,-M[1]))});let d=o.color;i.properties.highway==="primary"?d="#7eff10":i.properties.highway==="tertiary"?d="#0eeeee":i.properties.highway==="secondary"?d="#ffffff":d="#ff0ffe",m.push({cr3:new k(l),color:d})}debugger;const{onLoop:c}=T();return c(({delta:i})=>{a.offset.x-=Math.random()/20*o.speed}),(i,l)=>(u(),y("TresGroup",null,[(u(!0),y(B,null,E(n(m),d=>(u(),y("TresMesh",Me,[v("TresTubeGeometry",{args:[d.cr3,64,o.radius,20,!1]},null,8,Ce),v("TresMeshBasicMaterial",{map:n(a),side:n(O),transparent:!0,color:d.color},null,8,be)]))),256))]))}}),xe=(r,t)=>{const e=new N,o=new C().crossVectors(r,t);return e.x=o.x,e.y=o.y,e.z=o.z,e.w=1+r.clone().dot(t),e.normalize(),e},Te=r=>{r.onLoadTileSet=t=>{const e=new W,o=new j,a=new H;let s=null,m=0;r.getOrientedBounds(e,a)?(s=new C().setFromMatrixPosition(a),m=s.length()):r.getBoundingSphere(o)&&(s=o.center.clone(),m=s.length());const f=s==null?void 0:s.normalize(),c=new C(0,1,0),i=xe(f,c);r.group.quaternion.x=i.x,r.group.quaternion.y=i.y,r.group.quaternion.z=i.z,r.group.quaternion.w=i.w,r.group.position.z=-m}},Be="varying vec4 vPosition;\nvoid main(){\n	vPosition=modelMatrix*vec4(position,1.);\n	csm_Position=position*vec3(1.);\n}",ze="uniform mat4 modelMatrix;\nvarying vec4 vPosition;\nuniform vec3 uMax;\nuniform vec3 uMin;\nuniform float uOpacity;\nuniform float uBorderWidth;\nuniform vec3 uLightColor;\nuniform vec3 uColor;\nuniform float uCircleTime;\nuniform float uTime;\nuniform vec3 uTopColor; // 顶部颜色\nuniform bool uGradient;\nvec4 uMax_world;\nvec4 uMin_world;\nvoid main() {\n  // 转世界坐标\n  uMax_world = modelMatrix * vec4(uMax, 1.);\n  uMin_world = modelMatrix * vec4(uMin, 1.);\n  vec3 distColor = uColor;\n  float residue = uTime - floor(uTime / uCircleTime) * uCircleTime;\n  float rate = residue / uCircleTime;\n  float lightOffset = rate * (uMax_world.y - uMin_world.y);\n\n  if (uMin_world.y + lightOffset < vPosition.y &&\n      uMin_world.y + lightOffset + uBorderWidth > vPosition.y) {\n    csm_DiffuseColor = vec4(uLightColor, uOpacity);\n  } else {\n    csm_DiffuseColor = vec4(distColor, uOpacity);\n  }\n\n  // 根据高度计算颜色\n  if (uGradient) {\n    float rateHight =\n        (vPosition.y - uMin_world.y) / (uMax_world.y - uMin_world.y);\n    // vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, rateHight * 0.6);\n    float mixNumber = clamp(rateHight * 2.3 - 1.5, 0., 1.);\n    vec3 outColor = mix(csm_DiffuseColor.xyz, uTopColor, mixNumber);\n\n    csm_DiffuseColor = vec4(outColor, uOpacity);\n  }\n}",Se=["object"],Le=b({__name:"tilesBuildings",props:{bulidingsColor:{default:"#e523ff"},topColor:{default:"#ffff00"},opacity:{default:.8},gradient:{type:Boolean,default:!0},camera:{}},setup(r){const t=r,e=q(0),o=c=>{const{geometry:i}=c;i.computeBoundingBox(),i.computeBoundingSphere();const{max:l,min:d}=i.boundingBox,w=new ee({baseMaterial:new F,vertexShader:Be,fragmentShader:ze,silent:!0,uniforms:{uMax:{value:l},uMin:{value:d},uBorderWidth:{value:5},uCircleTime:{value:5},uColor:{value:new P(t.bulidingsColor)},uOpacity:{value:t.opacity},uLightColor:{value:new P("#ffffff")},uTopColor:{value:new P(t.topColor)},uTime:e,uGradient:{value:t.gradient}},depthWrite:!0,depthTest:!0,transparent:!0,side:U});c.material.dispose(),c.material=w},a=new ie("https://jdvop.oss-cn-qingdao.aliyuncs.com/mapv-data/titleset/sz_ns/no.json");a.errorTarget=2,a.onLoadModel=c=>{c.traverse(i=>{if(i.isMesh){o(i),i.receiveShadow=!1,i.castShadow=!1;const l=new A(i.geometry.clone());let w=new oe().fromEdgesGeometry(l),M=new te({color:0,linewidth:1,opacity:1,transparent:!0,depthWrite:!0,depthTest:!0});M.resolution.set(window.innerWidth,window.innerHeight);const z=new ne(w,M);z.applyMatrix4(i.matrix.clone()),i.parent.add(z)}})},Te(a);const{renderer:s,sizes:m}=$();D(()=>{m.width.value&&(a.setCamera(t.camera),a.setResolutionFromRenderer(t.camera,s.value))});const{onBeforeLoop:f}=T();return f(({delta:c})=>{e.value+=c*2,t.camera&&m.width.value&&(t.camera.updateMatrixWorld(),a.update())}),(c,i)=>(u(),y("TresGroup",null,[v("primitive",{object:n(a).group},null,8,Se)]))}}),$e=["object","rotation"],De=b({__name:"tileMapBuildingsMesh",props:{bbox:{default:[104.955976,20.149765,120.998419,30.528687]},maxZoom:{default:20},mapCenter:{},camera:{}},setup(r,{expose:t}){const e=r,{renderer:o,scene:a}=$(),s=new se;s.coordType=ae;const m=new le;m.source="https://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",m.showTileNo=!1,m.useWorker=!0;const f=new ue(s,m);f.showBoundingBox=!1,f.wireframe=!1,f.flatShading=!1,f.filter={opposite:!0,genBright:1.3,genContrast:1,genSaturation:1};let c=new P("#4688b5");f.filter.monochrome={r:c.r,g:c.g,b:c.b};const i=new re;i.provider=f,i.bbox=e.bbox,i.maxZoom=e.maxZoom,e.camera.up=new C(0,1,0),e.camera.position.set(e.mapCenter[0],e.mapCenter[2],-e.mapCenter[1]+2e3),e.camera.lookAt(new C(e.camera.position.x,0,e.camera.position.z-3e3)),i.camera=e.camera;let l=null;D(()=>{o.value&&(l=new ce(e.camera,o.value.domElement),l.enableDamping=!0,l.dampingFactor=.05,l.minDistance=600,l.position0.set(e.camera.position.x,e.camera.position.y,e.camera.position.z),l.target.set(e.camera.position.x,0,e.camera.position.z-2e3))});const{onLoop:d}=T();return d(()=>{if(o.value){const w=Math.abs(e.camera.position.y)*50;e.camera.far=w+5e3,e.camera.updateProjectionMatrix(),l&&(l.update(),l.target.y=0),i.update(),o.value.render(a.value,e.camera)}}),t({camera:e.camera,map:i}),(w,M)=>(u(),y("primitive",{object:n(i),rotation:[-Math.PI/2,0,0]},null,8,$e))}}),Re=b({__name:"mapBuildingsMoreMeshes",props:{cPosition:{}},setup(r){const t=x(113.9456,22.5385,50),e=x(113.9498,22.5364,50);return(o,a)=>(u(),y(B,null,[p(n(me),{color:"#00c0ff",radius:300,size:300,position:[o.cPosition[0],8,-o.cPosition[1]]},null,8,["position"]),(u(),h(_,null,{default:g(()=>[p(n(L),{position:[o.cPosition[0],8,-o.cPosition[1]],scale:.13,img:"./plugins/digitalCity/image/znsba.png",foremost:!1},null,8,["position"])]),_:1})),p(n(fe),{position:[o.cPosition[0]+700,10,-o.cPosition[1]+300],color:"#ffff00",height:180,maxRadius:400},null,8,["position"]),(u(),h(_,null,{default:g(()=>[p(n(L),{position:[o.cPosition[0]+700,10,-o.cPosition[1]+300],scale:200,img:"./plugins/digitalCity/image/znsb-err.png",sizeAttenuation:!0,foremost:!0},null,8,["position"])]),_:1})),(u(),h(_,null,{default:g(()=>[p(n(he),{fireScale:80,magnitude:1.3,lacunarity:2,gain:1,position:[o.cPosition[0]+280,1,-o.cPosition[1]+120]},null,8,["position"])]),_:1})),(u(),h(_,null,{default:g(()=>[p(n(_e),{position:[o.cPosition[0]+388,6,-o.cPosition[1]+330]},null,8,["position"])]),_:1})),(u(),h(_,null,{default:g(()=>[p(n(we),{position:[o.cPosition[0]+388,6,-o.cPosition[1]+330]},null,8,["position"])]),_:1})),(u(),h(_,null,{default:g(()=>[p(n(de),{speed:12,size:20,count:2e4,color:"#fff",type:"snow",position:[o.cPosition[0],300,-o.cPosition[1]],areaX:5e3,areaY:600,areaZ:5e3},null,8,["position"])]),_:1})),(u(),h(_,null,{default:g(()=>[p(n(ge),{cPosition:[o.cPosition[0],600,-o.cPosition[1]]},null,8,["cPosition"])]),_:1})),p(n(ye),{"position-y":6,positionSrc:[{x:n(t)[0],y:-n(t)[1]},{x:n(t)[0],y:-n(e)[1]},{x:n(e)[0],y:-n(e)[1]},{x:n(e)[0],y:-n(t)[1]},{x:n(t)[0],y:-n(t)[1]}],height:220,color:"#00ffdd"},null,8,["positionSrc"]),(u(),h(_,null,{default:g(()=>[p(n(Pe),{position:[500,0,340],radius:5,geoJson:"plugins/digitalCity/geojson/shenzhen2.geojson"})]),_:1}))],64))}}),Ge=v("TresAmbientLight",{color:"#ffffff"},null,-1),ke=v("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),Ee=v("TresGridHelper",{args:[1e4,10]},null,-1),Oe=v("TresAxesHelper",{args:[1e5]},null,-1),io=b({__name:"mapBuildings",setup(r){const t=x(113.942639739199,22.53171672540276,50),e=V(),o=Z({clearColor:"#000000",disableRender:!0,alpha:!1,shadowMapType:J,outputColorSpace:Q,toneMapping:Y}),a=[t[0],t[1],1700],s=new I(60,window.innerWidth/window.innerHeight,1,1e7*10);return(m,f)=>(u(),y(B,null,[p(n(X),K(o,{"window-size":""}),{default:g(()=>[Ge,ke,p(n(Le),{position:[n(t)[0],1,-n(t)[1]+228],camera:n(s)},null,8,["position","camera"]),(u(),h(_,null,{default:g(()=>[p(n(De),{ref_key:"tileMapBuildingsMeshRef",ref:e,bbox:[104.955976,20.149765,120.998419,30.528687],mapCenter:a,camera:n(s)},null,8,["camera"])]),_:1})),(u(),h(_,null,{default:g(()=>[p(Re,{cPosition:n(t)},null,8,["cPosition"])]),_:1})),Ee,Oe]),_:1},16),p(pe,{tileMapRef:e.value},null,8,["tileMapRef"])],64))}});export{io as default};