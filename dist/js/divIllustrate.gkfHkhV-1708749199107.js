import{$ as i,a0 as c,k as v,r as h,o,v as l,D as a,W as t,a as e,H as g,t as w,a7 as p,K as n,al as d,c as x,am as y,E as T,a8 as C,ab as D,ag as m,a9 as S,aa as k}from"./vendor.C95Dv1yE1708749199107.js";import{_ as B}from"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.343zftN61708749199107.js";import{_ as F}from"./model.vue_vue_type_script_setup_true_lang.1BsBUuV91708749199107.js";import"./ReflectorMaterial.rmMeRsLE1708749199107.js";import"./dither.glsl.y2WXw1t-1708749199107.js";import"./OimoPhysicsBuffer.2hAOimcG1708749199107.js";const L=t("div",{class:"cStyle1 pos-relative text-white"},null,-1),P={class:"parallelogram"},b=t("span",null,"🔆 飞机螺旋桨",-1),z=i({__name:"illustratePropeller",setup(_){const s=c({wrapperClass:"illustrate1",as:"div",transform:!0,distanceFactor:120}),r=v(new Date().toLocaleString());return setInterval(()=>{r.value=new Date().toLocaleString()},1e3),(u,f)=>{const $=h("timeDiv");return o(),l(n(d),p(s,{position:[20,150,260],"rotation-y":-1}),{default:a(()=>[L,t("div",P,[b,e($,null,{default:a(()=>[g("📆: "+w(r.value),1)]),_:1})])]),_:1},16)}}}),E=t("div",{class:"cStyle1 pos-relative text-white"},null,-1),I={class:"parallelogram"},M=t("span",null,"🪃 飞机机翼",-1),N=i({__name:"illustrateWing",setup(_){const s=c({wrapperClass:"illustrate2",as:"div",sprite:!0,transform:!0,distanceFactor:120,center:!0});return(r,u)=>{const f=h("contentDiv");return o(),l(n(d),p(s,{position:[-110,180,60]}),{default:a(()=>[E,t("div",I,[M,e(f,null,{default:a(()=>[g("改善飞行的稳定性和操纵性")]),_:1})])]),_:1},16)}}}),R=t("div",{class:"card pos-relative text-white"},[t("div",{class:"glass"}),t("div",{class:"card-body"},[t("h1",null,"🚀 WJ5E涡桨发动机"),t("p",null," 中功率涡浆，功率2000千瓦，1992年已批量生产。 ")])],-1),V=i({__name:"illustrateTire",setup(_){const s=c({wrapperClass:"illustrateTire",as:"div",transform:!0,distanceFactor:120});return(r,u)=>(o(),l(n(d),p(s,{position:[-120,130,150]}),{default:a(()=>[R]),_:1},16))}}),W=t("div",{class:"card pos-relative text-white"},[t("div",{class:"glass"}),t("div",{class:"card-body"},[t("h1",null,"🛞 飞机轮胎"),t("p",null," 良好平衡的轮胎和机轮组件有助于提供无摆振操作，并减少刹车和起落架部件(如扭矩连杆)的磨损。 ")])],-1),G=t("TresBoxGeometry",{args:[106,58,6]},null,-1),H=i({__name:"illustrateTireMesh",setup(_){const s=c({wrapperClass:"illustrateTireMesh",as:"div",transform:!0,distanceFactor:120}),r=v(null);return(u,f)=>(o(),x(T,null,[e(n(d),p(s,{position:[180,30,150]}),{default:a(()=>[W]),_:1},16),t("TresMesh",{position:[180,31,150],ref_key:"glassRef",ref:r},[G,e(n(y))],512)],64))}}),A=t("TresPerspectiveCamera",{position:[-500,330,500],fov:50,near:.1,far:1e4},null,-1),J=t("TresAmbientLight",{color:"#ffffff",intensity:"1"},null,-1),K=t("TresDirectionalLight",{color:"#ffffff",position:[300,300,250],intensity:6},null,-1),Y=i({__name:"divIllustrate",setup(_){const s=c({reflectivity:.941,mirror:113.25,mixStrength:12,showGridHelper:!0,scale:100});return(r,u)=>(o(),l(n(C),{clearColor:"#333","window-size":""},{default:a(()=>[A,e(n(D)),J,K,(o(),l(m,null,{default:a(()=>[e(F)]),_:1})),(o(),l(m,null,{default:a(()=>[e(B,S(k(s)),null,16)]),_:1})),e(z),e(N),e(V),e(H)]),_:1}))}});export{Y as default};