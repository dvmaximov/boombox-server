import{Q as O}from"./QPage.eb809f1d.js";import{u as M,Q as R,b as E,c as G,d as Q,V as H}from"./VideoContentView.a076b28c.js";import{Q as J}from"./QSeparator.dde7d7bd.js";import{Q as B}from"./QInput.4a69d35c.js";import{A as $,U as K,K as F,r as s,_ as q,B as k,C as m,N as Y,F as o,E as t,M as a,L as d,H as p,D as c,G as f,aq as W,I as V,R as X,ay as Z,az as x}from"./index.e98fe3e5.js";import{b as ee,Q as C,a as ue}from"./QUploader.96780010.js";import{Q as oe}from"./QCard.e1fad818.js";import{Q as U,a as te}from"./QTable.ec821897.js";import{C as le}from"./ConfirmDialog.73312f50.js";import{j as ae}from"./message.store.86c71126.js";import"./touch.7d6ee12f.js";import"./QDialog.34a82b16.js";import"./focus-manager.05708ea9.js";import"./use-virtual-scroll.d24b247d.js";import"./use-dark.beab2589.js";import"./format.3748299a.js";import"./QCardActions.686d4fad.js";import"./settings.store.82a58d89.js";import"./position-engine.17c831e0.js";import"./use-file.4377b425.js";import"./QVirtualScroll.a563219f.js";import"./QList.383f5d45.js";import"./QCheckbox.b1039a88.js";import"./QItem.685ddbb8.js";import"./use-quasar.6bf1d505.js";const ne=[{name:"name",required:!0,label:"\u0418\u043C\u044F",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!1},{name:"video_type",required:!0,label:"\u0422\u0438\u043F \u0432\u0438\u0434\u0435\u043E",align:"left",field:e=>e.video_type,format:e=>`${e}`,sortable:!1},{name:"content",required:!0,label:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",align:"right",field:e=>e.content,format:e=>`${e}`,sortable:!1}],se=$({name:"ImagesList",components:{ConfirmDialog:le},emits:{showContent:null},setup(e,l){const i=M(),v=K(),{token:w}=F(v),_=s("youtube"),r=s(""),u=s(""),h=s("\u0431\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"),y=ae(),g=s(!1),I=s(""),A=s(1),{videos:N,apiUrl:j}=F(i),b=s(0);i.getVideos();const L=n=>{b.value=n,g.value=!0},P=async()=>{await i.removeVideo(b.value),D()},D=()=>{g.value=!1,b.value=0};return{isShowDialog:g,videos:N,searchByName:I,current:A,columns:ne,tab:_,name:u,apiUrl:j,videoUrl:r,token:w,confirmDelete:L,removeVideo:P,closeDialog:D,showContent:n=>{l.emit("showContent",n)},uploaded:async n=>{await i.getVideos(),y.success(n.xhr.responseText)},failed:async n=>{y.error(JSON.parse(n.xhr.responseText).message)},save:async()=>{if(u.value===""){y.error('\u041F\u043E\u043B\u0435 "\u0418\u043C\u044F" \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E');return}if(r.value===""){y.error('\u041F\u043E\u043B\u0435 "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 youtube" \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E');return}let n=r.value.split("="),S="";n.length===2&&(S=n[1]);const z={record:{name:u.value,content:`youtube:${S}`,category:h.value,video_type:_.value}};await i.insert(z),u.value="",r.value=""}}}}),T=e=>(Z("data-v-26e684ca"),e=e(),x(),e),ie={class:"full-width q-mb-md"},re=T(()=>a("div",null,null,-1)),de={class:"row no-wrap items-center q-pa-sm q-gutter-xs"},me={class:"col"},ce=T(()=>a("div",{class:"q-uploader__title"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u0438\u0434\u0435\u043E \u0444\u0430\u0439\u043B\u0430",-1)),pe={class:"q-uploader__subtitle"},fe={class:"full-width"},ve={class:"row items-center item-control"},Ce={style:{color:"black"}},_e={class:"row justify-end"},he={class:"flex justify-end item-control"},ye={class:"q-gutter-xs"};function we(e,l,i,v,w,_){const r=k("ConfirmDialog");return m(),Y(X,null,[o(oe,{class:"full-width q-ma-lg card"},{default:t(()=>[o(R,{modelValue:e.tab,"onUpdate:modelValue":l[0]||(l[0]=u=>e.tab=u),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:t(()=>[o(E,{name:"youtube",label:"YOUTUBE"}),o(E,{name:"\u0444\u0430\u0439\u043B",label:"\u0424\u0410\u0419\u041B"})]),_:1},8,["modelValue"]),o(J),o(G,{modelValue:e.tab,"onUpdate:modelValue":l[3]||(l[3]=u=>e.tab=u),animated:""},{default:t(()=>[o(Q,{name:"youtube"},{default:t(()=>[a("div",ie,[o(B,{outlined:"",class:"q-my-md",label:"\u0418\u043C\u044F",modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=u=>e.name=u),style:{padding:"0"}},null,8,["modelValue"]),o(B,{outlined:"",class:"q-my-md",label:"\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 youtube",modelValue:e.videoUrl,"onUpdate:modelValue":l[2]||(l[2]=u=>e.videoUrl=u),style:{padding:"0"}},null,8,["modelValue"]),o(d,{onClick:e.save,class:"q-mt-md",color:"primary",rounded:""},{default:t(()=>[p("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")]),_:1},8,["onClick"])]),re]),_:1}),o(Q,{name:"\u0444\u0430\u0439\u043B",class:"flex justify-center"},{default:t(()=>[o(ee,{url:e.apiUrl,label:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0432\u0438\u0434\u0435\u043E",color:"secondary","field-name":"video",accept:".mp4",onUploaded:e.uploaded,onFailed:e.failed,headers:()=>[{name:"Authorization",value:`Bearer ${e.token}`}]},{header:t(u=>[a("div",de,[u.queuedFiles.length>0?(m(),c(d,{key:0,icon:"clear_all",onClick:u.removeQueuedFiles,round:"",dense:"",flat:""},{default:t(()=>[o(C,null,{default:t(()=>[p("\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C")]),_:1})]),_:2},1032,["onClick"])):f("",!0),u.uploadedFiles.length>0?(m(),c(d,{key:1,icon:"done_all",onClick:u.removeUploadedFiles,round:"",dense:"",flat:""},{default:t(()=>[o(C,null,{default:t(()=>[p("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B")]),_:1})]),_:2},1032,["onClick"])):f("",!0),u.isUploading?(m(),c(W,{key:2,class:"q-uploader__spinner"})):f("",!0),a("div",me,[ce,a("div",pe,V(u.uploadSizeLabel)+" / "+V(u.uploadProgressLabel),1)]),u.canAddFiles?(m(),c(d,{key:3,type:"a",icon:"add_box",onClick:u.pickFiles,round:"",dense:"",flat:""},{default:t(()=>[o(ue),o(C,null,{default:t(()=>[p("\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B")]),_:1})]),_:2},1032,["onClick"])):f("",!0),u.canUpload?(m(),c(d,{key:4,icon:"cloud_upload",onClick:u.upload,round:"",dense:"",flat:""},{default:t(()=>[o(C,null,{default:t(()=>[p("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")]),_:1})]),_:2},1032,["onClick"])):f("",!0),u.isUploading?(m(),c(d,{key:5,icon:"clear",onClick:u.abort,round:"",dense:"",flat:""},{default:t(()=>[o(C,null,{default:t(()=>[p("\u041E\u0442\u043C\u0435\u043D\u0430")]),_:1})]),_:2},1032,["onClick"])):f("",!0)])]),_:1},8,["url","onUploaded","onFailed","headers"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a("div",fe,[o(te,{flat:"",bordered:"","virtual-scroll":"",rows:e.videos(e.searchByName),columns:e.columns,"row-key":"name","rows-per-page-options":[7,10,15,20,25,50,0]},{"body-cell-name":t(u=>[o(U,{props:u},{default:t(()=>[a("div",ve,[o(d,{class:"q-mr-md",size:"12px",flat:"",dense:"",round:"",icon:"play_circle",onClick:h=>e.showContent(u.row.id)},null,8,["onClick"]),a("em",Ce,V(u.row.name),1)])]),_:2},1032,["props"])]),"body-cell-content":t(u=>[o(U,{props:u},{default:t(()=>[a("div",_e,[a("div",he,[a("div",ye,[o(d,{class:"q-mr-sm",size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:h=>e.confirmDelete(u.row.id)},null,8,["onClick"])])])])]),_:2},1032,["props"])]),"top-left":t(()=>[o(B,{debounce:"300",outlined:"",modelValue:e.searchByName,"onUpdate:modelValue":l[4]||(l[4]=u=>e.searchByName=u),label:"\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0438\u043C\u0435\u043D\u0438"},null,8,["modelValue"])]),_:1},8,["rows","columns"])]),o(r,{isShow:e.isShowDialog,message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C?",onOk:e.removeVideo,onCancel:e.closeDialog},null,8,["isShow","onOk","onCancel"])],64)}var ge=q(se,[["render",we],["__scopeId","data-v-26e684ca"]]);const be=$({name:"VideoPage",components:{VideoList:ge,VideoContentView:H},setup(){const e=s(!1),l=s(0);return{isShowContent:e,showContentId:l,showContent:v=>{l.value=v,e.value=!0}}}}),Be={class:"row justify-between items-start full-width"},Ve={class:"full-width flex justify-center q-px-lg"},ke={class:"full-width flex justify-start wrap"};function De(e,l,i,v,w,_){const r=k("VideoList"),u=k("VideoContentView");return m(),c(O,null,{default:t(()=>[a("div",Be,[a("section",Ve,[a("div",ke,[o(r,{onShowContent:e.showContent},null,8,["onShowContent"])])])]),o(u,{isShow:e.isShowContent,videoId:e.showContentId,onClose:l[0]||(l[0]=h=>e.isShowContent=!1)},null,8,["isShow","videoId"])]),_:1})}var ou=q(be,[["render",De]]);export{ou as default};