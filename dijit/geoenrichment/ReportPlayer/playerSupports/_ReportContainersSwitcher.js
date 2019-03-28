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

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","../PlayerResizeModes","../PlayerViewModes","esri/dijit/geoenrichment/utils/DomUtil"],function(e,n,t,i,r,o,a,s){var l="classic",d="row",u={createContainer:function(e,n){function t(t){var a;return a=n.resizeMode!==o.AUTO?{center:!0,minLeft:i===d?10:0}:{center:!0,minRight:10,minBottom:10,minLeft:10},a.minTop=n.showToolbarInPopup?i===d?50:43:10,r.layoutBuilder.createElement("reportContainerStack",{viewModel:r,parentWidget:n,currentFeatureIndex:e,isVertical:t,renderOptions:a,onPendingDataApplied:function(){n._emitResizedEvent()}},n.reportContainerDiv)}var i,r=n._viewModel;switch(n.viewMode){case a.PANELS_IN_SLIDES:i="pagination";break;case a.PANELS_IN_STACK:i="stack";break;case a.PANELS_IN_ROW:i=d;break;default:i=n._reportData.isClassic?l:"graphic"}var s=n._containerDict.getContainer(e);if(!s){switch(i){case"pagination":s=function(){return r.layoutBuilder.createElement("reportContainerPagination",{viewModel:r,parentWidget:n,currentFeatureIndex:e,scaleSectionsToFit:n.scaleSlidesToFitWindow,onResized:function(e){n.playerToolbar.update(),n._emitResizedEvent(e)},onPendingDataApplied:function(){n._emitResizedEvent()}},n.reportContainerDiv)}();break;case"stack":s=t(!0);break;case d:s=t(!1);break;default:s=function(){var t={viewModel:r,parentWidget:n,currentFeatureIndex:e,isSourceContainer:!0,onPendingDataApplied:function(){n._emitResizedEvent()}};return n.resizeMode!==o.AUTO?t.renderOptions={center:!0,minTop:10}:t.renderOptions={center:!0,minTop:10,minRight:10,minBottom:10,minLeft:10},r.layoutBuilder.createElement(i===l?"reportContainer":"reportContainerGrid",t,n.reportContainerDiv)}()}s.isCurrentContainer=function(){return n.getCurrentReportContainer()===s},n.own(s)}return n._containerDict.setContainer(s,e),s}},c=e(null,{_containerInfos:null,constructor:function(){this._containerInfos=[]},getContainer:function(e){return this._getInfo(e,"container")},getContainers:function(){return this._containerInfos.map(function(e){return e.container})},getContainerIndex:function(e){return this.getContainers().indexOf(e)},setContainer:function(e,n){t.set(e.domNode,"area-index",n),this._getInfo(n,null,e)},isLoaded:function(e){return this._getInfo(e,"loaded")},setLoaded:function(e){var n=this._getInfo(e);n&&(n.loaded=!0)},resetAllLoaded:function(){this._containerInfos.forEach(function(e){e.loaded=!1})},destroyAllContainers:function(){this._containerInfos.forEach(function(e){e.container.destroy()}),this._containerInfos.length=0},_getInfo:function(e,n,t){var i=this._containerInfos[e];return!i&&t&&(i=this._containerInfos[e]={container:t,loaded:!1}),n?i&&i[n]:i}}),_=e(null,{_lastVisuals:null,reset:function(){this._lastVisuals=null},rememberCurrentContainerVisuals:function(e){if(!e)return void(this._lastVisuals=null);var n=e;this._lastVisuals={scrollTop:n.getScrollableContainer&&n.getScrollableContainer().scrollTop||0,pageIndex:n.getCurrentPageIndex&&n.getCurrentPageIndex()||0,slideIndex:n.getCurrentSlideIndex&&n.getCurrentSlideIndex()||0,zoomInfo:n.getZoomInfo&&n.getZoomInfo()}},applyCurrentContainerVisuals:function(e){if(this._lastVisuals){var n=e;n.getScrollableContainer&&(n.getScrollableContainer().scrollTop=this._lastVisuals.scrollTop||0),n.showSlideAt&&n.showSlideAt(this._lastVisuals.slideIndex||0),n.showPageAt&&n.showPageAt(this._lastVisuals.pageIndex||0),n.setZoomInfo&&n.setZoomInfo(this._lastVisuals.zoomInfo)}}});return e(null,{_containerDict:null,_visualsHelper:null,_initContainerSwither:function(){this._containerDict=new c,this._visualsHelper=new _},getCurrentReportContainer:function(){return this._currentReportContainer},getAllReportContainers:function(){return this._containerDict.getContainers()},_destroyAllContainers:function(){this._containerDict.destroyAllContainers(),this._currentReportContainer=null},_setReportContainer:function(e){var t=this;return e?this._resetLoadedFlags():this._visualsHelper.rememberCurrentContainerVisuals(this._currentReportContainer),this._switchToCurrentReportContainer(),!(!e&&this._containerDict.isLoaded(this.getCurrentAnalysisAreaIndex()))||n(this._resize({isPaginating:!0}),function(){return t._visualsHelper.applyCurrentContainerVisuals(t._currentReportContainer),!1})},_switchToCurrentReportContainer:function(){switch(this._currentReportContainer&&this._hideContainer(this._currentReportContainer),this._currentReportContainer=u.createContainer(this.getCurrentAnalysisAreaIndex(),this),i.remove(this.domNode,"esriGEReportPlayerFullView esriGEReportPlayerPaginationView esriGEReportPlayerStackView esriGEReportPlayerRowView"),this.viewMode){case a.PANELS_IN_SLIDES:i.add(this.domNode,"esriGEReportPlayerPaginationView");break;case a.PANELS_IN_STACK:i.add(this.domNode,"esriGEReportPlayerStackView");break;case a.PANELS_IN_ROW:i.add(this.domNode,"esriGEReportPlayerRowView");break;default:i.add(this.domNode,"esriGEReportPlayerFullView")}this._showContainer(this._currentReportContainer),this._connectZoomToCurrentContainer(),this.notifyShown()},_hideContainer:function(e){e.__undoHideContainerHandle=s.hideNodeInBackground(e.domNode,"reportContainer_"+this._containerDict.getContainerIndex(e)),e.own(e.__undoHideContainerHandle)},_showContainer:function(e){e.__undoHideContainerHandle&&(e.__undoHideContainerHandle.undo(),delete e.__undoHideContainerHandle)},_showAllContainers:function(){var e=this;return this.getAllReportContainers().forEach(function(n){e._showContainer(n),e.reportContainerDiv.removeChild(n.domNode),r.place(n.domNode,e.reportContainerDiv)}),{undo:function(){e.getAllReportContainers().forEach(function(n){e._hideContainer(n)}),e._switchToCurrentReportContainer()}}},_resetLoadedFlags:function(){this._visualsHelper.reset(),this._containerDict.resetAllLoaded()},_setCurrentContainerLoaded:function(){this._visualsHelper.applyCurrentContainerVisuals(this._currentReportContainer),this._containerDict.setLoaded(this.getCurrentAnalysisAreaIndex())}})});