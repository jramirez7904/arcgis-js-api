/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/has","../../../../../core/mathUtils","../definitions","../../../../../chunks/mat3f32","../../../../../chunks/builtins","../../../../webgl/BufferObject","../../../../webgl/VertexArrayObject","../../../../webgl/FramebufferObject","../../../../webgl/programUtils","../../../../webgl/RenderingContext","../../../../../chunks/vec4f32","../number","../enums","./WGLBrush","../../vectorTiles/shaders/Programs"],(function(t,e,r,o,i,s,a,n,c,u,_,l,f,p,h,d,g){"use strict";let m=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._color=f.fromValues(1,0,0,1),e._patternMatrix=s.create(),e._programOptions={id:!1,pattern:!1},e}e._inheritsLoose(r,t);var o=r.prototype;return o.dispose=function(){this._program&&(this._program.dispose(),this._program=null),this._vao&&(this._vao.dispose(),this._vao=null)},o.drawMany=function(t,e){const{context:r,styleLayerUID:o}=t;this._loadWGLResources(r);const s=t.displayLevel,a=t.styleLayer,n=t.painter.getVectorTileProgramCache(),c=a.getPaintValue("background-color",s),u=a.getPaintValue("background-opacity",s),_=a.getPaintValue("background-pattern",s),l=void 0!==_,f=c[3]*u,d=1|window.devicePixelRatio,g=t.spriteMosaic;let m;const b=d>i.VTL_HIGH_RES_CUTOFF?2:1,v=t.drawPhase===h.WGLDrawPhase.HITTEST,y=(v?1:0)<<1|(l?1:0),T=this._programOptions;T.id=v,T.pattern=l;const U=n.getProgram(0,y,T);if(r.bindVAO(this._vao),r.bindProgram(U),l){if(m=g.getMosaicItemPosition(_,!0),!m)return;U.setUniform1f("u_opacity",u),U.setUniform2f("u_pattern_tl",m.tl[0],m.tl[1]),U.setUniform2f("u_pattern_br",m.br[0],m.br[1]),U.setUniform1i("u_texture",i.VTL_TEXTURE_BINDING_UNIT_SPRITES),g.bind(r,9729,m.page,i.VTL_TEXTURE_BINDING_UNIT_SPRITES)}else this._color[0]=f*c[0],this._color[1]=f*c[1],this._color[2]=f*c[2],this._color[3]=f,U.setUniform4fv("u_color",this._color);if(U.setUniform1f("u_depth",a.z||0),v){const t=p.u32to4Xu8(o+1);U.setUniform4fv("u_id",t)}for(const t of e){if(U.setUniform1f("u_coord_range",t.coordRange[0]),U.setUniformMatrix3fv("u_dvsMat3",t.transforms.dvs),l){const e=Math.max(Math.pow(2,Math.round(s)-t.key.level),1),r=b*t.size[0]*e,o=r/m.size[0],i=r/m.size[1];this._patternMatrix[0]=o,this._patternMatrix[4]=i,U.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}r.setStencilFunction(514,t.stencilRef,255),r.drawArrays(5,0,4)}},o._loadWGLResources=function(t){if(this._program&&this._vao)return;const e=_.createProgram(t,g.background);if(!e)return;const r=new Int8Array([0,0,1,0,0,1,1,1]),o=n.createVertex(t,35044,r),i=new c(t,g.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:o});this._program=e,this._vao=i},r}(d);t.WGLBrushVTLBackground=m,Object.defineProperty(t,"__esModule",{value:!0})}));