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

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","dojo/on","esri/dijit/geoenrichment/promise/all","dijit/Destroyable","../../MapEventUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(e,t,r,i,n,s,a){return e(n,{_calculatorName:null,_hasRegisteredLayers:!1,_hasRegisteredInfographics:!1,constructor:function(e){this._calculatorName=e,this._layerIndexes={},this._rendererJsons={},this._labelRendererJsons={},this._mapInfos={},this._graphicLayerInfos={},this._pendingLayerInfos={}},getCalculatorName:function(){return this._calculatorName},_rendererJsons:null,_labelRendererJsons:null,getRendererJson:function(e){return this._rendererJsons[e]},getLabelRendererJson:function(e){return this._labelRendererJsons[e]},setRendererJson:function(e,t){this._rendererJsons[e]=t},setLabelRendererJson:function(e,t){this._labelRendererJsons[e]=t},_layerIndexes:null,getLayerIndex:function(e,t){var r=a.getGeographiesModel().getLevels(),i=-1;return r.some(function(e,r){if(e.id===t)return i=r,!0}),this._layerIndexes[e]+i/r.length},setLayerIndex:function(e,t){this._layerIndexes[e]=t},_mapInfos:null,getMapInfo:function(e){return this._mapInfos[e]},getMapInfos:function(){var e=[];for(var t in this._mapInfos)e.push(this._mapInfos[t]);return e},setMapInfo:function(e,t){this._mapInfos[e]=t},_attributeFields:null,getAttributeFields:function(){return this._attributeFields},setAttributeFields:function(e){this._attributeFields=e},_shownFeatureAttributes:null,_featuresChangedHandlers:null,getShownFeatureAttributes:function(){return this._shownFeatureAttributes},setShownFeaturesChangedListener:function(e){this._featuresChangedHandlers=this._featuresChangedHandlers||[],this._featuresChangedHandlers.push(e)},setShownFeatureAttributes:function(e){this._shownFeatureAttributes=e,this._featuresChangedHandlers&&this._featuresChangedHandlers.forEach(function(e){e()})},_allFeatureAttributes:null,_loadAllFeaturesHandlers:null,getAllFeatureAttributes:function(){return this._allFeatureAttributes},setAllFeatureAttributes:function(e){this._allFeatureAttributes=e},setLoadAllFeaturesListener:function(e){this._loadAllFeaturesHandlers=this._loadAllFeaturesHandlers||[],this._loadAllFeaturesHandlers.push(e)},loadAllFeatures:function(){return this._loadAllFeaturesHandlers&&i(this._loadAllFeaturesHandlers.map(function(e){return e()}))},_highlightInfographicForAttributesFunc:null,_registerInfographicDfd:null,registerInfographic:function(e){return this._highlightInfographicForAttributesFunc=e.highlightInfographicForAttributes,this._registerInfographicDfd=new t,this._hasRegisteredLayers&&this._registerInfographicDfd.resolve(),this._hasRegisteredInfographics||(this._hasRegisteredInfographics=!0,this._doRegisterLayers()),this._registerInfographicDfd.promise},_graphicLayerInfos:null,_pendingLayerInfos:null,setStdPolygonsLayer:function(e,t,r,i){this._unSetInfo(e);var n={map:r,graphicsLayer:t,getGraphicForAttributesFunc:i.getGraphicForAttributesFunc,setGraphicHighlightedFunc:i.setGraphicHighlightedFunc,layerMouseOverHandle:null,layerMouseOutHandle:null,highlightedGraphic:null};this._pendingLayerInfos[e]=n,this._hasRegisteredInfographics&&this._doRegisterLayers(),this._hasRegisteredLayers||(this._hasRegisteredLayers=!0,this._registerInfographicDfd&&this._registerInfographicDfd.resolve())},_doRegisterLayers:function(){for(var e in this._pendingLayerInfos){var t=this._pendingLayerInfos[e];this._graphicLayerInfos[e]=t,this._addLayerListeners(t)}this._pendingLayerInfos={}},_addLayerListeners:function(e){var t,i=this,n=e.graphicsLayer;e.layerMouseOverHandle=s.onLayerMouseOver(n,e.map,function(s){s.graphic&&s.graphic._graphicsLayer===n&&t!==s.graphic&&(e.layerMouseOutHandle&&e.layerMouseOutHandle.remove(),e.layerMouseOutHandle=null,t&&e.setGraphicHighlightedFunc(t,!1),t=s.graphic,i._highlightInfographicForAttributesFunc(t.attributes),e.setGraphicHighlightedFunc(t,!0),e.layerMouseOutHandle=r.once(n,"mouse-out",function(r){i._highlightInfographicForAttributesFunc(null),t&&e.setGraphicHighlightedFunc(t,!1),t=null}))})},highlightGraphicForAttributes:function(e){for(var t in this._graphicLayerInfos){var r=this._graphicLayerInfos[t];if(r.highlightedGraphic&&(r.setGraphicHighlightedFunc(r.highlightedGraphic,!1),r.highlightedGraphic=null),e){var i=r.getGraphicForAttributesFunc(e);i&&(r.setGraphicHighlightedFunc(i,!0),r.highlightedGraphic=i)}}},_unSetInfo:function(e){var t=this._graphicLayerInfos[e];delete this._graphicLayerInfos[e],t&&(t.layerMouseOverHandle&&t.layerMouseOverHandle.remove(),t.layerMouseOutHandle&&t.layerMouseOutHandle.remove())},_unSetLayers:function(){Object.keys(this._graphicLayerInfos).forEach(this._unSetInfo.bind(this)),this._graphicLayerInfos={}},destroy:function(){this._unSetLayers()}})});