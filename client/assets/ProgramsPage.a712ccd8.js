import{A as C,K as D,ag as F,r as g,_ as w,B as y,C as i,N as n,M as e,F as a,L as v,R as f,O as P,I as o,ay as S,az as $}from"./index.560831f4.js";import{C as k}from"./ConfirmDialog.d9a85114.js";import{a as b}from"./spinners.store.44dfcb68.js";import{a as x}from"./socket.store.5b234787.js";import"./QCard.355d27c1.js";import"./use-dark.dcbcdb18.js";import"./QCardActions.1c72f331.js";import"./QDialog.32efb58f.js";import"./message.store.67667b7f.js";import"./use-quasar.a0351368.js";import"./focus-manager.05708ea9.js";const q=C({name:"ProgramsList",components:{ConfirmDialog:k},setup(){const s=b(),l=x(),{isEmpty:r,programs:d}=D(s),c=F(),m=_=>{c.push({path:"/programedit/",query:{id:_}})},u=g(!1),t=g(0),p=_=>{t.value=_,u.value=!0},h=()=>{u.value=!1,t.value=0};return{isShowDialog:u,isEmpty:r,programs:d,deleteProgram:async()=>{await s.removeProgram(t.value),await l.deleteProgramForAllStatios(t.value),h()},confirmDelete:p,closeDialog:h,openEditor:m}}}),E=s=>(S("data-v-6bc40e1d"),s=s(),$(),s),A={class:"flex justify-center q-pa-sm q-gutter-md"},B={class:"program-list"},L={key:0},I={key:1,class:"flex justify-center program-list"},N=E(()=>e("div",{class:"full-width text-weight-bold text-h6 q-mb-lg"}," \u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C ",-1)),j={class:"item-name"},T={class:"q-mt-sm text-bold"},z={class:"q-mt-sm"},O=E(()=>e("div",{class:"item-params"},[e("div",null,[e("div",{lines:"1"},[e("span",{class:"text-weight-bold"},"\u0412\u0440\u0435\u043C\u044F \u0441\u0442\u0430\u0440\u0442\u0430")])]),e("div",null,[e("div",{lines:"1"},[e("span",{class:"text-weight-bold"},"\u0412\u0440\u0435\u043C\u044F \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F")])]),e("div",null,[e("div",{lines:"1"},[e("span",{class:"text-weight-bold"},"\u0412\u0440\u0435\u043C\u044F \u043F\u043E\u043A\u0430\u0437\u0430")])]),e("div",null,[e("div",{lines:"1"},[e("span",{class:"text-weight-bold"},"\u0421\u043F\u0438\u043D\u043D\u0435\u0440")])]),e("div",null,[e("div",{lines:"1"},[e("span",{class:"text-weight-bold"},"\u0410\u0443\u0434\u0438\u043E")])])],-1)),R={class:"q-pl-sm item-values"},V={lines:"1"},K={lines:"1"},M={lines:"1"},Q={lines:"1"},W={lines:"1"},G={class:"flex justify-end item-control"},H={class:"q-gutter-xs"};function J(s,l,r,d,c,m){const u=y("ConfirmDialog");return i(),n(f,null,[e("section",A,[e("div",B,[a(v,{label:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",color:"primary",onClick:l[0]||(l[0]=t=>s.openEditor(0))})]),s.isEmpty?(i(),n("div",L,"\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u043F\u0443\u0441\u0442")):(i(),n("div",I,[N,(i(!0),n(f,null,P(s.programs,t=>(i(),n("div",{class:"full-width flex justify-between q-pa-md item",key:t.id},[e("div",j,[e("div",T,o(t.name),1),e("div",z,o(t.program_type),1)]),O,e("div",R,[e("div",null,[e("div",V,[e("span",null,o(t.startTime),1)])]),e("div",null,[e("div",K,[e("span",null,o(t.endTime),1)])]),e("div",null,[e("div",M,[e("span",null,o(t.imageShowTime)+" \u0441\u0435\u043A",1)])]),e("div",null,[e("div",Q,[e("span",null,o(t.spinnerName),1)])]),e("div",null,[e("div",W,[e("span",null,o(t.audioName),1)])])]),e("div",G,[e("div",H,[a(v,{size:"12px",flat:"",dense:"",round:"",icon:"delete",onClick:p=>s.confirmDelete(t.id)},null,8,["onClick"]),a(v,{size:"12px",flat:"",dense:"",round:"",icon:"edit",onClick:p=>s.openEditor(t.id)},null,8,["onClick"])])])]))),128))]))]),a(u,{isShow:s.isShowDialog,onOk:s.deleteProgram,onCancel:s.closeDialog,message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u0443\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443?"},null,8,["isShow","onOk","onCancel"])],64)}var U=w(q,[["render",J],["__scopeId","data-v-6bc40e1d"]]);const X=C({name:"ProgramsPage",components:{ProgramList:U},setup(){return{}}}),Y={class:"q-ma-md"};function Z(s,l,r,d,c,m){const u=y("ProgramList");return i(),n("section",Y,[a(u)])}var me=w(X,[["render",Z]]);export{me as default};
