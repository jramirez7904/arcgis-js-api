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

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/OnDemandSelect","../../dataProvider/supportClasses/AreasInfoTemplateBuilder","./ComparisonListUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],function(e,t,i,s,a,n,r,o,u){var d=e(a.itemRenderers.DefaultItemRenderer,{createLabelNode:!0,fields:null,addFeatureMessage:null,featureIsAlreadyAddedMessage:null,removeFeatureMessage:null,canAddFeatures:!1,canRemoveFeatures:!1,_createImageNode:function(e,a){var n=this;if(e.isArea){if(this.fields&&!o.isMobileDevice()){var r=s.create("div",{class:"esriGESpaceBeforeBig dijitInline esriGEInfoIcon esriGEComparisonSelect_infoIcon"},a);u.setTooltipToNode(r,function(){return n._buildGeographyTooltip(e)},{notRestricted:!0})}if(this.canRemoveFeatures){var d=s.create("div",{class:"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_removeButton"},a);this.isAdded(e)&&this.canRemoveFeature(e)?(t(d,"click",function(t){t.stopPropagation(),n.onRemoveFeature(e)}),u.setTooltipToNode(d,this.removeFeatureMessage)):i.add(d,"disabled")}if(this.canAddFeatures){var l=s.create("div",{class:"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_addButton"},a);this.isAdded(e)?(i.add(l,"disabled"),u.setTooltipToNode(l,this.featureIsAlreadyAddedMessage)):(t(l,"click",function(t){t.stopPropagation(),n.onAddFeature(e)}),u.setTooltipToNode(l,this.addFeatureMessage))}}},_buildGeographyTooltip:function(e){var t=this.fields.map(function(t){return{label:t.label,value:t.formatFunction(e.attributes[t.name])}});return n.buildAttributesTable(null,t,{padding:10,maxHeight:document.body.clientHeight-40})},isAdded:function(e){},onAddFeature:function(e){},canRemoveFeature:function(e){},onRemoveFeature:function(e){}});return e(a,{listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList600",fields:null,addFeatureMessage:null,featureIsAlreadyAddedMessage:null,removeFeatureMessage:null,canAddFeatures:!1,canRemoveFeatures:!1,showTitleForSingleGroup:!1,buildRendering:function(){var e=this;o.isMobileDevice()&&(this.listClass+=" esriGEComparisonSelectListMobile");var t=new d;t.fields=this.fields,t.addFeatureMessage=this.addFeatureMessage,t.featureIsAlreadyAddedMessage=this.featureIsAlreadyAddedMessage,t.canAddFeatures=this.canAddFeatures,t.isAdded=function(t){return e.isFeatureAdded(t.levelId,t.featureId,t.attributes)},t.onAddFeature=function(t){e.closePopup(),e.onAddFeature(t.levelId,t.featureId,t.attributes)},t.canRemoveFeatures=this.canRemoveFeatures,t.removeFeatureMessage=this.removeFeatureMessage,t.canRemoveFeature=function(t){return e.canRemoveFeature(t.levelId,t.featureId,t.attributes)},t.onRemoveFeature=function(t){e.closePopup(),e.onRemoveFeature(t.levelId,t.featureId,t.attributes)},this.itemRenderer=t,this.inherited(arguments)},setGroups:function(e){this.set("options",r.getOptionsFromGroups(e,{hideTitleForSingleGroup:!this.showTitleForSingleGroup}))},setFeatures:function(e){this.set("options",r.getListOptionsFromFeatures(e))},setDefaultValue:function(e){var t=r.getDefaultOptionValue(this.options);return this.set("value",t),e&&e.emitEvent&&this.onChange(),t},isFeatureAdded:function(e,t,i){return!1},canRemoveFeature:function(e,t,i){return!0},onChange:function(){var e=this.getSelectedItem();e&&this.onFeatureSelected(e.levelId,e.featureId,e.attributes)},getFeatureIndexById:function(e,t){return r.getFeatureIndexInOptionsById(this.options,e,t)},selectFeatureByIndex:function(e){var t=r.getOptionValueByFeatureIndex(this.options,e||0);return this.set("value",t),t},getNumFeatures:function(){return r.getNumFeaturesFromOptions(this.options)},getValue:function(){var e=this.getSelectedItem();return e&&{value:e.value,featureId:e.featureId,levelId:e.levelId,attributes:e.attributes}},setValue:function(e,t){this.set("value",e+"."+t)},getSelectedAttributes:function(){var e=this.getSelectedItem();return e&&e.attributes},setSelectedAttributes:function(e){e&&this.setValue(e.StdGeographyLevel,e.StdGeographyID)},onFeatureSelected:function(e,t,i){},onAddFeature:function(e,t,i){},onRemoveFeature:function(e,t,i){}})});