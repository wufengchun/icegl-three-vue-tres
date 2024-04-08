import{a0 as p,k as m,aj as S,a5 as x,o as T,c as M,X as e,E as k,a8 as U,aG as D,aw as E,r as R,v as G,D as N,a as _,K as V,ab as $}from"./vendor.dUBjHEtG1712557423713.js";import{R as F,E as h,S as L}from"./EffectComposer.5Aa6ATvp1712557423713.js";import{U as j}from"./UnrealBloomPass.Vqu0VzRV1712557423713.js";const z=e("TresBoxGeometry",{args:[1,1,1]},null,-1),A=e("TresMeshNormalMaterial",null,null,-1),H=[z,A],K=e("TresBoxGeometry",{args:[1,1,1]},null,-1),W=e("TresMeshNormalMaterial",null,null,-1),X=[K,W],q=p({__name:"ecLayerShaderPass",setup(w){const s=m(),r=m(),{camera:t,renderer:o,scene:f,sizes:u}=S(),d={strength:.572,radius:.51,threshold:0};let v=null,a=null,n=null;const g=(l,i,c,C,b)=>{v=new F(l,i);const B=new j(new D(C,b),d.strength,d.radius,d.threshold);a=new h(c),a.renderToScreen=!1,a.addPass(v),a.addPass(B)},P=l=>{n=new h(l);const i=new E({uniforms:{baseTexture:{value:null},bloomTexture:{value:a.renderTarget2.texture}},vertexShader:"\n            varying vec2 vUv;\n            void main() {\n                vUv = uv;\n                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n            }\n        ",fragmentShader:"\n            uniform sampler2D baseTexture;\n            uniform sampler2D bloomTexture;\n            varying vec2 vUv;\n            void main() {\n                gl_FragColor = ( vec4( 1.0 ) *texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );\n            }\n        ",defines:{}}),c=new L(i,"baseTexture");c.needsSwap=!0,n.addPass(v),n.addPass(c)};x(()=>{s.value&&s.value.layers.set(0),r.value&&r.value.layers.set(1),u.width.value&&(g(f.value,t.value,o.value,u.width.value,u.height.value),P(o.value))});const{onLoop:y}=U();return y(()=>{a&&n&&t.value&&(o.value.clear(),t.value.layers.set(1),a.render(),o.value.clearDepth(),t.value.layers.set(0),n.render(f.value,t.value))}),(l,i)=>(T(),M(k,null,[e("TresMesh",{ref_key:"normalBox",ref:s,position:[3,2,1]},H,512),e("TresMesh",{ref_key:"shineBox",ref:r,position:[0,2,-4]},X,512)],64))}}),I=e("TresPerspectiveCamera",{position:[10,10,10]},null,-1),J=e("TresAmbientLight",{intensity:1},null,-1),O=e("TresGridHelper",{args:[10,10]},null,-1),ee=p({__name:"effectComposerShaderPass",setup(w){const s=m();return x(()=>{if(s.value){let r=s.value.context.renderer.value;r.autoClear=!1}}),(r,t)=>{const o=R("TresCanvas");return T(),G(o,{disableRender:"","window-size":"",ref_key:"tcRef",ref:s},{default:N(()=>[I,J,_(V($)),O,_(q)]),_:1},512)}}});export{ee as default};
