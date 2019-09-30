/*!
 * github-buttons v2.3.2
 * (c) 2019 なつき
 * @license BSD-2-Clause
 */
!function(){"use strict";var e=window.document,t=e.location,o=window.Math,r=window.HTMLElement,n=window.XMLHttpRequest,a="https://buttons.github.io/buttons.html",i=n&&n.prototype&&"withCredentials"in n.prototype,l=i&&r&&r.prototype.attachShadow&&!r.prototype.attachShadow.prototype,c=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.decodeURIComponent);for(var n={},a=e.split(t),i=0,l=a.length;i<l;++i){var c=a[i];if(""!==c){var d=c.split(o);n[r(d[0])]=null!=d[1]?r(d.slice(1).join(o)):void 0}}return n},d=function(e,t,o){e.addEventListener?e.addEventListener(t,o):e.attachEvent("on"+t,o)},s=function(e,t,o){e.removeEventListener?e.removeEventListener(t,o):e.detachEvent("on"+t,o)},u=function(e,t,o){var r=function(n){return s(e,t,r),o(n)};d(e,t,r)},f=function(e,t,o){var r=function(n){if(t.test(e.readyState))return s(e,"readystatechange",r),o(n)};d(e,"readystatechange",r)},g=function(e){return function(t,o,r){var n=e.createElement(t);if(o)for(var a in o){var i=o[a];null!=i&&(null!=n[a]?n[a]=i:n.setAttribute(a,i))}if(r)for(var l=0,c=r.length;l<c;l++){var d=r[l];n.appendChild("string"==typeof d?e.createTextNode(d):d)}return n}},h=g(e),p=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}},b=function(e,t){return{}.hasOwnProperty.call(e,t)},m={light:'a{color:#24292e}.btn,.social-count{border-color:#c5c9cc}.btn{background-color:#eff3f6;background-image:-webkit-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,.2);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FFFAFBFC\', endColorstr=\'#FFEEF2F5\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FFFAFBFC", endColorstr="#FFEEF2F5")}.btn:active{background-color:#eaeef2;background-image:none;border-color:#a5a9ac;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15)}.btn:focus,.btn:hover{background-color:#e6ebf0;background-image:-webkit-linear-gradient(top, #f0f3f6, #e6ebf0 90%);background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf0 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf0 90%);border-color:#a5a9ac;border-color:rgba(27,31,35,.35);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FFF0F3F6\', endColorstr=\'#FFE5EAEF\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FFF0F3F6", endColorstr="#FFE5EAEF")}.social-count{background-color:#fff}.social-count:focus,.social-count:hover{color:#0366d6}.social-count b{border-right-color:#c5c9cc}.social-count i{border-right-color:#fff}',dark:'a{color:#d1d5da}.btn,.social-count{border-color:#1e2226}.btn{background-color:#282e33;background-image:-webkit-linear-gradient(top, #2f363d, #282e33 90%);background-image:-moz-linear-gradient(top, #2f363d, #282e33 90%);background-image:linear-gradient(180deg, #2f363d, #282e33 90%);background-position:-1px -1px;background-repeat:repeat-x;background-size:110% 110%;border-color:rgba(27,31,35,.8);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FF2F363D\', endColorstr=\'#FF272D32\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FF2F363D", endColorstr="#FF272D32")}.btn:active{background-color:#24292f;background-image:none;border-color:#202429;border-color:rgba(27,31,35,.65);box-shadow:inset 0 .15em .3em rgba(27,31,35,.85)}.btn:focus,.btn:hover{background-color:#333a42;background-image:-webkit-linear-gradient(top, #3a434b, #333a42 90%);background-image:-moz-linear-gradient(top, #3a434b, #333a42 90%);background-image:linear-gradient(180deg, #3a434b, #333a42 90%);border-color:#202429;border-color:rgba(27,31,35,.65);-ms-filter:"progid:DXImageTransform.Microsoft.Gradient(startColorstr=\'#FF3A434B\', endColorstr=\'#FF323941\')";*filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr="#FF3A434B", endColorstr="#FF323941")}.social-count{background-color:#1b1f23}.social-count:focus,.social-count:hover{color:#2188ff}.social-count b{border-right-color:#1e2226}.social-count i{border-right-color:#1b1f23}'},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+m[b(m,t)?t:e]+"}"},w={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},x={},F=function(e,t){var o=x[e]||(x[e]=[]);if(!(o.push(t)>1)){var r=p((function(){for(delete x[e];t=o.shift();)t.apply(null,arguments)}));if(i){var a=new n;d(a,"abort",r),d(a,"error",r),d(a,"load",(function(){var e;try{e=JSON.parse(a.responseText)}catch(e){return void r(e)}r(200!==a.status,e)})),a.open("GET",e),a.send()}else{var l=this||window;l._=function(e){l._=null,r(200!==e.meta.status,e.data)};var c=g(l.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){l._&&l._({meta:{}})};d(c,"load",s),d(c,"error",s),c.readyState&&f(c,/de|m/,s),l.document.getElementsByTagName("head")[0].appendChild(c)}}},k=function(e,t,o){var r=g(e.ownerDocument),n=e.appendChild(r("style",{type:"text/css"})),a='body{margin:0}a{text-decoration:none;outline:0}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn,.social-count{display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;border:1px solid;border-radius:.25em}.social-count{position:relative;margin-left:5px}.social-count b,.social-count i{position:absolute;top:50%;left:0;display:block;width:0;height:0;margin:-4px 0 0 -4px;border:solid transparent;border-width:4px 4px 4px 0;_line-height:0;_border-top-color:red !important;_border-bottom-color:red !important;_border-left-color:red !important;_filter:chroma(color=red)}.social-count i{margin-left:-3px}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.widget-lg .social-count{margin-left:6px}.widget-lg .social-count b,.widget-lg .social-count i{margin:-5px 0 0 -5px;border-width:5px 5px 5px 0}.widget-lg .social-count i{margin-left:-4px}'+function(e){if(null==e)return m.light;var t=c(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return m[b(m,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)}(t["data-color-scheme"]);n.styleSheet?n.styleSheet.cssText=a:n.appendChild(e.ownerDocument.createTextNode(a));var i,l,d=r("a",{className:"btn",href:t.href,target:"_blank",rel:"noopener",innerHTML:(i=t["data-icon"],l=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),b(w,i)||(i="mark-github"),'<svg version="1.1" width="'+l*w[i].width/w[i].height+'" height="'+l+'" viewBox="0 0 '+w[i].width+" "+w[i].height+'" class="octicon octicon-'+i+'" aria-hidden="true">'+w[i].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",r("span",{},[t["data-text"]||""])]);/\.github\.com$/.test("."+d.hostname)?/^https?:\/\/((gist\.)?github\.com\/[^/?#]+\/[^/?#]+\/archive\/|github\.com\/[^/?#]+\/[^/?#]+\/releases\/download\/|codeload\.github\.com\/)/.test(d.href)&&(d.target="_top"):(d.href="#",d.target="_self");var s,u,f,h,p=e.appendChild(r("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[d]));/^(true|1)$/i.test(t["data-show-count"])&&"github.com"===d.hostname&&(s=d.pathname.replace(/^(?!\/)/,"/").match(/^\/([^/?#]+)(?:\/([^/?#]+)(?:\/(?:(subscription)|(fork)|(issues)|([^/?#]+)))?)?(?:[/?#]|$)/))&&!s[6]?(s[2]?(u="/repos/"+s[1]+"/"+s[2],s[3]?(h="subscribers_count",f="watchers"):s[4]?(h="forks_count",f="network"):s[5]?(h="open_issues_count",f="issues"):(h="stargazers_count",f="stargazers")):(u="/users/"+s[1],f=h="followers"),F.call(this,"https://api.github.com"+u,(function(e,t){if(!e){var n=t[h];p.appendChild(r("a",{className:"social-count",href:t.html_url+"/"+f,target:"_blank",rel:"noopener","aria-label":n+" "+h.replace(/_count$/,"").replace("_"," ").slice(0,n<2?-1:void 0)+" on GitHub"},[r("b"),r("i"),r("span",{},[(""+n).replace(/\B(?=(\d{3})+(?!\d))/g,",")])]))}o(p)}))):o(p)},C=window.devicePixelRatio||1,y=function(e){return(C>1?o.ceil(o.round(e*C)/C*2)/2:o.ceil(e))||0},z=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},E=function(t,r){if(null!=t&&null!=r)if(t.getAttribute&&(t=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},o=["icon","color-scheme","text","size","show-count"],r=0,n=o.length;r<n;r++){var a="data-"+o[r];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(t)),l){var n=h("span",{title:t.title||void 0});k(n.attachShadow({mode:"closed"}),t,(function(){r(n)}))}else{var i=h("iframe",{src:"javascript:0",title:t.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});z(i,[0,0]),i.style.border="none";var c=function(){var n,l=i.contentWindow;try{n=l.document.body}catch(t){return void e.body.appendChild(i.parentNode.removeChild(i))}s(i,"load",c),k.call(l,n,t,(function(e){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=o.max(t,y(n.width)),r=o.max(r,y(n.height))}return[t,r]}(e);i.parentNode.removeChild(i),u(i,"load",(function(){z(i,n)})),i.src=a+"#"+(i.name=function(e,t,o,r){null==t&&(t="&"),null==o&&(o="="),null==r&&(r=window.encodeURIComponent);var n=[];for(var a in e){var i=e[a];null!=i&&n.push(r(a)+o+r(i))}return n.join(t)}(t)),r(i)}))};d(i,"load",c),e.body.appendChild(i)}};t.protocol+"//"+t.host+t.pathname===a?k(e.body,c(window.name||t.hash.replace(/^#/,""))):function(t){if(/m/.test(e.readyState)||!/g/.test(e.readyState)&&!e.documentElement.doScroll)setTimeout(t);else if(e.addEventListener){var o=p(t);u(e,"DOMContentLoaded",o),u(window,"load",o)}else f(e,/m/,t)}((function(){for(var t=e.querySelectorAll?e.querySelectorAll("a.github-button"):function(){for(var t=[],o=e.getElementsByTagName("a"),r=0,n=o.length;r<n;r++)~(" "+o[r].className+" ").replace(/[ \t\n\f\r]+/g," ").indexOf(" github-button ")&&t.push(o[r]);return t}(),o=0,r=t.length;o<r;o++)!function(e){E(e,(function(t){e.parentNode.replaceChild(t,e)}))}(t[o])}))}();
