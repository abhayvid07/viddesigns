webpackJsonp([2],Array(112).concat([function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function a(e){return"undefined"!==typeof FormData&&e instanceof FormData}function i(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"===typeof e}function c(e){return"number"===typeof e}function u(e){return"undefined"===typeof e}function l(e){return null!==e&&"object"===typeof e}function f(e){return"[object Date]"===C.call(e)}function p(e){return"[object File]"===C.call(e)}function d(e){return"[object Blob]"===C.call(e)}function m(e){return"[object Function]"===C.call(e)}function h(e){return l(e)&&m(e.pipe)}function g(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function A(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function v(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function E(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=E(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function w(e,t,n){return v(t,function(t,r){e[r]=n&&"function"===typeof t?x(t,n):t}),e}var x=n(115),b=n(124),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:b,isFormData:a,isArrayBufferView:i,isString:s,isNumber:c,isObject:l,isUndefined:u,isDate:f,isFile:p,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:v,merge:E,extend:w,trim:A}},,function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(112),a=n(127),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n(116):"undefined"!==typeof t&&(e=n(116)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(126))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(112),o=n(128),a=n(130),i=n(131),s=n(132),c=n(117),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n(133);e.exports=function(e){return new Promise(function(t,l){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in d||s(e.url)||(d=new window.XDomainRequest,m="onload",h=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var g=e.auth.username||"",A=e.auth.password||"";p.Authorization="Basic "+u(g+":"+A)}if(d.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[m]=function(){if(d&&(4===d.readyState||h)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?i(d.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?d.response:d.responseText,a={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:e,request:d};o(t,l,a),d=null}},d.onerror=function(){l(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){l(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(134),v=(e.withCredentials||s(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){d&&(d.abort(),l(e),d=null)}),void 0===f&&(f=null),d.send(f)})}},function(e,t,n){"use strict";var r=n(129);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){var r=n(121);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(109)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(108)(!0),t.push([e.i,"#signupForm{padding:0;height:90%;border-radius:5px}#homeLogin,#signupForm{max-width:500px;min-width:none;top:0;right:0;left:0;bottom:0;margin:auto;position:absolute;background-color:#fff;overflow-y:auto;overflow-x:hidden}#homeLogin{height:40%;padding-top:30px;padding-bottom:30px}td{text-align:left}#signup{margin-top:5%}label{margin-top:5px;text-align:center}#forgotEmail{border-radius:5px;margin-top:5px}.form-group{margin-bottom:15px}@media only screen and (max-width:762px){label{margin:0}#homeLogin{height:70%}#signupForm{height:100%}}","",{version:3,sources:["C:/Users/Kislay/Desktop/VidEdu/frontend/src/Styles/Home.css"],names:[],mappings:"AAAA,YAQC,UAAc,AAKd,WAAa,AACb,iBAAoB,CACpB,AAED,uBAhBC,gBAAkB,AAClB,eAAiB,AACjB,MAAU,AACV,QAAY,AACZ,OAAW,AACX,SAAa,AACb,YAAe,AAEf,kBAAoB,AACpB,sBAAyB,AACzB,gBAAkB,AAClB,iBAAoB,CAoBpB,AAfD,WAKC,WAAa,AAKb,iBAAmB,AACnB,mBAAsB,CAItB,AAED,GACA,eAAmB,CAClB,AAED,QACC,aAAgB,CAChB,AAED,MACC,eAAiB,AACjB,iBAAoB,CACpB,AAED,aACC,kBAAoB,AACpB,cAAiB,CACjB,AAED,YACC,kBAAsB,CACtB,AAED,yCACC,MACC,QAAa,CACb,AAED,WACC,UAAa,CACb,AAED,YACC,WAAc,CACd,CACD",file:"Home.css",sourcesContent:["#signupForm {\r\n\tmax-width : 500px;\r\n\tmin-width : none;\r\n\ttop : 0px;\r\n\tright : 0px;\r\n\tleft : 0px;\r\n\tbottom : 0px;\r\n\tmargin : auto ;\r\n\tpadding : 0px;\r\n\tposition : absolute;\r\n\tbackground-color : white;\r\n\toverflow-y : auto;\r\n\toverflow-x : hidden;\r\n\theight : 90%;\r\n\tborder-radius : 5px;\r\n}\r\n\r\n#homeLogin {\r\n\ttop : 0px;\r\n\tbottom : 0px;\r\n\tright : 0px;\r\n\tleft : 0px;\r\n\theight : 40%;\r\n\tmargin : auto;\r\n\toverflow-y : auto;\r\n\toverflow-x : hidden;\r\n\tposition : absolute;\r\n\tpadding-top : 30px;\r\n\tpadding-bottom : 30px;\r\n\tbackground-color : white;\r\n\tmax-width : 500px;\r\n\tmin-width : none;\r\n}\r\n\r\ntd {\r\ntext-align : left ;\r\n}\r\n\r\n#signup {\r\n\tmargin-top : 5%;\r\n}\r\n\r\nlabel {\r\n\tmargin-top : 5px;\r\n\ttext-align : center;\r\n}\r\n\r\n#forgotEmail {\r\n\tborder-radius : 5px;\r\n\tmargin-top : 5px;\r\n}\r\n\r\n.form-group {\r\n\tmargin-bottom  : 15px;\r\n}\r\n\r\n@media only screen and (max-width : 762px) {\r\n\tlabel {\r\n\t\tmargin : 0px;\r\n\t}\r\n\t\r\n\t#homeLogin {\r\n\t\theight : 70%;\r\n\t}\r\n\t\r\n\t#signupForm  {\r\n\t\theight : 100%;\r\n\t}\r\n}"],sourceRoot:""}])},function(e,t,n){e.exports=n(123)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(112),a=n(115),i=n(125),s=n(114),c=r(s);c.Axios=i,c.create=function(e){return r(o.merge(s,e))},c.Cancel=n(119),c.CancelToken=n(140),c.isCancel=n(118),c.all=function(e){return Promise.all(e)},c.spread=n(141),e.exports=c,e.exports.default=c},function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(114),a=n(112),i=n(135),s=n(136);r.prototype.request=function(e){"string"===typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=o(i);h=!0;for(var t=m.length;t;){for(d=m,m=[];++g<t;)d&&d[g].run();g=-1,t=m.length}d=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,f,p=e.exports={};!function(){try{l="function"===typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,m=[],h=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new c(e,t)),1!==m.length||h||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(112);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(117);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(112);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},function(e,t,n){"use strict";var r=n(112),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},function(e,t,n){"use strict";var r=n(112);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",s=0,c=a;o.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";var r=n(112);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(112);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(112),a=n(137),i=n(118),s=n(114),c=n(138),u=n(139);e.exports=function(e){return r(e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(112);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(119);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n.n(i),c=n(120),u=(n.n(c),n(144)),l=n(35),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.forgotClick=n.forgotClick.bind(n),n.getLogin=n.getLogin.bind(n),n.userNameRef=s.a.createRef(),n.passwordRef=s.a.createRef(),n.getForgot=n.getForgot.bind(n),n.forgotEmail=s.a.createRef(),n}return a(t,e),f(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"homeLogin"},s.a.createElement("form",{id:"login",className:"form-horizontal"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Username",className:"info-label col-xs-3"},"User name"),s.a.createElement("div",{className:"col-xs-8"},s.a.createElement("input",{type:"text",className:"form-control",id:"Username",minLength:"5",placeholder:"Enter User name",ref:this.userNameRef}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Password",className:"info-label col-xs-3"},"Password"),s.a.createElement("div",{className:"col-xs-8"},s.a.createElement("input",{type:"password",className:"form-control",id:"Password",placeholder:"Enter Password",ref:this.passwordRef}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"col-xs-4",style:{textAlign:"left"}},s.a.createElement("input",{type:"checkbox",id:"loginRemember"}),"  Remember me"),s.a.createElement("div",{className:"col-xs-7",style:{textAlign:"right"}},s.a.createElement("button",{className:"btn btn-success",onClick:this.getLogin},"Login")))),s.a.createElement("div",{className:"form-group col-xs-3",style:{textAlign:"right"}},s.a.createElement("a",{"data-toggle":"modal","data-target":"#forgotForm"}," Forgot Login "))),s.a.createElement("div",{className:"modal fade",id:"policy"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-body"},s.a.createElement("table",{className:"table table-striped"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Username"),s.a.createElement("td",null,"It should have atleast 6 characters and should not contain any special character")),s.a.createElement("tr",null,s.a.createElement("td",null,"Password"),s.a.createElement("td",null,"Password should have atleast one of uppercase, lowercase '!@#$%' special character. minimum length is 8.")))))))),s.a.createElement("div",{id:"forgotForm",className:"modal fade",role:"dialog"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("p",{style:{color:"red"}},"Reset Link will be sent to Email id")),s.a.createElement("div",{className:"modal-body"},s.a.createElement("form",{id:"Forgot",className:"form-horizontal"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Email",className:"col-xs-3"},"Email Id * "),s.a.createElement("input",{type:"email",id:"forgotEmail",name:"Email",className:"col-xs-6",placeholder:"Enter your Email Id",ref:this.forgotEmail})),s.a.createElement("div",{style:{textAlign:"right"}},s.a.createElement("button",{className:"btn btn-info ",onClick:this.getForgot},"Send"))))))))}},{key:"forgotClick",value:function(){this.forgotFormRef.current.style.display="block"}},{key:"getLogin",value:function(e){e.preventDefault();var t=null!==this.passwordRef.current.nextSibling,n=/[^0-9a-zA-Z]/,r=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])/,o=/[^0-9a-zA-Z!@#$%]/,a=this.userNameRef.current.value,i=this.passwordRef.current.value,s={};if(!0===n.test(a)||a.length<6||!1===r.test(i)||!0===o.test(i)||i.split(" ").join("").length<8){if(!1===t){var c=document.createElement("P");c.innerHTML='Please fill all the required fields as per <a data-toggle = "modal" data-target = "#policy"> Policy </a>',c.style.cssText="text-align : left;\n\t\t\t\t\t\t\t\t color : red; \n\t\t\t\t\t\t\t\t font-size : 10px;\n\t\t\t\t\t\t\t\t margin : 0px;",this.passwordRef.current.parentNode.append(c)}}else!0===t&&this.passwordRef.current.nextSibling.remove(),s.username=a,s.password=i,this.props.dispatch(u.a.login(s))}},{key:"getForgot",value:function(e){e.preventDefault();var t=null!==this.forgotEmail.current.nextSibling,n=/^[a-zA-Z0-9]*([a-zA-Z0-9]+[.])*[a-zA-Z0-9]+(@[a-zA-Z0-9]+\.(?=(com|in|co.uk)$))/,r=/(?=[.]{2,})/;if(!1!==t||!1!==n.test(this.forgotEmail.current.value)&&!0!==r.test(this.forgotEmail.current.value))!0===n.test(this.forgotEmail.current.value)&&!1===r.test(this.forgotEmail.current.value)&&t&&this.forgotEmail.current.nextSibling.remove();else{var o=document.createElement("P");o.innerHTML="Please provide valid email id",this.forgotEmail.current.parentNode.append(o)}}}]),t}(i.Component);t.default=Object(l.b)(function(e){return{Auth:e.Authentication.error}})(p)},function(e,t,n){"use strict";function r(e){return function(t){s.a.loginService(e).then(function(e){t(c.a.success(e))}).catch(function(e){t(c.a.error())})}}function o(e){return{type:i.a.SIGNUP_REQUEST,payload:e}}function a(e){return{type:i.a.FORGOT_REQUEST,payload:e}}n.d(t,"a",function(){return u});var i=n(33),s=n(145),c=n(147),u={login:r,signup:o,forgot:a}},function(e,t,n){"use strict";function r(e){var t={data:JSON.stringify(e),header:{"Content-Type":"application/json"}};return a.a.post(i.a.AUTH_URL,t).then(function(e){return e})}n.d(t,"a",function(){return s});var o=n(122),a=n.n(o),i=n(146),s={loginService:r}},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={AUTH_URL:"http://localhost:4000/asd/"}},function(e,t,n){"use strict";function r(e){return{type:i.a.LOGIN_REQUEST,payload:!0,data:e}}function o(){return{type:i.a.LOGIN_REQUEST,payload:!1}}function a(){return{type:i.a.PAGE_ERROR,payload:!0}}n.d(t,"a",function(){return s});var i=n(33),s={success:r,failure:o,error:a}}]));
//# sourceMappingURL=2.14610ac2.chunk.js.map