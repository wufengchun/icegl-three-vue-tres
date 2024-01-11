import{an as _,bJ as A,k as m,Z as U,bI as H,b9 as X,aT as w,a4 as $,o as f,c as y,V as M,J as r,D as I,aX as D,aK as k,aG as G,_ as N,a5 as O,ak as F,H as R,I as J,t as Y,X as z,aB as K,$ as B,ag as W,a as p,C as Z,a6 as S}from"./vendor.6862d6441704936894284.js";import{_ as q,l as Q,b as ee}from"./pagesShow.vue_vue_type_script_setup_true_lang.d2f075331704936894284.js";import{h as te}from"./heatmap.314eea9b1704936894284.js";import{r as ae,c as oe,d as ne,a as se}from"./utils.a1a369f81704936894284.js";import{m as ie}from"./BufferGeometryUtils.6c5c501e1704936894284.js";import"./vanilla-307d3a93.esm.19acf9c11704936894284.js";import"./_commonjsHelpers.725317a41704936894284.js";import"./LineSegments2.e2b263211704936894284.js";import"./Water2.d06752a81704936894284.js";import"./Reflector.1971f16a1704936894284.js";const T=36,v=-10,C=(o,e)=>o.getValueAt(e)+v,re=(o,e)=>{if(!e){let t=0;for(e=[];t<1e3;)e.push({x:_.randInt(1,o._config.width),y:_.randInt(1,o._config.height),value:_.randInt(v,T)}),t++}o.setData({max:T,min:v,data:e})},ce=(o=250,e=250,t=!0)=>{const a=document.createElement("heatmap-canvas");return a.style.position="absolute",t||(a.style.display="none"),a.style.top="0",a.style.left="0",document.body.appendChild(a),te.create({container:a,width:o,height:e,blur:".8",radius:10,gradient:{.25:"rgb(0,0,255)",.55:"rgb(0,255,0)",.85:"yellow",1:"rgb(255,0,0)"}})},P=A("buildingsHeatmap",()=>{const o=m(!1),e=m(0);function t(n){o.value=n}function a(n){e.value=n}return{showDiv:o,temperature:e,setShowDiv:t,setTemperature:a}}),le=["object","rotation-x"],ue=["object"],pe=U({__name:"buildingsHeatmap",props:{model:{},opacity:{default:1}},setup(o){(()=>{D.prototype.computeBoundsTree=oe,D.prototype.disposeBoundsTree=ne,w.prototype.raycast=se})();const t=o,a=ce();re(a);const n=new H(a._renderer.canvas);n.needsUpdate=!0;const c=s=>new k({vertexShader:"\n		varying vec2 vUv;\n		void main() {\n			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n			vUv = uv;\n		}\n		",fragmentShader:"\n		uniform sampler2D heightMap;\n		uniform float uOpacity;\n		varying vec2 vUv;\n		void main() {\n			gl_FragColor = vec4(texture2D(heightMap, vUv.xy).rgb, uOpacity);\n    }\n		",uniforms:{uOpacity:{value:t.opacity},heightMap:{type:"t",value:s}},depthWrite:!0,depthTest:!0,transparent:!0,side:G}),i=t.model.city.clone();delete i.geometry.attributes.normal,delete i.geometry.attributes.uv;const g=i.geometry.clone().applyMatrix4(i.matrix),l=t.model.land.clone();delete l.geometry.attributes.normal;const b=l.geometry.clone().applyMatrix4(l.matrix),u=ie([g,b]);u.applyMatrix4(new X().makeRotationX(Math.PI/2)),ae(u),u.computeBoundsTree();const x=c(n),E=new w(u,x);$(()=>{t.opacity&&(x.uniforms.uOpacity.value=t.opacity)});const d=P(),L=s=>{if(s){const h={x:s.uv.x*a._config.width,y:(1-s.uv.y)*a._config.height};console.log("数值：",s),console.log("数值———：",C(a,h)),d.setTemperature(C(a,h))}},V=s=>{s&&d.$patch({showDiv:!0})},j=s=>{s&&d.setShowDiv(!1)};return(s,h)=>(f(),y(I,null,[M("primitive",{object:r(E),"rotation-x":-Math.PI/2,onPointerMove:L,onPointerEnter:V,onPointerLeave:j},null,40,le),M("primitive",{object:t.model.model.children[0].clone()},null,8,ue)],64))}});const me={__name:"dataDiv",setup(o){const e=P(),t=m({top:0,left:0});function a(n){t.value.left=n.clientX+5+"px",t.value.top=n.clientY-20+"px"}return O(()=>{window.addEventListener("mousemove",a)}),F(()=>{window.removeEventListener("mousemove",a)}),(n,c)=>R((f(),y("div",{class:"title",style:z(t.value)},"温度："+Y(r(e).temperature)+"℃ ",5)),[[J,r(e).showDiv]])}},de=N(me,[["__scopeId","data-v-fac3e7fd"]]),De=U({__name:"heatmap2",async setup(o){let e,t;const a=m(!1),n=([e,t]=K(()=>Q()),e=await e,t(),e);a.value=!0;const c=B({width:1,color:"#000",opacity:1,show:!0}),i=B({opacity:.9});return new W({title:"参数",expanded:!0}).addBinding(i,"opacity",{label:"透明度",min:0,max:1,step:.1}),(l,b)=>(f(),y(I,null,[p(q,{showBuildings:!1,autoRotate:!1},{ability:Z(()=>[p(pe,S({model:r(n)},i),null,16,["model"]),p(ee,S(c,{builds:r(n).city}),null,16,["builds"])]),_:1}),p(de)],64))}});export{De as default};