(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2565,2179],{89791:function(e,t,a){"use strict";t.Z=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=function e(t){var a,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(a=0;a<t.length;a++)t[a]&&(n=e(t[a]))&&(s&&(s+=" "),s+=n);else for(a in t)t[a]&&(s&&(s+=" "),s+=a)}return s}(e))&&(n&&(n+=" "),n+=t);return n}},95550:function(e,t,a){"use strict";a.d(t,{Y:function(){return s}});var n=a(54963);function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,a]=(0,n.lr)();if(void 0===e)return;let s=!1;t.forEach((a,n)=>{"function"==typeof e[n]&&(e[n](a),t.delete(n),s=!0)}),s&&a(t)}},14959:function(e,t,a){"use strict";a.r(t),a.d(t,{NewChat:function(){return E}});var n,s,r,l,i=a(9268),c=a(86006),o=a(10946),h=a(71582),m=a(29305),d=a(88569),f=a.n(d);function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){return c.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:16,height:16,fill:"none"},e),n||(n=c.createElement("defs",null,c.createElement("path",{id:"left_svg__a",d:"M0 0h16v16H0z"}))),c.createElement("g",null,s||(s=c.createElement("mask",{id:"left_svg__b",fill:"#fff"},c.createElement("use",{xlinkHref:"#left_svg__a"}))),c.createElement("g",{mask:"url(#left_svg__b)"},c.createElement("path",{style:{stroke:"#333",strokeWidth:1.3333333333333333,strokeOpacity:1,strokeDasharray:"0 0"},d:"M4 8 0 4l4-4",transform:"translate(6.333 4)"}))))};function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=function(e){return c.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:16,height:16,fill:"none"},e),c.createElement("g",null,r||(r=c.createElement("mask",{id:"lightning_svg__b",fill:"#fff"},c.createElement("use",{xlinkHref:"#lightning_svg__a"}))),c.createElement("g",{mask:"url(#lightning_svg__b)"},c.createElement("path",{style:{fill:"#333",opacity:1},d:"M2.248 8.852a.665.665 0 0 1-.172-.828l3.67-7a.664.664 0 0 1 .59-.357h6a.662.662 0 0 1 .634.46.669.669 0 0 1-.11.618l-2.822 3.592h3.629a.661.661 0 0 1 .605.387.663.663 0 0 1-.116.732l-8 8.66a.664.664 0 0 1-.893.078.66.66 0 0 1-.257-.441.66.66 0 0 1 .016-.26L6.472 9H2.666a.657.657 0 0 1-.42-.148zm1.52-1.185h3.569a.665.665 0 0 1 .644.836l-.986 3.74 5.148-5.573H8.667a.665.665 0 0 1-.63-.885.662.662 0 0 1 .105-.194L10.965 2H6.74z"}))),l||(l=c.createElement("defs",null,c.createElement("path",{id:"lightning_svg__a",d:"M0 0h16v16H0z"}))))},g=a(83573),v=a(17005),p=a(7081),x=a(1503),j=a(329),y=a(82795),N=a(95550);function b(e){return(0,i.jsxs)("div",{className:f().mask,onClick:e.onClick,children:[(0,i.jsx)(y.MaskAvatar,{mask:e.mask}),(0,i.jsx)("div",{className:f()["mask-name"]+" one-line",children:e.mask.name})]})}function E(){let e=(0,j.aK)(),t=(0,p.Zy)(),a=t.getAll(),n=function(e){let[t,a]=(0,c.useState)([]);return(0,c.useEffect)(()=>{let t=()=>{let t=document.getElementById(o.ym.AppBody);if(!t||0===e.length)return;let n=t.getBoundingClientRect(),s=n.width,r=.6*n.height,l=()=>e[Math.floor(Math.random()*e.length)],i=0,c=()=>e[i++%e.length],h=Math.ceil(s/120),m=Array(Math.ceil(r/50)).fill(0).map((e,t)=>Array(h).fill(0).map((e,t)=>t<1||t>h-2?l():c()));a(m)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),t}(a),s=(0,v.s0)(),r=(0,j.MG)(),l=(0,c.useRef)(null),{state:d}=(0,v.TH)(),_=t=>{e.newSession(t),setTimeout(()=>s(o.y$.Chat),1)};return(0,N.Y)({mask:e=>{try{let a=t.get(parseInt(e));_(null!=a?a:void 0)}catch(t){console.error("[New Chat] failed to create chat from mask id=",e)}}}),(0,c.useEffect)(()=>{l.current&&(l.current.scrollLeft=(l.current.scrollWidth-l.current.clientWidth)/2)},[n]),(0,i.jsxs)("div",{className:f()["new-chat"],children:[(0,i.jsxs)("div",{className:f()["mask-header"],children:[(0,i.jsx)(h.h,{icon:(0,i.jsx)(u,{}),text:x.ZP.NewChat.Return,onClick:()=>s(o.y$.Home)}),!(null==d?void 0:d.fromHome)&&(0,i.jsx)(h.h,{text:x.ZP.NewChat.NotShow,onClick:()=>{confirm(x.ZP.NewChat.ConfirmNoShow)&&(_(),r.update(e=>e.dontShowMaskSplashScreen=!0))}})]}),(0,i.jsxs)("div",{className:f()["mask-cards"],children:[(0,i.jsx)("div",{className:f()["mask-card"],children:(0,i.jsx)(m.eL,{avatar:"1f606",size:24})}),(0,i.jsx)("div",{className:f()["mask-card"],children:(0,i.jsx)(m.eL,{avatar:"1f916",size:24})}),(0,i.jsx)("div",{className:f()["mask-card"],children:(0,i.jsx)(m.eL,{avatar:"1f479",size:24})})]}),(0,i.jsx)("div",{className:f().title,children:x.ZP.NewChat.Title}),(0,i.jsx)("div",{className:f()["sub-title"],children:x.ZP.NewChat.SubTitle}),(0,i.jsxs)("div",{className:f().actions,children:[(0,i.jsx)(h.h,{text:x.ZP.NewChat.More,onClick:()=>s(o.y$.Masks),icon:(0,i.jsx)(g.Z,{}),bordered:!0,shadow:!0}),(0,i.jsx)(h.h,{text:x.ZP.NewChat.Skip,onClick:()=>_(),icon:(0,i.jsx)(k,{}),type:"primary",shadow:!0,className:f().skip})]}),(0,i.jsx)("div",{className:f().masks,ref:l,children:n.map((e,t)=>(0,i.jsx)("div",{className:f()["mask-row"],children:e.map((e,t)=>(0,i.jsx)(b,{mask:e,onClick:()=>_(e)},t))},t))})]})}},88569:function(e){e.exports={"new-chat":"new-chat_new-chat__PooiR","mask-header":"new-chat_mask-header__e0Vph","slide-in-from-top":"new-chat_slide-in-from-top__kKZaf","mask-cards":"new-chat_mask-cards__IwOag","slide-in":"new-chat_slide-in__TtPa_","mask-card":"new-chat_mask-card__8y9G7",title:"new-chat_title__l526l","sub-title":"new-chat_sub-title__e8sUw",actions:"new-chat_actions__DImbs",skip:"new-chat_skip__C_rKb",masks:"new-chat_masks__P6Ebx","mask-row":"new-chat_mask-row__mLWia",mask:"new-chat_mask__HbHeX","mask-name":"new-chat_mask-name__pLrDx"}}}]);