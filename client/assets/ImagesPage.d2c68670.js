import{c as se,r as B,d as f,h as u,an as X,j as Y,$ as Rt,A as Ve,K as re,aj as Ze,w as U,_ as xe,C as z,N as ne,F as P,E as O,M as R,L as N,I as et,e as Se,g as Vt,Q as De,aL as xt,aM as Dt,z as It,a5 as Tt,aQ as Ot,k as jt,o as Lt,a4 as Ue,aR as Re,aS as He,aI as Et,n as tt,aT as At,B as he,R as Nt,ay as Mt,az as Qt,D as ze,H as Ke,m as Ut,aK as Ht,ak as zt}from"./index.94431755.js";import{c as Kt,b as Be,a as lt}from"./QCheckbox.b48f007a.js";import{d as Wt,a as Gt,e as Jt,g as Xt,h as Yt,k as Zt,i as We,f as el,Q as Ie}from"./QInput.65056ef6.js";import{u as tl,a as ll,b as al}from"./use-file.1b5c2dfd.js";import{h as ol}from"./format.f4e851c2.js";import{u as at,I as nl,Q as rl}from"./ImageContentView.1797fc5c.js";import{Q as sl}from"./QPage.c659436b.js";import{j as ot}from"./message.store.5e8bb883.js";import{u as Te}from"./image-categories.store.1282813d.js";import{Q as nt,g as ul}from"./QVirtualScroll.07a4985b.js";import{Q as il,a as cl}from"./QCard.e29f0159.js";import{Q as dl}from"./QDialog.ec17e6a8.js";import{Q as vl}from"./QSeparator.47bf8710.js";import{u as rt,a as st}from"./use-dark.64725563.js";import{c as ut}from"./use-virtual-scroll.76c05898.js";import{C as fl}from"./ConfirmDialog.d495f066.js";import"./QItem.59809407.js";import"./position-engine.9643883d.js";import"./focus-manager.05708ea9.js";import"./QCardActions.d18f1f1e.js";import"./settings.store.194ee742.js";import"./use-quasar.a4b8c930.js";import"./QList.30384639.js";var ml=se({name:"QFile",inheritAttrs:!1,props:{...Wt,...Gt,...tl,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Jt,...ll],setup(e,{slots:l,emit:a,attrs:d}){const{proxy:s}=Y(),i=Xt(),o=B(null),r=B(!1),v=Yt(e),{pickFiles:m,onDragover:n,onDragleave:y,processFiles:_,getDndNode:p}=al({editable:i.editable,dnd:r,getFileInput:ue,addFilesToQueue:te}),q=Zt(e),g=f(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),h=f(()=>We(g.value)),j=f(()=>g.value.map(w=>w.name).join(", ")),V=f(()=>ol(g.value.reduce((w,D)=>w+D.size,0))),L=f(()=>({totalSize:V.value,filesNumber:g.value.length,maxFiles:e.maxFiles})),$=f(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:v.value,...d,id:i.targetUid.value,disabled:i.editable.value!==!0})),x=f(()=>"q-file q-field--auto-height"+(r.value===!0?" q-file--dnd":"")),H=f(()=>e.multiple===!0&&e.append===!0);function Z(w){const D=g.value.slice();D.splice(w,1),K(D)}function ee(w){const D=g.value.indexOf(w);D>-1&&Z(D)}function K(w){a("update:modelValue",e.multiple===!0?w:w[0])}function A(w){w.keyCode===13&&Rt(w)}function Q(w){(w.keyCode===13||w.keyCode===32)&&m(w)}function ue(){return o.value}function te(w,D){const I=_(w,D,g.value,H.value),ae=ue();ae!=null&&(ae.value=""),I!==void 0&&((e.multiple===!0?e.modelValue&&I.every(E=>g.value.includes(E)):e.modelValue===I[0])||K(H.value===!0?g.value.concat(I):I))}function W(){return[u("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function ie(){if(l.file!==void 0)return g.value.length===0?W():g.value.map((D,I)=>l.file({index:I,file:D,ref:this}));if(l.selected!==void 0)return g.value.length===0?W():l.selected({files:g.value,ref:this});if(e.useChips===!0)return g.value.length===0?W():g.value.map((D,I)=>u(Kt,{key:"file-"+I,removable:i.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{Z(I)}},()=>u("span",{class:"ellipsis",textContent:D.name})));const w=e.displayValue!==void 0?e.displayValue:j.value;return w.length!==0?[u("div",{class:e.inputClass,style:e.inputStyle,textContent:w})]:W()}function le(){const w={ref:o,...$.value,...q.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:te};return e.multiple===!0&&(w.multiple=!0),u("input",w)}return Object.assign(i,{fieldClass:x,emitValue:K,hasValue:h,inputRef:o,innerValue:g,floatingLabel:f(()=>h.value===!0||We(e.displayValue)),computedCounter:f(()=>{if(e.counterLabel!==void 0)return e.counterLabel(L.value);const w=e.maxFiles;return`${g.value.length}${w!==void 0?" / "+w:""} (${V.value})`}),getControlChild:()=>p("file"),getControl:()=>{const w={ref:i.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return i.editable.value===!0&&Object.assign(w,{onDragover:n,onDragleave:y,onKeydown:A,onKeyup:Q}),u("div",w,[le()].concat(ie()))}}),Object.assign(s,{removeAtIndex:Z,removeFile:ee,getNativeElement:()=>o.value}),X(s,"nativeEl",()=>o.value),el(i)}});const gl=Ve({name:"ImageCategoryAdd",props:{isShow:{type:Boolean,default:!1}},setup(e,l){const a=Te(),d=ot(),{categoriesList:s}=re(a),i=Ze(()=>e.isShow),o=B("");return U(i,m=>{m&&(o.value="")}),{categoriesList:s,show:i,name:o,close:()=>{l.emit("close")},save:async()=>{if(o.value===""){d.error("\u0418\u043C\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C!");return}const m=await a.insert({record:{name:o.value}});console.log(m)}}}}),bl={class:"q-pa-md q-gutter-sm"},yl={class:"flex justify-between items-center"},hl={class:"q-mt-sm q-pa-sm item",dense:"",clickable:""},Sl={class:"flex justify-between items-center"},wl={class:"flex justify-center items-center q-ma-md"};function Cl(e,l,a,d,s,i){return z(),ne("div",bl,[P(dl,{modelValue:e.show,"onUpdate:modelValue":l[1]||(l[1]=o=>e.show=o),persistent:""},{default:O(()=>[P(il,null,{default:O(()=>[P(cl,null,{default:O(()=>[R("div",yl,[P(Ie,{outlined:"",autofocus:"",label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",modelValue:e.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.name=o),style:{padding:"0"}},null,8,["modelValue"]),P(N,{class:"q-ml-md",round:"",color:"primary",label:">",onClick:e.save},null,8,["onClick"])]),P(nt,{style:{height:"300px"},class:"q-px-md",items:e.categoriesList,separator:""},{default:O(({item:o})=>[R("div",hl,[R("div",Sl,[R("div",null,et(o.name),1)])])]),_:1},8,["items"])]),_:1}),R("div",wl,[P(N,{label:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"primary",onClick:e.close},null,8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])])}var _l=xe(gl,[["render",Cl],["__scopeId","data-v-18db3cbb"]]),Ge=se({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const a=Y(),d=f(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return u("td",{class:d.value},Se(l.default));const s=a.vnode.key,i=(e.props.colsMap!==void 0?e.props.colsMap[s]:null)||e.props.col;if(i===void 0)return;const{row:o}=e.props;return u("td",{class:d.value+i.__tdClass(o),style:i.__tdStyle(o)},Se(l.default))}}}),pl=se({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const d=Y(),{proxy:{$q:s}}=d,i=o=>{a("click",o)};return()=>{if(e.props===void 0)return u("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:i},Se(l.default));let o,r;const v=d.vnode.key;if(v){if(o=e.props.colsMap[v],o===void 0)return}else o=e.props.col;if(o.sortable===!0){const n=o.align==="right"?"unshift":"push";r=Vt(l.default,[]),r[n](u(De,{class:o.__iconClass,name:s.iconSet.table.arrowUp}))}else r=Se(l.default);const m={class:o.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:o.headerStyle,onClick:n=>{o.sortable===!0&&e.props.sort(o),i(n)}};return u("th",m,r)}}});const ql={xs:2,sm:4,md:6,lg:10,xl:14};function Je(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Pl=se({name:"QLinearProgress",props:{...rt,...xt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:a}=Y(),d=st(e,a.$q),s=Dt(e,ql),i=f(()=>e.indeterminate===!0||e.query===!0),o=f(()=>e.reverse!==e.query),r=f(()=>({...s.value!==null?s.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=f(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),m=f(()=>Je(e.buffer!==void 0?e.buffer:1,o.value,a.$q)),n=f(()=>`with${e.instantFeedback===!0?"out":""}-transition`),y=f(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${n.value} q-linear-progress__track--${d.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),_=f(()=>Je(i.value===!0?1:e.value,o.value,a.$q)),p=f(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${n.value} q-linear-progress__model--${i.value===!0?"in":""}determinate`),q=f(()=>({width:`${e.value*100}%`})),g=f(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${n.value}`);return()=>{const h=[u("div",{class:y.value,style:m.value}),u("div",{class:p.value,style:_.value})];return e.stripe===!0&&i.value===!1&&h.push(u("div",{class:g.value,style:q.value})),u("div",{class:v.value,style:r.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},It(l.default,h))}}});let oe=0;const kl={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Fl=["update:fullscreen","fullscreen"];function $l(){const e=Y(),{props:l,emit:a,proxy:d}=e;let s,i,o;const r=B(!1);Tt(e)===!0&&U(()=>d.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&n()}),U(()=>l.fullscreen,y=>{r.value!==y&&v()}),U(r,y=>{a("update:fullscreen",y),a("fullscreen",y)});function v(){r.value===!0?n():m()}function m(){r.value!==!0&&(r.value=!0,o=d.$el.parentNode,o.replaceChild(i,d.$el),document.body.appendChild(d.$el),oe++,oe===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:n},Ue.add(s))}function n(){r.value===!0&&(s!==void 0&&(Ue.remove(s),s=void 0),o.replaceChild(d.$el,i),r.value=!1,oe=Math.max(0,oe-1),oe===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Ot(()=>{i=document.createElement("span")}),jt(()=>{l.fullscreen===!0&&m()}),Lt(n),Object.assign(d,{toggleFullscreen:v,setFullscreen:m,exitFullscreen:n}),{inFullscreen:r,toggleFullscreen:v}}function Bl(e,l){return new Date(e)-new Date(l)}const Rl={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Vl(e,l,a,d){const s=f(()=>{const{sortBy:r}=l.value;return r&&a.value.find(v=>v.name===r)||null}),i=f(()=>e.sortMethod!==void 0?e.sortMethod:(r,v,m)=>{const n=a.value.find(p=>p.name===v);if(n===void 0||n.field===void 0)return r;const y=m===!0?-1:1,_=typeof n.field=="function"?p=>n.field(p):p=>p[n.field];return r.sort((p,q)=>{let g=_(p),h=_(q);return g==null?-1*y:h==null?1*y:n.sort!==void 0?n.sort(g,h,p,q)*y:Re(g)===!0&&Re(h)===!0?(g-h)*y:He(g)===!0&&He(h)===!0?Bl(g,h)*y:typeof g=="boolean"&&typeof h=="boolean"?(g-h)*y:([g,h]=[g,h].map(j=>(j+"").toLocaleString().toLowerCase()),g<h?-1*y:g===h?0:y)})});function o(r){let v=e.columnSortOrder;if(Et(r)===!0)r.sortOrder&&(v=r.sortOrder),r=r.name;else{const y=a.value.find(_=>_.name===r);y!==void 0&&y.sortOrder&&(v=y.sortOrder)}let{sortBy:m,descending:n}=l.value;m!==r?(m=r,n=v==="da"):e.binaryStateSort===!0?n=!n:n===!0?v==="ad"?m=null:n=!1:v==="ad"?n=!0:m=null,d({sortBy:m,descending:n,page:1})}return{columnToSort:s,computedSortMethod:i,sort:o}}const xl={filter:[String,Object],filterMethod:Function};function Dl(e,l){const a=f(()=>e.filterMethod!==void 0?e.filterMethod:(d,s,i,o)=>{const r=s?s.toLowerCase():"";return d.filter(v=>i.some(m=>{const n=o(m,v)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(r)!==-1}))});return U(()=>e.filter,()=>{tt(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function Il(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function Xe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Tl={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ol(e,l){const{props:a,emit:d}=e,s=B(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length!==0?a.rowsPerPageOptions[0]:5},a.pagination)),i=f(()=>{const n=a["onUpdate:pagination"]!==void 0?{...s.value,...a.pagination}:s.value;return Xe(n)}),o=f(()=>i.value.rowsNumber!==void 0);function r(n){v({pagination:n,filter:a.filter})}function v(n={}){tt(()=>{d("request",{pagination:n.pagination||i.value,filter:n.filter||a.filter,getCellValue:l})})}function m(n,y){const _=Xe({...i.value,...n});if(Il(i.value,_)===!0){o.value===!0&&y===!0&&r(_);return}if(o.value===!0){r(_);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?d("update:pagination",_):s.value=_}return{innerPagination:s,computedPagination:i,isServerSide:o,requestServerInteraction:v,setPagination:m}}function jl(e,l,a,d,s,i){const{props:o,emit:r,proxy:{$q:v}}=e,m=f(()=>d.value===!0?a.value.rowsNumber||0:i.value),n=f(()=>{const{page:$,rowsPerPage:x}=a.value;return($-1)*x}),y=f(()=>{const{page:$,rowsPerPage:x}=a.value;return $*x}),_=f(()=>a.value.page===1),p=f(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(m.value/a.value.rowsPerPage))),q=f(()=>y.value===0?!0:a.value.page>=p.value),g=f(()=>(o.rowsPerPageOptions.includes(l.value.rowsPerPage)?o.rowsPerPageOptions:[l.value.rowsPerPage].concat(o.rowsPerPageOptions)).map(x=>({label:x===0?v.lang.table.allRows:""+x,value:x})));U(p,($,x)=>{if($===x)return;const H=a.value.page;$&&!H?s({page:1}):$<H&&s({page:$})});function h(){s({page:1})}function j(){const{page:$}=a.value;$>1&&s({page:$-1})}function V(){const{page:$,rowsPerPage:x}=a.value;y.value>0&&$*x<m.value&&s({page:$+1})}function L(){s({page:p.value})}return o["onUpdate:pagination"]!==void 0&&r("update:pagination",{...a.value}),{firstRowIndex:n,lastRowIndex:y,isFirstPage:_,isLastPage:q,pagesNumber:p,computedRowsPerPageOptions:g,computedRowsNumber:m,firstPage:h,prevPage:j,nextPage:V,lastPage:L}}const Ll={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},El=["update:selected","selection"];function Al(e,l,a,d){const s=f(()=>{const q={};return e.selected.map(d.value).forEach(g=>{q[g]=!0}),q}),i=f(()=>e.selection!=="none"),o=f(()=>e.selection==="single"),r=f(()=>e.selection==="multiple"),v=f(()=>a.value.length!==0&&a.value.every(q=>s.value[d.value(q)]===!0)),m=f(()=>v.value!==!0&&a.value.some(q=>s.value[d.value(q)]===!0)),n=f(()=>e.selected.length);function y(q){return s.value[q]===!0}function _(){l("update:selected",[])}function p(q,g,h,j){l("selection",{rows:g,added:h,keys:q,evt:j});const V=o.value===!0?h===!0?g:[]:h===!0?e.selected.concat(g):e.selected.filter(L=>q.includes(d.value(L))===!1);l("update:selected",V)}return{hasSelectionMode:i,singleSelection:o,multipleSelection:r,allRowsSelected:v,someRowsSelected:m,rowsSelectedNumber:n,isRowSelected:y,clearSelection:_,updateSelection:p}}function Ye(e){return Array.isArray(e)?e.slice():[]}const Nl={expanded:Array},Ml=["update:expanded"];function Ql(e,l){const a=B(Ye(e.expanded));U(()=>e.expanded,o=>{a.value=Ye(o)});function d(o){return a.value.includes(o)}function s(o){e.expanded!==void 0?l("update:expanded",o):a.value=o}function i(o,r){const v=a.value.slice(),m=v.indexOf(o);r===!0?m===-1&&(v.push(o),s(v)):m!==-1&&(v.splice(m,1),s(v))}return{isRowExpanded:d,setExpanded:s,updateExpanded:i}}const Ul={visibleColumns:Array};function Hl(e,l,a){const d=f(()=>{if(e.columns!==void 0)return e.columns;const r=e.rows[0];return r!==void 0?Object.keys(r).map(v=>({name:v,label:v.toUpperCase(),field:v,align:Re(r[v])?"right":"left",sortable:!0})):[]}),s=f(()=>{const{sortBy:r,descending:v}=l.value;return(e.visibleColumns!==void 0?d.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):d.value).map(n=>{const y=n.align||"right",_=`text-${y}`;return{...n,align:y,__iconClass:`q-table__sort-icon q-table__sort-icon--${y}`,__thClass:_+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===r?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>_+" "+n.classes:p=>_+" "+n.classes(p):()=>_}})}),i=f(()=>{const r={};return s.value.forEach(v=>{r[v.name]=v}),r}),o=f(()=>e.tableColspan!==void 0?e.tableColspan:s.value.length+(a.value===!0?1:0));return{colList:d,computedCols:s,computedColsMap:i,computedColspan:o}}const ye="q-table__bottom row items-center",it={};ut.forEach(e=>{it[e]={}});var zl=se({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...it,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...rt,...kl,...Ul,...xl,...Tl,...Nl,...Ll,...Rl},emits:["request","virtualScroll",...Fl,...Ml,...El],setup(e,{slots:l,emit:a}){const d=Y(),{proxy:{$q:s}}=d,i=st(e,s),{inFullscreen:o,toggleFullscreen:r}=$l(),v=f(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),m=B(null),n=B(null),y=f(()=>e.grid!==!0&&e.virtualScroll===!0),_=f(()=>" q-table__card"+(i.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),p=f(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(i.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(o.value===!0?" fullscreen scroll":"")),q=f(()=>p.value+(e.loading===!0?" q-table--loading":""));U(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+p.value,()=>{y.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:g,computedPagination:h,isServerSide:j,requestServerInteraction:V,setPagination:L}=Ol(d,G),{computedFilterMethod:$}=Dl(e,L),{isRowExpanded:x,setExpanded:H,updateExpanded:Z}=Ql(e,a),ee=f(()=>{let t=e.rows;if(j.value===!0||t.length===0)return t;const{sortBy:c,descending:b}=h.value;return e.filter&&(t=$.value(t,e.filter,E.value,G)),ct.value!==null&&(t=dt.value(e.rows===t?t.slice():t,c,b)),t}),K=f(()=>ee.value.length),A=f(()=>{let t=ee.value;if(j.value===!0)return t;const{rowsPerPage:c}=h.value;return c!==0&&(ce.value===0&&e.rows!==t?t.length>de.value&&(t=t.slice(0,de.value)):t=t.slice(ce.value,de.value)),t}),{hasSelectionMode:Q,singleSelection:ue,multipleSelection:te,allRowsSelected:W,someRowsSelected:ie,rowsSelectedNumber:le,isRowSelected:w,clearSelection:D,updateSelection:I}=Al(e,a,A,v),{colList:ae,computedCols:E,computedColsMap:Oe,computedColspan:je}=Hl(e,h,Q),{columnToSort:ct,computedSortMethod:dt,sort:we}=Vl(e,h,ae,L),{firstRowIndex:ce,lastRowIndex:de,isFirstPage:Ce,isLastPage:_e,pagesNumber:ve,computedRowsPerPageOptions:vt,computedRowsNumber:fe,firstPage:pe,prevPage:qe,nextPage:Pe,lastPage:ke}=jl(d,g,h,j,L,K),ft=f(()=>A.value.length===0),mt=f(()=>{const t={};return ut.forEach(c=>{t[c]=e[c]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function gt(){y.value===!0&&n.value.reset()}function bt(){if(e.grid===!0)return $t();const t=e.hideHeader!==!0?Me:null;if(y.value===!0){const b=l["top-row"],S=l["bottom-row"],C={default:F=>Ee(F.item,l.body,F.index)};if(b!==void 0){const F=u("tbody",b({cols:E.value}));C.before=t===null?()=>F:()=>[t()].concat(F)}else t!==null&&(C.before=t);return S!==void 0&&(C.after=()=>u("tbody",S({cols:E.value}))),u(nt,{ref:n,class:e.tableClass,style:e.tableStyle,...mt.value,scrollTarget:e.virtualScrollTarget,items:A.value,type:"__qtable",tableColspan:je.value,onVirtualScroll:ht},C)}const c=[St()];return t!==null&&c.unshift(t()),ul({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},c)}function yt(t,c){if(n.value!==null){n.value.scrollTo(t,c);return}t=parseInt(t,10);const b=m.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(b!==null){const S=m.value.querySelector(".q-table__middle.scroll"),C=b.offsetTop-e.virtualScrollStickySizeStart,F=C<S.scrollTop?"decrease":"increase";S.scrollTop=C,a("virtualScroll",{index:t,from:0,to:g.value.rowsPerPage-1,direction:F})}}function ht(t){a("virtualScroll",t)}function Le(){return[u(Pl,{class:"q-table__linear-progress",color:e.color,dark:i.value,indeterminate:!0,trackColor:"transparent"})]}function Ee(t,c,b){const S=v.value(t),C=w(S);if(c!==void 0)return c(Ae({key:S,row:t,pageIndex:b,__trClass:C?"selected":""}));const F=l["body-cell"],k=E.value.map(T=>{const ge=l[`body-cell-${T.name}`],be=ge!==void 0?ge:F;return be!==void 0?be(wt({key:S,row:t,pageIndex:b,col:T})):u("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},G(T,t))});if(Q.value===!0){const T=l["body-selection"],ge=T!==void 0?T(Ct({key:S,row:t,pageIndex:b})):[u(Be,{modelValue:C,color:e.color,dark:i.value,dense:e.dense,"onUpdate:modelValue":(be,Bt)=>{I([S],[t],be,Bt)}})];k.unshift(u("td",{class:"q-table--col-auto-width"},ge))}const M={key:S,class:{selected:C}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=T=>{a("RowClick",T,t,b)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=T=>{a("RowDblclick",T,t,b)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=T=>{a("RowContextmenu",T,t,b)}),u("tr",M,k)}function St(){const t=l.body,c=l["top-row"],b=l["bottom-row"];let S=A.value.map((C,F)=>Ee(C,t,F));return c!==void 0&&(S=c({cols:E.value}).concat(S)),b!==void 0&&(S=S.concat(b({cols:E.value}))),u("tbody",S)}function Ae(t){return Fe(t),t.cols=t.cols.map(c=>X({...c},"value",()=>G(c,t.row))),t}function wt(t){return Fe(t),X(t,"value",()=>G(t.col,t.row)),t}function Ct(t){return Fe(t),t}function Fe(t){Object.assign(t,{cols:E.value,colsMap:Oe.value,sort:we,rowIndex:ce.value+t.pageIndex,color:e.color,dark:i.value,dense:e.dense}),Q.value===!0&&X(t,"selected",()=>w(t.key),(c,b)=>{I([t.key],[t.row],c,b)}),X(t,"expand",()=>x(t.key),c=>{Z(t.key,c)})}function G(t,c){const b=typeof t.field=="function"?t.field(c):c[t.field];return t.format!==void 0?t.format(b,c):b}const J=f(()=>({pagination:h.value,pagesNumber:ve.value,isFirstPage:Ce.value,isLastPage:_e.value,firstPage:pe,prevPage:qe,nextPage:Pe,lastPage:ke,inFullscreen:o.value,toggleFullscreen:r}));function _t(){const t=l.top,c=l["top-left"],b=l["top-right"],S=l["top-selection"],C=Q.value===!0&&S!==void 0&&le.value>0,F="q-table__top relative-position row items-center";if(t!==void 0)return u("div",{class:F},[t(J.value)]);let k;if(C===!0?k=S(J.value).slice():(k=[],c!==void 0?k.push(u("div",{class:"q-table__control"},[c(J.value)])):e.title&&k.push(u("div",{class:"q-table__control"},[u("div",{class:["q-table__title",e.titleClass]},e.title)]))),b!==void 0&&(k.push(u("div",{class:"q-table__separator col"})),k.push(u("div",{class:"q-table__control"},[b(J.value)]))),k.length!==0)return u("div",{class:F},k)}const Ne=f(()=>ie.value===!0?null:W.value);function Me(){const t=pt();return e.loading===!0&&l.loading===void 0&&t.push(u("tr",{class:"q-table__progress"},[u("th",{class:"relative-position",colspan:je.value},Le())])),u("thead",t)}function pt(){const t=l.header,c=l["header-cell"];if(t!==void 0)return t($e({header:!0})).slice();const b=E.value.map(S=>{const C=l[`header-cell-${S.name}`],F=C!==void 0?C:c,k=$e({col:S});return F!==void 0?F(k):u(pl,{key:S.name,props:k},()=>S.label)});if(ue.value===!0&&e.grid!==!0)b.unshift(u("th",{class:"q-table--col-auto-width"}," "));else if(te.value===!0){const S=l["header-selection"],C=S!==void 0?S($e({})):[u(Be,{color:e.color,modelValue:Ne.value,dark:i.value,dense:e.dense,"onUpdate:modelValue":Qe})];b.unshift(u("th",{class:"q-table--col-auto-width"},C))}return[u("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},b)]}function $e(t){return Object.assign(t,{cols:E.value,sort:we,colsMap:Oe.value,color:e.color,dark:i.value,dense:e.dense}),te.value===!0&&X(t,"selected",()=>Ne.value,Qe),t}function Qe(t){ie.value===!0&&(t=!1),I(A.value.map(v.value),A.value,t)}const me=f(()=>{const t=[e.iconFirstPage||s.iconSet.table.firstPage,e.iconPrevPage||s.iconSet.table.prevPage,e.iconNextPage||s.iconSet.table.nextPage,e.iconLastPage||s.iconSet.table.lastPage];return s.lang.rtl===!0?t.reverse():t});function qt(){if(e.hideBottom===!0)return;if(ft.value===!0){if(e.hideNoData===!0)return;const b=e.loading===!0?e.loadingLabel||s.lang.table.loading:e.filter?e.noResultsLabel||s.lang.table.noResults:e.noDataLabel||s.lang.table.noData,S=l["no-data"],C=S!==void 0?[S({message:b,icon:s.iconSet.table.warning,filter:e.filter})]:[u(De,{class:"q-table__bottom-nodata-icon",name:s.iconSet.table.warning}),b];return u("div",{class:ye+" q-table__bottom--nodata"},C)}const t=l.bottom;if(t!==void 0)return u("div",{class:ye},[t(J.value)]);const c=e.hideSelectedBanner!==!0&&Q.value===!0&&le.value>0?[u("div",{class:"q-table__control"},[u("div",[(e.selectedRowsLabel||s.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return u("div",{class:ye+" justify-end"},kt(c));if(c.length!==0)return u("div",{class:ye},c)}function Pt(t){L({page:1,rowsPerPage:t.value})}function kt(t){let c;const{rowsPerPage:b}=h.value,S=e.paginationLabel||s.lang.table.pagination,C=l.pagination,F=e.rowsPerPageOptions.length>1;if(t.push(u("div",{class:"q-table__separator col"})),F===!0&&t.push(u("div",{class:"q-table__control"},[u("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||s.lang.table.recordsPerPage]),u(lt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:b,options:vt.value,displayValue:b===0?s.lang.table.allRows:b,dark:i.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":Pt})])),C!==void 0)c=C(J.value);else if(c=[u("span",b!==0?{class:"q-table__bottom-item"}:{},[b?S(ce.value+1,Math.min(de.value,fe.value),fe.value):S(1,K.value,fe.value)])],b!==0&&ve.value>1){const k={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(k.size="sm"),ve.value>2&&c.push(u(N,{key:"pgFirst",...k,icon:me.value[0],disable:Ce.value,onClick:pe})),c.push(u(N,{key:"pgPrev",...k,icon:me.value[1],disable:Ce.value,onClick:qe}),u(N,{key:"pgNext",...k,icon:me.value[2],disable:_e.value,onClick:Pe})),ve.value>2&&c.push(u(N,{key:"pgLast",...k,icon:me.value[3],disable:_e.value,onClick:ke}))}return t.push(u("div",{class:"q-table__control"},c)),t}function Ft(){const t=e.gridHeader===!0?[u("table",{class:"q-table"},[Me()])]:e.loading===!0&&l.loading===void 0?Le():void 0;return u("div",{class:"q-table__middle"},t)}function $t(){const t=l.item!==void 0?l.item:c=>{const b=c.cols.map(C=>u("div",{class:"q-table__grid-item-row"},[u("div",{class:"q-table__grid-item-title"},[C.label]),u("div",{class:"q-table__grid-item-value"},[C.value])]));if(Q.value===!0){const C=l["body-selection"],F=C!==void 0?C(c):[u(Be,{modelValue:c.selected,color:e.color,dark:i.value,dense:e.dense,"onUpdate:modelValue":(k,M)=>{I([c.key],[c.row],k,M)}})];b.unshift(u("div",{class:"q-table__grid-item-row"},F),u(vl,{dark:i.value}))}const S={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(S.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(S.onClick=C=>{a("RowClick",C,c.row,c.pageIndex)}),e.onRowDblclick!==void 0&&(S.onDblclick=C=>{a("RowDblclick",C,c.row,c.pageIndex)})),u("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(c.selected===!0?" q-table__grid-item--selected":"")},[u("div",S,b)])};return u("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},A.value.map((c,b)=>t(Ae({key:v.value(c),row:c,pageIndex:b}))))}return Object.assign(d.proxy,{requestServerInteraction:V,setPagination:L,firstPage:pe,prevPage:qe,nextPage:Pe,lastPage:ke,isRowSelected:w,clearSelection:D,isRowExpanded:x,setExpanded:H,sort:we,resetVirtualScroll:gt,scrollTo:yt,getCellValue:G}),At(d.proxy,{filteredSortedRows:()=>ee.value,computedRows:()=>A.value,computedRowsNumber:()=>fe.value}),()=>{const t=[_t()],c={ref:m,class:q.value};return e.grid===!0?t.push(Ft()):Object.assign(c,{class:[c.class,e.cardClass],style:e.cardStyle}),t.push(bt(),qt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),u("div",c,t)}}});const Kl=[{name:"name",required:!0,label:"\u0418\u043C\u044F",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"category",required:!0,label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",align:"left",field:e=>e.category,format:e=>`${e}`,sortable:!1},{name:"descriptor",required:!0,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",align:"right",field:e=>e.descriptor,format:e=>`${e}`,sortable:!1}],Wl=Ve({name:"ImagesList",components:{ConfirmDialog:fl},props:{category:{type:String,default:()=>""},showControls:{type:Boolean,default:!0},showCategory:{type:Boolean,default:!0}},emits:{showContent:null},setup(e,l){const a=at(),d=Te(),{categoryNames:s}=re(d),i=Ze(()=>e.category),o=B(!1),r=B(""),v=B(1),{images:m}=re(a),n=B(0),y=h=>{n.value=h,o.value=!0},_=async()=>{await a.removeImage(n.value),p()},p=()=>{o.value=!1,n.value=0};return{isShowDialog:o,categoryNames:s,curCategory:i,images:m,searchByName:r,current:v,columns:Kl,confirmDelete:y,removeImage:_,closeDialog:p,update:async h=>{console.log(h)},showContent:h=>{l.emit("showContent",h)}}}}),Gl=e=>(Mt("data-v-45565c69"),e=e(),Qt(),e),Jl=Gl(()=>R("div",{class:"flex items-center q-mb-sm"},null,-1)),Xl={class:"full-width"},Yl={class:"row items-center item-control"},Zl={style:{color:"black"}},ea={class:"row justify-end"},ta={class:"flex justify-end item-control"},la={class:"q-gutter-xs"};function aa(e,l,a,d,s,i){const o=he("ConfirmDialog");return z(),ne(Nt,null,[Jl,R("div",Xl,[P(zl,{flat:"",bordered:"","virtual-scroll":"",rows:e.images(e.curCategory,e.searchByName),columns:e.columns,"row-key":"name","rows-per-page-options":[7,10,15,20,25,50,0]},{"body-cell-name":O(r=>[P(Ge,{props:r},{default:O(()=>[R("div",Yl,[P(N,{class:"q-mr-md",size:"12px",flat:"",dense:"",round:"",icon:"person",onClick:v=>e.showContent(r.row.id)},null,8,["onClick"]),R("em",Zl,et(r.row.name),1)])]),_:2},1032,["props"])]),"body-cell-descriptor":O(r=>[P(Ge,{props:r},{default:O(()=>[R("div",ea,[R("div",ta,[R("div",la,[P(N,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:v=>e.confirmDelete(r.row.id)},null,8,["onClick"])])])])]),_:2},1032,["props"])]),"top-left":O(()=>[P(Ie,{debounce:"300",outlined:"",modelValue:e.searchByName,"onUpdate:modelValue":l[0]||(l[0]=r=>e.searchByName=r),label:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438"},null,8,["modelValue"])]),_:1},8,["rows","columns"])]),P(o,{isShow:e.isShowDialog,message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C?",onOk:e.removeImage,onCancel:e.closeDialog},null,8,["isShow","onOk","onCancel"])],64)}var oa=xe(Wl,[["render",aa],["__scopeId","data-v-45565c69"]]);const na=Ve({name:"ImagesPage",components:{ImageCategoryAdd:_l,ImagesList:oa,ImageContentView:nl},setup(){const e=B(null),l=B(""),a=B(""),d=B(""),s=B(!1),i=B(!1),o=B(0),r=at(),v=Te(),{defaultCategory:m,categoryNames:n}=re(v);d.value=m.value.name;const{imagesList:y,placeholderUrl:_}=re(r),p=ot();return r.getImages(),{imagesList:y,image:e,imageUrl:l,name:a,isShowDialog:s,isShowContent:i,placeholderUrl:_,category:d,categoryNames:n,showContentId:o,failed:async V=>{p.error(JSON.parse(V.xhr.responseText).message)},handleUpload:async()=>{if(e.value){const V=await ra(e.value);l.value=V}},save:async()=>{if(e.value){const V={record:{name:a.value,content:l.value,category:d.value},fileName:e.value.name};await r.insert(V),a.value=""}},showContent:V=>{o.value=V,i.value=!0}}}}),ra=e=>new Promise(function(l,a){if(!(e instanceof Blob))return a("bufferToImage - expected buf to be of type: Blob");var d=new FileReader;d.onload=function(){return typeof d.result!="string"?a("bufferToImage - expected reader.result to be a string, in onload"):l(d.result)},d.onerror=a,d.readAsDataURL(e)}),sa={class:"row justify-between items-start full-width"},ua={class:"row justify-start q-pa-md full-width q-col-gutter-md"},ia={class:"col-md-6 col-12"},ca={class:"flex justify-between items-center"},da={class:"col-md-6 col-12 flex justify-center"},va=["src"],fa={class:"full-width flex justify-center q-px-lg"},ma={key:0},ga={key:1,class:"full-width flex justify-start wrap"};function ba(e,l,a,d,s,i){const o=he("ImagesList"),r=he("ImageCategoryAdd"),v=he("ImageContentView");return z(),ze(sl,null,{default:O(()=>[R("div",sa,[R("section",ua,[R("div",ia,[P(ml,{class:"full-width",outlined:"","bottom-slots":"",modelValue:e.image,"onUpdate:modelValue":[l[1]||(l[1]=m=>e.image=m),e.handleUpload],counter:"","max-files":"1",label:"\u0412\u044B\u0431\u043E\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",accept:".jpg, .jpeg, .png"},{hint:O(()=>[Ke(" \u0420\u0430\u0437\u043C\u0435\u0440 ")]),append:O(()=>[Ut(P(De,{name:"close",onClick:l[0]||(l[0]=zt(m=>e.image=null,["stop","prevent"])),class:"cursor-pointer"},null,512),[[Ht,e.image!==null]])]),_:1},8,["modelValue","onUpdate:modelValue"]),P(Ie,{outlined:"",class:"q-my-md",label:"\u0418\u043C\u044F",modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=m=>e.name=m),style:{padding:"0"}},null,8,["modelValue"]),R("div",ca,[P(lt,{style:{width:"85%",padding:"0"},"bottom-slots":"",modelValue:e.category,"onUpdate:modelValue":l[3]||(l[3]=m=>e.category=m),options:e.categoryNames,label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",outlined:""},null,8,["modelValue","options"]),P(N,{round:"",color:"primary",icon:"add",onClick:l[4]||(l[4]=m=>e.isShowDialog=!0)})]),P(N,{onClick:e.save,class:"q-mt-md",color:"primary",rounded:"",disable:e.image===null||e.name===""},{default:O(()=>[Ke("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0431\u0430\u0437\u0443")]),_:1},8,["onClick","disable"])]),R("div",da,[e.image?(z(),ze(rl,{key:1,src:e.imageUrl,"spinner-color":"white",style:{height:"300px","max-width":"300px"},fit:"cover"},null,8,["src"])):(z(),ne("img",{key:0,width:"250",src:e.placeholderUrl},null,8,va))])]),R("section",fa,[e.imagesList.length===0?(z(),ne("h6",ma,"\u0421\u043F\u0438\u0441\u043E\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043F\u0443\u0441\u0442")):(z(),ne("div",ga,[P(o,{category:e.category,onShowContent:e.showContent},null,8,["category","onShowContent"])]))])]),P(r,{isShow:e.isShowDialog,onClose:l[5]||(l[5]=m=>e.isShowDialog=!1)},null,8,["isShow"]),P(v,{isShow:e.isShowContent,imageId:e.showContentId,onClose:l[6]||(l[6]=m=>e.isShowContent=!1)},null,8,["isShow","imageId"])]),_:1})}var Aa=xe(na,[["render",ba]]);export{Aa as default};