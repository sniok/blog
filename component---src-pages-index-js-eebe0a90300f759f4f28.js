(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return p});var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(154),l=a(161),s=a(158),u=a(159),d=a(155),m=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return i.a.createElement(s.a,{location:this.props.location,title:e},i.a.createElement(u.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),i.a.createElement(l.a,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return i.a.createElement("div",{key:e.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},i.a.createElement(c.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),i.a.createElement("small",null,e.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},e}(i.a.Component);e.default=m;var p="2785444898"},154:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(33),l=a.n(c);a.d(e,"a",function(){return l.a});a(156);var s=r.a.createContext({}),u=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return u});var n=a(163),r=a.n(n),o=a(164),i=a.n(o),c=(a(148),{fontWeight:600});i.a.overrideThemeStyles=function(){return{h5:c,h4:c,h3:c,h2:c,h1:c,"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts,i.a.headerFontFamily=["Montserrat","Georgia","serif"],i.a.bodyFontFamily=["Open Sans","Georgia","serif"];var l=new r.a(i.a);var s=l.rhythm,u=l.scale},156:function(t,e,a){var n;t.exports=(n=a(157))&&n.default||n},157:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),c=a(55),l=a(2),s=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},158:function(t,e,a){"use strict";a(34);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),c=a(154),l=a(155),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/blog/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0,fontWeight:600})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,fontWeight:600}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(26),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null))},e}(i.a.Component);e.a=s},159:function(t,e,a){"use strict";var n=a(160),r=a(0),o=a.n(r),i=a(4),c=a.n(i),l=a(165),s=a.n(l);function u(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,c=t.title,l=n.data.site,u=e;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u},160:function(t){t.exports={data:{site:{siteMetadata:{title:"My blog",author:"Olek Dubenko"}}}}},161:function(t,e,a){"use strict";var n=a(162),r=a(0),o=a.n(r),i=a(154),c=a(155);var l="4007731267";e.a=function(){return o.a.createElement(i.b,{query:l,render:function(t){var e=t.site.siteMetadata,a=e.author,n=e.social;return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},o.a.createElement("p",null,"Blog by"," ",o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},a)))},data:n})}},162:function(t){t.exports={data:{avatar:null,site:{siteMetadata:{author:"Olek Dubenko",social:{twitter:"dubenko_"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-eebe0a90300f759f4f28.js.map