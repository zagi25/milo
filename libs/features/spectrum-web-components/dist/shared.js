/* eslint-disable */
/* Generated by Milo */

var W=Object.create;var S=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var J=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Q=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of X(t))!z.call(e,s)&&s!==i&&S(e,s,{get:()=>t[s],enumerable:!(n=G(t,s))||n.enumerable});return e};var Z=(e,t,i)=>(i=e!=null?W(Y(e)):{},Q(t||!e||!e.__esModule?S(i,"default",{value:e,enumerable:!0}):i,e));var D=J((C,k)=>{(function(e,t){typeof C=="object"&&typeof k<"u"?t():typeof define=="function"&&define.amd?define(t):t()})(C,function(){"use strict";function e(i){var n=!0,s=!1,o=null,r={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function u(a){return!!(a&&a!==document&&a.nodeName!=="HTML"&&a.nodeName!=="BODY"&&"classList"in a&&"contains"in a.classList)}function l(a){var B=a.type,N=a.tagName;return!!(N==="INPUT"&&r[B]&&!a.readOnly||N==="TEXTAREA"&&!a.readOnly||a.isContentEditable)}function c(a){a.classList.contains("focus-visible")||(a.classList.add("focus-visible"),a.setAttribute("data-focus-visible-added",""))}function h(a){a.hasAttribute("data-focus-visible-added")&&(a.classList.remove("focus-visible"),a.removeAttribute("data-focus-visible-added"))}function f(a){a.metaKey||a.altKey||a.ctrlKey||(u(i.activeElement)&&c(i.activeElement),n=!0)}function E(a){n=!1}function q(a){u(a.target)&&(n||l(a.target))&&c(a.target)}function _(a){u(a.target)&&(a.target.classList.contains("focus-visible")||a.target.hasAttribute("data-focus-visible-added"))&&(s=!0,window.clearTimeout(o),o=window.setTimeout(function(){s=!1},100),h(a.target))}function H(a){document.visibilityState==="hidden"&&(s&&(n=!0),O())}function O(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function K(){document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d)}function d(a){a.target.nodeName&&a.target.nodeName.toLowerCase()==="html"||(n=!1,K())}document.addEventListener("keydown",f,!0),document.addEventListener("mousedown",E,!0),document.addEventListener("pointerdown",E,!0),document.addEventListener("touchstart",E,!0),document.addEventListener("visibilitychange",H,!0),O(),i.addEventListener("focus",q,!0),i.addEventListener("blur",_,!0),i.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&i.host?i.host.setAttribute("data-js-focus-visible",""):i.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window<"u"&&typeof document<"u"){window.applyFocusVisiblePolyfill=e;var t;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch{t=document.createEvent("CustomEvent"),t.initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}typeof document<"u"&&e(document)})});var I=["button","[focusable]","[href]","input","label","select","textarea","[tabindex]"],M=':not([tabindex="-1"])',w=I.join(`${M}, `)+M,pt=I.join(", ");var gt=e=>e.querySelector(w),xt=e=>e.assignedElements().find(t=>t.matches(w));var A=!0;try{document.body.querySelector(":focus-visible")}catch{A=!1,Promise.resolve().then(()=>Z(D(),1))}var $=e=>{var t;let i=o=>{if(o.shadowRoot==null||o.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(o.shadowRoot),o.manageAutoFocus&&o.manageAutoFocus();else{let r=()=>{self.applyFocusVisiblePolyfill&&o.shadowRoot&&self.applyFocusVisiblePolyfill(o.shadowRoot),o.manageAutoFocus&&o.manageAutoFocus()};return self.addEventListener("focus-visible-polyfill-ready",r,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",r)}}return()=>{}},n=Symbol("endPolyfillCoordination");class s extends e{constructor(){super(...arguments),this[t]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),A||requestAnimationFrame(()=>{this[n]==null&&(this[n]=i(this))})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),A||requestAnimationFrame(()=>{this[n]!=null&&(this[n](),this[n]=null)})}}return t=n,s};import{SpectrumElement as nt}from"/libs/features/spectrum-web-components/dist/base.js";import{property as T}from"/libs/features/spectrum-web-components/dist/base.js";var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,L=(e,t,i,n)=>{for(var s=n>1?void 0:n?et(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&tt(t,i,s),s};function j(){return new Promise(e=>requestAnimationFrame(()=>e()))}var v=class extends $(nt){constructor(){super(...arguments),this.disabled=!1,this.autofocus=!1,this._tabIndex=0,this.manipulatingTabindex=!1,this._recentlyConnected=!1}get tabIndex(){if(this.focusElement===this){let i=this.hasAttribute("tabindex")?Number(this.getAttribute("tabindex")):NaN;return isNaN(i)?-1:i}let t=parseFloat(this.hasAttribute("tabindex")&&this.getAttribute("tabindex")||"0");return this.disabled||t<0?-1:this.focusElement?this.focusElement.tabIndex:t}set tabIndex(t){if(this.manipulatingTabindex){this.manipulatingTabindex=!1;return}if(this.focusElement===this){if(t!==this._tabIndex){this._tabIndex=t;let i=this.disabled?"-1":""+t;this.manipulatingTabindex=!0,this.setAttribute("tabindex",i)}return}if(t===-1?this.addEventListener("pointerdown",this.onPointerdownManagementOfTabIndex):(this.manipulatingTabindex=!0,this.removeEventListener("pointerdown",this.onPointerdownManagementOfTabIndex)),t===-1||this.disabled){this.setAttribute("tabindex","-1"),this.removeAttribute("focusable"),t!==-1&&this.manageFocusElementTabindex(t);return}this.setAttribute("focusable",""),this.hasAttribute("tabindex")?this.removeAttribute("tabindex"):this.manipulatingTabindex=!1,this.manageFocusElementTabindex(t)}onPointerdownManagementOfTabIndex(){this.tabIndex===-1&&setTimeout(()=>{this.tabIndex=0,this.focus({preventScroll:!0}),this.tabIndex=-1})}async manageFocusElementTabindex(t){this.focusElement||await this.updateComplete,t===null?this.focusElement.removeAttribute("tabindex"):this.focusElement.tabIndex=t}get focusElement(){throw new Error("Must implement focusElement getter!")}focus(t){this.disabled||!this.focusElement||(this.focusElement!==this?this.focusElement.focus(t):HTMLElement.prototype.focus.apply(this,[t]))}blur(){let t=this.focusElement||this;t!==this?t.blur():HTMLElement.prototype.blur.apply(this)}click(){if(this.disabled)return;let t=this.focusElement||this;t!==this?t.click():HTMLElement.prototype.click.apply(this)}manageAutoFocus(){this.autofocus&&(this.dispatchEvent(new KeyboardEvent("keydown",{code:"Tab"})),this.focusElement.focus())}firstUpdated(t){super.firstUpdated(t),(!this.hasAttribute("tabindex")||this.getAttribute("tabindex")!=="-1")&&this.setAttribute("focusable","")}update(t){t.has("disabled")&&this.handleDisabledChanged(this.disabled,t.get("disabled")),super.update(t)}updated(t){super.updated(t),t.has("disabled")&&this.disabled&&this.blur()}async handleDisabledChanged(t,i){let n=()=>this.focusElement!==this&&typeof this.focusElement.disabled<"u";t?(this.manipulatingTabindex=!0,this.setAttribute("tabindex","-1"),await this.updateComplete,n()?this.focusElement.disabled=!0:this.setAttribute("aria-disabled","true")):i&&(this.manipulatingTabindex=!0,this.focusElement===this?this.setAttribute("tabindex",""+this._tabIndex):this.removeAttribute("tabindex"),await this.updateComplete,n()?this.focusElement.disabled=!1:this.removeAttribute("aria-disabled"))}async getUpdateComplete(){let t=await super.getUpdateComplete();return this._recentlyConnected&&(this._recentlyConnected=!1,await j(),await j()),t}connectedCallback(){super.connectedCallback(),this._recentlyConnected=!0,this.updateComplete.then(()=>{this.manageAutoFocus()})}};L([T({type:Boolean,reflect:!0})],v.prototype,"disabled",2),L([T({type:Boolean})],v.prototype,"autofocus",2),L([T({type:Number})],v.prototype,"tabIndex",1);var Pt=e=>e.getRootNode().activeElement;import{html as U}from"/libs/features/spectrum-web-components/dist/base.js";import{property as g}from"/libs/features/spectrum-web-components/dist/base.js";import{ifDefined as m}from"/libs/features/spectrum-web-components/dist/base.js";var it=Object.defineProperty,st=Object.getOwnPropertyDescriptor,y=(e,t,i,n)=>{for(var s=n>1?void 0:n?st(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&it(t,i,s),s};function Mt(e){class t extends e{renderAnchor({id:n,className:s,ariaHidden:o,labelledby:r,tabindex:u,anchorContent:l=U`<slot></slot>`}){return U`<a
                    id=${n}
                    class=${m(s)}
                    href=${m(this.href)}
                    download=${m(this.download)}
                    target=${m(this.target)}
                    aria-label=${m(this.label)}
                    aria-labelledby=${m(r)}
                    aria-hidden=${m(o?"true":void 0)}
                    tabindex=${m(u)}
                    rel=${m(this.rel)}
                >${l}</a>`}}return y([g({reflect:!0})],t.prototype,"download",2),y([g()],t.prototype,"label",2),y([g({reflect:!0})],t.prototype,"href",2),y([g({reflect:!0})],t.prototype,"target",2),y([g({reflect:!0})],t.prototype,"rel",2),t}var b=class{constructor(t,{target:i,config:n,callback:s,skipInitial:o}){this.t=new Set,this.o=!1,this.i=!1,this.h=t,i!==null&&this.t.add(i??t),this.l=n,this.o=o??this.o,this.callback=s,window.MutationObserver?(this.u=new MutationObserver(r=>{this.handleChanges(r),this.h.requestUpdate()}),t.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(t){this.value=this.callback?.(t,this.u)}hostConnected(){for(let t of this.t)this.observe(t)}hostDisconnected(){this.disconnect()}async hostUpdated(){let t=this.u.takeRecords();(t.length||!this.o&&this.i)&&this.handleChanges(t),this.i=!1}observe(t){this.t.add(t),this.u.observe(t,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}};var p=Symbol("slotContentIsPresent");function $t(e,t){var i;let n=Array.isArray(t)?t:[t];class s extends e{constructor(...r){super(r),this[i]=new Map,this.managePresenceObservedSlot=()=>{let u=!1;n.forEach(l=>{let c=!!this.querySelector(`:scope > ${l}`),h=this[p].get(l)||!1;u=u||h!==c,this[p].set(l,!!this.querySelector(`:scope > ${l}`))}),u&&this.updateComplete.then(()=>{this.requestUpdate()})},new b(this,{config:{childList:!0,subtree:!0},callback:()=>{this.managePresenceObservedSlot()}}),this.managePresenceObservedSlot()}get slotContentIsPresent(){if(n.length===1)return this[p].get(n[0])||!1;throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.")}getSlotContentPresence(r){if(this[p].has(r))return this[p].get(r)||!1;throw new Error(`The provided selector \`${r}\` is not being observed.`)}}return i=p,s}import{property as at,queryAssignedNodes as ut}from"/libs/features/spectrum-web-components/dist/base.js";var ot=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,V=(e,t,i,n)=>{for(var s=n>1?void 0:n?rt(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&ot(t,i,s),s},P=Symbol("assignedNodes");function Rt(e,t,i=[]){var n;let s=r=>u=>r.matches(u);class o extends e{constructor(...u){super(u),this.slotHasContent=!1,new b(this,{config:{characterData:!0,subtree:!0},callback:l=>{for(let c of l)if(c.type==="characterData"){this.manageTextObservedSlot();return}}})}manageTextObservedSlot(){if(!this[P])return;let u=[...this[P]].filter(l=>{let c=l;return c.tagName?!i.some(s(c)):c.textContent?c.textContent.trim():!1});this.slotHasContent=u.length>0}update(u){if(!this.hasUpdated){let{childNodes:l}=this,c=[...l].filter(h=>{let f=h;return f.tagName?i.some(s(f))?!1:t?f.getAttribute("slot")===t:!f.hasAttribute("slot"):f.textContent?f.textContent.trim():!1});this.slotHasContent=c.length>0}super.update(u)}firstUpdated(u){super.firstUpdated(u),this.updateComplete.then(()=>{this.manageTextObservedSlot()})}}return n=P,V([at({type:Boolean,attribute:!1})],o.prototype,"slotHasContent",2),V([ut({slot:t,flatten:!0})],o.prototype,n,2),o}function x(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.userAgent):!1}function F(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):!1}function R(){return F(/^Mac/)}function dt(){return F(/^iPhone/)}function lt(){return F(/^iPad/)||R()&&navigator.maxTouchPoints>1}function ct(){return dt()||lt()}function _t(){return R()||ct()}function Ht(){return x(/AppleWebKit/)&&!ht()}function ht(){return x(/Chrome/)}function Kt(){return x(/Firefox/)&&!ft()}function ft(){return x(/Seamonkey/)}function Bt(){return x(/Android/)}function mt(e,t,i=[]){for(let n=0;n<t.length;++n){let s=t[n],o=e[n],r=o.parentElement||o.getRootNode();i[n]&&i[n](s),r&&r!==o&&r.replaceChild(s,o),delete e[n]}return t}var Gt=(e,t,{position:i,prepareCallback:n}={position:"beforeend"})=>{let{length:s}=e;if(s===0)return()=>e;let o=1,r=0;(i==="afterbegin"||i==="afterend")&&(o=-1,r=s-1);let u=new Array(s),l=new Array(s),c=document.createComment("placeholder for reparented element");do{let h=e[r];n&&(l[r]=n(h)),u[r]=c.cloneNode();let f=h.parentElement||h.getRootNode();f&&f!==h&&f.replaceChild(u[r],h),t.insertAdjacentElement(i,h),r+=o}while(--s>0);return function(){return mt(u,e,l)}};var Yt=(e,t)=>{if(e)return null;let i=t.assignedNodes().reduce((n,s)=>s.textContent?n+s.textContent:n,"");return i?i.trim():null};export{$ as FocusVisiblePolyfillMixin,v as Focusable,Mt as LikeAnchor,$t as ObserveSlotPresence,Rt as ObserveSlotText,gt as firstFocusableIn,xt as firstFocusableSlottedIn,pt as focusableSelector,Pt as getActiveElement,Yt as getLabelFromSlot,Bt as isAndroid,_t as isAppleDevice,ht as isChrome,Kt as isFirefox,ct as isIOS,lt as isIPad,dt as isIPhone,R as isMac,ft as isSeamonkey,Ht as isWebKit,Gt as reparentChildren,w as userFocusableSelector};