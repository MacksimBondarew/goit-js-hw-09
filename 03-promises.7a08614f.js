!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=function(e){return document.querySelector(e)},a=u(".form"),l=u('[name="step"]'),c=u('[name="amount"]'),f=u('[name="delay"]');function s(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delayPromiseNumber:n}):t({position:e,delayPromiseNumber:n})}),n)}))}a.addEventListener("submit",(function(n){n.preventDefault();for(var o=+f.value,t=+l.value,i=+c.value,u=1;u<=i;u++)s(u,o).then((function(n){var o=n.position,t=n.delayPromiseNumber;e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delayPromiseNumber;e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.7a08614f.js.map
