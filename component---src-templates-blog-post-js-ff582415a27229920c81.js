(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{166:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),s=n(167),u=n(178),p=n(169);var m="4007731267",d=function(){return l.a.createElement(s.b,{query:m,render:function(t){var e=t.site.siteMetadata,n=e.author,a=e.social;return l.a.createElement("div",{style:{display:"flex",marginBottom:Object(p.a)(2.5)}},l.a.createElement("p",null,"Blog by"," ",l.a.createElement("a",{href:"https://twitter.com/"+a.twitter},n)))},data:u})},f=n(173),h=n(171),y=n(188),g=n.n(y);n.d(e,"pageQuery",function(){return v});var b=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.data.mdx,e=this.props.data.site.siteMetadata.title,n=this.props.pageContext,a=n.previous,o=n.next;return l.a.createElement(f.a,{location:this.props.location,title:e},l.a.createElement(h.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),l.a.createElement("h1",null,t.frontmatter.title),l.a.createElement("p",{style:r()({},Object(p.b)(-.2),{display:"block",marginBottom:Object(p.a)(1),marginTop:Object(p.a)(-1)})},t.frontmatter.date),l.a.createElement("div",null,l.a.createElement(g.a,{scope:this.props.__mdxScope},t.code.body)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),l.a.createElement("hr",{style:{marginBottom:Object(p.a)(1)}}),l.a.createElement(d,null),l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,a&&l.a.createElement(s.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),l.a.createElement("li",null,o&&l.a.createElement(s.a,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},e}(l.a.Component),v=(e.default=b,"984187558")},167:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(38),l=n.n(c);n.d(e,"a",function(){return l.a});n(168);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},168:function(t,e,n){var a;t.exports=(a=n(170))&&a.default||a},169:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return u});var a=n(174),r=n.n(a),o=n(175),i=n.n(o),c=(n(161),{fontWeight:600});i.a.overrideThemeStyles=function(){return{h5:c,h4:c,h3:c,h2:c,h1:c,"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts,i.a.headerFontFamily=["Montserrat","Georgia","serif"],i.a.bodyFontFamily=["Open Sans","Georgia","serif"];var l=new r.a(i.a);var s=l.rhythm,u=l.scale},170:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(4),l=n.n(c),s=n(58),u=n(2),p=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return n?i.a.createElement(s.a,r()({location:e,pageResources:n},n.json)):null};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},e.default=p},171:function(t,e,n){"use strict";var a=n(172),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(176),s=n.n(l);function u(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,l=t.image,u=a.data.site,p=e;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:c},{property:"og:description",content:p},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:p},{name:"twitter:image",content:l},{name:"og:image",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},172:function(t){t.exports={data:{site:{siteMetadata:{title:"Oleksandr Dubenko",author:"Oleksandr Dubenko"}}}}},173:function(t,e,n){"use strict";var a=n(8),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),s=n(167),u=l.a.createElement("div",{style:{height:"32px",width:"32px",marginTop:"1px"}},l.a.createElement("svg",{id:"Logo_FIXED","data-name":"Logo — FIXED",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400"},l.a.createElement("defs",null),l.a.createElement("path",{className:"cls-2",fill:"currentColor",d:"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"})));var p=function(){return l.a.createElement("a",{href:"http://twitter.com/dubenko_",style:{display:"flex",height:"40px",fontSize:"16px",alignItems:"center",textDecoration:"none",boxShadow:"none"}},u,"@dubenko_")},m=n(169),d=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,o=e.children;return t="/"===n.pathname?l.a.createElement("h1",{style:r()({},Object(m.b)(1),{marginBottom:Object(m.a)(1.5),marginTop:0,fontWeight:600})},l.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),l.a.createElement(p,null)):l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),l.a.createElement(p,null)),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(m.a)(26),padding:Object(m.a)(1.5)+" "+Object(m.a)(.75)}},l.a.createElement("header",null,t),l.a.createElement("main",null,o),l.a.createElement("footer",null))},e}(l.a.Component);e.a=d},178:function(t){t.exports={data:{avatar:null,site:{siteMetadata:{author:"Oleksandr Dubenko",social:{twitter:"dubenko_"}}}}}},188:function(t,e,n){var a=n(189);n(59),n(39),n(29),n(191);var r=n(8),o=n(84),i=n(0),c=n(55),l=c.useMDXComponents,s=c.mdx,u=n(73).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,c=t.children,p=o(t,["scope","components","children"]),m=l(n),d=u(e);if(!c)return null;var f=r({React:i,mdx:s},d),h=Object.keys(f),y=h.map(function(t){return f[t]}),g=a(Function,["_fn"].concat(h,[""+c])).apply(void 0,[{}].concat(y));return i.createElement(g,r({components:m},p))}},189:function(t,e,n){var a=n(190);function r(e,n,o){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=r=function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}:t.exports=r=Reflect.construct,r.apply(null,arguments)}t.exports=r},190:function(t,e){function n(e,a){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,a)}t.exports=n},191:function(t,e,n){var a=n(28),r=n(27);n(192)("keys",function(){return function(t){return r(a(t))}})},192:function(t,e,n){var a=n(10),r=n(20),o=n(21);t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],i={};i[t]=e(n),a(a.S+a.F*o(function(){n(1)}),"Object",i)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ff582415a27229920c81.js.map