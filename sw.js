if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/focus-visible-legacy-b3e947fe.js",revision:null},{url:"assets/hardware-back-button-77fd2980.js",revision:null},{url:"assets/hardware-back-button-legacy-7391e573.js",revision:null},{url:"assets/index-5a665f8b.js",revision:null},{url:"assets/index-bf9a5b0b.css",revision:null},{url:"assets/index-legacy-20cf0394.js",revision:null},{url:"assets/index9-dc53b875.js",revision:null},{url:"assets/index9-legacy-e5aa6877.js",revision:null},{url:"assets/input-shims-ee809178.js",revision:null},{url:"assets/input-shims-legacy-9c982b9e.js",revision:null},{url:"assets/ios.transition-e4a8d0c9.js",revision:null},{url:"assets/ios.transition-legacy-8b7d3174.js",revision:null},{url:"assets/keyboard2-d636b923.js",revision:null},{url:"assets/keyboard2-legacy-faf16d33.js",revision:null},{url:"assets/md.transition-ec13aa7b.js",revision:null},{url:"assets/md.transition-legacy-4c99422b.js",revision:null},{url:"assets/polyfills-legacy-8e9db208.js",revision:null},{url:"assets/status-tap-82e9e656.js",revision:null},{url:"assets/status-tap-legacy-5de45bfe.js",revision:null},{url:"assets/swipe-back-8bf2c8c2.js",revision:null},{url:"assets/swipe-back-legacy-83339c56.js",revision:null},{url:"index.html",revision:"9e22b1cbe00a4e4f63e82d325ded30aa"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"b01f08b608c4c8dbbdaa405e11f3f87f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
