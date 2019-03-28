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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/store/Memory","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","esri/domUtils","../../kernel","../../layers/ArcGISImageServiceLayer","../../layers/ImageServiceParameters","../../layers/MosaicRule","../../layers/RasterFunction","./utils","../analysis/utils","../analysis/mixins/browselayers/BrowseLayerMixin","../analysis/ItemTypes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxRasterInput.html"],function(t,e,a,i,s,r,o,l,n,h,u,m,c,d,_,b,f,x,v,y){var p=t([r,o,l,f],{templateString:y,declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterInput",allowScalar:!1,selectDefault:!0,showBrowseLayers:!0,useArcGISComponents:!0,constructor:function(t){e.mixin(this,t),this.inherited(arguments),this._i18n=v.widgets.rasterFunctionEditor},startup:function(){this._comboBox.set("validator",e.hitch(this,this.validator)),this._comboBox.set("placeHolder",this._i18n.rfxRasterInput.selectLayer),this.on("add-ready-to-use-layer",e.hitch(this,function(t){this.emit("add-layer",t)})),this.inherited(arguments),this.rfxVariable?this._setRfxVariableAttr(this.rfxVariable):this.value&&this._setValueAttr(this.value)},validator:function(t,e){if(""===t)return!1;var a=this._getStoreItems(t);return!!(a&&a.length>0)||(this._getFormattedValue(this.value)===t||(!(!this.rfxVariable||this._getFormattedValueFromVariable(this.rfxVariable)!==t)||(this.allowScalar&&""!==t?!isNaN(+t):void 0)))},_handleComboBoxChange:function(t){return"separator"===t||""===t?void(this.value?this._comboBox.set("displayedValue",this.value.name):this._comboBox.reset()):"browselayers"===t?(this.set("allowedItemTypes",[x.IS]),this.defaultItemTypes=[],this._createBrowseItems({},{layerTypes:[x.IS]},this._comboBox),void 0):void(this.value&&t===this.value.name||(this.value=this.get("value"),this.emit("change",e.clone(this.value))))},getSelectedLayer:function(t){if(null!==(t=t||this._comboBox&&this._comboBox.value)&&void 0!==t&&this._comboBox){var e;e="object"==typeof t?t:{name:t};var a=this._comboBox.store&&this._comboBox.store.query(e),i=a&&a[0];if(i)return this.inputLayers[i.id]}},_getFormattedValue:function(t){return null===t||void 0===t?"":t.type&&"scalar"===t.type.toLowerCase()?String(t.value):t.name?t.name:t.datasetName&&t.datasetName.name?t.datasetName.name:void 0},_getFormattedValueFromVariable:function(t){if(t){var e=_.getArgRFT(t);if(e){return"<"+(e.function&&e.function.name)+"."+this._i18n.rfxArgsEditor.outputRaster+">"}return"<"+this._i18n.rfxRasterInput.rfxVariable+": "+t.name+">"}},_setInputLayersAttr:function(t){this.inputLayers=t&&t.map(function(t){return t}),this._initStore()},_setAllowScalarAttr:function(t){this.allowScalar=!!t,this.allowScalar||(this._comboBox.textbox.readOnly=!0)},_setRfxVariableAttr:function(t){if(this._set("rfxVariable",t),t){if(t.value)return this._setValueAttr(t.value);this._comboBox.attr("value",this._getFormattedValueFromVariable(t),!1),_.getArgRFT(t)&&this._comboBox.set("disabled",!0)}},_setValueAttr:function(t){if(!t)return void this._comboBox.attr("value","",!1);var e=this._getFormattedValue(t);!this.getSelectedLayer(t.name)&&t.url&&this._addValueAsItem(t),this._comboBox.set("value",e),this.value=t},_addRFTLayerValue:function(t){this.inputLayers.push(t);var e=this._comboBox.get("store"),a=e&&e.data,i=a.splice(a.length-2,2),r={id:a.length,label:t.name,name:t.name,url:t.url};a.push(r),a=a.concat(i);var o=new s({data:a,idProperty:"id"});this._comboBox.set("store",o),this._comboBox.set("value",r.name)},_getValueAttr:function(){var t=this._comboBox.value;t=t.trim();var e=this.getSelectedLayer(t);if(e)return n.show(this._zoomToRaster),"browselayers"===e.id?e:_.getRasterJsonFromLayer(e);if(!this.rfxVariable||this._getFormattedValueFromVariable(this.rfxVariable)!==t)return this.allowScalar&&this._comboBox.isValid()?(n.hide(this._zoomToRaster),{type:"Scalar",value:+t}):this.value},_addValueAsItem:function(t){if(t){var a=e.clone(t);a.name||(a.name=_.getImageServiceTitle(a.url));var i=new m;a.mosaicRule&&(i.mosaicRule=new c(a.mosaicRule)),a.renderingRule&&(i.renderingRule=new d(a.renderingRule));var s=new u(a.url,{id:a.name+(new Date).toString(),imageServiceParameters:i});s.name=a.name,this.inputLayers.push(s),this._initStore()}},_getStoreItems:function(t){return this._comboBox.store&&this._comboBox.store.query({name:t})},_initStore:function(){var t=[];a.forEach(this.inputLayers,function(e,a){t.push({id:a,name:e.name,label:e.name,url:e.url})},this);var e=new s({data:t,idProperty:"id"});this._comboBox.set("labelAttr","label"),this._comboBox.set("labelType","html"),this._comboBox.set("store",e),this._comboBox.reset(),b.addReadyToUseLayerOption(this,[this._comboBox]),this.selectDefault&&t.length&&(void 0===this.value||null===this.value)&&this.set("value",t[0])},_handleBrowseItemsSelect:function(t){t&&t.selection&&b.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this._comboBox,posIncrement:1,browseDialog:t.dialog||this._browsedlg,widget:this})},_setBrowsePropertiesAttr:function(t){t&&(this.isSingleTenant=!0,this.map=t.map?t.map:this.map,this.portalUrl=t.portalUrl?t.portalUrl:this.portalUrl,this.portalSelf=t.portalSelf?t.portalSelf:this.portalSelf)},_onZoomToRasterClick:function(){var t=this._comboBox.value,e=this.getSelectedLayer(t);e&&e.initialExtent&&this.emit("zoom-to-extent",{layerExtent:e.initialExtent})}});return i("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxRasterInput",p,h),p});