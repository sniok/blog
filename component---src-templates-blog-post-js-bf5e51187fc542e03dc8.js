(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,r){var n=r("WkPL");t.exports=function(t){if(Array.isArray(t))return n(t)}},RIqP:function(t,e,r){var n=r("Ijbi"),o=r("EbDI"),a=r("ZhPi"),c=r("Bnag");t.exports=function(t){return n(t)||o(t)||a(t)||c()}},SksO:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},X8hv:function(t,e,r){var n=r("sXyB"),o=r("RIqP"),a=r("lSNA"),c=r("8OQS");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r("q1tI"),p=r("7ljp"),s=p.useMDXComponents,f=p.mdx,m=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,a=t.children,i=c(t,["scope","components","children"]),p=s(r),b=m(e),y=u.useMemo((function(){if(!a)return null;var t=l({React:u,mdx:f},b),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+a])).apply(void 0,[{}].concat(o(r)))}),[a,e]);return u.createElement(y,l({components:p},i))}},ZhPi:function(t,e,r){var n=r("WkPL");t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},b48C:function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},lSNA:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},sXyB:function(t,e,r){var n=r("SksO"),o=r("b48C");function a(e,r,c){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},a.apply(null,arguments)}t.exports=a},yZlL:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return O}));var n=r("rePB"),o=r("dI71"),a=r("q1tI"),c=r.n(a),i=r("Wbzz"),l=r("p3AD");var u="426816048",p=function(){return c.a.createElement(i.StaticQuery,{query:u,render:function(t){var e=t.site.siteMetadata,r=e.author,n=e.social;return c.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},c.a.createElement("p",null,"Blog by"," ",c.a.createElement("a",{href:"https://twitter.com/"+n.twitter},r)))}})},s=r("Bl7J"),f=r("vrFN"),m=r("A2+M");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e.prototype.render=function(){var t=this.props.data.mdx,e=this.props.data.site.siteMetadata.title,r=this.props.data.site.siteMetadata.siteUrl,n=this.props.pageContext,o=n.previous,a=n.next;return c.a.createElement(s.a,{location:this.props.location,title:e},c.a.createElement(f.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt,image:null!==t.frontmatter.thumbnail?""+r+t.frontmatter.thumbnail.publicURL:void 0}),c.a.createElement("h1",null,t.frontmatter.title),c.a.createElement("p",{style:y(y({},Object(l.b)(-.2)),{},{display:"block",marginBottom:Object(l.a)(2),marginTop:Object(l.a)(-1),paddingBottom:Object(l.a)(.75),borderBottom:"1px solid #121212"})},t.frontmatter.date),c.a.createElement("div",null,c.a.createElement(m.MDXRenderer,{scope:this.props.__mdxScope},t.body)),c.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),c.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}}),c.a.createElement(p,null),c.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},c.a.createElement("li",null,o&&c.a.createElement(i.Link,{to:o.fields.slug,rel:"prev"},"← ",o.frontmatter.title)),c.a.createElement("li",null,a&&c.a.createElement(i.Link,{to:a.fields.slug,rel:"next"},a.frontmatter.title," →"))))},e}(c.a.Component),O=(e.default=d,"202591029")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bf5e51187fc542e03dc8.js.map