(window.webpackJsonp=window.webpackJsonp||[]).push([[126,17,24],{215:function(e,t,a){"use strict";var r=a(3),l=a(0),n=a.n(l),o=a(205),c=a(207),s=a(206),m=a(17),i=a(61),f=a.n(i);function h({to:e,href:t,label:a,prependBaseUrlToHref:l,...o}){const s=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return n.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?i:t}:{to:s},o),a)}const d=({url:e,alt:t})=>n.a.createElement("img",{className:"footer__logo",alt:t,src:e,style:{background:"#fff",padding:"5px 10px"}});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:r={}}=e||{},l=Object(m.a)(r.src);return e?n.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},a&&a.length>0&&n.a.createElement("div",{className:"row footer__links"},a.map((e,t)=>n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?n.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(h,e)))):null))),(r||t)&&n.a.createElement("div",{className:"footer__bottom text--center"},r&&r.src&&n.a.createElement("div",{className:"margin-bottom--sm"},r.href?n.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:f.a.footerLogoLink},n.a.createElement(d,{alt:r.alt,url:l})):n.a.createElement(d,{alt:r.alt,url:l})),t?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},233:function(e,t,a){"use strict";a.r(t);var r=a(0),l=a.n(r),n=a(214),o=a(208);t.default=function(){return l.a.createElement(n.a,{title:"Page Not Found"},l.a.createElement("main",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},l.a.createElement(o.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.a.createElement("p",null,l.a.createElement(o.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l.a.createElement("p",null,l.a.createElement(o.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);