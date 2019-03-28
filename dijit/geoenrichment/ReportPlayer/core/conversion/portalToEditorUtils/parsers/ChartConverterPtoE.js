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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/JsonXmlConverter","../../../charts/utils/ChartJsonUtil","../../ConversionUtil","esri/dijit/geoenrichment/ReportPlayer/core/charts/utils/ChartTypes","esri/dijit/geoenrichment/ReportPlayer/core/charts/legends/ChartLegendTypes","./_FieldInfoBuilder","dojo/i18n!esri/nls/jsapi"],function(e,t,a,i,l,r,n,o,s,u){function g(e,t){var a=Number(e);return isNaN(a)?void 0:t?t(a):a}function c(e,t){return g(e,t.revisionVersion>=1.7?r.ptToPx:null)}function d(e){return r.ptToPxObj(r.parseStyleString(e))}function b(e,t,a){return i.queryJson(e,"series").filter(function(e){return e.tags&&e.tags[0]&&"point"===e.tags[0].name}).map(function(a){return a.tags?(a.attributes=a.attributes||{},{label:a.attributes.Text||"",color:m(a.attributes.color),thickness:a.attributes.thickness,points:a.tags.map(function(r,o){r.attributes=r.attributes||{};var g=(e.attributes.type===n.GAUGE||e.attributes.type===n.WAFFLE)&&o===a.tags.length-1,c=r.tags&&r.tags[0],d=c&&c.attributes&&c.attributes.f,b=d&&s.getCalculatorOrScriptFieldInfo(d,t);if(b||g){if(g&&(b=null),b&&b.isMissing){var h=r.attributes.Text;if(!h&&t.variableProvider.isPlayerOnly){var f=t.variableProvider.toCalculator(b.templateName);h=f&&f.variable.alias}b.alias=h?h+" ("+u.missingVariable+")":u.missingVariable}var p=r.attributes.CaptionField,y=p&&s.getCalculatorOrScriptFieldInfo(p,t),L=i.queryJson(r,"pointIcon")[0],S=L&&t.parsers.getParser("field").parseField(L.tags[0],L,null,t);return l.createChartPoint(b,r.attributes.Text||"",m(r.attributes.color),S,y)}}).filter(function(e){return!!e})}):null}).filter(function(e){return e&&e.points&&!!e.points.length})}function h(t,a,i){var l={gridLines:t.gridlines,gridLinesCentered:t.gridlinesCentered,gridLinesOpacity:g(t.gridlinesOpacity),gridLinesColor:m(t.gridlinesColor),gridLinesThickness:c(t.gridlinesThickness,i),gridLinesStyle:t.gridlinesStyle,gridStripes:t.gridStripes,gridStripesColor:m(t.gridStripesColor),gridStripesColorAlt:m(t.gridStripesColorAlt)};return a&&e.mixin(l,{hideBaseLine:void 0!==t.baseLine?!t.baseLine:t.hideBaseLine,baseLineColor:m(t.baseLineColor),baseLineOpacity:g(t.baseLineOpacity),baseLineThickness:c(t.baseLineThickness,i),baseLineStyle:t.baseLineStyle,baseLineValue:g(t.baseLineValue)}),l}function f(e){return{dataLabels:e.dataLabels,dataLabelsShowLabelUnder:e.dataLabelsShowLabelUnder,dataLabelsDecimals:y(e.CustomPercentFormat||e.CustomValueFormat),dataLabelsStyle:d(e.dataLabelsStyle),dataLabelsLabelStyle:d(e.dataLabelsLabelStyle?e.dataLabelsLabelStyle:e.dataLabelsStyle),dataLabelsAltColor:m(e.dataLabelsAltColor),dataLabelsEnableAltColor:e.dataLabelsEnableAltColor,dataLabelsInside:e.dataLabelsInside,dataLabelsStackedInColumns:e.dataLabelsStackedInColumns,dataLabelsHorizontalAlign:e.dataLabelsHorizontalAlign,dataLabelsVerticalAlign:e.dataLabelsVerticalAlign,dataLabelsShowValuePercentSymbol:e.dataLabelsShowValuePercentSymbol,dataLabelsShowValueCurrencySymbol:e.dataLabelsShowValueCurrencySymbol,dataLabelsAngle:g(e.dataLabelsAngle),dataLabelsMaxWidth:g(e.dataLabelsMaxWidth,r.ptToPx)}}function p(e){var t=i.queryJson(e,"BackImage")[0];return t&&t.tags&&t.tags[0].text?a.base64DataToDataURL(t.tags[0].text):null}function y(e){return"string"!=typeof e?0:(e=e.replace("%",""),"0"===e?0:e.replace("0.","").length)}function m(e){return e&&"string"==typeof e&&(e=6===e.length&&-1===e.indexOf("#")?"#"+e:t.toCSSColor(e)),e}u=u.geoenrichment.dijit.ReportPlayer.ReportPlayer;var L={};return L.portalToEditor=function(t,a,s){var u,y=i.queryJson(t,"comparisonInfo")[0];if(y){var L=y.attributes.name,S=s.templateJson.metadata.comparisonCalculatorsHash[L];S&&(u={calculatorName:L,chartType:y.attributes.chartType,color:y.attributes.color,lineThickness:c(y.attributes.lineThickness,s),lineStyle:y.attributes.lineStyle,lineMarker:y.attributes.lineMarker,levels:S.levels})}var w=b(t,s,u);if(!w.length)return null;var C=t.attributes,v=i.queryJson(t,"chartTitle")[0],P=i.queryJson(t,"legend")[0],x=i.queryJson(t,"xAxis")[0],k=i.queryJson(t,"yAxis")[0],A=i.queryJson(t,"chartIcon"),A=i.queryJson(t,"chartIcon"),T=i.queryJson(t,"floatingIcon"),B=i.queryJson(t,"floatingText"),I=i.queryJson(t,"trigger");v.attributes=v.attributes||{};var O=x&&x.attributes,V=k&&k.attributes,F=O,M=V;s.isGraphicReport&&s.revisionVersion<1.3&&(F=V,M=O),w.forEach(function(e){e.thickness=g(e.thickness)});var J;n.isColumnBarLike(C.type)&&(J=w[0].thickness>1?"Large":w[0].thickness<1?"Small":"Medium");var R=x&&x.tags&&x.tags[0].attributes&&x.tags[0].attributes,q=k&&k.tags&&k.tags[0].attributes&&k.tags[0].attributes,G=p(t),j={isChart:!0,type:C._type||C.type,isMultiFeatureChart:!!C.isMultiFeatureChart,seriesItems:w,visualProperties:e.mixin({width:r.ptToPx(C.width),height:r.ptToPx(C.height),backgroundColor:m(C.backColor),panelBackgroundColor:m(C.panelBackgroundColor),barBorders:C.barBorders,view3D:!!C.view3D,origin:g(C.origin),lineThickness:n.isLineLike(C.type)?c(w[0].thickness,s):void 0,columnThickness:J,backgroundImageData:G,title:{text:v.attributes.text,align:v.attributes.align&&v.attributes.align.toLowerCase(),style:d(v.attributes.style),verticalShift:g(v.attributes.verticalShift,r.ptToPx)},xAxis:O&&e.mixin({show:"None"!==O.placement,hideLine:void 0!==O.line?!O.line:O.hideLine,showTicks:O.ticks,ticksInside:O.ticksInside||void 0,hideLabels:O.hideLabels||void 0,placement:"OtherSide"===O.placement?"OtherSide":void 0,title:R&&R.text,titleStyle:R&&d(R.style),style:d(O.style),labelsAngle:g(O.labelsAngle),lineColor:m(O.lineColor)},h(F,!1,s)),yAxis:V&&e.mixin({show:"None"!==V.placement,hideLine:void 0!==V.line?!V.line:V.hideLine,showTicks:V.ticks,ticksInside:V.ticksInside,hideLabels:V.hideLabels||void 0,placement:"OtherSide"===V.placement?"OtherSide":void 0,title:q&&q.text,titleStyle:q&&d(q.style),style:d(V.style),labelsAngle:g(V.labelsAngle),lineColor:m(V.lineColor),showPercentSymbol:V.showPercentSymbol,showCurrencySymbol:V.showCurrencySymbol,showSymbolForAllLabels:V.showSymbolForAllLabels,showValuesAsWeightsInSeries:V.showValuesAsWeightsInSeries},h(M,!0,s)),isStacked:C.isStacked,columnBarGap:g(C.columnBarGap,r.ptToPx),columnBarOpacity:g(C.columnBarOpacity),renderColumnBarsInOppositeDirections:C.renderColumnBarsInOppositeDirections,showColumnBarBackground:C.showColumnBarBackground,columnBarBackgroundColor:m(C.columnBarBackgroundColor),columnBarBackgroundOpacity:g(C.columnBarBackgroundOpacity),columnBarLineOpacity:g(C.columnBarLineOpacity),columnBarLineColor:m(C.columnBarLineColor),columnBarLineThickness:g(C.columnBarLineThickness,r.ptToPx),columnBarLineStyle:C.columnBarLineStyle,fillLineArea:C.fillLineArea,lineAreaOpacity:C.lineAreaOpacity,donutHolePercent:g(C.donutHolePercent),donutGap:g(C.donutGap),donutArcPercent:g(C.donutArcPercent),gaugeHolePercent:g(C.gaugeHolePercent),gaugeRangeMin:g(C.gaugeRangeMin),gaugeRangeMax:g(C.gaugeRangeMax),gaugeGap:g(C.gaugeGap),gaugeStartAngle:g(C.gaugeStartAngle),gaugeArcPercent:g(C.gaugeArcPercent),gaugeLabelStyle:d(C.gaugeLabelStyle),gaugeLabelPlacement:C.gaugeLabelPlacement||void 0,gaugeShowArrow:C.gaugeShowArrow||void 0,gaugeArrowLineColor:m(C.gaugeArrowLineColor),gaugeArrowFillColor:m(C.gaugeArrowFillColor),gaugeConditionalStylingOthers:void 0!==C.gaugeConditionalStylingIgnoreOthers?C.gaugeConditionalStylingIgnoreOthers:C.gaugeConditionalStylingOthers||void 0,gaugeConditionalStylingLabel:C.gaugeConditionalStylingLabel||void 0,gaugeShowFromToLabels:C.gaugeShowFromToLabels||void 0,gaugeFromLabelStyle:d(C.gaugeFromLabelStyle),gaugeToLabelStyle:d(C.gaugeToLabelStyle),waffleDirection:C.waffleDirection||void 0,waffleShowWholePictures:C.waffleShowWholePictures||void 0,waffleRangeMin:g(C.waffleRangeMin),waffleRangeMax:g(C.waffleRangeMax),waffleLabelPlacement:C.waffleLabelPlacement||void 0,waffleLabelOffset:g(C.waffleLabelOffset,r.ptToPx),waffleHideValue:C.waffleHideValue||void 0,waffleHideLabel:C.waffleHideLabel||void 0,waffleShowLabelAbove:C.waffleShowLabelAbove||void 0,waffleValueStyle:d(C.waffleValueStyle),waffleLabelStyle:d(C.waffleLabelStyle),waffleColumnSpace:g(C.waffleColumnSpace,r.ptToPx),waffleRowSpace:g(C.waffleRowSpace,r.ptToPx),waffleConditionalStylingOthers:void 0!==C.waffleConditionalStylingIgnoreOthers?C.waffleConditionalStylingIgnoreOthers:C.waffleConditionalStylingOthers||void 0,waffleConditionalStylingValue:C.waffleConditionalStylingValue||void 0,waffleConditionalStylingLabel:C.waffleConditionalStylingLabel||void 0,waffleNumIcons:g(C.waffleNumIcons),ringBackgroundColor:m(C.ringBackgroundColor),columnBarShowWholePictures:void 0!==C.showWholePictures?C.showWholePictures:C.columnBarShowWholePictures,showAxisIcons:C.showAxisIcons,showChartIcons:C.showChartIcons,sorting:C.sorting},f(C))};if(P){var D=P&&P.attributes||{};j.visualProperties.legend={type:D.type||o.SERIES},j.visualProperties.legend.type===o.MIN_MAX?e.mixin(j.visualProperties.legend,{minMax:{placement:D.placement,placementOffset:g(D.placementOffset),titleStyle:d(D.titleStyle),minVariableLabelStyle:d(D.minVariableLabelStyle),maxVariableLabelStyle:d(D.maxVariableLabelStyle)}}):e.mixin(j.visualProperties.legend,{series:{placement:D.placement,placementOffset:g(D.placementOffset),hasBorder:D.hasBorder,labelParts:D.labelParts,style:d(D.style),symbol:D.symbol||void 0,hideOthers:D.hideOthers||void 0,showComparison:D.showComparison||void 0}})}s.revisionVersion<1.2&&(void 0!==j.visualProperties.donutGap&&(j.visualProperties.donutGap/=2*Math.PI),void 0!==j.visualProperties.gaugeGap&&(j.visualProperties.gaugeGap/=2*Math.PI)),A&&A.length&&(j.visualProperties.chartIcons=A.map(function(e){return e.tags&&e.tags[0]?s.parsers.getParser("field").parseField(e.tags[0],e,null,s):null})),T&&T.length&&(j.visualProperties.floatingIcons=T.map(function(e){return s.parsers.getParser("section").parseTable(e.tags[0],s)})),B&&B.length&&(j.visualProperties.floatingTexts=B.map(function(e){return s.parsers.getParser("section").parseTable(e.tags[0],s)})),I&&I.length&&(j.visualProperties.conditionalStyling=s.parsers.getParser("field").parseFieldTrigger(I[0])),j.comparisonInfo=u;var H={};return a.attributes&&a.attributes.style&&e.mixin(H,r.parseStyleString(a.attributes.style)),r.ptToPxObj(H),l.provideDefaultValueForMissing(j,{font:H}),s.postProcessChartJson(t,j),j},L});