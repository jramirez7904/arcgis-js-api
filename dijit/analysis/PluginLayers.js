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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/Deferred","dojo/promise/all","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/query","dojo/store/Memory","dojo/store/Observable","dojo/Evented","dojo/has","./ItemTypes","../../request","../../kernel","../../lang","dgrid/OnDemandGrid","dgrid/Selection","./AnalysisRegistry","dojo/i18n!../../nls/jsapi"],function(e,t,i,n,s,a,r,o,l,c,d,h,y,p,m,u,f,g,T,v,b,I,L){var _=e([p],{infoPanelTemplate:'<div><div class="template-info-showing"><div><img width=\'16px\' height=\'16px\' alt=\'\' src=\'${item.iconUrl}\'></div><h4>${item.title}</h4><div class="template-info"><p class="">${item.snippet}</p>${item:plugIn._showLayers}<div id="${item.id}_details" class="quiet-scroll layer-container"></div></div><div class="panel-actions">${item:plugIn._addLayerToMap}<button class="btn blue btn-main disabled" id="add-layer">${i18n.common.addLayerBtnLabel}</button><button class="btn btn-cancel" id="close-panel">${i18n.common.close}</button></div><div>',geometryTypes:[I.GeometryTypes.Point,I.GeometryTypes.Point.MultiPoint,I.GeometryTypes.Line,I.GeometryTypes.Polygon],layerTypes:[u.FLAYER,u.BDATAFEATURE,u.BTABLE,u.TABLE],timeTypes:[I.TimeTypes.Instant,I.TimeTypes.Interval],checkGeometryType:!0,checkLayerType:!1,checkTimeFilter:!1,fetchType:['type:"'+u.MS+'"','type:"'+u.FS+'"'],constructor:function(e){t.mixin(this,e),this.filters={all:{},mycontent:{owners:this.self?[this.self.user.username]:[]},esriBoundaryLayers:{owners:["esri_boundaries"]}},this.i18n=t.mixin({},L.browseLayersDlg),t.mixin(this.i18n,L.browseItems),t.mixin(this.i18n,L.common),this.filterStrings={all:{title:this.self&&this.self.isPortal?this.i18n.items.portalOrg:this.i18n.items.organizationLabel},mycontent:{title:this.i18n.items.contentLabel},esriBoundaryLayers:{title:this.i18n.esriBoundaryLayers}}},fetchData:function(){return this._portal=this.parent._portal,this._user=this._portal.getPortalUser(),this.filters.mycontent.owner=this._user,this.parent.fetchType&&(this.fetchType=this.parent.fetchType),this._fetchItems()},_fetchItems:function(){return this.parent._fetchItems({types:this.fetchType})},_fetchServiceInfo:function(e){var i,n=new s,a={f:"json"};return e.url?(-1!==window.location.protocol.indexOf("https:")&&(e.url=e.url.replace("http:","https:")),f({url:e.url,content:a}).then(function(e){n.resolve(e)},t.hitch(this,function(t){i=t.details&&t.details.length?t.details.shift():"",t&&403===t.httpCode&&i.indexOf("SSL Required")>-1?(e.set("url",e.url.replace("http:","https:")),this._fetchServiceInfo(e).then(function(e){n.resolve(e)})):(e.isLoaded=!0,n.resolve({error:t}))}))):n.resolve(null),n},_addLayerToMap:function(e){return e.type===u.BIGDATA||e.type===u.CSV||e.type===u.XLS?"":'<div class="esriFloatLeading esriLeadingPadding1 padding-trailer-half js-add-layer-node"><label><input name="addlayertomap" class="js-add-layer-checkbox" type="checkbox"><span class="esriLeadingPadding1">'+this.i18n.common.addLayer+"</span></label></div>"},_showLayers:function(e){return e&&-1!==i.indexOf([u.FS,u.MS,u.IS,u.BIGDATA,u.CSV,u.XLS],e.type)&&(e.type!==u.CSV&&e.type!==u.XLS||(e.url=e.itemUrl),this.plugIn._fetchServiceInfo(e).then(t.hitch(this,function(s){var a=[],o={f:"json"};if(s.layers&&(a=[].concat(a).concat(s.layers)),s.tables&&s.tables.length>0&&(a=[].concat(a).concat(s.tables)),s.children&&(a=s.children),!e||e.type!==u.CSV&&e.type!==u.XLS&&e.type!==u.IS||(a=[e]),!a.length)var l=this.plugIn.i18n.noDataMessages.noItemInfo;this.plugIn._createLayerGrid(n.create("div",null,r.byId(e.id+"_details")),l),i.forEach(a,function(i,n){e.type===u.BIGDATA?(i.url=e.url+"/"+i.name,i.url=encodeURI(i.url)):e.type===u.CSV?i.url=e.itemUrl:e.type===u.IS?i.url=e.url:i.url=e.url+"/"+n,-1!==window.location.protocol.indexOf("https:")&&(i.url=i.url.replace("http:","https:")),f({url:i.url,content:o}).then(t.hitch(this,function(e){i=t.mixin(i,e),this.plugIn._store.put(i),this.plugIn._grid.refresh()}),t.hitch(this,function(e){this.plugIn._grid.noDataMessage=this.plugIn.i18n.noDataMessages.noLayerInfo,this.plugIn._grid.refresh()}))},this)}))),""},_getLayerHead:function(){return"<tr><th></th><th>Layer Name</th><th> Geometry Type</th></tr>"},_getLayerNode:function(e,t,i){var n=e.name,s=e.itemUrl||e.url,a='<tr><td><input type="checkbox" class="js-layer-check" name="layers" value="'+n+' checked"></td><td>',r="</td><td>"+e.geometryType+"</td></tr>";return s?a+'<a class="'+(i||"")+'">'+n+"</a>"+r:a+n+r},_createLayerGrid:function(n,s){var a=e([v,b]);this._store=y(new h({idProperty:"name"})),this._atleastALayerAvailable=!1,this._grid=new a({store:this._store,query:t.hitch(this,function(e){var t,n=!0,s=!0,a=!0,r=!0;if(this.checkGeometryType&&e.type!==u.IS&&(a=-1!==i.indexOf(this.geometryTypes,e.geometryType)),this.checkTimeFilter&&(n=-1!==i.indexOf(this.timeTypes,this.getTimeType(e))),this.checkLayerType&&(s=-1!==i.indexOf(this.layerTypes,e.type)),"function"==typeof this.customCheckHandler&&(r=this.customCheckHandler(e)),!(t=e&&a&&n&&s&&r)){var l={geomCheck:a,timeCheck:n,typeCheck:s,customCheck:r};this._grid.noDataMessage=this.getNoDataMessage(l)}return!this._atleastALayerAvailable&&t&&(this._atleastALayerAvailable=t),d(".js-add-layer-checkbox",this.parent.infoPanel).forEach(function(e){o.set(e,"disabled",!this._atleastALayerAvailable)},this),t}),selectionMode:"single",class:"esriAnalysisLayersGrid quiet-scroll",noDataMessage:s||this.i18n.noValidLayerMsg,allowSelect:t.hitch(this,function(e){var t,n;return this.checkLayerType&&e.data&&(t=-1!==i.indexOf(this.layerTypes,e.data.type)),n=!e.data.geometryType||(-1!==i.indexOf(this.geometryTypes,e.data.geometryType)||this.checkLayerType&&t),e&&e.data&&n}),renderRow:t.hitch(this,this._renderer)},n),this._grid.startup(),this._grid.on("dgrid-select,dgrid-deselect",t.hitch(this,function(e){var t,i,n=e.grid.selection,s=[];for(t in n)n[t]&&s.push(this._grid.row(t).data);i={selection:s},d(".panel-actions .btn-main",this.parent.infoPanel).forEach(function(e){l.toggle(e,"disabled",0===s.length)},this),s[0]&&(this._selectedLayer=s[0]),this.emit("layer-change",i)}))},hasTimeInfo:function(e){return e&&e.timeInfo},getTimeType:function(e){return!!e&&(T.isDefined(e.timeInfo)&&T.isDefined(e.timeInfo.startTimeField)&&!T.isDefined(e.timeInfo.endTimeField)?I.TimeTypes.Instant:T.isDefined(e.timeInfo)&&T.isDefined(e.timeInfo.startTimeField)&&T.isDefined(e.timeInfo.endTimeField)?I.TimeTypes.Interval:!(!T.isDefined(e.time)||!T.isDefined(e.time.timeType))&&e.time.timeType)},getNoDataMessage:function(e){return e.geomCheck?e.timeCheck?e.typeCheck?e.customCheck?void 0:this.customCheckFailureMessage:this.i18n.noDataMessages.typeCheckFailure:this.i18n.noDataMessages.timeCheckFailure:this.i18n.noDataMessages.geomCheckFailure},getDateFields:function(e){var t=e&&e.fields||[];return i.filter(t,function(e){return e&&"esriFieldTypeDate"===e.type})},_renderer:function(e){e.snippet=e.snippet||"";var t=n.create("div"),i=this._getLabel(e),s='<div class="panel panel-white panel-bordered panel-compact border-bottom-clear"><h5 class="trailer-0 font-size-0 word-break"><a>'+e.name+'</a></h5><nav class="inline-block"><a class="link-gray font-size--2 esriTrailingPadding1 esriTrailingMargin05"><span class="'+i.icon+'"></span>'+i.name+"</a>"+(e.timeInfo||e.time&&"instant"===e.time.timeType?'<a class="link-gray font-size--2 esriTrailingPadding1" data-action="timeSettings" data-layerid="0"><span class="esri-icon-time-clock"></span>'+this.i18n.timeEnabled+"</a>":'<a class="esriTrailingPadding1"></a>')+"</nav></div>";return n.place(s,t),t},_getLabel:function(e){var t={icon:"",name:""},i=e.geometryType;return i===I.GeometryTypes.Point||i===I.GeometryTypes.MultiPoint?(t.name=this.i18n.points,t.icon="esri-icon-map-pin"):i===I.GeometryTypes.Polygon?(t.name=this.i18n.areas,t.icon="esri-icon-polygon"):i===I.GeometryTypes.Line?(t.name=this.i18n.lines,t.icon="esri-icon-polyline"):e.type===u.IS?(t.name=this.i18n.imageService,t.icon="esri-icon-layers"):(t.name=this.i18n.table,t.icon="esri-icon-table"),t}});return t.mixin(_,{add:function(e,t){if(!e.plugIn){var i=t||{};i.parent=e,i.self=e.self,e.plugIn=new _(i)}},remove:function(e){e.plugIn&&(e.plugIn.destroy(),delete e.plugIn)}}),m("extend-esri")&&t.setObject("dijit.analysis.PluginLayers",_,g),_});