"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[4537],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||l;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(8168),o=(n(6540),n(5680));const l={},a="Architecture",i={unversionedId:"architecture",id:"version-0.10/architecture",title:"Architecture",description:"Fleet has two primary components.  The Fleet controller and the cluster agents.  These",source:"@site/versioned_docs/version-0.10/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/0.10/architecture",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.10/architecture.md",tags:[],version:"0.10",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Uninstall",permalink:"/0.10/uninstall"},next:{title:"Core Concepts",permalink:"/0.10/concepts"}},s={},c=[{value:"Fleet Controller",id:"fleet-controller",level:2},{value:"Cluster Agents",id:"cluster-agents",level:2},{value:"Security",id:"security",level:2},{value:"Component Overview",id:"component-overview",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...l}=e;return(0,o.yg)(p,(0,r.A)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"architecture"},"Architecture"),(0,o.yg)("p",null,"Fleet has two primary components.  The Fleet controller and the cluster agents.  These\ncomponents work in a two-stage pull model.  The Fleet controller will pull from git and the\ncluster agents will pull from the Fleet controller."),(0,o.yg)("h2",{id:"fleet-controller"},"Fleet Controller"),(0,o.yg)("p",null,"The Fleet controller is a set of Kubernetes controllers running in any standard Kubernetes\ncluster.  The only API exposed by the Fleet controller is the Kubernetes API, there is no\ncustom API for the fleet controller."),(0,o.yg)("h2",{id:"cluster-agents"},"Cluster Agents"),(0,o.yg)("p",null,"One cluster agent runs in each cluster and is responsible for talking to the Fleet controller.\nThe only communication from cluster to Fleet controller is by this agent and all communication\ngoes from the managed cluster to the Fleet controller. The fleet manager does not initiate\nconnections to downstream clusters. This means managed clusters can run in private networks and behind\nNATs. The only requirement is the cluster agent needs to be able to communicate with the\nKubernetes API of the cluster running the Fleet controller. The one exception to this is if you use\nthe ",(0,o.yg)("a",{parentName:"p",href:"/0.10/cluster-registration#manager-initiated"},"manager initiated")," cluster registration flow.  This is not required, but\nan optional pattern."),(0,o.yg)("p",null,'The cluster agents are not assumed to have an "always on" connection.  They will resume operation as\nsoon as they can connect. Future enhancements will probably add the ability to schedule times of when\nthe agent checks in, as it stands right now they will always attempt to connect.'),(0,o.yg)("h2",{id:"security"},"Security"),(0,o.yg)("p",null,'The Fleet controller dynamically creates service accounts, manages their RBAC and then gives the\ntokens to the downstream clusters. Clusters are registered by optionally expiring cluster registration tokens.\nThe cluster registration token is used only during the registration process to generate a credential specific\nto that cluster. After the cluster credential is established the cluster "forgets" the cluster registration\ntoken.'),(0,o.yg)("p",null,"The service accounts given to the clusters only have privileges to list ",(0,o.yg)("inlineCode",{parentName:"p"},"BundleDeployment")," in the namespace created\nspecifically for that cluster. It can also update the ",(0,o.yg)("inlineCode",{parentName:"p"},"status")," subresource of ",(0,o.yg)("inlineCode",{parentName:"p"},"BundleDeployment")," and the ",(0,o.yg)("inlineCode",{parentName:"p"},"status"),"\nsubresource of it's ",(0,o.yg)("inlineCode",{parentName:"p"},"Cluster")," resource."),(0,o.yg)("h2",{id:"component-overview"},"Component Overview"),(0,o.yg)("p",null,"An overview of the components and how they interact on a high level."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Components",src:n(8120).A,width:"1319",height:"1281"})))}h.isMDXComponent=!0},8120:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/FleetComponents-2746fa09558c69f438948ab9bc659edb.svg"}}]);