import{bD as k,b8 as g,d8 as D,cI as _,aF as l,aq as B,bE as L,ao as v,$ as M,ak as R,r as x,o as y,v as T,D as F,a9 as G,aa as P,K as h,a8 as z,cb as E,a as p,ab as H,aY as K,W as c,ag as N}from"./vendor.nb1813CA1710766200256.js";import{R as q}from"./RGBELoader._K0M48E41710766200256.js";class I extends k{constructor(a){super(a),this.hdrLoader=new q,this.type=g}load(a,o,u,r){const e=new D;switch(e.type=this.type,e.type){case B:e.colorSpace=_,e.minFilter=l,e.magFilter=l,e.generateMipmaps=!1;break;case g:e.colorSpace=_,e.minFilter=l,e.magFilter=l,e.generateMipmaps=!1;break}const n=this;let m=0;function b(s,f,w,C){new L(n.manager).setPath(n.path).setResponseType("arraybuffer").setWithCredentials(n.withCredentials).load(a[s],function(S){m++;const i=n.hdrLoader.parse(S);if(i){if(i.data!==void 0){const t=new v(i.data,i.width,i.height);t.type=e.type,t.colorSpace=e.colorSpace,t.format=e.format,t.minFilter=e.minFilter,t.magFilter=e.magFilter,t.generateMipmaps=e.generateMipmaps,e.images[s]=t}m===6&&(e.needsUpdate=!0,f&&f(e))}},w,C)}for(let s=0;s<a.length;s++)b(s,o,u,r);return e}setDataType(a){return this.type=a,this.hdrLoader.setDataType(a),this}}const V=M({__name:"skyBoxFmesh",props:{texture:{}},setup(d){const a=d,{scene:o}=R(),r=new I().setPath(a.texture).load(["px.hdr","nx.hdr","py.hdr","ny.hdr","pz.hdr","nz.hdr"]);return o.value.environment=r,o.value.background=r,(e,n)=>null}}),W=c("TresPerspectiveCamera",{position:[15,15,15],fov:45,near:.1,far:1e4,"look-at":[0,0,0]},null,-1),$=c("TresMesh",{position:[10,2,-4],"cast-shadow":""},[c("TresBoxGeometry",{args:[2,2,2]}),c("TresMeshNormalMaterial")],-1),j={position:[0,0,0]},Y=M({__name:"skyBoxF",setup(d){const a={clearColor:"#201919",windowSize:!0,toneMapping:E,toneMappingExposure:.8};return(o,u)=>{const r=x("TorusKnotGeometry"),e=x("MeshStandardMaterial");return y(),T(h(z),G(P(a)),{default:F(()=>[W,p(h(H),{enableDamping:""}),p(h(K),{args:[3,3,3],color:"orange",position:[-13,0,1]}),$,c("TresMesh",j,[p(r,{args:[3,1,64,8,2,3]}),p(e,{color:"0xffffff",metalness:1,roughness:.14})]),(y(),T(N,null,{default:F(()=>[p(V,{texture:"https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/images/skyBox/6hdr/"})]),_:1}))]),_:1},16)}}});export{Y as default};