import{Q as _,a as c}from"./QCard.630a4998.js";import{Q as p}from"./QSeparator.5c9e1f35.js";import{_ as h,A as k,K as y,ag as D,C as u,D as d,E as t,M as o,N as n,O as w,F as s,I as Q,H as f,L as g,R as B}from"./index.1b64f866.js";import{Q as C}from"./QCardActions.25625c9a.js";import{Q as E}from"./QPage.efbb4c49.js";import{a as x}from"./socket.store.d24e80dd.js";import"./use-dark.72e7127e.js";const S=k({name:"MainPage",setup(){const e=x(),{workstations:r}=y(e),i=D();return{workstations:r,toStationInfo:l=>{i.push({path:"/workstation/",query:{name:l}})}}}}),v={class:"full-width"},F={key:0,class:"text-center"},$={key:1,class:"text-center"},A={class:"full-width flex justify-evenly"},I={class:"text-subtitle2"};function N(e,r,i,m,l,q){return u(),d(E,{class:"flex q-pt-lg justify-evenly"},{default:t(()=>[o("section",v,[e.workstations.length===0?(u(),n("h6",F," \u041D\u0435\u0442 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0430\u043D\u0446\u0438\u0439 ")):(u(),n("h6",$,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044B\u0435 \u0441\u0442\u0430\u043D\u0446\u0438\u0438")),o("div",A,[(u(!0),n(B,null,w(e.workstations,a=>(u(),d(_,{class:"q-ma-sm bg-secondary text-white",style:{width:"30%"},key:a.uuid},{default:t(()=>[s(c,null,{default:t(()=>[o("div",I,Q(a.name),1)]),_:2},1024),s(c,null,{default:t(()=>[f(" \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 ")]),_:1}),s(p,{dark:""}),s(C,null,{default:t(()=>[s(g,{flat:"",onClick:M=>e.toStationInfo(a.name)},{default:t(()=>[f("\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])])]),_:1})}var H=h(S,[["render",N]]);export{H as default};
