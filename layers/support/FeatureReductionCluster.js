/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/lang","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/JSONSupport","../../PopupTemplate","../../core/screenUtils","./commonProperties","./AggregateField","./LabelClass"],(function(e,t,o,r,p,s,l,i,a,u,n,c,d,y,b,_,f){"use strict";var g;let S=g=function(t){function o(e){var o;return(o=t.call(this,e)||this).type="cluster",o.clusterRadius=y.toPt("80px"),o.clusterMinSize=y.toPt("12px"),o.clusterMaxSize=y.toPt("50px"),o.popupEnabled=!0,o.popupTemplate=null,o.labelingInfo=null,o.labelsVisible=!0,o.fields=null,o}return e._inheritsLoose(o,t),o.prototype.clone=function(){return new g({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:r.clone(this.labelingInfo),labelsVisible:this.labelsVisible,fields:r.clone(this.fields),popupEnabled:this.popupEnabled,popupTemplate:r.clone(this.popupTemplate)})},o}(c.JSONSupport);return t.__decorate([l.property({type:["cluster"],readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),t.__decorate([l.property({type:Number,cast:e=>"auto"===e?e:y.toPt(e),json:{write:!0}})],S.prototype,"clusterRadius",void 0),t.__decorate([l.property({type:Number,cast:y.toPt,json:{write:!0}})],S.prototype,"clusterMinSize",void 0),t.__decorate([l.property({type:Number,cast:y.toPt,json:{write:!0}})],S.prototype,"clusterMaxSize",void 0),t.__decorate([l.property(b.popupEnabled)],S.prototype,"popupEnabled",void 0),t.__decorate([l.property({type:d,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],S.prototype,"popupTemplate",void 0),t.__decorate([l.property({type:[f],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],S.prototype,"labelingInfo",void 0),t.__decorate([l.property(b.labelsVisible)],S.prototype,"labelsVisible",void 0),t.__decorate([l.property({type:[_],json:{write:!0}})],S.prototype,"fields",void 0),S=g=t.__decorate([i.subclass("esri.layers.support.FeatureReductionCluster")],S),S}));