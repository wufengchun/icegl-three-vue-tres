import{Z as n,$ as o,ag as i,o as s,c as r,a as e,C as m,D as p,a6 as l}from"./vendor.6862d6441704936894284.js";import{_}from"./heatmapJS.vue_vue_type_script_setup_true_lang.a18838be1704936894284.js";import{_ as c}from"./loading.vue_vue_type_script_setup_true_lang.4c5219091704936894284.js";import{_ as d}from"./pagesShow.vue_vue_type_script_setup_true_lang.d2f075331704936894284.js";import"./heatmap.314eea9b1704936894284.js";import"./_commonjsHelpers.725317a41704936894284.js";import"./vanilla-307d3a93.esm.19acf9c11704936894284.js";import"./LineSegments2.e2b263211704936894284.js";const P=n({__name:"heatmap",setup(f){const a=o({show2dCanvas:!0,heightRatio:20,position:[0,20,0],Plane:[1e3,1e3,1e3,1e3]}),t=new i({title:"参数",expanded:!0});return t.addBinding(a,"show2dCanvas",{label:"显示二维图"}),t.addBinding(a,"heightRatio",{label:"高度",min:10,max:100,step:10}),(h,u)=>(s(),r(p,null,[e(c),e(d,null,{ability:m(()=>[e(_,l({ref:"heatmapJSRef"},a),null,16)]),_:1})],64))}});export{P as default};