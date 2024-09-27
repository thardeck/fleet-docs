"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4665],{5680:(e,t,r)=>{r.d(t,{xA:()=>i,yg:()=>g});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(r),y=a,g=p["".concat(u,".").concat(y)]||p[y]||c[y]||l;return r?n.createElement(g,s(s({ref:t},i),{},{components:r})):n.createElement(g,s({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=y;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<l;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=r(8168),a=(r(6540),r(5680));const l={},s="Cluster and Bundle State",o={unversionedId:"cluster-bundles-state",id:"version-0.10/cluster-bundles-state",title:"Cluster and Bundle State",description:"Clusters and Bundles have different states in each phase of applying Bundles.",source:"@site/versioned_docs/version-0.10/cluster-bundles-state.md",sourceDirName:".",slug:"/cluster-bundles-state",permalink:"/0.10/cluster-bundles-state",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.10/cluster-bundles-state.md",tags:[],version:"0.10",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{},sidebar:"docs",previous:{title:"fleetcontroller cleanup",permalink:"/0.10/cli/fleet-controller/fleetcontroller_cleanup"},next:{title:"Resources List",permalink:"/0.10/resource-counts-and-resources-list"}},u={},d=[{value:"Bundles",id:"bundles",level:2},{value:"Clusters",id:"clusters",level:2}],i={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"cluster-and-bundle-state"},"Cluster and Bundle State"),(0,a.yg)("p",null,"Clusters and Bundles have different states in each phase of applying Bundles."),(0,a.yg)("h2",{id:"bundles"},"Bundles"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Ready"),": Bundles have been deployed and all resources are ready."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NotReady"),": Bundles have been deployed and some resources are not ready."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"WaitApplied"),": Bundles have been synced from Fleet controller and downstream cluster, but are waiting to be deployed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"ErrApplied"),": Bundles have been synced from the Fleet controller and the downstream cluster, but there were some errors when deploying the Bundle."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"OutOfSync"),": Bundles have been synced from Fleet controller, but downstream agent hasn't synced the change yet."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Pending"),": Bundles are being processed by Fleet controller."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Modified"),": Bundles have been deployed and all resources are ready, but there are some changes that were not made from the Git Repository."),(0,a.yg)("h2",{id:"clusters"},"Clusters"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"WaitCheckIn"),": Waiting for agent to report registration information and cluster status back."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NotReady"),": There are bundles in this cluster that are in NotReady state."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"WaitApplied"),": There are bundles in this cluster that are in WaitApplied state."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"ErrApplied"),": There are bundles in this cluster that are in ErrApplied state."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"OutOfSync"),": There are bundles in this cluster that are in OutOfSync state."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Pending"),": There are bundles in this cluster that are in Pending state."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Modified"),": There are bundles in this cluster that are in Modified state."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Ready"),": Bundles in this cluster have been deployed and all resources are ready."))}c.isMDXComponent=!0}}]);