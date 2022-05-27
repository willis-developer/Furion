"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6073],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return t?i.createElement(k,o(o({ref:n},m),{},{components:t})):i.createElement(k,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8541:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"appsettings",title:"1. \u5e94\u7528\u914d\u7f6e",sidebar_label:"1. \u5e94\u7528\u914d\u7f6e"},p=void 0,s={unversionedId:"settings/appsettings",id:"settings/appsettings",title:"1. \u5e94\u7528\u914d\u7f6e",description:"1.1 \u5173\u4e8e\u914d\u7f6e",source:"@site/docs/settings/appsettings.mdx",sourceDirName:"settings",slug:"/settings/appsettings",permalink:"/furion/docs/settings/appsettings",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/settings/appsettings.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"appsettings",title:"1. \u5e94\u7528\u914d\u7f6e",sidebar_label:"1. \u5e94\u7528\u914d\u7f6e"},sidebar:"settings",next:{title:"2. \u8de8\u57df\u914d\u7f6e",permalink:"/furion/docs/settings/corsaccessorsettings"}},m={},u=[{value:"1.1 \u5173\u4e8e\u914d\u7f6e",id:"11-\u5173\u4e8e\u914d\u7f6e",level:2},{value:"1.2 \u914d\u7f6e\u4fe1\u606f",id:"12-\u914d\u7f6e\u4fe1\u606f",level:2},{value:"1.3 \u914d\u7f6e\u793a\u4f8b",id:"13-\u914d\u7f6e\u793a\u4f8b",level:2},{value:"1.4 \u7279\u522b\u6ce8\u610f",id:"14-\u7279\u522b\u6ce8\u610f",level:2}],c={toc:u};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"11-\u5173\u4e8e\u914d\u7f6e"},"1.1 \u5173\u4e8e\u914d\u7f6e"),(0,a.kt)("p",null,"\u5e94\u7528\u914d\u7f6e\u6307\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u5168\u5c40\u914d\u7f6e\u9009\u9879\u3002"),(0,a.kt)("h2",{id:"12-\u914d\u7f6e\u4fe1\u606f"},"1.2 \u914d\u7f6e\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppSettings"),"\uff1a\u914d\u7f6e\u6839\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InjectMiniProfiler"),"\uff1a\u662f\u5426\u6ce8\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"MiniProfiler"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5173\u95ed Swagger \u5de6\u4e0a\u89d2\u76d1\u542c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"InjectSpecificationDocument"),"\uff1a\u662f\u5426\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"Swagger")," \u6587\u6863\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u73af\u5883\u53ef\u5173\u95ed")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EnabledReferenceAssemblyScan"),"\uff1a\u662f\u5426\u542f\u7528\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"dll")," \u65b9\u5f0f\u6dfb\u52a0\u7684\u5f15\u7528\u7a0b\u5e8f\u96c6\u626b\u63cf\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"false")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExternalAssemblies"),"\uff1a\u914d\u7f6e\u5916\u90e8\u7a0b\u5e8f\u96c6\u5b8c\u6574\u8def\u5f84\uff0c\u652f\u6301\u52a8\u6001\u52a0\u8f7d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PrintDbConnectionInfo"),"\uff1a\u662f\u5426\u6253\u5370\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"MiniProfiler")," \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SupportPackageNamePrefixs"),"\uff1a\u914d\u7f6e\u652f\u6301\u7684\u5305\u524d\u7f00\u540d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"string[]")," \u7c7b\u578b\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"[]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OutputOriginalSqlExecuteLog"),"\uff1a\u662f\u5426\u8f93\u51fa\u539f\u59cb Sql \u6267\u884c\u65e5\u5fd7\uff08ADO.NET\uff09\uff0c\u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"VirtualPath"),"\uff1a\u914d\u7f6e\u865a\u62df\u76ee\u5f55\uff0c\u5fc5\u987b\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"li"},"/")," \u5f00\u5934")))),(0,a.kt)("h2",{id:"13-\u914d\u7f6e\u793a\u4f8b"},"1.3 \u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "AppSettings": {\n    "InjectMiniProfiler": false\n  }\n}\n')),(0,a.kt)("h2",{id:"14-\u7279\u522b\u6ce8\u610f"},"1.4 \u7279\u522b\u6ce8\u610f"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u4f1a\u81ea\u52a8\u626b\u63cf\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"*.json")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"*.config.xml")," \u6587\u4ef6\u8f7d\u5165\u914d\u7f6e\u4e2d\uff0c\u5982\u9700\u5ffd\u7565\u4e2a\u522b\u6587\u4ef6\uff0c\u9700\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u914d\u7f6e\u6587\u4ef6\u6839\u8282\u70b9\u4e0b\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"IgnoreConfigurationFiles")," \u8282\u70b9\u5373\u53ef\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"string[]")," \u7c7b\u578b\uff0c\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "IgnoreConfigurationFiles": ["runtime.json"]\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u626b\u63cf\u76ee\u5f55\uff08\u975e\u6839\u76ee\u5f55\uff09\uff0c\u9700\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"appsettings.json")," \u4e2d\u6dfb\u52a0\u4e0b\u9762\u914d\u7f6e\uff1a"),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u652f\u6301\u7248\u672c")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.16.7+")," \u7248\u672c\u6709\u6548"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "ConfigurationScanDirectories": ["\u76ee\u5f551\u540d\u79f0", "\u76ee\u5f551\u540d\u79f0/\u5b50\u76ee\u5f55\u540d\u79f0"]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u5728 ",(0,a.kt)("inlineCode",{parentName:"strong"},"appsettings.json")," \u6587\u4ef6\u4e2d\u914d\u7f6e\u624d\u6709\u6548")))}d.isMDXComponent=!0}}]);