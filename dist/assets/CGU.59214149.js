import{r as c,R as e,aC as s,a as o,d as m,e as f,f as i,L as b,b as $}from"./index.ddcc5b51.js";import{f as x}from"./fetchJson.4eeca3e1.js";import{v as d}from"./v4.c3af96ce.js";import{$ as g}from"./module.349fbc97.js";const h=c.exports.memo(({titleCgu:t,version:n,lastUpdated:a})=>e.createElement(s,null,e.createElement(o,{level:5},t),e.createElement("br",null),e.createElement(o,{level:5},"VERSION : ",n),e.createElement("br",null),e.createElement(o,{level:5},"DERNIERE MISE A JOUR : ",a))),C=c.exports.memo(({section:t})=>{const{title:n,content:a}=c.exports.useMemo(()=>t,[t]);return e.createElement(s,{colorVersion:"6",backgroundColor:"purple-300",width:"100%",height:"100%",borderWidth:"thick",borderColor:"black",borderRadius:"medium",padding:"size-100",marginY:"size-200"},e.createElement(o,{level:3},n),e.createElement("br",null),a.map(r=>{const l=d();return e.createElement(m,{key:l},r)}))});function v(){const[t,n]=c.exports.useState({titleCgu:"",version:"",lastUpdated:"",sections:[]});return c.exports.useLayoutEffect(()=>{(async()=>{try{const r=await x("cgu.json"),{title_cgu:l,version:u,lastUpdated:E,sections:p}=r;n({titleCgu:l,version:u,lastUpdated:E,sections:p})}catch(r){console.error(r)}})()},[]),e.createElement(s,null,e.createElement(h,{...t}),t.sections.map(a=>{const r=d();return e.createElement(C,{key:r,section:a})}))}function S(){return e.createElement(e.Fragment,null,e.createElement(f,{width:{XS:"95%",S:"95%",M:"90%",L:"66%",XL:"66%",XXL:"66%"},margin:"auto"},e.createElement(g,{size:"M"},e.createElement(i,{key:"LastRelease"},e.createElement(b,{to:"/"},"Accueil")),e.createElement(i,{key:"CGU"},"Conditions G\xE9n\xE9rales d'Utilisation")),e.createElement(o,{level:1},"Conditions G\xE9n\xE9rales d'Utilisation"),e.createElement($,{size:"S",marginY:"size-100"}),e.createElement(m,null,"Notre \xE9quipe de d\xE9veloppeurs est propuls\xE9e par Euratechnologie."),e.createElement(v,null)))}export{S as default};
