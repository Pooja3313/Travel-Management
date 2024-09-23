"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[592],{30953:(e,t,o)=>{o.d(t,{A:()=>p});var n=o(96446),r=o(88446),l=o(88911),s=o(94496),a=o(22698),i=o(99933),d=o(70579);function c(e){let{link:t,activeLast:o,disabled:l}=e;const{name:s,href:a,icon:c}=t,p={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...l&&!o&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},h=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(n.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),s]});return a?(0,d.jsx)(r.A,{component:i.W,href:a,sx:p,children:h}):(0,d.jsxs)(n.A,{sx:p,children:[" ",h," "]})}function p(e){let{links:t,action:o,heading:i,moreLink:p,activeLast:x,sx:u,...m}=e;const g=t[t.length-1].name;return(0,d.jsxs)(n.A,{sx:{...u},children:[(0,d.jsxs)(l.A,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(n.A,{sx:{flexGrow:1},children:[i&&(0,d.jsx)(s.A,{variant:"h4",gutterBottom:!0,children:i}),!!t.length&&(0,d.jsx)(a.A,{separator:(0,d.jsx)(h,{}),...m,children:t.map((e=>(0,d.jsx)(c,{link:e,activeLast:x,disabled:e.name===g},e.name||"")))})]}),o&&(0,d.jsxs)(n.A,{sx:{flexShrink:0},children:[" ",o," "]})]}),!!p&&(0,d.jsx)(n.A,{sx:{mt:2},children:p.map((e=>(0,d.jsx)(r.A,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function h(){return(0,d.jsx)(n.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},41398:(e,t,o)=>{o.d(t,{T:()=>d});var n=o(49633),r=o(83462),l=o(4219),s=o(29347),a=o(35316),i=o(70579);function d(e){let{title:t,content:o,action:d,open:c,onClose:p,...h}=e;return(0,i.jsxs)(r.A,{fullWidth:!0,maxWidth:"xs",open:c,onClose:p,...h,children:[(0,i.jsx)(l.A,{sx:{pb:2},children:t}),o&&(0,i.jsxs)(a.A,{sx:{typography:"body2"},children:[" ",o," "]}),(0,i.jsxs)(s.A,{children:[d,(0,i.jsx)(n.A,{variant:"outlined",color:"inherit",onClick:p,children:"Cancel"})]})]})}},94857:(e,t,o)=>{o.d(t,{dh:()=>n.dh});var n=o(26038);o(54582)},46838:(e,t,o)=>{function n(e,t,o){return e?Math.max(0,(1+e)*t-o):0}function r(e,t,o){return null===e[o]?1:null===t[o]||t[o]<e[o]?-1:t[o]>e[o]?1:0}function l(e,t){return"desc"===e?(e,o)=>r(e,o,t):(e,o)=>-r(e,o,t)}o.d(t,{dO:()=>j,er:()=>b,Sm:()=>g,We:()=>S,Uv:()=>C,xl:()=>n,hz:()=>l,K2:()=>a});var s=o(65043);function a(e){const[t,o]=(0,s.useState)(!(null===e||void 0===e||!e.defaultDense)),[n,r]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[l,a]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[i,d]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),[c,p]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[h,x]=(0,s.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),u=(0,s.useCallback)((e=>{""!==e&&(p(l===e&&"asc"===c?"desc":"asc"),a(e))}),[c,l]),m=(0,s.useCallback)((e=>{const t=h.includes(e)?h.filter((t=>t!==e)):[...h,e];x(t)}),[h]),g=(0,s.useCallback)((e=>{r(0),d(parseInt(e.target.value,10))}),[]),j=(0,s.useCallback)((e=>{o(e.target.checked)}),[]),A=(0,s.useCallback)(((e,t)=>{x(e?t:[])}),[]),v=(0,s.useCallback)(((e,t)=>{r(t)}),[]),w=(0,s.useCallback)((()=>{r(0)}),[]),f=(0,s.useCallback)((e=>{x([]),n&&e<2&&r(n-1)}),[n]),b=(0,s.useCallback)((e=>{let{totalRows:t,totalRowsInPage:o,totalRowsFiltered:l}=e;const s=h.length;if(x([]),n)if(s===o)r(n-1);else if(s===l)r(0);else if(s>o){const e=Math.ceil((t-s)/i)-1;r(e)}}),[n,i,h.length]);return{dense:t,order:c,page:n,orderBy:l,rowsPerPage:i,selected:h,onSelectRow:m,onSelectAllRows:A,onSort:u,onChangePage:v,onChangeDense:j,onResetPage:w,onChangeRowsPerPage:g,onUpdatePageDeleteRow:f,onUpdatePageDeleteRows:b,setPage:r,setDense:o,setOrder:p,setOrderBy:a,setSelected:x,setRowsPerPage:d}}var i=o(68738),d=o(39652),c=o(90310),p=o(96446),h=o(94496),x=o(88911),u=o(70579);function m(e){let{title:t,imgUrl:o,action:n,filled:r,description:l,sx:s,...a}=e;return(0,u.jsxs)(x.A,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...r&&{borderRadius:2,bgcolor:e=>(0,c.X4)(e.palette.grey[500],.04),border:e=>"dashed 1px ".concat((0,c.X4)(e.palette.grey[500],.08))},...s},...a,children:[(0,u.jsx)(p.A,{component:"img",alt:"empty content",src:o||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),t&&(0,u.jsx)(h.A,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:t}),l&&(0,u.jsx)(h.A,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:l}),n&&n]})}function g(e){let{notFound:t,sx:o}=e;return(0,u.jsx)(i.A,{children:t?(0,u.jsx)(d.A,{colSpan:12,children:(0,u.jsx)(m,{filled:!0,title:"No Data",sx:{py:10,...o}})}):(0,u.jsx)(d.A,{colSpan:12,sx:{p:0}})})}function j(e){let{emptyRows:t,height:o}=e;return t?(0,u.jsx)(i.A,{sx:{...o&&{height:o*t}},children:(0,u.jsx)(d.A,{colSpan:9})}):null}var A=o(1273),v=o(84882),w=o(58093);const f={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function b(e){let{order:t,orderBy:o,rowCount:n=0,headLabel:r,numSelected:l=0,onSort:s,onSelectAllRows:a,sx:c}=e;return(0,u.jsx)(v.A,{sx:c,children:(0,u.jsxs)(i.A,{children:[a&&(0,u.jsx)(d.A,{padding:"checkbox",children:(0,u.jsx)(A.A,{indeterminate:!!l&&l<n,checked:!!n&&l===n,onChange:e=>a(e.target.checked)})}),r.map((e=>(0,u.jsx)(d.A,{align:e.align||"left",sortDirection:o===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:s?(0,u.jsxs)(w.A,{hideSortIcon:!0,active:o===e.id,direction:o===e.id?t:"asc",onClick:()=>s(e.id),children:[e.label,o===e.id?(0,u.jsx)(p.A,{sx:{...f},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))]})})}function C(e){let{dense:t,action:o,rowCount:n,numSelected:r,onSelectAllRows:l,sx:s,...a}=e;return r?(0,u.jsxs)(x.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...s},...a,children:[(0,u.jsx)(A.A,{indeterminate:!!r&&r<n,checked:!!n&&r===n,onChange:e=>l(e.target.checked)}),(0,u.jsxs)(h.A,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[r," selected"]}),o&&o]}):null}var y=o(67803);function S(e){let{rowsPerPageOptions:t=[5,10,25],sx:o,...n}=e;return(0,u.jsx)(p.A,{sx:{position:"relative",...o},children:(0,u.jsx)(y.A,{rowsPerPageOptions:t,component:"div",...n,sx:{borderTopColor:"transparent"}})})}},63287:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ue});var n=o(29490),r=o(19853),l=o.n(r),s=o(65043),a=o(90310),i=o(40360),d=o(69869),c=o(12110),p=o(71806),h=o(49633),x=o(77739),u=o(19252),m=o(73460),g=o(17392),j=o(79650),A=o(48407),v=o(67132),w=o(99933),f=o(61361),b=o(59229),C=o(32184),y=o(2746),S=o(12933),k=o(41398),P=o(19442),D=o(30953),R=o(46838),F=o(81045),O=o(94814),I=o(68738),T=o(1273),N=o(39652),E=o(48734),q=o(90178),L=o(80899),M=o(24858),z=o(18403),W=o(38246),Y=o(96446),B=o(71861),U=o(83462),_=o(4219),H=o(29347),G=o(35316),V=o(26487),X=o(94857),$=o(46170),K=o(70579);function Q(e){let{currentUser:t,open:o,onClose:n}=e;const r=(0,v.rd)(),{enqueueSnackbar:l}=(0,X.dh)(),a=L.Ik().shape({EmpName:L.Yj().required("Name is required"),EmpID:L.Yj().required("Emp_ID is required"),role:L.Yj().required("Role is required"),department:L.Yj().required("Department is required"),projectTitle:L.Yj().required("Project Title is required"),from:L.Yj().required("Destination is required"),to:L.Yj().required("Destination is required"),startDate:L.p6().required("Start Date is required"),endDate:L.p6().required("End Date is required"),purpose:L.Yj().required("Trip Purpose is required"),accommodation:L.Yj().required("Accommodation is required"),transportation:L.Yj().required("Transportation Name is required"),FoodNeededs:L.Yj().required("Need Food Facility is required"),foodOption:L.YO().min(1,"Choose at least one option"),status:L.Yj(),isVerified:L.zM()}),i=(0,s.useMemo)((()=>({EmpName:(null===t||void 0===t?void 0:t.EmpName)||"",EmpID:(null===t||void 0===t?void 0:t.EmpID)||"",department:(null===t||void 0===t?void 0:t.department)||"",projectTitle:(null===t||void 0===t?void 0:t.projectTitle)||"",from:(null===t||void 0===t?void 0:t.from)||"",to:(null===t||void 0===t?void 0:t.to)||"",startDate:(null===t||void 0===t?void 0:t.startDate)||"",endDate:(null===t||void 0===t?void 0:t.endDate)||"",purpose:(null===t||void 0===t?void 0:t.purpose)||"",accommodation:null===t||void 0===t?void 0:t.accommodation,transportation:(null===t||void 0===t?void 0:t.transportation)||"",role:(null===t||void 0===t?void 0:t.role)||"",status:(null===t||void 0===t?void 0:t.status)||"",FoodNeededs:(null===t||void 0===t?void 0:t.FoodNeededs)||"",foodOption:(null===t||void 0===t?void 0:t.foodOption)||[],isVerified:(null===t||void 0===t?void 0:t.isVerified)||!0})),[t]),d=(0,M.mN)({resolver:(0,z.t)(a),defaultValues:i}),{reset:c,watch:p,handleSubmit:x,formState:{isSubmitting:u}}=d,m=p(),g=x((async e=>{try{await new Promise((e=>setTimeout(e,500))),c(),n(),l("Update success!"),r.push(A.f.dashboard.group.root),console.info("DATA",e)}catch(t){console.error(t)}}));return(0,K.jsx)(U.A,{fullWidth:!0,maxWidth:!1,open:o,onClose:n,PaperProps:{sx:{maxWidth:720}},children:(0,K.jsxs)($.Ay,{methods:d,onSubmit:g,children:[(0,K.jsx)(_.A,{children:"Quick Update"}),(0,K.jsxs)(G.A,{children:[(0,K.jsx)(B.A,{variant:"outlined",severity:"info",sx:{mb:3},children:"Account is waiting for confirmation"}),(0,K.jsxs)(Y.A,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[(0,K.jsx)($.tX,{name:"status",label:"Status",children:f.C4.map((e=>(0,K.jsx)(O.A,{value:e.value,children:e.label},e.value)))}),(0,K.jsx)(Y.A,{sx:{display:{xs:"none",sm:"block"}}}),(0,K.jsx)($.o3,{name:"EmpName",label:"Full Name"}),(0,K.jsx)($.o3,{name:"EmpID",label:"Employee ID"}),(0,K.jsx)($.o3,{name:"department",label:"Department"}),(0,K.jsx)($.j2,{name:"role",label:"Role",autoHighlight:!0,options:f.gs.map((e=>e)),getOptionLabel:e=>e,renderOption:(e,t)=>(0,s.createElement)("li",{...e,key:t},t)}),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)($.o3,{name:"from",label:"From Destination"}),(0,K.jsx)($.o3,{name:"to",label:"To Destination"}),(0,K.jsx)($.o3,{name:"startDate",label:"Start Date"}),(0,K.jsx)($.o3,{name:"endDate",label:"End Date"}),(0,K.jsx)($.o3,{name:"projectTitle",label:"Project Title"}),(0,K.jsx)($.o3,{name:"purpose",label:"purpose"}),(0,K.jsx)($.j2,{name:"accommodation",label:"Accommodation",autoHighlight:!0,options:f.mJ.map((e=>e)),getOptionLabel:e=>e,renderOption:(e,t)=>(0,s.createElement)("li",{...e,key:t},t)}),(0,K.jsx)($.j2,{name:"transportation",label:"Transportation",autoHighlight:!0,options:f.GW.map((e=>e)),getOptionLabel:e=>e,renderOption:(e,t)=>(0,s.createElement)("li",{...e,key:t},t)}),(0,K.jsx)($.b$,{row:!0,name:"FoodNeededs",label:"foodNeeded",spacing:4,options:f.$u}),"yes"===m.FoodNeededs&&(0,K.jsx)($.j2,{name:"foodOption",placeholder:"+ FoodOptions",multiple:!0,disableCloseOnSelect:!0,options:f.tX.map((e=>e)),getOptionLabel:e=>e,renderOption:(e,t)=>(0,s.createElement)("li",{...e,key:t},t),renderTags:(e,t)=>e.map(((e,o)=>(0,s.createElement)(V.A,{...t({index:o}),key:e,label:e,size:"small",color:"info",variant:"soft"})))})]})]})]}),(0,K.jsxs)(H.A,{children:[(0,K.jsx)(h.A,{variant:"outlined",onClick:n,children:"Cancel"}),(0,K.jsx)(W.A,{type:"submit",variant:"contained",loading:u,children:"Update"})]})]})})}function Z(e){let{row:t,selected:o,onSelectRow:n,onDeleteRow:r,onSixRow:l}=e;const{EmpName:s,EmpID:a,role:i,department:d,projectTitle:c,from:p,to:u,startDate:m,endDate:j,purpose:A,accommodation:v,transportation:w,FoodNeededs:f,foodOption:S,status:P,avatarUrl:D}=t,R=(0,b.C)(),L=(0,b.C)(),M=(0,q.f)();return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(I.A,{hover:!0,selected:o,children:[(0,K.jsx)(N.A,{padding:"checkbox",children:(0,K.jsx)(T.A,{checked:o,onClick:n})}),(0,K.jsxs)(N.A,{sx:{display:"flex",alignItems:"center"},children:[(0,K.jsx)(F.A,{alt:s,src:D,sx:{mr:2}}),(0,K.jsx)(E.A,{primary:a,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:s}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:i}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:d}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:c}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:p}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:u}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:m}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:j}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:A}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:v}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:w}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:f}),(0,K.jsx)(N.A,{sx:{whiteSpace:"nowrap"},children:S}),(0,K.jsx)(N.A,{children:(0,K.jsx)(C.A,{variant:"soft",color:("approve"===P?"success":"pending"===P&&"warning")||"reject"===P&&"error"||"default",children:P})}),(0,K.jsxs)(N.A,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[(0,K.jsx)(x.A,{title:"Quick Edit",placement:"top",arrow:!0,children:(0,K.jsx)(g.A,{color:L.value?"inherit":"default",onClick:L.onTrue,children:(0,K.jsx)(y.A,{icon:"solar:pen-bold"})})}),(0,K.jsx)(g.A,{color:M.open?"inherit":"default",onClick:M.onOpen,children:(0,K.jsx)(y.A,{icon:"eva:more-vertical-fill"})})]})]}),(0,K.jsx)(Q,{currentUser:t,open:L.value,onClose:L.onFalse}),(0,K.jsxs)(q.A,{open:M.open,onClose:M.onClose,arrow:"right-top",sx:{width:140},children:[(0,K.jsxs)(O.A,{onClick:()=>{R.onTrue(),M.onClose()},sx:{color:"error.main"},children:[(0,K.jsx)(y.A,{icon:"solar:trash-bin-trash-bold"}),"Delete"]}),(0,K.jsxs)(O.A,{onClick:()=>{l(),M.onClose()},children:[(0,K.jsx)(y.A,{icon:"solar:pen-bold"}),"Reimbursement Form"]})]}),(0,K.jsx)(k.T,{open:R.value,onClose:R.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,K.jsx)(h.A,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})}var J=o(88911),ee=o(67784),te=o(17642),oe=o(53193),ne=o(74050),re=o(51787),le=o(93088);function se(e){let{filters:t,onFilters:o,roleOptions:n}=e;const r=(0,q.f)(),l=(0,s.useCallback)((e=>{o("EmpName",e.target.value)}),[o]),a=(0,s.useCallback)((e=>{o("role","string"===typeof e.target.value?e.target.value.split(","):e.target.value)}),[o]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(J.A,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,K.jsxs)(oe.A,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[(0,K.jsx)(te.A,{children:"Role"}),(0,K.jsx)(le.A,{multiple:!0,value:t.role,onChange:a,input:(0,K.jsx)(ne.A,{label:"Roles"}),renderValue:e=>e.map((e=>e)).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:n.map((e=>(0,K.jsxs)(O.A,{value:e,children:[(0,K.jsx)(T.A,{disableRipple:!0,size:"small",checked:t.role.includes(e)}),e]},e)))})]}),(0,K.jsxs)(J.A,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[(0,K.jsx)(ee.A,{fullWidth:!0,value:t.name,onChange:l,placeholder:"Search...",InputProps:{startAdornment:(0,K.jsx)(re.A,{position:"start",children:(0,K.jsx)(y.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),(0,K.jsx)(g.A,{onClick:r.onOpen,children:(0,K.jsx)(y.A,{icon:"eva:more-vertical-fill"})})]})]}),(0,K.jsxs)(q.A,{open:r.open,onClose:r.onClose,arrow:"right-top",sx:{width:140},children:[(0,K.jsxs)(O.A,{onClick:()=>{r.onClose()},children:[(0,K.jsx)(y.A,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,K.jsxs)(O.A,{onClick:()=>{r.onClose()},children:[(0,K.jsx)(y.A,{icon:"solar:import-bold"}),"Import"]}),(0,K.jsxs)(O.A,{onClick:()=>{r.onClose()},children:[(0,K.jsx)(y.A,{icon:"solar:export-bold"}),"Export"]})]})]})}var ae=o(8555);function ie(e){let{filters:t,onFilters:o,onResetFilters:n,results:r,...l}=e;return(0,K.jsxs)(J.A,{spacing:1.5,...l,children:[(0,K.jsxs)(Y.A,{sx:{typography:"body2"},children:[(0,K.jsx)("strong",{children:r}),(0,K.jsx)(Y.A,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,K.jsxs)(J.A,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:["all"!==t.status&&(0,K.jsx)(de,{label:"Status:",children:(0,K.jsx)(V.A,{size:"small",label:t.status,onDelete:()=>{o("status","all")}})}),!!t.role.length&&(0,K.jsx)(de,{label:"Role:",children:t.role.map((e=>(0,K.jsx)(V.A,{label:e,size:"small",onDelete:()=>(e=>{const n=t.role.filter((t=>t!==e));o("role",n)})(e)},e)))}),(0,K.jsx)(h.A,{color:"error",onClick:n,startIcon:(0,K.jsx)(y.A,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function de(e){let{label:t,children:o,sx:n,...r}=e;return(0,K.jsxs)(J.A,{component:ae.A,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...n},...r,children:[(0,K.jsx)(Y.A,{component:"span",sx:{typography:"subtitle2"},children:t}),(0,K.jsx)(J.A,{spacing:1,direction:"row",flexWrap:"wrap",children:o})]})}const ce=[{value:"all",label:"All"},...f.C4],pe=[{id:"EmpID",label:" EmpID",width:50},{id:"EmpName",label:"EmpName",width:50},{id:"role",label:"Roles",width:50},{id:"department",label:"Department",width:50},{id:"projectTitle",label:"ProjectTitle",width:50},{id:"from",label:"From",width:50},{id:"to",label:"To",width:50},{id:"startDate",label:"Startdate",width:50},{id:"endDate",label:"Enddate",width:50},{id:"purpose",label:"Purpose",width:50},{id:"accommodation",label:"Accommodation",width:50},{id:"transportation",label:"Transportation",width:50},{id:"foodNeeded",label:"FoodNeeded",width:50},{id:"foodOption",label:"FoodOptions",width:50},{id:"status",label:"Status",width:50},{id:"",width:88}],he={EmpName:"",role:[],status:"all"};function xe(){const e=(0,R.K2)(),t=(0,P.Mp)(),o=(0,v.rd)(),n=(0,b.C)(),[r,F]=(0,s.useState)(f.Yx),[O,I]=(0,s.useState)(he),T=function(e){let{inputData:t,comparator:o,filters:n}=e;const{EmpName:r,status:l,role:s}=n,a=t.map(((e,t)=>[e,t]));a.sort(((e,t)=>{const n=o(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t=a.map((e=>e[0])),r&&(t=t.filter((e=>-1!==e.EmpName.toLowerCase().indexOf(r.toLowerCase()))));"all"!==l&&(t=t.filter((e=>e.status===l)));s.length&&(t=t.filter((e=>s.includes(e.role))));return t}({inputData:r,comparator:(0,R.hz)(e.order,e.orderBy),filters:O}),N=T.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),E=e.dense?52:72,q=!l()(he,O),L=!T.length&&q||!T.length,M=(0,s.useCallback)(((t,o)=>{e.onResetPage(),I((e=>({...e,[t]:o})))}),[e]),z=(0,s.useCallback)((t=>{const o=r.filter((e=>e.id!==t));F(o),e.onUpdatePageDeleteRow(N.length)}),[N.length,e,r]),W=(0,s.useCallback)((()=>{const t=r.filter((t=>!e.selected.includes(t.id)));F(t),e.onUpdatePageDeleteRows({totalRows:r.length,totalRowsInPage:N.length,totalRowsFiltered:T.length})}),[T.length,N.length,e,r]),Y=(0,s.useCallback)((e=>{o.push(A.f.dashboard.users.six(e))}),[o]),B=(0,s.useCallback)(((e,t)=>{M("status",t)}),[M]),U=(0,s.useCallback)((()=>{I(he)}),[]);return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(u.A,{maxWidth:!t.themeStretch&&"lg",children:[(0,K.jsx)(D.A,{heading:"List",links:[{name:"Dashboard",href:A.f.dashboard.group.root},{name:"TripList",href:A.f.dashboard.group.five},{name:"List"}],action:(0,K.jsx)(h.A,{component:w.W,href:A.f.dashboard.group.five,variant:"contained",startIcon:(0,K.jsx)(y.A,{icon:"mingcute:add-line"}),children:"New Trip"}),sx:{mb:{xs:3,md:5}}}),(0,K.jsxs)(c.A,{children:[(0,K.jsx)(d.A,{value:O.status,onChange:B,sx:{px:2.5,boxShadow:e=>"inset 0 -2px 0 0 ".concat((0,a.X4)(e.palette.grey[500],.08))},children:ce.map((e=>(0,K.jsx)(i.A,{iconPosition:"end",value:e.value,label:e.label,icon:(0,K.jsxs)(C.A,{variant:"all"===e.value||e.value===O.status?"filled":"soft",color:("approve"===e.value?"success":"pending"===e.value&&"warning")||"reject"===e.value&&"error"||"default",children:["all"===e.value&&f.Yx.length,"pending"===e.value&&f.Yx.filter((e=>"pending"===e.status)).length,"approve"===e.value&&f.Yx.filter((e=>"approve"===e.status)).length,"reject"===e.value&&f.Yx.filter((e=>"reject"===e.status)).length]})},e.value)))}),(0,K.jsx)(se,{filters:O,onFilters:M,roleOptions:f.gs}),q&&(0,K.jsx)(ie,{filters:O,onFilters:M,onResetFilters:U,results:T.length,sx:{p:2.5,pt:0}}),(0,K.jsxs)(j.A,{sx:{position:"relative",overflow:"unset"},children:[(0,K.jsx)(R.Uv,{dense:e.dense,numSelected:e.selected.length,rowCount:r.length,onSelectAllRows:t=>e.onSelectAllRows(t,r.map((e=>e.id))),action:(0,K.jsx)(x.A,{title:"Delete",children:(0,K.jsx)(g.A,{color:"primary",onClick:n.onTrue,children:(0,K.jsx)(y.A,{icon:"solar:trash-bin-trash-bold"})})})}),(0,K.jsx)(S.A,{children:(0,K.jsxs)(p.A,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[(0,K.jsx)(R.er,{order:e.order,orderBy:e.orderBy,headLabel:pe,rowCount:r.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:t=>e.onSelectAllRows(t,r.map((e=>e.id)))}),(0,K.jsxs)(m.A,{children:[T.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((t=>(0,K.jsx)(Z,{row:t,selected:e.selected.includes(t.id),onSelectRow:()=>e.onSelectRow(t.id),onDeleteRow:()=>z(t.id),onSixRow:()=>Y(t.id)},t.id))),(0,K.jsx)(R.dO,{height:E,emptyRows:(0,R.xl)(e.page,e.rowsPerPage,r.length)}),(0,K.jsx)(R.Sm,{notFound:L})]})]})})]}),(0,K.jsx)(R.We,{count:T.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),(0,K.jsx)(k.T,{open:n.value,onClose:n.onFalse,title:"Delete",content:(0,K.jsxs)(K.Fragment,{children:["Are you sure want to delete ",(0,K.jsxs)("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:(0,K.jsx)(h.A,{variant:"contained",color:"error",onClick:()=>{W(),n.onFalse()},children:"Delete"})})]})}function ue(){return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(n.mg,{children:(0,K.jsx)("title",{children:" Dashboard: Four"})}),(0,K.jsx)(xe,{})]})}},71861:(e,t,o)=>{o.d(t,{A:()=>F});var n=o(98587),r=o(58168),l=o(65043),s=o(69292),a=o(68606),i=o(67266),d=o(44350),c=o(34535),p=o(4162),h=o(6803),x=o(8555),u=o(70962),m=o(17392),g=o(66734),j=o(70579);const A=(0,g.A)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),v=(0,g.A)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),w=(0,g.A)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),f=(0,g.A)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var b=o(16871);const C=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],y=(0,d.h)("MuiAlert"),S=(0,c.Ay)(x.A,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,h.A)(o.color||o.severity))]]}})((e=>{let{theme:t}=e;const o="light"===t.palette.mode?i.e$:i.a,n="light"===t.palette.mode?i.a:i.e$;return(0,r.A)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.light})).map((e=>{let[r]=e;return{props:{colorSeverity:r,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert["".concat(r,"Color")]:o(t.palette[r].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(r,"StandardBg")]:n(t.palette[r].light,.9),["& .".concat(u.A.icon)]:t.vars?{color:t.vars.palette.Alert["".concat(r,"IconColor")]}:{color:t.palette[r].main}}}})),...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.light})).map((e=>{let[n]=e;return{props:{colorSeverity:n,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert["".concat(n,"Color")]:o(t.palette[n].light,.6),border:"1px solid ".concat((t.vars||t).palette[n].light),["& .".concat(u.A.icon)]:t.vars?{color:t.vars.palette.Alert["".concat(n,"IconColor")]}:{color:t.palette[n].main}}}})),...Object.entries(t.palette).filter((e=>{let[,t]=e;return t.main&&t.dark})).map((e=>{let[o]=e;return{props:{colorSeverity:o,variant:"filled"},style:(0,r.A)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(o,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(o,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)})}}))]})})),k=(0,c.Ay)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),P=(0,c.Ay)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),D=(0,c.Ay)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),R={success:(0,j.jsx)(A,{fontSize:"inherit"}),warning:(0,j.jsx)(v,{fontSize:"inherit"}),error:(0,j.jsx)(w,{fontSize:"inherit"}),info:(0,j.jsx)(f,{fontSize:"inherit"})},F=l.forwardRef((function(e,t){const o=y({props:e,name:"MuiAlert"}),{action:l,children:i,className:d,closeText:c="Close",color:x,components:g={},componentsProps:A={},icon:v,iconMapping:w=R,onClose:f,role:F="alert",severity:O="success",slotProps:I={},slots:T={},variant:N="standard"}=o,E=(0,n.A)(o,C),q=(0,r.A)({},o,{color:x,severity:O,variant:N,colorSeverity:x||O}),L=(e=>{const{variant:t,color:o,severity:n,classes:r}=e,l={root:["root","color".concat((0,h.A)(o||n)),"".concat(t).concat((0,h.A)(o||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,a.A)(l,u.X,r)})(q),M={slots:(0,r.A)({closeButton:g.CloseButton,closeIcon:g.CloseIcon},T),slotProps:(0,r.A)({},A,I)},[z,W]=(0,p.A)("closeButton",{elementType:m.A,externalForwardedProps:M,ownerState:q}),[Y,B]=(0,p.A)("closeIcon",{elementType:b.A,externalForwardedProps:M,ownerState:q});return(0,j.jsxs)(S,(0,r.A)({role:F,elevation:0,ownerState:q,className:(0,s.A)(L.root,d),ref:t},E,{children:[!1!==v?(0,j.jsx)(k,{ownerState:q,className:L.icon,children:v||w[O]||R[O]}):null,(0,j.jsx)(P,{ownerState:q,className:L.message,children:i}),null!=l?(0,j.jsx)(D,{ownerState:q,className:L.action,children:l}):null,null==l&&f?(0,j.jsx)(D,{ownerState:q,className:L.action,children:(0,j.jsx)(z,(0,r.A)({size:"small","aria-label":c,title:c,color:"inherit",onClick:f},W,{children:(0,j.jsx)(Y,(0,r.A)({fontSize:"small"},B))}))}):null]}))}))}}]);
//# sourceMappingURL=592.8b107451.chunk.js.map