"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[7327],{5680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var l=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,y=d["".concat(c,".").concat(u)]||d[u]||f[u]||o;return n?l.createElement(y,a(a({ref:t},s),{},{components:n})):l.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},840:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=n(8168),r=(n(6540),n(5680));const o={title:"",sidebar_label:"fleet deploy"},a=void 0,i={unversionedId:"cli/fleet-cli/fleet_deploy",id:"version-0.10/cli/fleet-cli/fleet_deploy",title:"",description:"fleet deploy",source:"@site/versioned_docs/version-0.10/cli/fleet-cli/fleet_deploy.md",sourceDirName:"cli/fleet-cli",slug:"/cli/fleet-cli/fleet_deploy",permalink:"/0.10/cli/fleet-cli/fleet_deploy",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/versioned_docs/version-0.10/cli/fleet-cli/fleet_deploy.md",tags:[],version:"0.10",lastUpdatedAt:1727421439,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{title:"",sidebar_label:"fleet deploy"},sidebar:"docs",previous:{title:"fleet cleanup",permalink:"/0.10/cli/fleet-cli/fleet_cleanup"},next:{title:"fleet target",permalink:"/0.10/cli/fleet-cli/fleet_target"}},c={},p=[{value:"fleet deploy",id:"fleet-deploy",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,l.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"fleet-deploy"},"fleet deploy"),(0,r.yg)("p",null,"Deploy a bundledeployment/content resource to a cluster, by creating a Helm release. This will not deploy the bundledeployment/content resources directly to the cluster."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"fleet deploy [flags]\n")),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"  -a, --agent-namespace string            Set the agent namespace, normally cattle-fleet-system. If set, fleet agent will garbage collect the helm release, i.e. delete it if the bundledeployment is missing.\n  -d, --dry-run                           Print the resources that would be deployed, but do not actually deploy them\n  -h, --help                              help for deploy\n  -i, --input-file string                 Location of the YAML file containing the content and the bundledeployment resource\n      --kubeconfig string                 Paths to a kubeconfig. Only required if out-of-cluster.\n  -n, --namespace string                  Set the default namespace. Deploy helm chart into this namespace.\n      --zap-devel                         Development Mode defaults(encoder=consoleEncoder,logLevel=Debug,stackTraceLevel=Warn). Production Mode defaults(encoder=jsonEncoder,logLevel=Info,stackTraceLevel=Error) (default true)\n      --zap-encoder encoder               Zap log encoding (one of 'json' or 'console')\n      --zap-log-level level               Zap Level to configure the verbosity of logging. Can be one of 'debug', 'info', 'error', or any integer value > 0 which corresponds to custom debug levels of increasing verbosity\n      --zap-stacktrace-level level        Zap Level at and above which stacktraces are captured (one of 'info', 'error', 'panic').\n      --zap-time-encoding time-encoding   Zap time encoding (one of 'epoch', 'millis', 'nano', 'iso8601', 'rfc3339' or 'rfc3339nano'). Defaults to 'epoch'.\n")),(0,r.yg)("h3",{id:"see-also"},"SEE ALSO"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"./fleet"},"fleet"),"\t -")))}f.isMDXComponent=!0}}]);