function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function p(e,t,n){var i,o,r,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function h(e){return l=e,f=setTimeout(w,t),c?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function w(){var e=v();if(j(e))return E(e);f=setTimeout(w,function(e){var n=t-(e-u);return s?d(n,r-(e-l)):n}(e))}function E(e){return f=void 0,p&&i?b(e):(i=o=void 0,a)}function S(){var e=v(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(w,t),b(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},S.flush=function(){return void 0===f?a:E(v())},S}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const b={inputEmail:document.querySelector('[name = "email"]'),inutMessage:document.querySelector('[name="message"]'),form:document.querySelector(".feedback-form")},h=localStorage.getItem("feedback-form-state");if(h){const e=JSON.parse(h);b.inputEmail.value=e.email||"",b.inutMessage.value=e.message||""}b.form.addEventListener("input",e(t)((function(){const e={email:b.inputEmail.value,message:b.inutMessage.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault();const{email:t,message:n}=b.form.elements;if(""===t.value||""===n.value)return void alert("Please fill in all the fields!");const i=new FormData(b.form),o={};i.forEach(((e,t)=>{o[t]=e.trim()})),console.log(o),localStorage.removeItem("feedback-form-state"),b.form.reset()}));
//# sourceMappingURL=03-feedback.dac24b1a.js.map
