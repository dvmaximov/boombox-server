import{S as u,K as r,T as s}from"./index.1a710307.js";import{j as n}from"./message.store.05995818.js";import{u as i}from"./settings.store.efbfb0bd.js";const a=n(),m=u("audio",{state:()=>({audioList:[]}),getters:{audioNames:t=>t.audioList.reduce((o,e)=>(o.push(e.name),o),[]),apiUrl:()=>{const t=i();return r(t),`${location.protocol}//${location.hostname}/api/audio/upload`},audioUrl:()=>{const t=i();return r(t),`${location.protocol}//${location.hostname}/audio`}},actions:{async getAudio(){try{const t=await s.fetch("audio");t.error||(this.audioList=t.result||[])}catch{}},async removeAudio(t){try{const o=await s.remove("audio",t);o.error?a.error(o.error):(await this.getAudio(),a.success(o.result))}catch{}},getAudioById(t){try{return this.audioList.find(e=>e.id===t)}catch{}},getAudioByName(t){return this.audioList.find(o=>o.name===t)}}});export{m as u};