import{r as l,l as ee,n as ae,m as te,R as e,o as re,p as g,T as ce,f as U,q as le,d as c,ag as k,C as w,a as se,b as I,L as ne,e as oe}from"./index.32a60913.js";import{f as de}from"./fetchJson.3707984e.js";import{$ as i}from"./module.4bf1fcbc.js";import{$ as fe}from"./module.1c471631.js";function E(a){return a&&a.__esModule?a.default:a}function r(a,d,s,n){Object.defineProperty(a,d,{get:s,set:n,enumerable:!0,configurable:!0})}var t={};r(t,"spectrum-Badge",()=>x,a=>x=a);r(t,"spectrum-Badge-label",()=>v,a=>v=a);r(t,"spectrum-Badge-icon",()=>B,a=>B=a);r(t,"spectrum-Badge--large",()=>y,a=>y=a);r(t,"spectrum-Badge--small",()=>_,a=>_=a);r(t,"spectrum-Badge--neutral",()=>h,a=>h=a);r(t,"spectrum-Badge--negative",()=>S,a=>S=a);r(t,"spectrum-Badge--yellow",()=>A,a=>A=a);r(t,"spectrum-Badge--seafoam",()=>L,a=>L=a);r(t,"spectrum-Badge--positive",()=>N,a=>N=a);r(t,"spectrum-Badge--info",()=>P,a=>P=a);r(t,"spectrum-Badge--fuchsia",()=>X,a=>X=a);r(t,"spectrum-Badge--indigo",()=>R,a=>R=a);r(t,"spectrum-Badge--magenta",()=>z,a=>z=a);r(t,"spectrum-Badge--purple",()=>C,a=>C=a);var x,v,B,y,_,h,S,A,L,N,P,X,R,z,C;x="spectrum-Badge_a70f1a";v="spectrum-Badge-label_a70f1a";B="spectrum-Badge-icon_a70f1a";y="spectrum-Badge--large_a70f1a";_="spectrum-Badge--small_a70f1a";h="spectrum-Badge--neutral_a70f1a";S="spectrum-Badge--negative_a70f1a";A="spectrum-Badge--yellow_a70f1a";L="spectrum-Badge--seafoam_a70f1a";N="spectrum-Badge--positive_a70f1a";P="spectrum-Badge--info_a70f1a";X="spectrum-Badge--fuchsia_a70f1a";R="spectrum-Badge--indigo_a70f1a";z="spectrum-Badge--magenta_a70f1a";C="spectrum-Badge--purple_a70f1a";function pe(a,d){let{children:s,variant:n,...f}=ee(a),m=ae(d),{styleProps:p}=te(f),b=e.Children.toArray(a.children).every($=>!e.isValidElement($));return e.createElement("span",{...re(f),...p,role:"presentation",className:g(E(t),"spectrum-Badge",{[`spectrum-Badge--${n}`]:n},p.className),ref:m},e.createElement(ce,{slots:{icon:{size:"S",UNSAFE_className:g(E(t),"spectrum-Badge-icon")},text:{UNSAFE_className:g(E(t),"spectrum-Badge-label")}}},typeof s=="string"||b?e.createElement(U,null,s):s))}let T=l.exports.forwardRef(pe);function ie(){const[a,d]=l.exports.useState(""),[s,n]=l.exports.useState(""),[f,m]=l.exports.useState(""),[p,b]=l.exports.useState(""),[$,D]=l.exports.useState(""),[M,O]=l.exports.useState([]),[V,j]=l.exports.useState([]),[F,q]=l.exports.useState({source:"",bddlicence:""});return l.exports.useLayoutEffect(()=>{(async()=>{try{const u=await de("aPropos.json"),{nom:Y,description:G,version:H,url:J,licence:K,API:Q,technologies_utilis\u00E9es:W,fonctionnalit\u00E9s:Z}=u;d(Y),n(G),m(H),b(J),D(K),q(Q),O(W),j(Z)}catch(u){console.error(u)}})()},[]),e.createElement(le,null,e.createElement(i,{role:"information de l'application","aria-labelledby":"nom"},e.createElement(c,{level:5,id:"nom"},a),e.createElement("br",null),e.createElement(c,{level:6},"APP : ",s),e.createElement("br",null),e.createElement(c,{level:6},"VERSION : ",f),e.createElement("br",null),e.createElement(c,{level:6},"LICENCE : ",$),e.createElement("br",null),e.createElement(c,{level:6},"INCUBATEUR : ",e.createElement(k,null,p))),e.createElement(i,{role:"technologies","aria-labelledby":"technologies"},e.createElement(c,{level:5,id:"technologies"},"Technologies utilis\xE9es"),e.createElement(w,{columns:{XS:["1fr","1fr","1fr"],S:["1fr","1fr","1fr"],M:["1fr","1fr","1fr","1fr"],L:["1fr","1fr","1fr","1fr"],XL:["1fr","1fr","1fr","1fr"],XXL:["1fr","1fr","1fr","1fr"]},gap:"size-100"},M.map(o=>e.createElement(T,{variant:"info",key:o},o)))),e.createElement(i,{role:"api","aria-labelledby":"api"},e.createElement(c,{level:5,id:"api"},"API"),e.createElement("br",null),e.createElement(c,{level:6},e.createElement(k,null,F.source)),e.createElement("br",null),e.createElement(c,{level:6},F.bddlicence)),e.createElement(i,{role:"fonctionnalites","aria-labelledby":"fonctionnalites"},e.createElement(c,{level:5,id:"fonctionnalites"},"Fonctionnalit\xE9s"),e.createElement(w,{columns:"1fr",gap:"size-100"},V.map(o=>e.createElement(T,{variant:"purple",key:o},o)))))}function ge(){return e.createElement(e.Fragment,null,e.createElement(se,{width:{XS:"95%",S:"95%",M:"90%",L:"66%",XL:"66%",XXL:"66%"},margin:"auto"},e.createElement(fe,{size:"M"},e.createElement(I,{key:"LastRelease"},e.createElement(ne,{to:"/"},"Accueil")),e.createElement(I,{key:"Signup"},"A propos")),e.createElement(c,{level:1},"A propos"),e.createElement(oe,{size:"S",marginY:"size-100"}),e.createElement(U,null,"La team Cin\xE9File c'est des Devs propuls\xE9s par Euratechnologie"),e.createElement(ie,null)))}export{ge as default};
