import{$ as k,k as _,an as g,ba as C,bm as R,aQ as v,bJ as x,a5 as B,a4 as E,o as f,c as p,E as G,G as M,W as h,K as u,b8 as S,aq as J}from"./vendor.C95Dv1yE1708749199107.js";import{l as L}from"./utils.FU7xmprh1708749199107.js";const F=["position","rotation-y","scale"],V={renderOrder:3e3},W=["args"],Y=["map","side","color"],y=6e4,A=k({__name:"roadLight",props:{geoJson:{},color:{default:"#ffff00"},position:{default:[1837.0641427711184,30,-457.0929823910632]},radius:{default:2},rotationY:{default:-.3866683251512052},scale:{default:1.5083171193254858},speed:{default:1}},async setup(w){let t,a;const e=w,b=_(),r=_(),{map:o}=([t,a]=g(()=>C({map:"./plugins/digitalCity/image/line.png"})),t=await t,a(),t);o.needsUpdate=!0,o.wrapS=o.wrapT=R,o.repeat.set(1,1);const d=([t,a]=g(()=>L(e.geoJson)),t=await t,a(),t),n=[-31.258949,0,-121.465782];let m=[];for(var c=0;c<d.length;c++){const l=d[c],i=[];l.geometry.coordinates.forEach(s=>{i.push(new v((s[1]+n[0])*y,n[1],(s[0]+n[2])*y))}),m.push(new x(i))}B(()=>{e.color&&r.value&&(r.value.color=new J(e.color))});const{onLoop:T}=E();return T(({delta:l})=>{o.offset.x-=Math.random()/20*e.speed}),(l,i)=>(f(),p("TresGroup",{ref_key:"tgRef",ref:b,position:e.position,"rotation-y":e.rotationY,scale:e.scale},[(f(!0),p(G,null,M(u(m),s=>(f(),p("TresMesh",V,[h("TresTubeGeometry",{args:[s,64,e.radius,20,!1]},null,8,W),h("TresMeshBasicMaterial",{ref_for:!0,ref_key:"tmbmRef",ref:r,map:u(o),side:u(S),transparent:!0,color:e.color},null,8,Y)]))),256))],8,F))}});export{A as _};