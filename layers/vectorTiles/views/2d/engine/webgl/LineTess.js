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

define(["require","exports"],function(t,o){function e(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push({v1:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v2:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]},v3:{vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]}});return e}function r(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push(void 0);return e}function i(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push({vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0]});return e}function s(){var t=i(30),o={};return o[b.ENTRY]=r(20),o[b.EXIT]=r(20),o[b.CAP]=r(20),{vectors:t,lists:o}}function c(t,o){var e;for(e=0;e<o.vectors.count;++e)t.vectors.items[e].vector[0]=o.vectors.items[e].vector[0],t.vectors.items[e].vector[1]=o.vectors.items[e].vector[1],t.vectors.items[e].texCoords[0]=o.vectors.items[e].texCoords[0],t.vectors.items[e].texCoords[1]=o.vectors.items[e].texCoords[1],t.vectors.items[e].direction[0]=o.vectors.items[e].direction[0],t.vectors.items[e].direction[1]=o.vectors.items[e].direction[1],t.vectors.items[e].base=o.vectors.items[e].base;t.vectors.count=o.vectors.count;var r=o.lists[b.ENTRY],i=t.lists[b.ENTRY],s=o.lists[b.EXIT],c=t.lists[b.EXIT],v=o.lists[b.CAP],n=t.lists[b.CAP];for(e=0;e<r.count;++e)i.items[e]=r.items[e];for(i.count=r.count,e=0;e<s.count;++e)c.items[e]=s.items[e];for(c.count=s.count,e=0;e<v.count;++e)n.items[e]=v.items[e];n.count=v.count,t.capCenter=o.capCenter}function v(t,o){I.vector[0]=t.vector[0],I.vector[1]=t.vector[1],I.texCoords[0]=t.texCoords[0],I.texCoords[1]=t.texCoords[1],I.direction[0]=t.direction[0],I.direction[1]=t.direction[1],I.base=t.base,t.vector[0]=o.vector[0],t.vector[1]=o.vector[1],t.texCoords[0]=o.texCoords[0],t.texCoords[1]=o.texCoords[1],t.direction[0]=o.direction[0],t.direction[1]=o.direction[1],t.base=o.base,o.vector[0]=I.vector[0],o.vector[1]=I.vector[1],o.texCoords[0]=I.texCoords[0],o.texCoords[1]=I.texCoords[1],o.direction[0]=I.direction[0],o.direction[1]=I.direction[1],o.base=I.base}function n(t,o){return t[0]*o[0]+t[1]*o[1]}function d(t){return Math.sqrt(n(t,t))}function a(t,o){var e=d(o);return t[0]=o[0]/e,t[1]=o[1]/e,t}function C(t,o){return t[0]=-o[1],t[1]=o[0],t}function u(t,o){return t[0]*o[1]-t[1]*o[0]}function m(t,o){return t[0]=-o[0],t[1]=-o[1],t}function x(t,o,e){return t[0]=o[0]*e,t[1]=o[1]*e,t}function l(t,o,e){return t[0]=o[0]+e[0],t[1]=o[1]+e[1],t}function f(t,o,e){return(o[0]-t[0])*(e[1]-t[1])-(e[0]-t[0])*(o[1]-t[1])}function A(t,o,e){return f(t,o,e)<0}function T(t){return Math.max(Math.round(t*g),1)}function p(t,o){var e=n(t,o);return e>.999?0:e<-.999?Math.PI:Math.acos(e)}function h(t,o,e,r,i){if(0===r)return void(t.count=0);var s,c=d(o),v=x(P[0],o,1/c),n=x(P[1],e,1/c),a=p(v,n),C=(i?-1:1)*a/r,u=Math.cos(C),m=Math.sin(C),l=o[0],f=o[1];for(s=0;s<r-1;++s){var A=l,T=f;l=u*A-m*T,f=m*A+u*T,t.items[s][0]=l,t.items[s][1]=f}t.count=r-1}function E(t){var o,e=t.count,r=Math.floor(e/2);for(o=0;o<r;++o){var i=t.items[o];t.items[o]=t.items[e-o-1],t.items[e-o-1]=i}}Object.defineProperty(o,"__esModule",{value:!0});var b;!function(t){t[t.ENTRY=1]="ENTRY",t[t.EXIT=2]="EXIT",t[t.CAP=3]="CAP"}(b=o.VectorRole||(o.VectorRole={}));var M;!function(t){t[t.START=1]="START",t[t.END=2]="END"}(M=o.CapPosition||(o.CapPosition={})),o.SYSTEM_MAG_LIMIT=3.8,o.MITER_SAFE_RADS=2*Math.acos(1/o.SYSTEM_MAG_LIMIT);var _=o.SYSTEM_MAG_LIMIT*o.SYSTEM_MAG_LIMIT,g=16/(2*Math.PI);o.allocTriangles=e,o.allocExtrudeVectors=s,o.copyExtrudeVectors=c;var I={vector:[void 0,void 0],texCoords:[void 0,void 0],direction:[void 0,void 0],base:void 0};o.swapExtrudeVectors=v;var R,P=[];for(R=0;R<32;++R)P.push([void 0,void 0]);var Y=function(t){var o,e={items:new Array,count:0};for(o=0;o<t;++o)e.items.push([void 0,void 0]);return e}(16);o.length=d,o.normalize=a,o.getNumberOfSlices=T,o.getRads=p,o.reverse=E;var N=[void 0,void 0],X=[void 0,void 0],y=[0,0],S=[0,0],J=[0,0],q=[0,0],w=Math.cos(Math.PI/4),V=Math.sin(Math.PI/4),G=Math.sqrt(2),L=function(){function t(t){this._distanceAlongCorrection=t.distanceAlongCorrection}return t.prototype.bridge=function(t,o,e){var r,i,s,c,n=o.vectors,d=o.lists[b.EXIT],a=e.vectors,C=e.lists[b.ENTRY];if(d.count===C.count+1)r=d.items,i=n.items,s=C.items,c=a.items;else if(C.count===d.count+1)r=C.items,i=a.items,s=d.items,c=n.items;else{if(d.count!==C.count)return console.error("Cannot bridge "+d.count+" to "+C.count+"."),void(t.count=0);r=C.items,i=a.items,s=d.items,c=n.items}var u=d.count+C.count-2;t.count=u,N[0]=r,N[1]=s,X[0]=i,X[1]=c;var m;for(m=0;m<u;++m){var x=t.items[m],l=(m+0)%2,f=Math.floor((m+0)/2),T=X[l][N[l][f]];x.v1.vector[0]=T.vector[0],x.v1.vector[1]=T.vector[1],x.v1.texCoords[0]=T.texCoords[0],x.v1.texCoords[1]=T.texCoords[1],x.v1.direction[0]=T.direction[0],x.v1.direction[1]=T.direction[1],x.v1.base=T.base;var p=(m+1)%2,h=Math.floor((m+1)/2),E=X[p][N[p][h]];x.v2.vector[0]=E.vector[0],x.v2.vector[1]=E.vector[1],x.v2.texCoords[0]=E.texCoords[0],x.v2.texCoords[1]=E.texCoords[1],x.v2.direction[0]=E.direction[0],x.v2.direction[1]=E.direction[1],x.v2.base=E.base;var M=(m+2)%2,_=Math.floor((m+2)/2),g=X[M][N[M][_]];x.v3.vector[0]=g.vector[0],x.v3.vector[1]=g.vector[1],x.v3.texCoords[0]=g.texCoords[0],x.v3.texCoords[1]=g.texCoords[1],x.v3.direction[0]=g.direction[0],x.v3.direction[1]=g.direction[1],x.v3.base=g.base;var I=x.v1.base&&x.v1.base.point||y,R=x.v2.base&&x.v2.base.point||y,P=x.v3.base&&x.v3.base.point||y;S[0]=I[0]+x.v1.vector[0],S[1]=I[1]+x.v1.vector[1],J[0]=R[0]+x.v2.vector[0],J[1]=R[1]+x.v2.vector[1],q[0]=P[0]+x.v3.vector[0],q[1]=P[1]+x.v3.vector[1],A(S,J,q)||v(x.v2,x.v3)}},t.prototype.pie=function(t,o){if(0===o.lists[b.CAP].count)return void(t.count=0);if(1===o.lists[b.CAP].count)return console.error("A single vector is not enough to define a pie."),void(t.count=0);t.count=o.lists[b.CAP].count-1;var e;for(e=0;e<t.count;++e){var r=t.items[e],i=o.lists[b.CAP].items[e],s=o.vectors.items[i];r.v1.vector[0]=s.vector[0],r.v1.vector[1]=s.vector[1],r.v1.texCoords[0]=s.texCoords[0],r.v1.texCoords[1]=s.texCoords[1],r.v1.direction[0]=s.direction[0],r.v1.direction[1]=s.direction[1],r.v1.base=s.base;var c=o.lists[b.CAP].items[e+1],n=o.vectors.items[c];r.v2.vector[0]=n.vector[0],r.v2.vector[1]=n.vector[1],r.v2.texCoords[0]=n.texCoords[0],r.v2.texCoords[1]=n.texCoords[1],r.v2.direction[0]=n.direction[0],r.v2.direction[1]=n.direction[1],r.v2.base=n.base;var d=o.capCenter,a=o.vectors.items[d];r.v3.vector[0]=a.vector[0],r.v3.vector[1]=a.vector[1],r.v3.texCoords[0]=a.texCoords[0],r.v3.texCoords[1]=a.texCoords[1],r.v3.direction[0]=a.direction[0],r.v3.direction[1]=a.direction[1],r.v3.base=a.base;var C=r.v1.base&&r.v1.base.point||y,u=r.v2.base&&r.v2.base.point||y,m=r.v3.base&&r.v3.base.point||y;S[0]=C[0]+r.v1.vector[0],S[1]=C[1]+r.v1.vector[1],J[0]=u[0]+r.v2.vector[0],J[1]=u[1]+r.v2.vector[1],q[0]=m[0]+r.v3.vector[0],q[1]=m[1]+r.v3.vector[1],A(S,J,q)||v(r.v2,r.v3)}},t.prototype.buttCap=function(t,o,e){this.fastMiterJoin(t,o,e)},t.prototype.roundCap=function(t,o,e,r,i,s){void 0===s&&(s=0),this.fastMiterJoin(t,o,e);var c=r===M.START?0:1,v=r===M.START?1:0;t.capCenter=t.vectors.count;var n=t.vectors.items[t.capCenter];n.vector[0]=0,n.vector[1]=0,n.texCoords[0]=0,n.texCoords[1]=0,n.direction[0]=0,n.direction[1]=0,++t.vectors.count,h(Y,t.vectors.items[c].vector,t.vectors.items[v].vector,i,!1);var d=t.vectors.count,a=t.lists[b.CAP];a.items[0]=c;var C,u=t.vectors.items[c].texCoords[1],m=t.vectors.items[v].texCoords[1];for(C=0;C<Y.count;++C){var x=s*(1-Math.abs(Y.count/2-C)/(Y.count/2)),l=u+C/(Y.count-1)*(m-u),f=Y.items[C],A=t.vectors.items[d+C];A.vector[0]=f[0],A.vector[1]=f[1],A.texCoords[0]=x,A.texCoords[1]=l,A.direction[0]=0,A.direction[1]=0,a.items[C+1]=d+C}a.items[Y.count+1]=v,a.count=Y.count+2,t.vectors.count=d+Y.count},t.prototype.squareCap=function(t,o,e,r){this.fastMiterJoin(t,o,e);var i=r===M.START?0:1,s=r===M.START?1:0,c=P[0],v=P[1],n=P[2],d=P[3],a=P[4],C=t.vectors.items[i].vector;c[0]=w*C[0]-V*C[1],c[1]=V*C[0]+w*C[1],x(d,c,G),v[0]=w*c[0]-V*c[1],v[1]=V*c[0]+w*c[1],n[0]=w*v[0]-V*v[1],n[1]=V*v[0]+w*v[1],x(a,n,G);var u=t.vectors.items[i];u.vector[0]=d[0],u.vector[1]=d[1];var m=t.vectors.items[s];m.vector[0]=a[0],m.vector[1]=a[1]},t.prototype.fastMiterJoin=function(t,o,e){var r=C(P[0],e),i=r,s=m(P[1],r),c=t.vectors.items[0];c.vector[0]=i[0],c.vector[1]=i[1],c.texCoords[0]=0,c.texCoords[1]=-1,c.direction[0]=0,c.direction[1]=0;var v=t.vectors.items[1];v.vector[0]=s[0],v.vector[1]=s[1],v.texCoords[0]=0,v.texCoords[1]=1,v.direction[0]=0,v.direction[1]=0,t.vectors.count=2;var n=t.lists[b.ENTRY];n.items[0]=0,n.items[1]=1,n.count=2;var d=t.lists[b.EXIT];d.items[0]=0,d.items[1]=1,d.count=2,t.lists[b.CAP].count=0,t.capCenter=void 0},t.prototype.miterJoin=function(t,o,e){var r=C(P[0],o),i=C(P[1],e),s=P[2];s[0]=r[0]+i[0],s[1]=r[1]+i[1];var c=a(P[3],s),v=n(c,r);c=x(P[4],c,1/v);var d=m(P[5],c);if(this._distanceAlongCorrection){var u=t.vectors.items[0];u.vector[0]=c[0],u.vector[1]=c[1],u.texCoords[0]=0,u.texCoords[1]=-1,u.direction[0]=o[0],u.direction[1]=o[1];var l=t.vectors.items[1];l.vector[0]=d[0],l.vector[1]=d[1],l.texCoords[0]=0,l.texCoords[1]=1,l.direction[0]=o[0],l.direction[1]=o[1];var f=t.vectors.items[2];f.vector[0]=c[0],f.vector[1]=c[1],f.texCoords[0]=0,f.texCoords[1]=-1,f.direction[0]=e[0],f.direction[1]=e[1];var A=t.vectors.items[3];A.vector[0]=d[0],A.vector[1]=d[1],A.texCoords[0]=0,A.texCoords[1]=1,A.direction[0]=e[0],A.direction[1]=e[1],t.vectors.count=4;var T=t.lists[b.ENTRY];T.items[0]=0,T.items[1]=1,T.count=2;var p=t.lists[b.EXIT];p.items[0]=2,p.items[1]=3,p.count=2}else{var u=t.vectors.items[0];u.vector[0]=c[0],u.vector[1]=c[1],u.texCoords[0]=0,u.texCoords[1]=-1,u.direction[0]=0,u.direction[1]=0;var l=t.vectors.items[1];l.vector[0]=d[0],l.vector[1]=d[1],l.texCoords[0]=0,l.texCoords[1]=1,l.direction[0]=0,l.direction[1]=0,t.vectors.count=2;var T=t.lists[b.ENTRY];T.items[0]=0,T.items[1]=1,T.count=2;var p=t.lists[b.EXIT];p.items[0]=0,p.items[1]=1,p.count=2}t.lists[b.CAP].count=0,t.capCenter=void 0},t.prototype.bevelJoin=function(t,o,e,r){var i=r*r,s=u(o,e),c=s>0?[-1,1]:[1,-1],v=c[0],d=c[1],f=s>0?m(P[0],C(P[1],o)):C(P[2],o),A=s>0?m(P[3],C(P[4],e)):C(P[5],e),T=P[6];T[0]=f[0]+A[0],T[1]=f[1]+A[1];var p=a(P[7],T),h=m(P[8],p),M=n(p,f),g=u(p,f),I=Math.abs(g/M),R=1+I*I,Y=R<_?[I,this._distanceAlongCorrection]:[Math.sqrt(_-1),!0],N=Y[0],X=Y[1],y=R<i?[I,this._distanceAlongCorrection]:[Math.sqrt(i-1),!0],S=y[0],J=y[1];if(J&&X){var q=t.vectors.items[0];l(q.vector,m(P[9],f),x(P[10],m(P[11],o),N)),q.texCoords[0]=0,q.texCoords[1]=v,q.direction[0]=this._distanceAlongCorrection?o[0]:0,q.direction[1]=this._distanceAlongCorrection?o[1]:0;var w=t.vectors.items[1];l(w.vector,m(P[12],A),x(P[13],e,N)),w.texCoords[0]=0,w.texCoords[1]=v,w.direction[0]=this._distanceAlongCorrection?e[0]:0,w.direction[1]=this._distanceAlongCorrection?e[1]:0;var V=t.vectors.items[2];V.vector[0]=0,V.vector[1]=0,V.texCoords[0]=0,V.texCoords[1]=0,V.direction[0]=0,V.direction[1]=0;var G=t.vectors.items[3];l(G.vector,f,x(P[14],o,S)),G.texCoords[0]=0,G.texCoords[1]=d,G.direction[0]=this._distanceAlongCorrection?o[0]:0,G.direction[1]=this._distanceAlongCorrection?o[1]:0;var L=t.vectors.items[4];l(L.vector,A,x(P[15],m(P[16],e),S)),L.texCoords[0]=0,L.texCoords[1]=d,L.direction[0]=this._distanceAlongCorrection?e[0]:0,L.direction[1]=this._distanceAlongCorrection?e[1]:0,t.vectors.count=5;var D=t.lists[b.ENTRY];D.items[0]=0,D.items[1]=2,D.items[2]=3,D.count=3;var O=t.lists[b.EXIT];if(O.items[0]=1,O.items[1]=2,O.items[2]=4,O.count=3,R<i){var j=t.lists[b.CAP];j.count=0,t.capCenter=void 0}else{var j=t.lists[b.CAP];j.items[0]=3,j.items[1]=4,j.count=2,t.capCenter=2}}else if(!J&&X){var q=t.vectors.items[0];l(q.vector,m(P[9],f),x(P[10],m(P[11],o),N)),q.texCoords[0]=0,q.texCoords[1]=v,q.direction[0]=this._distanceAlongCorrection?o[0]:0,q.direction[1]=this._distanceAlongCorrection?o[1]:0;var w=t.vectors.items[1];l(w.vector,m(P[12],A),x(P[13],e,N)),w.texCoords[0]=0,w.texCoords[1]=v,w.direction[0]=this._distanceAlongCorrection?e[0]:0,w.direction[1]=this._distanceAlongCorrection?e[1]:0;var V=t.vectors.items[2];V.vector[0]=0,V.vector[1]=0,V.texCoords[0]=0,V.texCoords[1]=0,V.direction[0]=0,V.direction[1]=0;var G=t.vectors.items[3];x(G.vector,p,1/M),G.texCoords[0]=0,G.texCoords[1]=d,G.direction[0]=0,G.direction[1]=0,t.vectors.count=4;var D=t.lists[b.ENTRY];D.items[0]=0,D.items[1]=2,D.items[2]=3,D.count=3;var O=t.lists[b.EXIT];O.items[0]=1,O.items[1]=2,O.items[2]=3,O.count=3,t.lists[b.CAP].count=0,t.capCenter=void 0}else if(J&&!X){var q=t.vectors.items[0];x(q.vector,h,1/M),q.texCoords[0]=0,q.texCoords[1]=v,q.direction[0]=0,q.direction[1]=0;var w=t.vectors.items[1];w.vector[0]=0,w.vector[1]=0,w.texCoords[0]=0,w.texCoords[1]=0,w.direction[0]=0,w.direction[1]=0;var V=t.vectors.items[2];l(V.vector,f,x(P[9],o,S)),V.texCoords[0]=0,V.texCoords[1]=d,V.direction[0]=this._distanceAlongCorrection?o[0]:0,V.direction[1]=this._distanceAlongCorrection?o[1]:0;var G=t.vectors.items[3];l(G.vector,A,x(P[10],m(P[11],e),S)),G.texCoords[0]=0,G.texCoords[1]=d,G.direction[0]=this._distanceAlongCorrection?e[0]:0,G.direction[1]=this._distanceAlongCorrection?e[1]:0,t.vectors.count=4;var D=t.lists[b.ENTRY];D.items[0]=0,D.items[1]=1,D.items[2]=2,D.count=3;var O=t.lists[b.EXIT];if(O.items[0]=0,O.items[1]=1,O.items[2]=3,O.count=3,R<i){var j=t.lists[b.CAP];j.count=0,t.capCenter=void 0}else{var j=t.lists[b.CAP];j.items[0]=2,j.items[1]=3,j.count=2,t.capCenter=1}}else if(!J&&!X){var q=t.vectors.items[0];x(q.vector,h,1/M),q.texCoords[0]=0,q.texCoords[1]=v,q.direction[0]=0,q.direction[1]=0;var w=t.vectors.items[1];x(w.vector,p,1/M),w.texCoords[0]=0,w.texCoords[1]=d,w.direction[0]=0,w.direction[1]=0,t.vectors.count=2;var D=t.lists[b.ENTRY];D.items[0]=0,D.items[1]=1,D.count=2;var O=t.lists[b.EXIT];O.items[0]=0,O.items[1]=1,O.count=2,t.lists[b.CAP].count=0,t.capCenter=void 0}s<0&&(E(t.lists[b.ENTRY]),E(t.lists[b.EXIT]))},t.prototype.roundJoin=function(t,o,e,r){var i=u(o,e),s=i>0?[-1,1]:[1,-1],c=s[0],v=s[1],d=i>0?m(P[0],C(P[1],o)):C(P[2],o),f=i>0?m(P[3],C(P[4],e)):C(P[5],e),A=P[6];A[0]=d[0]+f[0],A[1]=d[1]+f[1];var T=a(P[7],A),p=m(P[8],T),M=n(T,d),g=u(T,d),I=Math.abs(g/M),R=1+I*I,N=R<_?[I,this._distanceAlongCorrection]:[Math.sqrt(_-1),!0],X=N[0];if(N[1]){var y=t.vectors.items[0];y.vector[0]=d[0],y.vector[1]=d[1],y.texCoords[0]=0,y.texCoords[1]=v,y.direction[0]=0,y.direction[1]=0;var S=t.vectors.items[1];S.vector[0]=f[0],S.vector[1]=f[1],S.texCoords[0]=0,S.texCoords[1]=v,S.direction[0]=0,S.direction[1]=0;var J=t.vectors.items[2];l(J.vector,m(P[9],d),x(P[10],m(P[11],o),X)),J.texCoords[0]=0,J.texCoords[1]=c,J.direction[0]=this._distanceAlongCorrection?o[0]:0,J.direction[1]=this._distanceAlongCorrection?o[1]:0;var q=t.vectors.items[3];l(q.vector,m(P[12],f),x(P[13],e,X)),q.texCoords[0]=0,q.texCoords[1]=c,q.direction[0]=this._distanceAlongCorrection?e[0]:0,q.direction[1]=this._distanceAlongCorrection?e[1]:0;var w=t.vectors.items[4];w.vector[0]=0,w.vector[1]=0,w.texCoords[0]=0,w.texCoords[1]=0,w.direction[0]=0,w.direction[1]=0,t.vectors.count=5;var V=t.lists[b.ENTRY];V.items[0]=2,V.items[1]=4,V.items[2]=0,V.count=3;var G=t.lists[b.EXIT];G.items[0]=3,G.items[1]=4,G.items[2]=1,G.count=3,t.capCenter=4}else{var y=t.vectors.items[0];y.vector[0]=d[0],y.vector[1]=d[1],y.texCoords[0]=0,y.texCoords[1]=v,y.direction[0]=0,y.direction[1]=0;var S=t.vectors.items[1];S.vector[0]=f[0],S.vector[1]=f[1],S.texCoords[0]=0,S.texCoords[1]=v,S.direction[0]=0,S.direction[1]=0;var J=t.vectors.items[2];x(J.vector,p,1/M),J.texCoords[0]=0,J.texCoords[1]=c,J.direction[0]=0,J.direction[1]=0;var q=t.vectors.items[3];q.vector[0]=0,q.vector[1]=0,q.texCoords[0]=0,q.texCoords[1]=0,q.direction[0]=0,q.direction[1]=0,t.vectors.count=4;var V=t.lists[b.ENTRY];V.items[0]=2,V.items[1]=3,V.items[2]=0,V.count=3;var G=t.lists[b.EXIT];G.items[0]=2,G.items[1]=3,G.items[2]=1,G.count=3,t.capCenter=3}h(Y,d,f,r,i<0);var L=t.vectors.count,D=t.lists[b.CAP];D.items[0]=0;var O;for(O=0;O<Y.count;++O){var j=Y.items[O],z=t.vectors.items[L+O];z.vector[0]=j[0],z.vector[1]=j[1],z.texCoords[0]=0,z.texCoords[1]=v,z.direction[0]=0,z.direction[1]=0,D.items[O+1]=L+O}D.items[Y.count+1]=1,D.count=Y.count+2,t.vectors.count=L+Y.count,i<0&&(E(t.lists[b.ENTRY]),E(t.lists[b.EXIT]))},t.prototype.unitRoundJoin=function(t,o,e,r){var i=u(o,e),s=i>0?[-1,1]:[1,-1],c=s[0],v=s[1],n=i>0?m(P[0],C(P[1],o)):C(P[2],o),d=i>0?m(P[3],C(P[4],e)):C(P[5],e),a=t.vectors.items[0];a.vector[0]=n[0],a.vector[1]=n[1],a.texCoords[0]=0,a.texCoords[1]=v,a.direction[0]=0,a.direction[1]=0;var x=t.vectors.items[1];x.vector[0]=d[0],x.vector[1]=d[1],x.texCoords[0]=0,x.texCoords[1]=v,x.direction[0]=0,x.direction[1]=0;var l=t.vectors.items[2];m(l.vector,n),l.texCoords[0]=0,l.texCoords[1]=c,l.direction[0]=0,l.direction[1]=0;var f=t.vectors.items[3];m(f.vector,d),f.texCoords[0]=0,f.texCoords[1]=c,f.direction[0]=0,f.direction[1]=0;var A=t.vectors.items[4];A.vector[0]=0,A.vector[1]=0,A.texCoords[0]=0,A.texCoords[1]=0,A.direction[0]=0,A.direction[1]=0,t.vectors.count=5;var T=t.lists[b.ENTRY];T.items[0]=2,T.items[1]=0,T.count=2;var p=t.lists[b.EXIT];p.items[0]=3,p.items[1]=1,p.count=2,t.capCenter=4,h(Y,n,d,r,i<0);var M=t.vectors.count,_=t.lists[b.CAP];_.items[0]=0;var g;for(g=0;g<Y.count;++g){var I=Y.items[g],R=t.vectors.items[M+g];R.vector[0]=I[0],R.vector[1]=I[1],R.texCoords[0]=0,R.texCoords[1]=v,R.direction[0]=0,R.direction[1]=0,_.items[g+1]=M+g}_.items[Y.count+1]=1,_.count=Y.count+2,t.vectors.count=M+Y.count,i<0&&(E(t.lists[b.ENTRY]),E(t.lists[b.EXIT]))},t.prototype.rectJoin=function(t,o,e){var r=C(P[0],o),i=C(P[1],e),s=t.vectors.items[0];s.vector[0]=r[0],s.vector[1]=r[1],s.texCoords[0]=0,s.texCoords[1]=-1,s.direction[0]=0,s.direction[1]=0;var c=t.vectors.items[1];c.vector[0]=i[0],c.vector[1]=i[1],c.texCoords[0]=0,c.texCoords[1]=-1,c.direction[0]=0,c.direction[1]=0;var v=t.vectors.items[2];m(v.vector,r),v.texCoords[0]=0,v.texCoords[1]=1,v.direction[0]=0,v.direction[1]=0;var n=t.vectors.items[3];m(n.vector,i),n.texCoords[0]=0,n.texCoords[1]=1,n.direction[0]=0,n.direction[1]=0,t.vectors.count=4;var d=t.lists[b.ENTRY];d.items[0]=0,d.items[1]=2,d.count=2;var a=t.lists[b.EXIT];a.items[0]=1,a.items[1]=3,a.count=2,t.capCenter=void 0},t}();o.Tessellator=L});