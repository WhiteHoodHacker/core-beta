import{m as i,b as p,f}from"./vendor.52debd16.js";import"./index.4c3687bd.js";import{c as h}from"./math.4d82e9ba.js";function g(e,t){return{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:e,data:{values:t},mark:"line",width:"container",encoding:{x:{field:"date",type:"temporal"},y:{field:"score",type:"quantitative"},color:{field:"name",type:"nominal",legend:{orient:"bottom"}}}}}function v(e){const t=Object.keys(e);let s=[];for(let n=0;n<t.length;n++){const o=e[t[n]],l=[],c=[];for(let a=0;a<o.solves.length;a++)l.push(o.solves[a].value),c.push(o.solves[a].date);const r=h(l),m=o.name;let d=c.map(function(a,u){return{name:m,score:r[u],date:a}});s=s.concat(d)}return s}window.Alpine=i;i.data("ScoreboardDetail",()=>({data:null,async init(){this.data=await p.pages.scoreboard.getScoreboardDetail(10);let e=v(this.data),t=g("Top 10",e);f(this.$refs.scoregraph,t)}}));i.start();
