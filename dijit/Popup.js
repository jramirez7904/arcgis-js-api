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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/kernel","dojo/has","dojo/window","dojo/Stateful","dojo/query","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","../kernel","../lang","../domUtils","../geometry/Polyline","../geometry/Polygon","../geometry/Multipoint","../geometry/normalizeUtils","../InfoWindowBase","../PopupBase","dojo/i18n!../nls/jsapi","dojo/NodeList-dom","dojo/has!extend-esri?./PopupTemplate","dojo/has!extend-esri?./PopupRenderer"],function(t,i,e,s,o,n,h,a,r,d,l,c,p,u,g,_,f,m,v,x,y,w,P,b,L,S){var z=t([b,L,a],{declaredClass:"esri.dijit.Popup",offsetX:3,offsetY:3,zoomFactor:4,marginLeft:25,marginTop:25,highlight:!0,pagingControls:!0,pagingInfo:!0,keepHighlightOnHide:!1,popupWindow:!0,titleInBody:!0,anchor:"auto",visibleWhenEmpty:!0,hideDelay:1e3,location:null,constructor:function(t,e){this.initialize(),i.mixin(this,t),this.domNode=d.byId(e);var h=this._nls=i.mixin({},S.widgets.popup),a=this.domNode;c.add(a,"esriPopup"),this._isRTL=!u.isBodyLtr(),this._isRTL&&g.set(a,"direction","rtl");var r="<div class='esriPopupWrapper' style='position: absolute;'><div class='sizer'><div class='titlePane'><div class='spinner hidden' title='"+h.NLS_searching+"...'></div><div class='title'></div><div class='titleButton prev hidden' title='"+h.NLS_prevFeature+"'></div><div class='titleButton next hidden' title='"+h.NLS_nextFeature+"'></div><div class='titleButton maximize' title='"+h.NLS_maximize+"'></div><div class='titleButton close' title='"+h.NLS_close+"'></div></div></div><div class='sizer content'><div class='contentPane'></div></div><div class='sizer'><div class='actionsPane'><div class='actionList hidden'><a title='"+h.NLS_zoomTo+"' class='action zoomTo' href='javascript:void(0);'><span>"+h.NLS_zoomTo+"</span></a></div></div></div><div class='pointer hidden'></div></div><div class='outerPointer hidden'></div>";l.set(a,"innerHTML",r),this._sizers=o.query(".sizer",a);var p=o.query(".titlePane",a)[0];if(this._title=o.query(".title",p)[0],this._prevFeatureButton=o.query(".prev",p)[0],this._nextFeatureButton=o.query(".next",p)[0],this._maxButton=o.query(".maximize",p)[0],this._spinner=o.query(".spinner",p)[0],this._contentPane=o.query(".contentPane",a)[0],this._positioner=o.query(".esriPopupWrapper",a)[0],this._pointer=o.query(".pointer",a)[0],this._outerPointer=o.query(".outerPointer",a)[0],this._actionList=o.query(".actionsPane .actionList",a)[0],this._contentUpdateHandles={},this._eventConnections=[s.connect(o.query(".close",p)[0],"onclick",this,this.hide),s.connect(this._prevFeatureButton,"onclick",this,this.selectPrevious),s.connect(this._nextFeatureButton,"onclick",this,this.selectNext),s.connect(this._maxButton,"onclick",this,this._toggleSize),s.connect(o.query(".zoomTo",this._actionList)[0],"onclick",this,this._zoomToFeature),s.connect(this,"onClearFeatures",this,this._featuresCleared),s.connect(this,"onSelectionChange",this,this._featureSelected),s.connect(this,"onDfdComplete",this,this._updateUI)],n("esri-touch")){var _=v.setScrollable(this._contentPane);this._eventConnections.push(_[0],_[1])}this._toggleVisibility(!1)},onMaximize:function(){},onRestore:function(){},setMap:function(t){this.inherited(arguments),p.place(this.domNode,t.root),this.highlight&&this.enableHighlight(t),this._maxHeight=g.get(this._contentPane,"maxHeight")},unsetMap:function(){this.disableHighlight(this.map),this.inherited(arguments)},setTitle:function(t){this.popupWindow&&(m.isDefined(t)&&""!==t||(t="&nbsp;"),this.destroyDijits(this._title),this.place(t,this._title),this.isShowing&&(this.startupDijits(this._title),this.reposition()))},setContent:function(t){this.popupWindow&&(m.isDefined(t)&&""!==t||(t="&nbsp;"),this._destroyContent(),this.place(t,this._contentPane),this.isShowing&&(this._startupContent(),this.reposition()))},show:function(t,i){if(this.popupWindow){if(this._delayHide=!1,!t)return void this._toggleVisibility(!0);var e,s=this.map;t.spatialReference?(this.location=t,e=s.toScreen(t)):(this.location=s.toMap(t),e=t);var o=s._getFrameWidth();if(-1!==o&&(e.x=e.x%o,e.x<0&&(e.x+=o),s.width>o))for(var n=(s.width-o)/2;e.x<n;)e.x+=o;this._maximized?this.restore():this._setPosition(e),i&&i.closestFirst&&this.showClosestFirst(this.location),this.isShowing||(this._toggleVisibility(!0),this._followMap(),this.startupDijits(this._title),this._startupContent(),this.reposition(),this.showHighlight(),this.onShow())}},hide:function(){this.isShowing&&(this._toggleVisibility(!1),this._unfollowMap(),this.keepHighlightOnHide||this.hideHighlight(),this.onHide())},resize:function(t,i){this.popupWindow&&(this._sizers.style({width:t+"px"}),g.set(this._contentPane,"maxHeight",i+"px"),this._maxHeight=i,this.isShowing&&this.reposition())},reposition:function(){this.popupWindow&&this.map&&this.location&&!this._maximized&&this.isShowing&&this._setPosition(this.map.toScreen(this.location))},addActions:function(t){return e.map(t,function(t){var i=p.create("a",{href:"javascript:void(0);",className:"action "+t.className,title:t.title,innerHTML:t.title},this._actionList);return s.connect(i,"onclick",t.callback),{action:t,node:i}},this)},removeActions:function(t){e.forEach(t,function(t){p.destroy(t.node)})},getCurrentAnchor:function(){return this._anchor},maximize:function(){var t=this.map;if(t&&!this._maximized&&this.popupWindow){this._maximized=!0;var i=this._maxButton;c.remove(i,"maximize"),c.add(i,"restore"),l.set(i,"title",this._nls.NLS_restore);var e=this.marginLeft,s=this.marginTop,o=t.width-2*e,n=t.height-2*s,h=this.domNode;g.set(h,{left:this._isRTL?null:e+"px",right:this._isRTL?e+"px":null,top:s+"px",bottom:null}),g.set(this._positioner,{left:null,right:null,top:null,bottom:null}),this._savedWidth=g.get(this._sizers[0],"width"),this._savedHeight=g.get(this._contentPane,"maxHeight"),this._sizers.style({width:o+"px"}),g.set(this._contentPane,{maxHeight:n-65+"px",height:n-65+"px"}),this._showPointer(""),this._unfollowMap(),c.add(this.domNode,"esriPopupMaximized"),this.onMaximize()}},restore:function(){if(this.map&&this._maximized&&this.popupWindow){this._maximized=!1;var t=this._maxButton;c.remove(t,"restore"),c.add(t,"maximize"),l.set(t,"title",this._nls.NLS_maximize),g.set(this._contentPane,"height",null),this.resize(this._savedWidth,this._savedHeight),this._savedWidth=this._savedHeight=null,this.show(this.location),this._followMap(),c.remove(this.domNode,"esriPopupMaximized"),this.onRestore()}},startup:function(){},destroy:function(){this.map&&this.unsetMap(),this.cleanup(),this.isShowing&&this.hide(),this.destroyDijits(this._title),this._destroyContent(),e.forEach(this._eventConnections,s.disconnect),p.destroy(this.domNode),this._sizers=this._contentPane=this._actionList=this._positioner=this._pointer=this._outerPointer=this._title=this._prevFeatureButton=this._nextFeatureButton=this._spinner=this._eventConnections=this._pagerScope=this._targetLocation=this._nls=this._maxButton=null},selectNext:function(){this.select(this.selectedIndex+1)},selectPrevious:function(){this.select(this.selectedIndex-1)},setFeatures:function(t,i){this._transientAnchor=i&&i.anchor,this.inherited(arguments),this._updateUI()},clearFeatures:function(t){t||(this._transientAnchor=null),this.inherited(arguments)},postscript:null,_highlightSetter:function(t){var i=this.highlight,e=this.map;if(this.highlight=t,e&&t!==i)if(t){this.enableHighlight(e);var s=this.features&&this.features[this.selectedIndex];s&&(this.updateHighlight(e,s),this.showHighlight())}else this.disableHighlight(e)},_pagingControlsSetter:function(t){var i=this.pagingControls,e=this.map;this.pagingControls=t,e&&t!==i&&this._updatePagingControls()},_pagingInfoSetter:function(t){var i=this.pagingInfo,e=this.map;this.pagingInfo=t,e&&t!==i&&this.features&&this.features.length&&this._updatePagingInfo()},_popupWindowSetter:function(t){var i=this.popupWindow,e=this.map;this.popupWindow=t,e&&t!==i&&(t?(this._updateUI(),this._updateWindow()):(this.hide(),this.showHighlight()))},_anchorSetter:function(t){var i=this.anchor;this.anchor=t,this.map&&t!==i&&this.reposition()},_startupContent:function(){var t=this._contentPane;this.startupDijits(t),e.forEach(this._getPopupRendererDijits(t),function(t){if(!this._contentUpdateHandles[t.id]){var e=t.on("content-update",i.hitch(this,function(){this.reposition()}));this._contentUpdateHandles[t.id]=e}},this)},_destroyContent:function(){var t=this._contentPane;e.forEach(this._getPopupRendererDijits(t),function(t){var i=this._contentUpdateHandles[t.id];i&&(i.remove(),delete this._contentUpdateHandles[t.id])},this),this.destroyDijits(t)},_getPopupRendererDijits:function(t){var i=this.getDijits(t);return i=e.filter(i,function(t){return t&&t.set&&/_PopupRenderer/.test(t.declaredClass)})},_featuresCleared:function(){this.setTitle("&nbsp;"),this.setContent("&nbsp;"),this._setPagerCallbacks(this),this._updateUI(),this.hideHighlight()},_featureSelected:function(){this._updateUI(),this._updateWindow()},_updateWindow:function(){var t=this.selectedIndex;if(t>=0){var e=this.features[t].getContent();if(!this.titleInBody&&e&&i.isString(e.id)){var s=_.byId(e.id);s&&s.set&&/_PopupRenderer/.test(s.declaredClass)&&s.set("showTitle",!1)}this.setContent(e),this.updateHighlight(this.map,this.features[t]),this.showHighlight()}},_toggleVisibility:function(t){this._setVisibility(t),this.isShowing=t},_setVisibility:function(t){c.toggle(this.domNode,"esriPopupVisible",t),c.toggle(this.domNode,"esriPopupHidden",!t)},_waitAndHide:function(t){var i=this;this._delayHide=!0,setTimeout(function(){i._delayHide&&(i._delayHide=!1,i.hide())},t)},_followMap:function(){this._unfollowMap();var t=this.map;this._handles=[s.connect(t,"onPanStart",this,this._onPanStart),s.connect(t,"onPan",this,this._onPan),s.connect(t,"onZoomStart",this,this._onZoomStart),s.connect(t,"onExtentChange",this,this._onExtentChange)]},_unfollowMap:function(){var t=this._handles;t&&(e.forEach(t,s.disconnect),this._handles=null)},_onPanStart:function(){var t=this.domNode.style;this._panOrigin={left:t.left,top:t.top,right:t.right,bottom:t.bottom}},_onPan:function(t,i){var e=this._panOrigin,s=i.x,o=i.y,n=e.left,h=e.top,a=e.right,r=e.bottom;n&&(n=parseFloat(n)+s+"px"),h&&(h=parseFloat(h)+o+"px"),a&&(a=parseFloat(a)-s+"px"),r&&(r=parseFloat(r)-o+"px"),g.set(this.domNode,{left:n,top:h,right:a,bottom:r})},_onZoomStart:function(){this._setVisibility(!1)},_onExtentChange:function(t,i,e){e&&(this._setVisibility(!0),this.show(this._targetLocation||this.location)),this._targetLocation=null},_toggleSize:function(){this._maximized?this.restore():this.maximize()},_getTargetAnchor:function(){return this._transientAnchor||this.anchor},_setPosition:function(t){var i=t.x,e=t.y,s=this.offsetX||0,o=this.offsetY||0,n=0,a=0,r=this.map,d={x:r.position.x,y:r.position.y,w:r.width,h:r.height},l=d.w,c=d.h,p="Left",_="bottom",f="right",m="top",v=u.getContentBox(this._positioner),x=v.w/2,y=v.h/2,w=g.get(this._sizers[0],"height")+this._maxHeight+g.get(this._sizers[2],"height"),P=w/2,b=0,L=0,S=l,z=c,C=i,H=e,j=this._getTargetAnchor().toLowerCase();if("auto"===j){var I=h.getBox;I&&(I=I(),b=Math.max(I.l,d.x),S=Math.min(I.l+I.w,d.x+d.w),L=Math.max(I.t,d.y),z=Math.min(I.t+I.h,d.y+d.h),C+=d.x,H+=d.y);var N=H-L>P,B=z-H>=P,F=S-C>=x,M=C-b>x,T=H-L>=w,R=z-H>=w,W=S-C>=v.w,k=C-b>=v.w;N&&B&&(W?(_="",p="Left",m="",f="right"):k&&(_="",p="Right",m="",f="left")),p&&_&&M&&F&&(T?(p="",_="bottom",f="",m="top"):R&&(p="",_="top",f="",m="bottom")),p&&_&&(W&&T?(p="Left",_="bottom",f="right",m="top"):W&&R?(p="Left",_="top",f="right",m="bottom"):k&&R?(p="Right",_="top",f="left",m="bottom"):k&&T&&(p="Right",_="bottom",f="left",m="top")),this._anchor=m&&f?m+"-"+f:m||f}else _=p="",-1!==j.indexOf("top")?_="bottom":-1!==j.indexOf("bottom")&&(_="top"),-1!==j.indexOf("left")?p="Right":-1!==j.indexOf("right")&&(p="Left"),this._anchor=this._getTargetAnchor();var D=_+p;switch(D){case"top":case"bottom":a=14;break;case"Left":case"Right":n=13;break;case"topLeft":case"topRight":case"bottomLeft":case"bottomRight":a=14,n=-16}g.set(this.domNode,{left:i+"px",top:e+"px",right:null,bottom:null});var q={left:null,right:null,top:null,bottom:null};p?q[p.toLowerCase()]=n+s+"px":q.left=-x+"px",_?q[_]=a+o+"px":q.top=-y+"px",g.set(this._positioner,q),this._showPointer(D)},_showPointer:function(t){c.remove(this._pointer,["top","bottom","right","left","topLeft","topRight","bottomRight","bottomLeft","hidden"]),c.remove(this._outerPointer,["right","left","hidden"]),"Right"===t||"Left"===t?(t=t.toLowerCase(),c.add(this._outerPointer,t)):c.add(this._pointer,t)},_setPagerCallbacks:function(t,i,e){if(this.pagingControls&&(t!==this||this._pagerScope&&this._pagerScope!==this)&&t!==this._pagerScope){this._pagerScope=t,t===this&&(i=this.selectPrevious,e=this.selectNext);var o=this._eventConnections;s.disconnect(o[1]),s.disconnect(o[2]),i&&(o[1]=s.connect(this._prevFeatureButton,"onclick",t,i)),e&&(o[2]=s.connect(this._nextFeatureButton,"onclick",t,e))}},_getLocation:function(t){var i,s,o=t&&t.geometry;if(o)switch(o.type){case"point":if(i=o,t.isAggregate()){var n=t.getChildGraphics(),h=n[0],a=h.geometry&&h.geometry.spatialReference,r=a&&new w({points:e.map(n,function(t){var i=t.geometry;return[i.x,i.y]}),spatialReference:a.toJson()});s=P.getDenormalizedExtent(r)}break;case"multipoint":i=o.getPoint(0),s=P.getDenormalizedExtent(o);break;case"polyline":case"polygon":i=o.getPoint(0,0),s=P.getDenormalizedExtent(o)}return[i,s]},_zoomToFeature:function(t){t.preventDefault();var i=this.features,e=this.selectedIndex,s=this.map;if(i){var o=this._getLocation(i[e]),n=o[0],h=o[1];if(n||(n=this.location),h&&h.intersects(this.location)||(this.location=n),h&&h.getWidth()&&h.getHeight())s.setExtent(h,!0);else{var a=s.getNumLevels(),r=s.getLevel(),d=s.getMaxZoom(),l=this.zoomFactor||1;if(a>0){if(r===d)return;var c=r+l;c>d&&(c=d),s.navigationManager._wheelZoom({value:c-r,mapPoint:n},!0)}else s.navigationManager._wheelZoom({value:1/Math.pow(2,l)*2,mapPoint:n},!0)}}},_updatePagingControls:function(){var t=this._prevFeatureButton,i=this._nextFeatureButton,e=this.selectedIndex,s=this.features?this.features.length:0;this.pagingControls&&s>1?(0===e?c.add(t,"hidden"):c.remove(t,"hidden"),e===s-1?c.add(i,"hidden"):c.remove(i,"hidden")):(c.add(t,"hidden"),c.add(i,"hidden"))},_updatePagingInfo:function(){var t,i,e,s=this.features?this.features.length:0,o=this._nls,n="&nbsp;";this.pagingInfo&&s>1&&o.NLS_pagingInfo&&(n=m.substitute({index:this.selectedIndex+1,total:s},o.NLS_pagingInfo)),s&&(t=this.getSelectedFeature(),i=t.getInfoTemplate(),e=t.getTitle(),i&&!/esri\.InfoTemplate/.test(i.declaredClass)&&this.titleInBody||!e||(n=e+("&nbsp;"===n?"":" "+n))),this.setTitle(n)},_updateUI:function(){if(this.popupWindow){var t=this.features,i=this.deferreds,e=t?t.length:0,s=this._spinner,o=this._actionList,n=this._nls;this._updatePagingControls(),this._updatePagingInfo(),e?c.remove(o,"hidden"):c.add(o,"hidden"),i&&i.length?t?c.remove(s,"hidden"):this.setContent("<div style='text-align: center;'>"+n.NLS_searching+"...</div>"):c.add(s,"hidden"),e||i&&i.length?this._delayHide=!1:(this.setContent("<div style='text-align: center;'>"+n.NLS_noInfo+".</div>"),this.visibleWhenEmpty||this._waitAndHide(this.hideDelay))}}});return n("extend-esri")&&i.setObject("dijit.Popup",z,f),z});