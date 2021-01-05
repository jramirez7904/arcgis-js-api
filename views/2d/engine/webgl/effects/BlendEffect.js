/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/has","../../../../../core/maybe","../../../../../core/Logger","../../../../../core/Error","../../../../../chunks/builtins","../../../../webgl/Texture","../../../../webgl/FramebufferObject","../../../../webgl/ProgramCache","../../../../webgl/RenderingContext","../enums","../VertexStream","../shaders/BlendPrograms"],(function(e,t,r,i,n,s,a,o,d,u,c,f,h){"use strict";const l=i.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");let g=function(){function e(){this._size=[0,0]}var t=e.prototype;return t.dispose=function(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)},t.draw=function(e,t,r,i,s){const{context:a,drawPhase:o}=e;if(this._setupShader(a),i&&"normal"!==i&&o!==c.WGLDrawPhase.LABEL)return void this._drawBlended(e,t,r,i,s);const d=this._programCache.getProgram(h.blend,"normal");if(!d)return void l.error(new n("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));a.bindProgram(d),t.setSamplingMode(r),a.bindTexture(t,0),d.setUniform1i("u_layerTexture",0),d.setUniform1f("u_opacity",s),a.setBlendingEnabled(!0),a.setBlendFunction(1,771);const u=this._quad;u.draw(),u.unbind()},t._drawBlended=function(e,t,i,s,a){const{context:o,state:d,pixelRatio:u,inFadeTransition:c}=e,{size:f}=d,g=o.getBoundFramebufferObject();let _,m;if(r.isSome(g)){const e=g.descriptor;_=e.width,m=e.height}else _=Math.round(u*f[0]),m=Math.round(u*f[1]);this._createOrResizeTexture(e,_,m);const b=this._backBufferTexture;g.copyToTexture(0,0,_,m,0,0,b),o.setStencilTestEnabled(!1),o.setStencilWriteMask(0),o.setBlendingEnabled(!0),o.setDepthTestEnabled(!1),o.setDepthWriteEnabled(!1);const p=this._programCache.getProgram(h.blend,s);if(!p)return void l.error(new n("mapview-BlendEffect",`Error creating shader program for blend mode ${s}`));o.bindProgram(p),b.setSamplingMode(i),o.bindTexture(b,0),p.setUniform1i("u_backbufferTexture",0),t.setSamplingMode(i),o.bindTexture(t,1),p.setUniform1i("u_layerTexture",1),p.setUniform1f("u_opacity",a),p.setUniform1f("u_inFadeOpacity",c?1:0),o.setBlendFunction(1,0);const x=this._quad;x.draw(),x.unbind(),o.setBlendFunction(1,771)},t._setupShader=function(e){this._programCache||(this._programCache=new d(e),this._quad||(this._quad=new f(e,[-1,-1,1,-1,-1,1,1,1])))},t._createOrResizeTexture=function(e,t,r){const{context:i}=e;null!==this._backBufferTexture&&t===this._size[0]&&r===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(t,r):this._backBufferTexture=new a(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:t,height:r}),this._size[0]=t,this._size[1]=r)},e}();e.BlendEffect=g,Object.defineProperty(e,"__esModule",{value:!0})}));