/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../maybe","./utils","../Accessor","../Collection"],(function(e,t,n,o,r){"use strict";const f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function i(e){return e instanceof o}function c(e){return e instanceof r?Object.keys(e.items):i(e)?n.getProperties(e).keys():e?Object.keys(e):[]}function s(e,t){return e instanceof r?e.items[t]:e[t]}function u(e){return e?e.declaredClass:null}function l(e,n){const o=e.diff;if(o&&"function"==typeof o)return o(e,n);const r=c(e),p=c(n);if(0===r.length&&0===p.length)return;if(!r.length||!p.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,n))return{type:"complete",oldValue:e,newValue:n};const a=p.filter((e=>-1===r.indexOf(e))),y=r.filter((e=>-1===p.indexOf(e))),d=r.filter((t=>p.indexOf(t)>-1&&s(e,t)!==s(n,t))).concat(a,y).sort(),m=u(e);if(m&&f.indexOf(m)>-1&&d.length)return{type:"complete",oldValue:e,newValue:n};let h;const b=i(e)&&i(n);for(const r of d){const f=s(e,r),i=s(n,r);let c;(b||"function"!=typeof f&&"function"!=typeof i)&&(f!==i&&(null==f&&null==i||(c=o&&o[r]&&"function"==typeof o[r]?o[r](f,i):"object"==typeof f&&"object"==typeof i&&u(f)===u(i)?l(f,i):{type:"complete",oldValue:f,newValue:i},t.isSome(c)&&(t.isSome(h)?h.diff[r]=c:h={type:"partial",diff:{[r]:c}}))))}return h}function p(e,n){if(t.isNone(e))return!1;const o=n.split(".");let r=e;for(const e of o){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const t=r.diff[e];if(!t)return!1;r=t}}return!0}e.diff=function(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&u(e)!==u(t)?{type:"complete",oldValue:e,newValue:t}:l(e,t)},e.hasDiff=p,e.hasDiffAny=function(e,t){for(const n of t)if(p(e,n))return!0;return!1},e.isEmpty=function e(n){if(t.isNone(n))return!0;switch(n.type){case"complete":return!1;case"collection":{const t=n;for(const n of t.added)if(!e(n))return!1;for(const n of t.removed)if(!e(n))return!1;for(const n of t.changed)if(!e(n))return!1;return!0}case"partial":for(const t in n.diff){if(!e(n.diff[t]))return!1}return!0}},Object.defineProperty(e,"__esModule",{value:!0})}));