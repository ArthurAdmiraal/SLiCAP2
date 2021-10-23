"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(i),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return i?n.createElement(f,s(s({ref:t},u),{},{components:i})):n.createElement(f,s({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<o;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},3637:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),s=["components"],a={sidebar_position:4,title:"Specifics"},c=void 0,l={unversionedId:"design-notes/specifics",id:"design-notes/specifics",isDocsHomePage:!1,title:"Specifics",description:"Where is the loop gain analysis?",source:"@site/docs/design-notes/specifics.md",sourceDirName:"design-notes",slug:"/design-notes/specifics",permalink:"/SLiCAP2/next/design-notes/specifics",editUrl:"https://github.com/slicap/slicap/edit/main/website/docs/design-notes/specifics.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Specifics"},sidebar:"docSidebar",previous:{title:"Related projects / inspiration",permalink:"/SLiCAP2/next/design-notes/related"},next:{title:"Future ideas",permalink:"/SLiCAP2/next/design-notes/ideas"}},u=[{value:"Where is the loop gain analysis?",id:"where-is-the-loop-gain-analysis",children:[]},{value:"Why have code-based circuit editing?",id:"why-have-code-based-circuit-editing",children:[]}],d={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"where-is-the-loop-gain-analysis"},"Where is the loop gain analysis?"),(0,o.kt)("p",null,"The loop gain analysis is a core feature of SLiCAP that should be included on the first release of SLiCAP2. The reason it isn't included here yet is because it is a compound analysis. Albeit less streamlined, the procedure can be replicated using the functionality described here. A transactor can be removed, and then the suitable source added using code-based circuit editing. Afterwards, the analysis is a regulator gain analysis. This needs a dedicated interface to be more accessible to the user, but this is orthogonal to what is described so far. The idea is to get these basics down first, and then expand to more complicated functionality."),(0,o.kt)("h3",{id:"why-have-code-based-circuit-editing"},"Why have code-based circuit editing?"),(0,o.kt)("p",null,"Code-based circuit editing may seem like a terrible idea. It discourages users from making schematics, causing poorer user project documentation and giving more scope for confusion. In addition, it is yet another thing to learn. So why implement it?"),(0,o.kt)("p",null,"Well, it is vital to the future of SLiCAP. One of the goals for SLiCAP is to enable automated synthesis of circuits. This can only occur if there is a robust way to edit circuits from algorithms. This is exactly what code-based circuit editing enables."),(0,o.kt)("p",null,"But there are advantages in the short term as well. Code-based circuit editing is a great way to streamline large parts of the code base and to turn users into developers."),(0,o.kt)("p",null,"First the code base perspective."),(0,o.kt)("p",null,"All quantities of interest to engineers are the result of some set-up work followed by measurements. If they weren't, they could not be captured in mathematics or be performed in the lab. The analyses provide a way to do virtual measurements, but cannot perform all the set-up work. For example, loop gain analysis requires breaking the loop. This functionality requires editing the circuit. The goal of the code-based circuit editing is to provide a general-purpose framework for this and other types of set-up work. Beyond advanced analyses, more powerful functionality is useful any time a circuit is dealt with. For instance, writing importers becomes simpler when the internal circuit model is easy to work with."),(0,o.kt)("p",null,"And this is were the users come in."),(0,o.kt)("p",null,"With a language for manipulating circuits in hand, any procedure can be implemented by the user. Once they do, they are likely to build themselves a convenient interface. This brings them in the developer mindset. If the contribution of these types of compound analyses is stimulated, this provides a path to engage more users as developers, speeding up SLiCAP development. Though the users may not contribute to the nuts and bolts of SLiCAP, the machines built with those nuts and bolts should be mor helpful once the nuts and bolts are in place."),(0,o.kt)("p",null,"All in all, though code-based circuit editing has the risk of overcomplicating SLiCAP and encouraging bad behaviour, the advantages more then make up for it."))}p.isMDXComponent=!0}}]);