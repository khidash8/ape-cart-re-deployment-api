"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[1895],{5560:(z,f,t)=>{t.d(f,{F:()=>O});var s=t(74081),u=t(27279),h=t(93415),I=t(48102),g=t(94050),R=t(57121),P=t(61020);const O=({displayedFilters:T})=>{const[C,B]=u.useState(!1),{formatMessage:y}=(0,P.Z)(),c=u.useRef(null),A=()=>{B(K=>!K)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(h.x,{paddingTop:1,paddingBottom:1,children:[(0,s.jsx)(I.z,{variant:"tertiary",ref:c,startIcon:(0,s.jsx)(R.Z,{}),onClick:A,size:"S",children:y({id:"app.utils.filters",defaultMessage:"Filters"})}),C&&(0,s.jsx)(g.J5,{displayedFilters:T,isVisible:C,onToggle:A,source:c})]}),(0,s.jsx)(g.W$,{filtersSchema:T})]})}},81895:(z,f,t)=>{t.d(f,{ProtectedAuditLogsListPage:()=>lt});var s=t(74081),u=t(5938),h=t(6918),I=t(15244),g=t(10701),R=t(77970),P=t(93415),O=t(32370),T=t(23298),C=t(28502),B=t(86967),y=t(93153),c=t(50086),A=t(4987),K=t(8295),H=t(61121),J=t(27997),S=t(74758),X=t(73354),G=t(27875),b=t(37472),r=t(94050),L=t(61020),F=t(59461),k=t(5560),Z=t(66947),w=t(89486),q=t(82298),$=t(40464),tt=t(33866),st=t(98264),W=t(70627),et=t(51447),at=t(42816),Et=t(27279),mt=t(64797),Mt=t(85811),Dt=t(43433),gt=t(98934),Ot=t(8175),Pt=t(15816),ct=t(97442),Lt=t(13576),ut=t(87830),Tt=t(47184),Ct=t(364),At=t(71563),vt=t(49204),pt=t(47853),Ut=t(74919),ft=t(29206),ht=t(75719),It=t(6078),Rt=t(51943),Bt=t(55783),yt=t(92249),Kt=t(41942),Wt=t(22919),xt=t(53915),jt=t(75041),St=t(30200),Ft=t(91379),Zt=t(33299),$t=t(33409),Nt=t(63645),Vt=t(7988),Qt=t(7055),Yt=t(26757),zt=t(58311),Ht=t(29510),Jt=t(16946),Xt=t(10124),Gt=t(69530),bt=t(86961),kt=t(51527),wt=t(19764),qt=t(42982),ts=t(26126);const N=()=>{const{formatDate:e}=(0,L.Z)();return l=>{const n=(0,tt.Z)(l),_=e(n,{dateStyle:"long"}),i=e(n,{timeStyle:"medium",hourCycle:"h24"});return`${_}, ${i}`}},V={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},x=e=>V[e]||e,nt=({handleClose:e,logId:d})=>{const{get:l}=(0,r.kY)(),n=(0,r.lm)(),_=async M=>{const{data:m}=await l(`/admin/audit-logs/${M}`);if(!m)throw new Error("Audit log not found");return m},{data:i,status:a}=(0,$.useQuery)(["audit-log",d],()=>_(d),{onError(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),e()}}),o=N(),E=i&&"date"in i?o(i.date):"";return(0,s.jsxs)(u.P,{onClose:e,labelledBy:"title",children:[(0,s.jsx)(h.x,{children:(0,s.jsx)(w.O,{label:E,id:"title",children:(0,s.jsx)(q.$,{isCurrent:!0,children:E})})}),(0,s.jsx)(I.f,{children:(0,s.jsx)(it,{status:a,data:i,formattedDate:E})})]})},it=({status:e,data:d,formattedDate:l})=>{const{formatMessage:n}=(0,L.Z)();if(e==="loading")return(0,s.jsx)(g.k,{padding:7,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(R.a,{children:"Loading content..."})});const{action:_,user:i,payload:a}=d;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(P.x,{marginBottom:3,children:(0,s.jsx)(O.Z,{variant:"delta",id:"title",children:n({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,s.jsxs)(T.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,s.jsx)(v,{actionLabel:n({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:n({id:`Settings.permissions.auditLogs.${_}`,defaultMessage:x(_)},{model:a?.model})}),(0,s.jsx)(v,{actionLabel:n({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:l}),(0,s.jsx)(v,{actionLabel:n({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:i?.displayName||"-"}),(0,s.jsx)(v,{actionLabel:n({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:i?.id.toString()||"-"})]}),(0,s.jsx)(C.V,{value:JSON.stringify(a,null,2),disabled:!0,label:n({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})},v=({actionLabel:e,actionName:d})=>(0,s.jsxs)(g.k,{direction:"column",alignItems:"baseline",gap:1,children:[(0,s.jsx)(O.Z,{textColor:"neutral600",variant:"sigma",children:e}),(0,s.jsx)(O.Z,{textColor:"neutral600",children:d})]}),ot=({pagination:e}={pagination:{page:1,pageCount:0,pageSize:50,total:0}})=>(0,s.jsx)(P.x,{paddingTop:4,children:(0,s.jsxs)(g.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,s.jsx)(r.v4,{}),(0,s.jsx)(r.tU,{pagination:e})]})}),j=({headers:e,rows:d,onOpenModal:l})=>{const{formatMessage:n}=(0,L.Z)(),_=N(),i=({type:a,value:o,model:E})=>a==="date"?_(o):a==="action"?n({id:`Settings.permissions.auditLogs.${o}`,defaultMessage:x(o)},{model:E}):o||"-";return(0,s.jsx)(B.p,{children:d.map(a=>(0,s.jsxs)(y.Tr,{...(0,r.X7)({fn:()=>l(a.id)}),children:[e?.map(({key:o,name:E,cellFormatter:M})=>{const m=a[E];return(0,s.jsx)(c.Td,{children:(0,s.jsx)(O.Z,{textColor:"neutral800",children:i({type:o,value:M?M(m):m,model:a.payload?.model})})},o)}),(0,s.jsx)(c.Td,{...r.UW,children:(0,s.jsx)(g.k,{justifyContent:"end",children:(0,s.jsx)(A.h,{onClick:()=>l(a.id),"aria-label":n({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${a.action} action`}),noBorder:!0,icon:(0,s.jsx)(st.Z,{})})})})]},a.id))})};j.defaultProps={rows:[]},j.propTypes={headers:W.array.isRequired,rows:W.array,onOpenModal:W.func.isRequired};const dt=({canReadAuditLogs:e,canReadUsers:d})=>{const{get:l}=(0,r.kY)(),{search:n}=(0,et.TH)(),_=(0,r.lm)(),[{query:i}]=(0,r.Kx)(),a={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:D=>_({type:"warning",message:D.message})},{users:o,isError:E,isLoading:M}=(0,at.g)({},{...a,enabled:d,staleTime:2*(1e3*60)}),{data:m,isLoading:p,isError:U}=(0,$.useQuery)(["auditLogs",n],async()=>{const{data:D}=await l("/admin/audit-logs",{params:i});return D},{...a,enabled:e});return{auditLogs:m,users:o,isLoading:M||p,hasError:U||E}},Q=({value:e,options:d,onChange:l}={value:void 0})=>{const{formatMessage:n}=(0,L.Z)(),_=n({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,s.jsx)(K.hQ,{"aria-label":_,value:e,onChange:l,children:d?.map(({label:i,customValue:a})=>(0,s.jsx)(H.O,{value:a,children:i},a))})},Y=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],_t=({formatMessage:e,users:d,canReadUsers:l})=>{const n=Object.keys(V).map(i=>({label:e({id:`Settings.permissions.auditLogs.${i}`,defaultMessage:x(i)},{model:void 0}),customValue:i})),_=[{name:"action",metadatas:{customOperators:Y,label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:Q,options:n},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(l&&d){const i=o=>o.username?o.username:o.firstname&&o.lastname?e({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:o.firstname,lastname:o.lastname}):o.email,a=d.map(o=>({label:i(o),customValue:o.id.toString()}));return[..._,{name:"user",metadatas:{customOperators:Y,label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:a,customInput:Q},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return _},rt=()=>{const{formatMessage:e}=(0,L.Z)(),d=(0,F.v9)(Z.s),{allowedActions:{canRead:l,canReadUsers:n}}=(0,r.ss)({...d.settings?.auditLogs,readUsers:d.settings?.users.read||[]}),[{query:_},i]=(0,r.Kx)(),{auditLogs:a,users:o,isLoading:E,hasError:M}=dt({canReadAuditLogs:l,canReadUsers:n});(0,r.go)();const m=_t({formatMessage:e,users:o,canReadUsers:n}),p=e({id:"global.auditLogs",defaultMessage:"Audit Logs"}),U=[{name:"action",key:"action",metadatas:{label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0}},{name:"date",key:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0}},{key:"user",name:"user",metadatas:{label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1},cellFormatter:D=>D?D.displayName:""}];return M?(0,s.jsx)(J.A,{children:(0,s.jsx)(S.D,{children:(0,s.jsx)(P.x,{paddingTop:8,children:(0,s.jsx)(r.Hn,{})})})}):(0,s.jsxs)(X.o,{"aria-busy":E,children:[(0,s.jsx)(r.SL,{name:p}),(0,s.jsx)(G.T,{title:p,subtitle:e({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,s.jsx)(b.Z,{startActions:(0,s.jsx)(k.F,{displayedFilters:m})}),(0,s.jsxs)(S.D,{children:[(0,s.jsx)(r.tM,{contentType:"Audit logs",headers:U,rows:a?.results||[],withBulkActions:!0,isLoading:E,children:(0,s.jsx)(j,{headers:U,rows:a?.results||[],onOpenModal:D=>i({id:`${D}`})})}),a?.pagination&&(0,s.jsx)(ot,{pagination:a.pagination})]}),_?.id&&(0,s.jsx)(nt,{handleClose:()=>i({id:null},"remove"),logId:_.id})]})},lt=()=>{const e=(0,F.v9)(Z.s);return(0,s.jsx)(r.O4,{permissions:e.settings?.auditLogs?.main,children:(0,s.jsx)(rt,{})})}}}]);
