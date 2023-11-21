import{S as j,K as V,T as f,d as v,c as D,r as g,w as q,o as E,h as u,ar as F,e as O,aq as U,A as p,aj as A,_ as H,C as K,D as M,E as w,F as h,L as P}from"./index.94431755.js";import{a as x,Q as W}from"./QCard.e29f0159.js";import{Q as G}from"./QCardActions.d18f1f1e.js";import{Q as J}from"./QDialog.ec17e6a8.js";import{u as X}from"./settings.store.194ee742.js";const Y=j("images",{state:()=>({imagesList:[]}),getters:{placeholderUrl:()=>{const e=X();return V(e),`${location.protocol}//${location.hostname}/images/placeholder.jpg`},images:e=>(t,n)=>{let r=[];return n===""?r=e.imagesList.filter(l=>l.category===t):r=e.imagesList.filter(l=>l.name.toLowerCase().includes(n.toLowerCase())),r}},actions:{async getImages(){try{const e=await f.fetch("images");e.error||(this.imagesList=e.result||[])}catch{}},getImageById(e){try{return this.imagesList.find(n=>n.id===e)}catch{}},async getContentById(e){try{const t=await f.fetchById("images",e);if(!t.error)return t.result.content}catch{}},async removeImage(e){try{(await f.remove("images",e)).error||await this.getImages()}catch{}},async insert(e){try{const t=await f.insert("images",e);t.error||this.imagesList.push({...t.result})}catch{}},async update(e){try{(await f.update("images",e)).error||await this.getImages()}catch{}}}}),Z={ratio:[String,Number]};function ee(e,t){return v(()=>{const n=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const te=16/9;var ae=D({name:"QImg",props:{...Z,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:te},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const r=g(e.initialRatio),l=ee(e,r);let i=null,c=!1;const s=[g(null),g(C())],o=g(0),d=g(!1),m=g(!1),Q=v(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),L=v(()=>({width:e.width,height:e.height})),T=v(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),k=v(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));q(()=>_(),I);function _(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function C(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function I(a){i!==null&&(clearTimeout(i),i=null),m.value=!1,a===null?(d.value=!1,s[o.value^1].value=C()):d.value=!0,s[o.value].value=a}function $({target:a}){c!==!0&&(i!==null&&(clearTimeout(i),i=null),r.value=a.naturalHeight===0?.5:a.naturalWidth/a.naturalHeight,b(a,1))}function b(a,y){c===!0||y===1e3||(a.complete===!0?N(a):i=setTimeout(()=>{i=null,b(a,y+1)},50))}function N(a){c!==!0&&(o.value=o.value^1,s[o.value].value=null,d.value=!1,m.value=!1,n("load",a.currentSrc||a.src))}function z(a){i!==null&&(clearTimeout(i),i=null),d.value=!1,m.value=!0,s[o.value].value=null,s[o.value^1].value=C(),n("error",a)}function B(a){const y=s[a].value,S={key:"img_"+a,class:T.value,style:k.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...y};return o.value===a?(S.class+=" q-img__image--waiting",Object.assign(S,{onLoad:$,onError:z})):S.class+=" q-img__image--loaded",u("div",{class:"q-img__container absolute-full",key:"img"+a},u("img",S))}function R(){return d.value!==!0?u("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(t[m.value===!0?"error":"default"])):u("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[u(U,{color:e.spinnerColor,size:e.spinnerSize})])}return I(_()),E(()=>{c=!0,i!==null&&(clearTimeout(i),i=null)}),()=>{const a=[];return l.value!==null&&a.push(u("div",{key:"filler",style:l.value})),m.value!==!0&&(s[0].value!==null&&a.push(B(0)),s[1].value!==null&&a.push(B(1))),a.push(u(F,{name:"q-transition--fade"},R)),u("div",{class:Q.value,style:L.value,role:"img","aria-label":e.alt},a)}}});const ie=p({name:"ImageContentView",props:{isShow:{type:Boolean,default:!1},imageId:{type:Number,default:0}},setup(e,t){const n=A(()=>e.isShow),r=g(null),l=Y();return q(()=>e.imageId,async()=>{e.imageId!==0&&(r.value=await l.getContentById(e.imageId))}),{showContent:n,content:r,close:()=>{t.emit("close")}}}});function ne(e,t,n,r,l,i){return K(),M(J,{modelValue:e.showContent,"onUpdate:modelValue":t[0]||(t[0]=c=>e.showContent=c),persistent:""},{default:w(()=>[h(W,null,{default:w(()=>[h(x,{class:"flex justify-center items-center"},{default:w(()=>[h(ae,{src:e.content,"spinner-color":"white",style:{width:"300px"}},null,8,["src"])]),_:1}),h(G,{align:"right"},{default:w(()=>[h(P,{flat:"",label:"OK",color:"primary",onClick:e.close},null,8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var ce=H(ie,[["render",ne]]);export{ce as I,ae as Q,Y as u};