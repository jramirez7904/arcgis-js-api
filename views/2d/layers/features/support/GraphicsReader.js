/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../geometry/support/jsonUtils","../../../../../layers/graphics/featureConversionUtils","./FeatureSetReader","./FeatureSetReaderJSON"],(function(e,t,r,n,o,s){"use strict";let u=function(e){function s(t,r){return e.call(this,t,r,null)||this}t._inheritsLoose(s,e),s.from=function(e){const t=o.FeatureSetReader.createInstance(),u=[],i=e.filter((e=>!!e.geometry));for(const e of i){const t=r.getJsonType(e.geometry);n.convertFromGraphics(u,[e],t,!1,!1,"uid")}return new s(t,u)};var u=s.prototype;return u.readGraphic=function(){return this._current},u.getCursor=function(){return this.copy()},u.copy=function(){const e=new s(this.instance,this._features);return this.copyInto(e),e},t._createClass(s,[{key:"geometryType",get:function(){const e=this._current;return e?e.geometryType:null}}]),s}(s.FeatureSetReaderJSON);e.GraphicsReader=u,Object.defineProperty(e,"__esModule",{value:!0})}));