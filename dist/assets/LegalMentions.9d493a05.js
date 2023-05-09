import{r,w as v,b as e,aq as t,aK as u,an as L,ar as h,as as d,aD as S,at as y,ak as H}from"./index.91f1fc97.js";import{f as M}from"./fetchJson.4eeca3e1.js";import{$ as i}from"./module.4aa58496.js";import{$ as _}from"./module.cc104d52.js";const k=r.exports.memo(({legalData:a})=>{const l=v(),{nom:s,telephone:c,email:n,directeur:m}=r.exports.useMemo(()=>a,[a]);return e.createElement(i,{role:"information l\xE9gales","aria-labelledby":l},e.createElement(t,{level:5,id:l},"CONTACT : ",s),e.createElement(t,{level:6},c),e.createElement(t,{level:6},e.createElement(u,null,e.createElement("a",{href:`mailto:${n}`,target:"_blank",rel:"noreferrer"},n))),e.createElement(t,{level:6},"Directeur de la publication : ",m))}),D=r.exports.memo(({siege:a})=>{const{adresse:l,code_postal:s,ville:c,pays:n}=r.exports.useMemo(()=>a,[a]);return e.createElement(i,{role:"adresse"},e.createElement(t,{level:5},"ADRESSE"),e.createElement(t,{level:6},l),e.createElement(t,{level:6},s," ",c),e.createElement(t,{level:6},n))}),R=r.exports.memo(({hebergeur:a})=>{const{raison_sociale:l,adresse:s,code_postal:c,ville:n,pays:m,telephone:E,email:o}=r.exports.useMemo(()=>a,[a]);return e.createElement(i,{role:"hebergeur"},e.createElement(t,{level:5},"HEBERGEUR : ",l),e.createElement(t,{level:6},s),e.createElement(t,{level:6},c," ",n),e.createElement(t,{level:6},m),e.createElement(t,{level:6},E),e.createElement(t,{level:6},e.createElement(u,null,e.createElement("a",{href:`mailto:${o}`,target:"_blank",rel:"noreferrer"},o))))});function A(){const[a,l]=r.exports.useState({nom:"",telephone:"",email:"",directeur:""}),[s,c]=r.exports.useState({}),[n,m]=r.exports.useState({});return r.exports.useLayoutEffect(()=>{(async()=>{try{const o=await M("mentionsLegales.json"),{nom:p,siege_social:f,telephone:b,email:g,directeur_publication:$,hebergeur:x}=o;l({nom:p,telephone:b,email:g,directeur:$}),c(f),m(x)}catch(o){console.error(o)}})()},[]),e.createElement(L,null,e.createElement(k,{legalData:a}),e.createElement(D,{siege:s}),e.createElement(R,{hebergeur:n}))}function F(){return e.createElement(e.Fragment,null,e.createElement(h,{width:{XS:"95%",S:"95%",M:"90%",L:"66%",XL:"66%",XXL:"66%"},margin:"auto"},e.createElement(_,{size:"M"},e.createElement(d,{key:"LastRelease"},e.createElement(S,{to:"/"},"Accueil")),e.createElement(d,{key:"LegalMentions"},"Les mentions l\xE9gales")),e.createElement(t,{level:1},"Mentions l\xE9gales"),e.createElement(y,{size:"S",marginY:"size-100"}),e.createElement(H,null,"Ce site est \xE9dit\xE9 par Cin\xE9File."),e.createElement(A,null)))}export{F as default};
