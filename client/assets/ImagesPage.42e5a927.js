import{c as Y,r as h,d,h as y,an as Z,j as ee,$ as te,_ as ae,A as le,K as ue,B as ne,C as g,N as b,F as m,E as f,R as q,M as p,H as _,m as ie,aN as se,Q as oe,ak as re,L,D as O,O as de,I as ce}from"./index.5187f60d.js";import{Q as me}from"./QChip.202e10f9.js";import{d as fe,a as ve,e as ge,g as pe,h as he,k as ye,i as U,f as be,Q as Ce}from"./QInput.04a714c4.js";import{u as Fe,a as we,b as Ve}from"./use-file.512f69c9.js";import{h as Se}from"./format.3e32b8d9.js";import{u as ke,Q as $}from"./QImg.e3d5ba1b.js";import{Q as De}from"./QCardActions.21a8bba9.js";import{Q as Ie}from"./QCard.71228f87.js";import{Q as xe}from"./QPage.a8bdf3d3.js";import{j as _e}from"./message.store.ca1fb33b.js";import{C as Qe}from"./ConfirmDialog.8bb08743.js";import"./use-dark.4d6c07af.js";import"./focus-manager.05708ea9.js";import"./settings.store.0a343494.js";import"./use-quasar.c7717807.js";import"./QDialog.a0635fa2.js";var je=Y({name:"QFile",inheritAttrs:!1,props:{...fe,...ve,...Fe,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ge,...we],setup(e,{slots:l,emit:o,attrs:s}){const{proxy:v}=ee(),u=pe(),c=h(null),n=h(!1),C=he(e),{pickFiles:V,onDragover:S,onDragleave:k,processFiles:F,getDndNode:Q}=Ve({editable:u.editable,dnd:n,getFileInput:E,addFilesToQueue:P}),j=ye(e),a=d(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),B=d(()=>U(a.value)),R=d(()=>a.value.map(t=>t.name).join(", ")),A=d(()=>Se(a.value.reduce((t,i)=>t+i.size,0))),T=d(()=>({totalSize:A.value,filesNumber:a.value.length,maxFiles:e.maxFiles})),z=d(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:C.value,...s,id:u.targetUid.value,disabled:u.editable.value!==!0})),K=d(()=>"q-file q-field--auto-height"+(n.value===!0?" q-file--dnd":"")),N=d(()=>e.multiple===!0&&e.append===!0);function D(t){const i=a.value.slice();i.splice(t,1),I(i)}function M(t){const i=a.value.indexOf(t);i>-1&&D(i)}function I(t){o("update:modelValue",e.multiple===!0?t:t[0])}function H(t){t.keyCode===13&&te(t)}function J(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function E(){return c.value}function P(t,i){const r=F(t,i,a.value,N.value),x=E();x!=null&&(x.value=""),r!==void 0&&((e.multiple===!0?e.modelValue&&r.every(X=>a.value.includes(X)):e.modelValue===r[0])||I(N.value===!0?a.value.concat(r):r))}function w(){return[y("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function G(){if(l.file!==void 0)return a.value.length===0?w():a.value.map((i,r)=>l.file({index:r,file:i,ref:this}));if(l.selected!==void 0)return a.value.length===0?w():l.selected({files:a.value,ref:this});if(e.useChips===!0)return a.value.length===0?w():a.value.map((i,r)=>y(me,{key:"file-"+r,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{D(r)}},()=>y("span",{class:"ellipsis",textContent:i.name})));const t=e.displayValue!==void 0?e.displayValue:R.value;return t.length!==0?[y("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:w()}function W(){const t={ref:c,...z.value,...j.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:P};return e.multiple===!0&&(t.multiple=!0),y("input",t)}return Object.assign(u,{fieldClass:K,emitValue:I,hasValue:B,inputRef:c,innerValue:a,floatingLabel:d(()=>B.value===!0||U(e.displayValue)),computedCounter:d(()=>{if(e.counterLabel!==void 0)return e.counterLabel(T.value);const t=e.maxFiles;return`${a.value.length}${t!==void 0?" / "+t:""} (${A.value})`}),getControlChild:()=>Q("file"),getControl:()=>{const t={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(t,{onDragover:S,onDragleave:k,onKeydown:H,onKeyup:J}),y("div",t,[W()].concat(G()))}}),Object.assign(v,{removeAtIndex:D,removeFile:M,getNativeElement:()=>c.value}),Z(v,"nativeEl",()=>c.value),be(u)}});const Be=le({name:"ImagesPage",components:{ConfirmDialog:Qe},setup(){const e=h(0),l=h(null),o=h(""),s=h(""),v=h(!1),u=ke(),{imagesList:c,placeholderUrl:n}=ue(u),C=_e();u.getImages();const V=async()=>{if(l.value){const a=await Ae(l.value);o.value=a}},S=a=>{e.value=a,v.value=!0},k=async()=>{await u.removeImage(e.value),F()},F=()=>{v.value=!1,e.value=0};return{imagesList:c,image:l,imageUrl:o,name:s,isShowDialog:v,placeholderUrl:n,failed:async a=>{C.error(JSON.parse(a.xhr.responseText).message)},confirmDelete:S,removeImage:k,handleUpload:V,save:async()=>{if(l.value){const a={record:{name:s.value,content:o.value},fileName:l.value.name};await u.insert(a),s.value=""}},closeDialog:F}}}),Ae=e=>new Promise(function(l,o){if(!(e instanceof Blob))return o("bufferToImage - expected buf to be of type: Blob");var s=new FileReader;s.onload=function(){return typeof s.result!="string"?o("bufferToImage - expected reader.result to be a string, in onload"):l(s.result)},s.onerror=o,s.readAsDataURL(e)}),Ne={class:"row justify-between items-start full-width"},Ee={class:"row justify-start q-pa-md full-width q-col-gutter-md"},Pe={class:"col-md-6 col-12"},qe={class:"col-md-6 col-12 flex justify-center"},Le=["src"],Oe={class:"flex justify-center q-px-lg"},Ue={key:0},$e={key:1,class:"full-width flex justify-start wrap"},Re={class:"absolute-bottom"},Te={style:{"font-size":"8px"}};function ze(e,l,o,s,v,u){const c=ne("ConfirmDialog");return g(),b(q,null,[m(xe,null,{default:f(()=>[p("div",Ne,[p("section",Ee,[p("div",Pe,[m(je,{class:"full-width",outlined:"","bottom-slots":"",modelValue:e.image,"onUpdate:modelValue":[l[1]||(l[1]=n=>e.image=n),e.handleUpload],counter:"","max-files":"1",label:"\u0412\u044B\u0431\u043E\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",accept:".jpg, .jpeg, .png"},{hint:f(()=>[_(" \u0420\u0430\u0437\u043C\u0435\u0440 ")]),append:f(()=>[ie(m(oe,{name:"close",onClick:l[0]||(l[0]=re(n=>e.image=null,["stop","prevent"])),class:"cursor-pointer"},null,512),[[se,e.image!==null]])]),_:1},8,["modelValue","onUpdate:modelValue"]),m(Ce,{outlined:"",class:"q-my-md",label:"\u0418\u043C\u044F",modelValue:e.name,"onUpdate:modelValue":l[2]||(l[2]=n=>e.name=n)},null,8,["modelValue"]),m(L,{onClick:e.save,color:"primary",rounded:"",disable:e.image===null||e.name===""},{default:f(()=>[_("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0431\u0430\u0437\u0443")]),_:1},8,["onClick","disable"])]),p("div",qe,[e.image?(g(),O($,{key:1,src:e.imageUrl,"spinner-color":"white",style:{height:"300px","max-width":"300px"},fit:"cover"},null,8,["src"])):(g(),b("img",{key:0,width:"300",src:e.placeholderUrl},null,8,Le))])]),p("section",Oe,[e.imagesList.length===0?(g(),b("h6",Ue,"\u0421\u043F\u0438\u0441\u043E\u043A \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439 \u043F\u0443\u0441\u0442")):(g(),b("div",$e,[(g(!0),b(q,null,de(e.imagesList,n=>(g(),O(Ie,{key:n.id,class:"q-ma-sm",style:{width:"100px"}},{default:f(()=>[m($,{src:n.content,style:{height:"100px","max-width":"100px"}},{default:f(()=>[p("div",Re,[p("div",Te,ce(n.name),1)])]),_:2},1032,["src"]),m(De,null,{default:f(()=>[m(L,{flat:"",style:{"font-size":"8px"},onClick:C=>e.confirmDelete(n.id)},{default:f(()=>[_("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]))])])]),_:1}),m(c,{isShow:e.isShowDialog,message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C?",onOk:e.removeImage,onCancel:e.closeDialog},null,8,["isShow","onOk","onCancel"])],64)}var st=ae(Be,[["render",ze]]);export{st as default};
