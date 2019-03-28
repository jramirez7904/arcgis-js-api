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

define(["dojo/_base/declare","dojo/has","dojo/text!./templates/RFxKernelSelector.html","dojo/text!../../layers/support/rasterFunctionResources.json","../../kernel","dojo/_base/lang","dojo/Evented","dojo/store/Memory","dojo/data/ObjectStore","dojo/query","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./EditableGridMixin","./RFxGridBase","./utils"],function(e,i,t,s,n,o,r,l,a,h,u,d,c,_,p,f,m){var g=e("RFxKernelSelector",[d,c,_,r,p],{templateString:t,declaredClass:"esri.dijit.RasterFunctionEditor.RFxKernelSelector",dataType:f.DATA_TYPES.double,KERNEL_TYPE_INFO:u.parse(s).kernelTypesInfo,isExtensible:!1,isEditable:!1,_store:null,_grid:null,postCreate:function(){this.inherited(arguments),this._setLabels(),this._setupTypeSelect(),this._info&&this._initializeGrid()},_setLabels:function(){this.inputArgs&&(this.typeLabel.innerHTML=this.inputArgs.ConvolutionType.displayName||this.inputArgs.ConvolutionType.name,this.rowsLabel.innerHTML=this.inputArgs.Rows.displayName||this.inputArgs.Rows.name,this.columnsLabel.innerHTML=this.inputArgs.Columns.displayName||this.inputArgs.Columns.name,this.kernelLabel.innerHTML=this.inputArgs.Kernel.displayName||this.inputArgs.Kernel.name)},_setupTypeSelect:function(){if(this.rasterFunctionEnums&&this.rasterFunctionEnums.esriRasterFilterTypes){var e=m.getEnumData(this.rasterFunctionEnums.esriRasterFilterTypes);if(this.typeSelect.set("store",new a(new l({data:e,idProperty:"key"}))),this.type=this.inputArgs.ConvolutionType&&this.inputArgs.ConvolutionType.value,-1===this.type){var i={};i.rows=this.inputArgs.Rows&&this.inputArgs.Rows.value,i.columns=this.inputArgs.Columns&&this.inputArgs.Columns.value,i.value=this.inputArgs.Kernel&&this.inputArgs.Kernel.value,this._info=i,this._setRowColumnControl()}this.typeSelect.set("value",this.type)}},_initializeGrid:function(){var e=this._getGridSchema(),i=this._createDataObject();this._grid&&this._grid.destroy(),this.kernelSelector=document.createElement("div"),this.kernelSelectDiv.appendChild(this.kernelSelector),this._grid=new f({schema:e,data:i,isExtensible:this.isExtensible},this.kernelSelector),this._grid.startup(),this._grid.on("grid-data-change",function(e){this._updateValue(e)}.bind(this))},_getGridSchema:function(){for(var e=[],i=this._info.columns,t=1;t<=i;t++)e.push({label:t,name:t,dataType:this.dataType,isEditable:this.isEditable});return e},_createDataObject:function(){for(var e=[],i=o.clone(this._info.value);i.length;){var t=i.splice(0,this._info.columns),s={};t.forEach(function(e,i){s[i+1]=e}),e.push(s)}return e},_updateValue:function(e){var i=[];e.forEach(function(e){Object.keys(e).forEach(function(t){t&&!isNaN(e[t])&&"id"!==t&&"idNum"!==t&&i.push(e[t])})}),this._info.value=i,this.inputArgs.Kernel.value=i},_onTypeChange:function(e){e=parseInt(e,10),-1===e?(this.isEditable=!0,255===this.type&&(this._info=o.clone(this.KERNEL_TYPE_INFO[19])),this._hideRowsAndColumns(!1),this._hideKernelSelector(!1),this._initializeGrid(),this._updateValue(this._grid.getStoreValue())):255===e?(this._info=o.clone(this.KERNEL_TYPE_INFO[e]),this._info.value=[],this._hideRowsAndColumns(!0),this._hideKernelSelector(!0),this._resetKernelValue()):(this._info=o.clone(this.KERNEL_TYPE_INFO[e]),this.isEditable=!1,this._hideRowsAndColumns(!0),this._hideKernelSelector(!1),this._initializeGrid(),this._resetKernelValue()),this.type=e,this._setRowColumnControl(),this.inputArgs.ConvolutionType.value=e},_hideRowsAndColumns:function(e){h(".esri-kernel-selector-user-defined").forEach(function(i){e?i.classList.add("hide"):i.classList.remove("hide")})},_hideKernelSelector:function(e){h(".esri-kernel-selector-none").forEach(function(i){e?i.classList.add("hide"):i.classList.remove("hide")})},_resetKernelValue:function(){this.inputArgs.Kernel.value=void 0},_setRowColumnControl:function(){this.rowsSelect.set("value",this._info.rows),this.columnsSelect.set("value",this._info.columns)},_onRowColumnChange:function(e,i,t){var s=Math.abs(i-e);if(e>i){var n=Array.apply(null,{length:s*t}).map(function(){return 0});this._info.value=this._info.value.concat(n)}else if(e<i){var o=this._info.value.length-s*t;this._info.value=this._info.value.slice(0,o)}this.inputArgs.Kernel.value=this._info.value,this._initializeGrid()},_onRowChange:function(e){if(this.type&&-1===this.type){var i=this._info.rows;this._info.rows=e,this._onRowColumnChange(e,i,this._info.columns),this.inputArgs.Rows.value=e}},_onColumnChange:function(e){if(this.type&&-1===this.type){var i=this._info.columns;this._info.columns=e,this._onRowColumnChange(e,i,this._info.rows),this.inputArgs.Columns.value=e}}});return i("extend-esri")&&o.setObject("dijit.RasterFunctionEditor.RFxKernelSelector",g,n),g});