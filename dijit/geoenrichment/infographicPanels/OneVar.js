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

define(["esri/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/query","dojo/string","../BaseWidget","../utils/lang","../infographicUtils/dom","../infographicUtils/utils","../infographicUtils/formatVariable","dojo/i18n!esri/nls/jsapi"],function(e,t,a,s,r,i,n,l,o,u,h,d){return d=d.geoenrichment.dijit.OneVar,e("esri.dijit.geoenrichment.OneVar",[n],{baseClass:"Infographics_OneVar",constructor:function(){this._state={sortBy:1,sortDesc:!0}},createUIExpanded:function(e){if(this.inherited(arguments),this._canCreateValueBlock()){var a=e.addHeader("div",{class:"OneVarMultiComparison_Value"}),r=s.create("table",{cellpadding:"0",cellspacing:"0"},a),i=r.insertRow(0),n=i.insertCell(-1);this.site=s.create("span",{class:"OneVarMultiComparison_Expanded_Value_Site"},n),i=r.insertRow(-1),n=i.insertCell(-1),this.primary=s.create("span",{class:"OneVarMultiComparison_Expanded_Value_Primary"},n),this.comp=s.create("span",{class:"OneVarMultiComparison_Comparison"},n)}this.table=e.addContent("table",{class:"OneVarMultiComparison_Table"}),o.createCols(this.table,[.5,.2,.15,.15]),i=this.table.insertRow(-1),this._appendSortHeader(i,d.areaCol,0,{class:"OneVarMultiComparison_TextColumnHeader"}),this._appendSortHeader(i,d.valueCol,1,{class:"OneVarMultiComparison_ValueColumnHeader"}),t.set(i.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Lower"),t.set(i.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Upper"),this.autoHeight&&e.contentClass.push("OneVarMultiComparison_Expanded_ContentPane"),e.addFooter("div")},createUICollapsed:function(e){if(this.inherited(arguments),this._canCreateValueBlock()){var a=e.addHeader("div",{class:"OneVarMultiComparison_Value"}),r=s.create("table",{cellpadding:"0",cellspacing:"0"},a),i=r.insertRow(0),n=i.insertCell(-1);this.site=s.create("span",{class:"OneVarMultiComparison_Expanded_Value_Site"},n),i=r.insertRow(-1),n=i.insertCell(-1),this.primary=s.create("span",{class:"OneVarMultiComparison_Expanded_Value_Primary"},n)}this.table=e.addContent("table",{class:"OneVarMultiComparison_Table"}),o.createCols(this.table,[.7,.3]),i=this.table.insertRow(-1),this._appendSortHeader(i,d.areaCol,0,{class:"OneVarMultiComparison_TextColumnHeader"}),this._appendSortHeader(i,d.valueCol,1,{class:"OneVarMultiComparison_ValueColumnHeader"}),t.set(i.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Lower"),t.set(i.insertCell(-1),"class","OneVarMultiComparison_ChartColumnHeader_Upper"),this.autoHeight&&e.contentClass.push("OneVarMultiComparison_Expanded_ContentPane"),e.addFooter("div")},_canCreateValueBlock:function(){return!0},updateUIExpanded:function(){this.inherited(arguments);var e,r=this._calculate(),n=r.firstCol,c=[];if(n){var p=[],C=this.data.features.length;for(e=0;e<C;e++){var m=[];c.length&&!this._isSiteRowFeature(this.data.features[e])||c.push(m),m.push(this.getFeatureTitle(e)),m.push(this.getValueByName(e,n.name)),p.push(m)}this.site&&(this.site.innerHTML=d.subtitleSite2),this._sortRows(p);var _=this.getValueByName(0,n.name),V=l.isNumber(_);if(V){var g=this.getValueByName(C-1,n.name),f=this.getFeatureTitle(C-1),M=1-g/_;Math.abs(M)<.005&&(M=0);var w;w=M<0?this._getLessThanPattern():M>0?this._getMoreThanPattern():this._getSamePattern(),this.comp&&(this.comp.innerHTML=i.substitute(w,{site:f}))}else this.comp&&(this.comp.innerHTML="");for(var O=this.table,v=p.length+1;O.rows.length>1;)O.deleteRow(-1);var T=O.rows[0];if(V)for(;T.cells.length<4;)T.insertCell(-1);else for(;T.cells.length>2;)s.destroy(T.cells[T.cells.length-1]);for(e=1;e<v;e++){var H=O.insertRow(-1);if(e%2==0&&e>0&&(H.className="AlternatingRow"),t.set(H.insertCell(-1),"class","OneVarMultiComparison_TextColumn"),t.set(H.insertCell(-1),"class","OneVarMultiComparison_ValueColumn"),V){var y=t.set(H.insertCell(-1),"class","OneVarMultiComparison_ChartColumn");t.set(y,"colspan","2")}}var R=Number.NEGATIVE_INFINITY;if(V){for(e=0;e<p.length;e++)p[e][1]>R&&(R=p[e][1]);R=u.getCeiling(R),O.rows[0].cells[2].innerHTML=h(n,0),O.rows[0].cells[3].innerHTML=h(n,R)}for(e=0;e<p.length;e++)if(T=O.rows[e+1],T.cells[0].innerHTML=p[e][0],T.cells[1].innerHTML=h(n,p[e][1]),V){var b;-1!==c.indexOf(p[e])?(a.remove(T,"OneVarMultiComparison_Row"),a.add(T,"OneVarMultiComparison_CurrentRow"),b="OneVarMultiComparison_Expanded_CurrentBar"):(a.remove(T,"OneVarMultiComparison_CurrentRow"),a.add(T,"OneVarMultiComparison_Row"),b="OneVarMultiComparison_Expanded_Bar");var x=o.pct(p[e][1]/R);T.cells[2].innerHTML="<div class='"+b+"' style='width:"+x+"' />",t.set(T.cells[0],"style","width:50%"),t.set(T.cells[1],"style","width:20%")}else t.set(T.cells[0],"style","width:50%"),t.set(T.cells[1],"style","width:50%")}},updateUICollapsed:function(){this.inherited(arguments);var e,s=this._calculate(),i=s.firstCol,n=[];if(i){var o=[],u=this.data.features.length;for(e=0;e<u;e++){var d=[];n.length&&!this._isSiteRowFeature(this.data.features[e])||n.push(d),d.push(this.getFeatureTitle(e)),d.push(this.getValueByName(e,i.name)),o.push(d)}this._sortRows(o);var c=this.getValueByName(0,i.name),p=this.table,C=o.length+1;for(e=p.rows.length;e<C;e++){var m=p.insertRow(-1);e%2==0&&(m.className="AlternatingRow"),t.set(m.insertCell(-1),"class","OneVarMultiComparison_TextColumn"),t.set(m.insertCell(-1),"class","OneVarMultiComparison_ValueColumn")}for(;p.rows.length>C;)p.deleteRow(-1);var _=l.isNumber(c),V=r("col",this.table);for(_?(t.set(V[0],"style","width:70%"),t.set(V[1],"style","width:30%")):(t.set(V[0],"style","width:50%"),t.set(V[1],"style","width:50%")),e=0;e<o.length;e++){var g=p.rows[e+1];g.cells[0].innerHTML=o[e][0],g.cells[1].innerHTML=h(i,o[e][1]),-1!==n.indexOf(o[e])?(a.remove(g,"OneVarMultiComparison_Row"),a.add(g,"OneVarMultiComparison_CurrentRow")):(a.remove(g,"OneVarMultiComparison_CurrentRow"),a.add(g,"OneVarMultiComparison_Row"))}}},_calculate:function(){var e=this.getDataFields(),t=this.getFieldByIndex(e[0]);return this.primary&&(this.primary.innerHTML=this.formatByIndex(0,e[0])+" "),{firstCol:t}},_getLessThanPattern:function(){return d.lessThan},_getMoreThanPattern:function(){return d.moreThan},_getSamePattern:function(){return d.same},_isSiteRowFeature:function(e){return!1}})});