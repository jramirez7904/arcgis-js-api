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

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartTypes","../../ChartLineStyles","../../ChartLineMarkers","../../AxisUtil","../utils/ChartDataUtil","../utils/TooltipInfoBuilder","../ChartPlots","esri/dijit/geoenrichment/utils/ColorUtil","./_AxisBuilder","./_PointLabelUtil"],function(e,a,i,t,r,s,n,l,o,u,m,c){var p={calcLineStyle:function(e,s,n,l){var o=l.comparisonInfo,m=l.themeSettings,c=l.visualProperties,p=a.calcColorForPoint({point:null,seriesItem:e,pointIndex:0,seriesIndex:s,numSeries:n.length,chartType:i.LINE,themeSettings:m,isComparisonSeries:e.isComparisonSeries,comparisonInfo:o,isMultiFeature:l.isMultiFeatureChart}),S=c.lineThickness||1,h=c.fillLineArea?c.lineAreaOpacity:1,d=t.SOLID,V=void 0;if(e.isComparisonSeries&&o&&(o.lineThickness&&(S=o.lineThickness),o.lineStyle&&(d=o.lineStyle),V=o.lineMarker?r.getMarkerPath(o.lineMarker):a.getComparisonSymbol()),h<1&&p){var p=u.toColor(p);p.a=h}return{color:p,width:S,style:t.toGFXValue(d),marker:V}}};return{calcSeriesLine:function(a){function r(e){return v?2*e+1:e}var n=a.chart,u=a.chartType,S=a.visualProperties,h=a.seriesItems,d=1===h.length,V=a.seriesItemsWithComparison||h,v=a.isSecondaryPlot,f=a.reverseXY||u===i.VERTICAL_LINE,x=a.comparisonInfo,I=a.themeSettings,y=a.viewModel,g=[],C={minYValue:1/0,maxYValue:-1/0,stackedValues:S.isStacked?[]:null,crossSeriesStats:null},k=a.primaryPlotStat&&a.primaryPlotStat.pointIndexToTooltipsHash||{},P=V.map(function(e,i){return this._collectStatisticsForSeries(a,e,r(i),C)},this);if(C.crossSeriesStats=a.isMultiFeatureChart&&this._collectCrossSeriesStats(P),V.forEach(function(e,i){if(e.points.length){var s=p.calcLineStyle(e,r(i),V,a),m={name:e.label,data:[],isComparisonSeries:e.isComparisonSeries,params:{plot:v?o.SECONDARY:void 0,stroke:{color:s.color,width:s.width,style:s.style},fill:s.color,outline:!1}},h=P[i];e.points.forEach(function(r,o){function p(){return v&&a.oppositeDirections&&1===i?-1:1}function V(){return v&&!a.oppositeDirections&&2===a.primarySeries.length?0===i?-.15:.15:0}if(!r.hidden){var I=h.values[o],g=I||0,P=o+1;c.updatePointIndexToLabelMap(n,P,i,r,y);var M=a.isMultiFeatureChart&&C.crossSeriesStats[o],b=l.getTooltipInfo({yValue:I,pointLabel:c.getPointLabel(r,y),seriesLabel:e.label,minInSeriesValue:h.minInSeries,maxInSeriesValue:h.maxInSeries,sumInSeriesValue:h.valuesSum,absSumInSeriesValue:h.absValuesSum,avgInSeriesValue:h.avgInSeries,minInAreasValue:M&&M.min,maxInAreasValue:M&&M.max,sumInAreasValue:M&&M.sum,absSumInAreasValue:M&&M.absSum,avgInAreasValue:M&&M.avg,visualProperties:S,chartType:u,isMultiFeature:a.isMultiFeatureChart,color:s.color,conditionalStyling:null,fieldInfo:r.fieldInfo,isThisAreaSpecific:x&&!a.isMultiFeatureChart?!e.isComparisonSeries:void 0,isThisAreaSingleSeries:d,decimals:r.value&&r.value.decimals}),A=k[P]=k[P]||[];A.push(b),b.getGroup=function(){return A};var T={originalValue:I,isUnavailableData:isNaN(I),unsortedIndex:o,seriesIndex:i,name:c.getPointLabel(r,y),valuesSumsInSeries:h.absValuesSum,point:r,fill:"#FFFFFF",stroke:{color:s.color,width:1,style:t.toGFXValue(t.SOLID)},outline:!1,tooltip:b};y.isGraphicStyle?s.marker&&(T.marker=s.marker):T.marker=void 0,f?(T.x=g*p(),T.y=P+V(),T.valueProp="x"):(T.x=P+V(),T.y=g*p(),T.valueProp="y"),S.yAxis.showValuesAsWeightsInSeries&&(T[f?"x":"y"]/=h.absValuesSum/100),m.data.push(T)}}),g.push(m)}},this),C.stackedValues&&(C.stackedValues.sort(function(e,a){return a-e}),C.minYValue=C.stackedValues[C.stackedValues.length-1],C.maxYValue=C.stackedValues[0]),v){if(a.primaryPlotStat){a.primaryPlotStat.minYValue=Math.min(C.minYValue,a.primaryPlotStat.minYValue),a.primaryPlotStat.maxYValue=Math.max(C.maxYValue,a.primaryPlotStat.maxYValue);var M=s.getPrettifyYAxisParameters(a.primaryPlotStat.minYValue,a.primaryPlotStat.maxYValue,{baseLineValue:S.yAxis.baseLineValue,renderColumnBarsInOppositeDirections:a.oppositeDirections,previewBelowZero:!y.dynamicReportInfo});e.mixin(n.axes.y.opt,{majorTickStep:M.majorTickStep,minorTickStep:M.minorTickStep,min:M.min,max:M.max})}if(1===a.primarySeries.length){var b=f?"y":"x",A=[];a.primarySeries[0].data.forEach(function(e){var a=g[0].data[e.unsortedIndex];a[b]=e.x,A.push(a)}),g[0].data=A}}else m.prettifyYAxis(C.minYValue,C.maxYValue,n,S,u,I,y);return g},_collectStatisticsForSeries:function(e,a,i,t){var r=e.chartType,s=e.viewModel,l=e.visualProperties,o=e.seriesItems,u=e.currentFeatureIndex,m=e.isMultiFeatureChart,c=e.comparisonFeatureAttributes,p=e.isSecondaryPlot,S=[],h=0,d=0,V=1e6,v=-1e6,f=2===o.length&&e.oppositeDirections&&p?n.CHART_DATA_SMOOTH:null;return a.points.forEach(function(e,t){var o=e.hidden?void 0:n.getPointValue({point:e,index:t,seriesIndex:i,maxValue:!1,chartType:r,visualProperties:l,viewModel:s,currentFeatureIndex:m?i:u,chartData:f,isComparisonSeries:a.isComparisonSeries,comparisonFeatureAttribute:c&&c[0],allowNegativeValuesInPreview:!1});S[t]=o,o=o||0,e.hidden||(h+=o,d+=Math.abs(o),V=Math.min(V,o),v=Math.max(v,o))}),a.points.forEach(function(e,a){if(!e.hidden){var i=S[a],i=l.yAxis.showValuesAsWeightsInSeries?i/d*100:i;t.stackedValues?(t.stackedValues[a]=t.stackedValues[a]||0,t.stackedValues[a]+=i):(t.minYValue=Math.min(i,t.minYValue),t.maxYValue=Math.max(i,t.maxYValue))}}),{values:S,valuesSum:h,absValuesSum:d,minInSeries:V,maxInSeries:v,avgInSeries:h/a.points.length}},_collectCrossSeriesStats:function(e){return e.length?e[0].values.map(function(a,i){var t=0,r=0,s=1e6,n=-1e6;return e.forEach(function(e){var a=e.values[i]||0;t+=a,r+=Math.abs(a),s=Math.min(s,a),n=Math.max(n,a)}),{sum:t,absSum:r,min:s,max:n,avg:t/e.length}}):[]}}});