"use strict";var c=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var T=(n,t)=>{for(var i in t)c(n,i,{get:t[i],enumerable:!0})},w=(n,t,i,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of y(t))!S.call(n,a)&&a!==i&&c(n,a,{get:()=>t[a],enumerable:!(s=g(t,a))||s.enumerable});return n};var I=n=>w(c({},"__esModule",{value:!0}),n);var b={};T(b,{default:()=>h});module.exports=I(b);var m=require("@raycast/api");var e=require("@raycast/api"),A=require("@raycast/api"),p=require("react"),o=require("react/jsx-runtime"),L=["net.kovidgoyal.kitty","org.alacritty","com.googlecode.iterm2","com.apple.Terminal","dev.warp.Warp-Stable","com.github.wez.wezterm"],u=({setIsTerminalSetup:n})=>{let[t,i]=(0,p.useState)(),[s,a]=(0,p.useState)(!0),{pop:f}=(0,e.useNavigation)();return(0,p.useEffect)(()=>{(async()=>{a(!0);let r=(await(0,e.getApplications)()).filter(l=>L.includes(l.bundleId||""));i(r),a(!1)})()},[]),(0,o.jsxs)(e.Form,{enableDrafts:!0,isLoading:s,navigationTitle:"Select Terminal App",actions:(0,o.jsx)(e.ActionPanel,{children:(0,o.jsx)(e.Action.SubmitForm,{title:"Submit Terminal App Name",onSubmit:async r=>{A.LocalStorage.setItem("terminalAppBundleId",r.terminalAppBundleId);let l=await(0,e.showToast)({style:e.Toast.Style.Animated,title:"Setup Terminal"});l.style=e.Toast.Style.Success,l.message=`Terminal ${r.terminalAppBundleId} is setup successfully for tmux sessioner`,n&&n(!0),f()}})}),children:[(0,o.jsx)(e.Form.Description,{text:"Choose your default terminal App"}),(0,o.jsx)(e.Form.Description,{text:"When switch to session, it will open the session in the selected terminal app."}),(0,o.jsx)(e.Form.Dropdown,{id:"terminalAppBundleId",isLoading:s,children:t?.map((r,l)=>(0,o.jsx)(e.Form.Dropdown.Item,{value:r.bundleId||"",title:r.name,icon:{fileIcon:r.path}},l))})]})};var d=require("react/jsx-runtime");function h({launchContext:n}){let t=n?.launcherCommand;return t?(0,d.jsx)(u,{setIsTerminalSetup:i=>{i&&(0,m.launchCommand)({type:m.LaunchType.UserInitiated,name:t,extensionName:"tmux-sessioner",ownerOrAuthorName:"louishuyng"})}}):(0,d.jsx)(u,{})}