// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../../moment","../languageUtils"],function(e,t,n,r){"use strict";function u(e){return null===e?e:isNaN(e.getTime())?null:e}function a(e,t){e.today=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,0,0);var u=new Date;return u.setHours(0,0,0,0),u})},e.now=function(e,n){return t(e,n,function(e,t,n){return r.pcCheck(n,0,0),new Date})},e.timestamp=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,0,0);var u=new Date;return u=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds())})},e.toutc=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?null:new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds())})},e.tolocal=function(e,u){return t(e,u,function(e,t,u){r.pcCheck(u,1,1);var a=r.toDate(u[0]);return null===a?null:n.utc([a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()]).toDate()})},e.day=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getDate()})},e.month=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getMonth()})},e.year=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getFullYear()})},e.hour=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getHours()})},e.second=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getSeconds()})},e.millisecond=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getMilliseconds()})},e.minute=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getMinutes()})},e.weekday=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,1,1);var u=r.toDate(n[0]);return null===u?NaN:u.getDay()})},e.date=function(e,a){return t(e,a,function(e,t,a){if(r.pcCheck(a,0,7),3===a.length)return u(new Date(r.toNumber(a[0]),r.toNumber(a[1]),r.toNumber(a[2]),0,0,0,0));if(4===a.length)return u(new Date(r.toNumber(a[0]),r.toNumber(a[1]),r.toNumber(a[2]),r.toNumber(a[3]),0,0,0));if(5===a.length)return u(new Date(r.toNumber(a[0]),r.toNumber(a[1]),r.toNumber(a[2]),r.toNumber(a[3]),r.toNumber(a[4]),0,0));if(6===a.length)return u(new Date(r.toNumber(a[0]),r.toNumber(a[1]),r.toNumber(a[2]),r.toNumber(a[3]),r.toNumber(a[4]),r.toNumber(a[5]),0));if(7===a.length)return u(new Date(r.toNumber(a[0]),r.toNumber(a[1]),r.toNumber(a[2]),r.toNumber(a[3]),r.toNumber(a[4]),r.toNumber(a[5]),r.toNumber(a[6])));if(2===a.length){var o=r.toString(a[1]);if(""===o)return null;o=r.standardiseDateFormat(o);var c=n(r.toString(a[0]),o,!0);return!0===c.isValid()?c.toDate():null}if(1===a.length){if(r.isString(a[0])&&""===a[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;var s=r.toNumber(a[0]);if(!1===isNaN(s))return u(new Date(s));return r.toDate(a[0])}return 0===a.length?new Date:void 0})},e.datediff=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,2,3);var u=r.toDateM(n[0]),a=r.toDateM(n[1]);if(null===u||null===a)return NaN;switch(r.toString(n[2]).toLowerCase()){case"days":case"day":case"d":return u.diff(a,"days",!0);case"months":case"month":return u.diff(a,"months",!0);case"minutes":case"minute":case"m":return"M"===n[2]?u.diff(a,"months",!0):u.diff(a,"minutes",!0);case"seconds":case"second":case"s":return u.diff(a,"seconds",!0);case"milliseconds":case"millisecond":case"ms":return u.diff(a);case"hours":case"hour":case"h":return u.diff(a,"hours",!0);case"years":case"year":case"y":return u.diff(a,"years",!0);default:return u.diff(a)}})},e.dateadd=function(e,n){return t(e,n,function(e,t,n){r.pcCheck(n,2,3);var u=r.toDateM(n[0]);if(null===u)return null;var a="milliseconds";switch(r.toString(n[2]).toLowerCase()){case"days":case"day":case"d":a="days";break;case"months":case"month":a="months";break;case"minutes":case"minute":case"m":a="M"===n[2]?"months":"minutes";break;case"seconds":case"second":case"s":a="seconds";break;case"milliseconds":case"millisecond":case"ms":a="milliseconds";break;case"hours":case"hour":case"h":a="hours";break;case"years":case"year":case"y":a="years"}return u.add(r.toNumber(n[1]),a),u.toDate()})}}Object.defineProperty(t,"__esModule",{value:!0}),t.registerFunctions=a});