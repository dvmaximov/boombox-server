import{a9 as fe,o as N,n as me,aa as ve,j as V,d as v,aw as T,r as q,y as ge,am as he,h as w,ax as we,ay as be,az as ye,ad as ke,T as U,c as qe,w as K,aq as R,e as xe,aA as Ee}from"./index.1b64f866.js";import{u as Pe,a as Te,b as Se,c as _e,d as Ce,e as Be}from"./use-timeout.fc9efce6.js";import{b as I,c as pe,a as De}from"./focus-manager.05708ea9.js";function $e(){let e;const n=V();function i(){e=void 0}return fe(i),N(i),{removeTick:i,registerTick(s){e=s,me(()=>{e===s&&(ve(n)===!1&&e(),e=void 0)})}}}const Fe={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Me(e,n=()=>{},i=()=>{}){return{transitionProps:v(()=>{const s=`q-transition--${e.transitionShow||n()}`,a=`q-transition--${e.transitionHide||i()}`;return{appear:!0,enterFromClass:`${s}-enter-from`,enterActiveClass:`${s}-enter-active`,enterToClass:`${s}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:v(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const S=[];function Ne(e){return S.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function He(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return T(e)}else if(e.__qPortal===!0){const i=T(e);return i!==void 0&&i.$options.name==="QPopupProxy"?(e.hide(n),i):e}e=T(e)}while(e!=null)}function Ve(e,n,i){for(;i!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(i--,e.$options.name==="QMenu"){e=He(e,n);continue}e.hide(n)}e=T(e)}}function ze(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Oe(e,n,i,s){const a=q(!1),u=q(!1);let l=null;const c={},r=s==="dialog"&&ze(e);function d(m){if(m===!0){I(c),u.value=!0;return}u.value=!1,a.value===!1&&(r===!1&&l===null&&(l=be(!1,s)),a.value=!0,S.push(e.proxy),pe(c))}function f(m){if(u.value=!1,m!==!0)return;I(c),a.value=!1;const y=S.indexOf(e.proxy);y!==-1&&S.splice(y,1),l!==null&&(ye(l),l=null)}return ge(()=>{f(!0)}),e.proxy.__qPortal=!0,he(e.proxy,"contentEl",()=>n.value),{showPortal:d,hidePortal:f,portalIsActive:a,portalIsAccessible:u,renderPortal:()=>r===!0?i():a.value===!0?[w(we,{to:l},i())]:void 0}}const g=[];let b;function Le(e){b=e.keyCode===27}function Ae(){b===!0&&(b=!1)}function Qe(e){b===!0&&(b=!1,ke(e,27)===!0&&g[g.length-1](e))}function J(e){window[e]("keydown",Le),window[e]("blur",Ae),window[e]("keyup",Qe),b=!1}function Ke(e){U.is.desktop===!0&&(g.push(e),g.length===1&&J("addEventListener"))}function j(e){const n=g.indexOf(e);n>-1&&(g.splice(n,1),g.length===0&&J("removeEventListener"))}const h=[];function X(e){h[h.length-1](e)}function Re(e){U.is.desktop===!0&&(h.push(e),h.length===1&&document.body.addEventListener("focusin",X))}function G(e){const n=h.indexOf(e);n>-1&&(h.splice(n,1),h.length===0&&document.body.removeEventListener("focusin",X))}let P=0;const Ie={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},W={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ue=qe({name:"QDialog",inheritAttrs:!1,props:{...Pe,...Fe,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...Te,"shake","click","escapeKey"],setup(e,{slots:n,emit:i,attrs:s}){const a=V(),u=q(null),l=q(!1),c=q(!1);let r=null,d=null,f,m;const y=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:F}=Be(),{registerTimeout:M}=Se(),{registerTick:Y,removeTick:H}=$e(),{transitionProps:Z,transitionStyle:z}=Me(e,()=>W[e.position][0],()=>W[e.position][1]),{showPortal:O,hidePortal:L,portalIsAccessible:ee,renderPortal:te}=Oe(a,u,de,"dialog"),{hide:x}=_e({showing:l,hideOnRouteChange:y,handleShow:se,handleHide:ue,processOnMount:!0}),{addToHistory:ne,removeFromHistory:ie}=Ce(l,x,y),oe=v(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ie[e.position]}`+(c.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),E=v(()=>l.value===!0&&e.seamless!==!0),ae=v(()=>e.autoClose===!0?{onClick:re}:{}),le=v(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${E.value===!0?"modal":"seamless"}`,s.class]);K(()=>e.maximized,t=>{l.value===!0&&B(t)}),K(E,t=>{F(t),t===!0?(Re(p),Ke(C)):(G(p),j(C))});function se(t){ne(),d=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,B(e.maximized),O(),c.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),Y(k)):H(),M(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:o,bottom:D}=document.activeElement.getBoundingClientRect(),{innerHeight:Q}=window,$=window.visualViewport!==void 0?window.visualViewport.height:Q;o>0&&D>$/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-$,D>=Q?1/0:Math.ceil(document.scrollingElement.scrollTop+D-$/2))),document.activeElement.scrollIntoView()}m=!0,u.value.click(),m=!1}O(!0),c.value=!1,i("show",t)},e.transitionDuration)}function ue(t){H(),ie(),A(!0),c.value=!0,L(),d!==null&&(((t&&t.type.indexOf("key")===0?d.closest('[tabindex]:not([tabindex^="-"])'):void 0)||d).focus(),d=null),M(()=>{L(!0),c.value=!1,i("hide",t)},e.transitionDuration)}function k(t){De(()=>{let o=u.value;o===null||o.contains(document.activeElement)===!0||(o=(t!==""?o.querySelector(t):null)||o.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||o.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||o.querySelector("[autofocus], [data-autofocus]")||o,o.focus({preventScroll:!0}))})}function _(t){t&&typeof t.focus=="function"?t.focus({preventScroll:!0}):k(),i("shake");const o=u.value;o!==null&&(o.classList.remove("q-animate--scale"),o.classList.add("q-animate--scale"),r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,u.value!==null&&(o.classList.remove("q-animate--scale"),k())},170))}function C(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&_():(i("escapeKey"),x()))}function A(t){r!==null&&(clearTimeout(r),r=null),(t===!0||l.value===!0)&&(B(!1),e.seamless!==!0&&(F(!1),G(p),j(C))),t!==!0&&(d=null)}function B(t){t===!0?f!==!0&&(P<1&&document.body.classList.add("q-body--dialog"),P++,f=!0):f===!0&&(P<2&&document.body.classList.remove("q-body--dialog"),P--,f=!1)}function re(t){m!==!0&&(x(t),i("click",t))}function ce(t){e.persistent!==!0&&e.noBackdropDismiss!==!0?x(t):e.noShake!==!0&&_()}function p(t){e.allowFocusOutside!==!0&&ee.value===!0&&Ee(u.value,t.target)!==!0&&k('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:k,shake:_,__updateRefocusTarget(t){d=t||null}}),N(A);function de(){return w("div",{role:"dialog","aria-modal":E.value===!0?"true":"false",...s,class:le.value},[w(R,{name:"q-transition--fade",appear:!0},()=>E.value===!0?w("div",{class:"q-dialog__backdrop fixed-full",style:z.value,"aria-hidden":"true",tabindex:-1,onClick:ce}):null),w(R,Z.value,()=>l.value===!0?w("div",{ref:u,class:oe.value,style:z.value,tabindex:-1,...ae.value},xe(n.default)):null)])}return te}});export{Ue as Q,Fe as a,Me as b,Oe as c,Re as d,j as e,He as f,Ke as g,Ne as h,Ve as i,S as p,G as r,$e as u};
