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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil","../../../supportClasses/DocumentOptions","../../ConversionUtil","../../../sections/SectionTypes","./AlignParser","./_HiddenCellsCollector","esri/dijit/geoenrichment/utils/ColorUtil"],function(t,e,r,a,i,s,n,o,l){function u(t,e,r,a,s){if(t.spannedWidths||t.spannedHeights)for(var n=t.spannedWidths?t.spannedWidths.split(";").map(function(t){return i.ptToPx(t)}):[i.ptToPx(t.width)],o=t.spannedHeights?t.spannedHeights.split(";").map(function(t){return i.ptToPx(t)}):[i.ptToPx(t.height)],l=0;l<n.length;l++)for(var u=0;u<o.length;u++){var d=r[s+l],g=e[a+u],p=g.style.fields[d.field]=g.style.fields[d.field]||{};p.width=n[l],p.height=o[u]}}var d={parseTableCellAttributes:function(e,r,a){var s=a.tableDefaultStyles;if(r=r||{},e.overrideStyle&&(r.overrideStyle=e.overrideStyle),e.pad&&(r.horizontalPadding=i.ptToPx(e.pad)),e.vpad&&(r.verticalPadding=i.ptToPx(e.vpad)),e.angle&&(r.angle=Number(e.angle)||0),n.parseAlign(e,r),e.width&&(r.width=i.ptToPx(e.width)),e.height&&(r.height=i.ptToPx(e.height)),t.mixin(r,i.ptToPxObj(i.parseStyleString(e.style))),r.overrideStyle&&s){var o=s.getStyle(r.overrideStyle);for(var l in o)delete r[l]}return d._parseBorderProperties(e,r),r},_SIDES:["Top","Right","Bottom","Left"],_parseBorderProperties:function(t,e){function r(r){if(t["border"+r+"Width"]){t["border"+r+"Color"]&&(e["border"+r+"Color"]=t["border"+r+"Color"]),t["border"+r+"Width"]&&(e["border"+r+"Width"]=i.ptToPx(t["border"+r+"Width"])),t["border"+r+"Style"]&&(e["border"+r+"Style"]=t["border"+r+"Style"]);var a=t["border"+r+"Opacity"];e["border"+r+"Opacity"]=a?Number(a):1}}d._SIDES.forEach(r)}},g={getElement:function(t,n,p){var c=n.templateJson,b=i.pxToPt(a.getPageBox(c.documentOptions).contentW);if((!p||!p.doNotFixWidthsForPage)&&t.attributes.widths&&Number(t.attributes.width)>b){var f=i.splitTrim(t.attributes.widths,";",!0),h=Number(t.attributes.width)-b,m=Number(f[f.length-1]);m>h&&(m-=h,f[f.length-1]=m,t.attributes.widths=f.join(";"),t.attributes.width=b)}var T,y,v,S,x=0,P=t.attributes.widths?i.splitTrim(t.attributes.widths,";",!0).map(function(t){return{field:"field"+x++,style:{width:i.ptToPx(t)}}}):[],N=Number(t.attributes.fixedColumns)||0,A=Number(t.attributes.dynamicColumns)||0,C=[];if(function(){t.tags&&(n.revisionVersion>=1.1?t.tags.forEach(function(t){if("tr"===t.name)return void C.push(t);switch(t.attributes.type){case s.TABLE_BACKGROUND:T=t;break;case s.TABLE_FOREGROUND:y=t;break;case s.TABLE_BACKGROUND_FLOATING_PANELS:v=t;break;case s.TABLE_FOREGROUND_FLOATING_PANELS:case s.TABLE_FLOATING_PANELS:S=t}}):t.tags.forEach(function(t){"tr"===t.name?C.push(t):"background"===t.name?T=t:"foreground"===t.name?y=t:"floatingElements"===t.name&&(S=t)}))}(),C){var _=C.map(function(){return{style:{fields:{}},fieldInfos:{}}}),w=o.collectHiddenCells(C,n);C.forEach(function(t,a){var s=_[a];if(t.attributes&&t.attributes.height&&(s.style.height=i.ptToPx(t.attributes.height)),t.tags&&t.tags.length){var g=0;if(A){var p=[],c=[],b=0;t.tags.forEach(function(t){for(;o.isHidden(w,b,a);)b++;b<N?p.push(t):c.push(t),b++});var f=Math.round((P.length-N)/A);t.tags=p;for(var h=0;h<f;h++)t.tags=t.tags.concat(c)}t.tags.forEach(function(t){function p(t){var e=t.tags&&1===t.tags.length&&t.tags[0];return e&&e.tags?("b"===e.name?h.fontWeight="bold":"i"===e.name?h.fontStyle="italic":"u"===e.name&&(h.textDecoration="underline"),"b"===e.name||"i"===e.name||"u"===e.name?p(e)||{tag:e.tags[0],parentTag:e}:null):null}function c(t){e.isRichText(t)?s.fieldInfos[b]=r.createFieldInfoFromRichText(t):s[b]=e.unrichHTML(t)}for(;o.isHidden(w,g,a);)g++;if(P[g]){var b=P[g].field,f=t.attributes||{},h=s.style.fields[b]={};d.parseTableCellAttributes(f,h,n),f.width&&u(f,_,P,a,g);var m=Number(f.colspan),T=Number(f.rowspan);m&&(s.columnSpans=s.columnSpans||{},s.columnSpans[b]=m),T&&(s.rowSpans=s.rowSpans||{},s.rowSpans[b]=T);var y,v=function(t){var e,r,a;if(t.tags&&t.tags.length)if(a=t.tags.filter(function(t){return"br"!==t.name}),(r=a[0])&&"trigger"===r.name&&a[1]&&"d"===a[1].name)e=r,r=a[1];else{var i=p(t);r=i&&i.tag||a[0],t=i&&i.parentTag||t}return{firstTag:r,triggerTag:e,parentTag:t,hasMultipleTags:a&&a.length>1}}(t),S=v.firstTag,x=v.parentTag,N=v.triggerTag,A=v.hasMultipleTags;if(A&&!N){var C=n.parsers.getParser("field").parseRichTextTag(x,n);C&&(s.fieldInfos[b]=C,y=!0)}if(S&&!y){n.isGraphicReport&&"section"===S.name&&!S.attributes.style&&h.backgroundColor&&!l.isTransparent(h.backgroundColor)&&(S.attributes.style=i.composeStyleString({backgroundColor:h.backgroundColor}),delete h.backgroundColor);var E=n.parsers.getParser("field").parseField(S,x,N,n);if(!1===E)y=!0;else if("number"==typeof E)s[b]=E+"",y=!0;else if(E)s.fieldInfos[b]=E,y=!0;else if("chart"===S.name)y=!0;else if("img"===S.name)y=!0;else if("text"===S.name)s[b]=S.attributes.name,y=!0;else if("a"===S.name&&S.tags&&S.tags[0].text){var R=S.attributes.href;R&&(s.urls=s.urls||{},s.urls[b]=R,s[b]=S.tags[0].text,y=!0)}else S.text&&!A&&(c(S.text),y=!0)}y||c(e.getInnerHTML(x)),g++}})}})}var E={id:"table",customName:t.attributes.customName,backgroundSectionJson:T&&g._parseTableBackgroundForeground(T,n,!0),foregroundSectionJson:y&&g._parseTableBackgroundForeground(y,n,!1),backgroundFloatingTablesSectionJson:v&&g._parseFloatingPanels(v,n,!0),foregroundFloatingTablesSectionJson:S&&g._parseFloatingPanels(S,n,!1),data:{columns:P,data:_||[]},style:{width:i.ptToPx(t.attributes.width),left:i.ptToPx(t.attributes.left),spaceBefore:i.ptToPx(t.attributes.spaceBefore),spaceAfter:i.ptToPx(t.attributes.spaceAfter),alternatingStyle:t.attributes.alternatingStyle,opacity:t.attributes.opacity?Number(t.attributes.opacity):void 0,fixedCellsOpacity:t.attributes.fixedCellsOpacity?Number(t.attributes.fixedCellsOpacity):void 0},attributes:{}};return N&&(E.attributes.fixedColumns=N),A&&(E.attributes.dynamicColumns=A),t.attributes.fixedRows&&(E.attributes.fixedRows=Number(t.attributes.fixedRows)||0),t.attributes.dynamicRows&&(E.attributes.dynamicRows=Number(t.attributes.dynamicRows)||0),E.attributes.inSectionRole=t.attributes.inSectionRole,E},_parseTableBackgroundForeground:function(t,e,r){return t.attributes=t.attributes||{},t.attributes.type=r?s.TABLE_BACKGROUND:s.TABLE_FOREGROUND,e.parsers.getParser("section").parseSection(t,e,{doNotFixWidthsForPage:!0})},_parseFloatingPanels:function(t,e,r){return t.attributes=t.attributes||{},t.attributes.type=r?s.TABLE_BACKGROUND_FLOATING_PANELS:s.TABLE_FOREGROUND_FLOATING_PANELS,e.parsers.getParser("section").parseSection(t,e,{doNotFixWidthsForPage:!0})}};return g.parseTableCellAttributes=d.parseTableCellAttributes,g});