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

define(["dojo/_base/lang","dojox/charting/Theme","../../themes/ThemeLibrary","./ChartTypes","./ChartLineMarkers","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,o,r,l,a,n){function i(e,o,r){var a,n=o;switch(e){case l.COLUMN:a=n.column&&n.column.colors;break;case l.BAR:a=n.bar&&n.bar.colors;break;case l.LINE:case l.VERTICAL_LINE:a=n.line&&n.line.colors;break;case l.PIE:a=n.pie&&n.pie.colors;break;case l.DONUT:a=n.donut&&n.donut.colors;break;case l.GAUGE:a=n.gauge&&n.gauge.colors;break;case l.WAFFLE:a=n.waffle&&n.waffle.colors;break;case l.RING:a=n.ring&&n.ring.colors;break;case l.PICTURE_COLUMN:a=n.pictureColumn&&n.pictureColumn.colors;break;case l.PICTURE_BAR:a=n.pictureBar&&n.pictureBar.colors}return a&&a.length||(a=null),r<=3&&n.colors3series&&n.colors3series.length&&n.colors3series||a||n.colors||s}var t={},s=["#AAAAAA","#888888","#555555","#333333"];return t.DEFAULT_LINE_THICKNESS=1,t.DEFAULT_COLUMN_THICKNESS="Medium",t.DEFAULT_DONUT_HOLE_PERCENT=50,t.DEFAULT_DONUT_GAP=3,t.DEFAULT_DONUT_ARC_PERCENT=100,t.DEFAULT_GAUGE_HOLE_PERCENT=80,t.DEFAULT_GAUGE_GAP=2,t.DEFAULT_GAUGE_ANGLE=0,t.DEFAULT_GAUGE_ARC_PERCENT=100,t.getThemeForSettings=function(r,a,i){var c=a,u=new o({colors:c.colors||s});if(!r)return u;var g=r.visualProperties;u.plotarea.fill=g.backgroundColor||c.backgroundColor,u.plotarea.stroke={width:0},u.chart.fill="transparent",u.axis.title.font="normal normal normal 11px Verdana",l.hasBackgroundImage(r.type)&&(u.plotarea.backgroundImageData=g.backgroundImageData);var f=e.mixin({},c.dataLabelsStyle,g.dataLabelsStyle);u.series.dataLabelsColor=f.color,u.series.dataLabelsAltColor=g.dataLabelsEnableAltColor&&(g.dataLabelsAltColor||c.dataLabelsAltColor),u.series.dataLabelsFont=t.combineFontString(f),u.series.dataLabelsHorizontalAlign=g.dataLabelsHorizontalAlign||"center",u.series.dataLabelsVerticalAlign=g.dataLabelsVerticalAlign||"middle",u.series.dataLabelsAngle=g.dataLabelsAngle,u.series.dataLabelsMaxWidth=g.dataLabelsMaxWidth;var d=e.mixin({},f,g.dataLabelsLabelStyle);if(u.series.dataLabelsLabelColor=d.color,u.series.dataLabelsLabelFont=t.combineFontString(d),u.series.dataLabelsPercentColor=f.color,u.series.dataLabelsPercentFont=t.combineFontString(f),l.isColumnBarLike(r.type)&&(u.series.showColumnBarBackground=g.showColumnBarBackground,u.series.columnBarBackgroundColor=g.columnBarBackgroundColor||c.columnBarBackground&&c.columnBarBackground.backgroundColor,u.series.columnBarBackgroundColor&&(u.series.columnBarBackgroundColor=g.columnBarBackgroundOpacity<1?n.getColorWithAlpha(u.series.columnBarBackgroundColor,g.columnBarBackgroundOpacity):u.series.columnBarBackgroundColor,u.series.renderColumnBarsInOppositeDirections=g.renderColumnBarsInOppositeDirections)),l.hasAxis(r.type)&&(u.series.baseLineValue=g.yAxis.baseLineValue),r.type===l.DONUT&&(u.series.donutHolePercent=void 0!==g.donutHolePercent?g.donutHolePercent:t.DEFAULT_DONUT_HOLE_PERCENT,u.series.donutGap=void 0!==g.donutGap?g.donutGap:t.DEFAULT_DONUT_GAP,u.series.donutArcPercent=void 0!==g.donutArcPercent?g.donutArcPercent:t.DEFAULT_DONUT_ARC_PERCENT,u.series.donutArcPercent=Math.min(100,Math.max(50,u.series.donutArcPercent))),r.type===l.GAUGE){u.series.donutHolePercent=void 0!==g.gaugeHolePercent?g.gaugeHolePercent:t.DEFAULT_GAUGE_HOLE_PERCENT,u.series.donutGap=void 0!==g.gaugeGap?g.gaugeGap:t.DEFAULT_GAUGE_GAP,u.series.startAngle=void 0!==g.gaugeStartAngle?g.gaugeStartAngle:t.DEFAULT_GAUGE_ANGLE,u.series.donutArcPercent=void 0!==g.gaugeArcPercent?g.gaugeArcPercent:t.DEFAULT_GAUGE_ARC_PERCENT,u.series.donutArcPercent=Math.min(100,Math.max(50,u.series.donutArcPercent)),u.series.donutShowIcons=g.showChartIcons,g.gaugeShowArrow&&(u.series.gaugeShowArrowIndicator=!0,u.series.donutGap=0,100!==u.series.donutArcPercent&&(u.series.startAngle=0),u.series.gaugeArrowIndicatorLineColor=g.gaugeArrowLineColor||c.gauge&&c.gauge.arrowIndicator.lineColor,u.series.gaugeArrowIndicatorFillColor=g.gaugeArrowFillColor||c.gauge&&c.gauge.arrowIndicator.backgroundColor);var b=e.mixin({},c.gauge&&c.gauge.dataLabelStyle,g.gaugeLabelStyle);if(u.series.gaugeMainLabelPosition=g.gaugeLabelPlacement,u.series.gaugeMainLabelFont=t.combineFontString(b),u.series.gaugeMainLabelFontColor=g.gaugeConditionalStylingLabel?null:b.color,u.series.gaugeMainLabelFontColorFromConditionalStyling=g.gaugeConditionalStylingLabel&&!!g.conditionalStyling,u.series.gaugeMainLabelFontSize=g.gaugeLabelStyle&&g.gaugeLabelStyle.fontSize,u.series.gaugeMainLabelTextDecoration=b.textDecoration,g.gaugeShowFromToLabels){u.series.gaugeShowFromToLabels=g.gaugeShowFromToLabels;var L=e.mixin({},c.gauge&&c.gauge.dataLabelStyle,g.gaugeFromLabelStyle);u.series.gaugeFromLabelValue=g.gaugeRangeMin||0,u.series.gaugeFromLabelFont=t.combineFontString(L),u.series.gaugeFromLabelFontColor=L.color,u.series.gaugeFromLabelFontSize=L.fontSize,u.series.gaugeFromLabelTextDecoration=L.textDecoration;var C=e.mixin({},c.gauge&&c.gauge.dataLabelStyle,g.gaugeToLabelStyle);u.series.gaugeToLabelValue=g.gaugeRangeMax||"",u.series.gaugeToLabelFont=t.combineFontString(C),u.series.gaugeToLabelFontColor=C.color,u.series.gaugeToLabelFontSize=C.fontSize,u.series.gaugeToLabelTextDecoration=C.textDecoration}}if(r.type===l.WAFFLE){u.series.waffleDirection=g.waffleDirection,u.series.waffleShowWholePictures=g.waffleShowWholePictures,u.series.waffleLabelPlacement=g.waffleLabelPlacement,u.series.waffleLabelOffset=g.waffleLabelOffset,u.series.waffleColumnSpace=g.waffleColumnSpace,u.series.waffleRowSpace=g.waffleRowSpace,u.series.waffleNumIcons=g.waffleNumIcons,u.series.waffleHideValue=g.waffleHideValue;var F=e.mixin({},c.waffle&&c.waffle.dataValueStyle,g.waffleValueStyle);u.series.waffleValueFont=t.combineFontString(F),u.series.waffleValueFontColor=g.waffleConditionalStylingValue?null:F.color,u.series.waffleValueFontColorFromConditionalStyling=g.waffleConditionalStylingValue&&!!g.conditionalStyling,u.series.waffleValueFontSize=F.fontSize,u.series.waffleValueTextDecoration=F.textDecoration,u.series.waffleHideLabel=g.waffleHideLabel;var h=e.mixin({},c.waffle&&c.waffle.dataLabelStyle,g.waffleLabelStyle);u.series.waffleLabelFont=t.combineFontString(h),u.series.waffleLabelFontColor=g.waffleConditionalStylingLabel?null:h.color,u.series.waffleLabelFontColorFromConditionalStyling=g.waffleConditionalStylingLabel&&!!g.conditionalStyling,u.series.waffleLabelFontSize=h.fontSize,u.series.waffleLabelTextDecoration=h.textDecoration,u.series.waffleShowLabelAbove=g.waffleShowLabelAbove}return r.type===l.RING&&(u.series.show100PercentLabel=!0,u.series.ringBackgroundColor=g.ringBackgroundColor||c.ring&&c.ring.ringBackground&&c.ring.ringBackground.backgroundColor),l.isPictureLike(r.type)&&(u.series.columnBarShowWholePictures=g.columnBarShowWholePictures),u.marker.fill="#FFFFFF",u.series.outline=null,u.series.isEditMode=i,u},t.getComparisonSymbol=function(){return a.getMarkerPath(a.CIRCLE)},t.calcColorForPoint=function(e){var o=e.point,r=e.seriesItem,a=e.pointIndex,n=e.isOthersPoint,s=e.seriesIndex,c=e.numSeries,u=e.chartType,g=e.themeSettings,f=e.isComparisonSeries,d=e.comparisonInfo,b=r&&r.points.length;u===l.WAFFLE&&b--;var L,C,F=r&&r.color,h=l.isSingleSeries(u)||l.isColumnBarLike(u)&&!g.renderSingleDataSeriesWithSameColor&&1===c,A=i(u,g,h?b:c);if(l.isLineLike(u))f&&d?C=d.color||g.comparisonInfo.lineColor:(L=A[s%A.length],C=F||L||"#000000");else if(f&&d&&d.color)C=d.color;else{var m;if(m=l.isPictureLike(u)?o&&t.getPointIconStyle(o).fillColor:o&&o.color,u===l.GAUGE&&n&&g.gauge.othersColor)return m||g.gauge.othersColor;if(u===l.WAFFLE&&n&&g.waffle.othersColor)return m||g.waffle.othersColor;L=L||(h?A[a%A.length]:A[s%A.length]),C=m||!l.isSingleSeries(u)&&F||L||"#000000"}return C},t.pointCanHaveColor=function(e){return!l.isPictureLike(e.chartType)||!!(e.point.iconFieldInfo&&e.point.iconFieldInfo.shapeJson&&e.point.iconFieldInfo.shapeJson.g.length)},t.setPointColor=function(e,o){delete e.color,e.iconFieldInfo?e.iconFieldInfo.shapeJson&&(delete e.iconFieldInfo.shapeJson.style.fillColor,delete e.iconFieldInfo.shapeJson.style.borderColor,o&&(e.iconFieldInfo.shapeJson.style.fillColor=o,e.iconFieldInfo.shapeJson.style.borderColor=o)):o&&(e.color=o)},t.calcColorForSeries=function(e){var o=e.seriesItem,r=e.seriesIndex,a=e.numSeries,n=e.chartType,t=e.themeSettings;if(l.isSingleSeries(n))return null;var s,c,u=l.isColumnBarLike(n)&&!t.renderSingleDataSeriesWithSameColor&&1===a,g=i(n,t,a);if(l.isLineLike(n))s=g[r%g.length],c=o&&o.color||s||"#000000";else var s=u?null:g[r%g.length],c=o&&o.color||s||"#000000";return c},t.provideMissingIconsForPoints=function(o,r){if(l.isPictureLike(r)){var a,n=[];o.forEach(function(o){o.iconFieldInfo?(a=o.iconFieldInfo,n.forEach(function(o){o.iconFieldInfo=e.clone(a)}),n.length=0):a?o.iconFieldInfo=e.clone(a):n.push(o)})}},t.setWaffleChartPointIcon=function(o,r,l){var a=o&&o.shapeJson;0===r?l.forEach(function(r,l){if(r.fieldInfo||a){var n=t.getPointIconStyle(r);r.iconFieldInfo=0===l?o:o&&e.clone(o),r.iconFieldInfo&&r.iconFieldInfo.shapeJson&&0!==l&&(r.iconFieldInfo.shapeJson.style.fillColor=n.fillColor,r.iconFieldInfo.shapeJson.style.borderColor=n.borderColor)}}):l[r].iconFieldInfo=o;var n=l[0],i=l[l.length-1];!i.iconFieldInfo&&n.iconFieldInfo&&n.iconFieldInfo.shapeJson&&(i.iconFieldInfo=e.clone(n.iconFieldInfo),delete i.iconFieldInfo.shapeJson.style.fillColor,delete i.iconFieldInfo.shapeJson.style.borderColor)},t.getPointIconStyle=function(e,o){function r(e,o){return"number"==typeof e?e:o}var l=o&&o.considerTheme,a=e&&(e.iconFieldInfo||e.icon);if(!a||!a.shapeJson)return{fillColor:null,fillAlpha:null,borderColor:null,borderAlpha:null,borderWidth:null,borderDashArray:null};var n=a.shapeJson.style,i=l&&a.shapeJson.themeStyle;return{fillColor:n&&n.fillColor||i&&i.fillColor,fillAlpha:r(n&&n.fillAlpha,i&&i.fillAlpha),borderColor:n&&n.borderColor||i&&i.borderColor,borderAlpha:r(n&&n.borderAlpha,i&&i.borderAlpha),borderWidth:r(n&&n.borderWidth,i&&i.borderWidth),borderDashArray:n&&n.borderDashArray||i&&i.borderDashArray}},t.calcIconForPoint=function(o,r,a){if(!l.isPictureLike(a))return null;var n=o.iconFieldInfo;return n&&n.shapeJson&&r&&(n=e.clone(n),n.shapeJson.themeStyle={fillColor:r,borderColor:r}),n},t.calcBackgroundIconForPoint=function(o,r,a,n){if(!l.isPictureLike(r))return null;var i=n.columnBarBackgroundColor||a.columnBarBackground&&a.columnBarBackground.backgroundColor,t=o.iconFieldInfo;return t&&t.shapeJson&&i?(t=e.clone(t),t.shapeJson.themeStyle={fillColor:i,borderColor:i},t):null},t.combineFontString=function(e){return e=e||{},(e.fontStyle||"normal")+" normal "+(e.fontWeight||"normal")+" "+(e.fontSize||r.CHART_DATA_FONT_SIZE)+"px "+(e.fontFamily||r.DEFAULT_FONT_FAMILY_CLASSIC)},t});