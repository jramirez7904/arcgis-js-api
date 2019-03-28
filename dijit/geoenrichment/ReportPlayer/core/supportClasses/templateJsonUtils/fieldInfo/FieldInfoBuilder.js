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

define(["./utils","dojo/i18n!esri/nls/jsapi"],function(e,t){function a(e){Object.keys(e).forEach(function(t){var a=e[t];void 0!==a&&null!==a||delete e[t]})}t=t.geoenrichment.dijit.ReportPlayer.ReportPlayer;var i={};i.NUMBER="n/",i.createFieldInfoFromCalculator=function(t,i,r){if(!t)return null;var l="function"==typeof t.getDescriptionWithType?t:null,n=l?l.variable:t,o=r&&r.format,s=r&&r.autoformatCurrency,u=r&&r.additionalText,d=r&&r.calculatorName,m=r&&r.defaultDistanceUnits,c=r&&r.summaryType,f=l&&l.getToggleGroup&&l.getToggleGroup(),p={comparisonIndex:r&&r.comparisonIndex,alias:l?l.getDescriptionWithType()||l.getAliasWithType():n.description||n.alias,hasVariable:!0,variableID:n.id,fullName:n.fullName,fieldCategory:n.fieldCategory,vintage:n.vintage,type:n.type,statefulName:f?f.value:"n/"+n.fullName,summaryType:c},I=l?l.getCalcType().charAt(0):"n";return p.name=e.name.createFieldNameFromVariable(n,I),o?e.format.setFieldInfoFormat(p,o):(p.decimals=n.precision,p.showCurrency=!(!s||"n"!==I||!n.units||"CURRENCY"!==n.units.toUpperCase()),p.showPercent=!p.showCurrency&&("p"===I||"n"===I&&n.units&&"PCT"===n.units.toUpperCase()),p.useThousandsSeparator=!0),n.isWebMap&&(p.isWebMap=!0,p.webMapFieldName=n.fieldName,p.webMapField=n.field,p.webMapId=n.webMapId,!o&&n.field&&n.field.format&&(p.decimals=n.field.format.places,p.useThousandsSeparator=!1!==n.field.format.digitSeparator)),n.customDataCollection&&(p.isCustomDataCollection=!0,p.customDataCollectionId=n.customDataCollection.id,p.customDataCollectionUrl=n.customDataCollection.url,p.customDataCollectionPortalUrl=n.customDataCollection.portalUrl),n.isSiteAttribute&&(p.isSiteAttribute=!0,p.attribute=n.attribute,p.type=n.attribute.type,!o&&n.attribute.places>0&&(p.decimals=n.attribute.places)),n.isDataLayerAttribute&&(p.isDataLayerAttribute=!0,p.layerID=n.layerID,p.layerUrl=n.layerUrl,p.layerName=n.layerName,p.attribute=n.attribute,p.type=n.attribute.type,!o&&n.attribute.decimals>0&&(p.decimals=n.attribute.decimals),"DISTANCE"===n.attribute.name&&(p.units=n.attribute.units||m||"esriMiles")),"string"==typeof u&&(p.additionalText=u),p.usedFields=n.usedFields,p.expressionText=n.expressionText,e.name.provideQualifiedFieldInfoTemplateName(p,d),a(p),p},i.fieldInfoToVariable=function(e){if(!e.hasVariable)return null;var t={id:e.variableID,fullName:e.fullName,fieldCategory:e.fieldCategory,vintage:e.vintage,type:e.type,precision:e.decimals,usedFields:e.usedFields,expressionText:e.expressionText};return e.isWebMap&&(t.isWebMap=!0,t.fieldName=e.webMapFieldName,t.field=e.webMapField,t.webMapId=e.webMapId),e.isSiteAttribute&&(t.isSiteAttribute=!0,t.attribute=e.attribute),t},i.createFieldInfoFromScript=function(i,r,l){var n=l&&l.format,o=l&&l.additionalText,s=l&&l.calculatorName;i=i||{},i.name=i.name||e.name.DEFAULT_SCRIPT_NAME,i.alias=i.alias||t.scriptNameDefault,i.decimals=Number(i.decimals)||0;var u={comparisonIndex:l&&l.comparisonIndex};return u.name=e.name.createFieldNameFromScript(i),e.name.provideQualifiedFieldInfoTemplateName(u,s),u.script=i,n?e.format.setFieldInfoFormat(u,n):(u.decimals=Number(i.decimals),u.showCurrency=!1,u.showPercent=!1,u.useThousandsSeparator=!0),"string"==typeof o&&(u.additionalText=o),a(u),u},i.createFieldInfoFromImage=function(e,t){return{isImage:!0,imageJson:e,triggerJson:t}},i.createFieldInfoFromShape=function(e){return{isShape:!0,shapeJson:e}},i.createFieldInfoFromChart=function(e){return{isChart:!0,chartJson:e}},i.createFieldInfoFromInfographic=function(e){return{isInfographic:!0,infographicJson:e}},i.createFieldInfoFromSection=function(e){return{isReportSection:!0,sectionJson:e}},i.createFieldInfoFromMissingVariable=function(e,t){return{name:e&&e.substr(e.indexOf(".")+1),templateName:e,isMissing:!0,alias:t}};var r=/^\[\w+\]$/,l=/\[\w+\]/;i.createFieldInfoFromLabel=function(t,a){if("string"!=typeof t)return null;t=t.trim();var n=r.test(t);if(!a||n)return n?(t=t.replace(/\[|\]/g,"").toUpperCase(),i.createFieldInfoFromSpecialFieldName(e.fields.uiToTemplate(t))):null;if(!l.test(t))return null;var o=e.richText.collectFieldInfosFromRenderedXMLString(t);return o&&e.richText.createFieldInfoFromRichText(o.xmlString,o.fieldInfos,o.specialFieldInfos)},i.createFieldInfoFromSpecialFieldName=function(t,a){if("string"!=typeof t)return null;var i,t=t.substr(t.indexOf(".")+1),r=t.toUpperCase();if(function(){"GROUPCOUNT"===r?i={name:e.fields.GROUPCOUNT_FIELD_NAME,alias:e.fields.GROUPCOUNT_FIELD_ALIAS}:"CURRDATE"===r?i={name:e.fields.DATE_FIELD_NAME,alias:e.fields.DATE_FIELD_ALIAS,format:a||e.fields.DATE_FIELD_DEFAULT_FORMAT}:"SITENOTE"===r?i={name:e.fields.SITENOTE_FIELD_NAME,alias:e.fields.SITENOTE_FIELD_ALIAS}:"SITENOTES"===r&&(i={name:e.fields.SITENOTES_FIELD_NAME,alias:e.fields.SITENOTES_FIELD_ALIAS})}(),i)return i;var l=e.fields.templateToUIHeader(r);if(l)i={name:e.fields.qualifyTemplateHeaderName(r),alias:l};else{var n=e.fields.templateToUIReportVar(r);n&&(i={name:n,alias:n})}return i};var n=/_P$/i;return i.isFieldInfoInPercentState=function(e){return e&&e.statefulName&&("p"===e.statefulName.charAt(0)||n.test(e.statefulName))},i});