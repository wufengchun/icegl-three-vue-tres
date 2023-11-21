import{Y as c,Z as l,aE as v,ah as f,a2 as p,a4 as u,o as m,s as g,B as h,a5 as _,I as a,a6 as x,U as e,a as T,a7 as i,a8 as r,a9 as y}from"./vendor-71388792.js";const j={ref:"perspectiveCameraRef",position:[600,750,-1221],fov:45,near:1,far:1e4},V=e("TresAmbientLight",{color:"#ffffff"},null,-1),B=e("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),D=["rotation-x"],M=e("TresPlaneGeometry",{args:[400,400]},null,-1),k=e("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),P=e("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),z="\nuniform float uTime;\nvarying  vec2 vUv;\nvoid main(){\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n }\n",C="\nvarying vec2 vUv;\nuniform float uTime;\nstruct VoronoiData {\n    float dist;\n    float edgedist;\n    vec2 edgenormal;\n    vec2 point;\n};\n\nvec2 hash22(vec2 p)\n{\n	vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yzx+33.33);\n    return fract((p3.xx+p3.yz)*p3.zy);\n}\nVoronoiData voronoi2dedges(vec2 uv){\n    vec2 n = floor(uv);\n    vec2 f = fract(uv);\n\n	vec2 mg, mr;\n\n    float md = 8.0;\n    for(int j=-1; j<=1; j++)\n    for(int i=-1; i<=1; i++){\n        vec2 g = vec2(i,j);\n		vec2 o = hash22(n + g);\n        vec2 r = g + o - f;\n        float d = dot(r, r);\n\n        if(d < md){\n            md = d;\n            mr = g + o;\n        }\n    }\n\n    float med = 8.0;\n    vec2 men = vec2(0);\n    for(int j=-2; j<=2; j++)\n    for(int i=-2; i<=2; i++){\n        vec2 g = vec2(i,j);\n		g += hash22(n + g);\n        vec2 k = g - mr;\n\n        float d = dot(k, k);\n        if(d > 0.0){\n            float l = dot(g + mr - 2.0*f, k)*0.5/sqrt(d);\n            if (l < med){\n                men = k;\n                med = l;\n            }\n        }\n    }\n    return VoronoiData(md, med, normalize(men), mr + n);\n}\n\nvoid main(){\n    vec2 uv=vUv*10.+vec2(0.,uTime);\n    vec2 p = voronoi2dedges(uv).point;\n    VoronoiData v;\n    for (int i = 0; i < 32; i++){\n        VoronoiData v = voronoi2dedges(p);\n        p += -v.edgenormal*0.2/float(i + 1);\n    }\n    gl_FragColor = vec4(\n        smoothstep(0.0,0.1,distance(uv,p))*\n        smoothstep(0.0,0.01,voronoi2dedges(uv).edgedist)*\n        smoothstep(0.0,0.01,abs(distance(uv,p)-voronoi2dedges(p).edgedist))\n    );\n}\n",S=c({__name:"argestCircle",props:{showBuildings:{type:Boolean,default:!0},autoRotate:{type:Boolean,default:!0}},setup(s){const n=l({autoRotate:s.autoRotate,enableDamping:!0}),t={uniforms:{uTime:{type:"f",value:0}},vertexShader:z,fragmentShader:C,side:v,blending:f,depthWrite:!1},{onLoop:d}=p();return d(({delta:o})=>{t.uniforms.uTime.value+=o}),u(()=>{}),(o,b)=>(m(),g(a(x),_(o.state,{"window-size":""}),{default:h(()=>[e("TresPerspectiveCamera",j,null,512),T(a(y),i(r(n)),null,16),V,B,e("TresMesh",{ref:"quanMeshRef",position:[0,100,0],"rotation-x":2*Math.PI/360*90},[M,e("TresShaderMaterial",i(r(t)),null,16)],8,D),k,P]),_:1},16))}});export{S as default};
