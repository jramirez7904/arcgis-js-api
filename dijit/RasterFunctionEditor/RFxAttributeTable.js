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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxAttributeTable.html","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/NumberSpinner","./EditableGridMixin","./RFxGridBase","../ColorRampSelector","../../renderers/colorRampUtils","../../kernel"],function(e,t,a,i,r,s,l,n,o,u,c,h,d,p){var m=e([s,l,n,u],{templateString:r,baseClass:"esriRFxAttributeTable",nCols:0,dataTypes:[c.DATA_TYPES.string,c.DATA_TYPES.string,"color"],fieldNames:["Value","ClassName","Color"],_store:null,_grid:null,defaults:{min:1,max:7},fields:[{name:"ObjectID",type:"esriFieldTypeOID",alias:"OID"},{name:"Value",type:"esriFieldTypeInteger",alias:"Value"},{name:"ClassName",type:"esriFieldTypeString",alias:"ClassName",length:256},{name:"Red",type:"esriFieldTypeInteger",alias:"Red"},{name:"Green",type:"esriFieldTypeInteger",alias:"Green"},{name:"Blue",type:"esriFieldTypeInteger",alias:"Blue"},{name:"Alpha",type:"esriFieldTypeInteger",alias:"Alpha"}],constructor:function(e){this.inherited(arguments),this._i18n=i.widgets.rasterFunctionEditor.rfxAttributeTable},postCreate:function(){this.inherited(arguments),this._validateInputArgs(),this._setLabels(),this._setupLayerSelect(),this._setupValueControls(),this._setupColorRamp(),this._initializeGrid(),this.generateButton.on("click",t.hitch(this,this._onGenerateTableClick)),this._grid.on("grid-data-change",t.hitch(this,this._updateValue))},_validateInputArgs:function(){if(!Object.keys(this.inputArgs).some(function(e){if("AttributeTableAsRecordSet"===e)return!0})){var e={name:"AttributeTableAsRecordSet",isPublic:!1,type:"RecordSet"};this.rfxArgs.AttributeTableAsRecordSet=e,this.inputArgs.AttributeTableAsRecordSet=e}},_setupLayerSelect:function(){this.rasterArg=this.inputArgs&&this.inputArgs.Raster,this._layerSelect.set("inputLayers",this.inputLayers),this._layerSelect.set("allowScalar",this.allowScalar),this._layerSelect.set("rfxVariable",this.rasterArg),this.own(this._layerSelect.on("change",this._updateRasterInputArg.bind(this)))},_updateRasterInputArg:function(){this.rasterArg.value=this._layerSelect.get("value")},_setupValueControls:function(){this.minVal=this._createValueControl(this.minValSelect,this.defaults.min),this.maxVal=this._createValueControl(this.maxValSelect,this.defaults.max)},_setupColorRamp:function(){this.colorRampSelect=new h({maxHeight:200,includeDefault:!1},this.colorRampNode),this.colorRampSelect.startup(),this.colorRampSelect.setSelected("Aspect")},_createValueControl:function(e,t){var a=new o({value:t,smallDelta:1,constraints:{min:-127,max:127,places:0}},e);return a.startup(),a},_initializeGrid:function(){var e=this._getGridSchema(),t=this._createDataObject();this._grid=new c({schema:e,data:t,hasIdColumn:!0,defaultBlankObject:this._getDefaultValueObject()},this.attributeTable)},_getGridSchema:function(){return this.fieldNames.map(function(e,t){return{label:this._i18n[e.toLowerCase()],name:e,dataType:this.dataTypes[t]}},this)},_createDataObject:function(){var e=[];if(this.recordSetArg=this.inputArgs&&this.inputArgs.AttributeTableAsRecordSet,this.recordSetArg&&this.recordSetArg.features&&this.recordSetArg.features.length){this.recordSetArg.features.forEach(function(t){var a=t.attributes,i={Value:a.Value,ClassName:a.ClassName,colorObject:{r:a.Red,g:a.Green,b:a.Blue,a:a.Alpha,id:a.ObjectID}};e.push(i)})}return e},_getDefaultValueObject:function(){return{Value:0,ClassName:"",colorObject:{r:0,g:0,b:0,a:1}}},_onGenerateTableClick:function(){var e=this._getGridData();this._grid.updateStoreValue(e),this._updateValue(e)},_getGridData:function(){for(var e=this.minVal.value,t=this.maxVal.value,a=this.baseClassNameInput.value,i=t-e+1,r=[],s=this.colorRampSelect.colorRamp,l=d.convertColorRampToColormap(s,i),n=0,o=e;o<=t;o++){var u={r:l[n][1],g:l[n][2],b:l[n][3],a:1,id:n};r.push({Value:o,ClassName:a+o,colorObject:u}),n++}return r},_updateValue:function(e){var t=[];e.forEach(function(e,a){if(e&&"*"!==e.idNum){var i={attributes:{ObjectID:a,Value:parseInt(e.Value,10),ClassName:e.ClassName,Red:e.colorObject.r,Green:e.colorObject.g,Blue:e.colorObject.b,Alpha:e.colorObject.a}};t.push(i)}}),this.recordSetArg.fields||(this.recordSetArg.fields=this.fields),this.recordSetArg.features=t},_setLabels:function(){this.inputArgs&&this.inputArgs.Raster&&(this.rasterLabel.innerHTML=this.inputArgs.Raster.displayName||this.inputArgs.Raster.name)}});return a("extend-esri")&&t.setObject("dijit.RasterFunctionEditor.RFxAttributeTable",m,p),m});