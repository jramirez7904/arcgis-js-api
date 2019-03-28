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

define(["dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/string","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","esri/dijit/geoenrichment/TriStateItem","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/OnDemandSelect","dijit/form/RadioButton","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions","esri/dijit/geoenrichment/ReportPlayer/printing/PageSizeUtil","esri/dijit/geoenrichment/ReportPlayer/PlayerCommands","dojo/text!./templates/PageOptionsDialogContent.html","dojo/i18n!esri/nls/jsapi"],function(t,e,i,o,n,a,s,c,r,l,d,h,u,p,g,S,x){x=x.geoenrichment.dijit.ReportPlayer.PageOptionsDialog;var m={};return m[g.HTML]=x.createHTMLLabel,m[g.IMAGE]=x.createImageLabel,m[g.PDF]=x.createPDFLabel,m[g.PRINT]=x.printLabel,m[g.DYNAMIC_HTML]=x.createDynamicHTMLLabel,t([n,a],{templateString:S,nls:x,exportSelect:null,sizeList:null,autoScaleCheckbox:null,addHeaderCheckbox:null,addDataSourceCheckbox:null,addFooterCheckbox:null,postCreate:function(){var t=this;this.inherited(arguments),i(this.exportButton,"click",function(){t.onPrint()}),i(this.cancelButton,"click",function(){t.onCancel()}),this.exportSelect=new d({class:"exportSelect",listClass:"esriGEOnDemandSelectSpacedOut",options:[],onChange:function(){t._currentSettings.commandId=t.exportSelect.get("value"),t._syncViewForSelectedCommand()}}).placeAt(this.exportSelectDiv),this.own(this.exportSelect),this.autoScaleCheckbox=new c(this.autoScaleLabel),this.autoScaleCheckbox.set("checked",!0),this.sizeList=new d({class:"sizeList",listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectUnlimitedTallList"}).placeAt(this.sizeListDiv),this.own(this.sizeList),this.portraitButton=new h({checked:!1,name:this.id}).placeAt(this.portraitRadioButtonDiv),this.own(this.portraitButton),this.portraitButton.startup(),i(this.portraitRadioButtonLabel,"click",function(){t.portraitButton.set("checked",!0)}),this.landscapeButton=new h({checked:!1,name:this.id}).placeAt(this.landscapeRadioButtonDiv),this.own(this.landscapeButton),this.landscapeButton.startup(),i(this.landscapeRadioButtonLabel,"click",function(){t.landscapeButton.set("checked",!0)}),this.addHeaderCheckbox=new c(this.headerLabel),this.addHeaderCheckbox.onClick=function(){this._syncHeaderTitleBlockVisibility()}.bind(this),this.addDataSourceCheckbox=new c(this.dataSourceLabel),this.addFooterCheckbox=new c(this.footerLabel),this.reportTitleTextBox=new s({value:"",placeHolder:x.titlePlaceholder}).placeAt(this.reportTitleTextBoxDiv),this.own(this.reportTitleTextBox),this.reportSubtitleTextBox=new s({value:"",placeHolder:x.subtitlePlaceholder}).placeAt(this.reportSubtitleTextBoxDiv),this.own(this.reportSubtitleTextBox),this.dataDrillingCheckbox=new c(this.dataDrillingLabel),this.dataDrillingCheckbox.set("checked",!0),l.setTooltipToNode(this.autoScaleInfoIcon,x.autoScaleRowsTooltip)},_currentSettings:null,update:function(t){this._currentSettings=e.mixin({},t),this._configureExportOptions(t),this._configurePageSize(t),this._configureHeaderAndFooter(t),this._syncViewForSelectedCommand()},_configureExportOptions:function(t){if(!t.exportCommands||!t.exportCommands.length)return void r.hide(this.exportOptionsBlock);r.show(this.exportOptionsBlock);var e=t.exportCommands.map(function(t){return{label:t.label,value:t.id}});this.exportSelect.set("options",e),this.exportSelect.set("value",t.commandId||e[0])},_syncViewForSelectedCommand:function(){this.exportButton.innerHTML=m[this._currentSettings.commandId],r.hide([this.staticExportSettings,this.dynamicExportSettings]),r.show(this._currentSettings.commandId===g.DYNAMIC_HTML?this.dynamicExportSettings:this.staticExportSettings),r[this._currentSettings.canAutoScale&&this._currentSettings.commandId!==g.DYNAMIC_HTML?"show":"hide"](this.autoScaleBlock)},_configureHeaderAndFooter:function(t){this.reportTitleTextBox.set("value",t.reportTitle||""),this.reportSubtitleTextBox.set("value",t.reportSubtitle||""),this._syncHeaderTitleBlockVisibility()},_syncHeaderTitleBlockVisibility:function(){r[this.addHeaderCheckbox.get("checked")?"show":"hide"](this.reportTitleBlock)},_configurePageSize:function(t){var e,i=!u.hasStandardSize(t.pageSettings.pagesize);if(i){var n=u.getPageDim(t.pageSettings.pagesize,t.pageSettings.orientation,{places:2});e=o.substitute(x.customWithDimensions,{w:n.w,h:n.h})}this.sizeList.set("options",p.getSupportedPageSizes(i,e)),this.sizeList.set("value",i?"custom":t.pageSettings.pagesize),this.portraitButton.set("checked","portrait"===t.pageSettings.orientation),this.landscapeButton.set("checked","landscape"===t.pageSettings.orientation)},getSettings:function(){var t=e.mixin({},this._currentSettings.pageSettings);return"custom"!==this.sizeList.get("value")&&(t.orientation=this.portraitButton.get("checked")?"portrait":"landscape",t.pagesize=this.sizeList.get("value")),{noAutoScale:!this.autoScaleCheckbox.get("checked"),addHeader:this.addHeaderCheckbox.get("checked"),addDataSource:this.addDataSourceCheckbox.get("checked"),addFooter:this.addFooterCheckbox.get("checked"),allowDataDrilling:this.dataDrillingCheckbox.get("checked"),reportTitle:this.reportTitleTextBox.get("value"),reportSubtitle:this.reportSubtitleTextBox.get("value"),pageSettings:t,commandId:this._currentSettings.commandId}},setState:function(t){this.autoScaleCheckbox.set("checked",!t.noAutoScale),this.addHeaderCheckbox.set("checked",t.addHeader),this.addDataSourceCheckbox.set("checked",t.addDataSource),this.addFooterCheckbox.set("checked",t.addFooter),this.dataDrillingCheckbox.set("checked",t.allowDataDrilling),this._syncHeaderTitleBlockVisibility(),this.exportSelect.options.some(function(e){return e.value===t.commandId})||(t.commandId=this.exportSelect.options[0]&&this.exportSelect.options[0].value),t.commandId&&(this.exportSelect.set("value",t.commandId),this.exportSelect.onChange())},onPrint:function(){},onCancel:function(){}})});