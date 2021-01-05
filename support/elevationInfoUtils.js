/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/maybe","../symbols/support/unitConversionUtils"],(function(e,t,n){"use strict";function o(e,n){return t.isNone(n)||!n.mode?e?"absolute-height":"on-the-ground":n.mode}function r(e,n){return o(!!t.isSome(e)&&e.hasZ,n)}function i(e){const t=s(e);return r(e.geometry,t)}function s(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function u(e,n,o,r,i,s,u=null){if(t.isNone(s))return;const a=t.isSome(u)?u.mode:"absolute-height";if("on-the-ground"===a)return 0;return function(e,n,o,r,i,s,u,a){const l=t.isSome(u)&&t.isSome(u.offset)?u.offset:0;switch(a){case"absolute-height":return e-l;case"relative-to-ground":return e-((s.elevationProvider.getElevation(n,o,r,i,"ground")||0)+l);case"relative-to-scene":return e-((s.elevationProvider.getElevation(n,o,r,i,"scene")||0)+l)}}(function(e,n,o,r,i,s,u){const a=t.isSome(s.offset)?s.offset:0;switch(s.mode){case"absolute-height":return u+a;case"on-the-ground":return i.elevationProvider.getElevation(e,n,0,r,"ground")||0;case"relative-to-ground":return u+(i.elevationProvider.getElevation(e,n,o,r,"ground")||0)+a;case"relative-to-scene":return u+(i.elevationProvider.getElevation(e,n,o,r,"scene")||0)+a}}(n,o,r,i,e,s,r),n,o,r,i,e,u,a)}e.getConvertedElevation=function(e,t,n,o=null){return u(e,t.x,t.y,t.hasZ?t.z:0,t.spatialReference,n,o)},e.getConvertedElevationFromMapPoint=function(e,t,n,o,r=null){return u(e,t[0],t[1],t.length>2?t[2]:0,n,o,r)},e.getEffectiveElevationMode=o,e.getGeometryEffectiveElevationMode=r,e.getGraphicEffectiveElevationInfo=function(e){const o=s(e),i=r(e.geometry,o);return{mode:i,offset:t.isSome(o)&&"on-the-ground"!==i?t.unwrapOr(o.offset,0)*n.getMetersPerUnit(t.unwrapOr(o.unit,"meters")):0}},e.getGraphicEffectiveElevationMode=i,e.getZForElevationMode=function(e,n,o){if(t.isNone(o)||!o.mode)return;const r=e.hasZ?e.z:0,i=t.isSome(o.offset)?o.offset:0;switch(o.mode){case"absolute-height":return r-i;case"on-the-ground":return 0;case"relative-to-ground":return r-((n.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"ground")||0)+i);case"relative-to-scene":return r-((n.elevationProvider.getElevation(e.x,e.y,e.z,e.spatialReference,"scene")||0)+i)}},e.hasGraphicFeatureExpressionInfo=function(e){if("on-the-ground"===i(e))return!1;const n=s(e),o=t.isSome(n)&&n.featureExpressionInfo?n.featureExpressionInfo.expression:null;return!(!o||"0"===o)},Object.defineProperty(e,"__esModule",{value:!0})}));