import{d as Le,e as rt,f as st,g as ct,a as dt,h as Mt,i as tt,j as Rt,c as Ht}from"./QInput.87e78118.js";import{c as be,r as T,d as o,w as ce,a1 as $t,h as c,e as vt,ar as Kt,o as ft,j as we,ax as Qt,a3 as Q,aL as mt,aM as gt,p as jt,Q as he,aN as Nt,aC as pt,aD as ge,n as G,ao as zt,aO as Ut,$ as De,a0 as re,ae as Wt,as as Xt,z as ht,aP as se}from"./index.e9511dda.js";import{u as Ee,a as Me}from"./use-dark.45cd38ee.js";import{Q as Gt,a as Jt,b as Yt}from"./QItem.e29053af.js";import{u as Zt,v as lt,b as el,c as tl,a as ll,p as ut,r as nt,s as ul,d as nl}from"./position-engine.9f26598c.js";import{u as al,a as ol,b as il,c as rl,g as sl}from"./message.store.17d3f4db.js";import{a as cl,u as dl,b as vl,c as fl,d as ml,r as gl,e as at,f as hl,g as bl,Q as yl}from"./QDialog.454cd123.js";import{a as Sl}from"./focus-manager.05708ea9.js";import{u as Cl,a as kl}from"./use-virtual-scroll.b2d4ea7f.js";import{n as ot}from"./format.c3526244.js";var xl=be({name:"QMenu",inheritAttrs:!1,props:{...Zt,...al,...Ee,...cl,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:lt},self:{type:String,validator:lt},offset:{type:Array,validator:el},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ol,"click","escapeKey"],setup(e,{slots:b,emit:l,attrs:I}){let k=null,r,g,m;const y=we(),{proxy:F}=y,{$q:O}=F,S=T(null),A=T(!1),q=o(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),w=Me(e,O),{registerTick:_,removeTick:d}=dl(),{registerTimeout:R}=il(),{transitionProps:M,transitionStyle:J}=vl(e),{localScrollTarget:Y,changeScrollEvent:x,unconfigureScrollTarget:$}=tl(e,z),{anchorEl:P,canShow:Z}=ll({showing:A}),{hide:N}=rl({showing:A,canShow:Z,handleShow:a,handleHide:C,hideOnRouteChange:q,processOnMount:!0}),{showPortal:p,hidePortal:D,renderPortal:v}=fl(y,S,ke,"menu"),L={anchorEl:P,innerRef:S,onClickOutside(s){if(e.persistent!==!0&&A.value===!0)return N(s),(s.type==="touchstart"||s.target.classList.contains("q-dialog__backdrop"))&&Q(s),!0}},j=o(()=>ut(e.anchor||(e.cover===!0?"center middle":"bottom start"),O.lang.rtl)),de=o(()=>e.cover===!0?j.value:ut(e.self||"top start",O.lang.rtl)),_e=o(()=>(e.square===!0?" q-menu--square":"")+(w.value===!0?" q-menu--dark q-dark":"")),ye=o(()=>e.autoClose===!0?{onClick:fe}:{}),ve=o(()=>A.value===!0&&e.persistent!==!0);ce(ve,s=>{s===!0?(bl(te),nl(L)):(at(te),nt(L))});function ee(){Sl(()=>{let s=S.value;s&&s.contains(document.activeElement)!==!0&&(s=s.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||s.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||s.querySelector("[autofocus], [data-autofocus]")||s,s.focus({preventScroll:!0}))})}function a(s){if(k=e.noRefocus===!1?document.activeElement:null,ml(Ce),p(),z(),r=void 0,s!==void 0&&(e.touchPosition||e.contextMenu)){const U=$t(s);if(U.left!==void 0){const{top:Oe,left:xe}=P.value.getBoundingClientRect();r={left:U.left-xe,top:U.top-Oe}}}g===void 0&&(g=ce(()=>O.screen.width+"|"+O.screen.height+"|"+e.self+"|"+e.anchor+"|"+O.lang.rtl,H)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{H(),e.noFocus!==!0&&ee()}),R(()=>{O.platform.is.ios===!0&&(m=e.autoClose,S.value.click()),H(),p(!0),l("show",s)},e.transitionDuration)}function C(s){d(),D(),Se(!0),k!==null&&(s===void 0||s.qClickOutside!==!0)&&(((s&&s.type.indexOf("key")===0?k.closest('[tabindex]:not([tabindex^="-"])'):void 0)||k).focus(),k=null),R(()=>{D(!0),l("hide",s)},e.transitionDuration)}function Se(s){r=void 0,g!==void 0&&(g(),g=void 0),(s===!0||A.value===!0)&&(gl(Ce),$(),nt(L),at(te)),s!==!0&&(k=null)}function z(){(P.value!==null||e.scrollTarget!==void 0)&&(Y.value=sl(P.value,e.scrollTarget),x(Y.value,H))}function fe(s){m!==!0?(hl(F,s),l("click",s)):m=!1}function Ce(s){ve.value===!0&&e.noFocus!==!0&&Qt(S.value,s.target)!==!0&&ee()}function te(s){l("escapeKey"),N(s)}function H(){ul({targetEl:S.value,offset:e.offset,anchorEl:P.value,anchorOrigin:j.value,selfOrigin:de.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ke(){return c(Kt,M.value,()=>A.value===!0?c("div",{role:"menu",...I,ref:S,tabindex:-1,class:["q-menu q-position-engine scroll"+_e.value,I.class],style:[I.style,J.value],...ye.value},vt(b.default)):null)}return ft(Se),Object.assign(F,{focus:ee,updatePosition:H}),v}}),Vl=be({name:"QField",inheritAttrs:!1,props:Le,emits:rt,setup(){return st(ct())}});const Il={xs:8,sm:10,md:14,lg:20,xl:24};var ql=be({name:"QChip",props:{...Ee,...mt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:b,emit:l}){const{proxy:{$q:I}}=we(),k=Me(e,I),r=gt(e,Il),g=o(()=>e.selected===!0||e.icon!==void 0),m=o(()=>e.selected===!0?e.iconSelected||I.iconSet.chip.selected:e.icon),y=o(()=>e.iconRemove||I.iconSet.chip.remove),F=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),O=o(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(F.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(k.value===!0?" q-chip--dark q-dark":"")}),S=o(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},R={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||I.lang.label.remove};return{chip:d,remove:R}});function A(d){d.keyCode===13&&q(d)}function q(d){e.disable||(l("update:selected",!e.selected),l("click",d))}function w(d){(d.keyCode===void 0||d.keyCode===13)&&(Q(d),e.disable===!1&&(l("update:modelValue",!1),l("remove")))}function _(){const d=[];F.value===!0&&d.push(c("div",{class:"q-focus-helper"})),g.value===!0&&d.push(c(he,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const R=e.label!==void 0?[c("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(c("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Nt(b.default,R))),e.iconRight&&d.push(c(he,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(c(he,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...S.value.remove,onClick:w,onKeyup:w})),d}return()=>{if(e.modelValue===!1)return;const d={class:O.value,style:r.value};return F.value===!0&&Object.assign(d,S.value.chip,{onClick:q,onKeyup:A}),jt("div",d,_(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[pt,e.ripple]])}}});const it=e=>["add","add-unique","toggle"].includes(e),wl=".*+?^${}()|[]\\",_l=Object.keys(Le);var Nl=be({name:"QSelect",inheritAttrs:!1,props:{...Cl,...dt,...Le,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:it},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...rt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:b,emit:l}){const{proxy:I}=we(),{$q:k}=I,r=T(!1),g=T(!1),m=T(-1),y=T(""),F=T(!1),O=T(!1);let S=null,A,q,w,_=null,d,R,M,J;const Y=T(null),x=T(null),$=T(null),P=T(null),Z=T(null),N=Mt(e),p=Rt(Ge),D=o(()=>Array.isArray(e.options)?e.options.length:0),v=o(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:L,virtualScrollSliceSizeComputed:j,localResetVirtualScroll:de,padVirtualScroll:_e,onVirtualScrollEvt:ye,scrollTo:ve,setVirtualScrollSize:ee}=kl({virtualScrollLength:D,getVirtualScrollTarget:It,getVirtualScrollEl:We,virtualScrollItemSizeComputed:v}),a=ct(),C=o(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&A!==void 0?A:[],i=n.map(h=>Vt(h,u));return e.modelValue===null&&t===!0?i.filter(h=>h!==null):i}return n}),Se=o(()=>{const t={};return _l.forEach(n=>{const u=e[n];u!==void 0&&(t[n]=u)}),t}),z=o(()=>e.optionsDark===null?a.isDark.value:e.optionsDark),fe=o(()=>tt(C.value)),Ce=o(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||C.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),te=o(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),H=o(()=>D.value===0),ke=o(()=>C.value.map(t=>E.value(t)).join(", ")),s=o(()=>e.displayValue!==void 0?e.displayValue:ke.value),U=o(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Oe=o(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||C.value.some(U.value))),xe=o(()=>a.focused.value===!0?e.tabindex:-1),Re=o(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":r.value===!0?"true":"false","aria-controls":`${a.targetUid.value}_lb`};return m.value>=0&&(t["aria-activedescendant"]=`${a.targetUid.value}_${m.value}`),t}),He=o(()=>({id:`${a.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),$e=o(()=>C.value.map((t,n)=>({index:n,opt:t,html:U.value(t),selected:!0,removeAtIndex:xt,toggleOption:W,tabindex:xe.value}))),bt=o(()=>{if(D.value===0)return[];const{from:t,to:n}=L.value;return e.options.slice(t,n).map((u,i)=>{const h=le.value(u)===!0,f=t+i,V={clickable:!0,active:!1,activeClass:Ct.value,manualFocus:!0,focused:!1,disable:h,tabindex:-1,dense:e.optionsDense,dark:z.value,role:"option",id:`${a.targetUid.value}_${f}`,onClick:()=>{W(u)}};return h!==!0&&(Be(u)===!0&&(V.active=!0),m.value===f&&(V.focused=!0),V["aria-selected"]=V.active===!0?"true":"false",k.platform.is.desktop===!0&&(V.onMousemove=()=>{r.value===!0&&ue(f)})),{index:f,opt:u,html:U.value(u),label:E.value(u),selected:V.active,focused:V.focused,toggleOption:W,setOptionIndex:ue,itemProps:V}})}),yt=o(()=>e.dropdownIcon!==void 0?e.dropdownIcon:k.iconSet.arrow.dropdown),St=o(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ct=o(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),K=o(()=>Fe(e.optionValue,"value")),E=o(()=>Fe(e.optionLabel,"label")),le=o(()=>Fe(e.optionDisable,"disable")),Ve=o(()=>C.value.map(t=>K.value(t))),kt=o(()=>{const t={onInput:Ge,onChange:p,onKeydown:Ue,onKeyup:pe,onKeypress:ze,onFocus:je,onClick(n){q===!0&&re(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=p,t});ce(C,t=>{A=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&a.innerLoading.value!==!0&&(g.value!==!0&&r.value!==!0||fe.value!==!0)&&(w!==!0&&ie(),(g.value===!0||r.value===!0)&&ne(""))},{immediate:!0}),ce(()=>e.fillInput,ie),ce(r,Te),ce(D,Et);function Ke(t){return e.emitValue===!0?K.value(t):t}function Ae(t){if(t>-1&&t<C.value.length)if(e.multiple===!0){const n=e.modelValue.slice();l("remove",{index:t,value:n.splice(t,1)[0]}),l("update:modelValue",n)}else l("update:modelValue",null)}function xt(t){Ae(t),a.focus()}function Qe(t,n){const u=Ke(t);if(e.multiple!==!0){e.fillInput===!0&&me(E.value(t),!0,!0),l("update:modelValue",u);return}if(C.value.length===0){l("add",{index:0,value:u}),l("update:modelValue",e.multiple===!0?[u]:u);return}if(n===!0&&Be(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const i=e.modelValue.slice();l("add",{index:i.length,value:u}),i.push(u),l("update:modelValue",i)}function W(t,n){if(a.editable.value!==!0||t===void 0||le.value(t)===!0)return;const u=K.value(t);if(e.multiple!==!0){n!==!0&&(me(e.fillInput===!0?E.value(t):"",!0,!0),X()),x.value!==null&&x.value.focus(),(C.value.length===0||ge(K.value(C.value[0]),u)!==!0)&&l("update:modelValue",e.emitValue===!0?u:t);return}if((q!==!0||F.value===!0)&&a.focus(),je(),C.value.length===0){const f=e.emitValue===!0?u:t;l("add",{index:0,value:f}),l("update:modelValue",e.multiple===!0?[f]:f);return}const i=e.modelValue.slice(),h=Ve.value.findIndex(f=>ge(f,u));if(h>-1)l("remove",{index:h,value:i.splice(h,1)[0]});else{if(e.maxValues!==void 0&&i.length>=e.maxValues)return;const f=e.emitValue===!0?u:t;l("add",{index:i.length,value:f}),i.push(f)}l("update:modelValue",i)}function ue(t){if(k.platform.is.desktop!==!0)return;const n=t>-1&&t<D.value?t:-1;m.value!==n&&(m.value=n)}function Ie(t=1,n){if(r.value===!0){let u=m.value;do u=ot(u+t,-1,D.value-1);while(u!==-1&&u!==m.value&&le.value(e.options[u])===!0);m.value!==u&&(ue(u),ve(u),n!==!0&&e.useInput===!0&&e.fillInput===!0&&qe(u>=0?E.value(e.options[u]):d))}}function Vt(t,n){const u=i=>ge(K.value(i),t);return e.options.find(u)||n.find(u)||t}function Fe(t,n){const u=t!==void 0?t:n;return typeof u=="function"?u:i=>i!==null&&typeof i=="object"&&u in i?i[u]:i}function Be(t){const n=K.value(t);return Ve.value.find(u=>ge(u,n))!==void 0}function je(t){e.useInput===!0&&x.value!==null&&(t===void 0||x.value===t.target&&t.target.value===ke.value)&&x.value.select()}function Ne(t){Wt(t,27)===!0&&r.value===!0&&(re(t),X(),ie()),l("keyup",t)}function pe(t){const{value:n}=t.target;if(t.keyCode!==void 0){Ne(t);return}if(t.target.value="",S!==null&&(clearTimeout(S),S=null),ie(),typeof n=="string"&&n.length!==0){const u=n.toLocaleLowerCase(),i=f=>{const V=e.options.find(B=>f.value(B).toLocaleLowerCase()===u);return V===void 0?!1:(C.value.indexOf(V)===-1?W(V):X(),!0)},h=f=>{i(K)!==!0&&(i(E)===!0||f===!0||ne(n,!0,()=>h(!0)))};h()}else a.clearValue(t)}function ze(t){l("keypress",t)}function Ue(t){if(l("keydown",t),Xt(t)===!0)return;const n=y.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(m.value>-1||n===!0);if(t.keyCode===27){De(t);return}if(t.keyCode===9&&u===!1){ae();return}if(t.target===void 0||t.target.id!==a.targetUid.value||a.editable.value!==!0)return;if(t.keyCode===40&&a.innerLoading.value!==!0&&r.value===!1){Q(t),oe();return}if(t.keyCode===8&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Ae(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&l("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(Q(t),m.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&j.value!==void 0&&(Q(t),m.value=Math.max(-1,Math.min(D.value,m.value+(t.keyCode===33?-1:1)*j.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Q(t),Ie(t.keyCode===38?-1:1,e.multiple));const i=D.value;if((M===void 0||J<Date.now())&&(M=""),i>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||M.length!==0)){r.value!==!0&&oe(t);const h=t.key.toLocaleLowerCase(),f=M.length===1&&M[0]===h;J=Date.now()+1500,f===!1&&(Q(t),M+=h);const V=new RegExp("^"+M.split("").map(Pe=>wl.indexOf(Pe)>-1?"\\"+Pe:Pe).join(".*"),"i");let B=m.value;if(f===!0||B<0||V.test(E.value(e.options[B]))!==!0)do B=ot(B+1,-1,i-1);while(B!==m.value&&(le.value(e.options[B])===!0||V.test(E.value(e.options[B]))!==!0));m.value!==B&&G(()=>{ue(B),ve(B),B>=0&&e.useInput===!0&&e.fillInput===!0&&qe(E.value(e.options[B]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||M!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&Q(t),m.value>-1&&m.value<i){W(e.options[m.value]);return}if(n===!0){const h=(f,V)=>{if(V){if(it(V)!==!0)return}else V=e.newValueMode;if(me("",e.multiple!==!0,!0),f==null)return;(V==="toggle"?W:Qe)(f,V==="add-unique"),e.multiple!==!0&&(x.value!==null&&x.value.focus(),X())};if(e.onNewValue!==void 0?l("newValue",y.value,h):h(y.value),e.multiple!==!0)return}r.value===!0?ae():a.innerLoading.value!==!0&&oe()}}function We(){return q===!0?Z.value:$.value!==null&&$.value.contentEl!==null?$.value.contentEl:void 0}function It(){return We()}function qt(){return e.hideSelected===!0?[]:b["selected-item"]!==void 0?$e.value.map(t=>b["selected-item"](t)).slice():b.selected!==void 0?[].concat(b.selected()):e.useChips===!0?$e.value.map((t,n)=>c(ql,{key:"option-"+n,removable:a.editable.value===!0&&le.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:xe.value,onRemove(){t.removeAtIndex(n)}},()=>c("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:E.value(t.opt)}))):[c("span",{[Oe.value===!0?"innerHTML":"textContent"]:s.value})]}function Xe(){if(H.value===!0)return b["no-option"]!==void 0?b["no-option"]({inputValue:y.value}):void 0;const t=b.option!==void 0?b.option:u=>c(Yt,{key:u.index,...u.itemProps},()=>c(Gt,()=>c(Jt,()=>c("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let n=_e("div",bt.value.map(t));return b["before-options"]!==void 0&&(n=b["before-options"]().concat(n)),ht(b["after-options"],n)}function wt(t,n){const u=n===!0?{...Re.value,...a.splitAttrs.attributes.value}:void 0,i={ref:n===!0?x:void 0,key:"i_t",class:Ce.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...u,id:n===!0?a.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...kt.value};return t!==!0&&q===!0&&(Array.isArray(i.class)===!0?i.class=[...i.class,"no-pointer-events"]:i.class+=" no-pointer-events"),c("input",i)}function Ge(t){S!==null&&(clearTimeout(S),S=null),!(t&&t.target&&t.target.qComposing===!0)&&(qe(t.target.value||""),w=!0,d=y.value,a.focused.value!==!0&&(q!==!0||F.value===!0)&&a.focus(),e.onFilter!==void 0&&(S=setTimeout(()=>{S=null,ne(y.value)},e.inputDebounce)))}function qe(t){y.value!==t&&(y.value=t,l("inputValue",t))}function me(t,n,u){w=u!==!0,e.useInput===!0&&(qe(t),(n===!0||u!==!0)&&(d=t),n!==!0&&ne(t))}function ne(t,n,u){if(e.onFilter===void 0||n!==!0&&a.focused.value!==!0)return;a.innerLoading.value===!0?l("filterAbort"):(a.innerLoading.value=!0,O.value=!0),t!==""&&e.multiple!==!0&&C.value.length!==0&&w!==!0&&t===E.value(C.value[0])&&(t="");const i=setTimeout(()=>{r.value===!0&&(r.value=!1)},10);_!==null&&clearTimeout(_),_=i,l("filter",t,(h,f)=>{(n===!0||a.focused.value===!0)&&_===i&&(clearTimeout(_),typeof h=="function"&&h(),O.value=!1,G(()=>{a.innerLoading.value=!1,a.editable.value===!0&&(n===!0?r.value===!0&&X():r.value===!0?Te(!0):r.value=!0),typeof f=="function"&&G(()=>{f(I)}),typeof u=="function"&&G(()=>{u(I)})}))},()=>{a.focused.value===!0&&_===i&&(clearTimeout(_),a.innerLoading.value=!1,O.value=!1),r.value===!0&&(r.value=!1)})}function _t(){return c(xl,{ref:$,class:te.value,style:e.popupContentStyle,modelValue:r.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&H.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:z.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:St.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...He.value,onScrollPassive:ye,onBeforeShow:Ye,onBeforeHide:Ot,onShow:At},Xe)}function Ot(t){Ze(t),ae()}function At(){ee()}function Ft(t){re(t),x.value!==null&&x.value.focus(),F.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Bt(t){re(t),G(()=>{F.value=!1})}function Tt(){const t=[c(Vl,{class:`col-auto ${a.fieldClass.value}`,...Se.value,for:a.targetUid.value,dark:z.value,square:!0,loading:O.value,itemAligned:!1,filled:!0,stackLabel:y.value.length!==0,...a.splitAttrs.listeners.value,onFocus:Ft,onBlur:Bt},{...b,rawControl:()=>a.getControl(!0),before:void 0,after:void 0})];return r.value===!0&&t.push(c("div",{ref:Z,class:te.value+" scroll",style:e.popupContentStyle,...He.value,onClick:De,onScrollPassive:ye},Xe())),c(yl,{ref:P,modelValue:g.value,position:e.useInput===!0?"top":void 0,transitionShow:R,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:Ye,onBeforeHide:Pt,onHide:Dt,onShow:Lt},()=>c("div",{class:"q-select__dialog"+(z.value===!0?" q-select__dialog--dark q-dark":"")+(F.value===!0?" q-select__dialog--focused":"")},t))}function Pt(t){Ze(t),P.value!==null&&P.value.__updateRefocusTarget(a.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),a.focused.value=!1}function Dt(t){X(),a.focused.value===!1&&l("blur",t),ie()}function Lt(){const t=document.activeElement;(t===null||t.id!==a.targetUid.value)&&x.value!==null&&x.value!==t&&x.value.focus(),ee()}function ae(){g.value!==!0&&(m.value=-1,r.value===!0&&(r.value=!1),a.focused.value===!1&&(_!==null&&(clearTimeout(_),_=null),a.innerLoading.value===!0&&(l("filterAbort"),a.innerLoading.value=!1,O.value=!1)))}function oe(t){a.editable.value===!0&&(q===!0?(a.onControlFocusin(t),g.value=!0,G(()=>{a.focus()})):a.focus(),e.onFilter!==void 0?ne(y.value):(H.value!==!0||b["no-option"]!==void 0)&&(r.value=!0))}function X(){g.value=!1,ae()}function ie(){e.useInput===!0&&me(e.multiple!==!0&&e.fillInput===!0&&C.value.length!==0&&E.value(C.value[0])||"",!0,!0)}function Te(t){let n=-1;if(t===!0){if(C.value.length!==0){const u=K.value(C.value[0]);n=e.options.findIndex(i=>ge(K.value(i),u))}de(n)}ue(n)}function Et(t,n){r.value===!0&&a.innerLoading.value===!1&&(de(-1,!0),G(()=>{r.value===!0&&a.innerLoading.value===!1&&(t>n?de():Te(!0))}))}function Je(){g.value===!1&&$.value!==null&&$.value.updatePosition()}function Ye(t){t!==void 0&&re(t),l("popupShow",t),a.hasPopupOpen=!0,a.onControlFocusin(t)}function Ze(t){t!==void 0&&re(t),l("popupHide",t),a.hasPopupOpen=!1,a.onControlFocusout(t)}function et(){q=k.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?b["no-option"]!==void 0||e.onFilter!==void 0||H.value===!1:!0),R=k.platform.is.ios===!0&&q===!0&&e.useInput===!0?"fade":e.transitionShow}return zt(et),Ut(Je),et(),ft(()=>{S!==null&&clearTimeout(S)}),Object.assign(I,{showPopup:oe,hidePopup:X,removeAtIndex:Ae,add:Qe,toggleOption:W,getOptionIndex:()=>m.value,setOptionIndex:ue,moveOptionSelection:Ie,filter:ne,updateMenuPosition:Je,updateInputValue:me,isOptionSelected:Be,getEmittingOptionValue:Ke,isOptionDisabled:(...t)=>le.value.apply(null,t)===!0,getOptionValue:(...t)=>K.value.apply(null,t),getOptionLabel:(...t)=>E.value.apply(null,t)}),Object.assign(a,{innerValue:C,fieldClass:o(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:Y,targetRef:x,hasValue:fe,showPopup:oe,floatingLabel:o(()=>e.hideSelected!==!0&&fe.value===!0||typeof y.value=="number"||y.value.length!==0||tt(e.displayValue)),getControlChild:()=>{if(a.editable.value!==!1&&(g.value===!0||H.value!==!0||b["no-option"]!==void 0))return q===!0?Tt():_t();a.hasPopupOpen===!0&&(a.hasPopupOpen=!1)},controlEvents:{onFocusin(t){a.onControlFocusin(t)},onFocusout(t){a.onControlFocusout(t,()=>{ie(),ae()})},onClick(t){if(De(t),q!==!0&&r.value===!0){ae(),x.value!==null&&x.value.focus();return}oe(t)}},getControl:t=>{const n=qt(),u=t===!0||g.value!==!0||q!==!0;if(e.useInput===!0)n.push(wt(t,u));else if(a.editable.value===!0){const h=u===!0?Re.value:void 0;n.push(c("input",{ref:u===!0?x:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?a.targetUid.value:void 0,value:s.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...h,onKeydown:Ue,onKeyup:Ne,onKeypress:ze})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(c("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:pe}))}if(N.value!==void 0&&e.disable!==!0&&Ve.value.length!==0){const h=Ve.value.map(f=>c("option",{value:f,selected:!0}));n.push(c("select",{class:"hidden",name:N.value,multiple:e.multiple},h))}const i=e.useInput===!0||u!==!0?void 0:a.splitAttrs.attributes.value;return c("div",{class:"q-field__native row items-center",...i,...a.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&O.value!==!0&&e.hideDropdownIcon!==!0?[c(he,{class:"q-select__dropdown-icon"+(r.value===!0?" rotate-180":""),name:yt.value})]:null}),st(a)}});function Ol(e,b){const l=T(null),I=o(()=>e.disable===!0?null:c("span",{ref:l,class:"no-outline",tabindex:-1}));function k(r){const g=b.value;r!==void 0&&r.type.indexOf("key")===0?g!==null&&document.activeElement!==g&&g.contains(document.activeElement)===!0&&g.focus():l.value!==null&&(r===void 0||g!==null&&g.contains(r.target)===!0)&&l.value.focus()}return{refocusTargetEl:I,refocusTarget:k}}var Al={xs:30,sm:35,md:40,lg:50,xl:60};const Fl={...Ee,...mt,...dt,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Bl=["update:modelValue"];function Tl(e,b){const{props:l,slots:I,emit:k,proxy:r}=we(),{$q:g}=r,m=Me(l,g),y=T(null),{refocusTargetEl:F,refocusTarget:O}=Ol(l,y),S=gt(l,Al),A=o(()=>l.val!==void 0&&Array.isArray(l.modelValue)),q=o(()=>{const v=se(l.val);return A.value===!0?l.modelValue.findIndex(L=>se(L)===v):-1}),w=o(()=>A.value===!0?q.value>-1:se(l.modelValue)===se(l.trueValue)),_=o(()=>A.value===!0?q.value===-1:se(l.modelValue)===se(l.falseValue)),d=o(()=>w.value===!1&&_.value===!1),R=o(()=>l.disable===!0?-1:l.tabindex||0),M=o(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(l.disable===!0?" disabled":"")+(m.value===!0?` q-${e}--dark`:"")+(l.dense===!0?` q-${e}--dense`:"")+(l.leftLabel===!0?" reverse":"")),J=o(()=>{const v=w.value===!0?"truthy":_.value===!0?"falsy":"indet",L=l.color!==void 0&&(l.keepColor===!0||(e==="toggle"?w.value===!0:_.value!==!0))?` text-${l.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${v}${L}`}),Y=o(()=>{const v={type:"checkbox"};return l.name!==void 0&&Object.assign(v,{".checked":w.value,"^checked":w.value===!0?"checked":void 0,name:l.name,value:A.value===!0?l.val:l.trueValue}),v}),x=Ht(Y),$=o(()=>{const v={tabindex:R.value,role:e==="toggle"?"switch":"checkbox","aria-label":l.label,"aria-checked":d.value===!0?"mixed":w.value===!0?"true":"false"};return l.disable===!0&&(v["aria-disabled"]="true"),v});function P(v){v!==void 0&&(Q(v),O(v)),l.disable!==!0&&k("update:modelValue",Z(),v)}function Z(){if(A.value===!0){if(w.value===!0){const v=l.modelValue.slice();return v.splice(q.value,1),v}return l.modelValue.concat([l.val])}if(w.value===!0){if(l.toggleOrder!=="ft"||l.toggleIndeterminate===!1)return l.falseValue}else if(_.value===!0){if(l.toggleOrder==="ft"||l.toggleIndeterminate===!1)return l.trueValue}else return l.toggleOrder!=="ft"?l.trueValue:l.falseValue;return l.indeterminateValue}function N(v){(v.keyCode===13||v.keyCode===32)&&Q(v)}function p(v){(v.keyCode===13||v.keyCode===32)&&P(v)}const D=b(w,d);return Object.assign(r,{toggle:P}),()=>{const v=D();l.disable!==!0&&x(v,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const L=[c("div",{class:J.value,style:S.value,"aria-hidden":"true"},v)];F.value!==null&&L.push(F.value);const j=l.label!==void 0?ht(I.default,[l.label]):vt(I.default);return j!==void 0&&L.push(c("div",{class:`q-${e}__label q-anchor--skip`},j)),c("div",{ref:y,class:M.value,...$.value,onClick:P,onKeydown:N,onKeyup:p},L)}}const Pl=c("div",{key:"svg",class:"q-checkbox__bg absolute"},[c("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[c("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),c("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var pl=be({name:"QCheckbox",props:Fl,emits:Bl,setup(e){function b(l,I){const k=o(()=>(l.value===!0?e.checkedIcon:I.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>k.value!==null?[c("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[c(he,{class:"q-checkbox__icon",name:k.value})])]:[Pl]}return Tl("checkbox",b)}});export{xl as Q,Nl as a,pl as b,ql as c,Al as o,Ol as u};