import{b as e,an as C,aL as E,aq as z,ak as a,aK as p,r as n,aM as X,ar as k,as as b,aD as w,at as _}from"./index.91f1fc97.js";import{f as B}from"./fetchJson.4eeca3e1.js";import{$ as F}from"./module.cc104d52.js";function u({cardId:i,companyName:l,address:t,email:c,phone:m,linkedin:r,github:o}){const f=!r&&!o,s=r&&o;return e.createElement(C,{width:"100%",height:"100%",borderWidth:"thin",borderColor:"gray-400",colorVersion:"6",backgroundColor:"purple-400",borderRadius:"medium",padding:"size-300",key:i},e.createElement(E,{row:"1fr",marginTop:"size-100",marginBottom:"size-100",autoRows:{XS:["static-size-500"],S:["static-size-500"],M:["static-size-300"],L:["static-size-200"],XL:["static-size-200"],XXL:["static-size-400"]},gap:"size-200"},e.createElement(z,{level:3,position:"top",margintop:"size-50"},l),e.createElement("br",null),e.createElement(a,{fontSize:"size-400",color:"gray-600",marginBottom:"size-50"},t.street),e.createElement(a,{fontSize:"size-400",color:"gray-600",marginBottom:"size-50"},t.postal_code," ",t.city),e.createElement(a,{fontSize:"size-400",color:"gray-600",marginBottom:"size-50"},t.country),f&&e.createElement(e.Fragment,null,e.createElement(a,{fontSize:"size-400",color:"gray-600",marginBottom:"size-100"},e.createElement(p,null,e.createElement("a",{href:`mailto:${c}`,target:"_blank",rel:"noreferrer"},c))),e.createElement(a,{fontSize:"size-400",color:"gray-600"},m)),s&&e.createElement(e.Fragment,null,e.createElement(p,null,e.createElement("a",{href:r,target:"_blank",rel:"noreferrer"},"Linkedin")),e.createElement(p,null,e.createElement("a",{href:o,target:"_blank",rel:"noreferrer"},"GitHub")))))}function M(){const[i,l]=n.exports.useState(""),[t,c]=n.exports.useState(""),[m,r]=n.exports.useState(""),[o,f]=n.exports.useState("");let s=X();return n.exports.useLayoutEffect(()=>{(async()=>{try{const d=await B("contact.json"),{company_name:$,address:{street:g,city:y,postal_code:h,country:x},email:L,phone:S}=d;l($),c({street:g,city:y,postal_code:h,country:x}),r(L),f(S)}catch(d){console.error(d)}})()},[]),e.createElement(E,{columns:{XS:["1fr"],S:["1fr","1fr"],M:["1fr","1fr"],L:["1fr","1fr"],XL:["1fr","1fr"],XXL:["1fr","1fr","1fr"]},marginTop:"size-300",marginBottom:"size-300",gap:"size-200"},e.createElement(u,{cardId:s,companyName:i,address:t,email:m,phone:o}),e.createElement(u,{cardId:s,companyName:"Sylvain",address:{street:"Euratechnologie",city:"Lille",postal_code:"59000",country:"France"},linkedin:"https://www.linkedin.com/in/sylvain-d-2a7b8724b/",github:"https://github.com/br0wsa"}))}function D(){return e.createElement(e.Fragment,null,e.createElement(k,{width:{XS:"95%",S:"95%",M:"90%",L:"66%",XL:"66%",XXL:"66%"},margin:"auto"},e.createElement(F,{size:"M"},e.createElement(b,{key:"LastRelease"},e.createElement(w,{to:"/"},"Accueil")),e.createElement(b,{key:"Contact"},"Contact")),e.createElement(z,{level:1},"Contactez nous"),e.createElement(_,{size:"S",marginY:"size-100"}),e.createElement(a,null,"Contacter la team Cin\xE9File."),e.createElement(M,null)))}export{D as default};
