(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return g});var a=n(8),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(166),s=n(173),p=n(170),d=n(171),m=n(167),f=n(188),y=n.n(f),h=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.data.mdx,e=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,o=n.next;return l.a.createElement(p.a,{location:this.props.location,title:e},l.a.createElement(d.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),l.a.createElement("h1",null,t.frontmatter.title),l.a.createElement("p",{style:r()({},Object(m.b)(-.2),{display:"block",marginBottom:Object(m.a)(1),marginTop:Object(m.a)(-1)})},t.frontmatter.date),l.a.createElement("div",null,l.a.createElement(y.a,{scope:this.props.__mdxScope},t.code.body)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),l.a.createElement("hr",{style:{marginBottom:Object(m.a)(1)}}),l.a.createElement(s.a,null),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,a&&l.a.createElement(u.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(u.a,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},e}(l.a.Component);e.default=h;var g="984187558"},166:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(38),l=n.n(c);n.d(e,"a",function(){return l.a});n(168);var u=r.a.createContext({}),s=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var a=n(175),r=n.n(a),o=n(176),i=n.n(o),c=(n(160),{fontWeight:600});i.a.overrideThemeStyles=function(){return{h5:c,h4:c,h3:c,h2:c,h1:c,"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts,i.a.headerFontFamily=["Montserrat","Georgia","serif"],i.a.bodyFontFamily=["Open Sans","Georgia","serif"];var l=new r.a(i.a);var u=l.rhythm,s=l.scale},168:function(t,e,n){var a;t.exports=(a=n(169))&&a.default||a},169:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(4),l=n.n(c),u=n(58),s=n(2),p=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?i.a.createElement(u.a,r()({location:e,pageResources:n},n.json)):null};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=p},170:function(t,e,n){"use strict";var a=n(8),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(166),s=n(167),p=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,o=e.children;return t="/"===n.pathname?l.a.createElement("h1",{style:r()({},Object(s.b)(1),{marginBottom:Object(s.a)(1.5),marginTop:0,fontWeight:600})},l.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,fontWeight:600}},l.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(26),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},l.a.createElement("header",null,t),l.a.createElement("main",null,o),l.a.createElement("footer",null))},e}(l.a.Component);e.a=p},171:function(t,e,n){"use strict";var a=n(172),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(177),u=n.n(l);function s(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,l=t.image,s=a.data.site,p=e;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:c},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:p},{name:"twitter:image",content:l},{name:"og:image",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=s},172:function(t){t.exports={data:{site:{siteMetadata:{title:"Oleksandr Dubenko",author:"Oleksandr Dubenko"}}}}},173:function(t,e,n){"use strict";var a=n(174),r=n(0),o=n.n(r),i=n(166),c=n(167);var l="4007731267";e.a=function(){return o.a.createElement(i.b,{query:l,render:function(t){var e=t.site.siteMetadata,n=e.author,a=e.social;return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},o.a.createElement("p",null,"Blog by"," ",o.a.createElement("a",{href:"https://twitter.com/"+a.twitter},n)))},data:a})}},174:function(t){t.exports={data:{avatar:null,site:{siteMetadata:{author:"Oleksandr Dubenko",social:{twitter:"dubenko_"}}}}}},188:function(t,e,n){var a=n(189);n(59),n(39),n(29),n(191);var r=n(8),o=n(83),i=n(0),c=n(55),l=c.useMDXComponents,u=c.mdx,s=n(72).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,p=o(t,["scope","components","children"]),d=l(n),m=s(e);if(!c)return null;var f=r({React:i,mdx:u},m),y=Object.keys(f),h=y.map(function(t){return f[t]}),g=a(Function,["_fn"].concat(y,[""+c])).apply(void 0,[{}].concat(h));return i.createElement(g,r({components:d},p))}},189:function(t,e,n){var a=n(190);function r(e,n,o){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=r=function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}:t.exports=r=Reflect.construct,r.apply(null,arguments)}t.exports=r},190:function(t,e){function n(e,a){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,a)}t.exports=n},191:function(t,e,n){var a=n(28),r=n(27);n(192)("keys",function(){return function(t){return r(a(t))}})},192:function(t,e,n){var a=n(10),r=n(20),o=n(21);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-de166f9f59b42eea908c.js.map