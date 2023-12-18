import{c as Z,r as k,d as v,w as ee,o as ae,aa as re,a5 as ue,h as u,ar as Fe,j as oe,e as Se,$ as qe,i as ke,f as ne,aU as pe,aL as we,aM as xe,aN as Ce,a2 as Ue,q as Te,a8 as Pe,aV as ze,an as Be,aT as Ee,aq as ie,Q as Oe,L as se,aD as Le}from"./index.e98fe3e5.js";import{u as Re,v as de,b as je,p as ce,c as Ae,a as $e,r as ve,s as Qe,d as Ne}from"./position-engine.17c831e0.js";import{u as De,a as Me,b as Ie,c as He,g as We}from"./message.store.86c71126.js";import{a as Ve,u as Ge,b as Ke,c as Xe}from"./QDialog.34a82b16.js";import{c as fe,b as Je,h as me}from"./format.3748299a.js";import{u as Ye,a as Ze}from"./use-dark.beab2589.js";import{u as ea,a as aa,b as ta}from"./use-file.4377b425.js";var qa=Z({name:"QTooltip",inheritAttrs:!1,props:{...Re,...De,...Ve,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:de},self:{type:String,default:"top middle",validator:de},offset:{type:Array,default:()=>[14,14],validator:je},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Me],setup(a,{slots:g,emit:l,attrs:o}){let d,c;const f=oe(),{proxy:{$q:p}}=f,w=k(null),U=k(!1),T=v(()=>ce(a.anchor,p.lang.rtl)),E=v(()=>ce(a.self,p.lang.rtl)),_=v(()=>a.persistent!==!0),{registerTick:x,removeTick:e}=Ge(),{registerTimeout:i}=Ie(),{transitionProps:C,transitionStyle:s}=Ke(a),{localScrollTarget:h,changeScrollEvent:N,unconfigureScrollTarget:D}=Ae(a,G),{anchorEl:S,canShow:M,anchorEvents:m}=$e({showing:U,configureAnchorEl:V}),{show:I,hide:P}=He({showing:U,canShow:M,handleShow:L,handleHide:Q,hideOnRouteChange:_,processOnMount:!0});Object.assign(m,{delayShow:H,delayHide:K});const{showPortal:O,hidePortal:z,renderPortal:r}=Xe(f,w,J,"tooltip");if(p.platform.is.mobile===!0){const b={anchorEl:S,innerRef:w,onClickOutside(B){return P(B),B.target.classList.contains("q-dialog__backdrop")&&qe(B),!0}},j=v(()=>a.modelValue===null&&a.persistent!==!0&&U.value===!0);ee(j,B=>{(B===!0?Ne:ve)(b)}),ae(()=>{ve(b)})}function L(b){O(),x(()=>{c=new MutationObserver(()=>y()),c.observe(w.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),y(),G()}),d===void 0&&(d=ee(()=>p.screen.width+"|"+p.screen.height+"|"+a.self+"|"+a.anchor+"|"+p.lang.rtl,y)),i(()=>{O(!0),l("show",b)},a.transitionDuration)}function Q(b){e(),z(),R(),i(()=>{z(!0),l("hide",b)},a.transitionDuration)}function R(){c!==void 0&&(c.disconnect(),c=void 0),d!==void 0&&(d(),d=void 0),D(),re(m,"tooltipTemp")}function y(){Qe({targetEl:w.value,offset:a.offset,anchorEl:S.value,anchorOrigin:T.value,selfOrigin:E.value,maxHeight:a.maxHeight,maxWidth:a.maxWidth})}function H(b){if(p.platform.is.mobile===!0){fe(),document.body.classList.add("non-selectable");const j=S.value,B=["touchmove","touchcancel","touchend","click"].map(Y=>[j,Y,"delayHide","passiveCapture"]);ue(m,"tooltipTemp",B)}i(()=>{I(b)},a.delay)}function K(b){p.platform.is.mobile===!0&&(re(m,"tooltipTemp"),fe(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),i(()=>{P(b)},a.hideDelay)}function V(){if(a.noParentEvent===!0||S.value===null)return;const b=p.platform.is.mobile===!0?[[S.value,"touchstart","delayShow","passive"]]:[[S.value,"mouseenter","delayShow","passive"],[S.value,"mouseleave","delayHide","passive"]];ue(m,"anchor",b)}function G(){if(S.value!==null||a.scrollTarget!==void 0){h.value=We(S.value,a.scrollTarget);const b=a.noParentEvent===!0?y:P;N(h.value,b)}}function X(){return U.value===!0?u("div",{...o,ref:w,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,s.value],role:"tooltip"},Se(g.default)):null}function J(){return u(Fe,C.value,X)}return ae(R),Object.assign(f.proxy,{updatePosition:y}),r}}),ka=Z({name:"QUploaderAddTrigger",setup(){const a=ke(pe,ne);return a===ne&&console.error("QUploaderAddTrigger needs to be child of QUploader"),a}});const oa={...we,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:a=>a>=0&&a<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},te=50,he=2*te,_e=he*Math.PI,la=Math.round(_e*1e3)/1e3;var ra=Z({name:"QCircularProgress",props:{...oa,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(a,{slots:g}){const{proxy:{$q:l}}=oe(),o=xe(a),d=v(()=>{const _=(l.lang.rtl===!0?-1:1)*a.angle;return{transform:a.reverse!==(l.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-_}deg)`:`rotate3d(0, 0, 1, ${_-90}deg)`}}),c=v(()=>a.instantFeedback!==!0&&a.indeterminate!==!0?{transition:`stroke-dashoffset ${a.animationSpeed}ms ease 0s, stroke ${a.animationSpeed}ms ease`}:""),f=v(()=>he/(1-a.thickness/2)),p=v(()=>`${f.value/2} ${f.value/2} ${f.value} ${f.value}`),w=v(()=>Je(a.value,a.min,a.max)),U=v(()=>_e*(1-(w.value-a.min)/(a.max-a.min))),T=v(()=>a.thickness/2*f.value);function E({thickness:_,offset:x,color:e,cls:i,rounded:C}){return u("circle",{class:"q-circular-progress__"+i+(e!==void 0?` text-${e}`:""),style:c.value,fill:"transparent",stroke:"currentColor","stroke-width":_,"stroke-dasharray":la,"stroke-dashoffset":x,"stroke-linecap":C,cx:f.value,cy:f.value,r:te})}return()=>{const _=[];a.centerColor!==void 0&&a.centerColor!=="transparent"&&_.push(u("circle",{class:`q-circular-progress__center text-${a.centerColor}`,fill:"currentColor",r:te-T.value/2,cx:f.value,cy:f.value})),a.trackColor!==void 0&&a.trackColor!=="transparent"&&_.push(E({cls:"track",thickness:T.value,offset:0,color:a.trackColor})),_.push(E({cls:"circle",thickness:T.value,offset:U.value,color:a.color,rounded:a.rounded===!0?"round":void 0}));const x=[u("svg",{class:"q-circular-progress__svg",style:d.value,viewBox:p.value,"aria-hidden":"true"},_)];return a.showValue===!0&&x.push(u("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:a.fontSize}},g.default!==void 0?g.default():[u("div",w.value)])),u("div",{class:`q-circular-progress q-circular-progress--${a.indeterminate===!0?"in":""}determinate`,style:o.value,role:"progressbar","aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":a.indeterminate===!0?void 0:w.value},Ce(g.internal,x))}}});function ge(a){return(a*100).toFixed(2)+"%"}const ua={...Ye,...ea,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},be=[...aa,"start","finish","added","removed"];function na(a,g){const l=oe(),{props:o,slots:d,emit:c,proxy:f}=l,{$q:p}=f,w=Ze(o,p);function U(t,n,F){if(t.__status=n,n==="idle"){t.__uploaded=0,t.__progress=0,t.__sizeLabel=me(t.size),t.__progressLabel="0.00%";return}if(n==="failed"){f.$forceUpdate();return}t.__uploaded=n==="uploaded"?t.size:F,t.__progress=n==="uploaded"?1:Math.min(.9999,t.__uploaded/t.size),t.__progressLabel=ge(t.__progress),f.$forceUpdate()}const T=v(()=>o.disable!==!0&&o.readonly!==!0),E=k(!1),_=k(null),x=k(null),e={files:k([]),queuedFiles:k([]),uploadedFiles:k([]),uploadedSize:k(0),updateFileStatus:U,isAlive:()=>Ue(l)===!1},{pickFiles:i,addFiles:C,onDragover:s,onDragleave:h,processFiles:N,getDndNode:D,maxFilesNumber:S,maxTotalSizeNumber:M}=ta({editable:T,dnd:E,getFileInput:X,addFilesToQueue:J});Object.assign(e,a({props:o,slots:d,emit:c,helpers:e,exposeApi:t=>{Object.assign(e,t)}})),e.isBusy===void 0&&(e.isBusy=k(!1));const m=k(0),I=v(()=>m.value===0?0:e.uploadedSize.value/m.value),P=v(()=>ge(I.value)),O=v(()=>me(m.value)),z=v(()=>T.value===!0&&e.isUploading.value!==!0&&(o.multiple===!0||e.queuedFiles.value.length===0)&&(o.maxFiles===void 0||e.files.value.length<S.value)&&(o.maxTotalSize===void 0||m.value<M.value)),r=v(()=>T.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);Te(pe,B);const L=v(()=>"q-uploader column no-wrap"+(w.value===!0?" q-uploader--dark q-dark":"")+(o.bordered===!0?" q-uploader--bordered":"")+(o.square===!0?" q-uploader--square no-border-radius":"")+(o.flat===!0?" q-uploader--flat no-shadow":"")+(o.disable===!0?" disabled q-uploader--disable":"")+(E.value===!0?" q-uploader--dnd":"")),Q=v(()=>"q-uploader__header"+(o.color!==void 0?` bg-${o.color}`:"")+(o.textColor!==void 0?` text-${o.textColor}`:""));ee(e.isUploading,(t,n)=>{n===!1&&t===!0?c("start"):n===!0&&t===!1&&c("finish")});function R(){o.disable===!1&&(e.abort(),e.uploadedSize.value=0,m.value=0,G(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function y(){o.disable===!1&&K(["uploaded"],()=>{e.uploadedFiles.value=[]})}function H(){K(["idle","failed"],({size:t})=>{m.value-=t,e.queuedFiles.value=[]})}function K(t,n){if(o.disable===!0)return;const F={files:[],size:0},A=e.files.value.filter(q=>t.indexOf(q.__status)===-1?!0:(F.size+=q.size,F.files.push(q),q.__img!==void 0&&window.URL.revokeObjectURL(q.__img.src),!1));F.files.length!==0&&(e.files.value=A,n(F),c("removed",F.files))}function V(t){o.disable||(t.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(n=>n.__key!==t.__key):t.__status==="uploading"?t.__abort():m.value-=t.size,e.files.value=e.files.value.filter(n=>n.__key!==t.__key?!0:(n.__img!==void 0&&window.URL.revokeObjectURL(n.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(n=>n.__key!==t.__key),c("removed",[t]))}function G(){e.files.value.forEach(t=>{t.__img!==void 0&&window.URL.revokeObjectURL(t.__img.src)})}function X(){return x.value||_.value.getElementsByClassName("q-uploader__input")[0]}function J(t,n){const F=N(t,n,e.files.value,!0),A=X();A!=null&&(A.value=""),F!==void 0&&(F.forEach(q=>{if(e.updateFileStatus(q,"idle"),m.value+=q.size,o.noThumbnails!==!0&&q.type.toUpperCase().startsWith("IMAGE")){const le=new Image;le.src=window.URL.createObjectURL(q),q.__img=le}}),e.files.value=e.files.value.concat(F),e.queuedFiles.value=e.queuedFiles.value.concat(F),c("added",F),o.autoUpload===!0&&e.upload())}function b(){r.value===!0&&e.upload()}function j(t,n,F){if(t===!0){const A={type:"a",key:n,icon:p.iconSet.uploader[n],flat:!0,dense:!0};let q;return n==="add"?(A.onClick=i,q=B):A.onClick=F,u(se,A,q)}}function B(){return u("input",{ref:x,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:o.accept,multiple:o.multiple===!0?"multiple":void 0,capture:o.capture,onMousedown:Pe,onClick:i,onChange:J})}function Y(){return d.header!==void 0?d.header(W):[u("div",{class:"q-uploader__header-content column"},[u("div",{class:"flex flex-center no-wrap q-gutter-xs"},[j(e.queuedFiles.value.length!==0,"removeQueue",H),j(e.uploadedFiles.value.length!==0,"removeUploaded",y),e.isUploading.value===!0?u(ie,{class:"q-uploader__spinner"}):null,u("div",{class:"col column justify-center"},[o.label!==void 0?u("div",{class:"q-uploader__title"},[o.label]):null,u("div",{class:"q-uploader__subtitle"},[O.value+" / "+P.value])]),j(z.value,"add"),j(o.hideUploadBtn===!1&&r.value===!0,"upload",e.upload),j(e.isUploading.value,"clear",e.abort)])])]}function ye(){return d.list!==void 0?d.list(W):e.files.value.map(t=>u("div",{key:t.__key,class:"q-uploader__file relative-position"+(o.noThumbnails!==!0&&t.__img!==void 0?" q-uploader__file--img":"")+(t.__status==="failed"?" q-uploader__file--failed":t.__status==="uploaded"?" q-uploader__file--uploaded":""),style:o.noThumbnails!==!0&&t.__img!==void 0?{backgroundImage:'url("'+t.__img.src+'")'}:null},[u("div",{class:"q-uploader__file-header row flex-center no-wrap"},[t.__status==="failed"?u(Oe,{class:"q-uploader__file-status",name:p.iconSet.type.negative,color:"negative"}):null,u("div",{class:"q-uploader__file-header-content col"},[u("div",{class:"q-uploader__title"},[t.name]),u("div",{class:"q-uploader__subtitle row items-center no-wrap"},[t.__sizeLabel+" / "+t.__progressLabel])]),t.__status==="uploading"?u(ra,{value:t.__progress,min:0,max:1,indeterminate:t.__progress===0}):u(se,{round:!0,dense:!0,flat:!0,icon:p.iconSet.uploader[t.__status==="uploaded"?"done":"clear"],onClick:()=>{V(t)}})])]))}ae(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&G()});const W={};for(const t in e)ze(e[t])===!0?Be(W,t,()=>e[t].value):W[t]=e[t];return Object.assign(W,{upload:b,reset:R,removeUploadedFiles:y,removeQueuedFiles:H,removeFile:V,pickFiles:i,addFiles:C}),Ee(W,{canAddFiles:()=>z.value,canUpload:()=>r.value,uploadSizeLabel:()=>O.value,uploadProgressLabel:()=>P.value}),g({...e,upload:b,reset:R,removeUploadedFiles:y,removeQueuedFiles:H,removeFile:V,pickFiles:i,addFiles:C,canAddFiles:z,canUpload:r,uploadSizeLabel:O,uploadProgressLabel:P}),()=>{const t=[u("div",{class:Q.value},Y()),u("div",{class:"q-uploader__list scroll"},ye()),D("uploader")];e.isBusy.value===!0&&t.push(u("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[u(ie)]));const n={ref:_,class:L.value};return z.value===!0&&Object.assign(n,{onDragover:s,onDragleave:h}),u("div",n,t)}}const ia=()=>!0;function sa(a){const g={};return a.forEach(l=>{g[l]=ia}),g}const da=sa(be);var ca=({name:a,props:g,emits:l,injectPlugin:o})=>Z({name:a,props:{...ua,...g},emits:Le(l)===!0?{...da,...l}:[...be,...l],setup(d,{expose:c}){return na(o,c)}});function $(a){return typeof a=="function"?a:()=>a}const va={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>a=>a.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},fa=["factoryFailed","uploaded","failed","uploading"];function ma({props:a,emit:g,helpers:l}){const o=k([]),d=k([]),c=k(0),f=v(()=>({url:$(a.url),method:$(a.method),headers:$(a.headers),formFields:$(a.formFields),fieldName:$(a.fieldName),withCredentials:$(a.withCredentials),sendRaw:$(a.sendRaw),batch:$(a.batch)})),p=v(()=>c.value>0),w=v(()=>d.value.length!==0);let U;function T(){o.value.forEach(e=>{e.abort()}),d.value.length!==0&&(U=!0)}function E(){const e=l.queuedFiles.value.slice(0);l.queuedFiles.value=[],f.value.batch(e)?_(e):e.forEach(i=>{_([i])})}function _(e){if(c.value++,typeof a.factory!="function"){x(e,{});return}const i=a.factory(e);if(!i)g("factoryFailed",new Error("QUploader: factory() does not return properly"),e),c.value--;else if(typeof i.catch=="function"&&typeof i.then=="function"){d.value.push(i);const C=s=>{l.isAlive()===!0&&(d.value=d.value.filter(h=>h!==i),d.value.length===0&&(U=!1),l.queuedFiles.value=l.queuedFiles.value.concat(e),e.forEach(h=>{l.updateFileStatus(h,"failed")}),g("factoryFailed",s,e),c.value--)};i.then(s=>{U===!0?C(new Error("Aborted")):l.isAlive()===!0&&(d.value=d.value.filter(h=>h!==i),x(e,s))}).catch(C)}else x(e,i||{})}function x(e,i){const C=new FormData,s=new XMLHttpRequest,h=(r,L)=>i[r]!==void 0?$(i[r])(L):f.value[r](L),N=h("url",e);if(!N){console.error("q-uploader: invalid or no URL specified"),c.value--;return}const D=h("formFields",e);D!==void 0&&D.forEach(r=>{C.append(r.name,r.value)});let S=0,M=0,m=0,I=0,P;s.upload.addEventListener("progress",r=>{if(P===!0)return;const L=Math.min(I,r.loaded);l.uploadedSize.value+=L-m,m=L;let Q=m-M;for(let R=S;Q>0&&R<e.length;R++){const y=e[R];if(Q>y.size)Q-=y.size,S++,M+=y.size,l.updateFileStatus(y,"uploading",y.size);else{l.updateFileStatus(y,"uploading",Q);return}}},!1),s.onreadystatechange=()=>{s.readyState<4||(s.status&&s.status<400?(l.uploadedFiles.value=l.uploadedFiles.value.concat(e),e.forEach(r=>{l.updateFileStatus(r,"uploaded")}),g("uploaded",{files:e,xhr:s})):(P=!0,l.uploadedSize.value-=m,l.queuedFiles.value=l.queuedFiles.value.concat(e),e.forEach(r=>{l.updateFileStatus(r,"failed")}),g("failed",{files:e,xhr:s})),c.value--,o.value=o.value.filter(r=>r!==s))},s.open(h("method",e),N),h("withCredentials",e)===!0&&(s.withCredentials=!0);const O=h("headers",e);O!==void 0&&O.forEach(r=>{s.setRequestHeader(r.name,r.value)});const z=h("sendRaw",e);e.forEach(r=>{l.updateFileStatus(r,"uploading",0),z!==!0&&C.append(h("fieldName",r),r,r.name),r.xhr=s,r.__abort=()=>{s.abort()},I+=r.size}),g("uploading",{files:e,xhr:s}),o.value.push(s),z===!0?s.send(new Blob(e)):s.send(C)}return{isUploading:p,isBusy:w,abort:T,upload:E}}var ga={name:"QUploader",props:va,emits:fa,injectPlugin:ma},wa=ca(ga);export{qa as Q,ka as a,wa as b};
