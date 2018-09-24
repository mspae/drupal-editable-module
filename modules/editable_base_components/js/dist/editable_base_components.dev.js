!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("PropTypes"),require("React")):"function"==typeof define&&define.amd?define(["PropTypes","React"],t):"object"==typeof exports?exports.EditableBaseComponents=t(require("PropTypes"),require("React")):e.EditableBaseComponents=t(e.PropTypes,e.React)}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/lodash.uniqueid/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.uniqueid/index.js ***!
  \***********************************************/
/*! no static exports found */function(e,t,n){(function(t){var n=1/0,r="[object Symbol]",o="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,i=o||u||Function("return this")(),c=0,a=Object.prototype.toString,p=i.Symbol,l=p?p.prototype:void 0,f=l?l.toString:void 0;function s(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&a.call(e)==r}(e))return f?f.call(e):"";var t=e+"";return"0"==t&&1/e==-n?"-0":t}e.exports=function(e){var t=++c;return function(e){return null==e?"":s(e)}(e)+t}}).call(this,n(/*! ./../webpack/buildin/global.js */"./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},"./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: Input */function(e,t,n){"use strict";n.r(t),n.d(t,"Input",function(){return y});var r=n(/*! react */"react"),o=n.n(r),u=n(/*! prop-types */"prop-types"),i=n.n(u),c=n(/*! lodash.uniqueid */"./node_modules/lodash.uniqueid/index.js"),a=n.n(c);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,s(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["PureComponent"]),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"componentDidMount",value:function(){var e=this.props.name;this.name=e||a()("input_")}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.type,r=e.handleChange,u=e.placeholder,i=e.label,c=e.propPath;return o.a.createElement("div",{className:"form-item"},i&&o.a.createElement("label",{htmlFor:this.name},i),o.a.createElement("input",{className:"form-text",type:n,value:t,"data-prop-path":c,placeholder:u,onChange:r,id:this.name}))}}]),t}();b(y,"propTypes",{value:i.a.string,type:i.a.oneOf(["text","email","password","number","date"]),handleChange:i.a.func.isRequired,placeholder:i.a.string,label:i.a.string,propPath:i.a.string,name:i.a.string}),b(y,"defaultProps",{value:"",type:"text",placeholder:"",label:null,propPath:null,name:null})},"./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Input */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./Input */"./src/components/Input.js");n.d(t,"Input",function(){return r.Input})},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Input */function(e,t,n){"use strict";n.r(t);var r=n(/*! ./components */"./src/components/index.js");n.d(t,"Input",function(){return r.Input})},0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,n){e.exports=n(/*! /Users/martin/Code/demo-commerce/web/modules/contrib/editable/modules/editable_base_components/js/src/index.js */"./src/index.js")},"prop-types":
/*!****************************!*\
  !*** external "PropTypes" ***!
  \****************************/
/*! no static exports found */function(t,n){t.exports=e},react:
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */function(e,n){e.exports=t}})});
//# sourceMappingURL=editable_base_components.dev.js.map