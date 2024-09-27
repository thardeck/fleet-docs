"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[3390],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const i={},o="Manager Initiated",c={unversionedId:"manager-initiated",id:"version-0.4/manager-initiated",title:"Manager Initiated",description:"Refer to the overview page for a background information on the manager initiated registration style.",source:"@site/versioned_docs/version-0.4/manager-initiated.md",sourceDirName:".",slug:"/manager-initiated",permalink:"/0.4/manager-initiated",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/manager-initiated.md",tags:[],version:"0.4",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Agent Initiated",permalink:"/0.4/agent-initiated"},next:{title:"Cluster Groups",permalink:"/0.4/cluster-group"}},l={},s=[{value:"Kubeconfig Secret",id:"kubeconfig-secret",level:2},{value:"Example",id:"example",level:2},{value:"Kubeconfig Secret",id:"kubeconfig-secret-1",level:3},{value:"Cluster",id:"cluster",level:3}],g={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"manager-initiated"},"Manager Initiated"),(0,a.yg)("p",null,"Refer to the ",(0,a.yg)("a",{parentName:"p",href:"/0.4/cluster-overview#agent-initiated-registration"},"overview page")," for a background information on the manager initiated registration style."),(0,a.yg)("h2",{id:"kubeconfig-secret"},"Kubeconfig Secret"),(0,a.yg)("p",null,"The manager initiated registration flow is accomplished by creating a\n",(0,a.yg)("inlineCode",{parentName:"p"},"Cluster")," resource in the Fleet Manager that refers to a Kubernetes\n",(0,a.yg)("inlineCode",{parentName:"p"},"Secret")," containing a valid kubeconfig file in the data field called ",(0,a.yg)("inlineCode",{parentName:"p"},"value"),"."),(0,a.yg)("p",null,"The format of this secret is intended to match the ",(0,a.yg)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/developer/architecture/controllers/cluster.html#secrets"},"format"),"\nof the kubeconfig\nsecret used in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api"},"cluster-api"),".\nThis means you can use ",(0,a.yg)("inlineCode",{parentName:"p"},"cluster-api")," to create a cluster that is dynamically\nregistered with Fleet."),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("h3",{id:"kubeconfig-secret-1"},"Kubeconfig Secret"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: Secret\napiVersion: v1\nmetadata:\n  name: my-cluster-kubeconfig\n  namespace: clusters\ndata:\n  value: YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIHNlcnZlcjogaHR0cHM6Ly9leGFtcGxlLmNvbTo2NDQzCiAgbmFtZTogY2x1c3Rlcgpjb250ZXh0czoKLSBjb250ZXh0OgogICAgY2x1c3RlcjogY2x1c3RlcgogICAgdXNlcjogdXNlcgogIG5hbWU6IGRlZmF1bHQKY3VycmVudC1jb250ZXh0OiBkZWZhdWx0CmtpbmQ6IENvbmZpZwpwcmVmZXJlbmNlczoge30KdXNlcnM6Ci0gbmFtZTogdXNlcgogIHVzZXI6CiAgICB0b2tlbjogc29tZXRoaW5nCg==\n")),(0,a.yg)("h3",{id:"cluster"},"Cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: fleet.cattle.io/v1alpha1\nkind: Cluster\nmetadata:\n  name: my-cluster\n  namespace: clusters\n  labels:\n    demo: "true"\n    env: dev\nspec:\n  kubeConfigSecret: my-cluster-kubeconfig\n')))}p.isMDXComponent=!0}}]);