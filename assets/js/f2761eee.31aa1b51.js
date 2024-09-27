"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8652],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),y=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},p=function(e){var t=y(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=y(n),m=a,c=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(c,g(g({ref:t},p),{},{components:n})):r.createElement(c,g({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,g=new Array(l);g[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,g[1]=o;for(var y=2;y<l;y++)g[y]=n[y];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var r=n(8168),a=(n(6540),n(5680));const l={},g="List of Deployed Resources",o={unversionedId:"ref-resources",id:"version-0.9/ref-resources",title:"List of Deployed Resources",description:"After installing Fleet in Rancher these resources are created in the upstream cluster.",source:"@site/versioned_docs/version-0.9/ref-resources.md",sourceDirName:".",slug:"/ref-resources",permalink:"/0.9/ref-resources",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/ref-resources.md",tags:[],version:"0.9",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Configuration",permalink:"/0.9/ref-configuration"},next:{title:"Custom Resources Spec",permalink:"/0.9/ref-crds"}},i={},y=[],p={toc:y},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"list-of-deployed-resources"},"List of Deployed Resources"),(0,a.yg)("p",null,"After installing Fleet in Rancher these resources are created in the upstream cluster."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Namespace"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"From Helm, intial setup:"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ClusterRole"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ClusterRole"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ClusterRoleBinding"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ClusterRoleBinding"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob-binding"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Deployment"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Deployment"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Role"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Role"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"RoleBinding"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"RoleBinding"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Service"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ServiceAccount"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-controller"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ServiceAccount"),(0,a.yg)("td",{parentName:"tr",align:null},"gitjob"),(0,a.yg)("td",{parentName:"tr",align:null},"cattle-fleet-system")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Generated:"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusters.fleet.cattle.io"),(0,a.yg)("td",{parentName:"tr",align:null},"local"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusters.provisioning.cattle.io"),(0,a.yg)("td",{parentName:"tr",align:null},"local"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusters.management.cattle.io"),(0,a.yg)("td",{parentName:"tr",align:null},"local"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ClusterGroup"),(0,a.yg)("td",{parentName:"tr",align:null},"default"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Bundle"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-agent-local"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-local")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"For each registered cluster:"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusters.provisioning.cattle.io"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"by default fleet-default")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusters.management.cattle.io"),(0,a.yg)("td",{parentName:"tr",align:null},"generated"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clusters.fleet.cattle.io"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-default"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Bundle"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-default"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"BundleDeployment"),(0,a.yg)("td",{parentName:"tr",align:null},"cluster-fleet-local-local-ID"),(0,a.yg)("td",{parentName:"tr",align:null},"fleet-agent-local")))),(0,a.yg)("p",null,"Also see ","[namespaces]"))}d.isMDXComponent=!0}}]);