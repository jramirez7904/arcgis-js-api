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

define(["dojo/_base/declare","dojo/_base/html","dojo/_base/lang","dojo/_base/sniff","dojo/dom","./kernel","./Evented","./geometry/Point","./geometry/ScreenPoint"],function(t,e,s,i,h,n,o,c,a){var u=t([o],{declaredClass:"esri.TouchEvents",tapRadius:8,doubleTapRadius:10,tapStartTolerance:50,doubleTapDuration:300,map:null,constructor:function(t,h){this.node=t,s.mixin(this,h),e.setSelectable(t,!1),this._touchStart=s.hitch(this,this._touchStart),this._touchMove=s.hitch(this,this._touchMove),this._touchEnd=s.hitch(this,this._touchEnd),this._touchCancel=s.hitch(this,this._touchCancel),this._fireClickEvent=s.hitch(this,this._fireClickEvent),t.addEventListener("touchstart",this._touchStart,!1),t.addEventListener("touchmove",this._touchMove,!1),t.addEventListener("touchend",this._touchEnd,!1),t.addEventListener("touchcancel",this._touchCancel,!1),this.map&&i("ios")&&(this._mouseOver=s.hitch(this,this._mouseOver),this._mouseOut=s.hitch(this,this._mouseOut),this._mouseDown=s.hitch(this,this._mouseDown),this._mouseUp=s.hitch(this,this._mouseUp),this._mouseClick=s.hitch(this,this._mouseClick),t.addEventListener("mouseover",this._mouseOver,!1),t.addEventListener("mouseout",this._mouseOut,!1),t.addEventListener("mousedown",this._mouseDown,!1),t.addEventListener("mouseup",this._mouseUp,!1),t.addEventListener("click",this._mouseClick,!1)),this._numTouches=0,this._nodeTouches=[],this._touches={},this._touchIds=[],this._taps=[],this._immediate=!1},_touchStart:function(t){var e,s,h,n,o,c=this._touches,a=t.changedTouches.length,u=(new Date).getTime();if(this._touchStartTS=u,!(i("android")&&i("safari")&&1===t.targetTouches.length&&t.touches.length===t.targetTouches.length&&t.targetTouches.length===t.changedTouches.length&&0===t.changedTouches[0].identifier&&c[t.changedTouches[0].identifier])){for(this._addTouch(t),e=0;e<a;e++)s=t.changedTouches[e],h=c[s.identifier]={},h.startX=s.pageX,h.startY=s.pageY,h.startTS=u,-1===this._touchIds.indexOf(s.identifier)&&this._touchIds.push(s.identifier);this._swipeActive&&(n=this._nodeTouches[0]),this._pinchActive&&(o=this._nodeTouches[1]),1===this._numTouches?this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(t,n))):this._pinchActive&&(this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(t,[n,o]))):2===this._numTouches?this._swipeActive&&(n&&(h=c[this._touchIds[0]],h.startX=n.pageX,h.startY=n.pageY,h.moved=!1),this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(t,n))):this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(t,n))):this._pinchActive&&(this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(t,[n,o])))}},_touchMove:function(t){t.preventDefault(),this._updateTouch(t);var e,s,h,n,o,c,a=this._touches,u=t.changedTouches.length;if(!(i("android")&&i("safari")&&1===t.targetTouches.length&&t.touches.length===t.targetTouches.length&&t.targetTouches.length===t.changedTouches.length&&0===t.changedTouches[0].identifier&&a[t.changedTouches[0].identifier]&&this._touchIds.length>1)){for(e=0;e<u;e++)s=t.changedTouches[e],(h=a[s.identifier])&&(n=Math.abs(s.pageX-h.startX),o=Math.abs(s.pageY-h.startY),!h.moved&&(n>=this.tapRadius||o>=this.tapRadius)&&(h.moved=h.absMoved=!0),c=c||h.moved);if(1===this._numTouches){var r=t.changedTouches[0];this._swipeActive?this._fire("onSwipeMove",this._processTouchEvent(t,r)):c&&(this._swipeActive=!0,this._fire("onSwipeStart",this._processTouchEvent(t,r)))}else if(2===this._numTouches){var _=this._nodeTouches[0],p=this._nodeTouches[1];if(this._pinchActive)this._fire("onPinchMove",this._processTouchEvent(t,[_,p]));else if(c){var d=a[_.identifier],v=a[p.identifier],T=Math.abs(d.startX-v.startX),f=Math.abs(d.startY-v.startY),l=Math.sqrt(T*T+f*f),m=Math.abs(_.pageX-p.pageX),g=Math.abs(_.pageY-p.pageY),E=Math.sqrt(m*m+g*g);Math.abs(E-l)>=2*this.tapRadius&&(this._pinchActive=!0,this._fire("onPinchStart",this._processTouchEvent(t,[_,p])))}}}},_touchEnd:function(t){this._removeTouch(t);var e,s,i,h=this._touches,n=t.changedTouches,o=n.length,c=(new Date).getTime(),a=this._touchIds;for(e=0;e<o;e++)(i=h[n[e].identifier])&&(i.absMoved&&(s=!0),i.pageX=n[e].pageX,i.pageY=n[e].pageY,i.endTS=c);if(0===this._numTouches){if(this._touches={},this._touchIds=[],this._swipeActive)this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(t,n[0]));else if(this._pinchActive)this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(t,n));else if(!s){var u=1/0,r=-1/0,_=1/0,p=-1/0,d=this.tapStartTolerance,v=[],T=!0;for(e=0;e<a.length;e++)i=h[a[e]],v.push(i),i.startTS<u&&(u=i.startTS),i.startTS>r&&(r=i.startTS),i.endTS<_&&(_=i.endTS),i.endTS>p&&(p=i.endTS),delete h[a[e]];if(1===v.length&&n[0]){var f=Math.abs(n[0].pageX-v[0].startX),l=Math.abs(n[0].pageY-v[0].startY);(f>=this.tapRadius||l>=this.tapRadius)&&(T=!1)}T&&Math.abs(r-u)<=d&&Math.abs(p-_)<=d&&this._basicTap(t,v)}}else if(1===this._numTouches&&this._pinchActive){var m=this._nodeTouches[0];i=h[m.identifier],i.startX=m.pageX,i.startY=m.pageY,i.moved=!1,this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(t,[n[0],m]))}},_touchCancel:function(t){this._numTouches&&this._touchEnd(t)},_basicTap:function(t,e){var s=(new Date).getTime(),i=this;if(t=this._processTouchEvent(t,e),this._taps.push({touchInfos:e,ts:s,event:t}),this._taps.length>2&&this._taps.shift(),this._fire("onBasicTap",t),clearTimeout(this._tapTimer),this._immediate)this._analyzeTap(!0);else{var h=2===this._taps.length?this.doubleTapDuration/2:this.doubleTapDuration;this._tapTimer=setTimeout(function(){var t=i;i=null,clearTimeout(t._tapTimer),t._analyzeTap()},h)}},_analyzeTap:function(t){var e=this._taps,s=e[0],i=e[1],h=s.touchInfos,n=i&&i.touchInfos;if(e.length)if(t||(this._taps=[]),s&&i)if(h.length===n.length)if(i.ts-s.ts<=this.doubleTapDuration){var o,c,a;1===h.length?(c=Math.abs(h[0].startX-n[0].startX),a=Math.abs(h[0].startY-n[0].startY),o=c<=this.doubleTapRadius&&a<=this.doubleTapRadius):o=!0,o?this._processedDoubleTap(e):this._processedTap(i)}else this._processedTap(i);else this._processedTap(i);else this._processedTap(s||i)},_processedTap:function(t){var e=t.event;this._fire("onProcessedTap",e),1===t.touchInfos.length?this._fire("onTap",this._fixEvent(e)):2===t.touchInfos.length&&this._fire("onTwoFingerTap",e)},_processedDoubleTap:function(t){var e,s,i=1===t[1].touchInfos.length;i&&(e=[this._fixEvent(t[0].event),this._fixEvent(t[1].event)],e[1].relatedEvents=e),s=[t[0].event,t[1].event],s[1].relatedEvents=s,this._fire("onProcessedDoubleTap",s[1]),i&&(this._fire("onDoubleTap",e[1]),this._fire("onDblClick",e[1]))},_addTouch:function(t){var e,s,i,n,o=t.changedTouches,c=this._nodeTouches;for(this._numTouches+=o.length,e=0;e<o.length;e++){for(i=c.length,n=!1,s=0;s<i&&!(n=c[s].identifier===o[e].identifier);s++);n?this._numTouches--:c.push(o[e])}for(e=c.length-1;e>=0;e--)h.isDescendant(c[e].target,document.body)||(c.splice(e,1),this._numTouches--);this._numTouches<0&&(this._numTouches=0)},_removeTouch:function(t){var e,s=[],i=[],h=t.changedTouches,n=this._nodeTouches;for(this._numTouches-=h.length,this._numTouches<0&&(this._numTouches=0),e=0;e<h.length;e++)s.push(h[e].identifier);for(e=n.length-1;e>=0;e--)-1!==s.indexOf(n[e].identifier)&&i.push(n.splice(e,1)[0]);return i},_updateTouch:function(t){var e,s,i=[],h=t.changedTouches,n=this._nodeTouches;for(e=0;e<h.length;e++)i.push(h[e].identifier);for(e=0;e<n.length;e++)-1!==(s=i.indexOf(n[e].identifier))&&n.splice(e,1,h[s])},_mouseOver:function(t){this._fire("onMouseOver",this._processMouseEvent(t))},_mouseOut:function(t){this._fire("onMouseOut",this._processMouseEvent(t))},_mouseDown:function(t){this._fire("onMouseDown",this._processMouseEvent(t))},_mouseUp:function(t){this._fire("onMouseUp",this._processMouseEvent(t))},_mouseClick:function(t){clearTimeout(this._clickTimer),(new Date).getTime()-this._touchStartTS>300?this._fire("onClick",this._processMouseEvent(t)):(this._clickEvent=t,this._clickTimer=setTimeout(this._fireClickEvent,this.doubleTapDuration))},_fireClickEvent:function(){clearTimeout(this._clickTimer),this._fire("onClick",this._processMouseEvent(this._clickEvent))},_fire:function(t,e){if("onDblClick"===t&&clearTimeout(this._clickTimer),"onDblClick"===t&&this.mouseEvents){this.mouseEvents.preventClickEvents(!0);var s=this;setTimeout(function(){s.mouseEvents.preventClickEvents(!1)},350)}this[t]&&this[t](e),this.map&&this.map[t]&&this.map[t](e)},_fixEvent:function(t){var e,s={};for(e in t)s[e]=t[e];return this.map&&(s.screenPoint=s.screenPoints[0],s.mapPoint=s.mapPoints[0]),s},_processTouchEvent:function(t,e){var i=this.map,h=i&&i.position,n=0;if(h&&e)if(s.isArray(e)){var o,u;for(t.screenPoints=[],t.mapPoints=[],o=0;o<e.length;o++)e[o]?(u=new a(e[o].pageX-h.x,e[o].pageY-h.y),t.screenPoints.push(u),t.mapPoints.push(i.extent?i.toMap(u):new c)):n++}else t.screenPoint=new a(e.pageX-h.x,e.pageY-h.y),t.mapPoint=i.extent?i.toMap(t.screenPoint):new c;return t.numPoints=e?s.isArray(e)?e.length-n:1:0,t},_processMouseEvent:function(t){var e=this.map,s=e&&e.position;return s&&(t.screenPoint=new a(t.pageX-s.x,t.pageY-s.y),t.mapPoint=e.extent?e.toMap(t.screenPoint):new c),t},setImmediateTap:function(t){this._immediate=t},destroy:function(){var t=this.node;t.removeEventListener("touchstart",this._touchStart,!1),t.removeEventListener("touchmove",this._touchMove,!1),t.removeEventListener("touchend",this._touchEnd,!1),t.removeEventListener("touchcancel",this._touchCancel,!1),this.map&&(t.removeEventListener("mouseover",this._mouseOver,!1),t.removeEventListener("mouseout",this._mouseOut,!1),t.removeEventListener("mousedown",this._mouseDown,!1),t.removeEventListener("mouseup",this._mouseUp,!1),t.removeEventListener("click",this._mouseClick,!1)),e.setSelectable(t,!0),clearTimeout(this._tapTimer),clearTimeout(this._clickTimer),this.node=this.map=this._numTouches=this._nodeTouches=this._touches=this._touchIds=this._taps=null}});return i("extend-esri")&&(n.TouchEvents=u),u});