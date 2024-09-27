"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[8351],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var l=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?l.createElement(y,o(o({ref:t},c),{},{components:n})):l.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(8168),a=(n(6540),n(5680));const r={},o="Examples",i={unversionedId:"examples",id:"version-0.4/examples",title:"Examples",description:"Lifecycle of a Fleet Bundle",source:"@site/versioned_docs/version-0.4/examples.md",sourceDirName:".",slug:"/examples",permalink:"/0.4/examples",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.4/examples.md",tags:[],version:"0.4",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Architecture",permalink:"/0.4/architecture"},next:{title:"Overview",permalink:"/0.4/cluster-overview"}},s={},p=[{value:"Lifecycle of a Fleet Bundle",id:"lifecycle-of-a-fleet-bundle",level:3},{value:"Deploy Kubernetes Manifests Across Clusters with Customization",id:"deploy-kubernetes-manifests-across-clusters-with-customization",level:3},{value:"Additional Examples",id:"additional-examples",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,l.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"lifecycle-of-a-fleet-bundle"},"Lifecycle of a Fleet Bundle"),(0,a.yg)("p",null,"To demonstrate the lifecycle of a Fleet bundle, we will use ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/tree/master/multi-cluster/helm"},"multi-cluster/helm")," as a case study."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"User will create a ",(0,a.yg)("a",{parentName:"li",href:"/0.4/gitrepo-add#create-gitrepo-instance"},"GitRepo")," that points to the multi-cluster/helm repository."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"gitjob-controller")," will sync changes from the GitRepo and detect changes from the polling or ",(0,a.yg)("a",{parentName:"li",href:"/0.4/webhook"},"webhook event"),". With every commit change, the ",(0,a.yg)("inlineCode",{parentName:"li"},"gitjob-controller")," will create a job that clones the git repository, reads content from the repo such as ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet.yaml")," and other manifests, and creates the Fleet ",(0,a.yg)("a",{parentName:"li",href:"/0.4/cluster-bundles-state#bundles"},"bundle"),".")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note:")," The job pod with the image name ",(0,a.yg)("inlineCode",{parentName:"p"},"rancher/tekton-utils")," will be under the same namespace as the GitRepo.")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet-controller")," then syncs changes from the bundle. According to the targets, the ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet-controller")," will create ",(0,a.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," resources, which are a combination of a bundle and a target cluster."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet-agent")," will then pull the ",(0,a.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," from the Fleet controlplane. The agent deploys bundle manifests as a ",(0,a.yg)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm chart")," from the ",(0,a.yg)("inlineCode",{parentName:"li"},"BundleDeployment")," into the downstream clusters."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet-agent")," will continue to monitor the application bundle and report statuses back in the following order: bundledeployment > bundle > GitRepo > cluster.")),(0,a.yg)("h3",{id:"deploy-kubernetes-manifests-across-clusters-with-customization"},"Deploy Kubernetes Manifests Across Clusters with Customization"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/deploy-across-clusters/fleet/"},"Fleet in Rancher")," allows users to manage clusters easily as if they were one cluster. Users can deploy bundles, which can be comprised of deployment manifests or any other Kubernetes resource, across clusters using grouping configuration."),(0,a.yg)("p",null,"To demonstrate how to deploy Kubernetes manifests across different clusters using Fleet, we will use ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/blob/master/multi-cluster/helm/fleet.yaml"},"multi-cluster/helm/fleet.yaml")," as a case study."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Situation:")," User has three clusters with three different labels: ",(0,a.yg)("inlineCode",{parentName:"p"},"env=dev"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"env=test"),", and ",(0,a.yg)("inlineCode",{parentName:"p"},"env=prod"),". User wants to deploy a frontend application with a backend database across these clusters. "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Expected behavior:")," "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"After deploying to the ",(0,a.yg)("inlineCode",{parentName:"li"},"dev")," cluster, database replication is not enabled."),(0,a.yg)("li",{parentName:"ul"},"After deploying to the ",(0,a.yg)("inlineCode",{parentName:"li"},"test")," cluster, database replication is enabled."),(0,a.yg)("li",{parentName:"ul"},"After deploying to the ",(0,a.yg)("inlineCode",{parentName:"li"},"prod")," cluster, database replication is enabled and Load balancer services are exposed.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Advantage of Fleet:")),(0,a.yg)("p",null,"Instead of deploying the app on each cluster, Fleet allows you to deploy across all clusters following these steps:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Deploy gitRepo ",(0,a.yg)("inlineCode",{parentName:"li"},"https://github.com/rancher/fleet-examples.git")," and specify the path ",(0,a.yg)("inlineCode",{parentName:"li"},"multi-cluster/helm"),"."),(0,a.yg)("li",{parentName:"ol"},"Under ",(0,a.yg)("inlineCode",{parentName:"li"},"multi-cluster/helm"),", a Helm chart will deploy the frontend app service and backend database service."),(0,a.yg)("li",{parentName:"ol"},"The following rule will be defined in ",(0,a.yg)("inlineCode",{parentName:"li"},"fleet.yaml"),": ")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"targetCustomizations:\n- name: dev\n  helm:\n    values:\n      replication: false\n  clusterSelector:\n    matchLabels:\n      env: dev\n\n- name: test\n  helm:\n    values:\n      replicas: 3\n  clusterSelector:\n    matchLabels:\n      env: test\n\n- name: prod\n  helm:\n    values:\n      serviceType: LoadBalancer\n      replicas: 3\n  clusterSelector:\n    matchLabels:\n      env: prod\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Result:")),(0,a.yg)("p",null,"Fleet will deploy the Helm chart with your customized ",(0,a.yg)("inlineCode",{parentName:"p"},"values.yaml")," to the different clusters."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note:")," Configuration management is not limited to deployments but can be expanded to general configuration management. Fleet is able to apply configuration management through customization among any set of clusters automatically.")),(0,a.yg)("h3",{id:"additional-examples"},"Additional Examples"),(0,a.yg)("p",null,"Examples using raw Kubernetes YAML, Helm charts, Kustomize, and combinations\nof the three are in the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/rancher/fleet-examples/"},"Fleet Examples repo"),"."))}u.isMDXComponent=!0}}]);