import{S as n,T as r}from"./index.91eefe89.js";const o=n("settings",{state:()=>({settings:[],ipAddresses:[]}),getters:{version:t=>{const e=t.settings.filter(s=>s.name==="version");return e.length===0?"":e[0].value},domain:t=>{const e=t.settings.filter(s=>s.name==="domain");return e.length===0?"":e[0].value},port:t=>{const e=t.settings.filter(s=>s.name==="port");return e.length===0?"":e[0].value},ip:t=>t.ipAddresses.join(", ").replace('"',"")},actions:{async getSettings(){try{const t=await r.fetch("settings");t.error||(this.settings=t.result||[])}catch{}return await this.getIpAddresses(),this.settings},async getIpAddresses(){try{const t=await r.fetch("settings/ip");t.error?console.log(t.error):this.ipAddresses=t.result||[]}catch{}},async updateSettings(t){for(const e of t)await r.update("settings",{record:e});this.settings=t}}});export{o as u};