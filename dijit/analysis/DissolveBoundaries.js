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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/on","dojox/form/CheckedMultiSelect","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/RadioButton","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","./utils","./AnalysisRegistry","./components/AddSummaryFields","dojo/i18n!../../nls/jsapi","dojo/text!./templates/DissolveBoundaries.html"],function(e,t,i,s,a,o,n,l,r,h,d,u,c,m,p,y,_,v,f,F,g,L,b,S,A,j,C,P,I,w,x,N,T,k,D,B,O,G,M,E,H){var U=t([_,v,f,F,g,D,k],{declaredClass:"esri.dijit.analysis.DissolveBoundaries",templateString:H,widgetsInTemplate:!0,inputLayer:null,dissolveFields:null,summaryFields:null,outputLayerName:null,i18n:null,toolName:"DissolveBoundaries",helpFileName:"DissolveBoundaries",resultParameter:"DissolvedLayer",constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.showGeoAnalyticsParams&&e.rerun&&(e.multiPartFeatures=e.multipart)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,E.dissolveBoundaries)},postCreate:function(){this.inherited(arguments),m.add(this._form.domNode,"esriSimpleForm"),h.set(this._dissolveFieldsSelect.selectNode,"width","75%"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleAreasChange:function(){this._dissolveFieldsSelect.set("disabled",!0!==this._sameAttributeAreasCheck.get("checked")),this._dissolveFieldsSelect.set("required",!0===this._sameAttributeAreasCheck.get("checked")),this._dissolveFieldsSelect.validate()},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&O.addAnalysisReadyLayer({item:e.selection,layers:this.inputLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(i.hitch(this,this._updateAnalysisLayerUI,!0))},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(i.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()}))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e={};e.jobParams=this._buildJobParams(),e.itemParams={description:this.i18n.itemDescription,tags:r.substitute(this.i18n.itemTags,{layername:this.inputLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.showGeoAnalyticsParams&&(this.resultParameter="output",e.isSpatioTemporalDataStore=!0),this.execute(e)}},_buildJobParams:function(){var e,t,i={};if(i.inputLayer=o.toJson(this.constructAnalysisInputLyrObj(this.inputLayer)),t=this._summaryWidget.get("summaryFields"),t&&t.length>0&&(i.summaryFields=this.showGeoAnalyticsParams?o.toJson(t):t),this.showGeoAnalyticsParams?i.multipart=this.multiPartFeatures:i.multiPartFeatures=this.multiPartFeatures,this.returnFeatureCollection||(i.OutputName=o.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),!0===this._sameAttributeAreasCheck.get("checked")){var s=this.get("dissolveFields");i.dissolveFields=o.toJson(s),this.showGeoAnalyticsParams&&(i.dissolveFields=s.toString())}return this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),i.context=o.toJson(e)),i},_handleMultiPartFeatureChange:function(e){this.multiPartFeatures=e},_save:function(){},_buildUI:function(){var e=!0;this._loadConnections(),this.signInPromise.then(i.hitch(this,O.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.showGeoAnalyticsParams&&(d.set(this._dissolveFieldsHelpNode,"esriHelpTopic","dissolveFields"),d.set(this._multipartHelpNode,"esriHelpTopic","multipart"),d.set(this._summaryFieldsHelpNode,"esriHelpTopic","summaryFields"),d.set(this._outputNameHelpNode,"esriHelpTopic","outputName"),d.set(this._summaryLabel,"innerHTML",this.i18n.addStatsLabel)),T.isDefined(this.multiPartFeatures)||(this.multiPartFeatures=!this.showGeoAnalyticsParams),this.get("showSelectAnalysisLayer")&&(this.inputLayers&&this.inputLayer&&!O.isLayerInLayers(this.inputLayer,this.inputLayers)&&(this.inputLayers.push(this.inputLayer),this._summaryWidget.set("layer",this.inputLayer)),this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),O.populateAnalysisLayers(this,"inputLayer","inputLayers")),O.addReadyToUseLayerOption(this,[this._analysisSelect]),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this._sameAttributeAreasCheck.set("checked",this.dissolveFields&&this.dissolveFields.length>0),this.inputLayer&&this._updateAnalysisLayerUI(e),this.summaryFields&&this._summaryWidget.set("summaryFields",this.summaryFields),h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(e){this.folderStore=e,O.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1))},_updateAnalysisLayerUI:function(e){if(this.inputLayer){d.set(this._dissolveBoundariesDescription,"innerHTML",r.substitute(this.i18n.dissolveBoundariesDefine,{layername:this.inputLayer.name})),this.outputLayerName&&!e||(this.outputLayerName=r.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}));var t=this.inputLayer.fields,i=[],a=!1;this._dissolveFieldsSelect.removeOption(this._dissolveFieldsSelect.getOptions()),s.forEach(t,function(e,t){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"],e.type)&&(null!==this.dissolveFields&&(a=-1!==this.dissolveFields.indexOf(e.name)),i.push({value:e.name,label:T.isDefined(e.alias)&&""!==e.alias?e.alias:e.name,selected:a}))},this),this._dissolveFieldsSelect.addOption(i),this._dissolveFieldsSelect.set("disabled",!0!==this._sameAttributeAreasCheck.get("checked"))}this._multiplePartFeatureCheck.set("checked",this.multiPartFeatures),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_handleAnalysisLayerChange:function(e){"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["polygon"],geometryTypes:[G.GeometryTypes.Polygon]},this._analysisSelect):(this.set("inputLayer",this.inputLayers[e]),this._dissolveFields=null,this._updateAnalysisLayerUI(!0))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(e){T.isDefined(e)&&e.geometryType===G.GeometryTypes.Polygon&&(this.inputLayer=e),this._summaryWidget.set("layer",this.inputLayer)},_setInputLayersAttr:function(e){this.inputLayers=s.filter(e,function(e){return e.geometryType===G.GeometryTypes.Polygon})},_setMultiPartFeaturesAttr:function(e){this.multiPartFeatures=e},_setAttributesAttr:function(e){if(e.inputLayer){var t,i,a;t=e.inputLayer,i=e.selectWidget,a=t.fields,i.addOption({value:"0",label:this.i18n.attribute}),s.forEach(a,function(e){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],e.type)&&e.name!==t.objectIdField&&i.addOption({value:e.name,label:T.isDefined(e.alias)&&""!==e.alias?e.alias:e.name})},this)}},_setStatisticsAttr:function(e){var t=e.selectWidget;t.addOption({value:"0",label:this.i18n.statistic}),t.addOption({value:"SUM",label:this.i18n.sum}),t.addOption({value:"MIN",label:this.i18n.minimum}),t.addOption({value:"MAX",label:this.i18n.maximum}),t.addOption({value:"MEAN",label:this.i18n.average}),t.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setDissolveFieldsAttr:function(e){this.dissolveFields=e},_getDissolveFieldsAttr:function(){var e="",t=[];return this._dissolveFieldsSelect.getOptions().forEach(function(i){!0===i.selected&&"0"!==i.value&&(e+=i.value+";",t.push(i.value))}),t},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return O.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_connect:function(e,t,i){this._pbConnects.push(a.connect(e,t,i))}});return n("extend-esri")&&i.setObject("dijit.analysis.DissolveBoundaries",U,N),U});