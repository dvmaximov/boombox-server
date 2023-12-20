import{Q as p,a as w,b as E}from"./QUploader.77168975.js";import{_ as D,A as F,r as g,K as y,a2 as S,C as l,D as s,E as o,M as t,F as a,L as r,H as d,G as i,aq as U,I as h,N as f,R as q,O as $,Q as I,aA as L,m as Q,ay as V,az as x}from"./index.4441ceb3.js";import{Q as N,a as P}from"./QCard.d7e72495.js";import{Q as T}from"./QCardActions.b0c1adaf.js";import{Q as R}from"./QDialog.6fcb56e8.js";import{Q as j}from"./QPage.db67e206.js";import{C as b}from"./ClosePopup.2abd3cab.js";import{b as z}from"./spinners.store.6e5f9812.js";import{k as M}from"./message.store.bae39a4e.js";import"./position-engine.8a3af727.js";import"./format.fe783ecf.js";import"./use-dark.23e6962f.js";import"./use-file.98038ad1.js";import"./focus-manager.05708ea9.js";import"./use-quasar.ff10fabc.js";const O=F({name:"AudioPage",setup(){const e=g(!1),n=g(-1),c=z(),{audioList:C,audioUrl:k,apiUrl:B}=y(c),u=S(),{token:v}=y(u),A=M();return c.getAudio(),{audioList:C,token:v,confirm:e,audioUrl:k,apiUrl:B,uploaded:async m=>{await c.getAudio(),A.success(m.xhr.responseText)},failed:async m=>{A.error(JSON.parse(m.xhr.responseText).message)},confirmRemove:m=>{n.value=m,e.value=!0},removeAudio:async()=>{await c.removeAudio(n.value)}}}}),_=e=>(V("data-v-7f1d0d11"),e=e(),x(),e),G={class:"row justify-between items-start full-width"},H={class:"col-12 justify-start q-pa-md"},J={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},K={class:"col"},W=_(()=>t("div",{class:"q-uploader__title"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0430\u0443\u0434\u0438\u043E \u0444\u0430\u0439\u043B\u0430",-1)),X={class:"q-uploader__subtitle"},Y={class:"col-12 flex justify-center q-px-md bordered"},Z={key:0},uu={key:1,class:"full-width"},eu=_(()=>t("h6",null,"\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432",-1)),ou={class:"q-ma-sm text-primary text-bold"},au=["src"],tu=_(()=>t("span",{class:"q-ml-sm"},"\u0415\u0441\u043B\u0438 \u0430\u0443\u0434\u0438\u043E \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043A\u0430\u043A\u0438\u0445-\u043B\u0438\u0431\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430\u0445, \u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D!",-1)),lu=_(()=>t("span",{class:"q-ml-sm"},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u043E \u0444\u0430\u0439\u043B?",-1));function su(e,n,c,C,k,B){return l(),s(j,null,{default:o(()=>[t("div",G,[t("section",H,[a(E,{url:e.apiUrl,label:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0430\u0443\u0434\u0438\u043E",color:"secondary","field-name":"audio",accept:".mp3",onUploaded:e.uploaded,onFailed:e.failed,headers:()=>[{name:"Authorization",value:`Bearer ${e.token}`}]},{header:o(u=>[t("div",J,[u.queuedFiles.length>0?(l(),s(r,{key:0,icon:"clear_all",onClick:u.removeQueuedFiles,round:"",dense:"",flat:""},{default:o(()=>[a(p,null,{default:o(()=>[d("\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")]),_:1})]),_:2},1032,["onClick"])):i("",!0),u.uploadedFiles.length>0?(l(),s(r,{key:1,icon:"done_all",onClick:u.removeUploadedFiles,round:"",dense:"",flat:""},{default:o(()=>[a(p,null,{default:o(()=>[d("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B")]),_:1})]),_:2},1032,["onClick"])):i("",!0),u.isUploading?(l(),s(U,{key:2,class:"q-uploader__spinner"})):i("",!0),t("div",K,[W,t("div",X,h(u.uploadSizeLabel)+" / "+h(u.uploadProgressLabel),1)]),u.canAddFiles?(l(),s(r,{key:3,type:"a",icon:"add_box",onClick:u.pickFiles,round:"",dense:"",flat:""},{default:o(()=>[a(w),a(p,null,{default:o(()=>[d("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")]),_:1})]),_:2},1032,["onClick"])):i("",!0),u.canUpload?(l(),s(r,{key:4,icon:"cloud_upload",onClick:u.upload,round:"",dense:"",flat:""},{default:o(()=>[a(p,null,{default:o(()=>[d("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")]),_:1})]),_:2},1032,["onClick"])):i("",!0),u.isUploading?(l(),s(r,{key:5,icon:"clear",onClick:u.abort,round:"",dense:"",flat:""},{default:o(()=>[a(p,null,{default:o(()=>[d("Abort Upload")]),_:1})]),_:2},1032,["onClick"])):i("",!0)])]),_:1},8,["url","onUploaded","onFailed","headers"])]),t("section",Y,[e.audioList.length===0?(l(),f("h6",Z,"\u0421\u043F\u0438\u0441\u043E\u043A \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u043F\u0443\u0441\u0442")):(l(),f("div",uu,[eu,(l(!0),f(q,null,$(e.audioList,u=>(l(),f("figure",{key:u.id,class:"full-width q-mb-sm"},[t("figcaption",ou,[d(h(u.name)+" ",1),a(I,{name:"delete",class:"icon",onClick:v=>e.confirmRemove(u.id)},null,8,["onClick"])]),t("audio",{controls:"",src:`${e.audioUrl}/${u.path}`,class:"full-width"},null,8,au)]))),128))]))])]),a(R,{modelValue:e.confirm,"onUpdate:modelValue":n[0]||(n[0]=u=>e.confirm=u),persistent:""},{default:o(()=>[a(N,null,{default:o(()=>[a(P,{class:"row items-center"},{default:o(()=>[a(L,{icon:"delete",color:"primary","text-color":"white"}),tu,lu]),_:1}),a(T,{align:"right"},{default:o(()=>[Q(a(r,{flat:"",label:"\u041E\u0442\u043C\u0435\u043D\u0430",color:"primary"},null,512),[[b]]),Q(a(r,{flat:"",label:"\u0414\u0430",color:"primary",onClick:e.removeAudio},null,8,["onClick"]),[[b]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var wu=D(O,[["render",su],["__scopeId","data-v-7f1d0d11"]]);export{wu as default};