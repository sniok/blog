(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(170),s=n(171),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},166:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(38),s=n.n(c);n.d(e,"a",function(){return s.a});n(168);var u=r.a.createContext({}),l=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return l});var a=n(175),r=n.n(a),o=n(176),i=n.n(o),c=(n(160),{fontWeight:600});i.a.overrideThemeStyles=function(){return{h5:c,h4:c,h3:c,h2:c,h1:c,"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts,i.a.headerFontFamily=["Montserrat","Georgia","serif"],i.a.bodyFontFamily=["Open Sans","Georgia","serif"];var s=new r.a(i.a);var u=s.rhythm,l=s.scale},168:function(t,e,n){var a;t.exports=(a=n(169))&&a.default||a},169:function(t,e,n){"use strict";n.r(e);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(4),s=n.n(c),u=n(58),l=n(2),d=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?i.a.createElement(u.a,r()({location:e,pageResources:n},n.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=d},170:function(t,e,n){"use strict";var a=n(8),r=n.n(a),o=n(7),i=n.n(o),c=n(0),s=n.n(c),u=n(166),l=n(167),d=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,o=e.children;return t="/"===n.pathname?s.a.createElement("h1",{style:r()({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0,fontWeight:600})},s.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,fontWeight:600}},s.a.createElement(u.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(26),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},s.a.createElement("header",null,t),s.a.createElement("main",null,o),s.a.createElement("footer",null))},e}(s.a.Component);e.a=d},171:function(t,e,n){"use strict";var a=n(172),r=n(0),o=n.n(r),i=n(4),c=n.n(i),s=n(177),u=n.n(s);function l(t){var e=t.description,n=t.lang,r=t.meta,i=t.keywords,c=t.title,s=a.data.site,l=e;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=l},172:function(t){t.exports={data:{site:{siteMetadata:{title:"Oleksandr Dubenko",author:"Oleksandr Dubenko"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-5cd17e68bbae4098af16.js.map