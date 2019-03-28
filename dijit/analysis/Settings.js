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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/NodeList","dojo/NodeList-dom","dojo/_base/fx","dojo/fx/easing","dojo/promise/all","dojo/Evented","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","dijit/ConfirmDialog","dojox/mvc/at","dgrid1/OnDemandGrid","dgrid1/Tree","dgrid1/Editor","dgrid1/Keyboard","dgrid1/Selection","dgrid1/Selector","dgrid1/extensions/ColumnResizer","dgrid1/extensions/DijitRegistry","../../kernel","../../lang","../../geometry/Extent","../../SpatialReference","../../layers/ArcGISImageServiceLayer","./_Widget","./utils","./SettingsViewModel","./JobsList","./components/DataStoreSelect","dojo/i18n!../../nls/jsapi","dojo/text!./templates/Settings.html"],function(e,t,s,i,l,a,o,h,n,r,c,d,u,p,w,_,S,v,R,M,g,y,C,b,m,x,f,E,I,P,k,L,D,O,F,T,j,N,A,z,V,U,H,X,B,J,Y,G,q,W,K,Q,Z,$,ee,te,se,ie){var le=t([A,U,H,X,V,z,B,J]),ae=Q.createSubclass([y,C,b,m],{declaredClass:"esri.dijit.analysis.Settings",templateString:ie,widgetsInTemplate:!0,i18n:null,toolName:"Settings",helpFileName:"AnalysisEnvironments",viewModelType:$,cssClass:{primaryButton:"btn calcite blue",button:"btn calcite"},constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),this.cssClass=s.mixin({},this.cssClass)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,l.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),this.i18n={},s.mixin(this.i18n,se.common),s.mixin(this.i18n,se.analysisSettings),this._initModelWatchers()},postCreate:function(){this.inherited(arguments),this.viewModel.showOkCancel&&(this._state={}),this.initUI()},startup:function(){this._spatialRefGrid.startup()},initUI:function(){this._rasterUX=[this._snapLblRow,this._snapSelRow,this._rasterLblRow,this._cellLblRow,this._cellSelectRow,this._cellSelectNumRow,this._maskLblRow,this._maskSelRow],this._extentUX=[this._processExtLblRow,this._extentLblRow,this._extentRow],this._coordSysUX=[this._processSRRow,this._processSRLblRow,this._outSRLblRow,this._outSRRow,this._coordinateLblRow],this._geoanalyticsUX=[this._geoanalyticsLblRow,this._datastoreLabelRow,this._selectDataStore],this._rasterPPFUX=[this._parallelProcessingLblRow,this._parallelProcessingFactorLblRow,this._parallelProcessingFactorNumRow],this._rasterPTUX=[this._processorLblRow,this._processorTypeLblRow,this._processorTypeSelRow],Z.initHelpLinks(this.domNode,this.viewModel.showHelp),Z.updateDisplay(this._rasterUX,this.viewModel.showRasterSettings,"table-row"),Z.updateDisplay([this._overwriteRow],this.viewModel.showOverwriteResultOption,"table-row"),Z.updateDisplay([this._closeAnalysisRow],this.viewModel.showCloseAnalysisOption,"table-row"),Z.updateDisplay([this._storeAnalysisRow],this.viewModel.showStoreAnalysisOption,"table-row"),Z.updateDisplay(this._coordSysUX,this.viewModel.showCoordinateSystems,"table-row"),Z.updateDisplay([this._processSRRow,this._processSRLblRow],this.viewModel.showProcessSR,"table-row"),Z.updateDisplay([this._outSRLblRow,this._outSRRow],this.viewModel.showOutSR,"table-row"),Z.updateDisplay([this._coordinateLblRow],this.viewModel.showProcessSR||this.viewModel.showProcessSR,"table-row"),Z.updateDisplay(this._extentUX,this.viewModel.showExtent,"table-row"),Z.updateDisplay([this._closeDiv],this.viewModel.showCloseIcon,"block"),Z.updateDisplay([this._settingsHeader],this.viewModel.showHeader,"block"),Z.updateDisplay([this._actionbuttonCtr],this.viewModel.showOkCancel,"block"),Z.updateDisplay(this._geoanalyticsUX,this.viewModel.showGeoAnalyticsSettings,"table-row"),Z.updateDisplay(this._rasterPPFUX,this.viewModel.showRasterPPFSettings,"table-row"),Z.updateDisplay(this._rasterPTUX,this.viewModel.showRasterPTSettings,"table-row"),Z.updateDisplay([this._maskLblRow,this._maskSelRow],this.viewModel.showRasterSettings&&!this.viewModel.showRasterPTSettings,"table-row"),Z.updateDisplay([this._snapLblRow,this._snapSelRow],this.viewModel.showRasterSnapSettings,"table-row"),this._spatialRefGrid||(this._spatialRefGrid=new le({collection:this.viewModel.spatialRefStore,id:this.id+"_settingsgrid",showHeader:!1,columns:[{renderExpando:!0,label:"Name",field:"name",sortable:!1,resizable:!0}],class:"esriAnalysisSpatialRefTree"},this._spatialRefGridNode),p(".dijitButton",this._coordDialog.domNode).forEach(function(e,t){0===t?w.add(e,this.cssClass.primaryButton):w.add(e,this.cssClass.button)},this)),this.viewModel.outSR&&this._outSRInput.set("value",this.viewModel.outSR.wkid),this.viewModel.processSR&&this._processSRInput.set("value",this.viewModel.processSR.wkid),this.viewModel.layers&&this._updateLayerOptions(this.viewModel.layers),this._updateProcessSRSelectValue(),this._handleProcessSRSelectChange(this._processSRSelect.get("value")),this._updateOutSRSelectValue(),this._handleSRSelectChange(this._outSRSelect.get("value")),this._updateExtentSelectValue(),this._handleExtentOptionChange(this._extentSelect.get("value")),this._updateCellSizeSelectValue(),this._handleCellSizeSelectChange(this._cellSizeSelect.get("value")),this._updateSnapRasterSelectValue(),this._handleSnapRasterSelectChange(this._snapRasterSelect.get("value")),this._updateMaskSelectValue(),this._handleMaskSelectChange(this._maskSelect.get("value")),this._updateProcessorTypeSelectValue(),this._handleProcessorTypeSelectChange(this._processorTypeSelect.get("value")),this._updateparallelProcessingFactorInputValue(),this._handleparallelProcessingFactorInputChange(this._parallelProcessingFactorInput.get("value")),this._closeAnalysisCheck.set("checked",this.viewModel.closeAnalysisWidget),this._storeAnalysisCheck.set("checked",!this.viewModel.returnFeatureCollection),this.viewModel.showJobsHistory&&this.buildJobsUI(),this.viewModel.showGeoAnalyticsSettings&&this.buildDataStoreUI(),this._handleCloseMsg()},_initModelWatchers:function(){this.own(this.viewModel.watch("showCloseIcon",s.hitch(this,function(e,t,s){Z.updateDisplay([this._closeDiv],s,"block")})),this.viewModel.watch("showHelp",s.hitch(this,function(e,t,s){Z.initHelpLinks(this.domNode,s)})),this.viewModel.watch("showOverwriteResultOption",s.hitch(this,function(e,t,s){Z.updateDisplay([this._overwriteRow],s,"table-row")})),this.viewModel.watch("showCloseAnalysisOption",s.hitch(this,function(e,t,s){Z.updateDisplay([this._closeAnalysisRow],s,"table-row")})),this.viewModel.watch("showStoreAnalysisOption",s.hitch(this,function(e,t,s){Z.updateDisplay([this._storeAnalysisRow],s,"table-row")})),this.viewModel.watch("showCoordinateSystems",s.hitch(this,function(e,t,s){Z.updateDisplay(this._coordSysUX,s,"table-row")})),this.viewModel.watch("showProcessSR",s.hitch(this,function(e,t,s){Z.updateDisplay([this._processSRRow,this._processSRLblRow],s,"table-row"),Z.updateDisplay([this._coordinateLblRow],s||this.viewModel.showOutSR,"table-row"),this._updateProcessSRSelectValue(),this._handleProcessSRSelectChange(this._processSRSelect.get("value"))})),this.viewModel.watch("showOutSR",s.hitch(this,function(e,t,s){Z.updateDisplay([this._outSRLblRow,this._outSRRow],s,"table-row"),Z.updateDisplay([this._coordinateLblRow],s||this.viewModel.showProcessSR,"table-row"),this._updateOutSRSelectValue(),this._handleSRSelectChange(this._outSRSelect.get("value"))})),this.viewModel.watch("showExtent",s.hitch(this,function(e,t,s){Z.updateDisplay(this._extentUX,s,"table-row"),this._updateExtentSelectValue(),s&&this._handleExtentOptionChange(this._extentSelect.get("value"))})),this.viewModel.watch("showRasterSettings",s.hitch(this,function(e,t,s){Z.updateDisplay(this._rasterUX,s,"table-row"),this._updateCellSizeSelectValue(),this._handleCellSizeSelectChange(this._cellSizeSelect.get("value")),this._updateSnapRasterSelectValue(),this._handleSnapRasterSelectChange(this._snapRasterSelect.get("value")),this._updateMaskSelectValue(),this._handleMaskSelectChange(this._maskSelect.get("value"))})),this.viewModel.watch("showRasterPPFSettings",s.hitch(this,function(e,t,s){Z.updateDisplay(this._rasterPPFUX,s,"table-row"),this._updateparallelProcessingFactorInputValue(),this._handleparallelProcessingFactorInputChange(this._parallelProcessingFactorInput.get("value"))})),this.viewModel.watch("showRasterPTSettings",s.hitch(this,function(e,t,s){Z.updateDisplay(this._rasterPTUX,s,"table-row"),Z.updateDisplay([this._maskLblRow,this._maskSelRow],!s&&this.viewModel.showRasterSettings,"table-row"),this._updateProcessorTypeSelectValue(),this._handleProcessorTypeSelectChange(this._processorTypeSelect.get("value"))})),this.viewModel.watch("showRasterSnapSettings",s.hitch(this,function(e,t,s){Z.updateDisplay([this._snapLblRow,this._snapSelRow],s,"table-row"),this._updateparallelProcessingFactorInputValue(),this._handleparallelProcessingFactorInputChange(this._parallelProcessingFactorInput.get("value"))})),this.viewModel.watch("layers",s.hitch(this,function(e,t,s){this._updateLayerOptions(this.viewModel.layers)})),this.viewModel.watch("showHeader",s.hitch(this,function(e,t,s){Z.updateDisplay([this._settingsHeader],s,"block")})),this.viewModel.watch("showOkCancel",s.hitch(this,function(e,t,s){Z.updateDisplay([this._actionbuttonCtr],s,"block")})),this.viewModel.watch("showGeoAnalyticsSettings",s.hitch(this,function(e,t,s){Z.updateDisplay(this._geoanalyticsUX,s,"table-row"),s&&this.buildDataStoreUI()})),this.viewModel.watch("isCustomProcessSR",s.hitch(this,function(){this._updateProcessSRSelectValue(),this._handleProcessSRSelectChange(this._processSRSelect.get("value"))})),this.viewModel.watch("isCustomExtent",s.hitch(this,function(){this._updateExtentSelectValue(),this._handleExtentOptionChange(this._extentSelect.get("value"))})),this.viewModel.watch("isCustomOutSR",s.hitch(this,function(){this._updateOutSRSelectValue(),this._handleSRSelectChange(this._outSRSelect.get("value"))})),this.viewModel.watch("closeAnalysisWidget",s.hitch(this,function(e,t,s){this._handleCloseAnalysisCheck(s)})),this.viewModel.watch("returnFeatureCollection",s.hitch(this,function(e,t,s){this._handleReturnFeatureCollectionCheck(s)})),this.viewModel.watch("showJobsHistory",s.hitch(this,this.buildJobsUI)),this.viewModel.watch("jobsViewModel",s.hitch(this,this.buildJobsUI)))},buildJobsUI:function(){Z.updateDisplay([this._settingsNavCtrl],this.viewModel.showJobsHistory,"block"),w.toggle(this._form.domNode,"tab-contents tab-section is-active",this.viewModel.showJobsHistory),w.toggle(this._jobHistoryCtr,"tab-contents tab-section",this.viewModel.showJobsHistory),w.toggle(this.domNode,"esri-analysis-category",this.viewModel.showJobsHistory),this.viewModel.showJobsHistory&&(this._addTabHandlers||(p(".tab-nav a",this.domNode).on("click",s.hitch(this,function(e){e.stopPropagation(),p(".tab-title",this.domNode).removeClass("is-active"),w.add(e.target,"is-active");var t=w.contains(e.target,"general-tab");Z.updateDisplay([this._form.domNode],t,"block"),Z.updateDisplay([this._jobHistoryCtr],!t,"block")})),this._addTabHandlers=!0),this.buildJobsList())},buildJobsList:function(){this.viewModel.jobsViewModel&&(this._jobsListWidget||(this._jobsListWidget=new ee({viewModel:this.viewModel.jobsViewModel},this._jobsListDiv)))},buildDataStoreUI:function(){this._dataStoreSelect||(this._dataStoreSelect=new te({geoAnalyticsServer:this.viewModel.geoAnalyticsServer,value:this.viewModel.get("datastore")},u.create("div",null,this._dataStoreTd)),this._dataStoreSelect.startup(),this._dataStoreSelect.on("change",s.hitch(this,this._handleDSSelectChange)))},_updateExtentSelectValue:function(){var e;this.viewModel.get("isCustomExtent")?this._extentSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.extentLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.extentLayer.name),this._extentSelect.set("value","LAYER_"+e)):this._extentSelect.set("value","DEFAULT"),this.viewModel.get("isCustomExtent")&&this.viewModel.extent&&(this._xMinInput.set("value",this.viewModel.extent.xmin),this._xMaxInput.set("value",this.viewModel.extent.xmax),this._yMinInput.set("value",this.viewModel.extent.ymin),this._yMaxInput.set("value",this.viewModel.extent.ymax))},_updateProcessSRSelectValue:function(){var e;this.viewModel.processSR&&this.viewModel.get("isCustomProcessSR")&&this._processSRInput.set("value",this.viewModel.processSR.wkid),this.viewModel.get("isCustomProcessSR")?this._processSRSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.pSRLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.pSRLayer.name),this._processSRSelect.set("value","LAYER_"+e)):this._processSRSelect.set("value","DEFAULT")},_updateOutSRSelectValue:function(){var e;this.viewModel.outSR&&this.viewModel.get("isCustomOutSR")&&this._outSRInput.set("value",this.viewModel.outSR.wkid),this.viewModel.get("isCustomOutSR")?this._outSRSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.outSRLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.outSRLayer.name),this._outSRSelect.set("value","LAYER_"+e)):this._outSRSelect.set("value","DEFAULT")},_updateCellSizeSelectValue:function(){var e;this.viewModel.get("isCustomCellSize")?this._cellSizeSelect.set("value","SPECIFIED"):this.viewModel.viewProps&&this.viewModel.viewProps.cellSizeLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.cellSizeLayer.name),this._cellSizeSelect.set("value","LAYER_"+e)):this.viewModel.cellSize?this._cellSizeSelect.set("value",this.viewModel.cellSize):this._cellSizeSelect.set("value",this._cellSizeSelect.get("value")),this.viewModel.get("isCustomCellSize")&&this.viewModel.cellSize&&this._cellSizeInput.set("value",this.viewModel.cellSize)},_updateSnapRasterSelectValue:function(){var e;this.viewModel.viewProps&&this.viewModel.viewProps.snapRasterLayer&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.snapRasterLayer.name),this._snapRasterSelect.set("value","LAYER_"+this._layerNames[e])):this._snapRasterSelect.set("value",this._snapRasterSelect.get("value"))},_updateMaskSelectValue:function(){var e;this.viewModel.viewProps&&this.viewModel.viewProps.processorType&&this._layerNames?(e=i.indexOf(this._layerNames,this.viewModel.viewProps.maskLayer.name),this._maskSelect.set("value","LAYER_"+e)):this._maskSelect.set("value",this._maskSelect.get("value"))},_updateProcessorTypeSelectValue:function(){this.viewModel.processorType?this._processorTypeSelect.set("value",this.viewModel.processorType):this._processorTypeSelect.set("value",this._processorTypeSelect.get("value"))},_updateparallelProcessingFactorInputValue:function(){this.viewModel.parallelProcessingFactor?this._parallelProcessingFactorInput.set("value",this.viewModel.parallelProcessingFactor):this._parallelProcessingFactorInput.set("value",this._parallelProcessingFactorInput.get("value"))},_handleSRSelectChange:function(e){var t,s;this._coordDialog.hide(),this._outSRBtn.set("disabled","SPECIFIED"!==e),Z.updateDisplay(this._outSRCustomRow,"SPECIFIED"===e&&this.viewModel.showOutSR,"table-row"),Z.updateDisplay(this._outSRCustomInputRow,"SPECIFIED"===e&&this.viewModel.showOutSR,"table-row"),this._outSRInput.set("required","SPECIFIED"===e),-1!==e.indexOf("LAYER_")&&(t=e.split("_")[1],s=this.viewModel.layers[t],this.viewModel.showOkCancel?(this._outSR={wkid:parseInt(s.fullExtent.spatialReference.wkid,10)},this._state.outSRLayer={name:s.name,url:s.url,fullExtent:s.fullExtent}):this.viewModel.set("outSR",{wkid:parseInt(s.fullExtent.spatialReference.wkid,10)}))},_handleProcessSRSelectChange:function(e){var t,s;this._coordDialog.hide(),this._processSRBtn.set("disabled","SPECIFIED"!==e),Z.updateDisplay(this._processSRCustomRow,"SPECIFIED"===e&&this.viewModel.showProcessSR,"table-row"),Z.updateDisplay(this._processSRCustomInputRow,"SPECIFIED"===e&&this.viewModel.showProcessSR,"table-row"),this._processSRInput.set("required","SPECIFIED"===e),-1!==e.indexOf("LAYER_")&&(t=e.split("_")[1],s=this.viewModel.layers[t],this.viewModel.showOkCancel?(this._processSR={wkid:parseInt(s.fullExtent.spatialReference.wkid,10)},this._state.pSRLayer={name:s.name,url:s.url,fullExtent:s.fullExtent}):this.viewModel.set("processSR",{wkid:parseInt(s.fullExtent.spatialReference.wkid,10)}))},_handleOutSRBtnClick:function(){this._outSRClick=!0,this._coordDialog.show()},_handleProcessSRBtnClick:function(){this._outSRClick=!1,this._coordDialog.show()},_handleExtentOptionChange:function(e){var t,s,i,l="SPECIFIED"===e;Z.updateDisplay([this._extentLbl,this._customExtentRow],this.viewModel.showExtent&&l,"table-row"),this._xMinInput.set("required",l),this._xMaxInput.set("required",l),this._yMinInput.set("required",l),this._yMaxInput.set("required",l),-1!==e.indexOf("LAYER_")?(t=e.split("_")[1],s=this.viewModel.layers[t],i=new q(s.fullExtent),this.viewModel.showOkCancel?(this._extent=i.shiftCentralMeridian(),this._state.extentLayer={name:s.name,url:s.url,fullExtent:s.fullExtent}):this.viewModel.set("extent",i.shiftCentralMeridian())):"SPECIFIED"===e?(i=new q(this._xMinInput.get("value"),this._yMinInput.get("value"),this._xMaxInput.get("value"),this._yMaxInput.get("value"),new W({wkid:102100})),this.viewModel.showOkCancel?(this._extent=i,this._state.extentLayer=null):this.viewModel.set("extent",i)):"DEFAULT"===e&&(this._extent=null,this._state.extentLayer=null)},_validateExtent:function(){var e=!0,t="";return this._handleCloseMsg(),this._xMinInput.get("value")>this._xMaxInput.get("value")&&(e=!1,t+=this.i18n.xMinMaxExtent),this._yMinInput.get("value")>this._yMaxInput.get("value")&&(e=!1,t+="<br/>"+this.i18n.yMinMaxExtent),e||this._showMessages(t),e},_handleSRDlgOk:function(){var e,t,s;for(var i in this._spatialRefGrid.get("selection"))this._spatialRefGrid.get("selection").hasOwnProperty(i)&&(e=i);t=this._spatialRefGrid.collection.getSync(e),s=t.sRef.wkid,this.viewModel.showOkCancel?this._outSRClick?this._outSR={wkid:parseInt(s,10)}:this._processSR={wkid:parseInt(s,10)}:this.viewModel.set(this._outSRClick?"outSR":"processSR",{wkid:parseInt(s,10)}),this._outSRClick?this._outSRInput.textbox.value=s:this._processSRInput.textbox.value=s,this._outSRClick?d.set(this._outSRLabel,"innerHTML",t.name):d.set(this._processSRLabel,"innerHTML",t.name)},_handleSRDlgCancel:function(){},_handleOutSRInputChange:function(e){e&&(d.set(this._outSRLabel,"innerHTML",""),Z.updateDisplay([this._outSRLabel],!1,"inline"),this.viewModel.showOkCancel?(this._outSR={wkid:parseInt(e,10)},this._state.outSRLayer=null):this.viewModel.set("outSR",{wkid:parseInt(e,10)}))},_handleProcessSRInputChange:function(e){e&&(d.set(this._processSRLabel,"innerHTML",""),Z.updateDisplay([this._processSRLabel],!1,"inline"),this.viewModel.showOkCancel?(this._processSR={wkid:parseInt(e,10)},this._state.pSRLayer=null):this.viewModel.set("processSR",{wkid:parseInt(e,10)}))},_handleCellSizeSelectChange:function(e){var t;Z.updateDisplay([this._cellSelectNumRow],"SPECIFIED"===e&&this.viewModel.showRasterSettings,"table-row"),-1!==e.indexOf("LAYER_")?(t=this._cellSizeSelect.getOptions(e),this.viewModel.showOkCancel?(this._cellSize={url:t.url},this._state.cellSizeLayer={name:t.label.substring("Layer ".length),url:t.url,fullExtent:t.fullExtent}):this.viewModel.set("cellSize",{url:t.url})):"SPECIFIED"===e?this.viewModel.showOkCancel?(this._cellSize=this._cellSizeInput.get("value"),this._state.cellSizeLayer=null):this.viewModel.set("cellSize",this._cellSizeInput.get("value")):this.viewModel.showOkCancel?(this._cellSize=e,this._state.cellSizeLayer=null):this.viewModel.set("cellSize",e)},_handleSnapRasterSelectChange:function(e){var t;-1!==e.indexOf("LAYER_")?(t=this._snapRasterSelect.getOptions(e),this.viewModel.showOkCancel?(this._snapRaster={url:t.url},this._state.snapRasterLayer={name:t.label.substring("Layer ".length),url:t.url,fullExtent:t.fullExtent}):this.viewModel.set("snapRaster",{url:t.url})):this.viewModel.showOkCancel?(this._snapRaster="NONE"===e?void 0:e,this._state.snapRasterLayer=null):this.viewModel.set("snapRaster","NONE"===e?void 0:e)},_handleMaskSelectChange:function(e){var t;-1!==e.indexOf("LAYER_")?(t=this._maskSelect.getOptions(e),this.viewModel.showOkCancel?(this._mask={url:t.url},this._state.maskLayer={name:t.label.substring("Layer ".length),url:t.url,fullExtent:t.fullExtent}):this.viewModel.set("mask",{url:t.url})):this.viewModel.showOkCancel?(this._mask="NONE"===e?void 0:e,this._state.maskLayer=null):this.viewModel.set("mask","NONE"===e?void 0:e)},_handleCellSizeInputChange:function(e){e&&"SPECIFIED"===this._cellSizeSelect.get("value")&&(this.viewModel.showOkCancel?this._cellSize=e:this.viewModel.set("cellSize",e))},_handleDSSelectChange:function(e){this.viewModel.showOkCancel||this.viewModel.set("datastore",e.value)},_handleProcessorTypeSelectChange:function(e){this.viewModel.showOkCancel?this._processorType="NONE"===e?void 0:e:this.viewModel.set("processorType",e)},_handleparallelProcessingFactorInputChange:function(e){this.viewModel.showOkCancel?this._parallelProcessingFactor=e:this.viewModel.set("parallelProcessingFactor",e)},_updateLayerOptions:function(e){var t,s,l,a,o=i.map(e,function(e,t){return{value:"LAYER_"+t,label:"Layer "+e.name,url:e.url,fullExtent:e.fullExtent}}),h=[{value:"minof",label:this.i18n.minInputs},{value:"maxof",label:this.i18n.maxInputs,selected:!0},{value:"SPECIFIED",label:this.i18n.extentSpecfiedBelow}],n=[{value:"DEFAULT",label:this.i18n.defaultLabel},{value:"SPECIFIED",label:this.i18n.extentSpecfiedBelow}],r=[{value:"DEFAULT",label:this.i18n.defaultExtentLabel},{value:"SPECIFIED",label:this.i18n.extentSpecfiedBelow}],c=[{value:"GPU",label:this.i18n.gpu},{value:"CPU",label:this.i18n.cpu}];l=[].concat(r).concat(o),a=[].concat(n).concat(o),t=i.filter(e,function(e){return e instanceof K}),s=[].concat(i.map(t,function(e,t){return{value:"LAYER_"+e.name,label:"Layer "+e.name,url:e.url,fullExtent:e.fullExtent}},this)),this._layerNames=i.map(e,function(e,t){return e.name}),this._outSRSelect.removeOption(this._outSRSelect.getOptions()),this._processSRSelect.removeOption(this._processSRSelect.getOptions()),this._extentSelect.removeOption(this._extentSelect.getOptions()),this._maskSelect.removeOption(this._maskSelect.getOptions()),this._cellSizeSelect.removeOption(this._cellSizeSelect.getOptions()),this._snapRasterSelect.removeOption(this._snapRasterSelect.getOptions()),this._processorTypeSelect.removeOption(this._processorTypeSelect.getOptions()),this._outSRSelect.addOption(l),this._processSRSelect.addOption(l),this._extentSelect.addOption(a),this._maskSelect.addOption([{value:"NONE",label:""}].concat(o)),this._cellSizeSelect.addOption([].concat(h).concat(o)),this._snapRasterSelect.addOption([{value:"NONE",label:""}].concat(s)),this._processorTypeSelect.addOption([{value:"NONE",label:""}].concat(c)),this._updateExtentSelectValue(),this._updateOutSRSelectValue(),this._updateProcessSRSelectValue(),this._updateCellSizeSelectValue(),this._updateSnapRasterSelectValue(),this._updateMaskSelectValue(),this._updateProcessorTypeSelectValue(),this._updateparallelProcessingFactorInputValue()},_handleCloseAnalysisCheck:function(e){this.viewModel.showOkCancel||this.viewModel.set("closeAnalysisWidget",e)},_handleReturnFeatureCollectionCheck:function(e){this.viewModel.showOkCancel||this.viewModel.set("returnFeatureCollection",!e)},_handleOkButtonClick:function(e){e&&e.preventDefault(),this._form.validate()&&("SPECIFIED"!==this._extentSelect.get("value")||this._validateExtent())&&(this.viewModel.set("viewProps",this._state),"DEFAULT"!==this._outSRSelect.get("value")?this.viewModel.set("outSR",this._outSR):"DEFAULT"===this._outSRSelect.get("value")&&this.viewModel.set("outSR",null),"DEFAULT"!==this._processSRSelect.get("value")?this.viewModel.set("processSR",this._processSR):"DEFAULT"===this._processSRSelect.get("value")&&this.viewModel.set("processSR",null),"SPECIFIED"===this._extentSelect.get("value")&&this._validateExtent()&&(this._extent=new q(this._xMinInput.get("value"),this._yMinInput.get("value"),this._xMaxInput.get("value"),this._yMaxInput.get("value"),new W({wkid:102100}))),this.viewModel.set("extent",this._extent),this.viewModel.set("mask",this._mask),this.viewModel.set("snapRaster",this._snapRaster),this.viewModel.set("cellSize",this._cellSize),this.viewModel.set("datastore",this._dataStoreSelect.get("value")),this.viewModel.set("closeAnalysisWidget",this._closeAnalysisCheck.get("checked")),this.viewModel.set("returnFeatureCollection",!this._storeAnalysisCheck.get("checked")),this.viewModel.set("isCustomExtent","SPECIFIED"===this._extentSelect.get("value")),this.viewModel.set("isCustomOutSR","SPECIFIED"===this._outSRSelect.get("value")),this.viewModel.set("isCustomProcessSR","SPECIFIED"===this._processSRSelect.get("value")),this.viewModel.set("isCustomCellSize","SPECIFIED"===this._cellSizeSelect.get("value")),this.viewModel.set("processorType",this._processorType),this.viewModel.set("parallelProcessingFactor",this._parallelProcessingFactor),this.viewModel.save(),this.emit("ok-settings",{viewMode:this.viewModel}))},_handleCancelButtonClick:function(){this.viewModel.reset(),this.reset(),this.emit("cancel-settings",{viewMode:this.viewModel})},reset:function(){"SPECIFIED"!==this._extentSelect.get("value")||this._validateExtent()||this.viewModel.get("isCustomExtent")||(this._xMinInput.reset(),this._xMaxInput.reset(),this._yMinInput.reset(),this._yMaxInput.reset()),this.initUI()},_showMessages:function(e){d.set(this._bodyNode,"innerHTML",e),v.fadeIn({node:this._errorMessagePane,easing:R.quadIn,onEnd:s.hitch(this,function(){c.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),v.fadeOut({node:this._errorMessagePane,easing:R.quadOut,onEnd:s.hitch(this,function(){c.set(this._errorMessagePane,{display:"none"})})}).play()}});return h("extend-esri")&&s.setObject("dijit.analysis.Settings",ae,Y),ae});