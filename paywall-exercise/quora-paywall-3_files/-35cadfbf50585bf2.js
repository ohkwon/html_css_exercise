/*
Name: early.js
URL: http://qsf.is.quoracdn.net/-35cadfbf50585bf2.js
Generated: 1412305653485756
Files: /w2.timing.js, /iesux.js, /settings.js, /log.settings.js, /log.js, /domain.js, /event.js, /errors.js, /redirect.js, /win.load.js, /app/view/search/google_search_iframe.js, /spin.js, /early.js
*/
rec('package', 'Start', 'early.js');require.install("w2.timing",function(require,a,b){(function(b,undefined){var c=a.timing={requests:[]},d=a.getTime=function(){return+(new Date)},e=a.logTime=function(a){var d=c[a]=+(new Date),e=b.log;e&&e.enabled&&a!="start"&&e("w2.timing.logTime",a,"=",(d-c.start)/1e3,"s")};e("start");var f=a.logRequestTime=function(d,e){var f=b.log,g={name:d===undefined?null:d,start:e,end:+(new Date)};a.stopped||c.requests.push(g),f&&f.enabled&&d!="start"&&f("w2.timing.logRequestTime",g.name,":",(g.start-c.start)/1e3,"..",(g.end-c.start)/1e3,"s")};a.stop=function(){a.stopped=!0},b.w2_timing=a})(window)},{}),require.install("iesux",function(require,a,b){if(navigator.appName==="Microsoft Internet Explorer"){var c=window,d=c.open;c.open=function(a,b,e){c.original_open=d;var f;try{f=c.original_open(a,b,e)}catch(g){f&&(f.name=b=Math.random().toString(36).slice(2)),f=c.original_open(a,b)}return f}}window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return b=="float"&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:void 0},this}),"bind"in Function.prototype||(Function.prototype.bind=function(a){var b=this;if(arguments.length<=1)return function(){return b.apply(a,arguments)};var c=Array.prototype.slice.call(arguments,1);return function(){return b.apply(a,arguments.length===0?c:c.concat(Array.prototype.slice.call(arguments)))}}),"trim"in String.prototype||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),"startsWith"in String.prototype||(String.prototype.startsWith=function(a){return this.indexOf(a)===0}),"endsWith"in String.prototype||(String.prototype.endsWith=function(a){return this.match(a+"$")==a}),"indexOf"in Array.prototype||(Array.prototype.indexOf=function(a,b){b===undefined&&(b=0),b<0&&(b+=this.length),b<0&&(b=0);for(var c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1}),"lastIndexOf"in Array.prototype||(Array.prototype.lastIndexOf=function(a,b){b===undefined&&(b=this.length-1),b<0&&(b+=this.length),b>this.length-1&&(b=this.length-1);for(b++;b-->0;)if(b in this&&this[b]===a)return b;return-1}),"forEach"in Array.prototype||(Array.prototype.forEach=function(a,b){for(var c=0,d=this.length;c<d;c++)c in this&&a.call(b,this[c],c,this)}),"map"in Array.prototype||(Array.prototype.map=function(a,b){var c=new Array(this.length);for(var d=0,e=this.length;d<e;d++)d in this&&(c[d]=a.call(b,this[d],d,this));return c}),"filter"in Array.prototype||(Array.prototype.filter=function(a,b){var c=[],d;for(var e=0,f=this.length;e<f;e++)e in this&&a.call(b,d=this[e],e,this)&&c.push(d);return c}),"every"in Array.prototype||(Array.prototype.every=function(a,b){for(var c=0,d=this.length;c<d;c++)if(c in this&&!a.call(b,this[c],c,this))return!1;return!0}),"some"in Array.prototype||(Array.prototype.some=function(a,b){for(var c=0,d=this.length;c<d;c++)if(c in this&&a.call(b,this[c],c,this))return!0;return!1})},{}),require("iesux"),require.install("log.settings",function(require,a,b){a.resetSettings=function(a){var b=require("settings");a.enable(b===null?!1:b.client_side_logging||!1),a.scopes.resetLevel("",a.level.error),a.scopes.resetLevel("page",a.level.trace),a.scopes.resetLevel("history_manager",a.level.trace),a.scopes.resetLevel("paged_list",a.level.trace),a.scopes.resetLevel("test",a.level.trace)}},{settings:!0}),require.install("log",function(require,a,b){(function(b,undefined){var c=new Date,d=function(a){return Array.prototype.join.call(a," ")},e=function(a,b){for(var c in b)a[c]=b[c];return a},f=b.log=a.log=function(){return f.log.apply(f,arguments)},g=b.console,h=g||{},i=window&&window.navigator.appName=="Microsoft Internet Explorer";if(i){var j=/MSIE ([0-9]{1,}[.0-9]{0,})/;j.exec(navigator.userAgent)!==null&&parseFloat(RegExp.$1)>=8?(h={},h.log=function(){g&&g.log&&g.log(d(arguments))},h.info=function(){g&&g.log&&g.info(d(arguments))},h.warn=function(){g&&g.log&&g.warn(d(arguments))},h.error=function(){g&&g.log&&g.error(d(arguments))}):h={}}var k=["log","info","warn","error"],l=function(){};for(var m in k){var n=k[m];h[n]||(h[n]=l)}var o=function(a){a===undefined&&(a=null),this.level=a,this.children={}};o.prototype.setLevel=function(a,b,c){var d=this.tryGetChild(a,c);if(d===null){b===undefined&&(b=null),this.level=b;return}d.child===undefined&&(this.children[d.name]=d.child=new o),d.child.setLevel(a,b,d.continueFrom),this.optimize(d.name)},o.prototype.removeChildren=function(a,b){var c=this.tryGetChild(a,b);if(c===null){this.children={};return}if(c.child===undefined)return;c.child.removeChildren(a,c.continueFrom),this.optimize(c.name)},o.prototype.optimize=function(a){var b=this.children[a];b!==undefined&&b.level===null&&b.childCount()===0&&delete this.children[a]},o.prototype.childCount=function(){var a=0;for(var b in this.children)this.children.hasOwnProperty(b)&&a++;return a},o.prototype.getLevel=function(a,b){var c=this.tryGetChild(a,b);if(c===null||c.child===undefined)return this.level;var d=c.child.getLevel(a,c.continueFrom);return d!==null?d:this.level},o.prototype.print=function(a,b,c){var d=this.level===null?c:this.level;f.console.log(a+b+": "+f.level.toString(d)+(this.level===null?" (inherited)":""));for(b in this.children){var e=this.children[b];e.print(a+"  ",b,d)}},o.prototype.tryGetChild=function(a,b){if("string"!=typeof a)throw new Error("Scope must be string.");b=b||0;if(b>=a.length)return null;var c=a.indexOf(".",b),d=null;return c<0?(c=a.length,d=a.substr(b,c-b)):(d=a.substr(b,c-b),c++),{name:d,child:this.children[d],continueFrom:c}};var p=function(a,b,c){this.time=new Date,this.level=a,this.scope=b,this.data=c,this.message=d(c)};p.prototype.toString=function(){return f.level.toString(this.level).concat(" ",this._timeToString(),", ",this.scope,": ",this.message)},p.prototype.print=function(){var a=this.level=="trace"?"log":this.level;f.console[f.level.toString(a)].apply(f.console,[this._timeToString()+", "+this.scope+":"].concat(this.data))},p.prototype.checkScope=function(a){return this.scope==a||this.scope.startsWith(a+".")},p.prototype._timeToString=function(){return((this.time-c)/1e3).toString()+"s"};var q=function(a){this.list=a||[]};q.prototype.toString=function(){return this.list.join("\r\n")},q.prototype.print=function(){for(var a in this.list)this.list[a].print()},q.prototype.add=function(a){return this.list.push(a)},q.prototype.count=function(){return this.list.length},q.prototype.getLast=function(){return this.list.length===0?null:this.list[this.list.length-1]},q.prototype.clear=function(){this.list=[]},q.prototype.filter=function(a,b){var c,d;if(typeof a=="function")return c=Array.prototype.filter.apply(this.list,arguments),new q(c);b===undefined&&typeof a=="string"&&(b=a,a=null);var e=typeof a=="number";if(!e){var f={};for(d in a)f[a[d]]=a[d];a=f}c=[];for(d in this.list){var g=this.list[d];if(a!==null&&a!==undefined&&(e?g.level<a:!(g.level in a)))continue;if(b!==null&&b!==undefined&&!g.checkScope(b))continue;c.push(g)}return new q(c)};var r={enabled:null,outputEnabled:!0,entries:new q,level:{none:0,trace:1,log:2,info:3,warn:4,error:5,toString:function(a){switch(a){case 0:return"none";case 1:return"trace";case 2:return"log";case 3:return"info";case 4:return"warn";case 5:return"error";default:throw new Error("Unknown log.level value.")}}},scopes:{root:new o(0),cache:{},setLevel:function(a,b){this.root.setLevel(a,b),this.cache={}},resetLevel:function(a,b){this.root.removeChildren(a),this.root.setLevel(a,b),this.cache={}},removeChildren:function(a){this.root.removeChildren(a),this.cache={}},getLevel:function(a){return this.cache[a]===undefined&&(this.cache[a]=this.root.getLevel(a)||f.level.none),this.cache[a]},hasLevel:function(a,b){var c=this.getLevel(a);return c<=b&&c!=f.level.none},print:function(a){f.console.log("Log scopes:"),this.root.print("  ","(root)")}},enabledImpl:{console:h,trace:function(a){var b=this._tryAddLogEntry(f.level.log,a,Array.prototype.slice.call(arguments,1));return b===null?null:(f.outputEnabled&&(f.console.trace?f.console.trace():f.console.log.call(f.console,("Stack trace:\r\n"+f._getStackTrace()).replace("\r\n","\r\n  "))),b)},log:function(a){return this._tryAddLogEntry(f.level.log,a,Array.prototype.slice.call(arguments,1))},info:function(a){return this._tryAddLogEntry(f.level.info,a,Array.prototype.slice.call(arguments,1))},warn:function(a){return this._tryAddLogEntry(f.level.warn,a,Array.prototype.slice.call(arguments,1))},error:function(a){return this._tryAddLogEntry(f.level.error,a,Array.prototype.slice.call(arguments,1))},_tryAddLogEntry:function(a,b,c){if(!f.scopes.hasLevel(b,a))return null;var d=new p(a,b,c);return f.entries.add(d),f.outputEnabled&&d.print(),d},_getStackTrace:function(){var a=[],b=!1;try{e.dont.exist+=0}catch(c){var d,e,f;if(c.stack){d=c.stack.split("\n");for(e=0,f=d.length;e<f;e++)d[e].match(/^\s*[A-Za-z0-9\-_\$]+\(/)&&a.push(d[e]);a.shift(),b=!0}else if(window&&window.opera&&c.message){d=c.message.split("\n");for(e=0,f=d.length;e<f;e++)if(d[e].match(/^\s*[A-Za-z0-9\-_\$]+\(/)){var g=d[e];d[e+1]&&(g+=" at "+d[e+1],e++),a.push(g)}a.shift(),b=!0}}if(!b){var h=arguments.callee.caller;while(h){var i=h.toString(),j=i.substring(i.indexOf("function"),i.indexOf("{"))||"anonymous";a.push(j),h=h.caller}}return a.join("\r\n")}},disabledImpl:{console:{log:function(){},trace:function(){},info:function(){},warn:function(){}},log:function(){},trace:function(){},info:function(){},warn:function(){},error:function(){}},enable:function(a){a=a===undefined?!0:a;if(f.enabled===a)return;(a||f.enabled!==null)&&h.log("Log is "+(a?"enabled.":"disabled.")),f.enabled=a;var b=a?f.enabledImpl:f.disabledImpl;e(f,b)},disable:function(){f.enable(!1)},enableOutput:function(a){a=a===null?!0:a,f.outputEnabled=a},disableOutput:function(){f.enableOutput(!1)},resetSettings:function(){require("log.settings").resetSettings(f),f("log.resetSettings","Settings are reset to default.")}};e(f,r),f.resetSettings()})(this)},{"log.settings":!0});try{document.domain=/quora\.com$/i.test(location.host)?"quora.com":document.domain}catch(x){}require.install("event",function(require,a,b){function d(a,b,d){var e;return a.addEventListener?(e=function(a){c&&c.enabled&&c("event.add","On "+a.type+" (case 1), invoking",d),d.call(this,a)===!1&&(a.preventDefault(),a.stopPropagation())},a.addEventListener(b,e,!1)):a.attachEvent&&(e=function(b){return b=b||window.event,c&&c.enabled&&c("event.add","On "+b.type+" (case 2), invoking",d),d.call(b.srcElement||a,b)},a.attachEvent("on"+b,e)),e}var c=window.log;a.add=d,a.remove=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)}},{}),require.install("errors",function(require,a,b){function i(){while(d&&e<c.length)d(c[e++])}function j(a){if(a.stack)return;if(window.opera&&a.message){var b=[],c=a.message.split("\n");for(var d=0,e=c.length;d<e;d++)if(c[d].match(/^\s*[A-Za-z0-9\-_\$]+\(/)){var f=c[d];c[d+1]&&(f+=" at "+c[d+1],d++),b.push(f)}a.stack=String.join("\n",b);return}if(a.filename){a.stack="at "+a.filename+":"+a.lineno;return}if(arguments.callee&&arguments.callee.caller){var g="",h=arguments.callee.caller;while(h){var i=h.toString(),j=i.substring(i.indexOf("function")+9,i.indexOf("("))||"anonymous";g+=j+"\n",h=h.caller}a.stack=g;return}}var c=[],d,e=0,f=10,g=require("event"),h=g.add(window,"error",function(a){--f<0?g.remove(window,"error",h):(j(a),c.push(a),i())});a.setCallback=function(a){d=a,i()}},{event:!0}),require.install("redirect",function(require,a,b){function m(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return c===null?"":decodeURIComponent(c[1].replace(/\+/g," "))}var c=window,d=document,e=require("settings"),f="smar=1",g=30,h=new RegExp("\\b"+f+"\\b"),i=c.location.href,j=c.location.domain,k=c.location.pathname,l=+(new Date);e.mobileRedirect&&!h.test(d.cookie)&&!d.webKitHidden&&(setTimeout(function(){+(new Date)-l<1500&&(d.cookie=f+"; expires="+(new Date(new Date-g*-864e5)).toUTCString()+"; path=/"+"; domain=.quora.com"),h.test(d.cookie)&&(c.location=i)},1e3),d.cookie=f+"; expires="+(new Date(new Date- -864e5)).toUTCString()+"; path="+k,c.location=m("force_mobile_redirect")||e.appURL)},{settings:!0}),require.install("win.load",function(require,a,b){var c=this,d=[],e=!1,f=!1;require("event").add(c,"load",function(){!f&&c.log&&c.log.enabled&&(c.log("win.load","DOM is ready."),f=!0),setTimeout(function(){e=!0;for(var a=0,b=d.length;a<b;++a)d[a].call(c);d.length=0},100)}),a.add=function(a){e?a.call(c):d.push(a)}},{event:!0}),function(){document.domain=document.domain,typeof google!="undefined"&&(google.load("search","1",{language:"en",style:google.loader.themes.V2_DEFAULT}),google.setOnLoadCallback(function(){var a={},b={};b.keys=[{label:"Relevance",key:""},{label:"Date",key:"date"}],a.enableOrderBy=!0,a.orderByOptions=b;var c=new google.search.CustomSearchControl("014053714977433807712:gtz1vfhsr8y",a);c.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);var d=new google.search.DrawOptions;d.setAutoComplete(!0),c.draw("mycse",d);var e=$("#mycse").attr("query");c.execute(e,1)},!0))}(),require.install("app/view/search/google_search_iframe",function(){}),require.install("spin",function(require,a,b){b.exports.createSpinnerDom=function(a,b){b=b||"__default_loading_spinner_class";var d=' <div class=" '+b+' "/> ',e=$(d),f=c(a);return e.append(f.el),e};var c=b.exports.createSpinnerElement=function(a){a=a||{};var c=(new b.exports.Spinner(a)).spin();return c};(function(c,d){typeof a=="object"?b.exports.Spinner=d():typeof define=="function"&&define.amd?define(d):c.Spinner=d()})(this,function(){function d(a,b){var c=document.createElement(a||"div"),d;for(d in b)c[d]=b[d];return c}function e(a){for(var b=1,c=arguments.length;b<c;b++)a.appendChild(arguments[b]);return a}function g(a,d,e,g){var h=["opacity",d,~~(a*100),e,g].join("-"),i=.01+e/g*100,j=Math.max(1-(1-a)/d*(100-i),a),k=c.substring(0,c.indexOf("Animation")).toLowerCase(),l=k&&"-"+k+"-"||"";return b[h]||(f.insertRule("@"+l+"keyframes "+h+"{"+"0%{opacity:"+j+"}"+i+"%{opacity:"+a+"}"+(i+.01)+"%{opacity:1}"+(i+d)%100+"%{opacity:"+a+"}"+"100%{opacity:"+j+"}"+"}",f.cssRules.length),b[h]=1),h}function h(b,c){var d=b.style,e,f;c=c.charAt(0).toUpperCase()+c.slice(1);for(f=0;f<a.length;f++){e=a[f]+c;if(d[e]!==undefined)return e}if(d[c]!==undefined)return c}function i(a,b){for(var c in b)a.style[h(a,c)||c]=b[c];return a}function j(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===undefined&&(a[d]=c[d])}return a}function k(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a=a.offsetParent)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function l(a,b){return typeof a=="string"?a:a[b%a.length]}function n(a){if(typeof this=="undefined")return new n(a);this.opts=j(a||{},n.defaults,m)}function o(){function a(a,b){return d("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',b)}f.addRule(".spin-vml","behavior:url(#default#VML)"),n.prototype.lines=function(b,c){function g(){return i(a("group",{coordsize:f+" "+f,coordorigin:-d+" "+ -d}),{width:f,height:f})}function m(b,f,h){e(j,e(i(g(),{rotation:360/c.lines*b+"deg",left:~~f}),e(i(a("roundrect",{arcsize:c.corners}),{width:d,height:c.width,left:c.radius,top:-c.width>>1,filter:h}),a("fill",{color:l(c.color,b),opacity:c.opacity}),a("stroke",{opacity:0}))))}var d=c.length+c.width,f=2*d,h=-(c.width+c.length)*2+"px",j=i(g(),{position:"absolute",top:h,left:h}),k;if(c.shadow)for(k=1;k<=c.lines;k++)m(k,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(k=1;k<=c.lines;k++)m(k);return e(b,j)},n.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}"use strict";var a=["webkit","Moz","ms","O"],b={},c,f=function(){var a=d("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],a),a.sheet||a.styleSheet}(),m={lines:12,length:4,width:2,radius:5,rotate:0,corners:1,color:"#999",direction:1,speed:1,trail:70,opacity:.25,fps:30,zIndex:999,className:"__q_spinner",top:"auto",left:"auto",position:"relative"};n.defaults={},j(n.prototype,{spin:function(a){this.stop();var b=this,e=b.opts,f=b.el=i(d(0,{className:e.className}),{position:e.position,width:0,zIndex:e.zIndex}),g=e.radius+e.length+e.width,h,j;a&&(a.insertBefore(f,a.firstChild||null),j=k(a),h=k(f),i(f,{left:(e.left=="auto"?j.x-h.x+(a.offsetWidth>>1):parseInt(e.left,10)+g)+"px",top:(e.top=="auto"?j.y-h.y+(a.offsetHeight>>1):parseInt(e.top,10)+g)+"px"})),f.setAttribute("role","progressbar"),b.lines(f,b.opts);if(!c){var l=0,m=(e.lines-1)*(1-e.direction)/2,n,o=e.fps,p=o/e.speed,q=(1-e.opacity)/(p*e.trail/100),r=p/e.lines;(function s(){l++;for(var a=0;a<e.lines;a++)n=Math.max(1-(l+(e.lines-a)*r)%p*q,e.opacity),b.opacity(f,a*e.direction+m,n,e);b.timeout=b.el&&setTimeout(s,~~(1e3/o))})()}return b},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=undefined),this},lines:function(a,b){function k(a,c){return i(d(),{position:"absolute",width:b.length+b.width+"px",height:b.width+"px",background:a,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/b.lines*f+b.rotate)+"deg) translate("+b.radius+"px"+",0) scale(1)",borderRadius:(b.corners*b.width>>1)+"px"})}var f=0,h=(b.lines-1)*(1-b.direction)/2,j;for(;f<b.lines;f++)j=i(d(),{position:"absolute",top:1+~(b.width/2)+"px",transform:b.hwaccel?"translate3d(0,0,0)":"",opacity:b.opacity,animation:c&&g(b.opacity,b.trail,h+f*b.direction,b.lines)+" "+1/b.speed+"s linear infinite"}),b.shadow&&e(j,i(k("#000","0 0 4px #000"),{top:"2px"})),e(a,e(j,k(l(b.color,f),"0 0 1px rgba(0,0,0,.1)")));return a},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var p=i(d("group"),{behavior:"url(#default#VML)"});return!h(p,"transform")&&p.adj?o():c=h(p,"animation"),n})},{spin:!0}),require("w2.timing"),require("iesux"),require("log"),require("domain"),require("errors"),require("redirect"),require("win.load"),require("app/view/search/google_search_iframe"),require("spin"),require("w2.timing").logTime("earlyScriptEnd");rec('package', 'Finish', 'early.js');