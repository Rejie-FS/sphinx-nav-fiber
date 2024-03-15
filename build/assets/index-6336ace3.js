import{r as l,C as le,j as d,s as z,c as C,F as Ne,Z as ke,q as st,u as nt,a6 as ot,a7 as rt,a8 as it,a9 as at,k as ct}from"./index-89a3f7cf.js";import{u as de,a as pe,e as lt,m as Ge,b as _,c as A,p as ut,g as dt,C as pt,d as fe,S as ft,H as me,f as mt,T as ht,h as Oe,i as gt,L as xt,D as yt,U as J,E as bt,j as St,P as wt,k as jt,A as Mt,l as vt,n as _t,o as Ct,q as Pt,V as It,B as Et,R as Se,O as At,r as Tt}from"./EditIcon-198cd9af.js";import{T as te,K as $,M as we,N as Rt,O as Ue,R as zt,U as W,V as S,W as D,X as Nt,Y as kt,Z as Gt,_ as Ot,$ as Ut,a0 as Lt,a as P,u as x,a1 as $t,a2 as Ft,a3 as q,a4 as Le,a5 as Ht,e as Bt,A as Vt,a6 as Wt,a7 as qt,b as $e,a8 as V,a9 as Zt,aa as Yt,ab as Kt,ac as re,ad as Fe,ae as Xt}from"./react-toastify.esm-2901fbc8.js";import{q as he}from"./generateCategoricalChart-70be54fe.js";import{T as Qt}from"./index-7091aae1.js";import{f as Jt,d as Dt}from"./index.esm-fe20163c.js";import{P as es}from"./PlusIcon-5b9bba17.js";import{u as je}from"./index-06055e2a.js";import{P as ts,O as ss}from"./index-c852ccf5.js";import"./Popover-6da4c580.js";import"./useSlotProps-bf7ea326.js";import"./InfoIcon-e27207b6.js";import"./ClipLoader-60d11628.js";import"./NoFilterResultIcon-78a62ea9.js";import"./ChevronUpIcon-afb78c81.js";import"./index-b7489838.js";import"./index-b2952448.js";import"./index-d03f8245.js";import"./index-373f5dda.js";import"./Popper-502aa738.js";import"./CheckIcon-ae5ce382.js";import"./SettingsIcon-3ac5772c.js";import"./Stack-e941519e.js";const Me=e=>e===Object(e)&&!Array.isArray(e)&&typeof e!="function";function R(e,t){const p=de(r=>r.gl),s=pe(te,Me(e)?Object.values(e):e);if(l.useLayoutEffect(()=>{t==null||t(s)},[t]),l.useEffect(()=>{(Array.isArray(s)?s:[s]).forEach(p.initTexture)},[p,s]),Me(e)){const r=Object.keys(e),o={};return r.forEach(n=>Object.assign(o,{[n]:s[r.indexOf(n)]})),o}else return s}R.preload=e=>pe.preload(te,e);R.clear=e=>pe.clear(te,e);$.func.isRequired,$.arrayOf($.oneOfType([$.element,$.func])).isRequired;const ve=new W,_e=new W,Y=[],F=new Nt;class ns extends Rt{constructor(){super(),this.color=new Ue("white"),this.instance={current:void 0},this.instanceKey={current:void 0}}get geometry(){var t;return(t=this.instance.current)==null?void 0:t.geometry}raycast(t,p){const s=this.instance.current;if(!s||!s.geometry||!s.material)return;F.geometry=s.geometry;const r=s.matrixWorld,o=s.userData.instances.indexOf(this.instanceKey);if(!(o===-1||o>s.count)){s.getMatrixAt(o,ve),_e.multiplyMatrices(r,ve),F.matrixWorld=_e,s.material instanceof zt?F.material.side=s.material.side:F.material.side=s.material[0].side,F.raycast(t,Y);for(let n=0,u=Y.length;n<u;n++){const c=Y[n];c.instanceId=o,c.object=this,p.push(c)}Y.length=0}}}const He=l.createContext(null),Ce=new W,Pe=new W,os=new W,Ie=new S,Ee=new D,Ae=new S,Be=l.forwardRef(({context:e,children:t,...p},s)=>{l.useMemo(()=>lt({PositionMesh:ns}),[]);const r=l.useRef(),{subscribe:o,getParent:n}=l.useContext(e||He);return l.useLayoutEffect(()=>o(r),[]),l.createElement("positionMesh",le({instance:n(),instanceKey:r,ref:Ge([s,r])},p),t)}),rs=l.forwardRef(({children:e,range:t,limit:p=1e3,frames:s=1/0,...r},o)=>{const[{context:n,instance:u}]=l.useState(()=>{const b=l.createContext(null);return{context:b,instance:l.forwardRef((j,v)=>l.createElement(Be,le({context:b},j,{ref:v})))}}),c=l.useRef(null),[f,h]=l.useState([]),[[m,i]]=l.useState(()=>{const b=new Float32Array(p*16);for(let j=0;j<p;j++)os.identity().toArray(b,j*16);return[b,new Float32Array([...new Array(p*3)].map(()=>1))]});l.useEffect(()=>{c.current.instanceMatrix.needsUpdate=!0});let a=0,g=0;_(()=>{if(s===1/0||a<s){c.current.updateMatrix(),c.current.updateMatrixWorld(),Ce.copy(c.current.matrixWorld).invert(),g=Math.min(p,t!==void 0?t:p,f.length),c.current.count=g,c.current.instanceMatrix.updateRange.count=g*16,c.current.instanceColor.updateRange.count=g*3;for(let b=0;b<f.length;b++){const j=f[b].current;j.matrixWorld.decompose(Ie,Ee,Ae),Pe.compose(Ie,Ee,Ae).premultiply(Ce),Pe.toArray(m,b*16),c.current.instanceMatrix.needsUpdate=!0,j.color.toArray(i,b*3),c.current.instanceColor.needsUpdate=!0}a++}});const w=l.useMemo(()=>({getParent:()=>c,subscribe:b=>(h(j=>[...j,b]),()=>h(j=>j.filter(v=>v.current!==b.current)))}),[]);return l.createElement("instancedMesh",le({userData:{instances:f},matrixAutoUpdate:!1,ref:Ge([o,c]),args:[null,null,0],raycast:()=>null},r),l.createElement("instancedBufferAttribute",{attach:"instanceMatrix",count:m.length/16,array:m,itemSize:16,usage:we}),l.createElement("instancedBufferAttribute",{attach:"instanceColor",count:i.length/3,array:i,itemSize:3,usage:we}),typeof e=="function"?l.createElement(n.Provider,{value:w},e(u)):l.createElement(He.Provider,{value:w},e))}),is=(e,t,p,s,r)=>{const o=new Gt,n=1e-5;o.absarc(n,n,n,-Math.PI/2,-Math.PI,!0),o.absarc(n,t-s*2,n,Math.PI,Math.PI/2,!0),o.absarc(e-s*2,t-s*2,n,Math.PI/2,0,!0),o.absarc(e-s*2,n,n,0,-Math.PI/2,!0);const u=new Ot(o,{depth:p-s*2,bevelEnabled:!0,bevelSegments:r,steps:2,bevelSize:s,bevelThickness:s,curveSegments:r});u.center();const c=[],f=u.getAttribute("normal"),h=u.getAttribute("position");for(let m=0;m<h.count;m+=1){const i=new S(f.getX(m),f.getY(m),f.getZ(m)),a=new S(h.getX(m),h.getY(m),h.getZ(m));let g=0,w=0;Math.abs(i.y)>.9?(g=a.x/e+.5,w=1-(a.z/p+.5)):Math.abs(i.x)>.9?(g=-a.z/p+.5,w=1-(-a.y/t+.5)):Math.abs(i.z)>.9&&(g=a.x/e+.5,w=1-(-a.y/t+.5)),c.push(g,w)}return u.setAttribute("uv",new Ut(c,2)),u};is(10,10,10,2,10);const ue=new kt(10,10,10),Ve=e=>e.node_type==="topic"&&(e.scale||1)>5,as=500,cs=800;let H=null;const ls=500,ge=(e,t)=>{if(H)return null;H=setTimeout(()=>{H&&(clearTimeout(H),H=null)},ls);const p=[];return e.forEach(r=>{const o=t.position.distanceTo(Lt.set(r.x,r.y,r.z));o<cs&&p.push({id:r.ref_id||"",distance:o})}),p.sort((r,o)=>r.distance-o.distance).slice(0,as).map(r=>r.id)},E=new S(5e3,600,1600),Te=100,us=600,ds=2e3,ie={x:172.7392402058252,y:-239.04675366094037,z:-2e3};let G,B;const ps=4e3,fs=2e3,ms=e=>{const t=P(),p=x(y=>y.cameraFocusTrigger),s=A(y=>y.isUserDragging),r=A(y=>y.isUserScrolling),o=A(y=>y.setUserMovedCamera),n=x(y=>y.setNearbyNodeIds),u=x(y=>y.showSelectionGraph),c=x(y=>y.data),f=x(y=>y.graphStyle),{camera:h}=de(),[m,i]=l.useState(!1),[a,g]=l.useState(!1),[w,b]=l.useState(Te),j=l.useMemo(()=>{if(u)return new S(0,0,0);const y=c==null?void 0:c.nodes.find(T=>T.ref_id===(t==null?void 0:t.ref_id));let M=new S(2e3,2e3,3e3);if(y&&c){const T=c==null?void 0:c.nodes.filter(k=>{var be;return(be=y.children)==null?void 0:be.find(tt=>tt===k.id)}),L=new S(y.x,y.y,y.z);let oe=new S(0,0,0);T.map(k=>(oe=oe.add(new S(k.x,k.y,k.z).normalize()),k));const De=y.scale?1-1/(y.scale+10):1,et=L.sub(oe).multiplyScalar(.8*De);M=L.add(et)}return M},[u,t,c]),v=l.useMemo(()=>{if(u)return new S(0,0,0);const y=c==null?void 0:c.nodes.find(M=>M.ref_id===(t==null?void 0:t.ref_id));return new S((y==null?void 0:y.x)||0,(y==null?void 0:y.y)||0,(y==null?void 0:y.z)||0)},[u,t,c]);l.useEffect(()=>{var y;u&&((y=e.current)==null||y.setLookAt(ie.x,ie.y,ie.z,0,0,0,!1)),ne()},[u]),l.useEffect(()=>{u?b(ds):(t==null?void 0:t.node_type)==="topic"?b(us):b(Te)},[t,b,u]),l.useEffect(()=>{N()},[p]),l.useEffect(()=>{(s||r)&&(i(!0),g(!0))},[s,r,i,g]),l.useEffect(()=>{if(t)if(!u&&f==="earth"&&(e!=null&&e.current)){const y=e.current.camera.position.distanceTo(new S),M=$t(v,-y/2);e.current.setLookAt(M.x,M.y,M.z,0,0,0,!0)}else G&&clearTimeout(G),G=setTimeout(()=>{g(!0),clearTimeout(G)},fs),ne();return()=>{G&&clearTimeout(G),B&&clearTimeout(B)}},[t]),_(y=>{e.current&&(m||Z(j,y.camera),a||U(v,y.camera))});const ne=()=>{if(t){const y=h.position.distanceTo(j);ut(y)}N()},N=()=>{i(!1),g(!1),o(!1),B&&clearTimeout(B),B=setTimeout(()=>{i(!0),g(!0)},ps)},Z=(y,M)=>{if(M.position.distanceTo(y)<w)i(!0);else{M.position.lerp(y,.5);const L=ge((c==null?void 0:c.nodes)||[],h);L&&n(L)}},U=(y,M)=>{var T;(T=e==null?void 0:e.current)==null||T.setLookAt(M.position.x,M.position.y,M.position.z,y.x,y.y,y.z,!0)};return null},hs=1;let I=null;const gs=(e,{enabled:t})=>{const p=P();ms(e);const s=A(h=>h.isUserDragging),r=x(h=>h.disableCameraRotation),o=x(h=>h.data),n=x(h=>h.graphStyle),u=x(h=>h.graphRadius),c=x(h=>h.setNearbyNodeIds);l.useEffect(()=>{t||(I==null||I.kill(),I=null)},[t]);const f=l.useCallback(()=>{I==null||I.kill();const h={value:-244},m=dt.to(h,{duration:5,keyframes:{"0%":{value:10},"100%":{delay:2,ease:"Power4.easeIn",value:-200}},onComplete:()=>{I=null},onInterrupt(){m.kill()},onUpdate:()=>{var a;const{value:i}=h;if(e.current){const g=ge((o==null?void 0:o.nodes)||[],e.current.camera);g&&c(g),(a=e.current)==null||a.dolly(i,!1)}}});m.play(),I=m},[]);return l.useEffect(()=>{e.current&&u&&(n==="sphere"?(e.current.maxDistance=8e3,e.current.minDistance=200,e.current.setTarget(0,0,500,!0)):(e.current.maxDistance=e.current.getDistanceToFitSphere(u+200),e.current.minDistance=100))},[u,n,e]),l.useEffect(()=>{f()},[f,n]),l.useEffect(()=>{!p&&e.current&&e.current.setLookAt(E.x,E.y,E.z,0,0,0,!0)},[p]),_((h,m)=>{e.current&&(!r&&!s&&(e.current.azimuthAngle+=hs*m*Ft.DEG2RAD),e.current.update(m))}),null},xs=({disableAnimations:e})=>{const t=l.useRef(null),p=x(i=>i.graphStyle),s=x(i=>i.data),r=x(i=>i.setNearbyNodeIds),o=x(i=>i.setDisableCameraRotation),[n]=l.useState(.8),{camera:u}=de(),[c,f,h,m]=A(i=>[i.isUserDragging,i.setIsUserDragging,i.isUserScrolling,i.isUserScrollingOnHtmlPanel]);return gs(t,{enabled:!e&&!h&&!c}),l.useEffect(()=>{t.current&&t.current.setLookAt(E.x,E.y,E.z,0,0,0,!0)},[p]),l.useEffect(()=>{if(!c){const i=ge((s==null?void 0:s.nodes)||[],u);i&&r(i)}},[u,u.position,u.position.x,u.position.y,u.position.z,s==null?void 0:s.nodes,r,c]),l.useEffect(()=>{c&&o(!0)},[c,o]),d.jsx(pt,{ref:t,boundaryEnclosesCamera:!0,enabled:!m,makeDefault:!0,maxDistance:12e3,minDistance:100,onEnd:()=>f(!1),onStart:()=>f(!0),smoothTime:n})},se={metalness:.9,roughness:0},ys={...se},bs=new q(ys),Ss=({hide:e})=>{const t=he(),p=x(r=>r.graphStyle),s=l.useMemo(()=>t.nodes.map((r,o)=>{if(r.node_type==="topic")return!1;const n=!Ve(r),u=fe(r.node_type||"",!0);return d.jsx(Be,{color:u,name:r.id,position:[r.x,r.y,r.z],scale:n?(r.scale||1)*.9:0,userData:r},`${r.ref_id||r.id}-instanced-node-${o}-${p}`)}),[p,t]);return d.jsx(rs,{geometry:ue,material:bs,visible:!e,children:s})},We=new te,ee=We.load("noimage.jpeg"),Re=new q({...se,map:ee}),qe=.4,ws=new q({...se,map:ee,transparent:!0,opacity:qe}),K={},js=(e,t)=>{const[p,s]=l.useState(ee),[r,o]=l.useState(Re);return l.useEffect(()=>{const n=`${e}${t&&"-transparent"}`;if(K[n]){s(K[n].texture),o(K[n].material);return}We.load(e,u=>{const c=new q({map:u,transparent:t,opacity:t?qe:1,...se});K[n]={texture:u,material:c},s(u),o(c)},void 0,()=>{s(ee),o(t?ws:Re)})},[e,t]),l.useEffect(()=>function(){p.dispose(),r.dispose()},[p,r]),r},xe=l.memo(({node:e,hide:t,animated:p})=>{const s=l.useRef(null),[r]=l.useState(ue),o=P(),n=x(h=>h.showSelectionGraph),u=!!o&&e.ref_id===o.ref_id,c=js(e.image_url||"noimage.jpeg",!1);_((h,m)=>{p&&s.current&&(s.current.position.set(e.x,e.y,e.z),u&&(s.current.rotation.y+=m*1,s.current.rotation.x-=m*.6))}),l.useEffect(()=>function(){r.dispose()},[r]);const f=l.useMemo(()=>n&&u?20:u?(e.scale||1)*1.2:e.scale,[e,u,n]);return d.jsx(ft,{enabled:!!u,children:d.jsx("mesh",{ref:s,geometry:ue,material:c,name:e.id,position:[e.x,e.y,e.z],scale:f,userData:e,visible:!t})})});xe.displayName="Cube";const Ms=z(Ne)`
  text-align: center;
  width: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  height: ${e=>e.type==="topic"?"auto":`${e.size}px`};
  outline: 1px solid ${e=>C.white};
  outline-offset: 0px;
  background: rgba(0, 0, 0, 0.75);
  color: ${e=>e.fontColor};
  border-radius: ${e=>`${e.type==="guest"?"100%":"6px"}`};
  font-size: ${e=>`${e.fontSize}px`};
  cursor: pointer;
  transition: font-size 0.4s, outline 0.4s;
  transform: scale(${e=>e.scale});
  align-items: center;
  justify-content: center;
  font-family: Barlow;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    outline-offset: 4px;
  }

  &.selected {
    .badge-wrapper {
      top: 0;
    }

    font-size: 36px;

    &:hover {
      outline-offset: 0px;
    }
  }

  &.topic {
    outline: none;
    background: none;
    &:hover {
      font-size: 36px;
    }
    white-space: nowrap;
    .badge-wrapper {
      display: none;
    }
  }

  .badge-wrapper {
    position: absolute;
    top: -7px;
    left: -14px;
  }
`;z.img`
  background-image: ${({src:e})=>`url(${e})`};
  background-size: contain;
  background-repeat: no-repeat;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border-radius: ${e=>e.borderRadius};
`;z.div`
  display: flex;
  position: absolute;
  bottom: -14px;
  left: -5px;
  width: auto;
  justify-content: center;
  align-items: center;
`;z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${C.transparentBlack};
  border: 2px solid ${e=>e.color};
  color: #fff;
  padding: 0 4px;
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${e=>e.color}44;
  background: ${C.transparentBlack};
  padding: 0 4px;
  color: ${e=>e.color};
  min-width: 30px;
  height: 26px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 6px;
  margin-right: 5px;
`;const vs=new S,_s=({position:e,userData:t,color:p})=>{const s=l.useRef(null),[r,o]=x(a=>[a.selectedNode,a.setSelectedNode]),n=x(a=>a.setHoveredNode),u=x(a=>a.hoveredNode),c=x(a=>a.showSelectionGraph),f=((t==null?void 0:t.node_type)||"")==="topic",h=((t==null?void 0:t.node_type)||"")==="guest"||((t==null?void 0:t.node_type)||"")==="person";_(()=>{if(c&&s.current){const a=vs.set((t==null?void 0:t.x)||0,(t==null?void 0:t.y)||0,(t==null?void 0:t.z)||0);s.current.position.copy(a)}}),l.useEffect(()=>function(){s.current&&s.current.clear()},[s]);const m=l.useMemo(()=>(u==null?void 0:u.ref_id)===(t==null?void 0:t.ref_id),[u==null?void 0:u.ref_id,t==null?void 0:t.ref_id]),i=(r==null?void 0:r.ref_id)===(t==null?void 0:t.ref_id);return f||i&&c||!i?d.jsx("group",{ref:s,position:e,children:d.jsx(me,{center:!0,sprite:!0,zIndexRange:[0,0],children:d.jsxs(Ms,{className:Bt(t==null?void 0:t.node_type,{selected:i}),color:p,fontColor:C.white,fontSize:f?64:20,onClick:a=>{a.stopPropagation(),t&&o(t)},onPointerOut:a=>{a.stopPropagation(),n(null)},onPointerOver:a=>{a.stopPropagation(),n(t||null)},scale:m?1.05:1,selected:!1,size:i?100:68,type:(t==null?void 0:t.node_type)||"",children:[!h&&!f?d.jsx("div",{className:"badge-wrapper",children:d.jsx(Qt,{type:(t==null?void 0:t.node_type)||""})}):null,f?t==null?void 0:t.label:d.jsx(Vt,{rounded:h,size:i?60:52,src:(t==null?void 0:t.image_url)||"audio_default.svg",type:t==null?void 0:t.node_type})]})})}):null},Ze=l.memo(()=>{const e=x(n=>n.data),t=P(),p=x(n=>n.showSelectionGraph),s=x(n=>n.selectionGraphData),r=x(n=>n.selectedNodeRelativeIds),o=l.useMemo(()=>(p?s.nodes:(e==null?void 0:e.nodes)||[]).filter(f=>r.includes((f==null?void 0:f.ref_id)||"")||(t==null?void 0:t.ref_id)===(f==null?void 0:f.ref_id)).slice(0,Le).map(f=>{const h=fe(f.node_type||"",!0),m=new S((f==null?void 0:f.x)||0,(f==null?void 0:f.y)||0,(f==null?void 0:f.z)||0),i=((e==null?void 0:e.nodes)||[]).filter(a=>a.ref_id&&Ht(a,f)).map(a=>(a==null?void 0:a.ref_id)||"")||[];return d.jsx(_s,{color:h,position:m,relativeIds:i,userData:f},`node-badge-${f.ref_id}`)}),[r,e==null?void 0:e.nodes,p,s,t]);return d.jsx(l.Fragment,{children:o.length?o:null},"node-badges")});Ze.displayName="RelevanceBadges";const Ye=({link:e,animated:t})=>{const p=l.useRef(null),s=P(),[r,o]=l.useState(new S(0,0,0)),[n,u]=l.useState(new S(0,0,0)),[c,f]=l.useState(8947848),h=x(m=>m.selectionGraphData);return l.useEffect(()=>{var a,g,w,b,j,v;const m=(s==null?void 0:s.ref_id)||"",i=s&&(m===e.targetRef||m===e.sourceRef);!e.onlyVisibleOnSelect||i?(o(new S(((a=e.sourcePosition)==null?void 0:a.x)||0,((g=e.sourcePosition)==null?void 0:g.y)||0,((w=e.sourcePosition)==null?void 0:w.z)||0)),u(new S(((b=e.targetPosition)==null?void 0:b.x)||0,((j=e.targetPosition)==null?void 0:j.y)||0,((v=e.targetPosition)==null?void 0:v.z)||0))):(o(new S(0,0,0)),u(new S(0,0,0))),f(i?e.color||ke.children.segmentColor:s?5592405:8947848)},[s,e]),_(()=>{if(t&&p.current){const m=h.nodes.find(a=>a.ref_id===e.sourceRef),i=h.nodes.find(a=>a.ref_id===e.targetRef);p.current.start.set((m==null?void 0:m.x)||0,(m==null?void 0:m.y)||0,(m==null?void 0:m.z)||0),p.current.end.set((i==null?void 0:i.x)||0,(i==null?void 0:i.y)||0,(i==null?void 0:i.z)||0)}}),d.jsx(mt,{ref:p,color:"0xFFFFFF",end:n,start:r})},Cs={font:"/fonts/Inter-Bold.woff",characters:"abcdefghijklmnopqrstuvwxyz0123456789!",fontSize:2,letterSpacing:-.05,lineHeight:1,"material-toneMapped":!1},ye=l.memo(({node:e,hide:t})=>{const p=l.useRef(null),s=P(),o=x(h=>h.selectedNodeRelativeIds).includes((e==null?void 0:e.ref_id)||""),n=!!s&&(s==null?void 0:s.id)===e.id,u=x(h=>h.showSelectionGraph);_(({camera:h})=>{p!=null&&p.current&&(p.current.quaternion.copy(h.quaternion),u&&p.current.position.set(e.x,e.y,e.z))});const c=l.useMemo(()=>{let h=(e.scale||1)*4;return u&&n?h=40:!n&&o&&(h=0),h},[e.scale,n,o,u]),f=l.useMemo(()=>s&&s.node_type==="topic"&&!n?.2:1,[n,s]);return d.jsx(ht,{ref:p,anchorX:"center",anchorY:"middle",color:C.white,fillOpacity:f,position:[e.x,e.y,e.z],scale:c,userData:e,visible:!t&&!n,...Cs,children:e.label})});ye.displayName="TextNode";let ae=null;const Ke=l.memo(()=>{const e=he(),t=P(),p=x(o=>o.selectedNodeRelativeIds),s=x(o=>o.selectionGraphData),r=x(o=>o.setSelectionData);return l.useEffect(()=>{const o=e.nodes.filter(u=>u.ref_id===(t==null?void 0:t.ref_id)||p.includes((u==null?void 0:u.ref_id)||"")).map(u=>{const c=u.ref_id===(t==null?void 0:t.ref_id)&&u.node_type!=="topic"?{fx:0,fy:0,fz:0}:{};return{...u,x:0,y:0,z:0,...c}}),n=Wt(o,!1,!1);r({nodes:o,links:n})},[e,t,p,r]),l.useEffect(()=>{ae=qt(s.nodes,s.links,{numDimensions:2,forceLinkStrength:.01,forceCenterStrength:.85,forceChargeStrength:-20,velocityDecay:.9})},[s]),_(()=>{ae&&ae.tick()}),d.jsxs(d.Fragment,{children:[s==null?void 0:s.nodes.map(o=>o.node_type==="topic"?d.jsx(ye,{hide:!0,node:o},`${o.ref_id||o.id}-compact`):d.jsx(xe,{animated:!0,hide:!0,node:o},`${o.ref_id||o.id}-compact`)),d.jsx(Oe,{fog:!0,lineWidth:.9,children:(s==null?void 0:s.links).map((o,n)=>d.jsx(Ye,{animated:!0,link:o},n.toString()))},`selection-links-${s==null?void 0:s.links.length}`)]})});Ke.displayName="SelectionDataNodes";const Xe=l.memo(()=>{const e=he(),t=P(),p=x(i=>i.nearbyNodeIds),s=x(i=>i.setHoveredNode),r=x(i=>i.showSelectionGraph),o=x(i=>i.selectionGraphData),n=$e(i=>i.setTranscriptOpen),u=l.useCallback(i=>!!(r&&!o.nodes.find(a=>a.ref_id===i.ref_id)),[r,o]),c=l.useCallback(i=>{const a=i==null?void 0:i[0];a&&(n(!1),a.userData&&(u(a.userData)||x.getState().setSelectedNode((a==null?void 0:a.userData)||null)))},[n,u]),f=l.useCallback(i=>{i.stopPropagation(),s(null)},[s]),h=l.useCallback(i=>{var w;const g=i.intersections.map(b=>b.object)[0];if((w=g==null?void 0:g.userData)!=null&&w.ref_id){const b=g.userData;u(b)||(i.stopPropagation(),s(b))}},[s,u]),m=r&&!!t;return d.jsxs(gt,{filter:i=>i.filter(a=>{var g;return!!((g=a.userData)!=null&&g.id)}),onChange:c,onPointerOut:f,onPointerOver:h,children:[d.jsx(Ss,{hide:m}),d.jsx(Ze,{}),e.nodes.filter(i=>{const a=(i==null?void 0:i.ref_id)===(t==null?void 0:t.ref_id);return p.includes(i.ref_id||"")||Ve(i)||a}).map(i=>i.node_type==="topic"?d.jsx(ye,{hide:m,node:i},i.ref_id||i.id):d.jsx(xe,{hide:m,node:i},i.ref_id||i.id)),m&&d.jsx(Ke,{})]})});Xe.displayName="Cubes";const Ps={earthRef:null},Is=st(e=>({...Ps,setEarthRef:t=>e({earthRef:t})})),Es=(e,t)=>{const p=new D().setFromUnitVectors(new S(0,1,0),e.clone().normalize()),s=new D().setFromUnitVectors(new S(0,1,0),t.clone().normalize()),r=new D,o=50,n=[];for(let c=0;c<=o;c+=1){const f=c/o;r.slerpQuaternions(p,s,f);const h=new S(0,1,0).applyQuaternion(r).multiplyScalar(V+Zt);n.push(h)}return new Yt(n).getPoints(o)},As=({link:e})=>{const t=P(),[p,s]=l.useState(8947848);l.useEffect(()=>{const o=(t==null?void 0:t.ref_id)||"",n=t&&(o===e.targetRef||o===e.sourceRef);s(n?e.color||ke.children.segmentColor:t?5592405:8947848)},[t,e]);const r=l.useMemo(()=>{var f,h,m,i,a,g;const o=(t==null?void 0:t.ref_id)||"",n=t&&(o===e.targetRef||o===e.sourceRef);if(!(!e.onlyVisibleOnSelect||n))return[];const u=new S(((f=e.sourcePosition)==null?void 0:f.x)||0,((h=e.sourcePosition)==null?void 0:h.y)||0,((m=e.sourcePosition)==null?void 0:m.z)||0),c=new S(((i=e.targetPosition)==null?void 0:i.x)||0,((a=e.targetPosition)==null?void 0:a.y)||0,((g=e.targetPosition)==null?void 0:g.z)||0);return Es(u,c)},[e,t]);return r.length?d.jsx(xt,{color:p,dashed:!1,lineWidth:3,points:r}):null},Ts=new S(0,0,0),Rs=()=>{const e=l.useRef(null),t=l.useRef(null),p=x(c=>c.graphStyle),s=x(c=>c.showSelectionGraph),r=x(c=>c.data),o=Is(c=>c.setEarthRef),n=R("textures/earth/galaxy.png"),u=R("textures/earth/clouds.png");return _(({camera:c})=>{t.current&&t.current.position.copy(c.getWorldPosition(Ts))}),l.useLayoutEffect(()=>{e.current&&o(e)},[o]),p!=="earth"||s?null:d.jsxs(d.Fragment,{children:[d.jsxs("mesh",{ref:e,userData:{type:"earth"},children:[d.jsx("sphereGeometry",{args:[V,200,200]}),d.jsx(zs,{})]}),d.jsxs("mesh",{children:[d.jsx("sphereGeometry",{args:[V+2,200,200]}),d.jsx("meshStandardMaterial",{alphaMap:u,map:u,transparent:!0})]}),d.jsxs("mesh",{children:[d.jsx("sphereGeometry",{args:[V*4,200,200]}),d.jsx("meshStandardMaterial",{map:n,opacity:.4,side:Kt,transparent:!0})]}),d.jsx("directionalLight",{ref:t,intensity:.9,position:[0,0,V*3]}),r==null?void 0:r.links.map((c,f)=>d.jsx(As,{link:c},`curved-${f}`))]})},zs=()=>{const e=R("textures/earth/earth.jpeg"),t=R("textures/earth/bump.jpeg"),p=R("textures/earth/water.png"),s=l.useMemo(()=>new q({map:e,bumpMap:t,aoMap:t,roughnessMap:t,metalnessMap:p,toneMapped:!0,roughness:35,metalness:0}),[e,t,p]);return d.jsx("meshStandardMaterial",{...s})},O=2e3,X=J*4,ze=Object.values(yt).map(e=>e),Ns=()=>{const e=l.useRef(null);_(()=>{var n,u,c,f,h;const r=(u=(n=e.current)==null?void 0:n.geometry.getAttribute("position"))==null?void 0:u.array,o=(f=(c=e.current)==null?void 0:c.geometry.getAttribute("velocity"))==null?void 0:f.array;if(r&&o){for(let m=0;m<r.length;m+=3){const i=r[m],a=r[m+1],g=r[m+2],w=o[m],b=o[m+1],j=o[m+2];r[m]+=w,r[m+1]+=b,r[m+2]+=j;const v=Math.sqrt(i*i+a*a+g*g);if(v*v>X*X){const N=Math.random()*Math.PI*2,Z=Math.random()*Math.PI*2,U=Math.random()*X;r[m]=Math.sin(N)*Math.cos(Z)*U,r[m+1]=Math.sin(N)*Math.sin(Z)*U,r[m+2]=Math.cos(N)*U}}((h=e.current)==null?void 0:h.geometry.getAttribute("position")).needsUpdate=!0}});const t=l.useMemo(()=>new Float32Array(O*3),[]),p=l.useMemo(()=>new Float32Array(O*3),[]);l.useEffect(()=>{const r=X;for(let o=0;o<O;o+=1){const n=o*3,u=Math.acos(1-o/O*2),c=Math.PI*2*o/O;t[n]=Math.sin(u)*Math.cos(c)*r,t[n+1]=Math.sin(u)*Math.sin(c)*r,t[n+2]=Math.cos(u)*r,p[n]=Math.random()-.5,p[n+1]=Math.random()-.5,p[n+2]=Math.random()-.5}},[t,p]);const s=l.useRef(null);return l.useEffect(()=>{s.current&&e.current&&(s.current.setAttribute("position",new re(t,3)),s.current.setAttribute("velocity",new re(p,3)),e.current.geometry=s.current)},[t,p]),l.useEffect(()=>{if(s.current){const r=[];for(let o=0;o<O;o+=1){const n=Math.floor(Math.random()*ze.length),u=ze[n],c=new Ue(u);c.multiplyScalar(2),r.push(c.r,c.g,c.b)}s.current.setAttribute("color",new re(new Float32Array(r),3))}},[]),d.jsxs("points",{ref:e,frustumCulled:!1,children:[d.jsx("bufferGeometry",{ref:s}),d.jsx("pointsMaterial",{opacity:.8,size:4,transparent:!0,vertexColors:!0})]})},Q=e=>({close:{backgroundColor:"rgba(48, 51, 66, 1)",borderColor:"#fff",fontColor:"rgba(255, 255, 255, 1)"},focus:{backgroundColor:e?"rgba(255, 255, 255, 0.90);":"rgba(255, 255, 255, 0.90)",borderColor:e?"#FFDB58bb":"#fff",fontColor:"rgba(48, 51, 66, 1)"},menu:{backgroundColor:"#00000066",borderColor:e?"#ffffff66":"#5078f2",fontColor:e?"#ffffff66":"#fff"}}),ks=new S,Qe=l.memo(()=>{const e=l.useRef(null),t=$e(a=>a.setSidebarOpen),{open:p}=je("editNodeName"),{open:s}=je("addEdgeToNode"),[r]=nt(a=>[a.isAdmin]),o=x(a=>a.showSelectionGraph),n=x(a=>a.selectionGraphData),u=x(a=>a.data),c=P(),f=x(a=>a.setSelectedNode),h=x(a=>a.setShowSelectionGraph);_(()=>{m()});const m=l.useCallback(()=>{const a=o?n:u;if(e.current){const g=a==null?void 0:a.nodes.find(w=>w.ref_id===(c==null?void 0:c.ref_id));if(g){const w=ks.set(g==null?void 0:g.x,g==null?void 0:g.y,g==null?void 0:g.z);e.current.position.copy(w)}}},[c,o,n,u]),i=l.useMemo(()=>{const a=r?[{key:"control-key-1",colors:Q(o).focus,icon:d.jsx(es,{}),left:-80,className:"add",onClick:()=>{s()}},{key:"control-key-2",colors:Q(o).focus,icon:d.jsx(bt,{}),left:-40,className:"edit",onClick:()=>{p()}}]:[],g=[{key:"control-key-4",colors:Q(o).focus,icon:d.jsx(Jt,{}),left:0,className:"expand",onClick:()=>{const w=!o;h(w),w&&t(!0)}},{key:"control-key-5",colors:Q(!0).close,icon:d.jsx(Dt,{}),left:40,className:"exit",onClick:()=>{f(null),h(!1)}}];return[...a,...g].map((w,b)=>({...w,left:-80+b*40}))},[o,s,p,h,t,f,r]);return c?d.jsx("group",{ref:e,children:d.jsx(me,{center:!0,className:"control-panel",onClick:a=>a.stopPropagation(),onKeyDown:a=>a.stopPropagation(),onPointerDown:a=>a.stopPropagation(),onPointerOut:a=>a.stopPropagation(),onPointerOver:a=>a.stopPropagation(),onPointerUp:a=>a.stopPropagation(),sprite:!0,zIndexRange:[16777271,16777272],children:i.map(a=>d.jsx(Gs,{backgroundColor:a.colors.backgroundColor,borderColor:a.colors.borderColor,className:a.className,fontColor:a.colors.fontColor,left:a.left,onClick:g=>{g.stopPropagation(),a.onClick()},children:a.icon},a.key))})}):null});Qe.displayName="NodeControls";const Gs=z.div`
  position: fixed;
  top: -60px;
  left: ${e=>-7+e.left}px;
  width: 24px;
  height: 24px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${e=>e.backgroundColor?e.backgroundColor:"#000000bb"};
  color: ${e=>e.fontColor?e.fontColor:"#ffffff"};
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
`,Je=l.memo(()=>d.jsx(d.Fragment,{children:d.jsx(Qe,{})}));Je.displayName="NodeDetailsPanel";const Os=()=>{const e=x(f=>f.data),t=x(f=>f.isFetching),p=x(f=>f.graphStyle),s=x(f=>f.showSelectionGraph),r=x(f=>f.selectedNodeRelativeIds),o=x(f=>f.selectionGraphData),n=x(f=>f.selectedNode),u=l.useMemo(()=>s?0:p==="force"?.2:.4,[s,p]),c=l.useMemo(()=>(s?o.nodes:(e==null?void 0:e.nodes)||[]).filter(i=>r.includes((i==null?void 0:i.ref_id)||"")||(n==null?void 0:n.ref_id)===(i==null?void 0:i.ref_id)).slice(0,Le).map(i=>{const a=new S(n==null?void 0:n.x,n==null?void 0:n.y,n==null?void 0:n.z),g=new S(i.x,i.y,i.z),w={source:n!=null&&n.id?n.id:"",target:i.id?i.id:"",targetRef:i.ref_id,sourceRef:n==null?void 0:n.ref_id,sourcePosition:a,targetPosition:g};return d.jsx(Ye,{link:w},i.id)}),[r,e==null?void 0:e.nodes,s,o,n]);return t?null:d.jsxs(d.Fragment,{children:[d.jsx(Xe,{}),d.jsx(Rs,{}),d.jsx(Ns,{}),p!=="earth"&&d.jsx(Oe,{fog:!0,limit:c.length,lineWidth:u,children:c},`links-${c.length}-${p}`),d.jsx(Je,{})]})},Us=()=>{const{fogColor:e}=Fe("universe",{fogColor:it}),t=x(o=>o.graphStyle),p=l.useRef(null),s=l.useRef(null),r=l.useRef(null);return _(({camera:o,clock:n})=>{const u=n.getElapsedTime();if(p.current){const f=Math.sin(u/8)*1e3;p.current.position.setZ(f)}if(s.current&&s.current.position.lerp(o.position,.5),r.current){const c=u*.5,f=Math.sin(c)*J,h=Math.cos(c)*J;r.current.position.set(f,0,h)}}),d.jsxs(d.Fragment,{children:[d.jsx("hemisphereLight",{args:[C.white,ot,rt]}),t!=="earth"&&d.jsx("fog",{args:[e,5,18e3],attach:"fog"}),d.jsx("ambientLight",{color:C.white,intensity:1}),d.jsx("pointLight",{ref:s,color:C.white,distance:4e3,intensity:5,position:[0,0,0]}),d.jsx("directionalLight",{ref:r,color:C.white,intensity:8,position:[J,0,0]}),d.jsx("pointLight",{ref:p,color:C.white,distance:4e3,intensity:8,position:[0,0,0]})]})},Ls=()=>d.jsx(me,{children:d.jsx(_t,{})}),$s=()=>{const{universeColor:e}=Fe("universe",{universeColor:C.black}),t=P(),p=l.useMemo(()=>t!=null&&t.node_type?fe(t.node_type):Xt,[t]);return d.jsxs(d.Fragment,{children:[d.jsx("color",{args:[e],attach:"background"}),d.jsx(Us,{}),d.jsx(xs,{}),d.jsxs(Ct,{children:[d.jsxs(Pt,{autoClear:!1,multisampling:8,children:[d.jsx(It,{darkness:.7,eskil:!1,offset:.05}),d.jsx(Et,{luminanceThreshold:1,mipmapBlur:!0,resolutionX:Se.AUTO_SIZE,resolutionY:Se.AUTO_SIZE}),d.jsx(At,{blendFunction:Tt.SCREEN,blur:!0,edgeStrength:4,hiddenEdgeColor:p,visibleEdgeColor:p})]}),d.jsx(Os,{})]})]})};let ce=null;const Fs={aspect:window.innerWidth/window.innerHeight,far:3e4,near:1,position:[E.x,E.y,E.z]},Hs=()=>{const[e,t,p]=[A(n=>n.setIsUserScrollingOnHtmlPanel),A(n=>n.setIsUserScrolling),A(n=>n.setUserMovedCamera)],s=x(n=>n.isFetching),r=l.useCallback(n=>{var f;const{target:u}=n,{offsetParent:c}=u;ce&&clearTimeout(ce),(f=c==null?void 0:c.classList)!=null&&f.contains("html-panel")&&c.clientHeight<c.scrollHeight&&e(!0),t(!0),p(!0),ce=setTimeout(()=>{t(!1),e(!1)},200)},[t,e,p]),o=l.useCallback(n=>at(n,"threeState"),[]);return d.jsxs(Bs,{children:[d.jsx(l.Suspense,{fallback:null,children:d.jsxs(St,{camera:Fs,id:"universe-canvas",onCreated:o,onWheel:r,children:[ct&&d.jsx(wt,{position:"top-right"}),d.jsxs(l.Suspense,{fallback:d.jsx(Ls,{}),children:[d.jsx(jt,{}),d.jsx(Mt,{}),d.jsx(vt,{}),d.jsx($s,{})]})]})}),s&&d.jsx(ts,{fullSize:!1}),d.jsx(ss,{})]})},Bs=z(Ne)`
  flex: 1 1 100%;
  position: relative;
`,mn=l.memo(Hs);export{mn as Universe};