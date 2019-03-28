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

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","dojo/dom-construct","dojo/query","../../supportClasses/map/legend/LegendController","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/utils/WaitingUtil"],function(e,t,n,o,i,a,r,l){return e(null,{_isPlacingMapFlag:!1,_placeMapPromise:null,_currentMap:null,_locatorPointsControllers:null,_stdPolygonsControllers:null,getCurrentMap:function(){return this._currentMap},_placeMap:function(){return this._placeMapPromise=r.invoke(this,"_doPlaceMap")},_doPlaceMap:function(){function e(){r._currentMap&&r._currentMap.destroy(),r._currentMap=null}function o(){l.removeProgress(r.content),r._finalizePlaceMap()}function a(){o(),r._showErrorMessage(!0),r.onMapLoadError()}var r=this;return this._showErrorMessage(!1),this._isPlacingMapFlag&&this._finalizePlaceMap(),n.empty(this.content),e(),l.showProgress(this.content),this.onContentLoadingStart(),this._isPlacingMapFlag=!0,this._legendController=new i,this._additionalLayerInfos&&this.viewModel.dynamicReportInfo&&!this._locatorPointsControllers&&(this._locatorPointsControllers=[],this._additionalLayerInfos.forEach(function(e,t){if(e.index=t,e.isLocatorLayer){var n=this.viewModel.getLocatorPointsController(e.calculatorInfo,this.currentFeatureIndex);e.layerName&&n.setLayerName(this._calculatorFieldName,e.layerName),n.setRendererJson(this._calculatorFieldName,e.rendererJson),n.setLayerIndex(this._calculatorFieldName,t),this.own(n),this._locatorPointsControllers.push(n)}},this),this._stdPolygonsControllers=[],this._additionalLayerInfos.forEach(function(e,t){function n(n){var o=r.viewModel.getStdPolygonsController(e.calculatorName,n);o.setRendererJson(r._calculatorFieldName,e.rendererJson),e.labelRendererJson&&o.setLabelRendererJson(r._calculatorFieldName,e.labelRendererJson),o.setLayerIndex(r._calculatorFieldName,t),r.own(o),r._stdPolygonsControllers.push(o)}e.index=t,e.isComparisonLayer&&(this.viewModel.dynamicReportInfo.isMultiFeature?this.viewModel.dynamicReportInfo.analysisAreas.forEach(function(e,t){n(t)}):n(this.currentFeatureIndex))},this)),t(this._createMapFunc(this.content,{defaultBasemapId:this._defaultBasemapId,webMapId:this._webMapId,additionalLayerInfos:this._additionalLayerInfos&&this._additionalLayerInfos.filter(function(e){return!!e.url}),locatorPointsControllers:this._locatorPointsControllers,stdPolygonsControllers:this._stdPolygonsControllers,thisAreasHighlightController:this.viewModel.getThisAreasHighlightController(),legendController:this._legendController,waitForLoad:!0,extent:this._mapExtentPending,calculatorFieldName:this._calculatorFieldName}),function(t){r.showMapLegend&&r._legendController.setLegendVisible(!0),r._locatorPointsControllers&&r._locatorPointsControllers.forEach(function(e){e.setMapInfo(r._calculatorFieldName,t)}),r._stdPolygonsControllers&&r._stdPolygonsControllers.forEach(function(e){e.setMapInfo(r._calculatorFieldName,t)});var n=t&&t.map;return e(),!r.domNode&&n?void n.destroy():(r._currentMap=n,r._syncWithPanelScale(),n?(r.own(n),void o()):void a())},a)},_finalizePlaceMap:function(){this._isPlacingMapFlag&&(this._isPlacingMapFlag=!1,this.onContentLoadingEnd())},getLoadMapPromise:function(){return this._placeMapPromise},isLegendVisible:function(){return this.showMapLegend},setLegendVisible:function(e){this.showMapLegend=e,this._legendController.setLegendVisible(e)},_mapExtentPending:null,getVisualState:function(){return{mapExtent:this._currentMap&&this._currentMap.extent,showLegend:this.isLegendVisible()}},setVisualState:function(e){this._mapExtentPending=null,e&&(e.mapExtent&&(this._currentMap&&this._currentMap.setExtent?this._currentMap.setExtent(e.mapExtent):this._mapExtentPending=e.mapExtent),void 0!==e.showLegend&&this.setLegendVisible(e.showLegend))},_panelScale:null,notifyPanelScaleChanged:function(e){this._panelScale=e,this._syncWithPanelScale()},_syncWithPanelScale:function(){if(this._panelScale&&this._currentMap){var e=1/this._panelScale,t=32*e+8,i=t;[".esriSimpleSliderTR",".HomeButton",".mapNavigationLockButton"].forEach(function(t){var r=o(t,this.domNode)[0];if(r){a.device.ios&&r.parentNode!==this.domNode&&n.place(r,this.domNode),".mapNavigationLockButton"===t&&this._currentMap.root.clientHeight-(i+r.clientHeight*e)>50&&(i+=20);var l=".esriSimpleSliderTR"===t?2:0;r.style.top=i+"px",r.style.transformOrigin="100% 0%",r.style.transform="scale("+e+")",r.style["webkit-transform"]="scale("+e+")",i+=(r.clientHeight+l)*e+5}},this)}},destroy:function(){this._finalizePlaceMap(),this.inherited(arguments)}})});