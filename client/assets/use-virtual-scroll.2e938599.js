import{t as me,r as R,d as $,w as ae,am as pe,aQ as we,Z as he,ap as ze,o as ge,n as ye,h as A,j as be}from"./index.cad163f6.js";let X=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const n=document.createElement("div");Object.assign(n.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(n),e.scrollLeft=-1e3,X=e.scrollLeft>=0,e.remove()}const b=1e3,Me=["start","center","end","start-force","center-force","end-force"],ne=Array.prototype.filter,Ee=window.getComputedStyle(document.body).overflowAnchor===void 0?me:function(e,n){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const S=e.children||[];ne.call(S,g=>g.dataset&&g.dataset.qVsAnchor!==void 0).forEach(g=>{delete g.dataset.qVsAnchor});const u=S[n];u&&u.dataset&&(u.dataset.qVsAnchor="")}))};function B(e,n){return e+n}function K(e,n,S,u,g,s,V,M){const h=e===window?document.scrollingElement||document.documentElement:e,y=g===!0?"offsetWidth":"offsetHeight",o={scrollStart:0,scrollViewSize:-V-M,scrollMaxSize:0,offsetStart:-V,offsetEnd:-M};if(g===!0?(e===window?(o.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o.scrollViewSize+=document.documentElement.clientWidth):(o.scrollStart=h.scrollLeft,o.scrollViewSize+=h.clientWidth),o.scrollMaxSize=h.scrollWidth,s===!0&&(o.scrollStart=(X===!0?o.scrollMaxSize-o.scrollViewSize:0)-o.scrollStart)):(e===window?(o.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,o.scrollViewSize+=document.documentElement.clientHeight):(o.scrollStart=h.scrollTop,o.scrollViewSize+=h.clientHeight),o.scrollMaxSize=h.scrollHeight),S!==null)for(let v=S.previousElementSibling;v!==null;v=v.previousElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetStart+=v[y]);if(u!==null)for(let v=u.nextElementSibling;v!==null;v=v.nextElementSibling)v.classList.contains("q-virtual-scroll--skip")===!1&&(o.offsetEnd+=v[y]);if(n!==e){const v=h.getBoundingClientRect(),p=n.getBoundingClientRect();g===!0?(o.offsetStart+=p.left-v.left,o.offsetEnd-=p.width):(o.offsetStart+=p.top-v.top,o.offsetEnd-=p.height),e!==window&&(o.offsetStart+=o.scrollStart),o.offsetEnd+=o.scrollMaxSize-o.offsetStart}return o}function ce(e,n,S,u){n==="end"&&(n=(e===window?document.body:e)[S===!0?"scrollWidth":"scrollHeight"]),e===window?S===!0?(u===!0&&(n=(X===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-n),window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n):S===!0?(u===!0&&(n=(X===!0?e.scrollWidth-e.offsetWidth:0)-n),e.scrollLeft=n):e.scrollTop=n}function W(e,n,S,u){if(S>=u)return 0;const g=n.length,s=Math.floor(S/b),V=Math.floor((u-1)/b)+1;let M=e.slice(s,V).reduce(B,0);return S%b!==0&&(M-=n.slice(s*b,S).reduce(B,0)),u%b!==0&&u!==g&&(M-=n.slice(u,V*b).reduce(B,0)),M}const se={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Ve=Object.keys(se),xe={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...se};function qe({virtualScrollLength:e,getVirtualScrollTarget:n,getVirtualScrollEl:S,virtualScrollItemSizeComputed:u}){const g=be(),{props:s,emit:V,proxy:M}=g,{$q:h}=M;let y,o,v,p=[],f;const x=R(0),O=R(0),F=R({}),T=R(null),_=R(null),k=R(null),m=R({from:0,to:0}),D=$(()=>s.tableColspan!==void 0?s.tableColspan:100);u===void 0&&(u=$(()=>s.virtualScrollItemSize));const I=$(()=>u.value+";"+s.virtualScrollHorizontal),ue=$(()=>I.value+";"+s.virtualScrollSliceRatioBefore+";"+s.virtualScrollSliceRatioAfter);ae(ue,()=>{H()}),ae(I,Y);function Y(){U(o,!0)}function ee(t){U(t===void 0?o:t)}function j(t,l){const r=n();if(r==null||r.nodeType===8)return;const d=K(r,S(),T.value,_.value,s.virtualScrollHorizontal,h.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd);v!==d.scrollViewSize&&H(d.scrollViewSize),C(r,d,Math.min(e.value-1,Math.max(0,parseInt(t,10)||0)),0,Me.indexOf(l)>-1?l:o>-1&&t>o?"end":"start")}function fe(){const t=n();if(t==null||t.nodeType===8)return;const l=K(t,S(),T.value,_.value,s.virtualScrollHorizontal,h.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd),r=e.value-1,d=l.scrollMaxSize-l.offsetStart-l.offsetEnd-O.value;if(y===l.scrollStart)return;if(l.scrollMaxSize<=0){C(t,l,0,0);return}v!==l.scrollViewSize&&H(l.scrollViewSize),Q(m.value.from);const w=Math.floor(l.scrollMaxSize-Math.max(l.scrollViewSize,l.offsetEnd)-Math.min(f[r],l.scrollViewSize/2));if(w>0&&Math.ceil(l.scrollStart)>=w){C(t,l,r,l.scrollMaxSize-l.offsetEnd-p.reduce(B,0));return}let c=0,a=l.scrollStart-l.offsetStart,z=a;if(a<=d&&a+l.scrollViewSize>=x.value)a-=x.value,c=m.value.from,z=a;else for(let i=0;a>=p[i]&&c<r;i++)a-=p[i],c+=b;for(;a>0&&c<r;)a-=f[c],a>-l.scrollViewSize?(c++,z=a):z=f[c]+a;C(t,l,c,z)}function C(t,l,r,d,w){const c=typeof w=="string"&&w.indexOf("-force")>-1,a=c===!0?w.replace("-force",""):w,z=a!==void 0?a:"start";let i=Math.max(0,r-F.value[z]),E=i+F.value.total;E>e.value&&(E=e.value,i=Math.max(0,E-F.value.total)),y=l.scrollStart;const L=i!==m.value.from||E!==m.value.to;if(L===!1&&a===void 0){le(r);return}const{activeElement:re}=document,q=k.value;L===!0&&q!==null&&q!==re&&q.contains(re)===!0&&(q.addEventListener("focusout",te),setTimeout(()=>{q!==null&&q.removeEventListener("focusout",te)})),Ee(q,r-i);const Se=a!==void 0?f.slice(i,r).reduce(B,0):0;if(L===!0){const N=E>=m.value.from&&i<=m.value.to?m.value.to:E;m.value={from:i,to:N},x.value=W(p,f,0,i),O.value=W(p,f,E,e.value),requestAnimationFrame(()=>{m.value.to!==E&&y===l.scrollStart&&(m.value={from:m.value.from,to:E},O.value=W(p,f,E,e.value))})}requestAnimationFrame(()=>{if(y!==l.scrollStart)return;L===!0&&Q(i);const N=f.slice(i,r).reduce(B,0),P=N+l.offsetStart+x.value,ie=P+f[r];let G=P+d;if(a!==void 0){const ve=N-Se,J=l.scrollStart+ve;G=c!==!0&&J<P&&ie<J+l.scrollViewSize?J:a==="end"?ie-l.scrollViewSize:P-(a==="start"?0:Math.round((l.scrollViewSize-f[r])/2))}y=G,ce(t,G,s.virtualScrollHorizontal,h.lang.rtl),le(r)})}function Q(t){const l=k.value;if(l){const r=ne.call(l.children,i=>i.classList&&i.classList.contains("q-virtual-scroll--skip")===!1),d=r.length,w=s.virtualScrollHorizontal===!0?i=>i.getBoundingClientRect().width:i=>i.offsetHeight;let c=t,a,z;for(let i=0;i<d;){for(a=w(r[i]),i++;i<d&&r[i].classList.contains("q-virtual-scroll--with-prev")===!0;)a+=w(r[i]),i++;z=a-f[c],z!==0&&(f[c]+=z,p[Math.floor(c/b)]+=z),c++}}}function te(){k.value!==null&&k.value!==void 0&&k.value.focus()}function U(t,l){const r=1*u.value;(l===!0||Array.isArray(f)===!1)&&(f=[]);const d=f.length;f.length=e.value;for(let c=e.value-1;c>=d;c--)f[c]=r;const w=Math.floor((e.value-1)/b);p=[];for(let c=0;c<=w;c++){let a=0;const z=Math.min((c+1)*b,e.value);for(let i=c*b;i<z;i++)a+=f[i];p.push(a)}o=-1,y=void 0,x.value=W(p,f,0,m.value.from),O.value=W(p,f,m.value.to,e.value),t>=0?(Q(m.value.from),ye(()=>{j(t)})):Z()}function H(t){if(t===void 0&&typeof window!="undefined"){const a=n();a!=null&&a.nodeType!==8&&(t=K(a,S(),T.value,_.value,s.virtualScrollHorizontal,h.lang.rtl,s.virtualScrollStickySizeStart,s.virtualScrollStickySizeEnd).scrollViewSize)}v=t;const l=parseFloat(s.virtualScrollSliceRatioBefore)||0,r=parseFloat(s.virtualScrollSliceRatioAfter)||0,d=1+l+r,w=t===void 0||t<=0?1:Math.ceil(t/u.value),c=Math.max(1,w,Math.ceil((s.virtualScrollSliceSize>0?s.virtualScrollSliceSize:10)/d));F.value={total:Math.ceil(c*d),start:Math.ceil(c*l),center:Math.ceil(c*(.5+l)),end:Math.ceil(c*(1+l)),view:w}}function de(t,l){const r=s.virtualScrollHorizontal===!0?"width":"height",d={["--q-virtual-scroll-item-"+r]:u.value+"px"};return[t==="tbody"?A(t,{class:"q-virtual-scroll__padding",key:"before",ref:T},[A("tr",[A("td",{style:{[r]:`${x.value}px`,...d},colspan:D.value})])]):A(t,{class:"q-virtual-scroll__padding",key:"before",ref:T,style:{[r]:`${x.value}px`,...d}}),A(t,{class:"q-virtual-scroll__content",key:"content",ref:k,tabindex:-1},l.flat()),t==="tbody"?A(t,{class:"q-virtual-scroll__padding",key:"after",ref:_},[A("tr",[A("td",{style:{[r]:`${O.value}px`,...d},colspan:D.value})])]):A(t,{class:"q-virtual-scroll__padding",key:"after",ref:_,style:{[r]:`${O.value}px`,...d}})]}function le(t){o!==t&&(s.onVirtualScroll!==void 0&&V("virtualScroll",{index:t,from:m.value.from,to:m.value.to-1,direction:t<o?"decrease":"increase",ref:M}),o=t)}H();const Z=pe(fe,h.platform.is.ios===!0?120:35);we(()=>{H()});let oe=!1;return he(()=>{oe=!0}),ze(()=>{if(oe!==!0)return;const t=n();y!==void 0&&t!==void 0&&t!==null&&t.nodeType!==8?ce(t,y,s.virtualScrollHorizontal,h.lang.rtl):j(o)}),ge(()=>{Z.cancel()}),Object.assign(M,{scrollTo:j,reset:Y,refresh:ee}),{virtualScrollSliceRange:m,virtualScrollSliceSizeComputed:F,setVirtualScrollSize:H,onVirtualScrollEvt:Z,localResetVirtualScroll:U,padVirtualScroll:de,scrollTo:j,reset:Y,refresh:ee}}export{qe as a,Ve as c,X as r,xe as u};
