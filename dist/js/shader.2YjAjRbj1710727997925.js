import{b0 as M,bb as Se,ar as ce,as as ee,$ as we,bg as ge,ax as pe,k as se,aw as ve,a5 as Be,w as le,a4 as Te,ak as xe,o as Ae,c as Me,W as V,a9 as ze,aa as $e,aA as Ce,a0 as ke,an as Ee,bf as Ge,b1 as Ne,bJ as Ie,v as Re,D as ye,a7 as ne,K as te,a8 as Ve,bj as je,a as oe,ab as Pe,aY as Le}from"./vendor.Whz5JOL71710727997925.js";/**
 * @description Loop Subdivision Surface
 * @about       Smooth subdivision surface modifier for use with three.js BufferGeometry.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2022 Stephens Nunnally
 * @source      https://github.com/stevinz/three-subdivide
 */const Oe=2,R=new M,S=new M,x=new M,fe=new M,ae=new M,b=new M,v=new M,y=new M,Q=new M,U=new M,X=new M,ie=[new M,new M,new M],B=[new M,new M,new M],He=new Se;class L{static modify(e,o=1,n={}){if(arguments.length>3&&console.warn("LoopSubdivision.modify() now uses a parameter object. See readme for more info!"),typeof n!="object"&&(n={}),n.split===void 0&&(n.split=!0),n.uvSmooth===void 0&&(n.uvSmooth=!1),n.preserveEdges===void 0&&(n.preserveEdges=!1),n.flatOnly===void 0&&(n.flatOnly=!1),n.maxTriangles===void 0&&(n.maxTriangles=1/0),n.weight===void 0&&(n.weight=1),(isNaN(n.weight)||!isFinite(n.weight))&&(n.weight=1),n.weight=Math.max(0,Math.min(1,n.weight)),!re(e))return e;let u=e.clone();if(n.split){const g=L.edgeSplit(u);u.dispose(),u=g}for(let g=0;g<o;g++)if(u.attributes.position.count/3<n.maxTriangles){let p;n.flatOnly?p=L.flat(u,n):p=L.smooth(u,n),u.groups.forEach(c=>{p.addGroup(c.start*4,c.count*4,c.materialIndex)}),u.dispose(),u=p}return u}static edgeSplit(e){if(!re(e))return e;const o=e.index!==null?e.toNonIndexed():e.clone(),n=new ce,u=de(o),g=o.attributes.position.count,d=o.getAttribute("position"),p=o.getAttribute("normal"),c={},m=[],z={},C=[];for(let h=0;h<g;h+=3){b.fromBufferAttribute(d,h+0),v.fromBufferAttribute(d,h+1),y.fromBufferAttribute(d,h+2),fe.fromBufferAttribute(p,h);const $=G(b),T=G(v),k=G(y),F=He.set(b,v,y).getArea();if(C.push(!Fe(F,0)),!C[h/3]){m.push([]);continue}qe(fe,b,v,y);const t=G(fe),s=["".concat($,"_").concat(T,"_").concat(t),"".concat(T,"_").concat($,"_").concat(t),"".concat(T,"_").concat(k,"_").concat(t),"".concat(k,"_").concat(T,"_").concat(t),"".concat(k,"_").concat($,"_").concat(t),"".concat($,"_").concat(k,"_").concat(t)],f=h/3;for(let l=0;l<s.length;l++)c[s[l]]||(c[s[l]]=[]),c[s[l]].push(f),z[s[l]]||((l===0||l===1)&&(z[s[l]]=b.distanceTo(v)),(l===2||l===3)&&(z[s[l]]=v.distanceTo(y)),(l===4||l===5)&&(z[s[l]]=y.distanceTo(b)));m.push([s[0],s[2],s[4]])}u.forEach(h=>{const $=o.getAttribute(h);if(!$)return;const T=K($,h);n.setAttribute(h,new ee(T,$.itemSize))});const j=o.morphAttributes;for(const h in j){const $=[],T=j[h];for(let k=0,F=T.length;k<F;k++){if(T[k].count!==g)continue;const t=K(T[k],h,!0);$.push(new ee(t,T[k].itemSize))}n.morphAttributes[h]=$}return n.morphTargetsRelative=o.morphTargetsRelative,o.dispose(),n;function K(h,$,T=!1){const F=g*h.itemSize*4,t=new h.array.constructor(F),s=$==="position"&&!T&&o.groups.length>0;let f,l,r=0,N=0,i=h.itemSize;for(let _=0;_<g;_+=3){if(!C[_/3]){N+=3;continue}b.fromBufferAttribute(h,_+0),v.fromBufferAttribute(h,_+1),y.fromBufferAttribute(h,_+2);const I=_/3,E=m[I][0],O=m[I][1],D=m[I][2],H=c[E].length,Y=c[O].length,P=c[D].length,q=H+Y+P-3,J=r*3/i/3;if(q===0)A(t,r,i,b,v,y),r+=i*3;else{const Z=z[E],me=z[O],be=z[D];(Z>me||Y<=1)&&(Z>be||P<=1)&&H>1?(S.copy(b).add(v).divideScalar(2),P>1?(x.copy(y).add(b).divideScalar(2),A(t,r,i,b,S,x),r+=i*3,A(t,r,i,S,y,x),r+=i*3):(A(t,r,i,b,S,y),r+=i*3),Y>1?(x.copy(v).add(y).divideScalar(2),A(t,r,i,S,v,x),r+=i*3,A(t,r,i,x,y,S),r+=i*3):(A(t,r,i,v,y,S),r+=i*3)):(me>be||P<=1)&&Y>1?(S.copy(v).add(y).divideScalar(2),H>1?(x.copy(b).add(v).divideScalar(2),A(t,r,i,S,x,v),r+=i*3,A(t,r,i,x,S,b),r+=i*3):(A(t,r,i,v,S,b),r+=i*3),P>1?(x.copy(y).add(b).divideScalar(2),A(t,r,i,S,y,x),r+=i*3,A(t,r,i,x,b,S),r+=i*3):(A(t,r,i,y,b,S),r+=i*3)):P>1?(S.copy(y).add(b).divideScalar(2),Y>1?(x.copy(v).add(y).divideScalar(2),A(t,r,i,y,S,x),r+=i*3,A(t,r,i,S,v,x),r+=i*3):(A(t,r,i,y,S,v),r+=i*3),H>1?(x.copy(b).add(v).divideScalar(2),A(t,r,i,b,x,S),r+=i*3,A(t,r,i,x,v,S),r+=i*3):(A(t,r,i,b,v,S),r+=i*3)):(A(t,r,i,b,v,y),r+=i*3)}s&&o.groups.forEach(Z=>{Z.start===_-N&&(f!==void 0&&l!==void 0&&n.addGroup(f,J-f,l),f=J,l=Z.materialIndex)}),N=0}const w=r*3/i,W=new h.array.constructor(w);for(let _=0;_<w;_++)W[_]=t[_];return s&&f!==void 0&&l!==void 0&&n.addGroup(f,r*3/i/3-f,l),W}}static flat(e,o={}){if(!re(e))return e;const n=e.index!==null?e.toNonIndexed():e.clone(),u=new ce,g=de(n),d=n.attributes.position.count;g.forEach(c=>{const m=n.getAttribute(c);m&&u.setAttribute(c,L.flatAttribute(m,d,o))});const p=n.morphAttributes;for(const c in p){const m=[],z=p[c];for(let C=0,j=z.length;C<j;C++)z[C].count===d&&m.push(L.flatAttribute(z[C],d,o));u.morphAttributes[c]=m}return u.morphTargetsRelative=n.morphTargetsRelative,n.dispose(),u}static flatAttribute(e,o,n={}){const g=o*e.itemSize*4,d=new e.array.constructor(g);let p=0,c=e.itemSize;for(let m=0;m<o;m+=3)b.fromBufferAttribute(e,m+0),v.fromBufferAttribute(e,m+1),y.fromBufferAttribute(e,m+2),Q.copy(b).add(v).divideScalar(2),U.copy(v).add(y).divideScalar(2),X.copy(y).add(b).divideScalar(2),A(d,p,c,b,Q,X),p+=c*3,A(d,p,c,v,U,Q),p+=c*3,A(d,p,c,y,X,U),p+=c*3,A(d,p,c,Q,U,X),p+=c*3;return new ee(d,e.itemSize)}static smooth(e,o={}){if(typeof o!="object"&&(o={}),o.uvSmooth===void 0&&(o.uvSmooth=!1),o.preserveEdges===void 0&&(o.preserveEdges=!1),!re(e))return e;const n=e.index!==null?e.toNonIndexed():e.clone(),u=L.flat(n,o),g=new ce,d=de(n),p=n.attributes.position.count,c=n.getAttribute("position"),m=u.getAttribute("position"),z={},C={},j={},K={};function h(t,s,f){C[t]||(C[t]={}),C[t][s]||(C[t][s]=[]),C[t][s].push(f)}function $(t,s){j[t]||(j[t]=[]),j[t].push(s)}function T(t,s){K[t]||(K[t]=new Set),K[t].add(s)}for(let t=0;t<p;t+=3){const s=G(B[0].fromBufferAttribute(c,t+0)),f=G(B[1].fromBufferAttribute(c,t+1)),l=G(B[2].fromBufferAttribute(c,t+2));h(s,f,t+1),h(s,l,t+2),h(f,s,t+0),h(f,l,t+2),h(l,s,t+0),h(l,f,t+1),Q.copy(B[0]).add(B[1]).divideScalar(2),U.copy(B[1]).add(B[2]).divideScalar(2),X.copy(B[2]).add(B[0]).divideScalar(2);const r=G(Q),N=G(U),i=G(X);$(r,t+2),$(N,t+0),$(i,t+1),T(s,r),T(s,i),T(f,r),T(f,N),T(l,N),T(l,i)}for(let t=0;t<u.attributes.position.count;t++){const s=G(ae.fromBufferAttribute(m,t));z[s]||(z[s]=[]),z[s].push(t)}d.forEach(t=>{const s=n.getAttribute(t),f=u.getAttribute(t);if(s===void 0||f===void 0)return;const l=F(t,s,f);g.setAttribute(t,new ee(l,f.itemSize))});const k=n.morphAttributes;for(const t in k){const s=[],f=k[t];for(let l=0,r=f.length;l<r;l++){if(f[l].count!==p)continue;const N=f[l],i=L.flatAttribute(f[l],f[l].count,o),w=F(t,N,i);s.push(new ee(w,i.itemSize))}g.morphAttributes[t]=s}return g.morphTargetsRelative=n.morphTargetsRelative,u.dispose(),n.dispose(),g;function F(t,s,f){const l=u.attributes.position.count*f.itemSize,r=new s.array.constructor(l);let N=0;for(let i=0;i<u.attributes.position.count;i+=3){for(let w=0;w<3;w++)if(t==="uv"&&!o.uvSmooth)B[w].fromBufferAttribute(f,i+w);else if(t==="normal"){ie[w].fromBufferAttribute(m,i+w);const W=G(ie[w]),_=z[W],I=Object.keys(_).length,E=.75/I,O=1-E*I;B[w].fromBufferAttribute(f,i+w),B[w].multiplyScalar(O),_.forEach(D=>{R.fromBufferAttribute(f,D),R.multiplyScalar(E),B[w].add(R)})}else{B[w].fromBufferAttribute(f,i+w),ie[w].fromBufferAttribute(m,i+w);const W=G(ie[w]),_=C[W],I=j[W];if(_){if(o.preserveEdges){const P=K[W];let q=!0;for(const J of P)j[J].length%2!==0&&(q=!1);if(!q)continue}const E=Object.keys(_).length,O=1/E*(5/8-Math.pow(3/8+1/4*Math.cos(2*Math.PI/E),2)),D=1/E/E,H=We(D,O,o.weight),Y=1-H*E;B[w].multiplyScalar(Y);for(let P in _){const q=_[P];R.set(0,0,0);for(let J=0;J<q.length;J++)R.add(ae.fromBufferAttribute(s,q[J]));R.divideScalar(q.length),R.multiplyScalar(H),B[w].add(R)}}else if(I&&I.length===2){const E=I.length,O=.125,D=1-O*E;B[w].multiplyScalar(D),I.forEach(H=>{R.fromBufferAttribute(s,H),R.multiplyScalar(O),B[w].add(R)})}}A(r,N,f.itemSize,B[0],B[1],B[2]),N+=f.itemSize*3}return r}}}const _e=Math.pow(10,Oe);function Fe(a,e,o=1e-5){return a<e+o&&a>e-o}function ue(a,e=_e){let o=De(a*e);return o==0&&(o=0),"".concat(o)}function G(a,e=_e){return"".concat(ue(a.x,e),",").concat(ue(a.y,e),",").concat(ue(a.z,e))}function We(a,e,o){return(1-o)*a+o*e}function De(a){return a+(a>0?.5:-.5)<<0}function qe(a,e,o,n){ae.subVectors(e,o),a.subVectors(o,n),a.cross(ae).normalize()}function de(a){const e=["position","normal","uv"],o=Object.keys(a.attributes);return Array.from(new Set(e.concat(o)))}function A(a,e,o,n,u,g){o>=1&&(a[e+0+o*0]=n.x,a[e+0+o*1]=u.x,a[e+0+o*2]=g.x),o>=2&&(a[e+1+o*0]=n.y,a[e+1+o*1]=u.y,a[e+1+o*2]=g.y),o>=3&&(a[e+2+o*0]=n.z,a[e+2+o*1]=u.z,a[e+2+o*2]=g.z),o>=4&&(a[e+3+o*0]=n.w,a[e+3+o*1]=u.w,a[e+3+o*2]=g.w)}function re(a){return a===void 0?(console.warn("LoopSubdivision: Geometry provided is undefined"),!1):a.isBufferGeometry?a.attributes.position===void 0?(console.warn("LoopSubdivision: Geometry provided missing required 'position' attribute"),!1):(a.attributes.normal===void 0&&a.computeVertexNormals(),!0):(console.warn("LoopSubdivision: Geometry provided is not 'BufferGeometry' type"),!1)}const Je=["scale"],he=we({__name:"shineShader",props:{srcMesh:{},scale:{default:1.2},color:{default:"#ffff00"},subdivision:{type:Boolean,default:!0},c:{default:1.1},p:{default:1.4},side:{default:ge},blending:{default:pe}},setup(a){const e=a,o=se(),n={uniforms:{c:{type:"f",value:e.c},p:{type:"f",value:e.p},glowColor:{type:"c",value:new ve(e.color)},viewVector:{type:"v3",value:{x:0,y:0,z:0}}},vertexShader:"\n          uniform vec3 viewVector;\n          uniform float c;\n          uniform float p;\n          varying float intensity;\n          void main() {\n            vec3 vNormal = normalize( normalMatrix * normal);\n            vec3 vNormel = normalize( normalMatrix * viewVector);\n            intensity = pow( c - dot(vNormal, vNormel), p );\n            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0);\n          }\n            ",fragmentShader:"\n          uniform vec3 glowColor;\n          varying float intensity;\n          void main() \n          {\n          	vec3 glow = glowColor * intensity;\n						if(intensity < 1.0){\n            	gl_FragColor = vec4( glow, 1.0 );\n						}\n          }\n        ",side:e.side,transparent:!0,depthWrite:!1,depthTest:!0,blending:e.blending};Be(()=>{if(e.srcMesh&&!o.value.geometry.attributes.position){let d=e.srcMesh.geometry.clone();e.subdivision&&(d=L.modify(d,2)),o.value.geometry=d,o.value.position.copy(e.srcMesh.position)}e.color&&(n.uniforms.glowColor.value=new ve(e.color)),e.c&&(n.uniforms.c.value=e.c),e.p&&(n.uniforms.p.value=e.p)}),le(()=>e.subdivision,d=>{let p=e.srcMesh.geometry.clone();d&&(p=L.modify(p,2)),o.value.geometry=p}),le(()=>e.side,d=>{o.value.material.side=d}),le(()=>e.blending,d=>{o.value.material.blending=d});const{onLoop:u}=Te(),{camera:g}=xe();return u(()=>{g.value&&o.value&&(n.uniforms.viewVector.value=new M().subVectors(g.value.position,o.value.position))}),(d,p)=>(Ae(),Me("TresMesh",{ref_key:"TSGref",ref:o,scale:e.scale},[V("TresShaderMaterial",ze($e(n)),null,16)],8,Je))}}),Ke=V("TresPerspectiveCamera",{position:[5,5,5]},null,-1),Ye=V("TresAmbientLight",{intensity:1},null,-1),Qe=V("TresGridHelper",{args:[10,10]},null,-1),Ue=V("TresSphereGeometry",{args:[1,32,16]},null,-1),Xe=["map"],Ze=["map"],et=V("TresBoxGeometry",{args:[1,1,1,1,1]},null,-1),tt=V("TresMeshBasicMaterial",{color:"#0ff"},null,-1),ot=[et,tt],it=we({__name:"shader",async setup(a){let e,o;const n={clearColor:"#222"},u=se(),g=se(),d=se(),p=([e,o]=Ce(()=>je(["./plugins/earthSample/image/earthA/earth.jpg","logo.png"])),e=await e,o(),e),c=ke({scale:1.6,color:"#00dfff",subdivision:!0,c:1.1,p:1.4,side:ge,blending:pe}),m=new Ee({title:"参数",expanded:!0});return m.addBinding(c,"color",{label:"颜色"}),m.addBinding(c,"scale",{label:"大小",min:1,max:3,step:.2}),m.addBinding(c,"subdivision",{label:"边缘处理"}),m.addBinding(c,"c",{label:"c",min:0,max:2,step:.1}),m.addBinding(c,"p",{label:"p",min:0,max:8,step:.2}),m.addBinding(c,"side",{options:{FrontSide:ge,BackSide:Ge,DoubleSide:Ne}}),m.addBinding(c,"blending",{options:{AdditiveBlending:pe,NormalBlending:Ie}}),(z,C)=>(Ae(),Re(te(Ve),ne(n,{"window-size":""}),{default:ye(()=>[Ke,Ye,oe(te(Pe)),Qe,V("TresMesh",{ref_key:"TresMeshRefA",ref:u,position:[-2,1,0]},[Ue,V("TresMeshBasicMaterial",{map:te(p)[0]},null,8,Xe)],512),oe(he,ne({srcMesh:u.value},c),null,16,["srcMesh"]),oe(te(Le),{ref_key:"TreBoxRef",ref:d,args:[1,1,1],position:[2,1,0]},{default:ye(()=>[V("TresMeshBasicMaterial",{map:te(p)[1]},null,8,Ze)]),_:1},512),oe(he,ne({srcMesh:d.value&&d.value.value},c),null,16,["srcMesh"]),V("TresMesh",{ref_key:"TresMeshRefB",ref:g,position:[0,1,-2]},ot,512),oe(he,ne({srcMesh:g.value},c),null,16,["srcMesh"])]),_:1},16))}});export{it as default};