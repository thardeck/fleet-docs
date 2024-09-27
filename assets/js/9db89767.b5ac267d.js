"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[9211],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const s={},l="Setup Multi User",o={unversionedId:"multi-user",id:"version-0.7/multi-user",title:"Setup Multi User",description:"Fleet uses Kubernetes RBAC where possible.",source:"@site/versioned_docs/version-0.7/multi-user.md",sourceDirName:".",slug:"/multi-user",permalink:"/0.7/multi-user",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.7/multi-user.md",tags:[],version:"0.7",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{},sidebar:"docs",previous:{title:"Create Cluster Groups",permalink:"/0.7/cluster-group"},next:{title:"Create a GitRepo Resource",permalink:"/0.7/gitrepo-add"}},i={},c=[{value:"Example User",id:"example-user",level:2},{value:"Allow Access to Clusters",id:"allow-access-to-clusters",level:2},{value:"Restricting Access to Downstream Clusters",id:"restricting-access-to-downstream-clusters",level:2},{value:"An Example GitRepo Resource",id:"an-example-gitrepo-resource",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...s}=e;return(0,a.yg)(u,(0,r.A)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"setup-multi-user"},"Setup Multi User"),(0,a.yg)("p",null,"Fleet uses Kubernetes RBAC where possible."),(0,a.yg)("p",null,"One addition on top of RBAC is the ",(0,a.yg)("a",{parentName:"p",href:"/0.7/namespaces#restricting-gitrepos"},(0,a.yg)("inlineCode",{parentName:"a"},"GitRepoRestriction"))," resource, which can be used to control GitRepo resources in a namespace."),(0,a.yg)("p",null,"A multi-user fleet setup looks like this:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"tenants don't share namespaces, each tenant has one or more namespaces on the\nupstream cluster, where they can create GitRepo resources"),(0,a.yg)("li",{parentName:"ul"},"tenants can't deploy cluster wide resources and are limited to a set of\nnamespaces on downstream clusters"),(0,a.yg)("li",{parentName:"ul"},"clusters are in a separate namespace")),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Shared Clusters",src:n(4394).A,width:"2488",height:"1769"})),(0,a.yg)("admonition",{title:"important information",type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"The isolation of tenants is not complete and relies on Kubernetes RBAC to be\nset up correctly. Without manual setup from an operator tenants can still\ndeploy cluster wide resources. Even with the available Fleet restrictions,\nusers are only restricted to namespaces, but namespaces don't provide much\nisolation on their own. E.g. they can still consume as many resources as they\nlike."),(0,a.yg)("p",{parentName:"admonition"},"However, the existing Fleet restrictions allow users to share clusters, and\ndeploy resources without conflicts.")),(0,a.yg)("h2",{id:"example-user"},"Example User"),(0,a.yg)("p",null,"This would create a user 'fleetuser', who can only manage GitRepo resources in the 'project1' namespace."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl create serviceaccount fleetuser\nkubectl create namespace project1\nkubectl create -n project1 role fleetuser --verb=get --verb=list --verb=create --verb=delete --resource=gitrepos.fleet.cattle.io\nkubectl create -n project1 rolebinding fleetuser --serviceaccount=default:fleetuser --role=fleetuser\n")),(0,a.yg)("p",null,"If we want to give access to multiple namespaces, we can use a single cluster role with two role bindings:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kubectl create clusterrole fleetuser --verb=get --verb=list --verb=create --verb=delete --resource=gitrepos.fleet.cattle.io\nkubectl create -n project1 rolebinding fleetuser --serviceaccount=default:fleetuser --clusterrole=fleetuser\nkubectl create -n project2 rolebinding fleetuser --serviceaccount=default:fleetuser --clusterrole=fleetuser\n")),(0,a.yg)("p",null,"This makes sure, tenants can't interfere with GitRepo resources from other tenants, since they don't have access to their namespaces."),(0,a.yg)("h2",{id:"allow-access-to-clusters"},"Allow Access to Clusters"),(0,a.yg)("p",null,"This assumes all GitRepos created by 'fleetuser' have the ",(0,a.yg)("inlineCode",{parentName:"p"},"team: one")," label. Different labels could be used, to select different cluster namespaces."),(0,a.yg)("p",null,"In each of the user's namespaces, as an admin create a ",(0,a.yg)("a",{parentName:"p",href:"/0.7/namespaces#cross-namespace-deployments"},(0,a.yg)("inlineCode",{parentName:"a"},"BundleNamespaceMapping")),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kind: BundleNamespaceMapping\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: mapping\n  namespace: project1\n\n# Bundles to match by label.\n# The labels are defined in the fleet.yaml # labels field or from the\n# GitRepo metadata.labels field\nbundleSelector:\n  matchLabels:\n    team: one\n    # or target one repo\n    #fleet.cattle.io/repo-name: simpleapp\n\n# Namespaces, containing clusters, to match by label\nnamespaceSelector:\n  matchLabels:\n    kubernetes.io/metadata.name: fleet-default\n    # the label is on the namespace\n    #workspace: prod\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("a",{parentName:"p",href:"/0.7/gitrepo-targets"},(0,a.yg)("inlineCode",{parentName:"a"},"target")," section")," in the GitRepo resource can be used to deploy only to a subset of the matched clusters."),(0,a.yg)("h2",{id:"restricting-access-to-downstream-clusters"},"Restricting Access to Downstream Clusters"),(0,a.yg)("p",null,"Admins can further restrict tenants by creating a ",(0,a.yg)("inlineCode",{parentName:"p"},"GitRepoRestriction")," in each of their namespaces."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kind: GitRepoRestriction\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: restriction\n  namespace: project1\n\nallowedTargetNamespaces:\n  - project1simpleapp\n")),(0,a.yg)("p",null,"This will deny the creation of cluster wide resources, which may interfere with other tenants and limit the deployment to the 'project1simpleapp' namespace."),(0,a.yg)("h2",{id:"an-example-gitrepo-resource"},"An Example GitRepo Resource"),(0,a.yg)("p",null,"A GitRepo resource created by a tenant, without admin access could look like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"kind: GitRepo\napiVersion: fleet.cattle.io/v1alpha1\nmetadata:\n  name: simpleapp\n  namespace: project1\n  labels:\n    team: one\n\nspec:\n  repo: https://github.com/rancher/fleet-examples\n  paths:\n  - bundle-diffs\n\n  targetNamespace: project1simpleapp\n\n  # do not match the upstream/local cluster, won't work\n  targets:\n  - name: dev\n    clusterSelector:\n      matchLabels:\n        env: dev\n")),(0,a.yg)("p",null,"This includes the ",(0,a.yg)("inlineCode",{parentName:"p"},"team: one")," label and and the required ",(0,a.yg)("inlineCode",{parentName:"p"},"targetNamespace"),"."),(0,a.yg)("p",null,"Together with the previous ",(0,a.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMapping")," it would target all clusters with a ",(0,a.yg)("inlineCode",{parentName:"p"},"env: dev")," label in the 'fleet-default' namespace."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"BundleNamespaceMappings")," do not work with local clusters, so make sure not to target them.")))}m.isMDXComponent=!0},4394:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/FleetSharedClusters-b68f6c53b43cbb795e4d81cda9ebc2bc.svg"}}]);