(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(204)),c={id:"db",title:"2. Db \u9759\u6001\u7c7b",sidebar_label:"2. Db \u9759\u6001\u7c7b"},l={unversionedId:"global/db",id:"global/db",isDocsHomePage:!1,title:"2. Db \u9759\u6001\u7c7b",description:"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",source:"@site/docs/global/db.mdx",slug:"/global/db",permalink:"/furion/docs/global/db",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/global/db.mdx",version:"current",lastUpdatedBy:"Monk",lastUpdatedAt:1612439652,formattedLastUpdatedAt:"2/4/2021",sidebar_label:"2. Db \u9759\u6001\u7c7b",sidebar:"global",previous:{title:"1. App \u9759\u6001\u7c7b",permalink:"/furion/docs/global/app"},next:{title:"3. DataValidator \u9759\u6001\u7c7b",permalink:"/furion/docs/global/datavalidator"}},b=[{value:"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",id:"21-\u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8",children:[]},{value:"2.2 \u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8",id:"22-\u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8",children:[]},{value:"2.3 \u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8",id:"23-\u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8",children:[]},{value:"2.4 \u83b7\u53d6 <code>Sql</code> \u4ed3\u50a8",id:"24-\u83b7\u53d6-sql-\u4ed3\u50a8",children:[]},{value:"2.5 \u83b7\u53d6 <code>Sql</code> \u5b9a\u4f4d\u5668\u4ed3\u50a8",id:"25-\u83b7\u53d6-sql-\u5b9a\u4f4d\u5668\u4ed3\u50a8",children:[]},{value:"2.6 \u83b7\u53d6 <code>Sql</code> \u4ee3\u7406\u5bf9\u8c61",id:"26-\u83b7\u53d6-sql-\u4ee3\u7406\u5bf9\u8c61",children:[]},{value:"2.7 \u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"27-\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.7 \u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"27-\u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.8 \u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"28-\u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]},{value:"2.9 \u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",id:"29-\u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587",children:[]}],i={toc:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"21-\u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8"},"2.1 \u83b7\u53d6\u975e\u6cdb\u578b\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var repository = Db.GetRepository();\n")),Object(o.b)("h2",{id:"22-\u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8"},"2.2 \u83b7\u53d6\u6cdb\u578b\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var entityRepository = Db.GetRepository<TEntity>();\n")),Object(o.b)("h2",{id:"23-\u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8"},"2.3 \u83b7\u53d6\u5e26\u5b9a\u4f4d\u5668\u6cdb\u578b\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var locatorRepository = Db.GetRepository<TEntity, TDbContextLocator>();\n")),Object(o.b)("h2",{id:"24-\u83b7\u53d6-sql-\u4ed3\u50a8"},"2.4 \u83b7\u53d6 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var sqlRepository = Db.GetSqlRepository();\n")),Object(o.b)("h2",{id:"25-\u83b7\u53d6-sql-\u5b9a\u4f4d\u5668\u4ed3\u50a8"},"2.5 \u83b7\u53d6 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u5b9a\u4f4d\u5668\u4ed3\u50a8"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var sqlLocatorRepository = Db.GetSqlRepository<TDbContextLocator>();\n")),Object(o.b)("h2",{id:"26-\u83b7\u53d6-sql-\u4ee3\u7406\u5bf9\u8c61"},"2.6 \u83b7\u53d6 ",Object(o.b)("inlineCode",{parentName:"h2"},"Sql")," \u4ee3\u7406\u5bf9\u8c61"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var sqlProxy= Db.GetSqlProxy<TSqlDispatchProxy>();\n")),Object(o.b)("h2",{id:"27-\u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.7 \u83b7\u53d6\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var dbContext = Db.GetDbContext();\n")),Object(o.b)("h2",{id:"27-\u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.7 \u83b7\u53d6\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var locatorDbContext = Db.GetDbContext<TDbContextLocator>();\nvar locatorDbContext2 = Db.GetDbContext(typeof(TDbContextLocator));\n")),Object(o.b)("h2",{id:"28-\u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.8 \u521b\u5efa\u65b0\u7684\u9ed8\u8ba4\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var dbContext = Db.GetNewDbContext();\n")),Object(o.b)("h2",{id:"29-\u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"},"2.9 \u521b\u5efa\u65b0\u7684\u5b9a\u4f4d\u5668\u6570\u636e\u5e93\u4e0a\u4e0b\u6587"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cs"},"var locatorDbContext = Db.GetNewDbContext<TDbContextLocator>();\nvar locatorDbContext2 = Db.GetNewDbContext(typeof(TDbContextLocator));\n")))}p.isMDXComponent=!0},204:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,m=d["".concat(c,".").concat(u)]||d[u]||s[u]||o;return r?a.a.createElement(m,l(l({ref:t},i),{},{components:r})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);