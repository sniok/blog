(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return u});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(173),l=n(171),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:e},i.a.createElement(l.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(i.a.Component);t.default=s;var u="1097489062"},167:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(38),l=n.n(c);n.d(t,"a",function(){return l.a});n(168);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},168:function(e,t,n){var a;e.exports=(a=n(170))&&a.default||a},169:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(174),r=n.n(a),o=n(175),i=n.n(o),c=(n(161),{fontWeight:600});i.a.overrideThemeStyles=function(){return{h5:c,h4:c,h3:c,h2:c,h1:c,"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts,i.a.headerFontFamily=["Montserrat","Georgia","serif"],i.a.bodyFontFamily=["Open Sans","Georgia","serif"];var l=new r.a(i.a);var s=l.rhythm,u=l.scale},170:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(4),l=n.n(c),s=n(58),u=n(2),d=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(s.a,r()({location:t,pageResources:n},n.json)):null};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},171:function(e,t,n){"use strict";var a=n(172),r=n(0),o=n.n(r),i=n(4),c=n.n(i),l=n(176),s=n.n(l);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title,l=e.image,u=a.data.site,d=t;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d},{name:"twitter:image",content:l},{name:"og:image",content:l}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Oleksandr Dubenko",author:"Oleksandr Dubenko"}}}}},173:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(7),i=n.n(o),c=n(0),l=n.n(c),s=n(167),u=l.a.createElement("div",{style:{height:"32px",width:"32px",marginTop:"1px"}},l.a.createElement("svg",{id:"Logo_FIXED","data-name":"Logo — FIXED",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 400 400"},l.a.createElement("defs",null),l.a.createElement("path",{className:"cls-2",fill:"currentColor",d:"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"})));var d=function(){return l.a.createElement("a",{href:"http://twitter.com/dubenko_",style:{display:"flex",height:"40px",fontSize:"16px",alignItems:"center",textDecoration:"none",boxShadow:"none"}},u,"@dubenko_")},p=n(169),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,o=t.children;return e="/"===n.pathname?l.a.createElement("h1",{style:r()({},Object(p.b)(1),{marginBottom:Object(p.a)(1.5),marginTop:0,fontWeight:600})},l.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),l.a.createElement(d,null)):l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"space-between"}},l.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a),l.a.createElement(d,null)),l.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(p.a)(26),padding:Object(p.a)(1.5)+" "+Object(p.a)(.75)}},l.a.createElement("header",null,e),l.a.createElement("main",null,o),l.a.createElement("footer",null))},t}(l.a.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-c33771efa0450581f6ac.js.map