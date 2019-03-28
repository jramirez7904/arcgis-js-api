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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/ObjectPool","../../core/libs/gl-matrix/mat4","../../core/libs/gl-matrix/vec2","../../geometry/support/spatialReferenceUtils","../2d/engine/DisplayObject","../2d/tiling/enums","../2d/tiling/TileKey","./RenderBucket","../webgl/BufferObject"],function(e,t,r,i,s,a,f,l,n,u,h,o){var c=["fillVertexBuffer","fillDDVertexBuffer","fillIndexBuffer","outlineVertexBuffer","outlineDDVertexBuffer","outlineIndexBuffer","lineVertexBuffer","lineDDVertexBuffer","lineIndexBuffer","iconVertexBuffer","iconDDVertexBuffer","iconIndexBuffer","textVertexBuffer","textDDVertexBuffer","textIndexBuffer","circleVertexBuffer","circleIndexBuffer"];return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.call(this)||this;return i._renderBuckets=[],i._vectorTileData=null,i._symbolUpdateData=null,i.status=n.TileStatus.INITIALIZED,i.coords=[0,0],i.bounds=[0,0,0,0],i.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]},i.stencilData={mask:0,reference:0},i.status=n.TileStatus.INITIALIZED,i.tileTransform.transform=s.create(),i.tileTransform.displayCoord=a.create(),t.length>0&&(f=i.acquire).call.apply(f,[i].concat(t)),i;var f}return r(t,e),t.prototype.reset=function(){u.pool.release(this.key),this.key=null,this.refKey=null,this.coords[0]=0,this.coords[1]=0,this.bounds[0]=0,this.bounds[1]=0,this.bounds[2]=0,this.bounds[3]=0,this.width=0,this.height=0,this.resolution=null,this.rotation=0,this._vectorTileData=null,this.styleLayers=null,this.client=null,this.id=null,this.tileTransform.transform.fill(0),this.tileTransform.displayCoord.fill(0),this.stencilData.mask=0,this.stencilData.reference=0,this._renderBuckets.length=0,this._symbolUpdateData=null,this.status=n.TileStatus.INITIALIZED},t.prototype.acquire=function(e,t,r,i,s){this.key=e,this.refKey=t;var a=r.lodAt(e.level).resolution,l=r.size[0]*a,n=r.origin,u=e.col*l,h=e.row*l,o=r.spatialReference,c=o&&(o._isWrappable?o._isWrappable():o.isWrappable),D=0;if(c){var x=f.getInfo(o);D=x.valid[1]-x.valid[0]}var d=e.world*D,B=n.x+u+d,b=n.y-h,V=B+l,p=b-l;this.coords[0]=B,this.coords[1]=b,this.bounds[0]=B,this.bounds[1]=b,this.bounds[2]=V,this.bounds[3]=p,this.widthInPixels=r.size[1],this.coordRange=4096,this.resolution=a,this.rotation=s,this.styleLayers=i,this.id=e.id},t.prototype.setData=function(e,t){this._vectorTileData=e,this.client=t,e&&e.bufferDataInfo||(this.status=n.TileStatus.NO_DATA)},t.prototype.updateSymbolData=function(e){e&&(this._symbolUpdateData=e,this.requestRender())},t.prototype.dispose=function(){this.fillVertexArrayObject&&(this.fillVertexArrayObject.dispose(),this.fillVertexArrayObject=null),this.fillDDVertexArrayObject&&(this.fillDDVertexArrayObject.dispose(),this.fillDDVertexArrayObject=null),this.outlineVertexArrayObject&&(this.outlineVertexArrayObject.dispose(),this.outlineVertexArrayObject=null),this.outlineDDVertexArrayObject&&(this.outlineDDVertexArrayObject.dispose(),this.outlineDDVertexArrayObject=null),this.lineVertexArrayObject&&(this.lineVertexArrayObject.dispose(),this.lineVertexArrayObject=null),this.lineDDVertexArrayObject&&(this.lineDDVertexArrayObject.dispose(),this.lineDDVertexArrayObject=null),this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.iconDDVertexArrayObject&&(this.iconDDVertexArrayObject.dispose(),this.iconDDVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this.textDDVertexArrayObject&&(this.textDDVertexArrayObject.dispose(),this.textDDVertexArrayObject=null),this.circleVertexArrayObject&&(this.circleVertexArrayObject.dispose(),this.circleVertexArrayObject=null),this.fillVertexBuffer&&(this.fillVertexBuffer.dispose(),this.fillVertexBuffer=null),this.fillDDVertexBuffer&&(this.fillDDVertexBuffer.dispose(),this.fillDDVertexBuffer=null),this.fillIndexBuffer&&(this.fillIndexBuffer.dispose(),this.fillIndexBuffer=null),this.outlineVertexBuffer&&(this.outlineVertexBuffer.dispose(),this.outlineVertexBuffer=null),this.outlineDDVertexBuffer&&(this.outlineDDVertexBuffer.dispose(),this.outlineDDVertexBuffer=null),this.outlineIndexBuffer&&(this.outlineIndexBuffer.dispose(),this.outlineIndexBuffer=null),this.lineVertexBuffer&&(this.lineVertexBuffer.dispose(),this.lineVertexBuffer=null),this.lineDDVertexBuffer&&(this.lineDDVertexBuffer.dispose(),this.lineDDVertexBuffer=null),this.lineIndexBuffer&&(this.lineIndexBuffer.dispose(),this.lineIndexBuffer=null),this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconDDVertexBuffer&&(this.iconDDVertexBuffer.dispose(),this.iconDDVertexBuffer=null),this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textDDVertexBuffer&&(this.textDDVertexBuffer.dispose(),this.textDDVertexBuffer=null),this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.circleVertexBuffer&&(this.circleVertexBuffer.dispose(),this.circleVertexBuffer=null),this.circleIndexBuffer&&(this.circleIndexBuffer.dispose(),this.circleIndexBuffer=null),this.texture&&(this.texture.dispose(),this.texture=null),this._renderBuckets.length=0,this.status=n.TileStatus.INITIALIZED},t.prototype.getCpuMemoryUsage=function(){return null!=this._vectorTileData&&this._vectorTileData.bufferData?this._vectorTileData.bufferData.reduce(function(e,t){return e+t.byteLength},0)+this._vectorTileData.bufferDataInfo.byteLength+this._vectorTileData.bucketDataInfo.byteLength:0},t.prototype.getGpuMemoryUsage=function(){var e=this,t=c.reduce(function(t,r){return e[r]?t+e[r].size:t},0);return this.texture&&(t+=this.texture.descriptor.width*this.texture.descriptor.height*4),t},t.prototype.attach=function(e){if(this.status!==n.TileStatus.INITIALIZED)return!0;if(0===this._renderBuckets.length)for(var t=new Uint32Array(this._vectorTileData.bucketDataInfo),r=t.length,i=0;i<r;){var s=t[i],a=t[i+1];if(0===a){var f=new h.BackgroundRenderBucket;f.layerID=s,this._renderBuckets.push(f),i+=2}else if(1===a){var l=new h.FillRenderBucket;l.layerID=s,l.triangleElementStart=t[i+2],l.triangleElementCount=t[i+3],l.outlineElementStart=t[i+4],l.outlineElementCount=t[i+5],this._renderBuckets.push(l),i+=6}else if(2===a){var u=new h.LineRenderBucket;u.layerID=s,u.triangleElementStart=t[i+2],u.triangleElementCount=t[i+3],this._renderBuckets.push(u),i+=4}else if(3===a){var c=new h.SymbolRenderBucket;c.layerID=s,c.isSDF=0!==t[i+2];var D=i+3,x=t[D];if(D++,x>0)for(var d=void 0,B=void 0,b=void 0,V=0;V<x;V++)d=t[D],B=t[D+1],b=t[D+2],c.markerPerPageElementsMap.set(d,[B,b]),D+=3;var p=D,y=t[p];if(p++,y>0)for(var d=void 0,B=void 0,b=void 0,V=0;V<y;V++)d=t[p],B=t[p+1],b=t[p+2],c.glyphPerPageElementsMap.set(d,[B,b]),p+=3;this._renderBuckets.push(c),i+=5+3*x+3*y}else if(4===a){var v=new h.CircleRenderBucket;v.layerID=s,v.triangleElementStart=t[i+2],v.triangleElementCount=t[i+3],this._renderBuckets.push(v),i+=4}else console.error("Bad bucket type!")}for(var I=e.context,_=new Uint32Array(this._vectorTileData.bufferDataInfo),T=_.length,k=0,A=0;A<T;A+=2,k++){var m=_[A];if(!(_[A+1]<=0||0===this._vectorTileData.bufferData[k].byteLength))switch(m){case 1:this.fillVertexBuffer?this.fillVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.fillVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 2:this.fillDDVertexBuffer?this.fillDDVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.fillDDVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 3:this.fillIndexBuffer?this.fillIndexBuffer.setData(this._vectorTileData.bufferData[k]):this.fillIndexBuffer=o.createIndex(I,35044,this._vectorTileData.bufferData[k]);break;case 4:this.outlineVertexBuffer?this.outlineVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.outlineVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 5:this.outlineDDVertexBuffer?this.outlineDDVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.outlineDDVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 6:this.outlineIndexBuffer?this.outlineIndexBuffer.setData(this._vectorTileData.bufferData[k]):this.outlineIndexBuffer=o.createIndex(I,35044,this._vectorTileData.bufferData[k]);break;case 7:this.lineVertexBuffer?this.lineVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.lineVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 8:this.lineDDVertexBuffer?this.lineDDVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.lineDDVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 9:this.lineIndexBuffer?this.lineIndexBuffer.setData(this._vectorTileData.bufferData[k]):this.lineIndexBuffer=o.createIndex(I,35044,this._vectorTileData.bufferData[k]);break;case 10:this.iconVertexBuffer?this.iconVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.iconVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 11:this.iconDDVertexBuffer?this.iconDDVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.iconDDVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 12:this.iconIndexBuffer?this.iconIndexBuffer.setData(this._vectorTileData.bufferData[k]):this.iconIndexBuffer=o.createIndex(I,35044,this._vectorTileData.bufferData[k]);break;case 13:this.textVertexBuffer?this.textVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.textVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 14:this.textDDVertexBuffer?this.textDDVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.textDDVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 15:this.textIndexBuffer?this.textIndexBuffer.setData(this._vectorTileData.bufferData[k]):this.textIndexBuffer=o.createIndex(I,35044,this._vectorTileData.bufferData[k]);break;case 16:this.circleVertexBuffer?this.circleVertexBuffer.setData(this._vectorTileData.bufferData[k]):this.circleVertexBuffer=o.createVertex(I,35044,this._vectorTileData.bufferData[k]);break;case 17:this.circleIndexBuffer?this.circleIndexBuffer.setData(this._vectorTileData.bufferData[k]):this.circleIndexBuffer=o.createIndex(I,35044,this._vectorTileData.bufferData[k])}}return this._vectorTileData=null,this.status=n.TileStatus.READY,!0},t.prototype.detach=function(t){this.client&&this.status!==n.TileStatus.INVALID&&this.status!==n.TileStatus.INITIALIZED&&this.client.invoke("destructTileData",this.id),this.dispose(),e.prototype.detach.call(this,t)},t.prototype.doRender=function(e){if(this.visible&&this.status===n.TileStatus.READY){var t=e.context,r=e.renderer;if(t&&r){var i=e.drawphase;this._symbolUpdateData&&this._updateSymbolData(e),t.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var s=this.styleLayers,a=void 0!==e.layerOpacity?e.layerOpacity:1;if(0!==a){var f,l=this._renderBuckets.length,u=0;if(0===i)for(u=l-1;u>=0;u--)f=this._renderBuckets[u],3!==f.type&&4!==f.type&&f.hasData()&&r.renderBucket(t,f,e.displayLevel,e.requiredLevel,i,this,s.layers[f.layerID],a);else for(u=0;u<l;u++)f=this._renderBuckets[u],f.hasData()&&r.renderBucket(t,f,e.displayLevel,e.requiredLevel,i,this,s.layers[f.layerID],a)}}}},t.prototype._updateSymbolData=function(e){if(!this._symbolUpdateData.bucketDataInfo)return!0;var t=new Uint32Array(this._symbolUpdateData.bucketDataInfo),r=t.length;if(0===r)return this._symbolUpdateData=null,!0;if(this.status!==n.TileStatus.READY)return this.requestRender(),!1;for(var i=e.context,s=new Uint32Array(this._symbolUpdateData.bufferDataInfo),a=s.length,f=0,l=0;l<a;l+=2,f++){switch(s[l]){case 10:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null),this.iconVertexBuffer=o.createVertex(i,35044,this._symbolUpdateData.bufferData[f]);break;case 11:this.iconDDVertexBuffer&&(this.iconDDVertexBuffer.dispose(),this.iconDDVertexBuffer=null),this.iconDDVertexBuffer=o.createVertex(i,35044,this._symbolUpdateData.bufferData[f]);break;case 12:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null),this.iconIndexBuffer=o.createIndex(i,35044,this._symbolUpdateData.bufferData[f]);break;case 13:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null),this.textVertexBuffer=o.createVertex(i,35044,this._symbolUpdateData.bufferData[f]);break;case 14:this.textDDVertexBuffer&&(this.textDDVertexBuffer.dispose(),this.textDDVertexBuffer=null),this.textDDVertexBuffer=o.createVertex(i,35044,this._symbolUpdateData.bufferData[f]);break;case 15:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=o.createIndex(i,35044,this._symbolUpdateData.bufferData[f])}}for(var u=this._renderBuckets.length,c=0;c<u;c++){if(this._renderBuckets[c]instanceof h.SymbolRenderBucket){var D=this._renderBuckets[c];D.markerPerPageElementsMap.clear(),D.glyphPerPageElementsMap.clear()}}for(var x,d,B=0;B<r;){var b=t[B];d=-1;for(var V=this._renderBuckets.length,c=0;c<V;c++)if(this._renderBuckets[c].layerID===b){d=c;break}x=this._renderBuckets[d],x||(x=new h.SymbolRenderBucket,x.layerID=b,x.isSDF=0!==t[B+2],this._renderBuckets.push(x));var p=B+3,y=t[p];if(p++,y>0)for(var v=void 0,I=void 0,_=void 0,T=0;T<y;T++)v=t[p],I=t[p+1],_=t[p+2],x.markerPerPageElementsMap.set(v,[I,_]),p+=3;var k=p,A=t[k];if(k++,A>0)for(var v=void 0,I=void 0,_=void 0,T=0;T<A;T++)v=t[k],I=t[k+1],_=t[k+2],x.glyphPerPageElementsMap.set(v,[I,_]),k+=3;B+=5+3*y+3*A}return this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null),this.iconDDVertexArrayObject&&(this.iconDDVertexArrayObject.dispose(),this.iconDDVertexArrayObject=null),this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null),this.textDDVertexArrayObject&&(this.textDDVertexArrayObject.dispose(),this.textDDVertexArrayObject=null),this._symbolUpdateData=null,!0},t.pool=new i(t),t}(l)});