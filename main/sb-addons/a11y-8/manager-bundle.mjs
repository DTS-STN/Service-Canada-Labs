try{
var _={};var lt=Object.getOwnPropertyNames;var ct=(e,r)=>function(){return e&&(r=(0,e[lt(e)[0]])(e=0)),r};var x,j,ee,fe,pe,ge,he,Ee,N,z=ct({"src/constants.ts"(){"use strict";x="storybook/a11y",j=`${x}/panel`,ee="a11y",fe=`${x}/result`,pe=`${x}/request`,ge=`${x}/running`,he=`${x}/error`,Ee=`${x}/manual`,N={RESULT:fe,REQUEST:pe,RUNNING:ge,ERROR:he,MANUAL:Ee}}});var a=__REACT__,{Children:_n,Component:st,Fragment:B,Profiler:vn,PureComponent:Re,StrictMode:Tn,Suspense:Sn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:On,cloneElement:F,createContext:ye,createElement:g,createFactory:xn,createRef:be,forwardRef:ut,isValidElement:_e,lazy:Cn,memo:In,useCallback:A,useContext:ve,useDebugValue:An,useEffect:$,useImperativeHandle:kn,useLayoutEffect:Te,useMemo:W,useReducer:wn,useRef:U,useState:k,version:Dn}=__REACT__;var Ln=__STORYBOOKAPI__,{ActiveTabs:Mn,Consumer:Bn,ManagerContext:$n,Provider:Gn,addons:V,combineParameters:jn,controlOrMetaKey:zn,controlOrMetaSymbol:Fn,eventMatchesShortcut:Wn,eventToShortcut:Un,isMacLike:Yn,isShortcutTaken:Vn,keyToSymbol:Kn,merge:Xn,mockChannel:qn,optionOrAltSymbol:Qn,shortcutMatchesShortcut:Jn,shortcutToHumanString:Zn,types:te,useAddonState:Se,useArgTypes:ea,useArgs:ta,useChannel:K,useGlobalTypes:ra,useGlobals:na,useParameter:Oe,useSharedState:aa,useStoryPrepared:oa,useStorybookApi:xe,useStorybookState:Ce}=__STORYBOOKAPI__;var ua=__STORYBOOKTHEMING__,{CacheProvider:da,ClassNames:ma,Global:Ie,ThemeProvider:fa,background:pa,color:ga,convert:X,create:ha,createCache:Ea,createGlobal:Ra,createReset:ya,css:ba,darken:_a,ensure:va,ignoreSsrWarning:Ta,isPropValid:Sa,jsx:Oa,keyframes:xa,lighten:Ca,styled:i,themes:q,typography:Ia,useTheme:Aa,withTheme:ka}=__STORYBOOKTHEMING__;var Pa=__STORYBOOKCOMPONENTS__,{A:La,ActionBar:re,AddonPanel:Ma,Badge:Ae,Bar:Ba,Blockquote:$a,Button:Ga,Code:ja,DL:za,Div:Fa,DocumentWrapper:Wa,ErrorFormatter:Ua,FlexBar:Ya,Form:Va,H1:Ka,H2:Xa,H3:qa,H4:Qa,H5:Ja,H6:Za,HR:eo,IconButton:ke,IconButtonSkeleton:to,Icons:H,Img:ro,LI:no,Link:ao,ListItem:oo,Loader:io,OL:lo,P:co,Placeholder:we,Pre:so,ResetWrapper:uo,ScrollArea:De,Separator:mo,Spaced:fo,Span:po,StorybookIcon:go,StorybookLogo:ho,Symbols:Eo,SyntaxHighlighter:Ro,TT:yo,TabBar:bo,TabButton:_o,TabWrapper:vo,Table:To,Tabs:So,TabsState:Oo,TooltipLinkList:Ne,TooltipMessage:xo,TooltipNote:Co,UL:Io,WithTooltip:He,WithTooltipPure:Ao,Zoom:ko,codeCommon:wo,components:Do,createCopyToClipboardFunction:No,getStoryHref:Ho,icons:Po,interleaveSeparators:Lo,nameSpaceClassNames:Mo,resetComponents:Bo,withReset:$o}=__STORYBOOKCOMPONENTS__;var Wo=__REACTDOM__,{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Uo,createPortal:Yo,findDOMNode:Pe,flushSync:Vo,hydrate:Ko,render:Xo,unmountComponentAtNode:qo,unstable_batchedUpdates:Qo,unstable_createPortal:Jo,unstable_renderSubtreeIntoContainer:Zo,version:ei}=__REACTDOM__;var ae=function(e,r){return ae=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])},ae(e,r)};function dt(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");ae(e,r);function n(){this.constructor=e}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}var oe=function(){return oe=Object.assign||function(r){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(r[c]=n[c])}return r},oe.apply(this,arguments)};function mt(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)r.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(n[t[o]]=e[t[o]]);return n}var Q=typeof globalThis<"u"?globalThis:typeof window<"u"||typeof window<"u"?window:typeof self<"u"?self:{};function ft(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var le=ft,pt=typeof Q=="object"&&Q&&Q.Object===Object&&Q,gt=pt,ht=gt,Et=typeof self=="object"&&self&&self.Object===Object&&self,Rt=ht||Et||Function("return this")(),Fe=Rt,yt=Fe,bt=function(){return yt.Date.now()},_t=bt,vt=/\s/;function Tt(e){for(var r=e.length;r--&&vt.test(e.charAt(r)););return r}var St=Tt,Ot=St,xt=/^\s+/;function Ct(e){return e&&e.slice(0,Ot(e)+1).replace(xt,"")}var It=Ct,At=Fe,kt=At.Symbol,We=kt,Le=We,Ue=Object.prototype,wt=Ue.hasOwnProperty,Dt=Ue.toString,G=Le?Le.toStringTag:void 0;function Nt(e){var r=wt.call(e,G),n=e[G];try{e[G]=void 0;var t=!0}catch{}var o=Dt.call(e);return t&&(r?e[G]=n:delete e[G]),o}var Ht=Nt,Pt=Object.prototype,Lt=Pt.toString;function Mt(e){return Lt.call(e)}var Bt=Mt,Me=We,$t=Ht,Gt=Bt,jt="[object Null]",zt="[object Undefined]",Be=Me?Me.toStringTag:void 0;function Ft(e){return e==null?e===void 0?zt:jt:Be&&Be in Object(e)?$t(e):Gt(e)}var Wt=Ft;function Ut(e){return e!=null&&typeof e=="object"}var Yt=Ut,Vt=Wt,Kt=Yt,Xt="[object Symbol]";function qt(e){return typeof e=="symbol"||Kt(e)&&Vt(e)==Xt}var Qt=qt,Jt=It,$e=le,Zt=Qt,Ge=0/0,er=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,rr=/^0o[0-7]+$/i,nr=parseInt;function ar(e){if(typeof e=="number")return e;if(Zt(e))return Ge;if($e(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=$e(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Jt(e);var n=tr.test(e);return n||rr.test(e)?nr(e.slice(2),n?2:8):er.test(e)?Ge:+e}var or=ar,ir=le,ne=_t,je=or,lr="Expected a function",cr=Math.max,sr=Math.min;function ur(e,r,n){var t,o,c,u,s,f,p=0,d=!1,m=!1,l=!0;if(typeof e!="function")throw new TypeError(lr);r=je(r)||0,ir(n)&&(d=!!n.leading,m="maxWait"in n,c=m?cr(je(n.maxWait)||0,r):c,l="trailing"in n?!!n.trailing:l);function y(h){var S=t,O=o;return t=o=void 0,p=h,u=e.apply(O,S),u}function b(h){return p=h,s=setTimeout(R,r),d?y(h):u}function v(h){var S=h-f,O=h-p,M=r-S;return m?sr(M,c-O):M}function E(h){var S=h-f,O=h-p;return f===void 0||S>=r||S<0||m&&O>=c}function R(){var h=ne();if(E(h))return T(h);s=setTimeout(R,v(h))}function T(h){return s=void 0,l&&t?y(h):(t=o=void 0,u)}function P(){s!==void 0&&clearTimeout(s),p=0,t=f=o=s=void 0}function L(){return s===void 0?u:T(ne())}function D(){var h=ne(),S=E(h);if(t=arguments,o=this,f=h,S){if(s===void 0)return b(f);if(m)return clearTimeout(s),s=setTimeout(R,r),y(f)}return s===void 0&&(s=setTimeout(R,r)),u}return D.cancel=P,D.flush=L,D}var Ye=ur,dr=Ye,mr=le,fr="Expected a function";function pr(e,r,n){var t=!0,o=!0;if(typeof e!="function")throw new TypeError(fr);return mr(n)&&(t="leading"in n?!!n.leading:t,o="trailing"in n?!!n.trailing:o),dr(e,r,{leading:t,maxWait:r,trailing:o})}var gr=pr,Ve=function(e,r,n,t){switch(r){case"debounce":return Ye(e,n,t);case"throttle":return gr(e,n,t);default:return e}},ie=function(e){return typeof e=="function"},w=function(){return typeof window>"u"},ze=function(e){return e instanceof Element||e instanceof HTMLDocument},Ke=function(e,r,n,t){return function(o){var c=o.width,u=o.height;r(function(s){return s.width===c&&s.height===u||s.width===c&&!t||s.height===u&&!n?s:(e&&ie(e)&&e(c,u),{width:c,height:u})})}},li=function(e){dt(r,e);function r(n){var t=e.call(this,n)||this;t.cancelHandler=function(){t.resizeHandler&&t.resizeHandler.cancel&&(t.resizeHandler.cancel(),t.resizeHandler=null)},t.attachObserver=function(){var p=t.props,d=p.targetRef,m=p.observerOptions;if(!w()){d&&d.current&&(t.targetRef.current=d.current);var l=t.getElement();l&&(t.observableElement&&t.observableElement===l||(t.observableElement=l,t.resizeObserver.observe(l,m)))}},t.getElement=function(){var p=t.props,d=p.querySelector,m=p.targetDomEl;if(w())return null;if(d)return document.querySelector(d);if(m&&ze(m))return m;if(t.targetRef&&ze(t.targetRef.current))return t.targetRef.current;var l=Pe(t);if(!l)return null;var y=t.getRenderType();switch(y){case"renderProp":return l;case"childFunction":return l;case"child":return l;case"childArray":return l;default:return l.parentElement}},t.createResizeHandler=function(p){var d=t.props,m=d.handleWidth,l=m===void 0?!0:m,y=d.handleHeight,b=y===void 0?!0:y,v=d.onResize;if(!(!l&&!b)){var E=Ke(v,t.setState.bind(t),l,b);p.forEach(function(R){var T=R&&R.contentRect||{},P=T.width,L=T.height,D=!t.skipOnMount&&!w();D&&E({width:P,height:L}),t.skipOnMount=!1})}},t.getRenderType=function(){var p=t.props,d=p.render,m=p.children;return ie(d)?"renderProp":ie(m)?"childFunction":_e(m)?"child":Array.isArray(m)?"childArray":"parent"};var o=n.skipOnMount,c=n.refreshMode,u=n.refreshRate,s=u===void 0?1e3:u,f=n.refreshOptions;return t.state={width:void 0,height:void 0},t.skipOnMount=o,t.targetRef=be(),t.observableElement=null,w()||(t.resizeHandler=Ve(t.createResizeHandler,c,s,f),t.resizeObserver=new window.ResizeObserver(t.resizeHandler)),t}return r.prototype.componentDidMount=function(){this.attachObserver()},r.prototype.componentDidUpdate=function(){this.attachObserver()},r.prototype.componentWillUnmount=function(){w()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},r.prototype.render=function(){var n=this.props,t=n.render,o=n.children,c=n.nodeType,u=c===void 0?"div":c,s=this.state,f=s.width,p=s.height,d={width:f,height:p,targetRef:this.targetRef},m=this.getRenderType(),l;switch(m){case"renderProp":return t&&t(d);case"childFunction":return l=o,l(d);case"child":if(l=o,l.type&&typeof l.type=="string"){d.targetRef;var y=mt(d,["targetRef"]);return F(l,y)}return F(l,d);case"childArray":return l=o,l.map(function(b){return!!b&&F(b,d)});default:return g(u,null)}},r}(Re);var hr=w()?$:Te;function J(e){e===void 0&&(e={});var r=e.skipOnMount,n=r===void 0?!1:r,t=e.refreshMode,o=e.refreshRate,c=o===void 0?1e3:o,u=e.refreshOptions,s=e.handleWidth,f=s===void 0?!0:s,p=e.handleHeight,d=p===void 0?!0:p,m=e.targetRef,l=e.observerOptions,y=e.onResize,b=U(n),v=U(null),E=m??v,R=U(),T=k({width:void 0,height:void 0}),P=T[0],L=T[1];return hr(function(){if(!w()){var D=Ke(y,L,f,d),h=function(O){!f&&!d||O.forEach(function(M){var me=M&&M.contentRect||{},nt=me.width,at=me.height,ot=!b.current&&!w();ot&&D({width:nt,height:at}),b.current=!1})};R.current=Ve(h,t,c,u);var S=new window.ResizeObserver(R.current);return E.current&&S.observe(E.current,l),function(){S.disconnect();var O=R.current;O&&O.cancel&&O.cancel()}}},[t,c,u,f,d,y,l,E.current]),oe({ref:E},P)}var mi=__STORYBOOKCOREEVENTS__,{CHANNEL_CREATED:fi,CONFIG_ERROR:pi,CURRENT_STORY_WAS_SET:gi,DOCS_RENDERED:hi,FORCE_REMOUNT:Ei,FORCE_RE_RENDER:Ri,GLOBALS_UPDATED:yi,IGNORED_EXCEPTION:bi,NAVIGATE_URL:_i,PLAY_FUNCTION_THREW_EXCEPTION:vi,PRELOAD_ENTRIES:Ti,PREVIEW_BUILDER_PROGRESS:Si,PREVIEW_KEYDOWN:Oi,REGISTER_SUBSCRIPTION:xi,RESET_STORY_ARGS:Ci,SELECT_STORY:Ii,SET_CONFIG:Ai,SET_CURRENT_STORY:ki,SET_GLOBALS:wi,SET_INDEX:Di,SET_STORIES:Ni,SHARED_STATE_CHANGED:Hi,SHARED_STATE_SET:Pi,STORIES_COLLAPSE_ALL:Li,STORIES_EXPAND_ALL:Mi,STORY_ARGS_UPDATED:Bi,STORY_CHANGED:Xe,STORY_ERRORED:$i,STORY_INDEX_INVALIDATED:Gi,STORY_MISSING:ji,STORY_PREPARED:zi,STORY_RENDERED:qe,STORY_RENDER_PHASE_CHANGED:Fi,STORY_SPECIFIED:Wi,STORY_THREW_EXCEPTION:Ui,STORY_UNCHANGED:Yi,UPDATE_GLOBALS:Vi,UPDATE_QUERY_PARAMS:Ki,UPDATE_STORY_ARGS:Xi}=__STORYBOOKCOREEVENTS__;var Qe="storybook/highlight";var ce=`${Qe}/add`,Er=`${Qe}/reset`;_&&_.hot&&_.hot.decline&&_.hot.decline();z();var Rr=e=>g("svg",{...e},g("defs",null,g("filter",{id:"protanopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"protanomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"deuteranopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"deuteranomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"tritanopia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"})),g("filter",{id:"tritanomaly"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"})),g("filter",{id:"achromatopsia"},g("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"})))),yr="storybook-preview-iframe",br=[{name:"blurred vision",percentage:22.9},{name:"deuteranomaly",percentage:2.7},{name:"deuteranopia",percentage:.56},{name:"protanomaly",percentage:.66},{name:"protanopia",percentage:.59},{name:"tritanomaly",percentage:.01},{name:"tritanopia",percentage:.016},{name:"achromatopsia",percentage:1e-4},{name:"grayscale"}],et=e=>e?e==="blurred vision"?"blur(2px)":e==="grayscale"?"grayscale(100%)":`url('#${e}')`:"none",_r=i.div(()=>({"&, & svg":{position:"absolute",width:0,height:0}})),vr=i.span({background:"linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",borderRadius:"1rem",display:"block",height:"1rem",width:"1rem"},({filter:e})=>({filter:et(e)}),({theme:e})=>({boxShadow:`${e.appBorderColor} 0 0 0 1px inset`})),Tr=i.span({display:"flex",flexDirection:"column"}),Sr=i.span({textTransform:"capitalize"}),Or=i.span(({theme:e})=>({fontSize:11,color:e.textMutedColor})),xr=(e,r)=>[...e!==null?[{id:"reset",title:"Reset color filter",onClick:()=>{r(null)},right:void 0,active:!1}]:[],...br.map(n=>{let t=n.percentage!==void 0?`${n.percentage}% of users`:void 0;return{id:n.name,title:a.createElement(Tr,null,a.createElement(Sr,null,n.name),t&&a.createElement(Or,null,t)),onClick:()=>{r(n)},right:a.createElement(vr,{filter:n.name}),active:e===n}})],Cr=()=>{let[e,r]=k(null);return a.createElement(a.Fragment,null,e&&a.createElement(Ie,{styles:{[`#${yr}`]:{filter:et(e.name)}}}),a.createElement(He,{placement:"top",tooltip:({onHide:n})=>{let t=xr(e,o=>{r(o),n()});return a.createElement(Ne,{links:t})},closeOnOutsideClick:!0,onDoubleClick:()=>r(null)},a.createElement(ke,{key:"filter",active:!!e,title:"Vision simulator"},a.createElement(H,{icon:"accessibility"}))),a.createElement(_r,null,a.createElement(Rr,null)))},Ir=i.div({padding:12,marginBottom:10}),Ar=i.p({margin:"0 0 12px"}),kr=i.a({marginTop:12,textDecoration:"underline",color:"inherit",display:"block"}),wr=({item:e})=>a.createElement(Ir,null,a.createElement(Ar,null,e.description),a.createElement(kr,{href:e.helpUrl,target:"_blank"},"More info...")),Dr=i.div({display:"flex",flexDirection:"column",paddingBottom:4,paddingRight:4,paddingTop:4,fontWeight:400}),Nr=i.div(({elementWidth:e})=>({flexDirection:e>407?"row":"inherit",marginBottom:e>407?6:12,display:e>407?"flex":"block"})),Hr=i(Ae)({padding:"2px 8px",marginBottom:3,minWidth:65,maxWidth:"fit-content",width:"100%",textAlign:"center"}),Pr=i.div({paddingLeft:6,paddingRight:23}),Lr=e=>e.charAt(0).toUpperCase().concat(e.slice(1)),Mr=({rule:e})=>{let{ref:r,width:n}=J({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),t=null;switch(e.impact){case"critical":t="critical";break;case"serious":t="negative";break;case"moderate":t="warning";break;case"minor":t="neutral";break;default:break}return a.createElement(Nr,{ref:r,elementWidth:n||0},a.createElement(Hr,{status:t},Lr(e.impact)),a.createElement(Pr,null,e.message))},Br=({rules:e})=>a.createElement(Dr,null,e.map((r,n)=>a.createElement(Mr,{rule:r,key:n})));z();var $r=[X(q.light).color.negative,X(q.light).color.positive,X(q.light).color.warning],tt=ye({results:{passes:[],incomplete:[],violations:[]},setResults:()=>{},highlighted:[],toggleHighlight:()=>{},clearHighlights:()=>{},tab:0,setTab:()=>{}}),Je={passes:[],incomplete:[],violations:[]},Gr=({active:e,...r})=>{let[n,t]=Se(x,Je),[o,c]=k(0),[u,s]=k([]),f=xe().getCurrentStoryData(),p=A((v,E)=>{s(R=>E?[...R,...v]:R.filter(T=>!v.includes(T)))},[]),d=v=>{b(N.REQUEST,v)},m=A(()=>s([]),[]),l=A(v=>{m(),c(v)},[]),y=A(()=>{c(0),t(Je)},[]),b=K({[qe]:d,[Xe]:y});return $(()=>{b(ce,{elements:u,color:$r[o]})},[u,o]),$(()=>{e&&f?.type==="story"?d(f.id):m()},[e,m,b,f]),e?g(tt.Provider,{value:{results:n,setResults:t,highlighted:u,toggleHighlight:p,clearHighlights:m,tab:o,setTab:l},...r}):null},ue=()=>ve(tt),jr=i.input(({disabled:e})=>({cursor:e?"not-allowed":"pointer"}));function Ze(e,r){let n=e.filter(t=>r.includes(t.target[0])).length;return n===0?1:n===e.length?0:2}var zr=({toggleId:e,elementsToHighlight:r=[]})=>{let{toggleHighlight:n,highlighted:t}=ue(),o=a.useRef(null),[c,u]=a.useState(Ze(r,t));a.useEffect(()=>{let f=Ze(r,t);o.current&&(o.current.indeterminate=f===2),u(f)},[r,t]);let s=a.useCallback(()=>{n(r.map(f=>f.target[0]),c!==0)},[r,c,n]);return a.createElement(jr,{ref:o,id:e,type:"checkbox","aria-label":"Highlight result",disabled:!r.length,onChange:s,checked:c===0})},de=zr,Fr=i.li({fontWeight:600}),Wr=i.span(({theme:e})=>({borderBottom:`1px solid ${e.appBorderColor}`,width:"100%",display:"flex",paddingBottom:6,marginBottom:6,justifyContent:"space-between"})),Ur=i.span({fontWeight:"normal",alignSelf:"center",paddingRight:15,input:{margin:0,display:"block"}}),Yr=({element:e,type:r})=>{let{any:n,all:t,none:o}=e,c=[...n,...t,...o],u=`${r}-${e.target[0]}`;return a.createElement(Fr,null,a.createElement(Wr,null,e.target[0],a.createElement(Ur,null,a.createElement(de,{toggleId:u,elementsToHighlight:[e]}))),a.createElement(Br,{rules:c}))},Vr=({elements:e,type:r})=>a.createElement("ol",null,e.map((n,t)=>a.createElement(Yr,{element:n,key:t,type:r}))),Kr=i.div({display:"flex",flexWrap:"wrap",margin:"12px 0"}),Xr=i.div(({theme:e})=>({margin:"0 6px",padding:5,border:`1px solid ${e.appBorderColor}`,borderRadius:e.appBorderRadius})),qr=({tags:e})=>a.createElement(Kr,null,e.map(r=>a.createElement(Xr,{key:r},r))),Qr=i.div(({theme:e})=>({display:"flex",width:"100%",borderBottom:`1px solid ${e.appBorderColor}`,"&:hover":{background:e.background.hoverable}})),Jr=i(H)(({theme:e})=>({height:10,width:10,minWidth:10,color:e.textMutedColor,marginRight:10,transition:"transform 0.1s ease-in-out",alignSelf:"center",display:"inline-flex"})),Zr=i.div(({theme:e})=>({padding:e.layoutMargin,paddingLeft:e.layoutMargin-3,lineHeight:"20px",background:"none",color:"inherit",textAlign:"left",cursor:"pointer",borderLeft:"3px solid transparent",width:"100%","&:focus":{outline:"0 none",borderLeft:`3px solid ${e.color.secondary}`}})),en=i.span({fontWeight:"normal",float:"right",marginRight:15,alignSelf:"center",input:{margin:0,display:"block"}}),tn=e=>{let[r,n]=k(!1),{item:t,type:o}=e,c=`${o}-${t.id}`;return a.createElement(B,null,a.createElement(Qr,null,a.createElement(Zr,{onClick:()=>n(!r),role:"button"},a.createElement(Jr,{icon:"arrowdown",color:"#9DA5AB",style:{transform:`rotate(${r?0:-90}deg)`}}),t.help),a.createElement(en,null,a.createElement(de,{toggleId:c,elementsToHighlight:t.nodes}))),r?a.createElement(B,null,a.createElement(wr,{item:t,key:"info"}),a.createElement(Vr,{elements:t.nodes,type:o,key:"elements"}),a.createElement(qr,{tags:t.tags,key:"tags"})):null)},se=({items:e,empty:r,type:n})=>a.createElement(B,null,e&&e.length?e.map(t=>a.createElement(tn,{item:t,key:`${n}:${t.id}`,type:n})):a.createElement(we,{key:"placeholder"},r)),rn=i.div({width:"100%",position:"relative",minHeight:"100%"}),nn=i.label(({theme:e})=>({cursor:"pointer",userSelect:"none",color:e.color.dark})),an=i.div(({elementWidth:e,theme:r})=>({cursor:"pointer",fontSize:13,lineHeight:"20px",padding:e>450?"10px 15px 10px 0":"10px 0px 10px 15px",height:"40px",border:"none",marginTop:e>450?-40:0,float:e>450?"right":"left",display:"flex",alignItems:"center",width:e>450?"auto":"100%",borderBottom:e>450?"none":`1px solid ${r.appBorderColor}`,input:{marginLeft:10,marginRight:0,marginTop:-1,marginBottom:0}})),on=i.button(({theme:e})=>({textDecoration:"none",padding:"10px 15px",cursor:"pointer",fontWeight:e.typography.weight.bold,fontSize:e.typography.size.s2-1,lineHeight:1,height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent","&:focus":{outline:"0 none",borderBottom:`3px solid ${e.color.secondary}`}}),({active:e,theme:r})=>e?{opacity:1,borderBottom:`3px solid ${r.color.secondary}`}:{}),ln=i.div({}),cn=i.div(({theme:e})=>({boxShadow:`${e.appBorderColor} 0 -1px 0 0 inset`,background:e.background.app,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap"}));function sn(e){return e.reduce((r,n)=>r.concat(n.nodes),[])}var un=({tabs:e})=>{let{ref:r,width:n}=J({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),{tab:t,setTab:o}=ue(),c=A(f=>{o(parseInt(f.currentTarget.getAttribute("data-index")||"",10))},[o]),u=`${e[t].type}-global-checkbox`,s="Highlight results";return g(rn,{ref:r},g(cn,null,g(ln,null,e.map((f,p)=>g(on,{key:p,"data-index":p,active:t===p,onClick:c},f.label)))),e[t].items.length>0?g(an,{elementWidth:n||0},g(nn,{htmlFor:u},s),g(de,{toggleId:u,elementsToHighlight:sn(e[t].items)})):null,e[t].panel)};z();var rt=i(H)({height:12,width:12,marginRight:4}),dn=i(rt)(({theme:e})=>({animation:`${e.animation.rotate360} 1s linear infinite;`})),mn=i.span(({theme:e})=>({color:e.color.positiveText})),fn=i.span(({theme:e})=>({color:e.color.negativeText})),pn=i.span(({theme:e})=>({color:e.color.warningText})),Z=i.span({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}),gn=()=>{let{manual:e}=Oe("a11y",{manual:!1}),[r,n]=k(e?"manual":"initial"),[t,o]=a.useState(void 0),{setResults:c,results:u}=ue(),{storyId:s}=Ce();a.useEffect(()=>{n(e?"manual":"initial")},[e]);let f=E=>{n("ran"),c(E),setTimeout(()=>{r==="ran"&&n("ready")},900)},p=A(()=>{n("running")},[]),d=A(E=>{n("error"),o(E)},[]),m=K({[N.RUNNING]:p,[N.RESULT]:f,[N.ERROR]:d}),l=A(()=>{n("running"),m(N.MANUAL,s)},[s]),y=W(()=>[{title:"Run test",onClick:l}],[l]),b=W(()=>[{title:r==="ready"?"Rerun tests":a.createElement(a.Fragment,null,a.createElement(rt,{icon:"check"})," Tests completed"),onClick:l}],[r,l]),v=W(()=>{let{passes:E,incomplete:R,violations:T}=u;return[{label:a.createElement(fn,null,T.length," Violations"),panel:a.createElement(se,{items:T,type:0,empty:"No accessibility violations found."}),items:T,type:0},{label:a.createElement(mn,null,E.length," Passes"),panel:a.createElement(se,{items:E,type:1,empty:"No accessibility checks passed."}),items:E,type:1},{label:a.createElement(pn,null,R.length," Incomplete"),panel:a.createElement(se,{items:R,type:2,empty:"No accessibility checks incomplete."}),items:R,type:2}]},[u]);return a.createElement(a.Fragment,null,r==="initial"&&a.createElement(Z,null,"Initializing..."),r==="manual"&&a.createElement(a.Fragment,null,a.createElement(Z,null,"Manually run the accessibility scan."),a.createElement(re,{key:"actionbar",actionItems:y})),r==="running"&&a.createElement(Z,null,a.createElement(dn,{icon:"sync"})," Please wait while the accessibility scan is running ..."),(r==="ready"||r==="ran")&&a.createElement(a.Fragment,null,a.createElement(De,{vertical:!0,horizontal:!0},a.createElement(un,{key:"tabs",tabs:v})),a.createElement(re,{key:"actionbar",actionItems:b})),r==="error"&&a.createElement(Z,null,"The accessibility scan encountered an error.",a.createElement("br",null),typeof t=="string"?t:JSON.stringify(t)))};V.register(x,e=>{V.add(j,{title:"",type:te.TOOL,match:({viewMode:r})=>r==="story",render:()=>a.createElement(Cr,null)}),V.add(j,{title(){let r=e?.getAddonState(x),n=r?.violations?.length||0,t=r?.incomplete?.length||0,o=n+t;return o!==0?`Accessibility (${o})`:"Accessibility"},type:te.PANEL,render:({active:r=!0,key:n})=>a.createElement(Gr,{key:n,active:r},a.createElement(gn,null)),paramKey:ee})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
