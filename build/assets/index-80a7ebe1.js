<<<<<<<< HEAD:build/assets/index-4ebdfd9b.js
import{s as i,b as a,T as N,j as e,F as t,h as k,r}from"./index-b8438aeb.js";import{B as z}from"./index-5420377a.js";import{u as m}from"./index-2c90db24.js";import{o as F,N as M,F as A,B as w,C as I,m as V,r as _}from"./react-toastify.esm-125e2a3d.js";import{u as $}from"./index-154a3b27.js";import{T as P}from"./index-380dad01.js";import{S as q}from"./Skeleton-47fbba20.js";import"./index.esm-9ab4737c.js";import"./InfoIcon-3857a815.js";const G=()=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(H,{children:"Edit Node"})})}),e.jsxs(t,{mb:36,children:[e.jsx(O,{style:{marginBottom:8},children:"Node Name"}),e.jsx(P,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...k}})]})]}),H=i(N)`
========
import{s as i,b as r,T as w,j as e,F as t,h as k,r as a}from"./index-3638940b.js";import{B as z}from"./index-5c254ae2.js";import{u as m}from"./index-f5d6928d.js";import{q as F,O as M,F as A,B as N,C as I,n as V,t as _}from"./react-toastify.esm-885db80e.js";import{u as $}from"./index-7f73ce3c.js";import{T as q}from"./index-a5de62c3.js";import{S as O}from"./Skeleton-34bfbb7a.js";import"./index.esm-8c22296c.js";import"./InfoIcon-697d06d1.js";const P=()=>e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(G,{children:"Edit Node"})})}),e.jsxs(t,{mb:36,children:[e.jsx(H,{style:{marginBottom:8},children:"Node Name"}),e.jsx(q,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...k}})]})]}),G=i(w)`
>>>>>>>> fc7e1949f4075d3ee2f2600735b6b2b045e7e5de:build/assets/index-80a7ebe1.js
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,H=i(w)`
  color: ${r.GRAY6};
  font-family: 'Barlow';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,U=()=>{const{close:c}=m("editNodeName"),[p]=$(n=>[n.data]),f=F({mode:"onChange"}),{watch:S,setValue:x,reset:h,getValues:u}=f,[g,y]=a.useState(!1),[l,j]=a.useState(!1),[o,b]=a.useState(),s=M(),{open:T}=m("removeNode");a.useEffect(()=>(o&&x("topic",o==null?void 0:o.topic),()=>{h()}),[o,x,h]),a.useEffect(()=>{(async()=>{if(s){j(!0);try{const{data:d}=await V({search:s==null?void 0:s.name}),D=d.find(L=>L.topic===s.name);b(D)}catch(d){console.log(d)}finally{j(!1)}}})()},[s]);const v=S("topic"),B=()=>{c()},E=async()=>{y(!0);try{if(await _((o==null?void 0:o.ref_id)||"",{topic:v.trim()}),p){const n={...p};console.log(n)}B()}catch(n){console.warn(n)}finally{y(!1)}},C=async()=>{T()},R=u().topic&&(o==null?void 0:o.topic)!==u().topic;return e.jsx(W,{children:e.jsxs(A,{...f,children:[l?e.jsx(t,{my:24,children:e.jsx(O,{})}):e.jsx(P,{}),e.jsxs(t,{direction:"row",mb:6,children:[e.jsx(Y,{color:"secondary",disabled:l||!o,onClick:C,size:"large",style:{marginRight:20},variant:"contained",children:"Delete"}),e.jsxs(N,{color:"secondary",disabled:g||l||!R,onClick:E,size:"large",style:{flex:1},variant:"contained",children:["Save Changes",g&&e.jsx(I,{color:r.BLUE_PRESS_STATE,size:10})]})]})]})})},W=i(t)`
  padding: 20px;
`,Y=i(N)`
  && {
    color: ${r.primaryRed};
    background-color: rgba(237, 116, 116, 0.1);

    &:hover,
    &:active,
    &:focus {
      color: ${r.primaryRed};
      background-color: rgba(237, 116, 116, 0.2);
    }
  }
`,ne=()=>{const{close:c}=m("editNodeName");return e.jsx(z,{id:"editNodeName",kind:"small",onClose:c,preventOutsideClose:!0,children:e.jsx(U,{})})};export{ne as EditNodeNameModal};
