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

define(["dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/when","../DeferredList2","../../../geometry/Extent","../../../SpatialReference","../../../geometry/Point","../../PixelBlock","./RasterTileInfo","../raster/rasterProjectionHelper"],function(e,t,i,s,l,r,a,n,h,o,c){var f=function(e,t){var i;for(i=0;i<e.length;i++)if(t(e[i]))return e[i]},x=function(e,t){var i;for(i=0;i<e.length;i++)if(t(e[i]))return i;return-1};return e(null,{declaredClass:"esri.layers.rasterLib.tile.RasterTileManager",count:null,fullBoundary:null,tileBoundary:null,tiles:null,resolution:null,virtual:!0,prefetchBufferSize:0,_progressiveGlobal:!1,_MAX_TILES:128,_defaultMatrixResolution:20,constructor:function(e){this.tiles=[],this.tileInfo=e&&e.tileInfo,this.mapSpatialReference=e&&e.mapSR,this.virtual=this.tileInfo.virtual,this.layer=e&&e.layer,this.identifiers=this.layer.raster.rasterFunction?this.layer.raster.getMemberRasters().map(function(e){return e._rasterId}):[this.layer.raster._rasterId];var t=!this.virtual&&!this.mapSpatialReference.equals(this.tileInfo.spatialReference),i=c.requirePE(this.mapSpatialReference,this.tileInfo.spatialReference),s=t?this._defaultMatrixResolution:1;this.xformSetting={requireProjection:t,requirePE:i,meshSize:s}},setTileInfo:function(e){this.tileInfo=e,this.virtual=e.virtual,this.mapResolution=null,this.tiles.length=0,this.xformSetting.requireProjection=!this.virtual&&!this.mapSpatialReference.equals(this.tileInfo.spatialReference),this.xformSetting.requirePE=c.requirePE(this.mapSpatialReference,this.tileInfo.spatialReference),this.xformSetting.meshSize=this.xformSetting.requireProjection?this._defaultMatrixResolution:1},updateResolution:function(e,i){if(!(this.mapResolution&&e&&this._resolutionEqual(this.mapResolution.x,e.x)&&this._resolutionEqual(this.mapResolution.y,e.y))){this.tiles.forEach(t.hitch(this,function(e){e.fetch&&!e.fetch.isCanceled()&&e.fetch.cancel(),e.update&&!e.update.isCanceled()&&e.update.cancel()})),this.tiles.length=0;var s=this.xformSetting.requireProjection;this.mapResolution=this.resolution=e,s?this.resolution=c.projectResolution(e,this.tileInfo.spatialReference,i):this._resolution=this.resolution;var l,r,a,h=this.resolution;if(!this.tileInfo.virtual){if(!(r=f(this.tileInfo.lods,function(e){return Math.abs(e.resolution-h.x)<.01*h.x})))if(h.x>this.tileInfo.lods[0].resolution)r=this.tileInfo.lods[0],this.ooe=!0;else if(h.x<this.tileInfo.lods[this.tileInfo.lods.length-1].resolution)r=this.tileInfo.lods[this.tileInfo.lods.length-1],this.ooe=!1;else{for(l=0;l<this.tileInfo.lods.length-1;l++)if(r=this.tileInfo.lods[l],a=this.tileInfo.lods[l+1],r.resolution>h.x&&a.resolution<h.x){if(h.x/r.resolution>a.resolution<h.x){r=a;break}break}this.ooe=!1}this.level=r&&r.level,this.resolution=new n({x:r.resolution,y:r.resolution,spatialReference:this.tileInfo.spatialReference})}var o=s?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent,x=this.tileInfo.origin,u=this.tileInfo.cols,d=this.tileInfo.rows,p=Math.floor((o.xmin-x.x)/h.x/u),m=Math.ceil((o.xmax-x.x-h.x)/h.x/u),y=Math.floor((x.y-o.ymax)/h.y/d),g=Math.ceil((x.y-o.ymin-h.y)/h.y/d);this.fullBoundary={rowStart:y,rowEnd:g,colStart:p,colEnd:m};var _=o.spatialReference._getInfo();_&&(this.fullBoundary.colRange=Math.round((_.valid[1]-_.valid[0])/h.x/u)),this.hasNewData=!0}},getXformGrid:function(e){var t=this.mapExtent,i=this.extent,s=this.layer._hasTilingEffects?i:this.fullExtent;return c.getProjectionOffsetGrid(t,s,e)},updateExtent:function(e,i){this.mapExtent=this.extent=e;var s=this.xformSetting.requireProjection;if(s){if(this.extent=c.project(e,this.tileInfo.spatialReference),!this.extent)return;this.extent.spatialReference=new a(this.extent.spatialReference.toJson())}this.updateResolution(i,e);var l=this.extent,n=this.tileInfo,h=n.cols,o=n.rows;i=this.resolution;var f=l,u=s?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent;this.ooe&&(f=this._getIntersect(l,u));var d=f.xmin,p=f.xmax;if(p<d){var m=l.spatialReference._getInfo();m&&(p+=Math.ceil((d-p)/(m.valid[1]-m.valid[0]))*(m.valid[1]-m.valid[0])),f.xmax=p}var y=Math.floor((d-n.origin.x)/i.x/h)-this.prefetchBufferSize,g=Math.floor((p-n.origin.x)/i.x/h)+this.prefetchBufferSize,_=Math.floor((n.origin.y-f.ymax)/i.y/o)-this.prefetchBufferSize,v=Math.floor((n.origin.y-f.ymin)/i.y/o)+this.prefetchBufferSize;this.tileBoundary={rowStart:_,rowEnd:v,colStart:y,colEnd:g};var B,w,k;if((v-_+1)*(g-y+1)>this._MAX_TILES)return this.tiles.forEach(t.hitch(this,function(e){e.fetch&&!e.fetch.isCanceled()&&e.fetch.cancel(),e.update&&!e.update.isCanceled()&&e.update.cancel()})),void(this.tiles.length=0);var E,P,S=this.tiles,R=!1,I=this.fullBoundary.colRange,M=0;for(I&&(y<0||g>I)&&(M=y<0?-1-Math.floor(-y/I):Math.floor(g/I),this.wrapTimes=M),B=S.length-1;B>=0;B--)E=S[B].row,P=S[B].col,M&&I&&(y<0||g>I)&&(P=P>g?M*I+P:P<y?M*I+P:P),(E<_||E>v||P<y||P>g)&&(S[B].fetch&&!S[B].fetch.isCanceled()&&S[B].fetch.cancel(),S[B].update&&!S[B].update.isCanceled()&&S[B].update.cancel(),S.splice(B,1),R=!0);var T;for(B=_;B<=v;B++)for(w=y;w<=g;w++)k=new r(n.origin.x+i.x*h*w,n.origin.y-i.y*o*(B+1),n.origin.x+i.x*h*(w+1),n.origin.y-i.y*o*B,l.spatialReference),T=I?w>=0?w%I:I- -w%I:w,-1===x(S,function(e){return e.row===B&&e.col===T})&&(S.push({row:B,col:T,cellsizeX:i.x,cellsizeY:i.y,width:h,height:o,extent:k,normalizedExtent:this._wrapExtent(k),pixelBlock:null,virtual:this.virtual,level:this.level,tileType:this.tileInfo.tileType||"Raster"}),R=!0);var b=this.tileInfo.cols*(this.tileBoundary.colEnd-this.tileBoundary.colStart+1),D=this.tileInfo.rows*(this.tileBoundary.rowEnd-this.tileBoundary.rowStart+1);this.width=b,this.height=D,this.count=S.length;var C=Math.min.apply(null,S.map(function(e){return e.extent.xmin})),j=Math.max.apply(null,S.map(function(e){return e.extent.xmax})),q=Math.min.apply(null,S.map(function(e){return e.extent.ymin})),z=Math.max.apply(null,S.map(function(e){return e.extent.ymax}));this.fullExtent=new r(C,q,j,z,l.spatialReference);var G=this.fullExtent;(this.layer.roaming||this.layer.useWebGL)&&(this.layer._hasTilingEffects?(this.xformSetting.offset=[0,0],this.xformSetting.scale=[1,1]):(R&&(this._tilesChanged=!0),this.ooe,this.xformSetting.offset=[(l.xmin-G.xmin)/(G.xmax-G.xmin),-(G.ymin-l.ymin)/(G.ymax-G.ymin)],this.xformSetting.scale=[(l.xmax-l.xmin)/(G.xmax-G.xmin),(l.ymax-l.ymin)/(G.ymax-G.ymin)]))},fetchTiles:function(e){(this._tilesChanged||e)&&this._fetchTiles(e)},_fetchTiles:function(e){this._fetchCounter=0;var s=this.extent;this.fetchAllCompleted=e?new i:null,(this._tilesChanged||e&&this.layer._hasTilingEffects)&&this.tiles.forEach(t.hitch(this,function(e){e.filled=!1}));var l={};!this.layer.roaming&&this.layer._hasTilingEffects&&e?(this.identifiers.forEach(function(e,t){l[e]={extent:this.extent,pixelBlock:new h({width:this.layer._map.width,height:this.layer._map.height,pixels:[],pixelType:"",mask:null,statistics:[]})}}.bind(this)),this.originalPixelData={extent:this.extent,src:l,isEmpty:!0}):this._tilesChanged&&(this.identifiers.forEach(function(e,t){l[e]={extent:this.fullExtent,pixelBlock:new h({width:128,height:128,pixels:[],pixelType:"",mask:null,statistics:[]})}}.bind(this)),this.originalPixelData={extent:this.fullExtent,src:l,isEmpty:!0}),this.tiles.forEach(t.hitch(this,function(t){if(t.fetch)t.update||(t.update=this.updateTile(t));else{if(this._isTileOutSide(t,s))return;this._requestTile(t)}this.layer.roaming&&this.layer.useWebGL&&this._tilesChanged?this._fillPixelData(t):t.src&&e&&(this.layer._hasTilingEffects||this.layer.useWebGL)&&(this._fillPixelData(t),this.layer._hasTilingEffects&&(t.filled=!0),t.processedPixelBlock=null,t.renderedPixelBlock=null)})),0===this._fetchCounter&&(this._fetched=!0),this._tilesChanged=!1,e&&this._updateFetchStatus()},updateTile:function(e,l){var r=new i;return e.src||e.fetch?(s(e.src||e._fetched||e.fetch,t.hitch(this,function(){var i=this.layer.tileMode&&this.layer._rasterHandler&&!(this.layer._hasTilingEffects||this.layer.useWebGL),s=this.layer._drawTile,a=this._validateRawPixelBlocks(e);this.layer._hasTilingEffects&&!this.layer.useWebGL&&(s=s&&(this._progressiveGlobal||l)),(l||!l&&a)&&(i||s||this.layer.roaming)?(this.xformSetting.requireProjection&&this.layer.useWebGL&&(this.xformSetting.xformGrid=this.getXformGrid(this.xformSetting.meshSize)),this._processTile(e,l).then(t.hitch(this,function(e){r.isCanceled()||this._renderTile(e,l).then(t.hitch(this,function(e){this.hasNewData=!1,r.isCanceled()||r.resolve(e)}))}))):(l||a||(e.filled=!0),this.layer.useWebGL||this.layer._hasTilingEffects?r.resolve(this.originalPixelData):r.resolve())})),r.promise):(r.resolve(e),r.promise)},setLayer:function(e){this.layer=e},_validateRawPixelBlocks:function(e){return e&&e.src&&!this.identifiers.some(function(t){return!(e.src[t].pixelBlock&&0!==e.src[t].pixelBlock.validPixelCount&&e.src[t].pixelBlock.pixels&&e.src[t].pixelBlock.pixels.length>0)})},_wrapExtent:function(e){var t,i=e.spatialReference._getInfo();if(i){var s=i.valid[0],l=i.valid[1];(e.xmin<s-this.resolution.x||e.xmax>l+this.resolution.y)&&(t=new r((e.xmin-s)%(l-s),e.ymin,(e.xmax-l)%(l-s),e.ymax,e.spatialReference),t.xmax<t.xmin&&(t=null))}return t||e},_getIntersect:function(e,t){var i=Math.max(e.xmin,t.xmin),s=Math.max(e.ymin,t.ymin),l=Math.min(e.xmax,t.xmax),a=Math.min(e.ymax,t.ymax);return new r(i,s,l,a,e.spatialReference)},_isTileOutSide:function(e,t){var i,s,l,r,a=!1;if(e.virtual){var n=e.normalizedExtent;t=t||(this.xformSetting.requireProjection?this.layer.raster.rasterInfo.extent:this.layer.raster.projectedFullExtent),t?(i=n.xmin-this.prefetchBufferSize*this.tileInfo.cols*this.resolution.x,s=n.ymin-this.prefetchBufferSize*this.tileInfo.rows*this.resolution.y,l=n.xmax+this.prefetchBufferSize*this.tileInfo.cols*this.resolution.x,r=n.ymax+this.prefetchBufferSize*this.tileInfo.rows*this.resolution.y,a=l<=t.xmin||i>=t.xmax||r<=t.ymin||s>=t.ymax):a=!1}else a=e.level<0||e.row<this.fullBoundary.rowStart||e.row>this.fullBoundary.rowEnd||e.col<this.fullBoundary.colStart||e.col>this.fullBoundary.colEnd;return a},_resolutionEqual:function(e,t){return e===t||!!(e&&t&&Math.abs(e-t)<Math.abs(t/1e4))},_requestTile:function(e){var r,a,n=this.identifiers;if(this._isTileOutSide(e)){var h=new i;h.resolve(null),r=h.promise}else r=new l(this.layer.raster.rasterFunction?this.layer.raster.getMemberRasters().map(function(t){return t.read(e)}):[this.layer.raster.read(e)]);e.fetch=r,this._fetchCounter++,s(e.src||e._fetched||r,t.hitch(this,function(t){if(a=t&&t.some(function(e){return e[0]})){var i={};t.forEach(function(e,t){i[n[t]]=e[0]&&e[1]?{extent:e[1].extent,pixelBlock:e[1].pixelBlock,width:e[1].width,height:e[1].height}:null}),e.src=i}else e.src=null;this._fetchCounter--,0===this._fetchCounter&&(this._fetched=!0),e._fetched=!0,this._updateFetchStatus()}),t.hitch(this,function(){this._fetchCounter--,0===this._fetchCounter&&(this._fetched=!0),e._fetched=!0,this._updateFetchStatus()})),e.update=this.updateTile(e)},_updateFetchStatus:function(){this.layer._drawTile&&this.fetchAllCompleted&&!this.fetchAllCompleted.isResolved()&&(this.tiles.some(function(e){return!e._fetched})||(this.tiles.forEach(t.hitch(this,function(e){this._fillPixelData(e)})),this.fetchAllCompleted.resolve()))},_fillPixelData:function(e,i){if(e&&!e.filled){if(Math.abs(e.cellsizeX-this.resolution.x)>e.cellsizeX/10)return void(e.filled=!0);if(!1===this._validateRawPixelBlocks(e))return void(e.filled=!0);var s,l,r,a=e.extent;if(this.layer.roaming||this.layer.useWebGL&&!this.layer._hasTilingEffects?(s=this.fullExtent,l=this.tileInfo.cols*(this.tileBoundary.colEnd-this.tileBoundary.colStart+1),r=this.tileInfo.rows*(this.tileBoundary.rowEnd-this.tileBoundary.rowStart+1),i?this.originalPixelData.renderedPixelBlock||(this.originalPixelData.renderedPixelBlock=new h({width:l,height:r,pixels:[],pixelType:"",mask:null,statistics:[]})):this.identifiers.forEach(t.hitch(this,function(e){this.originalPixelData.src[e].pixelBlock.width=l,this.originalPixelData.src[e].pixelBlock.height=r}))):(s=this.extent,l=this.layer._map.width,r=this.layer._map.height,i?this.originalPixelData.renderedPixelBlock||(this.originalPixelData.renderedPixelBlock=new h({width:l,height:r,pixels:[],pixelType:"",mask:null,statistics:[]})):this.identifiers.forEach(t.hitch(this,function(e){this.originalPixelData.src[e].pixelBlock.width=l,this.originalPixelData.src[e].pixelBlock.height=r}))),s.xmax<=a.xmin||s.xmin>=a.xmax||s.ymax<=a.ymin||s.ymin>=a.ymax)return null;this.originalPixelData.isEmpty=!1,this.identifiers.forEach(t.hitch(this,function(t){e.src&&this._fillPixelBlock(e.src[t],this.originalPixelData.src[t],{extent:s,width:l,height:r},!1)})),this.hasNewData=!0}},_fillPixelBlock:function(e,t,i,s){var l=e.extent,r=i.extent,a=i.width,n=i.height;if(e.pixelBlock&&e.pixelBlock.pixels&&e.pixelBlock.pixels[0]){var h,o,c,f,x,u=(l.xmax-l.xmin)/e.width,d=Math.max(l.xmin,r.xmin),p=Math.min(l.xmax,r.xmax),m=Math.max(l.ymin,r.ymin),y=Math.min(l.ymax,r.ymax),g=Math.round((d-l.xmin)/u),_=e.width-Math.round(Math.abs(l.xmax-p)/u),v=Math.round(Math.abs(l.ymax-y)/u),B=e.height-Math.round((m-l.ymin)/u),w=Math.round((d-r.xmin)/u),k=Math.round(Math.abs(r.ymax-y)/u),E=e.pixelBlock.pixels.length,P=t.pixelBlock,S=e.width,R=P.mask||new Uint8Array(a*n),I=e.pixelBlock,M=I.mask,T=0;for(c=0;c<E;c++){for(f=I.pixels[c],x=P.pixels[c]||new f.constructor(a*n),h=v;h<B;h++)for(T=(k+h-v)*a+w,o=g;o<_;o++)x[T+o-g]=f[h*S+o];P.pixels[c]=x}if(M)for(h=v;h<B;h++)for(T=(k+h-v)*a+w,o=g;o<_;o++)R[T+o-g]=M[h*S+o];else for(h=v;h<B;h++)for(T=(k+h-v)*a+w,o=g;o<_;o++)R[T+o-g]=1;if(P.pixelType=P.pixelType||I.pixelType,P.mask=R,P.statistics&&P.statistics.length>0){if(I.statistics&&P.statistics)for(h=0;h<P.statistics.length;h++)P.statistics[h].minValue=Math.min(I.statistics[h].minValue,P.statistics[h].minValue),P.statistics[h].maxValue=Math.max(I.statistics[h].maxValue,P.statistics[h].maxValue)}else for(P.statistics=[],h=0;h<I.statistics.length;h++)P.statistics[h]={minValue:I.statistics[h].minValue,maxValue:I.statistics[h].maxValue}}},_processTile:function(e,t){var s,l=new i,r=this.layer._hasTilingEffects,a=this.layer.useWebGL,n=r||a,h=this.layer.raster.rasterFunction&&e&&(r||a||!e.processedPixelBlock);t?s=e:(this._fillPixelData(e),s=n?this.originalPixelData:e),this.xformSetting.hasNewTexture=this.hasNewData;var o;if(h)if(this.identifiers.forEach(function(e){0!==s.src[e].pixelBlock.pixels.length&&0!==s.src[e].pixelBlock.pixels[0].length||(o=!0)}),o)l.resolve({extent:s.extent,processedPixelBlock:s.src[this.identifiers[0]],pixelBlock:s.src[this.identifiers[0]]});else if(a)this.processedPixelData=this.layer.raster.rasterFunction.read(s),l.resolve(this.processedPixelData);else if(this.layer._rasterHandler)this.layer._rasterHandler.process({extent:s.extent,src:s.src}).then(function(t){r?(this.processedPixelData=t,l.resolve(this.processedPixelData)):(e.processedPixelBlock=t.pixelBlock,l.resolve(e))});else{var c=this.layer.raster.rasterFunction.read(e);e.processedPixelBlock=c.pixelBlock,l.resolve(e)}else n?l.resolve(s.src[this.identifiers[0]]):(e.pixelBlock=s.src[this.identifiers[0]]&&s.src[this.identifiers[0]].pixelBlock,l.resolve(e));return l.promise},_renderTile:function(e){var t,s=new i,l=this.layer._hasTilingEffects,r=this.layer.useWebGL,a=Math.abs((e.extent.xmax-e.extent.xmin)/e.width-this.layer.getCurrentResolution().x)>this.resolution.x/10,n=this.layer.useWebGL&&(a||this._isTileOutSide(e,this.layer._map.extent));return this.xformSetting.hasNewTexture=this.hasNewData,this.layer._rasterRenderer&&e&&(e.texture||e.src||e.pixelBlock||e.processedPixelBlock)?(t=e,r&&!n?(this.layer.raster.rasterFunction&&this.layer.raster.rasterFunction.renderTexture||this.layer._rasterRenderer.draw(t),s.resolve(e)):this.layer._rasterHandler?this.layer._rasterHandler.render({extent:t.extent,pixelBlock:t.processedPixelBlock||t.pixelBlock}).then(function(t){l?(t.renderedPixelBlock=t.pixelBlock,s.resolve(t)):(e.renderedPixelBlock=t.pixelBlock,s.resolve(e))}.bind(this)):(e.renderedPixelBlock=this.layer._rasterRenderer.draw(e).pixelBlock,s.resolve(e))):(e.renderedPixelBlock=e.processedPixelBlock||e.pixelBlock,s.resolve(e)),s.promise}})});