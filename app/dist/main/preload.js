(()=>{var e={58933:e=>{"use strict";e.exports=require("electron")}},r={};function n(o){var t=r[o];if(void 0!==t)return t.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,n),i.exports}var o,t,i;o=n(58933),t=o.contextBridge,i=o.ipcRenderer,t.exposeInMainWorld("electron",{ipcRenderer:{myPing:function(){i.send("ipc-example","ping")},on:function(e,r){["ipc-example"].includes(e)&&i.on(e,(function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];return r.apply(void 0,o)}))},once:function(e,r){["ipc-example"].includes(e)&&i.once(e,(function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];return r.apply(void 0,o)}))}}}),module.exports={}})();