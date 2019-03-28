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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/fx/easing","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./AnalysisRegistry","./CreditEstimator","./utils","./TrafficTime","./components/AddBarrierLayers/AddBarrierLayers","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ConnectOriginsToDestinations.html"],function(e,t,i,s,r,a,n,o,h,l,d,u,y,c,g,L,p,m,f,_,S,v,I,T,D,b,R,O,C,F,w,A,B,M,j,x,P,k,N,U,W,E){var J=t([m,f,_,S,v,j,M],{declaredClass:"esri.dijit.analysis.ConnectOriginsToDestinations",templateString:E,widgetsInTemplate:!0,originsLayer:null,destinationsLayer:null,measurementType:"DrivingTime",pointBarriers:null,pointBarrierLayer:null,lineBarriers:null,lineBarrierLayer:null,polygonBarriers:null,polygonBarrierLayer:null,forbiddenLayers:[],outputLayerName:null,distanceDefaultUnits:"Miles",enableTravelModes:!0,i18n:null,toolName:"ConnectOriginsToDestinations",helpFileName:"ConnectOriginsToDestinations",resultParameter:["routesLayer","unassignedOriginsLayer","unassignedDestinationsLayer"],constructor:function(e,t){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,r.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,W.common),i.mixin(this.i18n,W.bufferTool),i.mixin(this.i18n,W.driveTimes),i.mixin(this.i18n,W.routeOriginDestinationPairsTool)},postCreate:function(){this.inherited(arguments),g.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:e})},_handleShowCreditsClick:function(e){e.preventDefault();var t,s={};this._form.validate()&&(s.originsLayer=a.toJson(this.constructAnalysisInputLyrObj(this.originsLayer)),s.destinationsLayer=a.toJson(this.constructAnalysisInputLyrObj(this.get("destinationsLayer"))),t=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),s.measurementType=t.travelMode?a.toJson(t.travelMode):this._measureMethodSelect.get("value"),"none"!==d.get(this._routeIdRow,"display")&&(s.originsLayerRouteIDField=this.get("originsLayerRouteIDField"),s.destinationsLayerRouteIDField=this.get("destinationsLayerRouteIDField")),this._trafficTimeWidget.get("checked")&&(s.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(s.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"))),this.returnFeatureCollection||(s.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.context=a.toJson({extent:this.map.extent._normalize(!0)})),s=this._addBarrierstoJobParams(s,this._addBarrierLayersComponent.get("barrierLayers")),this.getCreditsEstimate(this.toolName,s).then(i.hitch(this,function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleSaveBtnClick:function(e){var t,i,s,r={},n={};this._form.validate()&&(this._saveBtn.set("disabled",!0),r.originsLayer=a.toJson(this.constructAnalysisInputLyrObj(this.originsLayer)),r.destinationsLayer=a.toJson(this.constructAnalysisInputLyrObj(this.get("destinationsLayer"))),i=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),r.measurementType=i.travelMode?a.toJson(i.travelMode):this._measureMethodSelect.get("value"),"none"!==d.get(this._routeIdRow,"display")&&(r.originsLayerRouteIDField=this.get("originsLayerRouteIDField"),r.destinationsLayerRouteIDField=this.get("destinationsLayerRouteIDField")),this._trafficTimeWidget.get("checked")&&(r.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(r.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay"),r.liveOffset=this._trafficTimeWidget.get("liveOffset"))),this.returnFeatureCollection||(r.OutputName=a.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(r.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),r.context=a.toJson(t)),s={description:l.substitute(this.i18n.itemDescription,{layername:this.originsLayer.name,distance_field:r.Distances||r.Field,units:r.Units}),tags:l.substitute(this.i18n.itemTags,{layername:this.originsLayer.name,destnlayername:this.destinationsLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(s.folder=this.get("folderId")),"StraightLine"!==r.measurementType&&this.showOutputType&&(r.includeRouteLayers=this._incldRouteLayersChk.get("checked")),r=this._addBarrierstoJobParams(r,this._addBarrierLayersComponent.get("barrierLayers")),n.itemParams=s,n.jobParams=r,this.execute(n))},_save:function(){},_buildUI:function(){var e=!0;d.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),k.initHelpLinks(this.domNode,this.showHelp),d.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(e){this.folderStore=e,k.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),d.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");var t=this.on("travelmodes-added",i.hitch(this,function(){this._handleMeasurementTypeChange(this._measureMethodSelect.get("value")),t.remove(),t=null}));k.populateTravelModes({selectWidget:this._measureMethodSelect,addStraightLine:!0,widget:this,enableTravelModes:this.get("enableTravelModes"),selectDefaultMode:!0,value:this.measurementType}),this.timeOfDay&&(this._trafficTimeWidget.set("checked",!0),this._trafficTimeWidget.set("timeZoneForTimeOfDay",this.timeZoneForTimeOfDay),this._trafficTimeWidget.set("timeOfDay",this.timeOfDay),this.liveOffset&&this._trafficTimeWidget.set("liveOffset",this.liveOffset)),this.destinationsLayer&&this.featureLayers&&!k.isLayerInLayers(this.destinationsLayer,this.featureLayers)&&this.featureLayers.push(this.destinationsLayer),this.get("showSelectAnalysisLayer")&&(this.originsLayers&&this.originsLayer&&!k.isLayerInLayers(this.originsLayer,this.originsLayers)&&this.originsLayers.push(this.originsLayer),this.get("originsLayer")||!this.get("originsLayers")||this.rerun||this.set("originsLayer",this.originsLayers[0]),k.populateAnalysisLayers(this,"originsLayer","originsLayers")),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.destinationsLayer&&(e=!1),this.originsLayer&&this._updateAnalysisLayerUI(e),k.addReadyToUseLayerOption(this,[this._analysisSelect,this._destPointLyrSelect]),k.updateDisplay([this._outputTypeRow],this.get("showOutputType"),"table-row"),this._loadConnections(),this._addBarrierLayersComponent.buildUI({pointBarrierLayer:this.pointBarrierLayer,pointBarriers:this.pointBarriers,lineBarrierLayer:this.lineBarrierLayer,lineBarriers:this.lineBarriers,polygonBarrierLayer:this.polygonBarrierLayer,polygonBarriers:this.polygonBarriers,forbiddenLayers:this.forbiddenLayers,showBrowseLayers:this.showBrowseLayers,map:this.get("map"),portalSelf:this.get("portalSelf"),portalUrl:this.get("portalUrl"),useArcGISComponents:this.useArcGISComponents,isSingleTenant:this.isSingleTenant})},_updateAnalysisLayerUI:function(e){var t,i,r,a;if(this.originsLayer&&u.set(this._tripCalToolDescription,"innerHTML",l.substitute(this.i18n.toolDefine,{layername:this.originsLayer.name})),this.featureLayers){this.set("featureLayers",this.featureLayers),t=s.some(this._destPointLyrSelect.getOptions(),function(e){return"browse"===e.value},this),i=s.some(this._destPointLyrSelect.getOptions(),function(e){return"browselayers"===e.value},this),this._destPointLyrSelect.removeOption(this._destPointLyrSelect.getOptions());var n=[],o=0;this.rerun&&!this.destinationsLayer&&k.addBlankOption(this._destPointLyrSelect,n),s.forEach(this.featureLayers,function(e,t){var i=this.destinationsLayer&&(this.destinationsLayer.name===e.name||this.destinationsLayer.url&&e.url&&this.destinationsLayer.url===e.url);n.push({value:t+1,label:e.name,selected:i}),i&&(o=t)},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||t||i)&&n.push({type:"separator",value:""}),this._destPointLyrSelect.addOption(n),k.addBrowseOptionForTool({select:this._destPointLyrSelect,disableLAAL:!1},this),this.destinationsLayer||(this._destPointLyrSelect.set("value",1),this.set("destinationsLayer",this.featureLayers[0]))}(e||!this.originsLayerRouteIDField&&!this.destinationsLayerRouteIDField)&&(this.originsLayer&&this.originsLayer.graphics&&this.originsLayer.graphics.length<=1||this.destinationsLayer&&this.destinationsLayer.graphics&&this.destinationsLayer.graphics.length<=1)?d.set(this._routeIdRow,"display","none"):d.set(this._routeIdRow,"display","table"),(!e&&(this.originsLayerRouteIDField||this.destinationsLayerRouteIDField)||this.originsLayer&&this.originsLayer.graphics&&this.originsLayer.graphics.length>1||this.originsLayer.analysisReady)&&(r=this.originsLayer.fields,a=[],this._originRouteIdSelect.removeOption(this._originRouteIdSelect.getOptions()),s.forEach(r,function(t,i){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeString","esriFieldTypeDate"],t.type)&&a.push({value:t.name,label:B.isDefined(t.alias)&&""!==t.alias?t.alias:t.name,selected:!e&&this.originsLayerRouteIDField===t.name})},this),this._originRouteIdSelect.addOption(a)),e&&this._destPointLyrSelect.get("value")&&"browse"!==this._destPointLyrSelect.get("value")&&this.set("outputLayerName",l.substitute(this.i18n.outputLayerName,{layername:this.originsLayer.name,destnlayername:this.featureLayers[this._destPointLyrSelect.get("value")-1].name})),!e&&this.destinationsLayerRouteIDField&&this.destinationsLayer&&this._handleDestinationLayerChange(o,!e)},_handleAnalysisLayerChange:function(e){var t,i,r;this._isAnalysisSelect=!0,"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["point"],geometryTypes:[x.GeometryTypes.Point]},this._analysisSelect):(t=this.originsLayers[e],i=this.featureLayers.slice(),r=s.some(i,function(e){return e===this.originsLayer},this),r||i.push(this.originsLayer),this.set("originsLayer",t),this.set("featureLayers",i),this.originsLayerRouteIDField=null,this.outputLayerName=null,this._updateAnalysisLayerUI(!0),this.get("destinationsLayer")&&this._handleDestinationLayerChange(this._destPointLyrSelect.get("value")))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setOriginsLayerAttr:function(e){B.isDefined(e)&&e.geometryType===x.GeometryTypes.Point&&(this.originsLayer=e,this.forbiddenLayers=[this.originsLayer,this.destinationsLayer],this._addBarrierLayersComponent&&this._addBarrierLayersComponent.updateOptions(this.forbiddenLayers))},_getOriginsLayerAttr:function(){return this.originsLayer},_setOriginsLayersAttr:function(e){this.originsLayers=e||[]},_setFeatureLayersAttr:function(e){this.featureLayers=s.filter(e,function(e){if((!B.isDefined(this.originsLayer)||e!==this.originsLayer)&&e&&e.geometryType&&e.geometryType===x.GeometryTypes.Point)return!0},this)},_getFeatureLayersAttr:function(e){return this.featureLayers},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},validateServiceName:function(e){return k.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setMeasurementTypeAttr:function(e){this.measurementType=e},_getMeasurementTypeAttr:function(){return this.measurementType},_setDistanceDefaultUnitsAttr:function(e){this.distanceDefaultUnits=e},_getDistanceDefaultUnitsAttr:function(){return this.distanceDefaultUnits},_setDestinationsLayerAttr:function(e){this.destinationsLayer=e,this.forbiddenLayers=[this.originsLayer,this.destinationsLayer],this._addBarrierLayersComponent&&this._addBarrierLayersComponent.updateOptions(this.forbiddenLayers)},_getDestinationsLayerAttr:function(){return this.destinationsLayer},_setOriginsLayerRouteIDFieldAttr:function(e){this.originsLayerRouteIDField=e},_getOriginsLayerRouteIDFieldAttr:function(){return this._originRouteIdSelect&&this._isRouteIdAvailable()&&(this.originsLayerRouteIDField=this._originRouteIdSelect.get("value")),this.originsLayerRouteIDField},_setDestinationsLayerRouteIDFieldAttr:function(e){this.destinationsLayerRouteIDField=e},_getDestinationsLayerRouteIDFieldAttr:function(){return this._destnRouteIdSelect&&this._isRouteIdAvailable&&(this.destinationsLayerRouteIDField=this._destnRouteIdSelect.get("value")),this.destinationsLayerRouteIDField},_setOutputLayerNameAttr:function(e){this.outputLayerName=e,this._outputLayerInput&&this._outputLayerInput.set("value",this.outputLayerName)},_setEnableTravelModesAttr:function(e){this._set("enableTravelModes",e)},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1)),r.connect(this._measureMethodSelect,"onChange",i.hitch(this,this._handleMeasurementTypeChange)),this.watch("enableTravelModes",i.hitch(this,function(e,t,i){this._updateTravelModes(i)})),this.own(this._addBarrierLayersComponent.on("add-ready-to-use-layer",i.hitch(this,function(e){this.emit("add-ready-to-use-layer",e)})))},_connect:function(e,t,i){this._pbConnects.push(r.connect(e,t,i))},_handleBrowseItemsSelect:function(e,t){var s=this._isAnalysisSelect;e&&e.selection&&k.addAnalysisReadyLayer({item:e.selection,layers:this._isAnalysisSelect?this.originsLayers:this.featureLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._destPointLyrSelect,posIncrement:this._isAnalysisSelect?0:1,browseDialog:e.dialog||this._browsedlg,widget:this},t).then(i.hitch(this,function(e){e&&this._addBarrierLayersComponent.addNewBarrier(s?this.originsLayers[this.originsLayers.length-1]:this.featureLayers[this.featureLayers.length-1])}))},_handleDestnRouteIdChange:function(e){this._autoSelRtId||B.isDefined(this._originRouteIdSelect.getOptions(e))&&(this._autoSelRtId=!0,this._originRouteIdSelect.set("value",e))},_handleOriginRouteIdChange:function(e){this._autoSelRtId||B.isDefined(this._destnRouteIdSelect.getOptions(e))&&(this._autoSelRtId=!0,this._destnRouteIdSelect.set("value",e))},_handleMeasurementTypeChange:function(e){var t,s;s=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value")),t=B.isDefined(s)?"Time"===s.units&&("driving"===s.modei18nKey||"trucking"===s.modei18nKey):"DrivingTime"===e,t&&k.getRoutingUtilities(this).then(i.hitch(this,function(e){this._trafficTimeWidget.set("trafficSupport",e.networkDataset&&e.networkDataset.trafficSupport)})),this.set("measurementType",e),d.set(this._useTrafficLabelRow,"display",t?"":"none"),this._trafficTimeWidget.set("disabled",!t),this._trafficTimeWidget.set("reset",!t),this.showOutputType&&("StraightLine"===e&&this._incldRouteLayersChk.set("checked",!1),this._incldRouteLayersChk.set("disabled","StraightLine"===e)),"StraightLine"===e?this._addBarrierLayersComponent.disable():this._addBarrierLayersComponent.enable()},_handleDestinationLayerChange:function(e,t){this._isAnalysisSelect=!1;var i,r=[];"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["point"],geometryTypes:[x.GeometryTypes.Point]},this._destPointLyrSelect):(this._autoSelRtId&&(this._autoSelRtId=!1),this._destnRouteIdSelect.removeOption(this._destnRouteIdSelect.getOptions()),t&&(this.originsLayerRouteIDField||this.destinationsLayerRouteIDField)||this.originsLayer&&(this.originsLayer.graphics&&this.originsLayer.graphics.length>1&&this.featureLayers[e-1].graphics.length>1||this.originsLayer.analysisReady)?!t&&this.featureLayers[e-1].graphics&&this.originsLayer.graphics&&this.featureLayers[e-1].graphics.length!==this.originsLayer.graphics.length?(this._showMessages(this.i18n.inValidNumberRecordsMsg),this.set("disableRunAnalysis",!0),d.set(this._routeIdRow,"display","none")):(this._handleCloseMsg(),d.set(this._routeIdRow,"display","table"),this.set("disableRunAnalysis",!1),this.featureLayers[e-1]&&(i=this.featureLayers[e-1].fields),s.forEach(i,function(e,i){-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeString","esriFieldTypeDate"],e.type)&&r.push({value:e.name,label:B.isDefined(e.alias)&&""!==e.alias?e.alias:e.name,selected:t&&this.destinationsLayerRouteIDField===e.name})},this),this._destnRouteIdSelect.addOption(r)):(d.set(this._routeIdRow,"display","none"),this.set("disableRunAnalysis",!1),this._handleCloseMsg()),this.originsLayer&&this.featureLayers[e-1]&&this._outputLayerInput.set("value",l.substitute(this.i18n.outputLayerName,{layername:this.originsLayer.name,destnlayername:this.featureLayers[e-1].name})),this.set("destinationsLayer",this.featureLayers[e-1]))},_isRouteIdAvailable:function(){var e=!1;return this.originsLayer.graphics&&this.originsLayer.graphics.length>1&&this.featureLayers[this._destPointLyrSelect.get("value")-1].graphics.length>1?this.originsLayer.graphics&&this.originsLayer.graphics.length===this.featureLayers[this._destPointLyrSelect.get("value")-1].graphics.length&&(e=!0):(this.originsLayer.analysisReady||this.featureLayers[this._destPointLyrSelect.get("value")-1])&&(e=!0),e},_showMessages:function(e){u.set(this._bodyNode,"innerHTML",e),n.fadeIn({node:this._errorMessagePane,easing:L.quadIn,onEnd:i.hitch(this,function(){d.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),n.fadeOut({node:this._errorMessagePane,easing:L.quadOut,onEnd:i.hitch(this,function(){d.set(this._errorMessagePane,{display:"none"})})}).play()},_updateTravelModes:function(e){var t=this._measureMethodSelect.getOptions();s.forEach(t,function(t){"StraightLine"!==t.value&&(t.disabled=!e)}),this._measureMethodSelect.updateOption(t)}});return o("extend-esri")&&i.setObject("dijit.analysis.ConnectOriginsToDestinations",J,A),J});