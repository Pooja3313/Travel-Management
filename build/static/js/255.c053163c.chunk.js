"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[255],{30953:(e,t,n)=>{n.d(t,{A:()=>h});var l=n(96446),s=n(88446),r=n(88911),o=n(94496),i=n(22698),a=n(99933),c=n(70579);function d(e){let{link:t,activeLast:n,disabled:r}=e;const{name:o,href:i,icon:d}=t,h={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...r&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},x=(0,c.jsxs)(c.Fragment,{children:[d&&(0,c.jsx)(l.A,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:d}),o]});return i?(0,c.jsx)(s.A,{component:a.W,href:i,sx:h,children:x}):(0,c.jsxs)(l.A,{sx:h,children:[" ",x," "]})}function h(e){let{links:t,action:n,heading:a,moreLink:h,activeLast:p,sx:u,...g}=e;const j=t[t.length-1].name;return(0,c.jsxs)(l.A,{sx:{...u},children:[(0,c.jsxs)(r.A,{direction:"row",alignItems:"center",children:[(0,c.jsxs)(l.A,{sx:{flexGrow:1},children:[a&&(0,c.jsx)(o.A,{variant:"h4",gutterBottom:!0,children:a}),!!t.length&&(0,c.jsx)(i.A,{separator:(0,c.jsx)(x,{}),...g,children:t.map((e=>(0,c.jsx)(d,{link:e,activeLast:p,disabled:e.name===j},e.name||"")))})]}),n&&(0,c.jsxs)(l.A,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!h&&(0,c.jsx)(l.A,{sx:{mt:2},children:h.map((e=>(0,c.jsx)(s.A,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)))})]})}function x(){return(0,c.jsx)(l.A,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},41398:(e,t,n)=>{n.d(t,{T:()=>c});var l=n(49633),s=n(83462),r=n(4219),o=n(29347),i=n(35316),a=n(70579);function c(e){let{title:t,content:n,action:c,open:d,onClose:h,...x}=e;return(0,a.jsxs)(s.A,{fullWidth:!0,maxWidth:"xs",open:d,onClose:h,...x,children:[(0,a.jsx)(r.A,{sx:{pb:2},children:t}),n&&(0,a.jsxs)(i.A,{sx:{typography:"body2"},children:[" ",n," "]}),(0,a.jsxs)(o.A,{children:[c,(0,a.jsx)(l.A,{variant:"outlined",color:"inherit",onClick:h,children:"Cancel"})]})]})}},46838:(e,t,n)=>{function l(e,t,n){return e?Math.max(0,(1+e)*t-n):0}function s(e,t,n){return null===e[n]?1:null===t[n]||t[n]<e[n]?-1:t[n]>e[n]?1:0}function r(e,t){return"desc"===e?(e,n)=>s(e,n,t):(e,n)=>-s(e,n,t)}n.d(t,{dO:()=>m,er:()=>v,Sm:()=>j,We:()=>P,Uv:()=>C,xl:()=>l,hz:()=>r,K2:()=>i});var o=n(65043);function i(e){const[t,n]=(0,o.useState)(!(null===e||void 0===e||!e.defaultDense)),[l,s]=(0,o.useState)((null===e||void 0===e?void 0:e.defaultCurrentPage)||0),[r,i]=(0,o.useState)((null===e||void 0===e?void 0:e.defaultOrderBy)||"name"),[a,c]=(0,o.useState)((null===e||void 0===e?void 0:e.defaultRowsPerPage)||5),[d,h]=(0,o.useState)((null===e||void 0===e?void 0:e.defaultOrder)||"asc"),[x,p]=(0,o.useState)((null===e||void 0===e?void 0:e.defaultSelected)||[]),u=(0,o.useCallback)((e=>{""!==e&&(h(r===e&&"asc"===d?"desc":"asc"),i(e))}),[d,r]),g=(0,o.useCallback)((e=>{const t=x.includes(e)?x.filter((t=>t!==e)):[...x,e];p(t)}),[x]),j=(0,o.useCallback)((e=>{s(0),c(parseInt(e.target.value,10))}),[]),m=(0,o.useCallback)((e=>{n(e.target.checked)}),[]),w=(0,o.useCallback)(((e,t)=>{p(e?t:[])}),[]),A=(0,o.useCallback)(((e,t)=>{s(t)}),[]),b=(0,o.useCallback)((()=>{s(0)}),[]),f=(0,o.useCallback)((e=>{p([]),l&&e<2&&s(l-1)}),[l]),v=(0,o.useCallback)((e=>{let{totalRows:t,totalRowsInPage:n,totalRowsFiltered:r}=e;const o=x.length;if(p([]),l)if(o===n)s(l-1);else if(o===r)s(0);else if(o>n){const e=Math.ceil((t-o)/a)-1;s(e)}}),[l,a,x.length]);return{dense:t,order:d,page:l,orderBy:r,rowsPerPage:a,selected:x,onSelectRow:g,onSelectAllRows:w,onSort:u,onChangePage:A,onChangeDense:m,onResetPage:b,onChangeRowsPerPage:j,onUpdatePageDeleteRow:f,onUpdatePageDeleteRows:v,setPage:s,setDense:n,setOrder:h,setOrderBy:i,setSelected:p,setRowsPerPage:c}}var a=n(68738),c=n(39652),d=n(90310),h=n(96446),x=n(94496),p=n(88911),u=n(70579);function g(e){let{title:t,imgUrl:n,action:l,filled:s,description:r,sx:o,...i}=e;return(0,u.jsxs)(p.A,{flexGrow:1,alignItems:"center",justifyContent:"center",sx:{px:3,height:1,...s&&{borderRadius:2,bgcolor:e=>(0,d.X4)(e.palette.grey[500],.04),border:e=>"dashed 1px ".concat((0,d.X4)(e.palette.grey[500],.08))},...o},...i,children:[(0,u.jsx)(h.A,{component:"img",alt:"empty content",src:n||"/assets/icons/empty/ic_content.svg",sx:{width:1,maxWidth:160}}),t&&(0,u.jsx)(x.A,{variant:"h6",component:"span",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:t}),r&&(0,u.jsx)(x.A,{variant:"caption",sx:{mt:1,color:"text.disabled",textAlign:"center"},children:r}),l&&l]})}function j(e){let{notFound:t,sx:n}=e;return(0,u.jsx)(a.A,{children:t?(0,u.jsx)(c.A,{colSpan:12,children:(0,u.jsx)(g,{filled:!0,title:"No Data",sx:{py:10,...n}})}):(0,u.jsx)(c.A,{colSpan:12,sx:{p:0}})})}function m(e){let{emptyRows:t,height:n}=e;return t?(0,u.jsx)(a.A,{sx:{...n&&{height:n*t}},children:(0,u.jsx)(c.A,{colSpan:9})}):null}var w=n(1273),A=n(84882),b=n(58093);const f={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function v(e){let{order:t,orderBy:n,rowCount:l=0,headLabel:s,numSelected:r=0,onSort:o,onSelectAllRows:i,sx:d}=e;return(0,u.jsx)(A.A,{sx:d,children:(0,u.jsxs)(a.A,{children:[i&&(0,u.jsx)(c.A,{padding:"checkbox",children:(0,u.jsx)(w.A,{indeterminate:!!r&&r<l,checked:!!l&&r===l,onChange:e=>i(e.target.checked)})}),s.map((e=>(0,u.jsx)(c.A,{align:e.align||"left",sortDirection:n===e.id&&t,sx:{width:e.width,minWidth:e.minWidth},children:o?(0,u.jsxs)(b.A,{hideSortIcon:!0,active:n===e.id,direction:n===e.id?t:"asc",onClick:()=>o(e.id),children:[e.label,n===e.id?(0,u.jsx)(h.A,{sx:{...f},children:"desc"===t?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)))]})})}function C(e){let{dense:t,action:n,rowCount:l,numSelected:s,onSelectAllRows:r,sx:o,...i}=e;return s?(0,u.jsxs)(p.A,{direction:"row",alignItems:"center",sx:{pl:1,pr:2,top:0,left:0,width:1,zIndex:9,height:58,position:"absolute",bgcolor:"primary.lighter",...t&&{height:38},...o},...i,children:[(0,u.jsx)(w.A,{indeterminate:!!s&&s<l,checked:!!l&&s===l,onChange:e=>r(e.target.checked)}),(0,u.jsxs)(x.A,{variant:"subtitle2",sx:{ml:2,flexGrow:1,color:"primary.main",...t&&{ml:3}},children:[s," selected"]}),n&&n]}):null}var S=n(67803);function P(e){let{rowsPerPageOptions:t=[5,10,25],sx:n,...l}=e;return(0,u.jsx)(h.A,{sx:{position:"relative",...n},children:(0,u.jsx)(S.A,{rowsPerPageOptions:t,component:"div",...l,sx:{borderTopColor:"transparent"}})})}},9255:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var l=n(29490),s=n(19853),r=n.n(s),o=n(65043),i=n(90310),a=n(40360),c=n(69869),d=n(12110),h=n(71806),x=n(49633),p=n(77739),u=n(19252),g=n(73460),j=n(17392),m=n(79650),w=(n(48407),n(67132)),A=(n(99933),n(61361)),b=n(59229),f=n(32184),v=n(2746),C=n(12933),S=n(41398),P=n(19442),k=n(30953),y=n(46838),R=n(81045),D=n(94814),F=n(68738),I=n(1273),O=n(39652),T=n(48734),E=n(90178),W=n(70579);function N(e){let{row:t,selected:n,onSelectRow:l,onDeleteRow:s}=e;const{EmpName:r,EmpID:i,role:a,department:c,projectTitle:d,from:h,to:p,startDate:u,endDate:g,purpose:m,accommodation:w,transportation:A,FoodNeededs:C,foodOption:P,status:k,avatarUrl:y}=t,N=(0,b.C)(),L=(0,E.f)(),[_,B]=(0,o.useState)(k);(0,o.useCallback)((e=>{B(e.target.value)}),[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(F.A,{hover:!0,selected:n,children:[(0,W.jsx)(O.A,{padding:"checkbox",children:(0,W.jsx)(I.A,{checked:n,onClick:l})}),(0,W.jsxs)(O.A,{sx:{display:"flex",alignItems:"center"},children:[(0,W.jsx)(R.A,{alt:r,src:y,sx:{mr:2}}),(0,W.jsx)(T.A,{primary:i,primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{component:"span",color:"text.disabled"}})]}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:r}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:a}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:c}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:d}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:h}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:p}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:u}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:g}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:m}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:w}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:A}),(0,W.jsx)(O.A,{align:"center",sx:{whiteSpace:"nowrap"},children:C}),(0,W.jsx)(O.A,{sx:{whiteSpace:"nowrap"},children:P}),(0,W.jsx)(O.A,{children:(0,W.jsx)(f.A,{variant:"soft",color:"approve"===k?"success":"default",children:k})}),(0,W.jsx)(O.A,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:(0,W.jsx)(j.A,{color:L.open?"inherit":"default",onClick:L.onOpen,children:(0,W.jsx)(v.A,{icon:"eva:more-vertical-fill"})})})]}),(0,W.jsx)(E.A,{open:L.open,onClose:L.onClose,arrow:"right-top",sx:{width:140},children:(0,W.jsxs)(D.A,{onClick:()=>{N.onTrue(),L.onClose()},sx:{color:"error.main"},children:[(0,W.jsx)(v.A,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})}),(0,W.jsx)(S.T,{open:N.value,onClose:N.onFalse,title:"Delete",content:"Are you sure want to delete?",action:(0,W.jsx)(x.A,{variant:"contained",color:"error",onClick:s,children:"Delete"})})]})}var L=n(88911),_=n(67784),B=n(17642),U=n(53193),z=n(74050),G=n(51787),M=n(93088);function X(e){let{filters:t,onFilters:n,roleOptions:l}=e;const s=(0,E.f)(),r=(0,o.useCallback)((e=>{n("EmpName",e.target.value)}),[n]),i=(0,o.useCallback)((e=>{n("role","string"===typeof e.target.value?e.target.value.split(","):e.target.value)}),[n]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(L.A,{spacing:2,alignItems:{xs:"flex-end",md:"center"},direction:{xs:"column",md:"row"},sx:{p:2.5,pr:{xs:2.5,md:1}},children:[(0,W.jsxs)(U.A,{sx:{flexShrink:0,width:{xs:1,md:200}},children:[(0,W.jsx)(B.A,{children:"Role"}),(0,W.jsx)(M.A,{multiple:!0,value:t.role,onChange:i,input:(0,W.jsx)(z.A,{label:"Roles"}),renderValue:e=>e.map((e=>e)).join(", "),MenuProps:{PaperProps:{sx:{maxHeight:240}}},children:l.map((e=>(0,W.jsxs)(D.A,{value:e,children:[(0,W.jsx)(I.A,{disableRipple:!0,size:"small",checked:t.role.includes(e)}),e]},e)))})]}),(0,W.jsxs)(L.A,{direction:"row",alignItems:"center",spacing:2,flexGrow:1,sx:{width:1},children:[(0,W.jsx)(_.A,{fullWidth:!0,value:t.name,onChange:r,placeholder:"Search...",InputProps:{startAdornment:(0,W.jsx)(G.A,{position:"start",children:(0,W.jsx)(v.A,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})}}),(0,W.jsx)(j.A,{onClick:s.onOpen,children:(0,W.jsx)(v.A,{icon:"eva:more-vertical-fill"})})]})]}),(0,W.jsxs)(E.A,{open:s.open,onClose:s.onClose,arrow:"right-top",sx:{width:140},children:[(0,W.jsxs)(D.A,{onClick:()=>{s.onClose()},children:[(0,W.jsx)(v.A,{icon:"solar:printer-minimalistic-bold"}),"Print"]}),(0,W.jsxs)(D.A,{onClick:()=>{s.onClose()},children:[(0,W.jsx)(v.A,{icon:"solar:import-bold"}),"Import"]}),(0,W.jsxs)(D.A,{onClick:()=>{s.onClose()},children:[(0,W.jsx)(v.A,{icon:"solar:export-bold"}),"Export"]})]})]})}var K=n(96446),Y=n(26487),H=n(8555);function V(e){let{filters:t,onFilters:n,onResetFilters:l,results:s,...r}=e;return(0,W.jsxs)(L.A,{spacing:1.5,...r,children:[(0,W.jsxs)(K.A,{sx:{typography:"body2"},children:[(0,W.jsx)("strong",{children:s}),(0,W.jsx)(K.A,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),(0,W.jsxs)(L.A,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:["all"!==t.status&&(0,W.jsx)(Z,{label:"Status:",children:(0,W.jsx)(Y.A,{size:"small",label:t.status,onDelete:()=>{n("status","all")}})}),!!t.role.length&&(0,W.jsx)(Z,{label:"Role:",children:t.role.map((e=>(0,W.jsx)(Y.A,{label:e,size:"small",onDelete:()=>(e=>{const l=t.role.filter((t=>t!==e));n("role",l)})(e)},e)))}),(0,W.jsx)(x.A,{color:"error",onClick:l,startIcon:(0,W.jsx)(v.A,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}function Z(e){let{label:t,children:n,sx:l,...s}=e;return(0,W.jsxs)(L.A,{component:H.A,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...l},...s,children:[(0,W.jsx)(K.A,{component:"span",sx:{typography:"subtitle2"},children:t}),(0,W.jsx)(L.A,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}const q=[{id:"EmpID",label:" EmpID",width:50},{id:"EmpName",label:"EmpName",width:50},{id:"role",label:"Roles",width:50},{id:"department",label:"Department",width:50},{id:"projectTitle",label:"ProjectTitle",width:50},{id:"from",label:"From",width:50},{id:"to",label:"To",width:50},{id:"startDate",label:"Startdate",width:50},{id:"endDate",label:"Enddate",width:50},{id:"purpose",label:"Purpose",width:50},{id:"accommodation",label:"Accommodation",width:50},{id:"transportation",label:"Transportation",width:50},{id:"foodNeeded",label:"FoodNeeded",width:50},{id:"foodOption",label:"FoodOptions",width:50},{id:"status",label:"Status",width:50},{id:"",width:88}],J={EmpName:"",role:[],status:""};function Q(){const e=(0,y.K2)(),t=(0,P.Mp)(),n=((0,w.rd)(),(0,b.C)()),[l,s]=(0,o.useState)(A.Yx),[R,D]=(0,o.useState)(J),F=function(e){let{inputData:t,comparator:n,filters:l}=e;const{EmpName:s,status:r,role:o}=l,i=t.map(((e,t)=>[e,t]));i.sort(((e,t)=>{const l=n(e[0],t[0]);return 0!==l?l:e[1]-t[1]})),t=i.map((e=>e[0])),s&&(t=t.filter((e=>-1!==e.EmpName.toLowerCase().indexOf(s.toLowerCase()))));"all"!==r&&(t=t.filter((e=>"approve"===e.status)));o.length&&(t=t.filter((e=>o.includes(e.role))));return t}({inputData:l,comparator:(0,y.hz)(e.order,e.orderBy),filters:R}),I=F.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),O=e.dense?52:72,T=!r()(J,R),E=!F.length&&T||!F.length,L=(0,o.useCallback)(((t,n)=>{e.onResetPage(),D((e=>({...e,[t]:n})))}),[e]),_=(0,o.useCallback)((t=>{const n=l.filter((e=>e.id!==t));s(n),e.onUpdatePageDeleteRow(I.length)}),[I.length,e,l]),B=(0,o.useCallback)((()=>{const t=l.filter((t=>!e.selected.includes(t.id)));s(t),e.onUpdatePageDeleteRows({totalRows:l.length,totalRowsInPage:I.length,totalRowsFiltered:F.length})}),[F.length,I.length,e,l]),U=(0,o.useCallback)(((e,t)=>{L("status",t)}),[L]),z=(0,o.useCallback)((()=>{D(J)}),[]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(u.A,{maxWidth:!t.themeStretch&&"lg",children:[(0,W.jsx)(k.A,{heading:"Travel Trip List",links:[{name:"List"}],sx:{mb:{xs:3,md:5}}}),(0,W.jsxs)(d.A,{children:[(0,W.jsx)(c.A,{value:R.status,onChange:U,sx:{px:2.5,boxShadow:e=>"inset 0 -2px 0 0 ".concat((0,i.X4)(e.palette.grey[500],.08))},children:A.yZ.map((e=>(0,W.jsx)(a.A,{iconPosition:"end",value:e.value,label:e.label,icon:(0,W.jsx)(f.A,{color:"approve"===e.value?"success":"default",children:"approve"===e.value&&A.Yx.filter((e=>"approve"===e.status)).length})},e.value)))}),(0,W.jsx)(X,{filters:R,onFilters:L,roleOptions:A.gs}),T&&(0,W.jsx)(V,{filters:R,onFilters:L,onResetFilters:z,results:F.length,sx:{p:2.5,pt:0}}),(0,W.jsxs)(m.A,{sx:{position:"relative",overflow:"unset"},children:[(0,W.jsx)(y.Uv,{dense:e.dense,numSelected:e.selected.length,rowCount:l.length,onSelectAllRows:t=>e.onSelectAllRows(t,l.map((e=>e.id))),action:(0,W.jsx)(p.A,{title:"Delete",children:(0,W.jsx)(j.A,{color:"primary",onClick:n.onTrue,children:(0,W.jsx)(v.A,{icon:"solar:trash-bin-trash-bold"})})})}),(0,W.jsx)(C.A,{children:(0,W.jsxs)(h.A,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[(0,W.jsx)(y.er,{order:e.order,orderBy:e.orderBy,headLabel:q,rowCount:l.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:t=>e.onSelectAllRows(t,l.map((e=>e.id)))}),(0,W.jsxs)(g.A,{children:[F.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map((t=>(0,W.jsx)(N,{row:t,selected:e.selected.includes(t.id),onSelectRow:()=>e.onSelectRow(t.id),onDeleteRow:()=>_(t.id)},t.id))),(0,W.jsx)(y.dO,{height:O,emptyRows:(0,y.xl)(e.page,e.rowsPerPage,l.length)}),(0,W.jsx)(y.Sm,{notFound:E})]})]})})]}),(0,W.jsx)(y.We,{count:F.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),(0,W.jsx)(S.T,{open:n.value,onClose:n.onFalse,title:"Delete",content:(0,W.jsxs)(W.Fragment,{children:["Are you sure want to delete ",(0,W.jsxs)("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:(0,W.jsx)(x.A,{variant:"contained",color:"error",onClick:()=>{B(),n.onFalse()},children:"Delete"})})]})}function $(){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(l.mg,{children:(0,W.jsx)("title",{children:" Dashboard: Two"})}),(0,W.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=255.c053163c.chunk.js.map