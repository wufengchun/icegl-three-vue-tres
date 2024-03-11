var Et=Object.defineProperty,Xt=Object.defineProperties;var Ot=Object.getOwnPropertyDescriptors;var lt=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable;var Q=(X,P,O)=>P in X?Et(X,P,{enumerable:!0,configurable:!0,writable:!0,value:O}):X[P]=O,ht=(X,P)=>{for(var O in P||(P={}))kt.call(P,O)&&Q(X,O,P[O]);if(lt)for(var O of lt(P))Ct.call(P,O)&&Q(X,O,P[O]);return X},ft=(X,P)=>Xt(X,Ot(P));var B=(X,P,O)=>(Q(X,typeof P!="symbol"?P+"":P,O),O);(function(){"use strict";const $=class ${constructor(){B(this,"_controller",new AbortController);B(this,"listeners",new Set)}fetch(t,n={}){$.pendings.has(t)||($.pendings.set(t,this),fetch(t,ft(ht({},n),{signal:this._controller.signal})).then(e=>{this.listeners.forEach(o=>o.resolve(e.clone()))}).catch(e=>{this.listeners.forEach(o=>o.reject(e))}).finally(()=>{$.pendings.delete(t)}))}abort(){this._controller.abort()}};B($,"pendings",new Map);let X=$;class P{constructor(t,n){B(this,"resolve");B(this,"reject");B(this,"promise");this.url=t,this.init=n,this.promise=new Promise((e,o)=>{this.resolve=e,this.reject=o})}ready(){let t=X.pendings.get(this.url);return t||(t=new X,t.fetch(this.url,this.init)),t.listeners.add(this),this.promise}abort(){this.reject("User abort.");const t=X.pendings.get(this.url);t&&(t.listeners.delete(this),t.listeners.size===0&&t.abort())}}class O{constructor(t=257){B(this,"gridSize");B(this,"numTriangles");B(this,"numParentTriangles");B(this,"indices");B(this,"coords");this.gridSize=t;const n=t-1;if(n&n-1)throw new Error("Expected grid size to be 2^n+1, got ".concat(t,"."));this.numTriangles=n*n*2-2,this.numParentTriangles=this.numTriangles-n*n,this.indices=new Uint32Array(this.gridSize*this.gridSize),this.coords=new Uint16Array(this.numTriangles*4);for(let e=0;e<this.numTriangles;e++){let o=e+2,r=0,a=0,i=0,c=0,h=0,f=0;for(o&1?i=c=h=n:r=a=f=n;(o>>=1)>1;){const u=r+i>>1,M=a+c>>1;o&1?(i=r,c=a,r=h,a=f):(r=i,a=c,i=h,c=f),h=u,f=M}const g=e*4;this.coords[g+0]=r,this.coords[g+1]=a,this.coords[g+2]=i,this.coords[g+3]=c}}createTile(t){return new ut(t,this)}}class ut{constructor(t,n){B(this,"terrain");B(this,"martini");B(this,"errors");const e=n.gridSize;if(t.length!==e*e)throw new Error("Expected terrain data of length ".concat(e*e," (").concat(e," x ").concat(e,"), got ").concat(t.length,"."));this.terrain=t,this.martini=n,this.errors=new Float32Array(t.length),this.update()}update(){const{numTriangles:t,numParentTriangles:n,coords:e,gridSize:o}=this.martini,{terrain:r,errors:a}=this;for(let i=t-1;i>=0;i--){const c=i*4,h=e[c+0],f=e[c+1],g=e[c+2],u=e[c+3],M=h+g>>1,p=f+u>>1,v=M+p-f,w=p+h-M,S=(r[f*o+h]+r[u*o+g])/2,l=p*o+M,b=Math.abs(S-r[l]);if(a[l]=Math.max(a[l],b),i<n){const d=(f+w>>1)*o+(h+v>>1),A=(u+w>>1)*o+(g+v>>1);a[l]=Math.max(a[l],a[d],a[A])}}}getMesh(t=0){const{gridSize:n,indices:e}=this.martini,{errors:o}=this;let r=0,a=0;const i=n-1;e.fill(0);function c(M,p,v,w,S,l){const b=M+v>>1,d=p+w>>1;Math.abs(M-S)+Math.abs(p-l)>1&&o[d*n+b]>t?(c(S,l,M,p,b,d),c(v,w,S,l,b,d)):(e[p*n+M]=e[p*n+M]||++r,e[w*n+v]=e[w*n+v]||++r,e[l*n+S]=e[l*n+S]||++r,a++)}c(0,0,i,i,i,0),c(i,i,0,0,0,i);const h=new Uint16Array(r*2),f=new Uint32Array(a*3);let g=0;function u(M,p,v,w,S,l){const b=M+v>>1,d=p+w>>1;if(Math.abs(M-S)+Math.abs(p-l)>1&&o[d*n+b]>t)u(S,l,M,p,b,d),u(v,w,S,l,b,d);else{const A=e[p*n+M]-1,E=e[w*n+v]-1,k=e[l*n+S]-1;h[2*A]=M,h[2*A+1]=p,h[2*E]=v,h[2*E+1]=w,h[2*k]=S,h[2*k+1]=l,f[g++]=A,f[g++]=E,f[g++]=k}}return u(0,0,i,i,i,0),u(i,i,0,0,0,i),{vertices:h,triangles:f}}getMeshWithSkirts(t=0){const{gridSize:n,indices:e}=this.martini,{errors:o}=this;let r=0,a=0;const i=n-1;let c,h,f=0,g=[],u=[],M=[],p=[];e.fill(0);function v(m,T,I,z,C,D){const U=m+I>>1,q=T+z>>1;Math.abs(m-C)+Math.abs(T-D)>1&&o[q*n+U]>t?(v(C,D,m,T,U,q),v(I,z,C,D,U,q)):(c=T*n+m,h=z*n+I,f=D*n+C,e[c]===0&&(m===0?g.push(r):m===i&&u.push(r),T===0?M.push(r):T===i&&p.push(r),e[c]=++r),e[h]===0&&(I===0?g.push(r):I===i&&u.push(r),z===0?M.push(r):z===i&&p.push(r),e[h]=++r),e[f]===0&&(C===0?g.push(r):C===i&&u.push(r),D===0?M.push(r):D===i&&p.push(r),e[f]=++r),a++)}v(0,0,i,i,i,0),v(i,i,0,0,0,i);const w=(r+g.length+u.length+M.length+p.length)*2,S=(a+(g.length-1)*2+(u.length-1)*2+(M.length-1)*2+(p.length-1)*2)*3,l=new Uint16Array(w),b=new Uint32Array(S);let d=0;function A(m,T,I,z,C,D){const U=m+I>>1,q=T+z>>1;if(Math.abs(m-C)+Math.abs(T-D)>1&&o[q*n+U]>t)A(C,D,m,T,U,q),A(I,z,C,D,U,q);else{const _=e[T*n+m]-1,J=e[z*n+I]-1,N=e[D*n+C]-1;l[2*_]=m,l[2*_+1]=T,l[2*J]=I,l[2*J+1]=z,l[2*N]=C,l[2*N+1]=D,b[d++]=_,b[d++]=J,b[d++]=N}}A(0,0,i,i,i,0),A(i,i,0,0,0,i),g.sort((m,T)=>l[2*m+1]-l[2*T+1]),u.sort((m,T)=>l[2*T+1]-l[2*m+1]),M.sort((m,T)=>l[2*T]-l[2*m]),p.sort((m,T)=>l[2*m]-l[2*T]);let E=r*2,k,W,G,R,x=0;function j(m){x=m.length;for(var T=0;T<x-1;T++)k=m[T],W=m[T+1],G=E/2,R=(E+2)/2,l[E++]=l[2*k],l[E++]=l[2*k+1],b[d++]=k,b[d++]=G,b[d++]=W,b[d++]=G,b[d++]=R,b[d++]=W;l[E++]=l[2*m[x-1]],l[E++]=l[2*m[x-1]+1]}return j(g),j(u),j(M),j(p),{vertices:l,triangles:b,numVerticesWithoutSkirts:r}}}var gt=Math.PI/180,dt=180/Math.PI;function Z(s){var t=K(s[0]+1,s[2]),n=K(s[0],s[2]),e=Y(s[1]+1,s[2]),o=Y(s[1],s[2]);return[n,e,t,o]}function Mt(s){var t=Z(s),n={type:"Polygon",coordinates:[[[t[0],t[3]],[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]]]]};return n}function K(s,t){return s/Math.pow(2,t)*360-180}function Y(s,t){var n=Math.PI-2*Math.PI*s/Math.pow(2,t);return dt*Math.atan(.5*(Math.exp(n)-Math.exp(-n)))}function H(s,t,n){var e=it(s,t,n);return e[0]=Math.floor(e[0]),e[1]=Math.floor(e[1]),e}function tt(s){return[[s[0]*2,s[1]*2,s[2]+1],[s[0]*2+1,s[1]*2,s[2]+1],[s[0]*2+1,s[1]*2+1,s[2]+1],[s[0]*2,s[1]*2+1,s[2]+1]]}function et(s){return[s[0]>>1,s[1]>>1,s[2]-1]}function nt(s){return tt(et(s))}function pt(s,t){for(var n=nt(s),e=0;e<n.length;e++)if(!rt(t,n[e]))return!1;return!0}function rt(s,t){for(var n=0;n<s.length;n++)if(st(s[n],t))return!0;return!1}function st(s,t){return s[0]===t[0]&&s[1]===t[1]&&s[2]===t[2]}function mt(s){for(var t="",n=s[2];n>0;n--){var e=0,o=1<<n-1;s[0]&o&&e++,s[1]&o&&(e+=2),t+=e.toString()}return t}function Tt(s){for(var t=0,n=0,e=s.length,o=e;o>0;o--){var r=1<<o-1,a=+s[e-o];a===1&&(t|=r),a===2&&(n|=r),a===3&&(t|=r,n|=r)}return[t,n,e]}function vt(s){var t=H(s[0],s[1],32),n=H(s[2],s[3],32),e=[t[0],t[1],n[0],n[1]],o=wt(e);if(o===0)return[0,0,0];var r=e[0]>>>32-o,a=e[1]>>>32-o;return[r,a,o]}function wt(s){for(var t=28,n=0;n<t;n++){var e=1<<32-(n+1);if((s[0]&e)!==(s[2]&e)||(s[1]&e)!==(s[3]&e))return n}return t}function it(s,t,n){var e=Math.sin(t*gt),o=Math.pow(2,n),r=o*(s/360+.5),a=o*(.5-.25*Math.log((1+e)/(1-e))/Math.PI);return r=r%o,r<0&&(r=r+o),[r,a,n]}var L={tileToGeoJSON:Mt,tileToBBOX:Z,getChildren:tt,getParent:et,getSiblings:nt,hasTile:rt,hasSiblings:pt,tilesEqual:st,tileToQuadkey:mt,quadkeyToTile:Tt,pointToTile:H,bboxToTile:vt,pointToTileFraction:it};const ot="merc",at=6378137,ct=Math.PI/180;function St(s,t){const n=at*s*ct,e=at*Math.log(Math.tan(Math.PI*.25+t*ct*.5));return[n,e]}function F(s){return s*Math.PI/180}const bt={a:6378137,b:6356752314245e-6,f:1/298.257223563},It="CDEFGHJKLMNPQRSTUVWXX",Bt=5e5,Pt=1e7;function At(s,t,n){if(!(-80<=t&&t<=84))throw new RangeError("latitude ‘".concat(t,"’ outside UTM limits"));let e=n||Math.floor((s+180)/6)+1,o=F((e-1)*6-180+3);const r=It.charAt(Math.floor(t/8+10));e===31&&r==="V"&&s>=3?(e++,o+=F(6)):e===32&&r==="X"&&s<9?(e--,o-=F(6)):e===32&&r==="X"&&s>=9?(e++,o+=F(6)):e===34&&r==="X"&&s<21?(e--,o-=F(6)):e===34&&r==="X"&&s>=21?(e++,o+=F(6)):e===36&&r==="X"&&s<33?(e--,o-=F(6)):e===36&&r==="X"&&s>=33&&(e++,o+=F(6));const a=F(t),i=F(s)-o,{a:c,f:h}=bt,f=.9996,g=Math.sqrt(h*(2-h)),u=h/(2-h),M=u*u,p=u*M,v=u*p,w=u*v,S=u*w,l=Math.cos(i),b=Math.sin(i),d=Math.tan(a),A=Math.sinh(g*Math.atanh(g*d/Math.sqrt(1+d*d))),E=d*Math.sqrt(1+A*A)-A*Math.sqrt(1+d*d),k=Math.atan2(E,l),W=Math.asinh(b/Math.sqrt(E*E+l*l)),G=c/(1+u)*(1+1/4*M+1/64*v+1/256*S),R=[null,1/2*u-2/3*M+5/16*p+41/180*v-127/288*w+7891/37800*S,13/48*M-3/5*p+557/1440*v+281/630*w-1983433/1935360*S,61/240*p-103/140*v+15061/26880*w+167603/181440*S,49561/161280*v-179/168*w+6601661/7257600*S,34729/80640*w-3418889/1995840*S,212378941/319334400*S];let x=k;for(let I=1;I<=6;I++)x+=R[I]*Math.sin(2*I*k)*Math.cosh(2*I*W);let j=W;for(let I=1;I<=6;I++)j+=R[I]*Math.cos(2*I*k)*Math.sinh(2*I*W);let m=f*G*j,T=f*G*x;return m=m+Bt,T<0&&(T=T+Pt),[m,T]}class y{static getFromBitmap(t,n=256){this.offscreencanvas||(this.offscreencanvas=new OffscreenCanvas(512,512));const e=this.offscreencanvas.getContext("2d");if(!e)throw new Error("Get context 2d error.");e.drawImage(t,0,0,n,n);const o=e.getImageData(0,0,n,n).data,r=n+1,a=new Float32Array(r*r);for(let i=0;i<n;i++)for(let c=0;c<n;c++){const h=(i*n+c)*4,f=o[h+0],g=o[h+1],u=o[h+2];a[i*r+c]=(f*256*256+g*256+u)/10-1e4}for(let i=0;i<r-1;i++)a[r*(r-1)+i]=a[r*(r-2)+i];for(let i=0;i<r;i++)a[r*i+r-1]=a[r*i+r-2];return a}static clip(t,n,e,o,r){if(e+r>n+1||o+r>n+1)throw console.log("clip: ",e,o,r),new RangeError("Clip terrain error");const a=r+1,i=n+1,c=new Float32Array(a*a);for(let h=0;h<a;h++)for(let f=0;f<a;f++)c[h*a+f]=t[(h+o)*i+(f+e)];return c}static getChildPosition(t,n,e){const o=L.tileToBBOX(t),r=L.tileToBBOX(e),a=o[2]-o[0],i=o[3]-o[1],c=(r[0]-o[0])/a,h=(o[3]-r[3])/i,f=Math.round(c*n),g=Math.round(h*n);return{x:f,y:g,bigBbox:o,smallBbox:r}}}B(y,"offscreencanvas");class V{static getMartini(t){let n=this.martiniMap.get(t);return n||(n=new O(t+1),this.martiniMap.set(t,n)),n}static findAncestorTerrainData(t,n){const e=t[2];let o,r=t;const a=e>=n?e-n:5;for(let i=0;i<a;i++){r=L.getParent(r);const c=this.terrainDataMap.get(r.join("-"));if(c){o=c;break}}return{terrain:o,tileNo:r}}static async getTerrainData(t,n,e){const o=t.join("-"),{baseSize:r}=this,{terrain:a,tileNo:i}=this.findAncestorTerrainData(t,e);if(a){let h=t[2]-i[2],f=this.baseSize;for(;h>0;)f=f/2,h--;const{x:g,y:u,smallBbox:M}=y.getChildPosition(i,r,t);return{terrain:y.clip(a,r,g,u,f),size:f,bbox:M}}const c=new P(n,{cache:"force-cache"});this.fetchingMap.set(o,c);try{const f=await(await c.ready()).blob(),g=await createImageBitmap(f),u=y.getFromBitmap(g,r);return this.terrainDataMap.set(o,u),{terrain:u,size:r,bbox:L.tileToBBOX(t)}}finally{this.fetchingMap.delete(o)}}static async getTileGeometryAttributes(t,n,e,o=ot,r){const{terrain:a,size:i,bbox:c}=await this.getTerrainData(t,n,e),f=this.getMartini(i).createTile(a),{vertices:g,triangles:u,numVerticesWithoutSkirts:M}=f.getMeshWithSkirts(10),p=g.length/2,v=new Float32Array(p*3),w=new Float32Array(p*2),S=t[2],l=i+1,b=o===ot?St:At;for(let d=0;d<p;d++){const A=g[2*d],E=g[2*d+1],k=E*l+A,W=(c[2]-c[0])*A/i+c[0],G=(c[3]-c[1])*(i-E)/i+c[1],[R,x]=b(W,G,r),j=a[k],m=(21-S)*10;v[3*d]=R,v[3*d+1]=x,v[3*d+2]=d>=M?j-m:j,w[2*d+0]=A/i,w[2*d+1]=(i-E)/i}return{positions:v,uv:w,triangles:u}}}B(V,"terrainDataMap",new Map),B(V,"fetchingMap",new Map),B(V,"martiniMap",new Map),B(V,"baseSize",512),self.onmessage=async s=>{var h;const{id:t,tileNo:n,maxZ:e,url:o,coordType:r,utmZone:a,abort:i,dispose:c}=s.data;if(i){(h=V.fetchingMap.get(t))==null||h.abort(),V.fetchingMap.delete(t),self.postMessage({id:t,error:!0});return}if(c){V.terrainDataMap.delete(t);return}try{const{positions:f,uv:g,triangles:u}=await V.getTileGeometryAttributes(n,o,e,r,a),M=[f.buffer,g.buffer,u.buffer];self.postMessage({id:t,positions:f,uv:g,triangles:u},M)}finally{V.fetchingMap.delete(t)}}})();