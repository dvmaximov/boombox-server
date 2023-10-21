import{f as R,a7 as C,w as q,a8 as j,o as k,j as O,g as M,a9 as B,aa as W,t as m,l as a,C as D,ab as F,ac as N,ad as _,ae as I}from"./index.df45ce35.js";function le(e,o,t){let l;function r(){l!==void 0&&(C.remove(l),l=void 0)}return R(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){l={condition:()=>t.value===!0,handler:o},C.add(l)}}}const ie={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},re=["beforeShow","show","beforeHide","hide"];function ne({showing:e,canShow:o,hideOnRouteChange:t,handleShow:l,handleHide:r,processOnMount:p}){const n=O(),{props:s,emit:d,proxy:L}=n;let u;function $(i){e.value===!0?y(i):S(i)}function S(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||o!==void 0&&o(i)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!0),u=i,M(()=>{u===i&&(u=void 0)})),(s.modelValue===null||f===!1)&&V(i)}function V(i){e.value!==!0&&(e.value=!0,d("beforeShow",i),l!==void 0?l(i):d("show",i))}function y(i){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!1),u=i,M(()=>{u===i&&(u=void 0)})),(s.modelValue===null||f===!1)&&H(i)}function H(i){e.value!==!1&&(e.value=!1,d("beforeHide",i),r!==void 0?r(i):d("hide",i))}function x(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):i===!0!==e.value&&(i===!0?V:H)(u)}q(()=>s.modelValue,x),t!==void 0&&j(n)===!0&&q(()=>L.$route.fullPath,()=>{t.value===!0&&e.value===!0&&y()}),p===!0&&k(()=>{x(s.modelValue)});const P={show:S,hide:y,toggle:$};return Object.assign(L,P),P}const K=[null,document,document.body,document.scrollingElement,document.documentElement];function se(e,o){let t=B(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return K.includes(t)?window:t}function G(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function J(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function de(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");W(e,{width:"100%",height:"200px"}),W(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),h=t-l,h}function Q(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let w=0,b,T,v,E=!1,A,X,Y,c=null;function Z(e){ee(e)&&D(e)}function ee(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=F(e),t=e.shiftKey&&!e.deltaX,l=!t&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=t||l?e.deltaY:e.deltaX;for(let p=0;p<o.length;p++){const n=o[p];if(Q(n,l))return l?r<0&&n.scrollTop===0?!0:r>0&&n.scrollTop+n.clientHeight===n.scrollHeight:r<0&&n.scrollLeft===0?!0:r>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function g(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:t,scrollTop:l}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=t-o,document.scrollingElement.scrollTop=l),l>v&&(document.scrollingElement.scrollTop-=Math.ceil((l-v)/8))}))}function z(e){const o=document.body,t=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:r}=window.getComputedStyle(o);b=J(window),T=G(window),A=o.style.left,X=o.style.top,Y=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,r!=="hidden"&&(r==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,m.is.ios===!0&&(t===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",g,a.passiveCapture),window.visualViewport.addEventListener("scroll",g,a.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,a.passiveCapture))}m.is.desktop===!0&&m.is.mac===!0&&window[`${e}EventListener`]("wheel",Z,a.notPassive),e==="remove"&&(m.is.ios===!0&&(t===!0?(window.visualViewport.removeEventListener("resize",g,a.passiveCapture),window.visualViewport.removeEventListener("scroll",g,a.passiveCapture)):window.removeEventListener("scroll",U,a.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=A,o.style.top=X,window.location.href===Y&&window.scrollTo(b,T),v=void 0)}function oe(e){let o="add";if(e===!0){if(w++,c!==null){clearTimeout(c),c=null;return}if(w>1)return}else{if(w===0||(w--,w>0))return;if(o="remove",m.is.ios===!0&&m.is.nativeMobile===!0){c!==null&&clearTimeout(c),c=setTimeout(()=>{z(o),c=null},100);return}}z(o)}function ue(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,oe(o))}}}function ae(){let e=null;const o=O();function t(){e!==null&&(clearTimeout(e),e=null)}return N(t),R(t),{removeTimeout:t,registerTimeout(l,r){t(),_(o)===!1&&(e=setTimeout(l,r))}}}function ce(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),I.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{re as a,ae as b,ce as c,ne as d,le as e,ue as f,se as g,G as h,J as i,de as j,ie as u};