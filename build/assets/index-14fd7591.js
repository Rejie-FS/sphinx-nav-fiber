import{Y as g,Z as y,j as e,X as a,r as n,a0 as w}from"./index-f2d3050f.js";import{u as S,az as v,bO as d,aS as E,cu as T,cw as C,ca as b}from"./index-884d3342.js";import{S as z}from"./Skeleton-bc17fd61.js";const B=()=>e.jsx(a,{children:e.jsx(a,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(a,{align:"center",direction:"row",children:e.jsx(L,{children:"Remove node"})})})}),L=g(y)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,R=()=>{const{close:m}=S("removeNode"),[i,c]=n.useState(!1),[f,l]=n.useState(!1),[s,u]=n.useState(),o=v(),x=()=>{m()};n.useEffect(()=>{(async()=>{if(o){l(!0);try{const{data:r}=await T({search:o==null?void 0:o.name}),p=r.find(h=>h.topic===o.name);u(p)}catch(r){console.log(r)}finally{l(!1)}}})()},[o]);const j=async()=>{if(s!=null&&s.ref_id){c(!0);try{const t=await C(s.ref_id);console.log(t),console.log("remove")}catch(t){console.log(t),console.warn(t)}finally{c(!1)}}};return e.jsxs(e.Fragment,{children:[e.jsx(B,{}),f?e.jsx(z,{}):e.jsxs(a,{direction:"row",justify:"space-between",children:[e.jsx(d,{color:"secondary",onClick:x,size:"medium",variant:"outlined",children:"Cancel"}),e.jsxs(d,{disabled:i||!s,onClick:j,size:"medium",variant:"text",children:["Confirm",i&&e.jsx(E,{color:w.BLUE_PRESS_STATE,size:10})]})]})]})},M=()=>e.jsx(b,{id:"removeNode",kind:"small",preventOutsideClose:!0,children:e.jsx(R,{})});export{M as RemoveNodeModal};