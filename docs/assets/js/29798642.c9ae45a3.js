(window.webpackJsonp=window.webpackJsonp||[]).push([[20,16],{215:function(e,t,a){"use strict";var r=a(3),l=a(0),o=a.n(l),n=a(205),c=a(207),s=a(206),m=a(17),i=a(61),f=a.n(i);function _({to:e,href:t,label:a,prependBaseUrlToHref:l,...n}){const s=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return o.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?i:t}:{to:s},n),a)}const u=({url:e,alt:t})=>o.a.createElement("img",{className:"footer__logo",alt:t,src:e,style:{background:"#fff",padding:"5px 10px"}});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:r={}}=e||{},l=Object(m.a)(r.src);return e?o.a.createElement("footer",{className:Object(n.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},a&&a.length>0&&o.a.createElement("div",{className:"row footer__links"},a.map((e,t)=>o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(_,e)))):null))),(r||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},r&&r.src&&o.a.createElement("div",{className:"margin-bottom--sm"},r.href?o.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},o.a.createElement(u,{alt:r.alt,url:l})):o.a.createElement(u,{alt:r.alt,url:l})),t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);