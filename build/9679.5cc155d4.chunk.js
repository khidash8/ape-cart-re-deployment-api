(self.webpackChunkapi=self.webpackChunkapi||[]).push([[9679],{29520:N=>{function w(u,s,j,f){for(var y=-1,D=u==null?0:u.length;++y<D;){var M=u[y];s(f,M,j(M),u)}return f}N.exports=w},98694:(N,w,u)=>{var s=u(1107);function j(f,y,D,M){return s(f,function(R,$,K){y(M,R,D(R),K)}),M}N.exports=j},37177:(N,w,u)=>{var s=u(29520),j=u(98694),f=u(90040),y=u(26126);function D(M,R){return function($,K){var le=y($)?s:j,de=R?R():{};return le($,M,f(K,2),de)}}N.exports=D},63799:(N,w,u)=>{var s=u(71041),j=u(37177),f=Object.prototype,y=f.hasOwnProperty,D=j(function(M,R,$){y.call(M,$)?M[$].push(R):s(M,$,[R])});N.exports=D},29679:(N,w,u)=>{"use strict";u.d(w,{P:()=>Bs,u:()=>Us});var s=u(74081),j=u(27279),f=u(10701),y=u(93415),D=u(73411),M=u(32370),R=u(48102),$=u(5938),K=u(6918),le=u(15244),de=u(35250),Ne=u(61181),Ve=u(45322),Ze=u(24920),we=u(34642),Ce=u(22572),He=u(23298),Ge=u(74577),Fe=u(69878),_e=u(94098),Q=u(61908),ce=u(94050),je=u(61815),ue=u(8175),A=u(98934),ne=u(10131),J=u(10124),V=u(43433),I=u(61020),H=u(42816),Xe=u(76873),Ye=u(87830),pe=u(63799),ye=u(74919),S=u(19003),ze=u(10411),Qe=u(35318),Je=u(57853),qe=u(78582),es=u(89486),ss=u(82298),ts=u(51943),ns=u(40464);const[os,is]=(0,Xe.k)("PermissionsDataManager"),Y=()=>is("usePermissionsDataManager"),Oe=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Oe(o)):t.push(o),t),[]):[],F=e=>(0,H.o)(e)?Oe(Object.values(e).map(t=>(0,H.o)(t)?F(t):t)):[],Ee=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),rs=e=>{const t=be(e.plugins),o=be(e.settings),n=Me(e.collectionTypes),r=Me(e.singleTypes);return[...t,...o,...n,...r]},be=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:c,properties:{enabled:p}}])=>(p&&i.push({action:l,subject:null,conditions:he(c),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),Me=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[c,p]=l;if(!F(p).some(m=>m))return i;if(!p?.properties?.enabled){const m=Object.entries(p.properties).reduce((C,_)=>{const[h,x]=_;return C.properties[h]=Ae(x),C},{action:c,subject:r,conditions:he(p.conditions),properties:{}});return[...i,m]}return p.properties.enabled&&i.push({action:c,subject:r,properties:{},conditions:he(p.conditions)}),i},[]);return[...o,...d]},[]),Ae=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,H.o)(a)?[...o,...Ae(a,`${t}${r}.`)]:(a&&!(0,H.o)(a)&&o.push(`${t}${r}`),o)},[]),he=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Pe=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),ve=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((c,p)=>{const g=Ee(o,p.action,null);return c[p.action]={properties:{enabled:g!==void 0},conditions:Pe(t,g?.conditions??[])},c},{}),i),{});return n[r]=d,n},{}),as=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const c=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=c,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},Te=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,c)=>{const p=e.find(({uid:g})=>g===c)||null;return p&&(l[c]=p),l},{});if(J(d))return r;const i=Object.keys(d).reduce((l,c)=>{const{actionId:p,applyToProperties:g}=a,_=d[c].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=Ee(n,p,c),x=Pe(o,h?.conditions??[]);if(l[c]||(l[c]={}),J(g)||_)return l[c][p]={properties:{enabled:h!==void 0},conditions:x},l;const O=as(g,d[c],h);return l[c][p]={...O,conditions:x},l},{});return Ye(r,i)},{}),Se=(e,t)=>Object.entries(pe(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(pe(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),oe=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,H.o)(n)&&!ne(n,"conditions"))return{...t,[o]:oe(n)};if((0,H.o)(n)&&ne(n,"conditions")&&!F(ye(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),q=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,H.o)(a)?{...n,[r]:q(a,t,r==="fields")}:(n[r]=t,n)},{}),Z=`${120/16}rem`,ge=`${200/16}rem`,ie=`${53/16}rem`,me=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,X=e=>{const t=me(e),o=F(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},re=e=>e.charAt(0).toUpperCase()+e.slice(1),De=(0,S.default)(f.k)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,xe=S.default.div`
  width: ${Z};
`,$e=()=>(0,s.jsx)(y.x,{color:"danger700",paddingLeft:1,children:"*"}),Le=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:c})=>{const{formatMessage:p}=(0,I.Z)();return(0,s.jsxs)(f.k,{alignItems:"center",paddingLeft:6,width:ge,shrink:0,children:[(0,s.jsx)(y.x,{paddingRight:2,children:(0,s.jsx)(D.C,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:c})}),(0,s.jsxs)(De,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(M.Z,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:re(a)}),t]})]})},ls=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,j.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(f.k,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(fs,{label:n,headers:d}),(0,s.jsx)(y.x,{children:t.map(({children:i,label:l,value:c,required:p},g)=>(0,s.jsx)(ds,{childrenForm:i,label:l,isFormDisabled:o,name:c,required:p,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},c))})]})},ds=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:c}=(0,I.Z)(),[p,g]=j.useState(null),{modifiedData:m,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=Y(),x=p===n,O=(0,j.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=O.length>0,L=j.useCallback(()=>{P&&g(v=>v===n?null:n)},[P,n]),E=({target:{value:v}})=>{C(a,i,n,v)},{hasAllActionsSelected:b,hasSomeActionsSelected:T}=(0,j.useMemo)(()=>cs(d,m,a,i,n),[d,m,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(us,{alignItems:"center",isCollapsable:P,isActive:x,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(f.k,{children:[(0,s.jsxs)(Le,{onChange:E,onClick:L,isCollapsable:P,isFormDisabled:o,label:t,someChecked:T,value:b,isActive:x,children:[r&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:x})]}),(0,s.jsx)(f.k,{children:d.map(({label:v,isActionRelatedToCurrentProperty:B,actionId:W})=>{if(!B)return(0,s.jsx)(xe,{},v);const k=[...a.split(".."),W,"properties",i,n];if(!P){const U=A(m,k,!1);return(0,s.jsx)(f.k,{width:Z,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.C,{disabled:o,name:k.join(".."),"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),onValueChange:Ns=>{h({target:{name:k.join(".."),value:Ns}})},value:U})},W)}const z=A(m,k,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:te}=X(z);return(0,s.jsx)(f.k,{width:Z,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.C,{disabled:o,name:k.join(".."),onValueChange:U=>{_({target:{name:k.join(".."),value:U}})},"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${v}`}),value:G,indeterminate:te})},v)})})]})}),x&&(0,s.jsx)(ke,{childrenForm:O,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},cs=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const c=A(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=c,i},{});return X(d)},us=(0,S.default)(f.k)`
  height: ${ie};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,ee=(0,S.default)(ze.Z)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,ke=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,I.Z)(),{modifiedData:l,onChangeParentCheckbox:c,onChangeSimpleCheckbox:p}=Y(),[g,m]=j.useState(null),C=h=>{m(x=>x===h?null:h)},_=(0,j.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(y.x,{paddingLeft:"2rem",children:[(0,s.jsx)(gs,{}),e.map(({label:h,value:x,required:O,children:P},L)=>{const E=L+1<e.length,b=Array.isArray(P),T=g===x;return(0,s.jsxs)(ps,{isVisible:E,children:[(0,s.jsxs)(f.k,{height:ie,children:[(0,s.jsx)(ms,{children:(0,s.jsx)(xs,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(f.k,{style:{flex:1},children:[(0,s.jsx)(hs,{level:o,isActive:T,isCollapsable:b,children:(0,s.jsxs)(De,{alignItems:"center",isCollapsable:b,...b&&{onClick:()=>C(x),"aria-expanded":T,onKeyDown:({key:v})=>(v==="Enter"||v===" ")&&C(x),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(M.Z,{ellipsis:!0,children:re(h)}),O&&(0,s.jsx)($e,{}),(0,s.jsx)(ee,{$isActive:T})]})}),(0,s.jsx)(f.k,{style:{flex:1},children:r.map(({actionId:v,label:B,isActionRelatedToCurrentProperty:W})=>{if(!W)return(0,s.jsx)(xe,{},v);const k=[...n.split(".."),v,"properties",d,...a.split(".."),x],z=A(l,k,!1);if(!P)return(0,s.jsx)(f.k,{position:"relative",width:Z,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.C,{disabled:t,name:k.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${B}`}),onValueChange:U=>{p({target:{name:k.join(".."),value:U}})},value:z})},B);const{hasAllActionsSelected:G,hasSomeActionsSelected:te}=X(z);return(0,s.jsx)(f.k,{position:"relative",width:Z,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(D.C,{disabled:t,name:k.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${B}`}),onValueChange:U=>{c({target:{name:k.join(".."),value:U}})},value:G,indeterminate:te},B)},B)})})]})]}),_&&T&&(0,s.jsx)(y.x,{paddingBottom:2,children:(0,s.jsx)(ke,{isFormDisabled:t,parentName:`${a}..${x}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:_.children})})]},x)})]})},ps=(0,S.default)(y.x)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,hs=(0,S.default)(f.k)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ee} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${se(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&se(t)};
`,gs=S.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,ms=(0,S.default)(y.x)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,xs=S.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,fs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,I.Z)();return(0,s.jsxs)(f.k,{children:[(0,s.jsx)(f.k,{width:ge,height:ie,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(M.Z,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(f.k,{width:Z,shrink:0,justifyContent:"center",children:(0,s.jsx)(M.Z,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(f.k,{width:Z,shrink:0},n.label))]})},se=e=>(0,S.css)`
  ${M.Z} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ee} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,Cs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,I.Z)();return(0,s.jsx)(_s,{hasConditions:o,className:t,children:(0,s.jsx)(R.z,{variant:n,startIcon:(0,s.jsx)(Qe.Z,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},_s=(0,S.default)(y.x)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ae=(0,S.default)(Cs)``,Re=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,I.Z)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=Y(),c=j.useMemo(()=>Object.entries(pe(d,"category")),[d]),p=e.filter(({isDisplayed:h,hasSomeActionsSelected:x,hasAllActionsSelected:O})=>h&&Boolean(x||O)),[g,m]=j.useState(js(p,i,c)),C=(h,x)=>{m((0,je.ZP)(O=>{O[h]||(O[h]={}),O[h].default||(O[h].default={}),O[h].default=x}))},_=()=>{const h=Object.entries(g).reduce((x,O)=>{const[P,L]=O,E=Object.values(L).reduce((b,T)=>({...b,...T}),{});return x[P]=E,x},{});l(h),r()};return(0,s.jsxs)($.P,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(K.x,{children:(0,s.jsx)(es.O,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,x,O)=>(0,s.jsx)(ss.$,{isCurrent:x===O.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(le.f,{children:[p.length===0&&(0,s.jsx)(M.Z,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:p.map(({actionId:h,label:x,pathToConditionsObject:O},P)=>{const L=O.join("..");return(0,s.jsx)(ys,{arrayOfOptionsGroupedByCategory:c,label:x,isFormDisabled:o,isGrey:P%2===0,name:L,onChange:C,value:A(g,L,{})},h)})})]}),(0,s.jsx)(de.m,{startActions:(0,s.jsx)(R.z,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)(R.z,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},js=(e,t,o)=>e.reduce((n,r)=>{const a=A(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[c,p]=l,g=p.reduce((m,C)=>(m[C.id]=A(a,C.id,!1),m),{});return i[c]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),ys=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,I.Z)(),l=c=>{a&&a(r,bs(e,c))};return(0,s.jsxs)(f.k,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(f.k,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(M.Z,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(M.Z,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(M.Z,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(y.x,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(Ne.Q,{id:r,customizeContent:(c=[])=>`${c.length} currently selected`,onChange:l,value:Os(d),options:Es(e),disabled:t})})]})},Os=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Es=e=>e.reduce((t,[o,n])=>(t.push({label:re(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),bs=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),Ms=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=j.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:c},p)=>{const g=r===i,m=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(f.k,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(As,{availableActions:m,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&c.map(({label:C,value:_,children:h})=>(0,s.jsx)(ls,{availableActions:m,childrenForm:h,isFormDisabled:t,label:C,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},As=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=j.useState(!1),{formatMessage:c}=(0,I.Z)(),{modifiedData:p,onChangeParentCheckbox:g,onChangeSimpleCheckbox:m}=Y(),C=()=>{l(b=>!b)},_=()=>{l(!1)},h=A(p,d.split(".."),{}),x=j.useMemo(()=>Object.keys(h).reduce((b,T)=>(b[T]=ye(h[T],"conditions"),b),{}),[h]),{hasAllActionsSelected:O,hasSomeActionsSelected:P}=X(x),L=j.useMemo(()=>Ps(e,p,d),[e,p,d]),E=L.some(b=>b.hasConditions);return(0,s.jsxs)(vs,{isActive:t,children:[(0,s.jsxs)(Be,{height:ie,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(Le,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:P,value:O,isActive:t,children:(0,s.jsx)(We,{paddingLeft:2,children:t?(0,s.jsx)(Je.Z,{}):(0,s.jsx)(qe.Z,{})})}),(0,s.jsx)(f.k,{style:{flex:1},children:L.map(({actionId:b,hasSomeActionsSelected:T,isDisplayed:v,...B})=>{if(!v)return(0,s.jsx)(xe,{},b);const{hasConditions:W,hasAllActionsSelected:k,isParentCheckbox:z,checkboxName:G,label:te}=B;return z?(0,s.jsxs)(Ie,{justifyContent:"center",alignItems:"center",children:[W&&(0,s.jsx)(y.x,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.C,{disabled:n,name:G,"aria-label":c({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${te} ${r}`}),onValueChange:U=>{g({target:{name:G,value:U}})},indeterminate:T,value:k})]},b):(0,s.jsxs)(Ie,{justifyContent:"center",alignItems:"center",children:[W&&(0,s.jsx)(y.x,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(D.C,{disabled:n,indeterminate:W,name:G,onValueChange:U=>{m({target:{name:G,value:U}})},value:k})]},b)})}),i&&(0,s.jsx)(Re,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:L,isFormDisabled:n,onClosed:_,onToggle:C})]}),(0,s.jsx)(y.x,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ae,{onClick:C,hasConditions:E})})]})},Ps=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=J(a)?[...i,"properties","enabled"]:i,c=A(t,[...i,"conditions"],null),p={actionId:n,checkboxName:l.join(".."),hasConditions:F(c).some(_=>_),isDisplayed:r,label:d,pathToConditionsObject:i};if(J(a)){const _=A(t,l,!1);return{...p,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=A(t,l,null),{hasAllActionsSelected:m,hasSomeActionsSelected:C}=X(g);return{...p,hasAllActionsSelected:m,hasSomeActionsSelected:C,isParentCheckbox:!0}}),fe=(e,t)=>`
  ${Be} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${We} {
    display: flex;
  }
  ${ae} {
    display: block;
  }
  &:hover {
    ${se(e)}
  }

  &:focus-within {
    ${()=>fe(e,t)}
  }
`,Be=(0,S.default)(f.k)`
  border: 1px solid transparent;
`,vs=S.default.div`
  display: inline-flex;
  min-width: 100%;

  ${ae} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&fe(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>fe(e,t)}
  }
`,Ie=(0,S.default)(f.k)`
  width: ${Z};
  position: relative;
`,We=(0,S.default)(y.x)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ts=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,I.Z)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),d=e.filter(({subjects:l})=>l&&l.length),i=j.useMemo(()=>{const l=d.map(({actionId:m})=>m),c=r[o],p=l.reduce((m,C)=>(Object.keys(c).forEach(_=>{const h=A(c,[_,C]),x={[_]:me(h)};m[C]?m[C]={...m[C],...x}:m[C]=x}),m),{});return Object.keys(p).reduce((m,C)=>(m[C]=X(p[C]),m),{})},[r,d,o]);return(0,s.jsx)(y.x,{paddingBottom:4,paddingTop:6,style:{paddingLeft:ge},children:(0,s.jsx)(f.k,{gap:0,children:d.map(({label:l,actionId:c})=>(0,s.jsxs)(f.k,{shrink:0,width:Z,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(M.Z,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(D.C,{disabled:t,onValueChange:p=>{a(o,c,p)},name:c,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:A(i,[c,"hasAllActionsSelected"],!1),indeterminate:A(i,[c,"hasSomeActionsSelected"],!1)})]},c))})})},Ke=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(Ss,{background:"neutral0",children:[(0,s.jsx)(Ts,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(Ms,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ss=(0,S.default)(y.x)`
  overflow-x: auto;
`,Ue=({layout:e,...t})=>{const[o,n]=j.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(y.x,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ds,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ds=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,I.Z)(),c=()=>{d(o)},p=o.split("::").pop()??"";return(0,s.jsxs)(Ve.U,{expanded:n,onToggle:c,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(Ze.B,{title:re(p),description:`${l({id:"Settings.permissions.category",defaultMessage:p},{category:p})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(we.v,{children:(0,s.jsx)(y.x,{padding:6,children:e.map(({actions:g,subCategoryName:m,subCategoryId:C})=>(0,s.jsx)($s,{actions:g,categoryName:p,isFormDisabled:r,subCategoryName:m,pathToData:[...i,C]},m))})})]})},$s=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=j.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:c}=Y(),{formatMessage:p}=(0,I.Z)(),g=A(i,r,{}),m=j.useMemo(()=>Object.keys(g).reduce((E,b)=>(E[b]=me(g[b]),E),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:_}=X(m),h=()=>{d(E=>!E)},x=()=>{d(!1)},O=j.useMemo(()=>e.map(E=>{const b=[...r,E.action,"properties","enabled"],T=A(i,b,!1),v=A(i,[...r,E.action,"conditions"],{}),B=F(v).some(W=>W);return{...E,isDisplayed:T,checkboxName:b.join(".."),hasSomeActionsSelected:T,value:T,hasConditions:B,label:E.displayName,actionId:E.action,pathToConditionsObject:[...r,E.action]}}),[e,i,r]),P=A(i,[...r],{}),L=F(Object.entries(P).reduce((E,b)=>{const[T,{conditions:v}]=b;return E[T]=v,E},{})).some(E=>E);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.x,{children:[(0,s.jsxs)(f.k,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(y.x,{paddingRight:4,children:(0,s.jsx)(M.Z,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)(Ls,{flex:1}),(0,s.jsx)(y.x,{paddingLeft:4,children:(0,s.jsx)(Ce.X,{name:r.join(".."),disabled:o,onValueChange:E=>{l({target:{name:r.join(".."),value:E}})},indeterminate:_,value:C,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(f.k,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(He.r,{gap:2,style:{flex:1},children:O.map(({checkboxName:E,value:b,action:T,displayName:v,hasConditions:B})=>(0,s.jsx)(Ge.P,{col:3,children:(0,s.jsx)(ks,{disabled:o,hasConditions:B,children:(0,s.jsx)(Ce.X,{name:E,disabled:o,onValueChange:W=>{c({target:{name:E,value:W}})},value:b,children:v})})},T))}),(0,s.jsx)(ae,{hasConditions:L,onClick:h})]})]}),a&&(0,s.jsx)(Re,{headerBreadCrumbs:[t,n],actions:O,isFormDisabled:o,onClosed:x,onToggle:h})]})},Ls=(0,S.default)(y.x)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ks=S.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Rs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Bs=j.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=j.useReducer(Ws,Is,()=>Ks(e,o)),{formatMessage:l}=(0,I.Z)();j.useImperativeHandle(n,()=>({getPermissions(){const _=(0,ce.e5)(r.collectionTypes,d.collectionTypes),h=(0,ce.e5)(r.singleTypes,d.singleTypes),x={..._,...h};let O;return J(x)?O=!1:O=Object.values(x).some((P={})=>Object.values(P).some(L=>ne(L,"conditions"))),{permissionsToSend:rs(d),didUpdateConditions:O}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const c=(_,h,x,O)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:x,value:O})},p=(_,h,x)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:x})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},m=j.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),C=j.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(os,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:m,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:c,onChangeCollectionTypeGlobalActionCheckbox:p,children:(0,s.jsxs)(Fe.v,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(_e.m,{children:Rs.map(_=>(0,s.jsx)(_e.O,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(Q.n,{style:{position:"relative"},children:[(0,s.jsx)(Q.x,{children:(0,s.jsx)(Ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(Q.x,{children:(0,s.jsx)(Ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(Q.x,{children:(0,s.jsx)(Ue,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(Q.x,{children:(0,s.jsx)(Ue,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},Ws=(e,t)=>(0,je.ZP)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(A(e,d)).forEach(i=>{const l=A(e,[...d,i,r],void 0);if(l){let c=q(l,a);if(!a&&c.conditions){const p=q(c.conditions,!1);c={...c,conditions:p}}V(o,[...d,i,r],c)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=ue(e.modifiedData);const l=n.split(".."),c=A(i,l,{});Object.keys(c).forEach(p=>{if(ne(c[p],`properties.${r}`)){const g=A(c,[p,"properties",r,a]),m=[...l,p,"properties",r,a];if(!(0,H.o)(g))V(i,m,d);else{const C=q(g,d);V(i,m,C)}}}),d||(i=oe(i)),V(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;V(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=ue(e.modifiedData);V(n,[...t.keys.split("..")],t.value),t.value||(n=oe(n)),V(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=ue(e.modifiedData);const i=A(d,a,{}),l=q(i,r);V(d,a,l),r||(d=oe(d)),V(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ks=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:Se(a,"plugin"),settings:Se(d,"category")},l={collectionTypes:Te(n,o,t),singleTypes:Te(r,o,t),plugins:ve(i.plugins,o,t),settings:ve(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}},Us=(e={id:null},t={})=>{const{id:o,...n}=e,{get:r}=(0,ce.kY)(),{data:a,error:d,isError:i,isLoading:l,refetch:c}=(0,ns.useQuery)(["roles",o,"permissions",n],async()=>{const{data:{data:p}}=await r(`/admin/roles/${o}/permissions`,{params:n});return p},t);return{permissions:a,error:d,isError:i,isLoading:l,refetch:c}}},61181:(N,w,u)=>{"use strict";u.d(w,{Q:()=>y});var s=u(74081),j=u(19003),f=u(97232);const y=({options:M,...R})=>(0,s.jsx)(f.NU,{...R,children:M.map($=>"children"in $?(0,s.jsx)(f.Ab,{label:$.label,values:$.children.map(K=>K.value.toString()),children:$.children.map(K=>(0,s.jsx)(D,{value:K.value,children:K.label},K.value))},$.label):(0,s.jsx)(f.ML,{value:$.value,children:$.label},$.value))}),D=(0,j.default)(f.ML)`
  padding-left: ${({theme:M})=>M.spaces[7]};
`}}]);
