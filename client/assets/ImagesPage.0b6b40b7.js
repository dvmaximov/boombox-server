import{c as ee,r as k,d as v,h as u,an as Z,j as te,$ as Bt,w as H,o as Ye,ar as $t,e as ie,aq as xt,A as xe,K as ue,aj as Ze,_ as Te,C as G,N as re,F as $,E as A,M as T,L as z,I as Tt,g as Vt,Q as Ve,aL as Dt,aM as Ot,z as jt,a5 as It,aQ as Lt,k as Nt,a4 as Ue,aR as Be,aS as ze,aI as Et,n as et,aT as At,B as $e,R as Mt,ay as Qt,az as Ut,D as He,H as Ke,m as zt,aK as Ht,ak as Kt}from"./index.e9511dda.js";import{c as Wt,b as Re,a as tt}from"./QCheckbox.73681b91.js";import{d as Gt,a as Jt,e as Xt,g as Yt,h as Zt,k as el,i as We,f as tl,Q as De}from"./QInput.87e78118.js";import{u as ll,a as al,b as nl}from"./use-file.a6f18d64.js";import{h as ol}from"./format.c3526244.js";import{Q as rl}from"./QPage.6c1670c2.js";import{u as lt}from"./images.store.cec8fc4f.js";import{j as at}from"./message.store.17d3f4db.js";import{u as Oe}from"./image-categories.store.1bc22140.js";import{Q as nt,g as il}from"./QVirtualScroll.284aaff6.js";import{Q as ul,a as sl}from"./QCard.282c8eae.js";import{Q as cl}from"./QDialog.454cd123.js";import{Q as dl}from"./QSeparator.9fd85005.js";import{u as ot,a as rt}from"./use-dark.45cd38ee.js";import{c as it}from"./use-virtual-scroll.b2d4ea7f.js";import{C as vl}from"./ConfirmDialog.50ad11f3.js";import"./QItem.e29053af.js";import"./position-engine.9f26598c.js";import"./focus-manager.05708ea9.js";import"./settings.store.7144c3ad.js";import"./use-quasar.f733b52f.js";import"./QList.6ce9b5c0.js";import"./QCardActions.eb48c031.js";var fl=ee({name:"QFile",inheritAttrs:!1,props:{...Gt,...Jt,...ll,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Xt,...al],setup(e,{slots:l,emit:a,attrs:d}){const{proxy:c}=te(),r=Yt(),n=k(null),i=k(!1),s=Zt(e),{pickFiles:m,onDragover:o,onDragleave:b,processFiles:q,getDndNode:P}=nl({editable:r.editable,dnd:i,getFileInput:se,addFilesToQueue:le}),p=el(e),g=v(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),S=v(()=>We(g.value)),j=v(()=>g.value.map(w=>w.name).join(", ")),M=v(()=>ol(g.value.reduce((w,D)=>w+D.size,0))),I=v(()=>({totalSize:M.value,filesNumber:g.value.length,maxFiles:e.maxFiles})),R=v(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:s.value,...d,id:r.targetUid.value,disabled:r.editable.value!==!0})),x=v(()=>"q-file q-field--auto-height"+(i.value===!0?" q-file--dnd":"")),Q=v(()=>e.multiple===!0&&e.append===!0);function W(w){const D=g.value.slice();D.splice(w,1),N(D)}function C(w){const D=g.value.indexOf(w);D>-1&&W(D)}function N(w){a("update:modelValue",e.multiple===!0?w:w[0])}function V(w){w.keyCode===13&&Bt(w)}function K(w){(w.keyCode===13||w.keyCode===32)&&m(w)}function se(){return n.value}function le(w,D){const O=q(w,D,g.value,Q.value),ne=se();ne!=null&&(ne.value=""),O!==void 0&&((e.multiple===!0?e.modelValue&&O.every(E=>g.value.includes(E)):e.modelValue===O[0])||N(Q.value===!0?g.value.concat(O):O))}function J(){return[u("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function ce(){if(l.file!==void 0)return g.value.length===0?J():g.value.map((D,O)=>l.file({index:O,file:D,ref:this}));if(l.selected!==void 0)return g.value.length===0?J():l.selected({files:g.value,ref:this});if(e.useChips===!0)return g.value.length===0?J():g.value.map((D,O)=>u(Wt,{key:"file-"+O,removable:r.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{W(O)}},()=>u("span",{class:"ellipsis",textContent:D.name})));const w=e.displayValue!==void 0?e.displayValue:j.value;return w.length!==0?[u("div",{class:e.inputClass,style:e.inputStyle,textContent:w})]:J()}function ae(){const w={ref:n,...R.value,...p.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:le};return e.multiple===!0&&(w.multiple=!0),u("input",w)}return Object.assign(r,{fieldClass:x,emitValue:N,hasValue:S,inputRef:n,innerValue:g,floatingLabel:v(()=>S.value===!0||We(e.displayValue)),computedCounter:v(()=>{if(e.counterLabel!==void 0)return e.counterLabel(I.value);const w=e.maxFiles;return`${g.value.length}${w!==void 0?" / "+w:""} (${M.value})`}),getControlChild:()=>P("file"),getControl:()=>{const w={ref:r.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return r.editable.value===!0&&Object.assign(w,{onDragover:o,onDragleave:b,onKeydown:V,onKeyup:K}),u("div",w,[ae()].concat(ce()))}}),Object.assign(c,{removeAtIndex:W,removeFile:C,getNativeElement:()=>n.value}),Z(c,"nativeEl",()=>n.value),tl(r)}});const gl={ratio:[String,Number]};function ml(e,l){return v(()=>{const a=Number(e.ratio||(l!==void 0?l.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const bl=16/9;var yl=ee({name:"QImg",props:{...gl,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:bl},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:a}){const d=k(e.initialRatio),c=ml(e,d);let r=null,n=!1;const i=[k(null),k(S())],s=k(0),m=k(!1),o=k(!1),b=v(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=v(()=>({width:e.width,height:e.height})),P=v(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),p=v(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));H(()=>g(),j);function g(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function S(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function j(C){r!==null&&(clearTimeout(r),r=null),o.value=!1,C===null?(m.value=!1,i[s.value^1].value=S()):m.value=!0,i[s.value].value=C}function M({target:C}){n!==!0&&(r!==null&&(clearTimeout(r),r=null),d.value=C.naturalHeight===0?.5:C.naturalWidth/C.naturalHeight,I(C,1))}function I(C,N){n===!0||N===1e3||(C.complete===!0?R(C):r=setTimeout(()=>{r=null,I(C,N+1)},50))}function R(C){n!==!0&&(s.value=s.value^1,i[s.value].value=null,m.value=!1,o.value=!1,a("load",C.currentSrc||C.src))}function x(C){r!==null&&(clearTimeout(r),r=null),m.value=!1,o.value=!0,i[s.value].value=null,i[s.value^1].value=S(),a("error",C)}function Q(C){const N=i[C].value,V={key:"img_"+C,class:P.value,style:p.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...N};return s.value===C?(V.class+=" q-img__image--waiting",Object.assign(V,{onLoad:M,onError:x})):V.class+=" q-img__image--loaded",u("div",{class:"q-img__container absolute-full",key:"img"+C},u("img",V))}function W(){return m.value!==!0?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},ie(l[o.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[u(xt,{color:e.spinnerColor,size:e.spinnerSize})])}return j(g()),Ye(()=>{n=!0,r!==null&&(clearTimeout(r),r=null)}),()=>{const C=[];return c.value!==null&&C.push(u("div",{key:"filler",style:c.value})),o.value!==!0&&(i[0].value!==null&&C.push(Q(0)),i[1].value!==null&&C.push(Q(1))),C.push(u($t,{name:"q-transition--fade"},W)),u("div",{class:b.value,style:q.value,role:"img","aria-label":e.alt},C)}}});const hl=xe({name:"ImageCategoryAdd",props:{isShow:{type:Boolean,default:!1}},setup(e,l){const a=Oe(),d=at(),{categoriesList:c}=ue(a),r=Ze(()=>e.isShow),n=k("");return H(r,m=>{m&&(n.value="")}),{categoriesList:c,show:r,name:n,close:()=>{l.emit("close")},save:async()=>{if(n.value===""){d.error("\u0418\u043C\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C!");return}const m=await a.insert({record:{name:n.value}});console.log(m)}}}}),Sl={class:"q-pa-md q-gutter-sm"},wl={class:"flex justify-between items-center"},_l={class:"q-mt-sm q-pa-sm item",dense:"",clickable:""},Cl={class:"flex justify-between items-center"},ql={class:"flex justify-center items-center q-ma-md"};function pl(e,l,a,d,c,r){return G(),re("div",Sl,[$(cl,{modelValue:e.show,"onUpdate:modelValue":l[1]||(l[1]=n=>e.show=n),persistent:""},{default:A(()=>[$(ul,null,{default:A(()=>[$(sl,null,{default:A(()=>[T("div",wl,[$(De,{outlined:"",autofocus:"",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=n=>e.name=n),style:{padding:"0"}},null,8,["modelValue"]),$(z,{class:"q-ml-md",round:"",color:"primary",label:">",onClick:e.save},null,8,["onClick"])]),$(nt,{style:{height:"300px"},class:"q-px-md",items:e.categoriesList,separator:""},{default:A(({item:n})=>[T("div",_l,[T("div",Cl,[T("div",null,Tt(n.name),1)])])]),_:1},8,["items"])]),_:1}),T("div",ql,[$(z,{label:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"primary",onClick:e.close},null,8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])])}var Pl=Te(hl,[["render",pl],["__scopeId","data-v-18db3cbb"]]),kl=ee({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const a=te(),d=v(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return u("td",{class:d.value},ie(l.default));const c=a.vnode.key,r=(e.props.colsMap!==void 0?e.props.colsMap[c]:null)||e.props.col;if(r===void 0)return;const{row:n}=e.props;return u("td",{class:d.value+r.__tdClass(n),style:r.__tdStyle(n)},ie(l.default))}}}),Fl=ee({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const d=te(),{proxy:{$q:c}}=d,r=n=>{a("click",n)};return()=>{if(e.props===void 0)return u("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:r},ie(l.default));let n,i;const s=d.vnode.key;if(s){if(n=e.props.colsMap[s],n===void 0)return}else n=e.props.col;if(n.sortable===!0){const o=n.align==="right"?"unshift":"push";i=Vt(l.default,[]),i[o](u(Ve,{class:n.__iconClass,name:c.iconSet.table.arrowUp}))}else i=ie(l.default);const m={class:n.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:n.headerStyle,onClick:o=>{n.sortable===!0&&e.props.sort(n),r(o)}};return u("th",m,i)}}});const Rl={xs:2,sm:4,md:6,lg:10,xl:14};function Ge(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Bl=ee({name:"QLinearProgress",props:{...ot,...Dt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:a}=te(),d=rt(e,a.$q),c=Ot(e,Rl),r=v(()=>e.indeterminate===!0||e.query===!0),n=v(()=>e.reverse!==e.query),i=v(()=>({...c.value!==null?c.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),s=v(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=v(()=>Ge(e.buffer!==void 0?e.buffer:1,n.value,a.$q)),o=v(()=>`with${e.instantFeedback===!0?"out":""}-transition`),b=v(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${o.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),q=v(()=>Ge(r.value===!0?1:e.value,n.value,a.$q)),P=v(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${o.value} q-linear-progress__model--${r.value===!0?"in":""}determinate`),p=v(()=>({width:`${e.value*100}%`})),g=v(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${o.value}`);return()=>{const S=[u("div",{class:b.value,style:m.value}),u("div",{class:P.value,style:q.value})];return e.stripe===!0&&r.value===!1&&S.push(u("div",{class:g.value,style:p.value})),u("div",{class:s.value,style:i.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},jt(l.default,S))}}});let oe=0;const $l={fullscreen:Boolean,noRouteFullscreenExit:Boolean},xl=["update:fullscreen","fullscreen"];function Tl(){const e=te(),{props:l,emit:a,proxy:d}=e;let c,r,n;const i=k(!1);It(e)===!0&&H(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&o()}),H(()=>l.fullscreen,b=>{i.value!==b&&s()}),H(i,b=>{a("update:fullscreen",b),a("fullscreen",b)});function s(){i.value===!0?o():m()}function m(){i.value!==!0&&(i.value=!0,n=d.$el.parentNode,n.replaceChild(r,d.$el),document.body.appendChild(d.$el),oe++,oe===1&&document.body.classList.add("q-body--fullscreen-mixin"),c={handler:o},Ue.add(c))}function o(){i.value===!0&&(c!==void 0&&(Ue.remove(c),c=void 0),n.replaceChild(d.$el,r),i.value=!1,oe=Math.max(0,oe-1),oe===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Lt(()=>{r=document.createElement("span")}),Nt(()=>{l.fullscreen===!0&&m()}),Ye(o),Object.assign(d,{toggleFullscreen:s,setFullscreen:m,exitFullscreen:o}),{inFullscreen:i,toggleFullscreen:s}}function Vl(e,l){return new Date(e)-new Date(l)}const Dl={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ol(e,l,a,d){const c=v(()=>{const{sortBy:i}=l.value;return i&&a.value.find(s=>s.name===i)||null}),r=v(()=>e.sortMethod!==void 0?e.sortMethod:(i,s,m)=>{const o=a.value.find(P=>P.name===s);if(o===void 0||o.field===void 0)return i;const b=m===!0?-1:1,q=typeof o.field=="function"?P=>o.field(P):P=>P[o.field];return i.sort((P,p)=>{let g=q(P),S=q(p);return g==null?-1*b:S==null?1*b:o.sort!==void 0?o.sort(g,S,P,p)*b:Be(g)===!0&&Be(S)===!0?(g-S)*b:ze(g)===!0&&ze(S)===!0?Vl(g,S)*b:typeof g=="boolean"&&typeof S=="boolean"?(g-S)*b:([g,S]=[g,S].map(j=>(j+"").toLocaleString().toLowerCase()),g<S?-1*b:g===S?0:b)})});function n(i){let s=e.columnSortOrder;if(Et(i)===!0)i.sortOrder&&(s=i.sortOrder),i=i.name;else{const b=a.value.find(q=>q.name===i);b!==void 0&&b.sortOrder&&(s=b.sortOrder)}let{sortBy:m,descending:o}=l.value;m!==i?(m=i,o=s==="da"):e.binaryStateSort===!0?o=!o:o===!0?s==="ad"?m=null:o=!1:s==="ad"?o=!0:m=null,d({sortBy:m,descending:o,page:1})}return{columnToSort:c,computedSortMethod:r,sort:n}}const jl={filter:[String,Object],filterMethod:Function};function Il(e,l){const a=v(()=>e.filterMethod!==void 0?e.filterMethod:(d,c,r,n)=>{const i=c?c.toLowerCase():"";return d.filter(s=>r.some(m=>{const o=n(m,s)+"";return(o==="undefined"||o==="null"?"":o.toLowerCase()).indexOf(i)!==-1}))});return H(()=>e.filter,()=>{et(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function Ll(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function Je(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Nl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function El(e,l){const{props:a,emit:d}=e,c=k(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length!==0?a.rowsPerPageOptions[0]:5},a.pagination)),r=v(()=>{const o=a["onUpdate:pagination"]!==void 0?{...c.value,...a.pagination}:c.value;return Je(o)}),n=v(()=>r.value.rowsNumber!==void 0);function i(o){s({pagination:o,filter:a.filter})}function s(o={}){et(()=>{d("request",{pagination:o.pagination||r.value,filter:o.filter||a.filter,getCellValue:l})})}function m(o,b){const q=Je({...r.value,...o});if(Ll(r.value,q)===!0){n.value===!0&&b===!0&&i(q);return}if(n.value===!0){i(q);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?d("update:pagination",q):c.value=q}return{innerPagination:c,computedPagination:r,isServerSide:n,requestServerInteraction:s,setPagination:m}}function Al(e,l,a,d,c,r){const{props:n,emit:i,proxy:{$q:s}}=e,m=v(()=>d.value===!0?a.value.rowsNumber||0:r.value),o=v(()=>{const{page:R,rowsPerPage:x}=a.value;return(R-1)*x}),b=v(()=>{const{page:R,rowsPerPage:x}=a.value;return R*x}),q=v(()=>a.value.page===1),P=v(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/a.value.rowsPerPage))),p=v(()=>b.value===0?!0:a.value.page>=P.value),g=v(()=>(n.rowsPerPageOptions.includes(l.value.rowsPerPage)?n.rowsPerPageOptions:[l.value.rowsPerPage].concat(n.rowsPerPageOptions)).map(x=>({label:x===0?s.lang.table.allRows:""+x,value:x})));H(P,(R,x)=>{if(R===x)return;const Q=a.value.page;R&&!Q?c({page:1}):R<Q&&c({page:R})});function S(){c({page:1})}function j(){const{page:R}=a.value;R>1&&c({page:R-1})}function M(){const{page:R,rowsPerPage:x}=a.value;b.value>0&&R*x<m.value&&c({page:R+1})}function I(){c({page:P.value})}return n["onUpdate:pagination"]!==void 0&&i("update:pagination",{...a.value}),{firstRowIndex:o,lastRowIndex:b,isFirstPage:q,isLastPage:p,pagesNumber:P,computedRowsPerPageOptions:g,computedRowsNumber:m,firstPage:S,prevPage:j,nextPage:M,lastPage:I}}const Ml={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Ql=["update:selected","selection"];function Ul(e,l,a,d){const c=v(()=>{const p={};return e.selected.map(d.value).forEach(g=>{p[g]=!0}),p}),r=v(()=>e.selection!=="none"),n=v(()=>e.selection==="single"),i=v(()=>e.selection==="multiple"),s=v(()=>a.value.length!==0&&a.value.every(p=>c.value[d.value(p)]===!0)),m=v(()=>s.value!==!0&&a.value.some(p=>c.value[d.value(p)]===!0)),o=v(()=>e.selected.length);function b(p){return c.value[p]===!0}function q(){l("update:selected",[])}function P(p,g,S,j){l("selection",{rows:g,added:S,keys:p,evt:j});const M=n.value===!0?S===!0?g:[]:S===!0?e.selected.concat(g):e.selected.filter(I=>p.includes(d.value(I))===!1);l("update:selected",M)}return{hasSelectionMode:r,singleSelection:n,multipleSelection:i,allRowsSelected:s,someRowsSelected:m,rowsSelectedNumber:o,isRowSelected:b,clearSelection:q,updateSelection:P}}function Xe(e){return Array.isArray(e)?e.slice():[]}const zl={expanded:Array},Hl=["update:expanded"];function Kl(e,l){const a=k(Xe(e.expanded));H(()=>e.expanded,n=>{a.value=Xe(n)});function d(n){return a.value.includes(n)}function c(n){e.expanded!==void 0?l("update:expanded",n):a.value=n}function r(n,i){const s=a.value.slice(),m=s.indexOf(n);i===!0?m===-1&&(s.push(n),c(s)):m!==-1&&(s.splice(m,1),c(s))}return{isRowExpanded:d,setExpanded:c,updateExpanded:r}}const Wl={visibleColumns:Array};function Gl(e,l,a){const d=v(()=>{if(e.columns!==void 0)return e.columns;const i=e.rows[0];return i!==void 0?Object.keys(i).map(s=>({name:s,label:s.toUpperCase(),field:s,align:Be(i[s])?"right":"left",sortable:!0})):[]}),c=v(()=>{const{sortBy:i,descending:s}=l.value;return(e.visibleColumns!==void 0?d.value.filter(o=>o.required===!0||e.visibleColumns.includes(o.name)===!0):d.value).map(o=>{const b=o.align||"right",q=`text-${b}`;return{...o,align:b,__iconClass:`q-table__sort-icon q-table__sort-icon--${b}`,__thClass:q+(o.headerClasses!==void 0?" "+o.headerClasses:"")+(o.sortable===!0?" sortable":"")+(o.name===i?` sorted ${s===!0?"sort-desc":""}`:""),__tdStyle:o.style!==void 0?typeof o.style!="function"?()=>o.style:o.style:()=>null,__tdClass:o.classes!==void 0?typeof o.classes!="function"?()=>q+" "+o.classes:P=>q+" "+o.classes(P):()=>q}})}),r=v(()=>{const i={};return c.value.forEach(s=>{i[s.name]=s}),i}),n=v(()=>e.tableColspan!==void 0?e.tableColspan:c.value.length+(a.value===!0?1:0));return{colList:d,computedCols:c,computedColsMap:r,computedColspan:n}}const he="q-table__bottom row items-center",ut={};it.forEach(e=>{ut[e]={}});var Jl=ee({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ut,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...ot,...$l,...Wl,...jl,...Nl,...zl,...Ml,...Dl},emits:["request","virtualScroll",...xl,...Hl,...Ql],setup(e,{slots:l,emit:a}){const d=te(),{proxy:{$q:c}}=d,r=rt(e,c),{inFullscreen:n,toggleFullscreen:i}=Tl(),s=v(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=k(null),o=k(null),b=v(()=>e.grid!==!0&&e.virtualScroll===!0),q=v(()=>" q-table__card"+(r.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=v(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(r.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(n.value===!0?" fullscreen scroll":"")),p=v(()=>P.value+(e.loading===!0?" q-table--loading":""));H(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{b.value===!0&&o.value!==null&&o.value.reset()});const{innerPagination:g,computedPagination:S,isServerSide:j,requestServerInteraction:M,setPagination:I}=El(d,X),{computedFilterMethod:R}=Il(e,I),{isRowExpanded:x,setExpanded:Q,updateExpanded:W}=Kl(e,a),C=v(()=>{let t=e.rows;if(j.value===!0||t.length===0)return t;const{sortBy:f,descending:y}=S.value;return e.filter&&(t=R.value(t,e.filter,E.value,X)),st.value!==null&&(t=ct.value(e.rows===t?t.slice():t,f,y)),t}),N=v(()=>C.value.length),V=v(()=>{let t=C.value;if(j.value===!0)return t;const{rowsPerPage:f}=S.value;return f!==0&&(de.value===0&&e.rows!==t?t.length>ve.value&&(t=t.slice(0,ve.value)):t=t.slice(de.value,ve.value)),t}),{hasSelectionMode:K,singleSelection:se,multipleSelection:le,allRowsSelected:J,someRowsSelected:ce,rowsSelectedNumber:ae,isRowSelected:w,clearSelection:D,updateSelection:O}=Ul(e,a,V,s),{colList:ne,computedCols:E,computedColsMap:je,computedColspan:Ie}=Gl(e,S,K),{columnToSort:st,computedSortMethod:ct,sort:Se}=Ol(e,S,ne,I),{firstRowIndex:de,lastRowIndex:ve,isFirstPage:we,isLastPage:_e,pagesNumber:fe,computedRowsPerPageOptions:dt,computedRowsNumber:ge,firstPage:Ce,prevPage:qe,nextPage:pe,lastPage:Pe}=Al(d,g,S,j,I,N),vt=v(()=>V.value.length===0),ft=v(()=>{const t={};return it.forEach(f=>{t[f]=e[f]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function gt(){b.value===!0&&o.value.reset()}function mt(){if(e.grid===!0)return Ft();const t=e.hideHeader!==!0?Me:null;if(b.value===!0){const y=l["top-row"],h=l["bottom-row"],_={default:B=>Ne(B.item,l.body,B.index)};if(y!==void 0){const B=u("tbody",y({cols:E.value}));_.before=t===null?()=>B:()=>[t()].concat(B)}else t!==null&&(_.before=t);return h!==void 0&&(_.after=()=>u("tbody",h({cols:E.value}))),u(nt,{ref:o,class:e.tableClass,style:e.tableStyle,...ft.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:Ie.value,onVirtualScroll:yt},_)}const f=[ht()];return t!==null&&f.unshift(t()),il({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},f)}function bt(t,f){if(o.value!==null){o.value.scrollTo(t,f);return}t=parseInt(t,10);const y=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(y!==null){const h=m.value.querySelector(".q-table__middle.scroll"),_=y.offsetTop-e.virtualScrollStickySizeStart,B=_<h.scrollTop?"decrease":"increase";h.scrollTop=_,a("virtualScroll",{index:t,from:0,to:g.value.rowsPerPage-1,direction:B})}}function yt(t){a("virtualScroll",t)}function Le(){return[u(Bl,{class:"q-table__linear-progress",color:e.color,dark:r.value,indeterminate:!0,trackColor:"transparent"})]}function Ne(t,f,y){const h=s.value(t),_=w(h);if(f!==void 0)return f(Ee({key:h,row:t,pageIndex:y,__trClass:_?"selected":""}));const B=l["body-cell"],F=E.value.map(L=>{const be=l[`body-cell-${L.name}`],ye=be!==void 0?be:B;return ye!==void 0?ye(St({key:h,row:t,pageIndex:y,col:L})):u("td",{class:L.__tdClass(t),style:L.__tdStyle(t)},X(L,t))});if(K.value===!0){const L=l["body-selection"],be=L!==void 0?L(wt({key:h,row:t,pageIndex:y})):[u(Re,{modelValue:_,color:e.color,dark:r.value,dense:e.dense,"onUpdate:modelValue":(ye,Rt)=>{O([h],[t],ye,Rt)}})];F.unshift(u("td",{class:"q-table--col-auto-width"},be))}const U={key:h,class:{selected:_}};return e.onRowClick!==void 0&&(U.class["cursor-pointer"]=!0,U.onClick=L=>{a("RowClick",L,t,y)}),e.onRowDblclick!==void 0&&(U.class["cursor-pointer"]=!0,U.onDblclick=L=>{a("RowDblclick",L,t,y)}),e.onRowContextmenu!==void 0&&(U.class["cursor-pointer"]=!0,U.onContextmenu=L=>{a("RowContextmenu",L,t,y)}),u("tr",U,F)}function ht(){const t=l.body,f=l["top-row"],y=l["bottom-row"];let h=V.value.map((_,B)=>Ne(_,t,B));return f!==void 0&&(h=f({cols:E.value}).concat(h)),y!==void 0&&(h=h.concat(y({cols:E.value}))),u("tbody",h)}function Ee(t){return ke(t),t.cols=t.cols.map(f=>Z({...f},"value",()=>X(f,t.row))),t}function St(t){return ke(t),Z(t,"value",()=>X(t.col,t.row)),t}function wt(t){return ke(t),t}function ke(t){Object.assign(t,{cols:E.value,colsMap:je.value,sort:Se,rowIndex:de.value+t.pageIndex,color:e.color,dark:r.value,dense:e.dense}),K.value===!0&&Z(t,"selected",()=>w(t.key),(f,y)=>{O([t.key],[t.row],f,y)}),Z(t,"expand",()=>x(t.key),f=>{W(t.key,f)})}function X(t,f){const y=typeof t.field=="function"?t.field(f):f[t.field];return t.format!==void 0?t.format(y,f):y}const Y=v(()=>({pagination:S.value,pagesNumber:fe.value,isFirstPage:we.value,isLastPage:_e.value,firstPage:Ce,prevPage:qe,nextPage:pe,lastPage:Pe,inFullscreen:n.value,toggleFullscreen:i}));function _t(){const t=l.top,f=l["top-left"],y=l["top-right"],h=l["top-selection"],_=K.value===!0&&h!==void 0&&ae.value>0,B="q-table__top relative-position row items-center";if(t!==void 0)return u("div",{class:B},[t(Y.value)]);let F;if(_===!0?F=h(Y.value).slice():(F=[],f!==void 0?F.push(u("div",{class:"q-table__control"},[f(Y.value)])):e.title&&F.push(u("div",{class:"q-table__control"},[u("div",{class:["q-table__title",e.titleClass]},e.title)]))),y!==void 0&&(F.push(u("div",{class:"q-table__separator col"})),F.push(u("div",{class:"q-table__control"},[y(Y.value)]))),F.length!==0)return u("div",{class:B},F)}const Ae=v(()=>ce.value===!0?null:J.value);function Me(){const t=Ct();return e.loading===!0&&l.loading===void 0&&t.push(u("tr",{class:"q-table__progress"},[u("th",{class:"relative-position",colspan:Ie.value},Le())])),u("thead",t)}function Ct(){const t=l.header,f=l["header-cell"];if(t!==void 0)return t(Fe({header:!0})).slice();const y=E.value.map(h=>{const _=l[`header-cell-${h.name}`],B=_!==void 0?_:f,F=Fe({col:h});return B!==void 0?B(F):u(Fl,{key:h.name,props:F},()=>h.label)});if(se.value===!0&&e.grid!==!0)y.unshift(u("th",{class:"q-table--col-auto-width"}," "));else if(le.value===!0){const h=l["header-selection"],_=h!==void 0?h(Fe({})):[u(Re,{color:e.color,modelValue:Ae.value,dark:r.value,dense:e.dense,"onUpdate:modelValue":Qe})];y.unshift(u("th",{class:"q-table--col-auto-width"},_))}return[u("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},y)]}function Fe(t){return Object.assign(t,{cols:E.value,sort:Se,colsMap:je.value,color:e.color,dark:r.value,dense:e.dense}),le.value===!0&&Z(t,"selected",()=>Ae.value,Qe),t}function Qe(t){ce.value===!0&&(t=!1),O(V.value.map(s.value),V.value,t)}const me=v(()=>{const t=[e.iconFirstPage||c.iconSet.table.firstPage,e.iconPrevPage||c.iconSet.table.prevPage,e.iconNextPage||c.iconSet.table.nextPage,e.iconLastPage||c.iconSet.table.lastPage];return c.lang.rtl===!0?t.reverse():t});function qt(){if(e.hideBottom===!0)return;if(vt.value===!0){if(e.hideNoData===!0)return;const y=e.loading===!0?e.loadingLabel||c.lang.table.loading:e.filter?e.noResultsLabel||c.lang.table.noResults:e.noDataLabel||c.lang.table.noData,h=l["no-data"],_=h!==void 0?[h({message:y,icon:c.iconSet.table.warning,filter:e.filter})]:[u(Ve,{class:"q-table__bottom-nodata-icon",name:c.iconSet.table.warning}),y];return u("div",{class:he+" q-table__bottom--nodata"},_)}const t=l.bottom;if(t!==void 0)return u("div",{class:he},[t(Y.value)]);const f=e.hideSelectedBanner!==!0&&K.value===!0&&ae.value>0?[u("div",{class:"q-table__control"},[u("div",[(e.selectedRowsLabel||c.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return u("div",{class:he+" justify-end"},Pt(f));if(f.length!==0)return u("div",{class:he},f)}function pt(t){I({page:1,rowsPerPage:t.value})}function Pt(t){let f;const{rowsPerPage:y}=S.value,h=e.paginationLabel||c.lang.table.pagination,_=l.pagination,B=e.rowsPerPageOptions.length>1;if(t.push(u("div",{class:"q-table__separator col"})),B===!0&&t.push(u("div",{class:"q-table__control"},[u("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||c.lang.table.recordsPerPage]),u(tt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:y,options:dt.value,displayValue:y===0?c.lang.table.allRows:y,dark:r.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":pt})])),_!==void 0)f=_(Y.value);else if(f=[u("span",y!==0?{class:"q-table__bottom-item"}:{},[y?h(de.value+1,Math.min(ve.value,ge.value),ge.value):h(1,N.value,ge.value)])],y!==0&&fe.value>1){const F={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(F.size="sm"),fe.value>2&&f.push(u(z,{key:"pgFirst",...F,icon:me.value[0],disable:we.value,onClick:Ce})),f.push(u(z,{key:"pgPrev",...F,icon:me.value[1],disable:we.value,onClick:qe}),u(z,{key:"pgNext",...F,icon:me.value[2],disable:_e.value,onClick:pe})),fe.value>2&&f.push(u(z,{key:"pgLast",...F,icon:me.value[3],disable:_e.value,onClick:Pe}))}return t.push(u("div",{class:"q-table__control"},f)),t}function kt(){const t=e.gridHeader===!0?[u("table",{class:"q-table"},[Me()])]:e.loading===!0&&l.loading===void 0?Le():void 0;return u("div",{class:"q-table__middle"},t)}function Ft(){const t=l.item!==void 0?l.item:f=>{const y=f.cols.map(_=>u("div",{class:"q-table__grid-item-row"},[u("div",{class:"q-table__grid-item-title"},[_.label]),u("div",{class:"q-table__grid-item-value"},[_.value])]));if(K.value===!0){const _=l["body-selection"],B=_!==void 0?_(f):[u(Re,{modelValue:f.selected,color:e.color,dark:r.value,dense:e.dense,"onUpdate:modelValue":(F,U)=>{O([f.key],[f.row],F,U)}})];y.unshift(u("div",{class:"q-table__grid-item-row"},B),u(dl,{dark:r.value}))}const h={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(h.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(h.onClick=_=>{a("RowClick",_,f.row,f.pageIndex)}),e.onRowDblclick!==void 0&&(h.onDblclick=_=>{a("RowDblclick",_,f.row,f.pageIndex)})),u("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(f.selected===!0?" q-table__grid-item--selected":"")},[u("div",h,y)])};return u("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((f,y)=>t(Ee({key:s.value(f),row:f,pageIndex:y}))))}return Object.assign(d.proxy,{requestServerInteraction:M,setPagination:I,firstPage:Ce,prevPage:qe,nextPage:pe,lastPage:Pe,isRowSelected:w,clearSelection:D,isRowExpanded:x,setExpanded:Q,sort:Se,resetVirtualScroll:gt,scrollTo:bt,getCellValue:X}),At(d.proxy,{filteredSortedRows:()=>C.value,computedRows:()=>V.value,computedRowsNumber:()=>ge.value}),()=>{const t=[_t()],f={ref:m,class:p.value};return e.grid===!0?t.push(kt()):Object.assign(f,{class:[f.class,e.cardClass],style:e.cardStyle}),t.push(mt(),qt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),u("div",f,t)}}});const Xl=[{name:"name",required:!0,label:"\u0418\u043C\u044F",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"category",required:!0,label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",align:"left",field:e=>e.category,format:e=>`${e}`,sortable:!1},{name:"descriptor",required:!0,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",align:"right",field:e=>e.descriptor,format:e=>`${e}`,sortable:!1}],Yl=xe({name:"ImagesList",components:{ConfirmDialog:vl},props:{category:{type:String,default:()=>""},showControls:{type:Boolean,default:!0},showCategory:{type:Boolean,default:!0}},setup(e){const l=lt(),a=Oe(),{categoryNames:d}=ue(a),c=Ze(()=>e.category),r=k(!1),n=k(""),i=k(1),{images:s}=ue(l),m=k(0),o=p=>{m.value=p,r.value=!0},b=async()=>{await l.removeImage(m.value),q()},q=()=>{r.value=!1,m.value=0};return{isShowDialog:r,categoryNames:d,curCategory:c,images:s,searchByName:n,current:i,columns:Xl,confirmDelete:o,removeImage:b,closeDialog:q,update:async p=>{console.log(p)}}}}),Zl=e=>(Qt("data-v-db5ed320"),e=e(),Ut(),e),ea=Zl(()=>T("div",{class:"flex items-center q-mb-sm"},null,-1)),ta={class:"full-width"},la={class:"row justify-end"},aa={class:"flex justify-end item-control"},na={class:"q-gutter-xs"};function oa(e,l,a,d,c,r){const n=$e("ConfirmDialog");return G(),re(Mt,null,[ea,T("div",ta,[$(Jl,{flat:"",bordered:"","virtual-scroll":"",rows:e.images(e.curCategory,e.searchByName),columns:e.columns,"row-key":"name"},{"body-cell-descriptor":A(i=>[$(kl,{props:i},{default:A(()=>[T("div",la,[T("div",aa,[T("div",na,[$(z,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:s=>e.confirmDelete(i.row.id)},null,8,["onClick"])])])])]),_:2},1032,["props"])]),"top-left":A(()=>[$(De,{debounce:"300",outlined:"",modelValue:e.searchByName,"onUpdate:modelValue":l[0]||(l[0]=i=>e.searchByName=i),label:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438"},null,8,["modelValue"])]),_:1},8,["rows","columns"])]),$(n,{isShow:e.isShowDialog,message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C?",onOk:e.removeImage,onCancel:e.closeDialog},null,8,["isShow","onOk","onCancel"])],64)}var ra=Te(Yl,[["render",oa],["__scopeId","data-v-db5ed320"]]);const ia=xe({name:"ImagesPage",components:{ImageCategoryAdd:Pl,ImagesList:ra},setup(){const e=k(null),l=k(""),a=k(""),d=k(""),c=k(!1),r=lt(),n=Oe(),{defaultCategory:i,categoryNames:s}=ue(n);d.value=i.value.name;const{imagesList:m,placeholderUrl:o}=ue(r),b=at();return r.getImages(),{imagesList:m,image:e,imageUrl:l,name:a,isShowDialog:c,placeholderUrl:o,category:d,categoryNames:s,failed:async g=>{b.error(JSON.parse(g.xhr.responseText).message)},handleUpload:async()=>{if(e.value){const g=await ua(e.value);l.value=g}},save:async()=>{if(e.value){const g={record:{name:a.value,content:l.value,category:d.value},fileName:e.value.name};await r.insert(g),a.value=""}}}}}),ua=e=>new Promise(function(l,a){if(!(e instanceof Blob))return a("bufferToImage - expected buf to be of type: Blob");var d=new FileReader;d.onload=function(){return typeof d.result!="string"?a("bufferToImage - expected reader.result to be a string, in onload"):l(d.result)},d.onerror=a,d.readAsDataURL(e)}),sa={class:"row justify-between items-start full-width"},ca={class:"row justify-start q-pa-md full-width q-col-gutter-md"},da={class:"col-md-6 col-12"},va={class:"flex justify-between items-center"},fa={class:"col-md-6 col-12 flex justify-center"},ga=["src"],ma={class:"full-width flex justify-center q-px-lg"},ba={key:0},ya={key:1,class:"full-width flex justify-start wrap"};function ha(e,l,a,d,c,r){const n=$e("ImagesList"),i=$e("ImageCategoryAdd");return G(),He(rl,null,{default:A(()=>[T("div",sa,[T("section",ca,[T("div",da,[$(fl,{class:"full-width",outlined:"","bottom-slots":"",modelValue:e.image,"onUpdate:modelValue":[l[1]||(l[1]=s=>e.image=s),e.handleUpload],counter:"","max-files":"1",label:"\u0412\u044B\u0431\u043E\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",accept:".jpg, .jpeg, .png"},{hint:A(()=>[Ke(" \u0420\u0430\u0437\u043C\u0435\u0440 ")]),append:A(()=>[zt($(Ve,{name:"close",onClick:l[0]||(l[0]=Kt(s=>e.image=null,["stop","prevent"])),class:"cursor-pointer"},null,512),[[Ht,e.image!==null]])]),_:1},8,["modelValue","onUpdate:modelValue"]),$(De,{outlined:"",class:"q-my-md",label:"\u0418\u043C\u044F",modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=s=>e.name=s),style:{padding:"0"}},null,8,["modelValue"]),T("div",va,[$(tt,{style:{width:"85%",padding:"0"},"bottom-slots":"",modelValue:e.category,"onUpdate:modelValue":l[3]||(l[3]=s=>e.category=s),options:e.categoryNames,label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",outlined:""},null,8,["modelValue","options"]),$(z,{round:"",color:"primary",icon:"add",onClick:l[4]||(l[4]=s=>e.isShowDialog=!0)})]),$(z,{onClick:e.save,class:"q-mt-md",color:"primary",rounded:"",disable:e.image===null||e.name===""},{default:A(()=>[Ke("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0431\u0430\u0437\u0443")]),_:1},8,["onClick","disable"])]),T("div",fa,[e.image?(G(),He(yl,{key:1,src:e.imageUrl,"spinner-color":"white",style:{height:"300px","max-width":"300px"},fit:"cover"},null,8,["src"])):(G(),re("img",{key:0,width:"250",src:e.placeholderUrl},null,8,ga))])]),T("section",ma,[e.imagesList.length===0?(G(),re("h6",ba,"\u0421\u043F\u0438\u0441\u043E\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043F\u0443\u0441\u0442")):(G(),re("div",ya,[$(n,{category:e.category},null,8,["category"])]))])]),$(i,{isShow:e.isShowDialog,onClose:l[5]||(l[5]=s=>e.isShowDialog=!1)},null,8,["isShow"])]),_:1})}var Ma=Te(ia,[["render",ha]]);export{Ma as default};