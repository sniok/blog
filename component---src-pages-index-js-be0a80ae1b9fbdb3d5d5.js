(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return m});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(166),c=n(172),s=n(170),u=n(168),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMdx.edges;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"blog",description:"uncreative blog about software dev",keywords:["blog","javascript","react"]}),n.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},i.a.createElement(l.a,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(i.a.Component);t.default=d;var m="1210983511"},166:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(38),c=n.n(l);n.d(t,"a",function(){return c.a});n(167);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,n){var a;e.exports=(a=n(169))&&a.default||a},168:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(173),r=n.n(a),o=n(174),i=n.n(o),l=(n(159),n(160),{fontWeight:800,fontFamily:"Inter, Georgia, sanf-serif"});i.a.overrideThemeStyles=function(){return{h5:l,h4:l,h3:l,h2:l,h1:l,"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts,i.a.headerFontFamily=["Inter","Georgia","serif"],i.a.bodyFontFamily=["Inter","Georgia","serif"];var c=new r.a(i.a);var s=c.rhythm,u=c.scale},169:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(4),c=n.n(l),s=n(58),u=n(2),d=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(s.a,r()({location:t,pageResources:n},n.json)):null};d.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=d},170:function(e,t,n){"use strict";var a=n(171),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(175),s=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title,c=e.image,u=a.data.site,d=t;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d},{name:"twitter:image",content:c},{name:"og:image",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Oleksandr Dubenko",author:"Oleksandr Dubenko"}}}}},172:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(166),c=i.a.createElement("div",{style:{height:"32px",width:"32px",marginTop:"1px"}},i.a.createElement("svg",{id:"Logo_FIXED","data-name":"Logo — FIXED",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400"},i.a.createElement("defs",null),i.a.createElement("path",{className:"cls-2",fill:"currentColor",d:"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"})));var s=function(){return i.a.createElement("a",{href:"http://twitter.com/dubenko_",style:{display:"flex",height:"40px",fontSize:"16px",alignItems:"center",textDecoration:"none",boxShadow:"none"}},c)},u=n(168),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?i.a.createElement("h3",{style:{marginBottom:Object(u.a)(1.5),marginTop:0,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"space-between"}},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),i.a.createElement(s,null)):i.a.createElement("h3",{style:{marginTop:0,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"space-between"}},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit",fontWeight:700},to:"/"},a),i.a.createElement(s,null)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(26),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,r),i.a.createElement("footer",null))},t}(i.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-index-js-be0a80ae1b9fbdb3d5d5.js.map