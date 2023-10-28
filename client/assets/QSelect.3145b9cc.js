import{d as Te,e as at,f as ot,g as it,a as Bt,h as _t,i as Ze,j as Tt}from"./QInput.c29dc47a.js";import{c as xe,r as P,d as o,w as te,a1 as Dt,h as v,e as Lt,ar as Ht,o as rt,j as De,ax as Mt,a3 as K,aL as Rt,aJ as Et,p as Kt,Q as Ve,aO as $t,aC as Qt,aD as ce,n as N,ao as jt,aP as zt,$ as _e,a0 as ee,ae as Nt,as as Ut,z as Wt}from"./index.4bc2e000.js";import{u as st,a as ct}from"./use-dark.b16beab3.js";import{Q as Xt,a as Jt,b as Gt}from"./QItem.e8ffb52f.js";import{u as Yt,v as pe,b as Zt,c as pt,a as eu,p as et,r as tt,s as tu,d as uu}from"./position-engine.7d36c3af.js";import{u as lu,a as nu,b as au,c as ou,g as iu}from"./message.store.4c689bd0.js";import{a as ru,u as su,b as cu,c as du,d as vu,r as fu,e as ut,f as mu,g as gu,Q as hu}from"./QDialog.adab8df9.js";import{a as yu}from"./focus-manager.05708ea9.js";import{u as bu,a as Su}from"./use-virtual-scroll.28d516b8.js";import{n as lt}from"./format.8e50e5da.js";var Cu=xe({name:"QMenu",inheritAttrs:!1,props:{...Yt,...lu,...st,...ru,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:pe},self:{type:String,validator:pe},offset:{type:Array,validator:Zt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...nu,"click","escapeKey"],setup(e,{slots:S,emit:r,attrs:O}){let I=null,s,k,f;const g=De(),{proxy:F}=g,{$q:V}=F,y=P(null),B=P(!1),x=o(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),H=ct(e,V),{registerTick:q,removeTick:c}=su(),{registerTimeout:M}=au(),{transitionProps:D,transitionStyle:de}=cu(e),{localScrollTarget:ve,changeScrollEvent:C,unconfigureScrollTarget:E}=pt(e,$),{anchorEl:R,canShow:fe}=eu({showing:B}),{hide:ue}=ou({showing:B,canShow:fe,handleShow:n,handleHide:h,hideOnRouteChange:x,processOnMount:!0}),{showPortal:le,hidePortal:_,renderPortal:we}=du(g,y,ye,"menu"),ne={anchorEl:R,innerRef:y,onClickOutside(i){if(e.persistent!==!0&&B.value===!0)return ue(i),(i.type==="touchstart"||i.target.classList.contains("q-dialog__backdrop"))&&K(i),!0}},ae=o(()=>et(e.anchor||(e.cover===!0?"center middle":"bottom start"),V.lang.rtl)),oe=o(()=>e.cover===!0?ae.value:et(e.self||"top start",V.lang.rtl)),Ie=o(()=>(e.square===!0?" q-menu--square":"")+(H.value===!0?" q-menu--dark q-dark":"")),me=o(()=>e.autoClose===!0?{onClick:re}:{}),ie=o(()=>B.value===!0&&e.persistent!==!0);te(ie,i=>{i===!0?(gu(W),uu(ne)):(ut(W),tt(ne))});function U(){yu(()=>{let i=y.value;i&&i.contains(document.activeElement)!==!0&&(i=i.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||i.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||i.querySelector("[autofocus], [data-autofocus]")||i,i.focus({preventScroll:!0}))})}function n(i){if(I=e.noRefocus===!1?document.activeElement:null,vu(he),le(),$(),s=void 0,i!==void 0&&(e.touchPosition||e.contextMenu)){const Q=Dt(i);if(Q.left!==void 0){const{top:qe,left:be}=R.value.getBoundingClientRect();s={left:Q.left-be,top:Q.top-qe}}}k===void 0&&(k=te(()=>V.screen.width+"|"+V.screen.height+"|"+e.self+"|"+e.anchor+"|"+V.lang.rtl,T)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{T(),e.noFocus!==!0&&U()}),M(()=>{V.platform.is.ios===!0&&(f=e.autoClose,y.value.click()),T(),le(!0),r("show",i)},e.transitionDuration)}function h(i){c(),_(),ge(!0),I!==null&&(i===void 0||i.qClickOutside!==!0)&&(((i&&i.type.indexOf("key")===0?I.closest('[tabindex]:not([tabindex^="-"])'):void 0)||I).focus(),I=null),M(()=>{_(!0),r("hide",i)},e.transitionDuration)}function ge(i){s=void 0,k!==void 0&&(k(),k=void 0),(i===!0||B.value===!0)&&(fu(he),E(),tt(ne),ut(W)),i!==!0&&(I=null)}function $(){(R.value!==null||e.scrollTarget!==void 0)&&(ve.value=iu(R.value,e.scrollTarget),C(ve.value,T))}function re(i){f!==!0?(mu(F,i),r("click",i)):f=!1}function he(i){ie.value===!0&&e.noFocus!==!0&&Mt(y.value,i.target)!==!0&&U()}function W(i){r("escapeKey"),ue(i)}function T(){tu({targetEl:y.value,offset:e.offset,anchorEl:R.value,anchorOrigin:ae.value,selfOrigin:oe.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ye(){return v(Ht,D.value,()=>B.value===!0?v("div",{role:"menu",...O,ref:y,tabindex:-1,class:["q-menu q-position-engine scroll"+Ie.value,O.class],style:[O.style,de.value],...me.value},Lt(S.default)):null)}return rt(ge),Object.assign(F,{focus:U,updatePosition:T}),we}}),ku=xe({name:"QField",inheritAttrs:!1,props:Te,emits:at,setup(){return ot(it())}});const Vu={xs:8,sm:10,md:14,lg:20,xl:24};var xu=xe({name:"QChip",props:{...st,...Rt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:S,emit:r}){const{proxy:{$q:O}}=De(),I=ct(e,O),s=Et(e,Vu),k=o(()=>e.selected===!0||e.icon!==void 0),f=o(()=>e.selected===!0?e.iconSelected||O.iconSet.chip.selected:e.icon),g=o(()=>e.iconRemove||O.iconSet.chip.remove),F=o(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),V=o(()=>{const c=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(c?` text-${c} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(F.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(I.value===!0?" q-chip--dark q-dark":"")}),y=o(()=>{const c=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},M={...c,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||O.lang.label.remove};return{chip:c,remove:M}});function B(c){c.keyCode===13&&x(c)}function x(c){e.disable||(r("update:selected",!e.selected),r("click",c))}function H(c){(c.keyCode===void 0||c.keyCode===13)&&(K(c),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function q(){const c=[];F.value===!0&&c.push(v("div",{class:"q-focus-helper"})),k.value===!0&&c.push(v(Ve,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const M=e.label!==void 0?[v("div",{class:"ellipsis"},[e.label])]:void 0;return c.push(v("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},$t(S.default,M))),e.iconRight&&c.push(v(Ve,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&c.push(v(Ve,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:g.value,...y.value.remove,onClick:H,onKeyup:H})),c}return()=>{if(e.modelValue===!1)return;const c={class:V.value,style:s.value};return F.value===!0&&Object.assign(c,y.value.chip,{onClick:x,onKeyup:B}),Kt("div",c,q(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Qt,e.ripple]])}}});const nt=e=>["add","add-unique","toggle"].includes(e),wu=".*+?^${}()|[]\\",Iu=Object.keys(Te);var Hu=xe({name:"QSelect",inheritAttrs:!1,props:{...bu,...Bt,...Te,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:nt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...at,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:S,emit:r}){const{proxy:O}=De(),{$q:I}=O,s=P(!1),k=P(!1),f=P(-1),g=P(""),F=P(!1),V=P(!1);let y=null,B,x,H,q=null,c,M,D,de;const ve=P(null),C=P(null),E=P(null),R=P(null),fe=P(null),ue=_t(e),le=Tt(We),_=o(()=>Array.isArray(e.options)?e.options.length:0),we=o(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ne,virtualScrollSliceSizeComputed:ae,localResetVirtualScroll:oe,padVirtualScroll:Ie,onVirtualScrollEvt:me,scrollTo:ie,setVirtualScrollSize:U}=Su({virtualScrollLength:_,getVirtualScrollTarget:bt,getVirtualScrollEl:Ne,virtualScrollItemSizeComputed:we}),n=it(),h=o(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,l=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&B!==void 0?B:[],a=l.map(m=>yt(m,u));return e.modelValue===null&&t===!0?a.filter(m=>m!==null):a}return l}),ge=o(()=>{const t={};return Iu.forEach(l=>{const u=e[l];u!==void 0&&(t[l]=u)}),t}),$=o(()=>e.optionsDark===null?n.isDark.value:e.optionsDark),re=o(()=>Ze(h.value)),he=o(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||h.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),W=o(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),T=o(()=>_.value===0),ye=o(()=>h.value.map(t=>A.value(t)).join(", ")),i=o(()=>e.displayValue!==void 0?e.displayValue:ye.value),Q=o(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),qe=o(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||h.value.some(Q.value))),be=o(()=>n.focused.value===!0?e.tabindex:-1),Le=o(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":s.value===!0?"true":"false","aria-controls":`${n.targetUid.value}_lb`};return f.value>=0&&(t["aria-activedescendant"]=`${n.targetUid.value}_${f.value}`),t}),He=o(()=>({id:`${n.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),Me=o(()=>h.value.map((t,l)=>({index:l,opt:t,html:Q.value(t),selected:!0,removeAtIndex:ht,toggleOption:j,tabindex:be.value}))),dt=o(()=>{if(_.value===0)return[];const{from:t,to:l}=ne.value;return e.options.slice(t,l).map((u,a)=>{const m=X.value(u)===!0,d=t+a,b={clickable:!0,active:!1,activeClass:mt.value,manualFocus:!0,focused:!1,disable:m,tabindex:-1,dense:e.optionsDense,dark:$.value,role:"option",id:`${n.targetUid.value}_${d}`,onClick:()=>{j(u)}};return m!==!0&&(Ae(u)===!0&&(b.active=!0),f.value===d&&(b.focused=!0),b["aria-selected"]=b.active===!0?"true":"false",I.platform.is.desktop===!0&&(b.onMousemove=()=>{s.value===!0&&J(d)})),{index:d,opt:u,html:Q.value(u),label:A.value(u),selected:b.active,focused:b.focused,toggleOption:j,setOptionIndex:J,itemProps:b}})}),vt=o(()=>e.dropdownIcon!==void 0?e.dropdownIcon:I.iconSet.arrow.dropdown),ft=o(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),mt=o(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),L=o(()=>Fe(e.optionValue,"value")),A=o(()=>Fe(e.optionLabel,"label")),X=o(()=>Fe(e.optionDisable,"disable")),Se=o(()=>h.value.map(t=>L.value(t))),gt=o(()=>{const t={onInput:We,onChange:le,onKeydown:ze,onKeyup:Qe,onKeypress:je,onFocus:Ke,onClick(l){x===!0&&ee(l)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=le,t});te(h,t=>{B=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&n.innerLoading.value!==!0&&(k.value!==!0&&s.value!==!0||re.value!==!0)&&(H!==!0&&p(),(k.value===!0||s.value===!0)&&G(""))},{immediate:!0}),te(()=>e.fillInput,p),te(s,Pe),te(_,Pt);function Re(t){return e.emitValue===!0?L.value(t):t}function Oe(t){if(t>-1&&t<h.value.length)if(e.multiple===!0){const l=e.modelValue.slice();r("remove",{index:t,value:l.splice(t,1)[0]}),r("update:modelValue",l)}else r("update:modelValue",null)}function ht(t){Oe(t),n.focus()}function Ee(t,l){const u=Re(t);if(e.multiple!==!0){e.fillInput===!0&&se(A.value(t),!0,!0),r("update:modelValue",u);return}if(h.value.length===0){r("add",{index:0,value:u}),r("update:modelValue",e.multiple===!0?[u]:u);return}if(l===!0&&Ae(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const a=e.modelValue.slice();r("add",{index:a.length,value:u}),a.push(u),r("update:modelValue",a)}function j(t,l){if(n.editable.value!==!0||t===void 0||X.value(t)===!0)return;const u=L.value(t);if(e.multiple!==!0){l!==!0&&(se(e.fillInput===!0?A.value(t):"",!0,!0),z()),C.value!==null&&C.value.focus(),(h.value.length===0||ce(L.value(h.value[0]),u)!==!0)&&r("update:modelValue",e.emitValue===!0?u:t);return}if((x!==!0||F.value===!0)&&n.focus(),Ke(),h.value.length===0){const d=e.emitValue===!0?u:t;r("add",{index:0,value:d}),r("update:modelValue",e.multiple===!0?[d]:d);return}const a=e.modelValue.slice(),m=Se.value.findIndex(d=>ce(d,u));if(m>-1)r("remove",{index:m,value:a.splice(m,1)[0]});else{if(e.maxValues!==void 0&&a.length>=e.maxValues)return;const d=e.emitValue===!0?u:t;r("add",{index:a.length,value:d}),a.push(d)}r("update:modelValue",a)}function J(t){if(I.platform.is.desktop!==!0)return;const l=t>-1&&t<_.value?t:-1;f.value!==l&&(f.value=l)}function Ce(t=1,l){if(s.value===!0){let u=f.value;do u=lt(u+t,-1,_.value-1);while(u!==-1&&u!==f.value&&X.value(e.options[u])===!0);f.value!==u&&(J(u),ie(u),l!==!0&&e.useInput===!0&&e.fillInput===!0&&ke(u>=0?A.value(e.options[u]):c))}}function yt(t,l){const u=a=>ce(L.value(a),t);return e.options.find(u)||l.find(u)||t}function Fe(t,l){const u=t!==void 0?t:l;return typeof u=="function"?u:a=>a!==null&&typeof a=="object"&&u in a?a[u]:a}function Ae(t){const l=L.value(t);return Se.value.find(u=>ce(u,l))!==void 0}function Ke(t){e.useInput===!0&&C.value!==null&&(t===void 0||C.value===t.target&&t.target.value===ye.value)&&C.value.select()}function $e(t){Nt(t,27)===!0&&s.value===!0&&(ee(t),z(),p()),r("keyup",t)}function Qe(t){const{value:l}=t.target;if(t.keyCode!==void 0){$e(t);return}if(t.target.value="",y!==null&&(clearTimeout(y),y=null),p(),typeof l=="string"&&l.length!==0){const u=l.toLocaleLowerCase(),a=d=>{const b=e.options.find(w=>d.value(w).toLocaleLowerCase()===u);return b===void 0?!1:(h.value.indexOf(b)===-1?j(b):z(),!0)},m=d=>{a(L)!==!0&&(a(A)===!0||d===!0||G(l,!0,()=>m(!0)))};m()}else n.clearValue(t)}function je(t){r("keypress",t)}function ze(t){if(r("keydown",t),Ut(t)===!0)return;const l=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(f.value>-1||l===!0);if(t.keyCode===27){_e(t);return}if(t.keyCode===9&&u===!1){Y();return}if(t.target===void 0||t.target.id!==n.targetUid.value||n.editable.value!==!0)return;if(t.keyCode===40&&n.innerLoading.value!==!0&&s.value===!1){K(t),Z();return}if(t.keyCode===8&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Oe(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(K(t),f.value=-1,Ce(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ae.value!==void 0&&(K(t),f.value=Math.max(-1,Math.min(_.value,f.value+(t.keyCode===33?-1:1)*ae.value.view)),Ce(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(K(t),Ce(t.keyCode===38?-1:1,e.multiple));const a=_.value;if((D===void 0||de<Date.now())&&(D=""),a>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||D.length!==0)){s.value!==!0&&Z(t);const m=t.key.toLocaleLowerCase(),d=D.length===1&&D[0]===m;de=Date.now()+1500,d===!1&&(K(t),D+=m);const b=new RegExp("^"+D.split("").map(Be=>wu.indexOf(Be)>-1?"\\"+Be:Be).join(".*"),"i");let w=f.value;if(d===!0||w<0||b.test(A.value(e.options[w]))!==!0)do w=lt(w+1,-1,a-1);while(w!==f.value&&(X.value(e.options[w])===!0||b.test(A.value(e.options[w]))!==!0));f.value!==w&&N(()=>{J(w),ie(w),w>=0&&e.useInput===!0&&e.fillInput===!0&&ke(A.value(e.options[w]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||D!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&K(t),f.value>-1&&f.value<a){j(e.options[f.value]);return}if(l===!0){const m=(d,b)=>{if(b){if(nt(b)!==!0)return}else b=e.newValueMode;if(se("",e.multiple!==!0,!0),d==null)return;(b==="toggle"?j:Ee)(d,b==="add-unique"),e.multiple!==!0&&(C.value!==null&&C.value.focus(),z())};if(e.onNewValue!==void 0?r("newValue",g.value,m):m(g.value),e.multiple!==!0)return}s.value===!0?Y():n.innerLoading.value!==!0&&Z()}}function Ne(){return x===!0?fe.value:E.value!==null&&E.value.contentEl!==null?E.value.contentEl:void 0}function bt(){return Ne()}function St(){return e.hideSelected===!0?[]:S["selected-item"]!==void 0?Me.value.map(t=>S["selected-item"](t)).slice():S.selected!==void 0?[].concat(S.selected()):e.useChips===!0?Me.value.map((t,l)=>v(xu,{key:"option-"+l,removable:n.editable.value===!0&&X.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:be.value,onRemove(){t.removeAtIndex(l)}},()=>v("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:A.value(t.opt)}))):[v("span",{[qe.value===!0?"innerHTML":"textContent"]:i.value})]}function Ue(){if(T.value===!0)return S["no-option"]!==void 0?S["no-option"]({inputValue:g.value}):void 0;const t=S.option!==void 0?S.option:u=>v(Gt,{key:u.index,...u.itemProps},()=>v(Xt,()=>v(Jt,()=>v("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let l=Ie("div",dt.value.map(t));return S["before-options"]!==void 0&&(l=S["before-options"]().concat(l)),Wt(S["after-options"],l)}function Ct(t,l){const u=l===!0?{...Le.value,...n.splitAttrs.attributes.value}:void 0,a={ref:l===!0?C:void 0,key:"i_t",class:he.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...u,id:l===!0?n.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...gt.value};return t!==!0&&x===!0&&(Array.isArray(a.class)===!0?a.class=[...a.class,"no-pointer-events"]:a.class+=" no-pointer-events"),v("input",a)}function We(t){y!==null&&(clearTimeout(y),y=null),!(t&&t.target&&t.target.qComposing===!0)&&(ke(t.target.value||""),H=!0,c=g.value,n.focused.value!==!0&&(x!==!0||F.value===!0)&&n.focus(),e.onFilter!==void 0&&(y=setTimeout(()=>{y=null,G(g.value)},e.inputDebounce)))}function ke(t){g.value!==t&&(g.value=t,r("inputValue",t))}function se(t,l,u){H=u!==!0,e.useInput===!0&&(ke(t),(l===!0||u!==!0)&&(c=t),l!==!0&&G(t))}function G(t,l,u){if(e.onFilter===void 0||l!==!0&&n.focused.value!==!0)return;n.innerLoading.value===!0?r("filterAbort"):(n.innerLoading.value=!0,V.value=!0),t!==""&&e.multiple!==!0&&h.value.length!==0&&H!==!0&&t===A.value(h.value[0])&&(t="");const a=setTimeout(()=>{s.value===!0&&(s.value=!1)},10);q!==null&&clearTimeout(q),q=a,r("filter",t,(m,d)=>{(l===!0||n.focused.value===!0)&&q===a&&(clearTimeout(q),typeof m=="function"&&m(),V.value=!1,N(()=>{n.innerLoading.value=!1,n.editable.value===!0&&(l===!0?s.value===!0&&z():s.value===!0?Pe(!0):s.value=!0),typeof d=="function"&&N(()=>{d(O)}),typeof u=="function"&&N(()=>{u(O)})}))},()=>{n.focused.value===!0&&q===a&&(clearTimeout(q),n.innerLoading.value=!1,V.value=!1),s.value===!0&&(s.value=!1)})}function kt(){return v(Cu,{ref:E,class:W.value,style:e.popupContentStyle,modelValue:s.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&T.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:$.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:ft.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...He.value,onScrollPassive:me,onBeforeShow:Je,onBeforeHide:Vt,onShow:xt},Ue)}function Vt(t){Ge(t),Y()}function xt(){U()}function wt(t){ee(t),C.value!==null&&C.value.focus(),F.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function It(t){ee(t),N(()=>{F.value=!1})}function qt(){const t=[v(ku,{class:`col-auto ${n.fieldClass.value}`,...ge.value,for:n.targetUid.value,dark:$.value,square:!0,loading:V.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...n.splitAttrs.listeners.value,onFocus:wt,onBlur:It},{...S,rawControl:()=>n.getControl(!0),before:void 0,after:void 0})];return s.value===!0&&t.push(v("div",{ref:fe,class:W.value+" scroll",style:e.popupContentStyle,...He.value,onClick:_e,onScrollPassive:me},Ue())),v(hu,{ref:R,modelValue:k.value,position:e.useInput===!0?"top":void 0,transitionShow:M,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:Je,onBeforeHide:Ot,onHide:Ft,onShow:At},()=>v("div",{class:"q-select__dialog"+($.value===!0?" q-select__dialog--dark q-dark":"")+(F.value===!0?" q-select__dialog--focused":"")},t))}function Ot(t){Ge(t),R.value!==null&&R.value.__updateRefocusTarget(n.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),n.focused.value=!1}function Ft(t){z(),n.focused.value===!1&&r("blur",t),p()}function At(){const t=document.activeElement;(t===null||t.id!==n.targetUid.value)&&C.value!==null&&C.value!==t&&C.value.focus(),U()}function Y(){k.value!==!0&&(f.value=-1,s.value===!0&&(s.value=!1),n.focused.value===!1&&(q!==null&&(clearTimeout(q),q=null),n.innerLoading.value===!0&&(r("filterAbort"),n.innerLoading.value=!1,V.value=!1)))}function Z(t){n.editable.value===!0&&(x===!0?(n.onControlFocusin(t),k.value=!0,N(()=>{n.focus()})):n.focus(),e.onFilter!==void 0?G(g.value):(T.value!==!0||S["no-option"]!==void 0)&&(s.value=!0))}function z(){k.value=!1,Y()}function p(){e.useInput===!0&&se(e.multiple!==!0&&e.fillInput===!0&&h.value.length!==0&&A.value(h.value[0])||"",!0,!0)}function Pe(t){let l=-1;if(t===!0){if(h.value.length!==0){const u=L.value(h.value[0]);l=e.options.findIndex(a=>ce(L.value(a),u))}oe(l)}J(l)}function Pt(t,l){s.value===!0&&n.innerLoading.value===!1&&(oe(-1,!0),N(()=>{s.value===!0&&n.innerLoading.value===!1&&(t>l?oe():Pe(!0))}))}function Xe(){k.value===!1&&E.value!==null&&E.value.updatePosition()}function Je(t){t!==void 0&&ee(t),r("popupShow",t),n.hasPopupOpen=!0,n.onControlFocusin(t)}function Ge(t){t!==void 0&&ee(t),r("popupHide",t),n.hasPopupOpen=!1,n.onControlFocusout(t)}function Ye(){x=I.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?S["no-option"]!==void 0||e.onFilter!==void 0||T.value===!1:!0),M=I.platform.is.ios===!0&&x===!0&&e.useInput===!0?"fade":e.transitionShow}return jt(Ye),zt(Xe),Ye(),rt(()=>{y!==null&&clearTimeout(y)}),Object.assign(O,{showPopup:Z,hidePopup:z,removeAtIndex:Oe,add:Ee,toggleOption:j,getOptionIndex:()=>f.value,setOptionIndex:J,moveOptionSelection:Ce,filter:G,updateMenuPosition:Xe,updateInputValue:se,isOptionSelected:Ae,getEmittingOptionValue:Re,isOptionDisabled:(...t)=>X.value.apply(null,t)===!0,getOptionValue:(...t)=>L.value.apply(null,t),getOptionLabel:(...t)=>A.value.apply(null,t)}),Object.assign(n,{innerValue:h,fieldClass:o(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:ve,targetRef:C,hasValue:re,showPopup:Z,floatingLabel:o(()=>e.hideSelected!==!0&&re.value===!0||typeof g.value=="number"||g.value.length!==0||Ze(e.displayValue)),getControlChild:()=>{if(n.editable.value!==!1&&(k.value===!0||T.value!==!0||S["no-option"]!==void 0))return x===!0?qt():kt();n.hasPopupOpen===!0&&(n.hasPopupOpen=!1)},controlEvents:{onFocusin(t){n.onControlFocusin(t)},onFocusout(t){n.onControlFocusout(t,()=>{p(),Y()})},onClick(t){if(_e(t),x!==!0&&s.value===!0){Y(),C.value!==null&&C.value.focus();return}Z(t)}},getControl:t=>{const l=St(),u=t===!0||k.value!==!0||x!==!0;if(e.useInput===!0)l.push(Ct(t,u));else if(n.editable.value===!0){const m=u===!0?Le.value:void 0;l.push(v("input",{ref:u===!0?C:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?n.targetUid.value:void 0,value:i.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...m,onKeydown:ze,onKeyup:$e,onKeypress:je})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&l.push(v("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Qe}))}if(ue.value!==void 0&&e.disable!==!0&&Se.value.length!==0){const m=Se.value.map(d=>v("option",{value:d,selected:!0}));l.push(v("select",{class:"hidden",name:ue.value,multiple:e.multiple},m))}const a=e.useInput===!0||u!==!0?void 0:n.splitAttrs.attributes.value;return v("div",{class:"q-field__native row items-center",...a,...n.splitAttrs.listeners.value},l)},getInnerAppend:()=>e.loading!==!0&&V.value!==!0&&e.hideDropdownIcon!==!0?[v(Ve,{class:"q-select__dropdown-icon"+(s.value===!0?" rotate-180":""),name:vt.value})]:null}),ot(n)}});export{Cu as Q,Hu as a,xu as b};
