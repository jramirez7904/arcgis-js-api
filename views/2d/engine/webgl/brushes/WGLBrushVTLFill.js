/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../definitions","../../../../../chunks/mat3f32","../../../../../chunks/vec4f32","../number","../enums","./WGLBrush"],(function(t,e,i,r,o,n,a,l,s){"use strict";const u=1/65536,f=[1,1,1,1];let c=function(t){function s(){var e;return(e=t.apply(this,arguments)||this)._color=n.create(),e._outlineColor=n.create(),e._fillProgramOptions={id:!1,dd:!1,pattern:!1},e._outlineProgramOptions={id:!1,dd:!1},e._patternMatrix=o.create(),e}e._inheritsLoose(s,t);var c=s.prototype;return c.dispose=function(){},c.drawMany=function(t,e){const{displayLevel:i,drawPhase:r,renderPass:o,styleLayerUID:n}=t,s=t.styleLayer,u=s.getPaintValue("fill-pattern",i),c=s.hasDataDrivenColor?f:s.getPaintValue("fill-color",i),_=s.hasDataDrivenOpacity?1:s.getPaintValue("fill-opacity",i),d=_*c[3],h=void 0!==u||d<1||s.hasDataDrivenFill;if(h&&"opaque"===o)return;this._color[0]=d*c[0],this._color[1]=d*c[1],this._color[2]=d*c[2],this._color[3]=d;let p;r===l.WGLDrawPhase.HITTEST&&(p=a.u32to4Xu8(n+1));const m=s.getPaintValue("fill-translate",i),v=s.getPaintValue("fill-translate-anchor",i);this._drawFill(t,n,s,e,m,v,u,h,p),this._drawOutline(t,n,s,e,m,v,u,p,_)},c._drawFill=function(t,e,o,n,a,s,f,c,_){const{context:d,displayLevel:h,drawPhase:p,pixelRatio:m,renderPass:v,spriteMosaic:P,state:g}=t;if(!c&&"translucent"===v)return;const T=void 0!==f,y=m>r.VTL_HIGH_RES_CUTOFF?2:1,M=o.hasDataDrivenFill,U=t.painter.getVectorTileProgramCache();let x;const D=p===l.WGLDrawPhase.HITTEST,C=(D?1:0)<<2|(M?1:0)<<1|(T?1:0),E=this._fillProgramOptions;E.id=D,E.dd=M,E.pattern=T;const I=U.getProgram(1,C,E);if(d.bindProgram(I),T){if(x=P.getMosaicItemPosition(f,!0),!x)return void d.bindProgram();I.setUniform2f("u_pattern_tl",x.tl[0],x.tl[1]),I.setUniform2f("u_pattern_br",x.br[0],x.br[1]),I.setUniform1i("u_texture",r.VTL_TEXTURE_BINDING_UNIT_SPRITES),P.bind(d,9729,x.page,r.VTL_TEXTURE_BINDING_UNIT_SPRITES)}I.setUniformMatrix3fv("u_displayMat3",1===s?g.displayMat3:g.displayViewMat3),I.setUniform2fv("u_fillTranslation",a),I.setUniform1f("u_depth",o.z+u),I.setUniform4fv("u_color",this._color),D&&I.setUniform4fv("u_id",_);for(const t of n){if(!t.layerData.has(e))continue;const r=t.layerData.get(e);r.prepareForRendering(d,U);const o=r.fillVertexArrayObject;if(!i.isNone(o)){if(d.bindVAO(o),I.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),T){const e=Math.max(Math.pow(2,Math.round(h)-t.key.level),1),i=t.coordRange[0]/(y*t.size[0]*e),r=1/(x.size[0]*i),o=1/(x.size[1]*i);this._patternMatrix[0]=r,this._patternMatrix[4]=o,I.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}d.setStencilFunction(514,t.stencilRef,255),d.drawElements(4,r.fillIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*r.fillIndexStart),t.triangleCount+=r.fillIndexCount/3}}},c._drawOutline=function(t,e,r,o,n,a,s,c,_){const{context:d,displayLevel:h,drawPhase:p,renderPass:m,pixelRatio:v,state:P}=t;if("opaque"===m)return;const g=void 0!==s;if(!(r.getPaintValue("fill-antialias",h)&&!g||r.hasDataDrivenOutlineColor))return;const T=t.painter.getVectorTileProgramCache(),y=r.hasDataDrivenOutline;if(r.outlineUsesFillColor){if(1!==this._color[3])return;this._outlineColor[0]=this._color[0],this._outlineColor[1]=this._color[1],this._outlineColor[2]=this._color[2],this._outlineColor[3]=this._color[3]}else{const t=r.hasDataDrivenOutlineColor?f:r.getPaintValue("fill-outline-color",h),e=_*t[3];this._outlineColor[0]=e*t[0],this._outlineColor[1]=e*t[1],this._outlineColor[2]=e*t[2],this._outlineColor[3]=e}const M=.75/v,U=p===l.WGLDrawPhase.HITTEST,x=(U?1:0)<<1|(y?1:0),D=this._outlineProgramOptions;D.id=U,D.dd=y;const C=T.getProgram(2,x,D);d.bindProgram(C),C.setUniformMatrix3fv("u_displayMat3",1===a?P.displayMat3:P.displayViewMat3),C.setUniform2fv("u_fillTranslation",n),C.setUniform1f("u_depth",r.z+u),C.setUniform1f("u_outline_width",M),C.setUniform4fv("u_color",this._outlineColor),U&&C.setUniform4fv("u_id",c);for(const t of o){if(!t.layerData.has(e))continue;const r=t.layerData.get(e);r.prepareForRendering(d,T);const o=r.outlineVertexArrayObject;i.isNone(o)||(d.bindVAO(o),C.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),d.setStencilFunction(514,t.stencilRef,255),d.drawElements(4,r.outlineIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*r.outlineIndexStart),t.triangleCount+=r.outlineIndexCount/3)}},s}(s);t.WGLBrushVTLFill=c,Object.defineProperty(t,"__esModule",{value:!0})}));