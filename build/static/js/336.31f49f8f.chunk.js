"use strict";(self.webpackChunk_minimal_kit_cra_js=self.webpackChunk_minimal_kit_cra_js||[]).push([[336],{22698:(e,o,t)=>{t.d(o,{A:()=>I});var r=t(58168),a=t(98587),s=t(65043),n=(t(2086),t(69292)),l=t(33662),i=t(68606),c=t(34535),d=t(72876),p=t(94496),u=t(67266),m=t(66734),A=t(70579);const g=(0,m.A)((0,A.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var f=t(75429);const v=["slots","slotProps"],x=(0,c.Ay)(f.A)((e=>{let{theme:o}=e;return(0,r.A)({display:"flex",marginLeft:"calc(".concat(o.spacing(1)," * 0.5)"),marginRight:"calc(".concat(o.spacing(1)," * 0.5)")},"light"===o.palette.mode?{backgroundColor:o.palette.grey[100],color:o.palette.grey[700]}:{backgroundColor:o.palette.grey[700],color:o.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.A)({},"light"===o.palette.mode?{backgroundColor:o.palette.grey[200]}:{backgroundColor:o.palette.grey[600]}),"&:active":(0,r.A)({boxShadow:o.shadows[0]},"light"===o.palette.mode?{backgroundColor:(0,u.tL)(o.palette.grey[200],.12)}:{backgroundColor:(0,u.tL)(o.palette.grey[600],.12)})})})),h=(0,c.Ay)(g)({width:24,height:16});const y=function(e){const{slots:o={},slotProps:t={}}=e,s=(0,a.A)(e,v),n=e;return(0,A.jsx)("li",{children:(0,A.jsx)(x,(0,r.A)({focusRipple:!0},s,{ownerState:n,children:(0,A.jsx)(h,(0,r.A)({as:o.CollapsedIcon,ownerState:n},t.collapsedIcon))}))})};var C=t(57056),b=t(32400);function S(e){return(0,b.Ay)("MuiBreadcrumbs",e)}const w=(0,C.A)("MuiBreadcrumbs",["root","ol","li","separator"]),M=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,c.Ay)(p.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,o)=>[{["& .".concat(w.li)]:o.li},o.root]})({}),j=(0,c.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,c.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function k(e,o,t,r){return e.reduce(((a,s,n)=>(n<e.length-1?a=a.concat(s,(0,A.jsx)(N,{"aria-hidden":!0,className:o,ownerState:r,children:t},"separator-".concat(n))):a.push(s),a)),[])}const I=s.forwardRef((function(e,o){const t=(0,d.A)({props:e,name:"MuiBreadcrumbs"}),{children:c,className:p,component:u="nav",slots:m={},slotProps:g={},expandText:f="Show path",itemsAfterCollapse:v=1,itemsBeforeCollapse:x=1,maxItems:h=8,separator:C="/"}=t,b=(0,a.A)(t,M),[w,N]=s.useState(!1),I=(0,r.A)({},t,{component:u,expanded:w,expandText:f,itemsAfterCollapse:v,itemsBeforeCollapse:x,maxItems:h,separator:C}),B=(e=>{const{classes:o}=e;return(0,i.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,o)})(I),D=(0,l.Q)({elementType:m.CollapsedIcon,externalSlotProps:g.collapsedIcon,ownerState:I}),T=s.useRef(null),_=s.Children.toArray(c).filter((e=>s.isValidElement(e))).map(((e,o)=>(0,A.jsx)("li",{className:B.li,children:e},"child-".concat(o))));return(0,A.jsx)(R,(0,r.A)({ref:o,component:u,color:"text.secondary",className:(0,n.A)(B.root,p),ownerState:I},b,{children:(0,A.jsx)(j,{className:B.ol,ref:T,ownerState:I,children:k(w||h&&_.length<=h?_:(e=>x+v>=e.length?e:[...e.slice(0,x),(0,A.jsx)(y,{"aria-label":f,slots:{CollapsedIcon:m.CollapsedIcon},slotProps:{collapsedIcon:D},onClick:()=>{N(!0);const e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-v,e.length)])(_),B.separator,C,I)})}))}))},12110:(e,o,t)=>{t.d(o,{A:()=>v});var r=t(58168),a=t(98587),s=t(65043),n=t(69292),l=t(68606),i=t(34535),c=t(72876),d=t(8555),p=t(57056),u=t(32400);function m(e){return(0,u.Ay)("MuiCard",e)}(0,p.A)("MuiCard",["root"]);var A=t(70579);const g=["className","raised"],f=(0,i.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({overflow:"hidden"}))),v=s.forwardRef((function(e,o){const t=(0,c.A)({props:e,name:"MuiCard"}),{className:s,raised:i=!1}=t,d=(0,a.A)(t,g),p=(0,r.A)({},t,{raised:i}),u=(e=>{const{classes:o}=e;return(0,l.A)({root:["root"]},m,o)})(p);return(0,A.jsx)(f,(0,r.A)({className:(0,n.A)(u.root,s),elevation:i?8:void 0,ref:o,ownerState:p},d))}))},29347:(e,o,t)=>{t.d(o,{A:()=>f});var r=t(98587),a=t(58168),s=t(65043),n=t(69292),l=t(68606),i=t(34535),c=t(72876),d=t(57056),p=t(32400);function u(e){return(0,p.Ay)("MuiDialogActions",e)}(0,d.A)("MuiDialogActions",["root","spacing"]);var m=t(70579);const A=["className","disableSpacing"],g=(0,i.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})((e=>{let{ownerState:o}=e;return(0,a.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),f=s.forwardRef((function(e,o){const t=(0,c.A)({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:i=!1}=t,d=(0,r.A)(t,A),p=(0,a.A)({},t,{disableSpacing:i}),f=(e=>{const{classes:o,disableSpacing:t}=e,r={root:["root",!t&&"spacing"]};return(0,l.A)(r,u,o)})(p);return(0,m.jsx)(g,(0,a.A)({className:(0,n.A)(f.root,s),ownerState:p,ref:o},d))}))},35316:(e,o,t)=>{t.d(o,{A:()=>v});var r=t(98587),a=t(58168),s=t(65043),n=t(69292),l=t(68606),i=t(34535),c=t(72876),d=t(57056),p=t(32400);function u(e){return(0,p.Ay)("MuiDialogContent",e)}(0,d.A)("MuiDialogContent",["root","dividers"]);var m=t(87034),A=t(70579);const g=["className","dividers"],f=(0,i.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.dividers&&o.dividers]}})((e=>{let{theme:o,ownerState:t}=e;return(0,a.A)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},t.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((o.vars||o).palette.divider),borderBottom:"1px solid ".concat((o.vars||o).palette.divider)}:{[".".concat(m.A.root," + &")]:{paddingTop:0}})})),v=s.forwardRef((function(e,o){const t=(0,c.A)({props:e,name:"MuiDialogContent"}),{className:s,dividers:i=!1}=t,d=(0,r.A)(t,g),p=(0,a.A)({},t,{dividers:i}),m=(e=>{const{classes:o,dividers:t}=e,r={root:["root",t&&"dividers"]};return(0,l.A)(r,u,o)})(p);return(0,A.jsx)(f,(0,a.A)({className:(0,n.A)(m.root,s),ownerState:p,ref:o},d))}))},87034:(e,o,t)=>{t.d(o,{A:()=>n,t:()=>s});var r=t(57056),a=t(32400);function s(e){return(0,a.Ay)("MuiDialogTitle",e)}const n=(0,r.A)("MuiDialogTitle",["root"])}}]);
//# sourceMappingURL=336.31f49f8f.chunk.js.map