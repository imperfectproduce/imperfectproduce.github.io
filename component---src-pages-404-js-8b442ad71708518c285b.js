(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return l});var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(169),s=n(170),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:e},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(i.a.Component);t.default=u;var l="1097489062"},165:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(38),s=n.n(c);n.d(t,"a",function(){return s.a});n(166);var u=r.a.createContext({});function l(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:n,render:a||o,staticQueryData:e})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},166:function(e,t,n){var a;e.exports=(a=n(168))&&a.default||a},167:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(172),r=n.n(a),o=n(173),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var s=c.rhythm,u=c.scale},168:function(e,t,n){"use strict";n.r(t);n(39);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(64),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},169:function(e,t,n){"use strict";n(39);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),c=n(165),s=n(167),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(1.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear()))},t}(i.a.Component);t.a=u},170:function(e,t,n){"use strict";var a=n(171),r=n(0),o=n.n(r),i=n(5),c=n.n(i),s=n(174),u=n.n(s),l=n(165);function d(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,c=e.title;return o.a.createElement(l.b,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1315885718"},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Imperfect Engineering Blog",description:"Imperfect Engineering Tech Blog"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-8b442ad71708518c285b.js.map