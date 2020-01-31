(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=a(a.s=o[0]))}return t}var r={},s={app:0},n=[];function a(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=r,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(o,r,function(e){return t[e]}.bind(null,r));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0715":function(t,e,o){},"1d5e":function(t,e,o){"use strict";var r=o("e648"),s=o.n(r);s.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("form",{attrs:{autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:"false"}},[o("fieldset",{staticClass:"form-group"},[o("h4",[t._v("Choose a button")]),o("div",{staticClass:"row"},t._l(t.types,(function(e){return o("div",{key:e.value,staticClass:"col-9 col-sm-6 col-md-4 col-lg-2"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.type,expression:"options.type"}],staticClass:"form-check-input",attrs:{type:"radio",name:"type"},domProps:{value:e.value,checked:t._q(t.options.type,e.value)},on:{change:function(o){return t.$set(t.options,"type",e.value)}}}),t._v(t._s(t._f("capitalize")(e.value))),o("br"),o("github-button",{attrs:{href:"#","data-size":"large","data-icon":e.icon,"data-text":t.$options.filters.capitalize(e.value),"aria-hidden":"true"}})],1)])])})),0)]),o("hr"),t.options.type?o("div",{staticClass:"row"},[o("div",{staticClass:"col-12 col-sm-6 col-md-4"},[o("h4",[t._v("Button options")]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.user,expression:"options.user"}],ref:"user",staticClass:"form-control",class:{"is-invalid":""!==t.options.user&&!t.isValidUser},attrs:{type:"text",maxlength:"39",placeholder:":user",autofocus:"autofocus"},domProps:{value:t.options.user},on:{input:function(e){e.target.composing||t.$set(t.options,"user",e.target.value)}}}),t._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.repo,expression:"options.repo"}],ref:"repo",staticClass:"form-control",class:{"is-invalid":""!==t.options.repo&&!t.isValidRepo},attrs:{type:"text",maxlength:"100",placeholder:":repo",disabled:"follow"===t.options.type||"sponsor"===t.options.type},domProps:{value:t.options.repo},on:{input:function(e){e.target.composing||t.$set(t.options,"repo",e.target.value)}}})])]),o("div",{staticClass:"form-group"},[o("div",{staticClass:"form-row align-items-center my-1"},[o("div",{staticClass:"col-auto mr-auto"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.colorScheme,expression:"options.colorScheme"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.colorScheme)?t._i(t.options.colorScheme,null)>-1:t.options.colorScheme},on:{change:function(e){var o=t.options.colorScheme,r=e.target,s=!!r.checked;if(Array.isArray(o)){var n=null,a=t._i(o,n);r.checked?a<0&&t.$set(t.options,"colorScheme",o.concat([n])):a>-1&&t.$set(t.options,"colorScheme",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"colorScheme",s)}}}),t._v(" Color scheme ")])])]),o("div",{staticClass:"col-auto"},[o("label",{staticClass:"sr-only",attrs:{for:"prefers-color-scheme-no-preference"}},[t._v("@media (prefers-color-scheme: no-preference)")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.prefersColorScheme["no-preference"],expression:"options.prefersColorScheme['no-preference']"}],staticClass:"form-control form-control-sm",attrs:{id:"prefers-color-scheme-no-preference",disabled:!0!==t.options.colorScheme},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options.prefersColorScheme,"no-preference",e.target.multiple?o:o[0])}}},t._l(t.colorSchemes,(function(e){return o("option",{key:e},[t._v(t._s(e))])})),0)])]),o("div",{staticClass:"form-row align-items-center my-1 ml-3"},[t._m(1),o("div",{staticClass:"col-auto"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.prefersColorScheme.light,expression:"options.prefersColorScheme.light"}],staticClass:"form-control form-control-sm",attrs:{id:"prefers-color-scheme-light",disabled:!0!==t.options.colorScheme},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options.prefersColorScheme,"light",e.target.multiple?o:o[0])}}},t._l(t.colorSchemes,(function(e){return o("option",{key:e},[t._v(t._s(e))])})),0)])]),o("div",{staticClass:"form-row align-items-center my-1 ml-3"},[t._m(2),o("div",{staticClass:"col-auto"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.prefersColorScheme.dark,expression:"options.prefersColorScheme.dark"}],staticClass:"form-control form-control-sm",attrs:{id:"prefers-color-scheme-dark",disabled:!0!==t.options.colorScheme},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options.prefersColorScheme,"dark",e.target.multiple?o:o[0])}}},t._l(t.colorSchemes,(function(e){return o("option",{key:e},[t._v(t._s(e))])})),0)])]),o("div",{staticClass:"form-row my-2"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.largeButton,expression:"options.largeButton"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.largeButton)?t._i(t.options.largeButton,null)>-1:t.options.largeButton},on:{change:function(e){var o=t.options.largeButton,r=e.target,s=!!r.checked;if(Array.isArray(o)){var n=null,a=t._i(o,n);r.checked?a<0&&t.$set(t.options,"largeButton",o.concat([n])):a>-1&&t.$set(t.options,"largeButton",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"largeButton",s)}}}),t._v(" Large button ")])])])]),o("div",{staticClass:"form-row my-2"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.showCount,expression:"options.showCount"}],staticClass:"form-check-input",attrs:{type:"checkbox",disabled:"sponsor"===t.options.type||"use this template"===t.options.type||"download"===t.options.type},domProps:{checked:Array.isArray(t.options.showCount)?t._i(t.options.showCount,null)>-1:t.options.showCount},on:{change:function(e){var o=t.options.showCount,r=e.target,s=!!r.checked;if(Array.isArray(o)){var n=null,a=t._i(o,n);r.checked?a<0&&t.$set(t.options,"showCount",o.concat([n])):a>-1&&t.$set(t.options,"showCount",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"showCount",s)}}}),t._v(" Show count ")])])])]),o("div",{staticClass:"form-row my-2"},[o("div",{staticClass:"col-auto"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.standardIcon,expression:"options.standardIcon"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.standardIcon)?t._i(t.options.standardIcon,null)>-1:t.options.standardIcon},on:{change:function(e){var o=t.options.standardIcon,r=e.target,s=!!r.checked;if(Array.isArray(o)){var n=null,a=t._i(o,n);r.checked?a<0&&t.$set(t.options,"standardIcon",o.concat([n])):a>-1&&t.$set(t.options,"standardIcon",o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,"standardIcon",s)}}}),t._v(" Standard icon ")])])])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"syntax"}},[t._v("Syntax")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.options.syntax,expression:"options.syntax"}],staticClass:"form-control",attrs:{id:"syntax"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.options,"syntax",e.target.multiple?o:o[0])}}},[o("option",[t._v("html")]),o("option",{attrs:{value:"vue"}},[t._v("vue-github-button")]),o("option",{attrs:{value:"react"}},[t._v("react-github-btn")])])])]),o("div",{staticClass:"col-12 col-sm-6 col-md-8"},[o("h4",[t._v("Preview and code")]),o("p",[t._v("Try out your button, then copy and paste the code below into the HTML for your site.")]),o("p",{style:{height:t.options.largeButton?"28px":"20px"}},[o("github-button",t._b({},"github-button",t.getPreviewAttrs(),!1))],1),o("div",{staticClass:"form-group"},[o("snippet",{attrs:{code:t.templateHTML}})],1),o("div",{staticClass:"form-group"},[o("snippet",{attrs:{code:t.scriptHTML}})],1)])]):t._e()])])},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input-group-append input-group-prepend"},[o("span",{staticClass:"input-group-text"},[t._v("/")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-auto mr-auto"},[o("label",{staticClass:"form-check-label col-form-label-sm",attrs:{for:"prefers-color-scheme-light"}},[t._v("@media (prefers-color-scheme: light)")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-auto mr-auto"},[o("label",{staticClass:"form-check-label col-form-label-sm",attrs:{for:"prefers-color-scheme-dark"}},[t._v("@media (prefers-color-scheme: dark)")])])}],a=(o("a4d3"),o("4de4"),o("4160"),o("fb6a"),o("e439"),o("dbb4"),o("b64b"),o("d3b7"),o("ac1f"),o("25f0"),o("5319"),o("159b"),o("ade3")),i=(o("db43"),o("e878")),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-control",attrs:{rows:t.code.split("\n").length,readonly:""},domProps:{value:t.code},on:{click:function(e){return t.$el.select()},focus:function(e){return t.$el.select()},mouseup:function(t){t.preventDefault()},input:function(e){e.target.composing||(t.code=e.target.value)}}})},l=[],u={name:"snippet",props:["code"]},p=u,d=(o("1d5e"),o("2877")),f=Object(d["a"])(p,c,l,!1,null,"067918b6",null),m=f.exports;function h(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?h(Object(o),!0).forEach((function(e){Object(a["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var b={name:"app",components:{GithubButton:i["a"],Snippet:m},data:function(){return{types:[{value:"follow",icon:"octicon-mark-github"},{value:"sponsor",icon:"octicon-heart"},{value:"watch",icon:"octicon-eye"},{value:"star",icon:"octicon-star"},{value:"fork",icon:"octicon-repo-forked"},{value:"use this template",icon:"octicon-repo-template"},{value:"issue",icon:"octicon-issue-opened"},{value:"download",icon:"octicon-cloud-download"}],colorSchemes:["light","dark"],options:{user:"",repo:"",type:null,colorScheme:!1,prefersColorScheme:{"no-preference":"light",light:"light",dark:"dark"},largeButton:!1,showCount:!1,standardIcon:!1,syntax:function(t){return/\bvue-github-button\b/i.test(t)?"vue":/\breact-github-btn\b/i.test(t)?"react":"html"}(document.referrer)},timeoutID:0}},watch:{"options.type":function(){var t=this;this.$nextTick((function(){document.activeElement!==t.$refs.user&&document.activeElement!==t.$refs.repo&&("follow"===t.options.type||"sponsor"===t.options.type||!t.isValidUser||t.isValidUser&&t.isValidRepo?t.$refs.user.focus():t.$refs.repo.focus())}))},"attrs.href":function(){var t=this;this.attrs["data-show-count"]&&(clearTimeout(this.timeoutID),this.timeoutID=setTimeout((function(){t.timeoutID=0}),300))}},computed:{isValidUser:function(){var t=this.options.user;return t.length>0&&t.length<40&&!/[^A-Za-z0-9-]|^-|-$|--/i.test(t)},isValidRepo:function(){var t=this.options.repo;return t.length>0&&t.length<101&&!/[^\w-.]|\.git$|^\.\.?$/i.test(t)},attrs:function(){var t=this,e=v({},this.options);return this.isValidUser&&(this.isValidRepo||"follow"===e.type||"sponsor"===e.type)||(e.user="ntkme",e.repo="github-buttons"),{href:function(){var t="https://github.com",o="/"+e.user,r=o+"/"+e.repo;switch(e.type){case"follow":return t+o;case"sponsor":return t+"/sponsors/"+e.user;case"watch":return t+r+"/subscription";case"star":return t+r;case"fork":return t+r+"/fork";case"use this template":return t+r+"/generate";case"issue":return t+r+"/issues";case"download":return t+r+"/archive/master.zip";default:return t}}(),"data-text":function(){return t.$options.filters.capitalize(e.type)+("follow"===e.type?" @"+e.user:"")}(),"data-color-scheme":function(){if(!0===e.colorScheme)return"no-preference: "+e.prefersColorScheme["no-preference"]+"; light: "+e.prefersColorScheme.light+"; dark: "+e.prefersColorScheme.dark+";"}(),"data-icon":function(){if(!e.standardIcon)switch(e.type){case"sponsor":return"octicon-heart";case"watch":return"octicon-eye";case"star":return"octicon-star";case"fork":return"octicon-repo-forked";case"use this template":return"octicon-repo-template";case"issue":return"octicon-issue-opened";case"download":return"octicon-cloud-download"}}(),"data-size":function(){if(e.largeButton)return"large"}(),"data-show-count":function(){if(e.showCount)switch(e.type){case"sponsor":case"use this template":case"download":return;default:return!0}}(),"aria-label":function(){return t.$options.filters.capitalize(e.type)+("follow"===e.type||"sponsor"===e.type?" @"+e.user:" "+e.user+"/"+e.repo)+" on GitHub"}()}},templateHTML:function(){var t=this,e=document.createElement("a");"html"===this.options.syntax&&(e.className="github-button");var o=this.attrs;for(var r in o)null!=o[r]&&("data-text"===r?e.textContent=o[r]:e.setAttribute(r,o[r]));return"\x3c!-- Place this tag where you want the button to render. --\x3e\n"+function(e){switch(t.options.syntax){case"vue":return e.replace(/^<a/,"<github-button").replace(/a>$/,"github-button>");case"react":return e.replace(/^<a/,"<GitHubButton").replace(/a>$/,"GitHubButton>");default:return e}}(e.outerHTML)},scriptHTML:function(){switch(this.options.syntax){case"vue":return"import GithubButton from 'vue-github-button'\n\nexport default {\n  components: {\n    GithubButton\n  },\n  // ...\n}";case"react":return"import GitHubButton from 'react-github-btn'";default:return'\x3c!-- Place this tag in your head or just before your close body tag. --\x3e\n<script async defer src="https://buttons.github.io/buttons.js"><\/script>'}}},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{getPreviewAttrs:function(){return v({},this.attrs,{"data-show-count":this.attrs["data-show-count"]&&!this.timeoutID})}}},g=b,y=(o("d936"),Object(d["a"])(g,s,n,!1,null,"b68ad326",null)),w=y.exports;window.onbeforeunload=function(){},r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},d936:function(t,e,o){"use strict";var r=o("0715"),s=o.n(r);s.a},db43:function(t,e,o){},e648:function(t,e,o){}});
//# sourceMappingURL=app.28ae14df.js.map