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

var __extends=this&&this.__extends||function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();define(["require","exports","../sources/Empty","../support/FeatureSet","../support/IdSet","../support/shared","../../polyfill/promiseUtils","../../../geometry/geometryEngineAsync"],function(e,t,r,n,i,a,s,o){"use strict";var l=function(e){function t(t){var r=e.call(this,t)||this;return r._relation="",r._relationGeom=null,r._relationString="",r.declaredClass="esri.arcade.featureset.actions.SpatialFilter",r._relationString=t.relationString,r._parent=t.parentfeatureset,r._maxProcessing=40,r._relation=t.relation,r._relationGeom=t.relationGeom,r}return __extends(t,e),t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then(function(){return t._parent._getFilteredSet("esriSpatialRelRelation"!==t._relation?t._relation:t._relation+":"+t._relationString,t._relationGeom,null,null,e)}).then(function(r){return t._checkCancelled(e),t._wset=new i(r._candidates.slice(0),r._known.slice(0),r._ordered,t._clonePageDefinition(r.pagesDefinition)),t._wset}):s.resolve(this._wset)},t.prototype._isInFeatureSet=function(e){var t=this._parent._isInFeatureSet(e);return t===a.IdState.NotInFeatureSet?t:(t=this._idstates[e],void 0===t?a.IdState.Unknown:t)},t.prototype._getFeature=function(e,t,r){return this._parent._getFeature(e,t,r)},t.prototype._getFeatures=function(e,t,r,n){return this._parent._getFeatures(e,t,r,n)},t.prototype._featureFromCache=function(e){return this._parent._featureFromCache(e)},t.prototype.executeSpatialRelationTest=function(e){if(null===e.geometry)return s.resolve(!1);switch(this._relation){case"esriSpatialRelEnvelopeIntersects":var t=a.shapeExtent(this._relationGeom),r=a.shapeExtent(e.geometry);return o.intersects(t,r);case"esriSpatialRelIntersects":return o.intersects(this._relationGeom,e.geometry);case"esriSpatialRelContains":return o.contains(this._relationGeom,e.geometry);case"esriSpatialRelOverlaps":return o.overlaps(this._relationGeom,e.geometry);case"esriSpatialRelWithin":return o.within(this._relationGeom,e.geometry);case"esriSpatialRelTouches":return o.touches(this._relationGeom,e.geometry);case"esriSpatialRelCrosses":return o.crosses(this._relationGeom,e.geometry);case"esriSpatialRelRelation":return o.relate(this._relationGeom,e.geometry,this._relationString)}},t.prototype._fetchAndRefineFeatures=function(e,t,r){var n=this,o=new i([],e,!1,null),l=Math.min(t,e.length);return this._parent._getFeatures(o,-1,l,r).then(function(){n._checkCancelled(r);for(var t=[],i=0;i<l;i++){var a=n._parent._featureFromCache(e[i]);t.push(n.executeSpatialRelationTest(a))}return s.all(t)}).then(function(r){for(var i=0;i<t;i++)!0===r[i]?n._idstates[e[i]]=a.IdState.InFeatureSet:n._idstates[e[i]]=a.IdState.NotInFeatureSet;return"success"})},t.prototype._getFilteredSet=function(e,t,r,n,a){var s=this;return this._ensureLoaded().then(function(){return s._parent._getFilteredSet("esriSpatialRelRelation"!==s._relation?s._relation:s._relation+":"+s._relationString,s._relationGeom,r,n,a)}).then(function(e){s._checkCancelled(a);return null!==t?new i(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,s._clonePageDefinition(e.pagesDefinition)):new i(e._candidates.slice(0),e._known.slice(0),e._ordered,s._clonePageDefinition(e.pagesDefinition))})},t.prototype._stat=function(e,t,r,n,i,a,o){var l=this;return""!==r?s.resolve({calculated:!1}):this._parent._stat(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i,a,o).then(function(s){return!1===s.calculated?null===i&&""===r&&null===n?l._manualStat(e,t,a,o):{calculated:!1}:s})},t.prototype._canDoAggregates=function(e,t,r,n,i){return""!==r||null!==n?s.resolve(!1):null===this._parent?s.resolve(!1):this._parent._canDoAggregates(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i)},t.prototype._getAggregatePagesDataSourceDefinition=function(e,t,r,n,i,a,o){return null===this._parent?s.reject(new Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(e,t,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,i,a,o)},t.prototype.arcadeScriptStep=function(e,t,r){var n=this.arcadeAssignNextScriptStepIdentifiers(r);switch(this._relation){case"esriSpatialRelEnvelopeIntersects":var i=null===this._relationGeom?null:this._relationGeom.extent;return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("envelopeIntersects( "+n.currentFeatureSet+","+this.constructArcadeGeom(i,t,r)+")")+"; ";case"esriSpatialRelIntersects":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("intersects( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+")")+"; ";case"esriSpatialRelContains":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("contains( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+")")+"; ";case"esriSpatialRelOverlaps":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("overlaps( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+")")+"; ";case"esriSpatialRelWithin":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("within( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+")")+"; ";case"esriSpatialRelTouches":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("touches( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+")")+"; ";case"esriSpatialRelCrosses":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("crosses( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+")")+"; ";case"esriSpatialRelRelation":return"var "+n.newFeatureSet+" = "+this.bigDataCachePipeline("relate( "+n.currentFeatureSet+","+this.constructArcadeGeom(this._relationGeom,t,r)+', "'+this._relationString+'")')+";"}return"var "+n.newFeatureSet+" = null; "},t}(n);return n._featuresetFunctions.intersects=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelIntersects",relationGeom:e})},n._featuresetFunctions.envelopeIntersects=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelEnvelopeIntersects",relationGeom:e})},n._featuresetFunctions.contains=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelContains",relationGeom:e})},n._featuresetFunctions.overlaps=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelOverlaps",relationGeom:e})},n._featuresetFunctions.within=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelWithin",relationGeom:e})},n._featuresetFunctions.touches=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelTouches",relationGeom:e})},n._featuresetFunctions.crosses=function(e){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelCrosses",relationGeom:e})},n._featuresetFunctions.relate=function(e,t){return null===e||void 0===e?new r({parentfeatureset:this}):new l({parentfeatureset:this,relation:"esriSpatialRelRelation",relationGeom:e,relationString:t})},l});