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

define(["./_SectionJsonCollector","../../../infographics/InfographicTypes"],function(o,e){var n={},s="field",c={process:function(o,e,n,t,i){var r=t;t=function(o,e,n){o&&r.apply(this,arguments)};var a={processLevel:e,objJson:n,processFunc:t,ignoreComparisonCalculators:i&&i.ignoreComparisonCalculators};if(o===e&&(o!==s||e!==s))return void t(n);"document"===o?c._processTemplateJson(n,a):"section"===o?c._processSectionJson(n,a):"table"===o?c._processTableJson(n,a,null):"tableRow"===o?c._processTableDataObj(n,a,null):o===s&&c._processFieldInfo(n,a,null)},_processTemplateJson:function(e,n){e.sectionsTables?e.sectionsTables.forEach(function(o){c._processTableJson(o,n)}):o.collectSectionJsons(e,{saveParentInfo:!1,processFieldInfoFunc:function(o){n.processLevel===s&&n.processFunc(o)}}).forEach(function(o){c._processSectionJson(o,n)})},_processSectionJson:function(o,e){if("section"===e.processLevel)return void e.processFunc(o);o.stack&&o.stack.forEach(function(o){"sectionElement"===e.processLevel?e.processFunc(o):"table"===o.id&&("table"===e.processLevel?e.processFunc(o):c._processTableJson(o,e))})},_processTableJson:function(o,e,n){o.data.data.forEach(function(o){"tableRow"===e.processLevel?(e.processFunc(o,n),c._processTableDataObj(o,e,n)):c._processTableDataObj(o,e,n)}),o.backgroundSectionJson&&c._processSectionJson(o.backgroundSectionJson,e),o.foregroundSectionJson&&c._processSectionJson(o.foregroundSectionJson,e),o.backgroundFloatingTablesSectionJson&&c._processSectionJson(o.backgroundFloatingTablesSectionJson,e),o.foregroundFloatingTablesSectionJson&&c._processSectionJson(o.foregroundFloatingTablesSectionJson,e)},_processTableDataObj:function(o,e,n){if(o.fieldInfos)for(var s in o.fieldInfos)c._processFieldInfo(o.fieldInfos[s],e,n)},_processFieldInfo:function(o,e,n){function t(o,n){e.processLevel===s&&e.processFunc(o,n)}if(o){if(t(o,n),function(o){o&&o.triggerJson&&o.triggerJson.fieldInfo&&o.templateName!==o.triggerJson.fieldInfo.templateName&&t(o.triggerJson.fieldInfo,o)}(o),o.linkFieldInfo&&t(o.linkFieldInfo,o),o.isInfographic&&c._processInfographicFieldInfo(o,e),o.isRichText&&(o.richTextJson.fieldInfos.forEach(function(n){c._processFieldInfo(n,e,o)}),o.richTextJson.specialFieldInfos.forEach(function(n){c._processFieldInfo(n,e,o)})),o.isChart){var i=o.chartJson.visualProperties;i.chartIcons&&i.chartIcons.forEach(function(n){c._processFieldInfo(n,e,o)}),i.floatingIcons&&i.floatingIcons.forEach(function(n){c._processTableJson(n,e,o)}),i.floatingTexts&&i.floatingTexts.forEach(function(n){c._processTableJson(n,e,o)}),o.chartJson.seriesItems.forEach(function(n){n.points.forEach(function(n){e.ignoreComparisonCalculators&&o.chartJson.comparisonInfo||c._processFieldInfo(n.fieldInfo,e,o),n.iconFieldInfo&&c._processFieldInfo(n.iconFieldInfo,e,o),n.captionFieldInfo&&c._processFieldInfo(n.captionFieldInfo,e,o)})})}o.isReportSection&&o.sectionJson&&c._processSectionJson(o.sectionJson,e)}},_processInfographicFieldInfo:function(o,n){var s=o.infographicJson;switch(s.type){case e.STATIC:if(s.header&&c._processTableJson(s.header,n,o),s.variableTables&&s.variableTables.forEach(function(e){e.variable&&c._processFieldInfo(e.variable.fieldInfo,n,o),e.description&&e.description.fieldInfo&&c._processFieldInfo(e.description.fieldInfo,n,o)}),s.dataDrilling)for(var t in s.dataDrilling){var i=s.dataDrilling[t];i&&i.sectionJson&&c._processSectionJson(i.sectionJson,n)}break;case e.AGE_PYRAMID:case e.TAPESTRY:case e.PRIZM5:case e.RELATED_VARS:case e.ONE_VAR:!n.ignoreComparisonCalculators&&s.fieldInfos&&s.fieldInfos.forEach(function(e){c._processFieldInfo(e,n,o)});break;case e.AREA_DETAILS:s.titleSectionJson&&c._processSectionJson(s.titleSectionJson,n,o),s.attributesSectionJson&&c._processSectionJson(s.attributesSectionJson,n,o),s.notesSectionJson&&c._processSectionJson(s.notesSectionJson,n,o);break;case e.LOCATOR_TABLE:s.titleSectionJson&&c._processSectionJson(s.titleSectionJson,n),c._processSectionJson(s.headerSectionJson,n),c._processSectionJson(s.dataSectionJson,n),s.summarySectionJson&&c._processSectionJson(s.summarySectionJson,n),s.summaryFooterSectionJson&&c._processSectionJson(s.summaryFooterSectionJson,n);break;case e.COMPARISON_TABLE:s.titleSectionJson&&c._processSectionJson(s.titleSectionJson,n),n.ignoreComparisonCalculators||c._processSectionJson(s.dataSectionJson,n)}}};return n.DOCUMENT="document",n.SECTION="section",n.TABLE="table",n.SECTION_ELEMENT="sectionElement",n.TABLE_ROW="tableRow",n.FIELD=s,n.process=c.process,n.processTemplateFieldInfos=function(o,e,n){c.process("document",s,o,e,n)},n.processSectionFieldInfos=function(o,e,n){c.process("section",s,o,e,n)},n.processSectionElements=function(o,e){c.process("document","sectionElement",o,e)},n.processTableFieldInfos=function(o,e,n){c.process("table",s,o,e,n)},n.hasMultiFeatureChart=function(o){var e=!1;return n.processTemplateFieldInfos(o,function(o){o.isChart&&(e=e||o.chartJson&&!!o.chartJson.isMultiFeatureChart)}),e},n.hasComparisonInfographicTable=function(o){var s=!1;return n.processTemplateFieldInfos(o,function(o){o.isInfographic&&(s=s||o.infographicJson&&o.infographicJson.type===e.COMPARISON_TABLE)}),s},n.isGraphicReport=function(o){return!!o.sectionsTables},n.hasDynamicColumns=function(o){return n._checkTableAttributes(o,function(o){return o.dynamicColumns>0})},n.hasDynamicRows=function(o){return n._checkTableAttributes(o,function(o){return o.dynamicRows>0})},n._checkTableAttributes=function(o,e){var s;return n.isGraphicReport(o)?n.processTemplateFieldInfos(o,function(o){o.isReportSection&&o.sectionJson&&o.sectionJson.stack&&o.sectionJson.stack.some(function(o){if("table"===o.id&&o.attributes&&e(o.attributes))return s=!0,!0})}):s=n.collectSectionJsons(o).some(function(o){return o.stack&&o.stack.some(function(o){return"table"===o.id&&o.attributes&&e(o.attributes)})}),s},n.hasMultiFeatureSections=function(o){return!!n.isGraphicReport(o)&&(n.hasMultiFeatureChart(o)||n.hasDynamicColumns(o)||n.hasComparisonInfographicTable(o))},n.collectSectionJsons=o.collectSectionJsons,n.getParentBox=o.getParentBox,n.getParentStyle=o.getParentStyle,n});