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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../2d/engine/webgl/LineTess","./Bucket","./style/StyleLayer"],function(e,t,i,r,o,s,n){var a=20,l=new o.Tessellator({distanceAlongCorrection:!0});return function(e){function t(t,i,r,s){var n=e.call(this,t,i)||this;if(n.extrudeVectorsDoubleBuffer=[o.allocExtrudeVectors(),o.allocExtrudeVectors()],n.firstExtrudeVectors=o.allocExtrudeVectors(),n.recycledTriangleBridge=o.allocTriangles(a),n.recycledTrianglePie=o.allocTriangles(a),t.hasDataDrivenLine!==r.isDataDriven())throw new Error("incompatible line buffer");return n._lineVertexBuffer=r,n._lineIndexBuffer=s,n}return i(t,e),Object.defineProperty(t.prototype,"lineIndexStart",{get:function(){return this._lineIndexStart},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"lineIndexCount",{get:function(){return this._lineIndexCount},enumerable:!0,configurable:!0}),t.prototype.assignBufferInfo=function(e){var t=e;t._lineIndexStart=this._lineIndexStart,t._lineIndexCount=this._lineIndexCount},t.prototype.processFeatures=function(e,t){this._lineIndexStart=this._lineIndexBuffer.index,this._lineIndexCount=0;var i=this.layer,r=this.zoom,o=i.hasDataDrivenLine;e&&e.setExtent(this.layerExtent);for(var s=i.getPaintValue("line-pattern",r),a=[1,1,1,1],l=1,c=1,u=0,d=this._features;u<d.length;u++){var h=d[u],f=new n.LineLayout(i,r,h);!s&&i.hasDataDrivenColor&&(a=i.getPaintValue("line-color",r,h)),i.hasDataDrivenOpacity&&(l=i.getPaintValue("line-opacity",r,h)),i.hasDataDrivenWidth&&(c=i.getPaintValue("line-width",r,h));var p=void 0;if(!(o&&(p={color:a,opacity:l,size:Math.max(Math.min(c,256),0)},p.size<=0||p.opacity<=0||p.color[3]<=0))){var x=h.getGeometry(e);this._processFeature(f,x,p)}}},t.prototype._processFeature=function(e,t,i){if(t)for(var r=t.length,o=0;o<r;o++)this._processGeometry(t[o],e,i)},t.prototype._processGeometry=function(e,t,i){if(!(e.length<2)){for(var r=e[0],s=e[e.length-1],n=s.x-r.x,a=s.y-r.y,l=n*n+a*a<1e-6,c=e[0],u=1;u<e.length;)n=e[u].x-c.x,a=e[u].y-c.y,n*n+a*a<1e-6?e.splice(u,1):(c=e[u],++u);if(!(e.length<2)){this.vertices=e,this.verticesLen=e.length,this.isClosed=l,this.cap=t.cap,this.join=t.join,this.almostParallelRads=.05,this.veryShallowRads=.1,this.miterSafeRads=o.MITER_SAFE_RADS,this.miterLimitMag=Math.min(t.miterLimit,o.SYSTEM_MAG_LIMIT),this.roundLimitRads=Math.min(t.roundLimit,.5),this.newRoundJoinsSafeRads=2.3;for(var d=this._lineIndexBuffer.index,h=0,f=void 0,p=this.verticesLen,x=0;x<p;++x){var v=e[x],y=e[(x+p-1)%p],m=l&&this._isClipEdge(y,v),g=f===this.extrudeVectorsDoubleBuffer[x%2]?this.extrudeVectorsDoubleBuffer[(x+1)%2]:this.extrudeVectorsDoubleBuffer[x%2];if(x<p-1||!l||this.hasPattern?(this._computeExtrudeVectors(g,x),this._writeGPUVertices(v.x,v.y,h,g,i),!g.capCenter||l&&x===p-1||this._writeGPUPieElements(g,m),l&&0===x&&!this.hasPattern&&o.copyExtrudeVectors(this.firstExtrudeVectors,g)):o.copyExtrudeVectors(g,this.firstExtrudeVectors),f&&this._writeGPUBridgeElements(f,g,m),x<p-1){var _=e[x+1];h+=o.length([_.x-v.x,_.y-v.y])}f=g}this._lineIndexCount+=3*(this._lineIndexBuffer.index-d)}}},t.prototype._computeExtrudeVectors=function(e,t){var i=this.vertices,r=this.verticesLen,s=this.isClosed,n=i[t],a=[void 0,void 0],l=[void 0,void 0];if(t>0&&t<r-1){var c=i[(t+r-1)%r],u=i[(t+1)%r];o.normalize(a,[n.x-c.x,n.y-c.y]),o.normalize(l,[u.x-n.x,u.y-n.y])}else if(0===t){var u=i[(t+1)%r];if(o.normalize(l,[u.x-n.x,u.y-n.y]),s){var d=i[r-2];o.normalize(a,[n.x-d.x,n.y-d.y])}else a=l}else{if(t!==r-1)return void console.error("Vertex index 'i' out of range.");var c=i[(t+r-1)%r];if(o.normalize(a,[n.x-c.x,n.y-c.y]),s){var h=i[1];o.normalize(l,[h.x-n.x,h.y-n.y])}else l=a}s||0!==t?s||t!==r-1?this._computeJoinExtrudeVectors(e,a,l):this._computeCapExtrudeVectors(e,a,l,o.CapPosition.END):this._computeCapExtrudeVectors(e,a,l,o.CapPosition.START)},t.prototype._computeCapExtrudeVectors=function(e,t,i,r){0===this.cap?l.buttCap(e,t,i):1===this.cap?l.roundCap(e,t,i,r,o.getNumberOfSlices(Math.PI),r===o.CapPosition.START?-1:1):2===this.cap?l.squareCap(e,t,i,r):l.buttCap(e,t,i)},t.prototype._computeJoinExtrudeVectors=function(e,t,i){var r=o.getRads(t,i);if(r>Math.PI-this.almostParallelRads)l.rectJoin(e,t,i);else if(0===this.join&&r>=this.veryShallowRads)l.bevelJoin(e,t,i,1);else if(1===this.join&&r>=this.veryShallowRads){var s=o.getNumberOfSlices(r),n=r<this.newRoundJoinsSafeRads;n?s<2||r<this.roundLimitRads?l.bevelJoin(e,t,i,1):l.roundJoin(e,t,i,s):l.unitRoundJoin(e,t,i,s)}else r<this.almostParallelRads?l.fastMiterJoin(e,t,i):r<this.miterSafeRads?l.miterJoin(e,t,i):l.bevelJoin(e,t,i,this.miterLimitMag)},t.prototype._writeGPUVertices=function(e,t,i,r,o){for(var s=0;s<r.vectors.count;++s){var n=r.vectors.items[s].vector[0],a=r.vectors.items[s].vector[1],l=r.vectors.items[s].texCoords[0],c=r.vectors.items[s].texCoords[1];r.vectors.items[s].base=this._lineVertexBuffer.index,this._lineVertexBuffer.add(e,t,n,a,l,c,i,o)}},t.prototype._writeGPUBridgeElements=function(e,t,i){if(l.bridge(this.recycledTriangleBridge,e,t),!i)for(var r=0;r<this.recycledTriangleBridge.count;++r){var o=this.recycledTriangleBridge.items[r];this._lineIndexBuffer.add(o.v1.base,o.v2.base,o.v3.base)}},t.prototype._writeGPUPieElements=function(e,t){if(l.pie(this.recycledTrianglePie,e),!t)for(var i=0;i<this.recycledTrianglePie.count;++i){var r=this.recycledTrianglePie.items[i];this._lineIndexBuffer.add(r.v1.base,r.v2.base,r.v3.base)}},t.prototype._isClipEdge=function(e,t){return e.x===t.x?e.x<=-64||e.x>=4160:e.y===t.y&&(e.y<=-64||e.y>=4160)},t}(s)});