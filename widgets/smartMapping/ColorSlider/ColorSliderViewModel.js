// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/maybe","../../../core/accessorSupport/decorators","../../../renderers/support/utils","../SmartMappingSliderViewModel"],function(e,t,n,r,o,a,i,s,l){return function(e){function t(t){var n=e.call(this,t)||this;return n.handlesSyncedToPrimary=!0,n}return r(t,e),Object.defineProperty(t.prototype,"primaryHandleEnabled",{get:function(){var e=this.stops;if(!e||!e.length)return!1;var t=e.length;return(3===t||5===t)&&this._get("primaryHandleEnabled")},set:function(e){this._set("primaryHandleEnabled",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){if(e&&e.length){var t=e.map(function(e){return e.value}),r=this,o=r.max,i=r.min,s={};a.isSome(i)&&t.some(function(e){return e<i})&&(s.min=Math.min.apply(Math,t)),a.isSome(o)&&t.some(function(e){return e>o})&&(s.max=Math.max.apply(Math,t)),this.set(n({},s))}this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"values",{get:function(){var e=this,t=e.primaryHandleEnabled,n=e.stops;if(!n||!n.length||n.length<2)return[];var r=n.map(function(e){return e.value});return t?3===r.length?[r[0],r[1],r[2]]:[r[0],r[2],r[4]]:[r[0],r[r.length-1]]},enumerable:!0,configurable:!0}),t.prototype.setValue=function(e,t){var n=this.values,r=n[e];if(t=this.toPrecision(t),r!==t){var o=this,a=o.max,i=o.min;if(!(t>a||t<i)){if(this.primaryHandleEnabled){var s=n[1];0===e&&t>s?t=s:2===e&&t<s&&(t=s)}var l=this._getColorStopChanges(e,t);this._updateColorStops(l),this.notifyChange("values"),this.notifyChange("labels")}}},t.prototype.getStopInfo=function(){var e=this,t=e.min,n=e.max,r=e.stops;return r&&r.length?r.map(function(e){return{color:e.color,offset:(n-e.value)/(n-t)}}):[]},t.prototype._getStopIndexFromValueIndex=function(e){var t=this,n=t.primaryHandleEnabled,r=t.stops;return 0===e?0:n&&1===e?2:r.length-1},t.prototype._getColorStopChanges=function(e,t){return this.primaryHandleEnabled?1===e?this._getColorStopChangesAfterPrimaryHandleMove(e,t):this._getColorStopChangesAfterSecondaryHandleMove(e,t):this._getColorStopChangesAfterHandleMove(e,t)},t.prototype._getColorStopChangesAfterPrimaryHandleMove=function(e,t){var n=this,r=n.handlesSyncedToPrimary,o=n.stops,a=n.values,i=this._getStopIndexFromValueIndex(e);if(r){var s=this,l=s.max,p=s.min,u=t-a[e],d=Math.max(Math.min(a[0]+u,l),p),h=Math.max(Math.min(a[2]+u,l),p);return 5===o.length?[{index:0,value:this.toPrecision(d)},{index:1,value:this.toPrecision((t+d)/2)},{index:2,value:t},{index:3,value:this.toPrecision((t+h)/2)},{index:4,value:this.toPrecision(h)}]:[{index:0,value:d},{index:1,value:t},{index:2,value:h}]}return 5===o.length?[{index:1,value:this.toPrecision((a[1]+a[0])/2)},{index:2,value:t},{index:3,value:this.toPrecision((a[1]+a[2])/2)}]:[{index:i,value:t}]},t.prototype._getColorStopChangesAfterSecondaryHandleMove=function(e,t){var n=this,r=n.stops,o=n.values,a=this._getStopIndexFromValueIndex(e);if(5===r.length){return[{index:a,value:t},{index:0===a?1:3,value:this.toPrecision((t+o[1])/2)}]}return[{index:a,value:t}]},t.prototype._getColorStopChangesAfterHandleMove=function(e,t){var n=this,r=this,o=r.max,a=r.min,i=r.stops,s=r.values,l=this._getStopIndexFromValueIndex(e),p=0===e?a:s[e-1],u=e===s.length-1?o:s[e+1],d=i.map(function(e){return e.value});d[l]=Math.max(Math.min(t,u),p);var h=d[d.length-1]-d[0],c=i.length-1;return d.map(function(e,t){return{index:t,value:n.toPrecision(d[0]+t*h/c)}})},t.prototype._updateColorStops=function(e){var t=this,n=t.hasTimeData,r=t.stops;s.updateColorStops({changes:e,stops:r,isDate:n})},o([i.property()],t.prototype,"handlesSyncedToPrimary",void 0),o([i.property({dependsOn:["stops"]})],t.prototype,"primaryHandleEnabled",null),o([i.property()],t.prototype,"stops",null),o([i.property({dependsOn:["primaryHandleEnabled","stops"],readOnly:!0})],t.prototype,"values",null),t=o([i.subclass("esri.widgets.smartMapping.ColorSlider.ColorSliderViewModel")],t)}(i.declared(l))});