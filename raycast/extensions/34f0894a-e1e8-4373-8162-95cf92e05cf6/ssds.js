"use strict";var a=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var m=(o,t)=>{for(var s in t)a(o,s,{get:t[s],enumerable:!0})},f=(o,t,s,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of u(t))!h.call(o,i)&&i!==s&&a(o,i,{get:()=>t[i],enumerable:!(r=p(t,i))||r.enumerable});return o};var d=o=>f(a({},"__esModule",{value:!0}),o);var g={};m(g,{default:()=>y});module.exports=d(g);var e=require("@raycast/api");var n=require("@raycast/api"),c="https://shottr.cc";async function w(){return(await(0,n.getApplications)()).some(({bundleId:t})=>t==="cc.ffitch.shottr")}function l(o){return async function(t){if(await w())return o(t);{let s={style:n.Toast.Style.Failure,title:"Shottr is not installed.",message:`Install it from: ${c}`,primaryAction:{title:`Go to ${c}`,onAction:r=>{(0,n.open)(c),r.hide()}}};return await(0,n.showToast)(s),null}}}var y=l(async function(o){let t="shottr://grab/delayed";await(0,e.closeMainWindow)(),(0,e.open)(t+"?t="+o?.arguments?.delay||"3")});