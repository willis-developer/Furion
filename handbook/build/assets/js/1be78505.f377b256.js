"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9514,1181,2634],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4411:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var a=n(7294),r=n(3905),o=n(6291),l=n(9033),c=n(6010),i=n(3039),s=n(3783),m=n(8030),u=n(3117),d=function(e){return a.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=n(4973),f=n(102),b=n(6742),h=n(3919),v=n(8617),E="menuLinkText_1J2g",g=["items"],k=["item"],_=["item","onItemClick","activePath","level"],y=["item","onItemClick","activePath","level"],N=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},Z=(0,a.memo)((function(e){var t=e.items,n=(0,f.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(C,(0,u.Z)({key:t,item:e},n))})))}));function C(e){var t=e.item,n=(0,f.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(S,(0,u.Z)({item:t},n)):a.createElement(T,(0,u.Z)({item:t},n))}function S(e){var t,n=e.item,r=e.onItemClick,o=e.activePath,l=e.level,s=(0,f.Z)(e,_),m=n.items,d=n.label,p=n.collapsible,b=n.className,h=N(n,o),v=(0,i.uR)({initialState:function(){return!!p&&(!h&&n.collapsed)}}),g=v.collapsed,k=v.setCollapsed,y=v.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,r=e.setCollapsed,o=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!o&&n&&r(!1)}),[t,o,n,r])}({isActive:h,collapsed:g,setCollapsed:k}),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":g},b)},a.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&h},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),y()}:void 0,href:p?"#":void 0},s),d),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},a.createElement(Z,{items:m,tabIndex:g?-1:0,onItemClick:r,activePath:o,level:l+1})))}function T(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=e.level,l=(0,f.Z)(e,y),s=t.href,m=t.label,d=t.className,p=N(t,r);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(o),"menu__list-item",d),key:m},a.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:n},l),(0,h.Z)(s)?m:a.createElement("span",null,m,a.createElement(v.Z,null))))}var I="sidebar_3jCp",w="sidebarWithHideableNavbar_Uxjr",M="sidebarHidden_22GT",x="sidebarLogo_8bKs",P="menu_1DcY",O="menuWithAnnouncementBar_3IKd",L="collapseSidebarButton_3okl",A="collapseSidebarButtonIcon_1LB5",B=n(4996);function j(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},a.createElement(d,{className:A}))}function F(e){var t,n,r=e.path,o=e.sidebar,l=e.onCollapse,s=e.isHidden,u=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}(),d=(0,i.LU)(),p=d.navbar.hideOnScroll,f=d.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(I,(t={},t[w]=p,t[M]=s,t))},p&&a.createElement(m.Z,{tabIndex:-1,className:x}),a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",P,(n={},n[O]=u,n))},a.createElement(D,null),a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:o,activePath:r,level:1}))),f&&a.createElement(j,{onClick:l}))}function D(){return a.createElement("a",{href:"https://www.jnpfsoft.com/index.html?from=furion",target:"_blank",style:{margin:"0.5em",marginTop:"0",display:"block",textAlign:"center",borderBottom:"1px solid #dedede",paddingBottom:"0.2em"}},a.createElement("img",{src:(0,B.Z)("img/jnpfsoft.png"),style:{display:"block",width:"100%"}}),a.createElement("div",null,a.createElement("a",{href:"mailto:monksoul@outlook.com",style:{color:"#723cff",fontSize:13},title:"monksoul@outlook.com"},"\u6210\u4e3a\u8d5e\u52a9\u5546")))}var H=function(e){var t=e.toggleSidebar,n=e.sidebar,r=e.path;return a.createElement(a.Fragment,null,a.createElement(D,null),a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(Z,{items:n,activePath:r,onItemClick:function(){return t()},level:1})))};function R(e){return a.createElement(i.Cv,{component:H,props:e})}var W=a.memo(F),U=a.memo(R);function z(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),r&&a.createElement(U,e))}var Y=n(4234),K=n(4608),J="backToTopButton_35hR",q="backToTopButtonShow_18ls";function X(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,a.useState)(!1),n=t[0],r=t[1],o=(0,a.useRef)(!1),l=X(),s=l.smoothScrollTop,m=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var n=e.scrollY,a=null==t?void 0:t.scrollY;if(a)if(o.current)o.current=!1;else{var l=n<a;if(l||m(),n<300)r(!1);else if(l){var c=document.documentElement.scrollHeight;n+window.innerHeight<c&&r(!0)}else r(!1)}})),(0,i.SL)((function(e){e.location.hash&&(o.current=!0,r(!1))})),a.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,J,(e={},e[q]=n,e)),type:"button",onClick:function(){return s()}})},Q=n(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},$=n(9105);function ee(e){var t,n,o,s=e.currentDocRoute,m=e.versionMetadata,u=e.children,f=m.pluginId,b=m.version,h=s.sidebar,v=h?m.docsSidebars[h]:void 0,E=(0,a.useState)(!1),g=E[0],k=E[1],_=(0,a.useState)(!1),y=_[0],N=_[1],Z=(0,a.useCallback)((function(){y&&N(!1),k((function(e){return!e}))}),[y]);return a.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:b,tag:(0,i.os)(f,b)}},a.createElement("div",{className:V.docPage},a.createElement(G,null),v&&a.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&g&&N(!0)}},a.createElement(z,{key:h,sidebar:v,path:s.path,onCollapse:Z,isHidden:y}),y&&a.createElement("div",{className:V.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},a.createElement(d,{className:V.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(V.docMainContainer,(n={},n[V.docMainContainerEnhanced]=g||!v,n))},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(o={},o[V.docItemWrapperEnhanced]=g,o))},a.createElement(r.Zo,{components:Y.Z},u)))))}var te=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,Q.LX)(r.pathname,e)}));return l?a.createElement(a.Fragment,null,a.createElement($.Z,null,a.createElement("html",{className:n.className})),a.createElement(ee,{currentDocRoute:l,versionMetadata:n},(0,o.Z)(t,{versionMetadata:n}))):a.createElement(K.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),r=n(9033),o=n(4973);t.default=function(){return a.createElement(r.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),r=n(102),o=n(7294),l=n(6010),c=n(6742),i=n(3039),s=n(4996),m="footerLogoLink_qW4Z",u=["to","href","label","prependBaseUrlToHref"];function d(e){var t=e.to,n=e.href,l=e.label,i=e.prependBaseUrlToHref,m=(0,r.Z)(e,u),d=(0,s.Z)(t),p=(0,s.Z)(n,{forcePrependBaseUrl:!0});return o.createElement(c.Z,(0,a.Z)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:i?p:n}:{to:d},m),l)}var p=function(e){var t=e.url,n=e.alt;return o.createElement("img",{className:"footer__logo",alt:n,src:t,style:{background:"#fff",padding:"5px 10px"}})};var f=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,c=t.logo,u=void 0===c?{}:c,f=(0,s.Z)(u.src);return e?o.createElement("footer",{className:(0,l.Z)("footer",{"footer--dark":"dark"===e.style})},o.createElement("div",{className:"container"},r&&r.length>0&&o.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.createElement("li",{key:e.href||e.to,className:"footer__item"},o.createElement(d,e))}))):null)}))),(u||n)&&o.createElement("div",{className:"footer__bottom text--center"},u&&u.src&&o.createElement("div",{className:"margin-bottom--sm"},u.href?o.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:m},o.createElement(p,{alt:u.alt,url:f})):o.createElement(p,{alt:u.alt,url:f})),n?o.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null}}}]);