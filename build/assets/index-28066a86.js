import{s as N,T as B,j as e,F as a,b as C,r as s,c as L}from"./index-8fb39b9b.js";import{B as b}from"./index-d1e98921.js";import{u as x}from"./index-2142cd26.js";import{k as v,H as F,F as k,B as z,C as D,i as I,m as M}from"./react-toastify.esm-309129e5.js";import{u as R}from"./index-c1af42f5.js";import{T as _}from"./index-f15bce2a.js";import{S as A}from"./Skeleton-bf439451.js";import"./index.esm-b92f54d4.js";import"./InfoIcon-624f7e1b.js";const H=()=>e.jsxs(a,{children:[e.jsx(a,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(a,{align:"center",direction:"row",children:e.jsx(P,{children:"Edit node name"})})}),e.jsx(a,{mb:12,children:e.jsx(_,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...C}})})]}),P=N(B)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,V=()=>{const{close:i}=x("editNodeName"),[h]=R(r=>[r.data]),c=v({mode:"onChange"}),{watch:j,setValue:d,reset:l}=c,[m,p]=s.useState(!1),[f,u]=s.useState(!1),[t,y]=s.useState(),o=F();s.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{l()}),[t,d,l]),s.useEffect(()=>{(async()=>{if(o){u(!0);try{const{data:n}=await I({search:o==null?void 0:o.name}),E=n.find(w=>w.topic===o.name);y(E)}catch(n){console.error(n)}finally{u(!1)}}})()},[o]);const S=j("topic"),g=()=>{i()},T=async()=>{p(!0);try{await M((t==null?void 0:t.ref_id)||"",{topic:S.trim()}),g()}catch(r){console.warn(r)}finally{p(!1)}};return e.jsxs(k,{...c,children:[f?e.jsx(a,{my:24,children:e.jsx(A,{})}):e.jsx(H,{}),e.jsxs(z,{color:"secondary",disabled:m||f,onClick:T,size:"large",variant:"contained",children:["Save",m&&e.jsx(D,{color:L.BLUE_PRESS_STATE,size:10})]})]})},Y=()=>{const{close:i}=x("editNodeName");return e.jsx(b,{id:"editNodeName",kind:"regular",onClose:i,preventOutsideClose:!0,children:e.jsx(V,{})})};export{Y as EditNodeNameModal};
