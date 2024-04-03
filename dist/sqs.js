/*! For license information please see sqs.js.LICENSE.txt */
(()=>{"use strict";var e={2:(e,t,r)=>{r.d(t,{R:()=>u});var n=r(556);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function a(e,t,r){return(t=c(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}var u=function(){return e=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"awsConfig",void 0),a(this,"serviceName",void 0),a(this,"_endpoint",void 0),this.awsConfig=t,this.serviceName=r,null!=t.endpoint&&(this._endpoint=t.endpoint)},(t=[{key:"endpoint",get:function(){return null==this._endpoint&&(this._endpoint=new n.y("https://".concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"))),this._endpoint},set:function(e){this._endpoint=e}}])&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}()},811:(e,t,r)=>{r.d(t,{g:()=>d,r:()=>v});var n=r(556);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t,r){return t=s(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,c()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function a(e){var t="function"==typeof Map?new Map:void 0;return a=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(c())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&u(o,r.prototype),o}(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),u(r,e)},a(e)}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function p(e,t,r){return t&&l(e.prototype,t),r&&l(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}var d=function(){function e(t){if(f(this,e),y(this,"region",void 0),y(this,"accessKeyId",void 0),y(this,"secretAccessKey",void 0),y(this,"sessionToken",void 0),y(this,"endpoint",void 0),!t.region||""===t.region)throw new v('invalid AWS region; reason: expected a valid AWS region name (e.g. "us-east-1"), got `'.concat(t.region,"`"));if(!t.accessKeyId||""===t.accessKeyId)throw new v("invalid AWS access key ID; reason: expected a non empty string, got `".concat(t.accessKeyId,"`"));if(t.accessKeyId.length<16||t.accessKeyId.length>128)throw new v("invalid AWS access key ID; reason: size should be between 16 and 128 characters, got ".concat(t.accessKeyId.length));if(!t.secretAccessKey||""===t.secretAccessKey)throw new v("invalid AWS secret access key; reason: expected a non empty string, got `".concat(t.secretAccessKey,"`"));this.region=t.region,this.accessKeyId=t.accessKeyId,this.secretAccessKey=t.secretAccessKey,void 0!==t.sessionToken&&(this.sessionToken=t.sessionToken),void 0!==t.endpoint&&("string"==typeof t.endpoint?this.endpoint=new n.y(t.endpoint):this.endpoint=t.endpoint)}return p(e,null,[{key:"fromEnvironment",value:function(t){return new e({region:__ENV.AWS_REGION,accessKeyId:__ENV.AWS_ACCESS_KEY_ID,secretAccessKey:__ENV.AWS_SECRET_ACCESS_KEY,sessionToken:__ENV.AWS_SESSION_TOKEN,endpoint:null==t?void 0:t.endpoint})}}])}(),v=function(e){function t(e){return f(this,t),i(this,t,[e])}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(t,e),p(t)}(a(Error))},464:(e,t,r)=>{r.d(t,{Kq:()=>o,Qt:()=>u,Qz:()=>g,SN:()=>b,Uv:()=>w,VQ:()=>m,Zs:()=>i,_e:()=>O,b2:()=>f,fk:()=>y,he:()=>a,iK:()=>s,ot:()=>l,pj:()=>d,sY:()=>p,ud:()=>h,wN:()=>n,z8:()=>S,zG:()=>c,zX:()=>v});var n="X-Amz-Algorithm",o="X-Amz-Credential",i="X-Amz-Date",a="X-Amz-Expires",c="X-Amz-Signature",u="X-Amz-SignedHeaders",s="X-Amz-Security-Token",f="x-amz-content-sha256",l=i.toLowerCase(),p=c.toLowerCase(),y=("X-Amz-Target".toLowerCase(),s.toLowerCase()),h="authorization",d=[h,l,"date"],v="host",b={authorization:!0,"cache-control":!0,connection:!0,expect:!0,from:!0,"keep-alive":!0,"max-forwards":!0,pragma:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,"user-agent":!0,"x-amzn-trace-id":!0},m="aws4_request",g="AWS4-HMAC-SHA256",w=604800,O="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",S="UNSIGNED-PAYLOAD"},556:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function c(e,t,r){return(t=u(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:t+""}r.d(t,{y:()=>s});var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_protocol",void 0),c(this,"_hostname",void 0),c(this,"_port",void 0);var r=!t.startsWith("http://")&&!t.startsWith("https://")?"".concat(e.DEFAULT_PROTOCOL,"://").concat(t):t,n=r.match(/^https?:/),i=o(r.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=n?n[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=i.split(":")[0],this._port=i.split(":")[1]?parseInt(i.split(":")[1]):void 0}return t=e,(r=[{key:"copy",value:function(){return new e(this.href)}},{key:"host",get:function(){return this._port?"".concat(this._hostname,":").concat(this._port):this._hostname},set:function(e){var t=o(e.split(":"),2),r=t[0],n=t[1];this._hostname=r,this._port=n?parseInt(n):void 0}},{key:"hostname",get:function(){return this._hostname},set:function(e){this._hostname=e}},{key:"href",get:function(){return"".concat(this.protocol,"://").concat(this.host)},set:function(t){var r=t.match(/^https?:/),n=o(t.replace(/^https?:\/\//,"").split("/"),1)[0];this._protocol=r?r[0].slice(0,-1):e.DEFAULT_PROTOCOL,this._hostname=n.split(":")[0],this._port=n.split(":")[1]?parseInt(n.split(":")[1]):void 0}},{key:"port",get:function(){return this._port},set:function(e){this._port=e}},{key:"protocol",get:function(){return this._protocol},set:function(e){this._protocol=e}}])&&a(t.prototype,r),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,n}();c(s,"DEFAULT_PROTOCOL","https")},539:(e,t,r)=>{r.d(t,{c:()=>p});var n=r(95);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,l(n.key),n)}}function a(e,t,r){return t=f(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,u()?Reflect.construct(t,r||[],f(e).constructor):t.apply(e,r))}function c(e){var t="function"==typeof Map?new Map:void 0;return c=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return function(e,t,r){if(u())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&s(o,r.prototype),o}(e,arguments,f(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),s(r,e)},c(e)}function u(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(u=function(){return!!e})()}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function l(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:t+""}var p=function(e){function t(e,r){var n,o,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=a(this,t,[e]),o=n,c=void 0,(i=l(i="code"))in o?Object.defineProperty(o,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[i]=c,n.name="AWSError",n.code=r,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(t,e),r=t,c=[{key:"parseXML",value:function(e){var r=(0,n.parseHTML)(e);return new t(r.find("Message").text(),r.find("Code").text())}},{key:"parse",value:function(e){if("application/json"===e.headers["Content-Type"]){var r=e.json()||{};return new t(r.Message||r.message||r.__type||"An error occurred on the server side",e.headers["X-Amzn-Errortype"]||r.__type)}return t.parseXML(e.body)}}],(o=null)&&i(r.prototype,o),c&&i(r,c),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o,c}(c(Error))},21:(e,t,r)=>{function n(e,t){e=e.toLowerCase();for(var r=0,n=Object.keys(t);r<n.length;r++){if(e===n[r].toLowerCase())return!0}return!1}r.d(t,{o:()=>n})},639:(e,t,r)=>{r.d(t,{B:()=>j,s:()=>_});var n=r(275),o=r.n(n),i=r(464),a=r(539),c=r(21),u=r(680);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t,r){return t=p(t),function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],p(e).constructor):t.apply(e,r))}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function w(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t,r){return(t=S(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}var j=function(){return w((function e(t){var r=t.service,n=t.region,o=t.credentials,i=t.uriEscapePath,a=t.applyChecksum;m(this,e),O(this,"service",void 0),O(this,"region",void 0),O(this,"credentials",void 0),O(this,"uriEscapePath",void 0),O(this,"applyChecksum",void 0),this.service=r,this.region=n,this.credentials=o,this.uriEscapePath="boolean"!=typeof i||i,this.applyChecksum="boolean"!=typeof a||a}),[{key:"sign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=b(b({},{signingDate:new Date,unsignableHeaders:new Set,signableHeaders:new Set}),t),n=E(r.signingDate),o=n.longDate,a=n.shortDate,u=r.signingService||this.service,s=r.signingRegion||this.region,f="".concat(a,"/").concat(s,"/").concat(u,"/").concat(i.VQ);e.headers[i.zX]||(e.headers[i.zX]=e.endpoint.hostname);for(var l=0,p=Object.keys(e.headers);l<p.length;l++){var y=p[l];i.pj.indexOf(y.toLowerCase())>-1&&delete e.headers[y]}e.headers[i.ot]=o,this.credentials.sessionToken&&(e.headers[i.fk]=this.credentials.sessionToken),ArrayBuffer.isView(e.body)&&(e.body=e.body.buffer),e.body||(e.body="");var h=this.computePayloadHash(e);!(0,c.o)(i.b2,e.headers)&&this.applyChecksum&&(e.headers[i.b2]=h);var d=this.computeCanonicalHeaders(e,r.unsignableHeaders,r.signableHeaders),v=this.calculateSignature(o,f,this.deriveSigningKey(this.credentials,u,s,a),this.createCanonicalRequest(e,d,h));e.headers[i.ud]="".concat(i.Qz," ")+"Credential=".concat(this.credentials.accessKeyId,"/").concat(f,", ")+"SignedHeaders=".concat(Object.keys(d).sort().join(";"),", ")+"Signature=".concat(v);var m=e.endpoint.href;return e.path&&(m+=e.path),e.query&&(m+="?".concat(this.serializeQueryParameters(e.query))),b({url:m},e)}},{key:"presign",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.signingDate,n=void 0===r?new Date:r,o=t.expiresIn,a=void 0===o?3600:o,c=t.unsignableHeaders,u=t.unhoistableHeaders,s=t.signableHeaders,f=t.signingRegion,l=t.signingService,p=E(n),y=p.longDate,h=p.shortDate,d=f||this.region,v=l||this.service;if(a>i.Uv)throw new _("Signature version 4 presigned URLs can't be valid for more than 7 days");var m="".concat(h,"/").concat(d,"/").concat(v,"/").concat(i.VQ),g=this.moveHeadersToQuery(e,{unhoistableHeaders:u});g.headers[i.zX]||(g.headers[i.zX]=e.endpoint.hostname),this.credentials.sessionToken&&(g.query[i.iK]=this.credentials.sessionToken),g.query[i.wN]=i.Qz,g.query[i.Kq]="".concat(this.credentials.accessKeyId,"/").concat(m),g.query[i.Zs]=y,g.query[i.he]=a.toString(10);var w=this.computeCanonicalHeaders(g,c,s);g.query[i.Qt]=Object.keys(w).sort().join(";");var O=this.deriveSigningKey(this.credentials,v,d,h),S=this.computePayloadHash(e),j=this.createCanonicalRequest(g,w,S);g.query[i.zG]=this.calculateSignature(y,m,O,j);var P=g.endpoint.href;return g.path&&(P+=g.path),g.query&&(P+="?".concat(this.serializeQueryParameters(g.query))),b({url:P},g)}},{key:"createCanonicalRequest",value:function(e,t,r){var n=Object.keys(t).sort(),o=n.map((function(e){return"".concat(e,":").concat(t[e])})).join("\n"),i=n.join(";");return"".concat(e.method,"\n")+"".concat(this.computeCanonicalURI(e),"\n")+"".concat(this.computeCanonicalQuerystring(e),"\n")+"".concat(o,"\n\n")+"".concat(i,"\n")+"".concat(r)}},{key:"createStringToSign",value:function(e,t,r){var n=o().sha256(r,"hex");return"".concat(i.Qz,"\n")+"".concat(e,"\n")+"".concat(t,"\n")+"".concat(n)}},{key:"calculateSignature",value:function(e,t,r,n){var i=this.createStringToSign(e,t,n);return o().hmac("sha256",r,i,"hex")}},{key:"deriveSigningKey",value:function(e,t,r,n){var i=e.secretAccessKey,a=o().hmac("sha256","AWS4"+i,n,"binary"),c=o().hmac("sha256",a,r,"binary"),u=o().hmac("sha256",c,t,"binary");return o().hmac("sha256",u,"aws4_request","binary")}},{key:"computeCanonicalURI",value:function(e){var t=e.path;if(this.uriEscapePath){var r,n=[],o=h(t.split("/"));try{for(o.s();!(r=o.n()).done;){var i=r.value;0!==(null==i?void 0:i.length)&&("."!==i&&(".."===i?n.pop():n.push(i)))}}catch(e){o.e(e)}finally{o.f()}var a=null!=t&&t.startsWith("/")?"/":"",c=n.join("/"),u=n.length>0&&null!=t&&t.endsWith("/")?"/":"",s="".concat(a).concat(c).concat(u);return encodeURIComponent(s).replace(/%2F/g,"/")}return t}},{key:"computeCanonicalQuerystring",value:function(e){var t,r=e.query,n=void 0===r?{}:r,o=[],a={},c=function(e){if(e.toLowerCase()===i.sY)return 1;o.push(e);var t=n[e];"string"==typeof t?a[e]="".concat(P(e),"=").concat(P(t)):Array.isArray(t)&&(a[e]=t.slice(0).sort().reduce((function(t,r){return t.concat(["".concat(P(e),"=").concat(P(r))])}),[]).join("&"))},u=h(Object.keys(n).sort());try{for(u.s();!(t=u.n()).done;){c(t.value)}}catch(e){u.e(e)}finally{u.f()}return o.map((function(e){return a[e]})).filter((function(e){return e})).join("&")}},{key:"computeCanonicalHeaders",value:function(e,t,r){var n,o=e.headers,a={},c=h(Object.keys(o).sort());try{for(c.s();!(n=c.n()).done;){var u=n.value;if(null!=o[u]){var s=u.toLowerCase();(s in i.SN||null!=t&&t.has(s))&&(!r||r&&!r.has(s))||"string"==typeof o[u]&&(a[s]=o[u]=o[u].trim().replace(/\s+/g," "))}}}catch(e){c.e(e)}finally{c.f()}return a}},{key:"computePayloadHash",value:function(e){var t=e.headers,r=e.body;return t[i.b2]?t[i.b2]:null==r?i._e:"string"==typeof r||(0,u.m)(r)?o().sha256(r,"hex").toLowerCase():ArrayBuffer.isView(r)?o().sha256(r.buffer,"hex").toLowerCase():i.z8}},{key:"moveHeadersToQuery",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=JSON.parse(JSON.stringify(e)),n=r.headers,o=r.query,i=void 0===o?{}:o,a=0,c=Object.keys(n);a<c.length;a++){var u,s=c[a],f=s.toLowerCase();"x-amz-"!==f.slice(0,6)||null!==(u=t.unhoistableHeaders)&&void 0!==u&&u.has(f)||(i[s]=n[s],delete n[s])}return b(b({},r),{},{headers:n,query:i})}},{key:"serializeQueryParameters",value:function(e,t){var r,n=[],o={},i=function(r){if(null!=t&&t.includes(r.toLowerCase()))return 1;n.push(r);var i=e[r];"string"==typeof i?o[r]="".concat(P(r),"=").concat(P(i)):Array.isArray(i)&&(o[r]=i.slice(0).sort().reduce((function(e,t){return e.concat(["".concat(P(r),"=").concat(P(t))])}),[]).join("&"))},a=h(Object.keys(e).sort());try{for(a.s();!(r=a.n()).done;){i(r.value)}}catch(e){a.e(e)}finally{a.f()}return n.map((function(e){return o[e]})).filter((function(e){return e})).join("&")}}])}(),_=function(e){function t(e,r){var n;return m(this,t),(n=f(this,t,[e,r])).name="InvalidSignatureError",n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),w(t)}(a.c);function P(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}function E(e){var t,r=(t=e,function(e){return"number"==typeof e?new Date(1e3*e):"string"==typeof e?Number(e)?new Date(1e3*Number(e)):new Date(e):e}(t).toISOString().replace(/\.\d{3}Z$/,"Z")).replace(/[-:]/g,"");return{longDate:r,shortDate:r.slice(0,8)}}},680:(e,t,r)=>{function n(e){return"function"==typeof ArrayBuffer&&(e instanceof ArrayBuffer||"[object ArrayBuffer]"===Object.prototype.toString.call(e))}function o(e){return Object.keys(e).reduce((function(t,r){var n=e[r];return null!=n&&t.push("".concat(encodeURIComponent(r),"=").concat(encodeURIComponent(n))),t}),[]).join("&")}r.d(t,{R:()=>o,m:()=>n})},275:e=>{e.exports=require("k6/crypto")},95:e=>{e.exports=require("k6/html")},570:e=>{e.exports=require("k6/http")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{r.r(n),r.d(n,{AWSConfig:()=>e.g,InvalidAWSConfigError:()=>e.r,InvalidSignatureError:()=>t.s,SQSClient:()=>A,SQSServiceError:()=>T});var e=r(811),t=r(639),o=r(2),i=r(570),a=r.n(i),c=r(680),u=r(539);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(){f=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var i=t&&t.prototype instanceof g?t:g,a=Object.create(i.prototype),c=new L(n||[]);return o(a,"_invoke",{value:A(e,r,c)}),a}function y(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=p;var h="suspendedStart",d="suspendedYield",v="executing",b="completed",m={};function g(){}function w(){}function O(){}var S={};l(S,a,(function(){return this}));var j=Object.getPrototypeOf,_=j&&j(j(I([])));_&&_!==r&&n.call(_,a)&&(S=_);var P=O.prototype=g.prototype=Object.create(S);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,i,a,c){var u=y(e[o],e,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==s(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){f.value=e,a(f)}),(function(e){return r("throw",e,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function A(t,r,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===b){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=x(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=y(t,r,n);if("normal"===s.type){if(o=n.done?b:d,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=b,n.method="throw",n.arg=s.arg)}}}function x(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=y(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(s(t)+" is not iterable")}return w.prototype=O,o(P,"constructor",{value:O,configurable:!0}),o(O,"constructor",{value:w,configurable:!0}),w.displayName=l(O,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,O):(e.__proto__=O,l(e,u,"GeneratorFunction")),e.prototype=Object.create(P),e},t.awrap=function(e){return{__await:e}},E(k.prototype),l(k.prototype,c,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(p(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(P),l(P,u,"Generator"),l(P,a,(function(){return this})),l(P,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function v(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){d(i,n,o,a,c,"next",e)}function c(e){d(i,n,o,a,c,"throw",e)}a(void 0)}))}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,E(n.key),n)}}function g(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function w(e,t,r){return t=S(t),function(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(t,r||[],S(e).constructor):t.apply(e,r))}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function P(e,t,r){return(t=E(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}var k="2012-11-05",A=function(e){function r(e){var n;return b(this,r),P(n=w(this,r,[e,"sqs"]),"signature",void 0),P(n,"commonHeaders",void 0),n.signature=new t.B({service:n.serviceName,region:n.awsConfig.region,credentials:{accessKeyId:n.awsConfig.accessKeyId,secretAccessKey:n.awsConfig.secretAccessKey,sessionToken:n.awsConfig.sessionToken},uriEscapePath:!0,applyChecksum:!0}),n.commonHeaders={"Content-Type":"application/x-www-form-urlencoded"},n}return j(r,e),g(r,[{key:"sendMessage",value:(o=v(f().mark((function e(t,r){var n,o,i,u,s,p,y=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={Action:"SendMessage",Version:k,QueueUrl:t,MessageBody:r},void 0!==(n=y.length>2&&void 0!==y[2]?y[2]:{}).messageDeduplicationId&&(o=h(h({},o),{},{MessageDeduplicationId:n.messageDeduplicationId})),void 0!==n.messageGroupId&&(o=h(h({},o),{},{MessageGroupId:n.messageGroupId})),void 0!==n.messageAttributes&&(i=Object.entries(n.messageAttributes).reduce((function(e,t,r){var n=l(t,2),o=n[0],i=n[1],a="Binary"===i.type?"BinaryValue":"StringValue";return Object.assign(e,P(P(P({},"MessageAttribute.".concat(r+1,".Name"),o),"MessageAttribute.".concat(r+1,".Value.").concat(a),i.value),"MessageAttribute.".concat(r+1,".Value.DataType"),i.type))}),{}),o=h(h({},o),i)),void 0!==n.delaySeconds&&(o=h(h({},o),{},{DelaySeconds:n.delaySeconds})),u=this.signature.sign({method:"POST",endpoint:this.endpoint,path:"/",headers:h({},this.commonHeaders),body:(0,c.R)(o)},{}),e.next=10,a().asyncRequest("POST",u.url,u.body||"",{headers:u.headers});case 10:return s=e.sent,this._handleError("SendMessage",s),p=s.html("SendMessageResponse > SendMessageResult"),e.abrupt("return",new x(p.find("MessageId").text(),p.find("MD5OfMessageBody").text()));case 14:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"listQueues",value:(n=v(f().mark((function e(){var t,r,n,o,i,u=arguments;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={Action:"ListQueues",Version:k},void 0!==(null==(t=u.length>0&&void 0!==u[0]?u[0]:{})?void 0:t.maxResults)&&(r=h(h({},r),{},{MaxResults:t.maxResults})),void 0!==(null==t?void 0:t.nextToken)&&(r=h(h({},r),{},{NextToken:t.nextToken})),void 0!==(null==t?void 0:t.queueNamePrefix)&&(r=h(h({},r),{},{QueueNamePrefix:t.queueNamePrefix})),n=this.signature.sign({method:"POST",endpoint:this.endpoint,path:"/",headers:h(h({},this.commonHeaders),{},{Host:this.endpoint.host}),body:(0,c.R)(r)},{}),e.next=9,a().asyncRequest("POST",n.url,n.body||"",{headers:n.headers});case 9:return o=e.sent,this._handleError("ListQueues",o),i=o.html(),e.abrupt("return",{urls:i.find("QueueUrl").toArray().map((function(e){return e.text()})),nextToken:i.find("NextToken").text()||void 0});case 13:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"_handleError",value:function(e,r){var n=r.error_code;if(""!=r.error||0!==n){var o=u.c.parseXML(r.body);if("AuthorizationHeaderMalformed"===o.code)throw new t.s(o.message,o.code);throw new T(o.message,o.code||"unknown",e)}}}]);var n,o}(o.R),x=g((function e(t,r){b(this,e),P(this,"id",void 0),P(this,"bodyMD5",void 0),this.id=t,this.bodyMD5=r})),T=function(e){function t(e,r,n){var o;return b(this,t),P(o=w(this,t,[e,r]),"operation",void 0),o.name="SQSServiceError",o.operation=n,o}return j(t,e),g(t)}(u.c)})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=sqs.js.map