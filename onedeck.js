!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.onedeck=t():e.onedeck=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._listeners={}}var t,n,o;return t=e,(n=[{key:"$$on",value:function(e,t){this._listeners[e]||(this._listeners[e]={},this._listeners[e].eventProperty={},this._listeners[e].eventProperty.isOnOnce=!1,this._listeners[e].data=[]),this._listeners[e].data.push(t)}},{key:"$$onOnce",value:function(e,t){this.on(e,t),this._listeners[e].eventProperty.isOnOnce=!0}},{key:"$$off",value:function(e,t){this._listeners[e].data=this._listeners[e].data.filter((function(e){return e!==t}))}},{key:"$$offAll",value:function(){this._listeners={}}},{key:"$$emit",value:function(e,t){var n=this;this._listeners[e]&&this._listeners[e].data?this._listeners[e].data.forEach((function(r){n._listeners[e].eventProperty.isOnOnce&&n.$$off(e,n._listeners[e].data[0]),r(t)})):console.error("No such event:",e)}},{key:"install",value:function(e){e._listeners=this._listeners,e.$$on=this.$$on,e.$$off=this.$$off,e.$$onOnce=this.$$onOnce,e.$$emit=this.$$emit}}])&&r(t.prototype,n),o&&r(t,o),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(u,e);var t,n,r,o=a(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),e=o.call(this),u.instances=u.instances||{},u.instances[e.constructor.name]?s(e,u.instances[e.constructor.name]):(u.instances[e.constructor.name]=l(e),e)}return t=u,(n=[{key:"eventHandler",value:function(){}},{key:"init",value:function(){}},{key:"destroy",value:function(){}},{key:"dispatcher",value:function(){}},{key:"mounted",value:function(){}}])&&i(t.prototype,n),r&&i(t,r),u}(o);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function i(e){y(u,r,o,i,c,"next",e)}function c(e){y(u,r,o,i,c,"throw",e)}i(void 0)}))}}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o=b(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=o.call(this))._initGlobalModules=h(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object.keys(t.$$config.modules).filter((function(e){return t.$$config.modules[e].global})),r=0;case 2:if(!(r<n.length)){e.next=8;break}return e.next=5,t._createModule(n[r],t.$$config.modules[n[r]]);case 5:r++,e.next=2;break;case 8:case"end":return e.stop()}}),e)}))),t._createModule=function(){var e=h(regeneratorRuntime.mark((function e(n,r){var o,u,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._modules[n]){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t._import(r.module);case 4:if((o=e.sent)&&o.default){e.next=7;break}throw new SyntaxError("Error load module: ".concat(n));case 7:if(o=o.default,t._modules[n]=new o,t._modules[n].$$global=r.global,t._modules[n].$$rout=t.$$rout.bind(v(t)),t._modules[n].$$gemit=t.$$emit.bind(v(t)),t._modules[n].$$config=t.$$config,t._modules[n].$$layoutName=r.layout,t._modules[n].$$embed={},!r.embed){e.next=32;break}u=Object.keys(r.embed),i=0;case 18:if(!(i<u.length)){e.next=32;break}return e.next=21,t._import(r.embed[u[i]].module);case 21:if((c=e.sent)&&c.default){e.next=24;break}throw new SyntaxError("Error load module: ".concat(u[i]));case 24:c=c.default,t._modules[n].$$embed[u[i]]=new c,t._modules[n].$$embed[u[i]].$$rout=t.$$rout.bind(v(t)),t._modules[n].$$embed[u[i]].$$gemit=t.$$emit.bind(v(t)),t._modules[n].$$embed[u[i]].$$config=t.$$config;case 29:i++,e.next=18;break;case 32:t._modules[n].$$global&&(t._modules[n].init(n),Object.keys(t._modules[n].$$embed).forEach((function(e){return t._modules[n].$$embed[e].init(n)})));case 33:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t._createLayout=function(){var e=h(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._layouts[n]){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t._import(n);case 4:if((r=e.sent)&&r.default){e.next=7;break}throw new SyntaxError("Error load module: ".concat(n));case 7:r=r.default,t._layouts[n]=new r,t._layouts[n].$$rout=t.$$rout.bind(v(t)),t._layouts[n].$$gemit=t.$$emit.bind(v(t)),t._layouts[n].$$config=t.$$config;case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t._initModule=function(){var e=h(regeneratorRuntime.mark((function e(n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.module[0],o=t.$$config.modules,r){e.next=5;break}return t.$$rout({path:t.$$config.mainModule}),e.abrupt("return");case 5:if(o[r]){e.next=9;break}return t.$$rout({path:t.$$config.module404}),console.error("no such module:",r),e.abrupt("return");case 9:if(!o[r].global){e.next=13;break}return t.$$rout({path:t.$$config.module404}),console.error("global module:",r),e.abrupt("return");case 13:if(!o[r].layout||o[r].layout!==t.$$currentLayout.name){e.next=17;break}t.$$currentLayout.obj.dispatcher(n.module,n.state),e.next=34;break;case 17:if(!o[r].layout){e.next=32;break}return t._destroyModule(),t._destroyLayout(),e.prev=20,e.next=23,t._createLayout(o[r].layout);case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(20),console.error(e.t0);case 28:t.$$currentLayout={name:o[r].layout,obj:t._layouts[o[r].layout]},t.$$currentLayout.obj.init(n.module,n.state),e.next=34;break;case 32:t._destroyModule(),t._destroyLayout();case 34:if(!t.$$currentModule.name||t.$$currentModule.name!==r){e.next=38;break}t._dispatcherModule(n.module,n.state),e.next=51;break;case 38:return t._destroyModule(),e.prev=39,e.next=42,t._createModule(r,o[r]);case 42:e.next=47;break;case 44:e.prev=44,e.t1=e.catch(39),console.error(e.t1);case 47:t.$$currentModule={name:r,obj:t._modules[r]},t.$$currentModule.obj.init(n.module,n.state),Object.keys(t.$$currentModule.obj.$$embed).forEach((function(e){return t.$$currentModule.obj.$$embed[e].init(n.module,n.state)})),t._dispatcherModule(n.module,n.state);case 51:n.pushState&&t.$$config.historyApi&&window.history.pushState(n.state,r,n.path),t._mounted();case 53:case"end":return e.stop()}}),e,null,[[20,25],[39,44]])})));return function(t){return e.apply(this,arguments)}}(),t._import=e.import,e.import=null,t.$$config=e,t.$$currentModule={},t.$$currentLayout={},t._modules={},t._layouts={},t._urlState={},t._initGlobalModules().then((function(){t._eventHandler();var e=t._getModuleFromUrl(t.$$config.historyApi?document.location.pathname:document.location.hash);t.init({module:e,path:t.$$config.historyApi?document.location.pathname:document.location.hash}),t._initModule({module:e,path:document.location.pathname})})).catch((function(e){console.error("Error init global module",e)})),t}return t=u,(n=[{key:"init",value:function(){}},{key:"eventHandler",value:function(){}},{key:"mounted",value:function(){}},{key:"dispatcher",value:function(){}},{key:"$$rout",value:function(e){var t=this.$$config.rootPath?this.$$config.rootPath+e.path:e.path;t=t.replace(/\/\//,"/"),this.$$config.historyApi?this._initModule({module:this._getModuleFromUrl(t),path:t,state:e.state,pushState:!0}):(this._urlState[t]=e.state,document.location.hash=t)}},{key:"_mounted",value:function(){var e=this;this.mounted(this.$$currentModule,this.$$currentLayout),Object.keys(this._modules).filter((function(t){return e._modules[t].$$global})).forEach((function(t){e._modules[t].mounted(e.$$currentModule,e.$$currentLayout),Object.keys(e._modules[t].$$embed).forEach((function(n){return e._modules[t].$$embed[n].mounted(e.$$currentModule,e.$$currentLayout)}))})),this.$$currentLayout.obj&&this.$$currentLayout.obj.mounted(this.$$currentModule,this.$$currentLayout),this.$$currentModule.obj&&(this.$$currentModule.obj.mounted(this.$$currentModule,this.$$currentLayout),Object.keys(this.$$currentModule.obj.$$embed).forEach((function(t){return e.$$currentModule.obj.$$embed[t].mounted(e.$$currentModule,e.$$currentLayout)})))}},{key:"_destroyModule",value:function(){var e=this;this.$$currentModule.obj&&(this.$$currentModule.obj.destroy(),Object.keys(this.$$currentModule.obj.$$embed).forEach((function(t){return e.$$currentModule.obj.$$embed[t].destroy()})),this.$$currentModule={})}},{key:"_destroyLayout",value:function(){this.$$currentLayout.obj&&(this.$$currentLayout.obj.destroy(),this.$$currentLayout={})}},{key:"_dispatcherModule",value:function(e,t){var n=this;this.dispatcher(e,t),Object.keys(this._modules).filter((function(e){return n._modules[e].$$global})).forEach((function(r){n._modules[r].dispatcher(e,t),Object.keys(n._modules[r].$$embed).forEach((function(o){return n._modules[r].$$embed[o].dispatcher(e,t)}))})),this.$$currentModule.obj&&(this.$$currentModule.obj.dispatcher(e,t),Object.keys(this.$$currentModule.obj.$$embed).forEach((function(r){return n.$$currentModule.obj.$$embed[r].dispatcher(e,t)})))}},{key:"_getModuleFromUrl",value:function(e){return this.$$config.rootPath&&(e=e.replace(this.$$config.rootPath,"")),(e=e.replace(/^[\/, #]/,"")).split("/")}},{key:"_eventHandler",value:function(){var e=this;this.$$config.historyApi?window.addEventListener("popstate",(function(t){return e._initModule({module:e._getModuleFromUrl(document.location.pathname),path:document.location.pathname,state:t.state})})):window.addEventListener("hashchange",(function(){return e._initModule({module:e._getModuleFromUrl(document.location.hash),path:document.location.hash,state:e._urlState[document.location.hash.replace(/^#/,"")]})}))}}])&&m(t.prototype,n),r&&m(t,r),u}(o);t.default={Observable:o,Module:d,RootModule:k}}])}));