(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{36:function(t,e,r){"use strict";r.r(e);var n=r(63),s=r.n(n),i=r(1),o=r(20);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={threshold:.2,keys:[{name:"title",weight:.7},{name:"keywords",weight:.5}]},l={components:{ContentHeader:o.a},props:{query:{type:String,required:!0}},data:function(){return{results:[]}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(r,!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(i.b)("state",["navigation"]),{},Object(i.b)("preferences",["locale"]),{repo:function(){var t=Object.values(this.navigation).filter((function(t){return!t.isStructural}));return new s.a(t,u)},title:function(){return this.$options.filters.localize("search.title",{query:this.query})}}),watch:{$route:"search"},created:function(){this.search()},methods:{search:function(){this.results=this.repo.search(this.query),1===this.results.length&&this.$router.replace(this.results[0])}},metaInfo:function(){return{title:this.title}}},p=r(0),f=Object(p.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"page"},[r("ContentHeader",{staticClass:"uie-sob-l",attrs:{title:t.title}}),t._v(" "),r("article",{staticClass:"content"},[0===t.results.length?r("p",[t._v("\n      "+t._s(t._f("localize")("search.no_results"))+"\n    ")]):r("ul",t._l(t.results,(function(e){return r("li",{key:e.id},[r("RouterLink",{attrs:{to:e}},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v("\n        ("+t._s(t._f("upcaseFirstChar")(e.type))+")\n      ")],1)})),0)])],1)}),[],!1,null,null,null);e.default=f.exports}}]);