webpackJsonp([2],{114:function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function a(e){return"undefined"!==typeof FormData&&e instanceof FormData}function i(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"===typeof e}function c(e){return"number"===typeof e}function l(e){return"undefined"===typeof e}function u(e){return null!==e&&"object"===typeof e}function f(e){return"[object Date]"===C.call(e)}function p(e){return"[object File]"===C.call(e)}function m(e){return"[object Blob]"===C.call(e)}function d(e){return"[object Function]"===C.call(e)}function h(e){return u(e)&&d(e.pipe)}function g(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function A(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function y(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function v(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=v(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)E(arguments[n],e);return t}function x(e,t,n){return E(t,function(t,r){e[r]=n&&"function"===typeof t?w(t,n):t}),e}var w=n(117),b=n(128),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:b,isFormData:a,isArrayBufferView:i,isString:s,isNumber:c,isObject:u,isUndefined:l,isDate:f,isFile:p,isBlob:m,isFunction:d,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:y,forEach:E,merge:v,extend:x,trim:A}},116:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(114),a=n(131),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!==typeof XMLHttpRequest?e=n(118):"undefined"!==typeof t&&(e=n(118)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(130))},117:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},118:function(e,t,n){"use strict";var r=n(114),o=n(132),a=n(134),i=n(135),s=n(136),c=n(119),l="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n(137);e.exports=function(e){return new Promise(function(t,u){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var m=new XMLHttpRequest,d="onreadystatechange",h=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in m||s(e.url)||(m=new window.XDomainRequest,d="onload",h=!0,m.onprogress=function(){},m.ontimeout=function(){}),e.auth){var g=e.auth.username||"",A=e.auth.password||"";p.Authorization="Basic "+l(g+":"+A)}if(m.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m[d]=function(){if(m&&(4===m.readyState||h)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in m?i(m.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?m.response:m.responseText,a={data:r,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:n,config:e,request:m};o(t,u,a),m=null}},m.onerror=function(){u(c("Network Error",e,null,m)),m=null},m.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var y=n(138),E=(e.withCredentials||s(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;E&&(p[e.xsrfHeaderName]=E)}if("setRequestHeader"in m&&r.forEach(p,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete p[t]:m.setRequestHeader(t,e)}),e.withCredentials&&(m.withCredentials=!0),e.responseType)try{m.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){m&&(m.abort(),u(e),m=null)}),void 0===f&&(f=null),m.send(f)})}},119:function(e,t,n){"use strict";var r=n(133);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},120:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},121:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},122:function(e,t,n){e.exports=n(127)},123:function(e,t,n){var r=n(124);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(111)(r,o);r.locals&&(e.exports=r.locals)},124:function(e,t,n){t=e.exports=n(110)(!0),t.push([e.i,"#signupForm{padding:0;height:90%;border-radius:5px}#homeLogin,#signupForm{max-width:500px;min-width:none;top:0;right:0;left:0;bottom:0;margin:auto;position:absolute;background-color:#fff;overflow-y:auto;overflow-x:hidden}#homeLogin{height:40%;padding-top:30px;padding-bottom:30px}td{text-align:left}#signup{margin-top:5%}label{margin-top:5px;text-align:center}#forgotEmail{border-radius:5px;margin-top:5px}.form-group{margin-bottom:15px}.requestFailure{text-align:center;color:red;font-size:15px;margin:0}@media only screen and (max-width:762px){label{margin:0}#homeLogin{height:70%}#signupForm{height:100%}}","",{version:3,sources:["C:/Users/Kislay/Desktop/VidEdu/frontend/src/Styles/Home.css"],names:[],mappings:"AAAA,YAQC,UAAc,AAKd,WAAa,AACb,iBAAoB,CACpB,AAED,uBAhBC,gBAAkB,AAClB,eAAiB,AACjB,MAAU,AACV,QAAY,AACZ,OAAW,AACX,SAAa,AACb,YAAe,AAEf,kBAAoB,AACpB,sBAAyB,AACzB,gBAAkB,AAClB,iBAAoB,CAoBpB,AAfD,WAKC,WAAa,AAKb,iBAAmB,AACnB,mBAAsB,CAItB,AAED,GACA,eAAmB,CAClB,AAED,QACC,aAAgB,CAChB,AAED,MACC,eAAiB,AACjB,iBAAoB,CACpB,AAED,aACC,kBAAoB,AACpB,cAAiB,CACjB,AAED,YACC,kBAAsB,CACtB,AAED,gBACC,kBAAoB,AACpB,UAAY,AACZ,eAAiB,AACjB,QAAY,CACZ,AAED,yCACC,MACC,QAAa,CACb,AAED,WACC,UAAa,CACb,AAED,YACC,WAAc,CACd,CACD",file:"Home.css",sourcesContent:["#signupForm {\r\n\tmax-width : 500px;\r\n\tmin-width : none;\r\n\ttop : 0px;\r\n\tright : 0px;\r\n\tleft : 0px;\r\n\tbottom : 0px;\r\n\tmargin : auto ;\r\n\tpadding : 0px;\r\n\tposition : absolute;\r\n\tbackground-color : white;\r\n\toverflow-y : auto;\r\n\toverflow-x : hidden;\r\n\theight : 90%;\r\n\tborder-radius : 5px;\r\n}\r\n\r\n#homeLogin {\r\n\ttop : 0px;\r\n\tbottom : 0px;\r\n\tright : 0px;\r\n\tleft : 0px;\r\n\theight : 40%;\r\n\tmargin : auto;\r\n\toverflow-y : auto;\r\n\toverflow-x : hidden;\r\n\tposition : absolute;\r\n\tpadding-top : 30px;\r\n\tpadding-bottom : 30px;\r\n\tbackground-color : white;\r\n\tmax-width : 500px;\r\n\tmin-width : none;\r\n}\r\n\r\ntd {\r\ntext-align : left ;\r\n}\r\n\r\n#signup {\r\n\tmargin-top : 5%;\r\n}\r\n\r\nlabel {\r\n\tmargin-top : 5px;\r\n\ttext-align : center;\r\n}\r\n\r\n#forgotEmail {\r\n\tborder-radius : 5px;\r\n\tmargin-top : 5px;\r\n}\r\n\r\n.form-group {\r\n\tmargin-bottom  : 15px;\r\n}\r\n\r\n.requestFailure {\r\n\ttext-align : center;\r\n\tcolor : red; \r\n\tfont-size : 15px;\r\n\tmargin : 0px\r\n}\r\n\r\n@media only screen and (max-width : 762px) {\r\n\tlabel {\r\n\t\tmargin : 0px;\r\n\t}\r\n\t\r\n\t#homeLogin {\r\n\t\theight : 70%;\r\n\t}\r\n\t\r\n\t#signupForm  {\r\n\t\theight : 100%;\r\n\t}\r\n}\r\n\r\n"],sourceRoot:""}])},125:function(e,t,n){"use strict";function r(e){return function(t){a.a.authService(e).then(function(e){200===e.status?(t(i.a.success()),t(i.a.UserData(e)),s.a.push("/login/home")):t(i.a.failure())}).catch(function(e){t(i.a.error(e.message))})}}function o(e){return function(t){a.a.authService(e).then(function(e){200===e.status?s.a.push("/login"):t(i.a.failure())}).catch(function(e){t(i.a.error())})}}n.d(t,"a",function(){return c});var a=n(126),i=n(147),s=n(35),c={login:r,signForgot:o}},126:function(e,t,n){"use strict";function r(e){return{data:JSON.stringify(e),header:{"Content-Type":"application/json"}}}function o(e){return l=r(e),i.a.post(s.a.AUTH_URL,l)}n.d(t,"a",function(){return c});var a=n(122),i=n.n(a),s=n(146),c={authService:o},l=""},127:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(114),a=n(117),i=n(129),s=n(116),c=r(s);c.Axios=i,c.create=function(e){return r(o.merge(s,e))},c.Cancel=n(121),c.CancelToken=n(144),c.isCancel=n(120),c.all=function(e){return Promise.all(e)},c.spread=n(145),e.exports=c,e.exports.default=c},128:function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},129:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(116),a=n(114),i=n(139),s=n(140);r.prototype.request=function(e){"string"===typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},130:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function i(){h&&m&&(h=!1,m.length?d=m.concat(d):g=-1,d.length&&s())}function s(){if(!h){var e=o(i);h=!0;for(var t=d.length;t;){for(m=d,d=[];++g<t;)m&&m[g].run();g=-1,t=d.length}m=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,f,p=e.exports={};!function(){try{u="function"===typeof setTimeout?setTimeout:n}catch(e){u=n}try{f="function"===typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var m,d=[],h=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new c(e,t)),1!==d.length||h||o(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},131:function(e,t,n){"use strict";var r=n(114);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},132:function(e,t,n){"use strict";var r=n(119);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},133:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},134:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(114);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},135:function(e,t,n){"use strict";var r=n(114),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},136:function(e,t,n){"use strict";var r=n(114);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},137:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),i="",s=0,c=a;o.charAt(0|s)||(c="=",s%1);i+=c.charAt(63&t>>8-s%1*8)){if((n=o.charCodeAt(s+=.75))>255)throw new r;t=t<<8|n}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},138:function(e,t,n){"use strict";var r=n(114);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},139:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(114);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},140:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(114),a=n(141),i=n(120),s=n(116),c=n(142),l=n(143);e.exports=function(e){return r(e),e.baseURL&&!c(e.url)&&(e.url=l(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},141:function(e,t,n){"use strict";var r=n(114);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},142:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},143:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},144:function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(121);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},145:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},146:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={AUTH_URL:"http://localhost:4000/asd/"}},147:function(e,t,n){"use strict";function r(){return{type:i.a.REQUEST_FAILED,payload:"not found"}}function o(e){return{type:i.a.PAGE_ERROR,info:e}}function a(){return{type:i.a.LOGIN_REQUEST,payload:!0}}n.d(t,"a",function(){return s});var i=n(17),s={success:a,failure:r,error:o}},150:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),s=n.n(i),c=n(122),l=(n.n(c),n(123)),u=(n.n(l),n(16)),f=n(125),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onSignupClick=n.onSignupClick.bind(n),n.onValidation=n.onValidation.bind(n),n.firstNameRef=s.a.createRef(),n.lastNameRef=s.a.createRef(),n.signupEmail=s.a.createRef(),n.state={submitted:!1},n}return a(t,e),p(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"signupForm"},s.a.createElement("a",{"data-toggle":"modal","data-target":"#policy"},s.a.createElement("span",{className:"glyphicon glyphicon-info-sign col-xs-11",style:{textAlign:"right",color:"green",marginTop:"3%",marginBottom:"2%"}})),s.a.createElement("form",{id:"signup",className:"form-horizontal"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Firstname",className:"info-label col-xs-4"},"* First Name"),s.a.createElement("div",{className:"col-xs-7"},s.a.createElement("input",{type:"text",className:"form-control",name:"Firstname",maxLength:"15",minLength:"3",placeholder:"Enter First Name",ref:this.firstNameRef,onBlur:this.onValidation}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Lastname",className:"info-label col-xs-4"},"Last Name"),s.a.createElement("div",{className:"col-xs-7"},s.a.createElement("input",{type:"text",className:"form-control",name:"lastname",maxLength:"20",minLength:"3",placeholder:"Enter Last Name",ref:this.lastNameRef,onBlur:this.onValidation}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Username",className:"info-label col-xs-4"},"* User name"),s.a.createElement("div",{className:"col-xs-7"},s.a.createElement("input",{type:"text",className:"form-control",name:"Username",placeholder:"Enter User name",onBlur:this.onValidation}),this.state.submitted&&s.a.createElement("div",{className:"requestFailure"},this.props.message))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Password",className:"info-label col-xs-4"},"* Password"),s.a.createElement("div",{className:"col-xs-7"},s.a.createElement("input",{type:"password",className:"form-control",name:"Password",minLength:"8",placeholder:"Enter Password",onBlur:this.onValidation}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Category",className:"info-label col-xs-4"},"Category"),s.a.createElement("div",{className:"col-xs-7"},s.a.createElement("select",{id:"Category",className:"form-control"},s.a.createElement("option",null,"Student"),s.a.createElement("option",null,"Professional Employee"),s.a.createElement("option",null,"Businessman")))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Email",className:"info-label col-xs-4"},"* Email"),s.a.createElement("div",{className:"col-xs-7"},s.a.createElement("input",{type:"email",className:"form-control",name:"Email",placeholder:"Enter email id",onBlur:this.onValidation}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"Gender",className:"info-label col-xs-4"},"Sex"),s.a.createElement("div",{className:"col-xs-7",style:{textAlign:"left"}},s.a.createElement("input",{type:"radio",name:"Gender",value:"Male",defaultChecked:!0})," Male \xa0",s.a.createElement("input",{type:"radio",name:"Gender",value:"Female"})," Female")),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"DOB",className:"info-label col-xs-4"},"* DOB"),s.a.createElement("div",{className:"col-xs-6"},s.a.createElement("input",{type:"date",className:"form-control",name:"DOB",onBlur:this.onValidation}))),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-xs-12",style:{textAlign:"center"}},s.a.createElement("input",{type:"checkbox",name:"Policy",defaultChecked:!0,disabled:!0}),"  I agree with all the policy and agreement of the application owner")),s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"col-xs-12",style:{textAlign:"center"}},s.a.createElement("button",{className:"btn btn-success",onClick:this.onSignupClick,name:"submit"},"Signup"))))),s.a.createElement("div",{className:"modal fade",id:"policy"},s.a.createElement("div",{className:"modal-dialog"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-body"},s.a.createElement("table",{className:"table table-striped"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"Firstname"),s.a.createElement("td",null,"Firstname should have only alphabets and atleast 3 characters.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Lastname"),s.a.createElement("td",null,"Lastname should have only alphabets and atleast 3 characters.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Username"),s.a.createElement("td",null,"It should have atleast 6 characters and should not contain any special character")),s.a.createElement("tr",null,s.a.createElement("td",null,"Password"),s.a.createElement("td",null,"Password should have atleast one of uppercase, lowercase '!@#$%' special character. minimum length is 8.")),s.a.createElement("tr",null,s.a.createElement("td",null,"Email"),s.a.createElement("td",null,"Email should only contain aplhanumeraic and period, period is not allowed at starting ex : a.a@abc.com")))))))))}},{key:"onValidation",value:function(e){var t=/[^a-z]/gi,n=/[^0-9a-zA-Z]/,r=/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%])/,o=/[^0-9a-zA-Z!@#$%]/,a=/^[a-zA-Z0-9]*([a-zA-Z0-9]+[.])*[a-zA-Z0-9]+(@[a-zA-Z0-9]+\.(?=(com|in|co.uk)$))/,i=/(?=[.]{2,})/,s=e.target.name.toLowerCase(),c=null===e.target.nextSibling,l=e.target.value,u="";if("submit"===s){for(var f=document.getElementsByTagName("input"),p=0;p<f.length;p++)if(1!==p&&""===f[p].value)return f[p].focus(),1;return 0}if("firstname"===s&&(t.test(l.split(" ").join(""))||l.split(" ").join("").length<3)&&(u='Entered first name is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>'),"lastname"===s&&""!==l&&(t.test(l.split(" ").join(""))||l.split(" ").join("").length<3)&&(u='Entered last name is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>'),"username"===s&&(!0===n.test(l)||l.length<6)&&(u='Entered username is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>'),"password"===s&&(!1===r.test(l)||!0===o.test(l)||l.split(" ").join("").length<8)&&(u='Entered password is incorrect, please refer to the <a data-toggle = "modal" data-target = "#policy">policy</a>'),"dob"===s&&""===l&&(u="Provide Date of Birth"),"email"!==s||!1!==a.test(l)&&!0!==i.test(l)||(u='Provide valid Email Id, please refer to policy <a data-toggle = "modal" data-target = "#policy">policy</a>'),c&&""!==u){var m=document.createElement("P");m.style.cssText="text-align : left;\n\t\t\t\t\t\t\t\t color : red; \n\t\t\t\t\t\t\t\t font-size : 10px;\n\t\t\t\t\t\t\t\t margin : 0px;",m.innerHTML=u,e.target.closest("div").append(m)}else!1===c&&""===u&&e.target.nextSibling.remove()}},{key:"onSignupClick",value:function(e){e.preventDefault();var t=document.getElementById("signup").elements,n=document.getElementsByTagName("P");if(1!==this.onValidation(e)){var r={};if(0!==n.length)n[0].previousSibling.focus();else{for(var o in t)"undefined"!==typeof t[o].tagName&&"input"===t[o].tagName.toLowerCase()&&"policy"!==t[o].name.toLowerCase()&&("gender"!==t[o].name.toLowerCase()||t[o].checked)&&(r[t[o].name.toLowerCase()]=t[o].value);this.props.dispatch(f.a.signForgot(r)),this.setState({submitted:!0})}}}}]),t}(i.Component);t.default=Object(u.b)(function(e){return{message:e.Authentication.message}})(m)}});
//# sourceMappingURL=2.180d719c.chunk.js.map