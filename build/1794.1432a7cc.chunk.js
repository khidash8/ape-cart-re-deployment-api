"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[1794],{81794:(ns,c,s)=>{s.d(c,{ProtectedCreatePage:()=>Q});var t=s(74081),O=s(27279),B=s(73354),I=s(27875),l=s(10701),m=s(48102),T=s(74758),E=s(93415),h=s(32370),U=s(23298),C=s(74577),W=s(12881),K=s(39708),f=s(79213),o=s(94050),x=s(76827),j=s(84260),y=s(71563),u=s(10124),p=s(61020),S=s(40464),$=s(59461),R=s(51447),N=s(47533),Z=s(19003),P=s(47853),z=s(66947),v=s(29679),is=s(64797),Es=s(85811),ds=s(42816),es=s(15816),ls=s(97442),rs=s(13576),Ps=s(87830),Ms=s(47184),Ds=s(364),Os=s(49204),ms=s(74919),hs=s(29206),Cs=s(98934),Rs=s(43433),vs=s(75719),gs=s(8175),As=s(6078),Ls=s(51943),cs=s(55783),Bs=s(92249),Is=s(41942),Ts=s(22919),Us=s(53915),Ws=s(75041),Ks=s(30200),fs=s(91379),xs=s(33299),js=s(33409),ys=s(63645),us=s(7988),ps=s(7055),Ss=s(26757),$s=s(58311),Ns=s(29510),Zs=s(16946),zs=s(69530),Fs=s(86961),Hs=s(51527),Js=s(19764),Qs=s(42982),Vs=s(26126),Ys=s(10131),Gs=s(63799);const F=P.Ry().shape({name:P.Z_().required(o.I0.required),description:P.Z_().required(o.I0.required)}),H=()=>{const a=(0,R.$B)("/settings/roles/duplicate/:id"),g=(0,o.lm)(),{lockApp:V,unlockApp:Y}=(0,o.o1)(),{formatMessage:_}=(0,p.Z)(),[G,M]=O.useState(!1),{replace:X}=(0,R.k6)(),D=O.useRef(null),{trackUsage:r}=(0,o.rS)(),{post:b,put:k,get:w}=(0,o.kY)(),d=a?.params.id??null,{isLoading:q,data:A}=(0,S.useQuery)(["permissions",d],async()=>{const{data:{data:e}}=await w("/admin/permissions",{params:{role:d}});return e},{cacheTime:0}),{permissions:ss,isLoading:ts}=(0,v.u)({id:d},{cacheTime:0,enabled:!!d}),as=e=>{V?.(),M(!0),r(d?"willDuplicateRole":"willCreateNewRole"),Promise.resolve(b("/admin/roles",e)).then(async({data:n})=>{const{permissionsToSend:i}=D.current?.getPermissions()??{};return r(d?"didDuplicateRole":"didCreateNewRole"),n.data.id&&!u(i)&&await k(`/admin/roles/${n.data.id}/permissions`,{permissions:i}),n}).then(n=>{M(!1),g({type:"success",message:{id:"Settings.roles.created",defaultMessage:"created"}}),X(`/settings/roles/${n.data.id}`)}).catch(n=>{console.error(n),M(!1),g({type:"warning",message:{id:"notification.error"}})}).finally(()=>{Y?.()})},_s=`${_({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${(0,j.Z)(new Date,"PPP")}`;return(0,t.jsxs)(B.o,{children:[(0,t.jsx)(o.SL,{name:"Roles"}),(0,t.jsx)(y.J9,{initialValues:{name:"",description:_s},onSubmit:as,validationSchema:F,validateOnChange:!1,children:({handleSubmit:e,values:n,errors:i,handleReset:os,handleChange:L})=>(0,t.jsx)(o.l0,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.T,{primaryAction:(0,t.jsxs)(l.k,{gap:2,children:[(0,t.jsx)(m.z,{variant:"secondary",onClick:()=>{os(),D.current?.resetForm()},size:"L",children:_({id:"app.components.Button.reset",defaultMessage:"Reset"})}),(0,t.jsx)(m.z,{onClick:e,loading:G,size:"L",children:_({id:"global.save",defaultMessage:"Save"})})]}),title:_({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:_({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(f.r,{as:N.NavLink,startIcon:(0,t.jsx)(x.Z,{}),to:"/settings/roles",children:_({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.D,{children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(l.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(l.k,{justifyContent:"space-between",children:[(0,t.jsxs)(E.x,{children:[(0,t.jsx)(E.x,{children:(0,t.jsx)(h.Z,{fontWeight:"bold",children:_({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(E.x,{children:(0,t.jsx)(h.Z,{variant:"pi",textColor:"neutral600",children:_({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(J,{children:_({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),(0,t.jsxs)(U.r,{gap:4,children:[(0,t.jsx)(C.P,{col:6,children:(0,t.jsx)(W.o,{name:"name",error:i.name&&_({id:i.name}),label:_({id:"global.name",defaultMessage:"Name"}),onChange:L,required:!0,value:n.name})}),(0,t.jsx)(C.P,{col:6,children:(0,t.jsx)(K.g,{label:_({id:"global.description",defaultMessage:"Description"}),id:"description",error:i.description&&_({id:i.description}),onChange:L,children:n.description})})]})]})}),!q&&!ts&&A?(0,t.jsx)(E.x,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(v.P,{isFormDisabled:!1,ref:D,permissions:ss,layout:A})}):(0,t.jsx)(E.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.dO,{})})]})})]})})})]})},J=Z.default.div`
  border: 1px solid ${({theme:a})=>a.colors.primary200};
  background: ${({theme:a})=>a.colors.primary100};
  padding: ${({theme:a})=>`${a.spaces[2]} ${a.spaces[4]}`};
  color: ${({theme:a})=>a.colors.primary600};
  border-radius: ${({theme:a})=>a.borderRadius};
  font-size: ${12/16}rem;
  font-weight: bold;
`,Q=()=>{const a=(0,$.v9)(z.s);return(0,t.jsx)(o.O4,{permissions:a.settings?.roles.create,children:(0,t.jsx)(H,{})})}}}]);
