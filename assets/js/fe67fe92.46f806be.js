"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[5103],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(6540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(r),u=l,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(8168),l=(r(6540),r(5680));const o={title:"",sidebar_label:"fleet apply"},a=void 0,i={unversionedId:"cli/fleet-cli/fleet_apply",id:"version-0.9/cli/fleet-cli/fleet_apply",title:"",description:"fleet apply",source:"@site/versioned_docs/version-0.9/cli/fleet-cli/fleet_apply.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet_apply",permalink:"/0.9/cli/fleet-cli/fleet_apply",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.9/cli/fleet-cli/fleet_apply.md",tags:[],version:"0.9",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{title:"",sidebar_label:"fleet apply"},sidebar:"docs",previous:{title:"fleet",permalink:"/0.9/cli/fleet-cli/fleet"},next:{title:"fleet test",permalink:"/0.9/cli/fleet-cli/fleet_test"}},s={},c=[{value:"fleet apply",id:"fleet-apply",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c},f="wrapper";function d(e){let{components:t,...r}=e;return(0,l.yg)(f,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"fleet-apply"},"fleet apply"),(0,l.yg)("p",null,"Render a bundle into a Kubernetes resource and apply it in the Fleet Manager"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"fleet apply [flags] BUNDLE_NAME PATH...\n")),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"  -b, --bundle-file string                     Location of the raw Bundle resource yaml\n      --cacerts-file string                    Path of custom cacerts for helm repo\n      --commit string                          Commit to assign to the bundle\n  -c, --compress                               Force all resources to be compress\n      --correct-drift                          Rollback any change made from outside of Fleet\n      --correct-drift-force                    Use --force when correcting drift. Resources can be deleted and recreated\n      --correct-drift-keep-fail-history        Keep helm history for failed rollbacks\n      --debug                                  Turn on debug logging\n      --debug-level int                        If debugging is enabled, set klog -v=X\n  -f, --file string                            Location of the fleet.yaml\n      --helm-credentials-by-path-file string   Path of file containing helm credentials for paths\n      --helm-repo-url-regex string             Helm credentials will be used if the helm repo matches this regex. Credentials will always be used if this is empty or not provided\n  -h, --help                                   help for apply\n      --keep-resources                         Keep resources created after the GitRepo or Bundle is deleted\n  -l, --label strings                          Labels to apply to created bundles\n  -o, --output string                          Output contents to file or - for stdout\n      --password-file string                   Path of file containing basic auth password for helm repo\n      --paused                                 Create bundles in a paused state\n  -a, --service-account string                 Service account to assign to bundle created\n      --ssh-privatekey-file string             Path of ssh-private-key for helm repo\n      --sync-generation int                    Generation number used to force sync the deployment\n      --target-namespace string                Ensure this bundle goes to this target namespace\n      --targets-file string                    Addition source of targets and restrictions to be append\n      --username string                        Basic auth username for helm repo\n")),(0,l.yg)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'      --context string            kubeconfig context for authentication\n  -k, --kubeconfig string         kubeconfig for authentication\n  -n, --namespace string          namespace (default "fleet-local")\n      --system-namespace string   System namespace of the controller (default "cattle-fleet-system")\n')),(0,l.yg)("h3",{id:"see-also"},"SEE ALSO"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"./fleet"},"fleet"),"\t -")))}d.isMDXComponent=!0}}]);