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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/_base/json","dojo/DeferredList","../kernel","../sniff","../request","../deferredUtils","../geometry/Extent","../geometry/normalizeUtils","./Task","./FeatureSet"],function(e,t,r,s,n,i,o,u,a,c,l,h,d,f,_){var p=a("esri-pbf"),m=t(null,{url:null,query:null,requestOptions:null,pagination:null,pageSize:null,_fetchDfd:null,_startPage:null,_result:null,constructor:function(e){this._handleSuccess=r.hitch(this,this._handleSuccess),this._handleError=r.hitch(this,this._handleError),r.mixin(this,e),null==this.pagination&&(this.pagination=!1),null==this.pageSize&&(this.pageSize=1e3)},execute:function(){var e=new n(this._canceler);return this._fetchDfd=e,this._result=null,this._sendRequest(),e.promise},_canceler:function(e){var t,r=e._pendingRequest;return e.isFulfilled()||!r||r.isFulfilled()||(r.cancel(),t=r.results&&r.results[1]),e._pendingRequest=null,t},_sendRequest:function(e){var t=this.query;this.pagination&&(this._startPage=t.resultOffset=null==e?0:e,t.resultRecordCount=this.pageSize);var r=this.requestOptions;this._fetchDfd._pendingRequest=c({url:this.url,content:t,handleAs:"pbf"===t.f?"arraybuffer":"json",callbackParamName:"callback",timeout:r&&r.timeout},r),this._fetchDfd._pendingRequest.then(this._handleSuccess).otherwise(this._handleError)},_handleSuccess:function(e){this.pagination?(e.exceededTransferLimit&&this._sendRequest(this._startPage+this.pageSize),this._result?this._result.features=this._result.features.concat(e.features):this._result=e,this._fetchDfd.progress(e),e.exceededTransferLimit||this._fetchDfd.resolve(this._result)):(this._fetchDfd.progress(e),this._fetchDfd.resolve(e))},_handleError:function(e){this._fetchDfd.reject(e)}}),y=t(f,{declaredClass:"esri.tasks.QueryTask",_eventMap:{complete:["featureSet"],"execute-for-count-complete":["count"],"execute-for-ids-complete":["objectIds"],"execute-relationship-query-complete":["featureSets"]},constructor:function(e,t){this._handler=r.hitch(this,this._handler),this._relationshipQueryHandler=r.hitch(this,this._relationshipQueryHandler),this._executeForIdsHandler=r.hitch(this,this._executeForIdsHandler),this._countHandler=r.hitch(this,this._countHandler),this._extentHandler=r.hitch(this,this._extentHandler),this.source=t&&t.source,this.gdbVersion=t&&t.gdbVersion,this.registerConnectEvents()},__msigns:[{n:"execute",c:4,a:[{i:0,p:["geometry"]}],e:2},{n:"rawExecute",c:2,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForIds",c:3,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForCount",c:3,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForExtent",c:3,a:[{i:0,p:["geometry"]}],e:2}],onComplete:function(){},onRawExecuteComplete:function(){},onExecuteRelationshipQueryComplete:function(){},onExecuteForIdsComplete:function(){},onExecuteForCountComplete:function(){},onExecuteForExtentComplete:function(){},execute:function(e,t,s,u,a){var l=a.assembly,h=this._encode(r.mixin({},this._url.query,{f:u&&u.format||"json"},e.toJson(l&&l[0]))),d=this._handler,f=this._errorHandler;if(this.source){var _={source:this.source.toJson()};h.layer=i.toJson(_)}this.gdbVersion&&(h.gdbVersion=this.gdbVersion);var m="pbf"===h.f;if(m){var b;if(p||(b="QueryTask.execute: 'pbf' format is not supported in your browser."),b){var g=new n;return g.addErrback(function(e){f(e,s,a.dfd)}),g.reject(new Error(b)),g}}var x=this.requestOptions,v=c({url:this._url.path+"/query",content:h,callbackParamName:"callback",handleAs:m?"arraybuffer":"json",timeout:x&&x.timeout},x),q=[v];return m&&q.push(y.loadPBFReader()),new o(q).then(function(e){if(!a.dfd.isFulfilled()){var r=e[0];r[0]?d(r[1],m,t,s,a.dfd):f(r[1],s,a.dfd)}}),v},rawExecute:function(e,t,s){t=t||{};var n=this._encode(r.mixin({},this._url.query,{f:t.format||"json"},e.toJson(s.assembly&&s.assembly[0])));return this.source&&(n.layer=i.toJson({source:this.source.toJson()})),this.gdbVersion&&(n.gdbVersion=this.gdbVersion),new m({url:this._url.path+"/query",query:n,requestOptions:this.requestOptions,pagination:t.pagination,pageSize:t.pageSize}).execute().then(null,null,function(e){s.dfd.progress(e)}).then(r.hitch(this,function(e){this._successHandler([e],"onRawExecuteComplete",null,s.dfd)})).otherwise(r.hitch(this,function(e){this._errorHandler(e,null,s.dfd)}))},executeRelationshipQuery:function(e,t,s){var i=this._encode(r.mixin({},this._url.query,{f:"json"},e.toJson())),o=this._relationshipQueryHandler,u=this._errorHandler;this.gdbVersion&&(i.gdbVersion=this.gdbVersion);var a=new n(l._dfdCanceller),h=this.requestOptions;return a._pendingDfd=c({url:this._url.path+"/queryRelatedRecords",content:i,callbackParamName:"callback",timeout:h&&h.timeout,load:function(e,r){o(e,r,t,s,a)},error:function(e){u(e,s,a)}},h),a},executeForIds:function(e,t,s,n){var o=n.assembly,u=this._encode(r.mixin({},this._url.query,{f:"json",returnIdsOnly:!0},e.toJson(o&&o[0]))),a=this._executeForIdsHandler,l=this._errorHandler;if(this.source){var h={source:this.source.toJson()};u.layer=i.toJson(h)}this.gdbVersion&&(u.gdbVersion=this.gdbVersion);var d=this.requestOptions;return c({url:this._url.path+"/query",content:u,callbackParamName:"callback",timeout:d&&d.timeout,load:function(e,r){a(e,r,t,s,n.dfd)},error:function(e){l(e,s,n.dfd)}},d)},executeForCount:function(e,t,s,n){var o=n.assembly,u=this._encode(r.mixin({},this._url.query,{f:"json",returnIdsOnly:!0,returnCountOnly:!0},e.toJson(o&&o[0]))),a=this._countHandler,l=this._errorHandler;if(this.source){var h={source:this.source.toJson()};u.layer=i.toJson(h)}this.gdbVersion&&(u.gdbVersion=this.gdbVersion);var d=this.requestOptions;return c({url:this._url.path+"/query",content:u,callbackParamName:"callback",timeout:d&&d.timeout,load:function(e,r){a(e,r,t,s,n.dfd)},error:function(e){l(e,s,n.dfd)}},d)},executeForExtent:function(e,t,s,n){var o=n.assembly,u=this._encode(r.mixin({},this._url.query,{f:"json",returnExtentOnly:!0,returnCountOnly:!0},e.toJson(o&&o[0]))),a=this._extentHandler,l=this._errorHandler;if(this.source){var h={source:this.source.toJson()};u.layer=i.toJson(h)}this.gdbVersion&&(u.gdbVersion=this.gdbVersion);var d=this.requestOptions;return c({url:this._url.path+"/query",content:u,callbackParamName:"callback",timeout:d&&d.timeout,load:function(e,r){a(e,r,t,s,n.dfd)},error:function(e){l(e,s,n.dfd)}},d)},_handler:function(e,t,r,s,n){try{e&&t&&(e=y.pbfDeps.optimizedFeatures.convertToFeatureSet(y.pbfDeps.pbfQueryUtils.parsePBFFeatureQuery(e)));var i=new _(e);this._successHandler([i],"onComplete",r,n)}catch(e){this._errorHandler(e,s,n)}},_relationshipQueryHandler:function(e,t,r,n,i){try{var o=e.geometryType,u=e.spatialReference,a={};s.forEach(e.relatedRecordGroups,function(e){var t={};t.geometryType=o,t.spatialReference=u,t.features=e.relatedRecords;var r=new _(t);if(null!=e.objectId)a[e.objectId]=r;else for(var s in e)e.hasOwnProperty(s)&&"relatedRecords"!==s&&(a[e[s]]=r)}),this._successHandler([a],"onExecuteRelationshipQueryComplete",r,i)}catch(e){this._errorHandler(e,n,i)}},_executeForIdsHandler:function(e,t,r,s,n){try{this._successHandler([e.objectIds],"onExecuteForIdsComplete",r,n)}catch(e){this._errorHandler(e,s,n)}},_countHandler:function(e,t,r,s,n){try{var i,o=e.features,u=e.objectIds;if(u)i=u.length;else{if(o)throw new Error("Unable to perform query. Please check your parameters.");i=e.count}this._successHandler([i],"onExecuteForCountComplete",r,n)}catch(e){this._errorHandler(e,s,n)}},_extentHandler:function(e,t,r,s,n){try{e.extent&&(e.extent=new h(e.extent)),this._successHandler([e],"onExecuteForExtentComplete",r,n)}catch(e){this._errorHandler(e,s,n)}}});return y.loadPBFReader=function(){var t=new n;return y.pbfDeps?t.resolve():e(["./support/pbfDeps"],function(e){y.pbfDeps=e,t.isFulfilled()||t.resolve()}),t.promise},d._createWrappers(y),a("extend-esri")&&r.setObject("tasks.QueryTask",y,u),y});