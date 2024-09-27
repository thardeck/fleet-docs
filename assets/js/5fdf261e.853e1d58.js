"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8042],{5680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>d});var n=r(6540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),f=c(r),u=l,d=f["".concat(s,".").concat(u)]||f[u]||p[u]||a;return r?n.createElement(d,i(i({ref:t},g),{},{components:r})):n.createElement(d,i({ref:t},g))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[f]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(8168),l=(r(6540),r(5680));const a={title:"",sidebar_label:"fleet-agent register"},i=void 0,o={unversionedId:"cli/fleet-agent/fleet-agent_register",id:"cli/fleet-agent/fleet-agent_register",title:"",description:"fleet-agent register",source:"@site/docs/cli/fleet-agent/fleet-agent_register.md",sourceDirName:"cli/fleet-agent",slug:"/cli/fleet-agent/fleet-agent_register",permalink:"/cli/fleet-agent/fleet-agent_register",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/cli/fleet-agent/fleet-agent_register.md",tags:[],version:"current",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{title:"",sidebar_label:"fleet-agent register"},sidebar:"docs",previous:{title:"fleet-agent clusterstatus",permalink:"/cli/fleet-agent/fleet-agent_clusterstatus"},next:{title:"fleet",permalink:"/cli/fleet-cli/fleet"}},s={},c=[{value:"fleet-agent register",id:"fleet-agent-register",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],g={toc:c},f="wrapper";function p(e){let{components:t,...r}=e;return(0,l.yg)(f,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"fleet-agent-register"},"fleet-agent register"),(0,l.yg)("p",null,"Register agent with an upstream cluster"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"fleet-agent register [flags]\n")),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"      --debug               Turn on debug logging\n      --debug-level int     If debugging is enabled, set klog -v=X\n  -h, --help                help for register\n      --kubeconfig string   kubeconfig file for agent's cluster\n      --namespace string    system namespace is the namespace, the agent runs in, e.g. cattle-fleet-system\n")),(0,l.yg)("h3",{id:"see-also"},"SEE ALSO"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./fleet-agent"},"fleet-agent"),"\t -")))}p.isMDXComponent=!0}}]);