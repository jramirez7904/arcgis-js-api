/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/tslib.es6","../../../../core/has","../../../../core/Logger","../../../../core/accessorSupport/decorators/property","../../../../core/accessorSupport/decorators/cast","../../../../core/accessorSupport/decorators/subclass","../../../../core/urlUtils","../../../../core/uuid","../../../../portal/support/resourceExtension","../../../../core/Accessor","./ButtonMenuItem"],(function(e,r,t,o,s,c,u,n,p,a,i,l){"use strict";let d=function(r){function t(e){var t;return(t=r.call(this,e)||this).items=null,t.open=!1,t}return e._inheritsLoose(t,r),t.prototype.castItems=function(e){return e?e.map((e=>e instanceof l?e:new l(e))):null},t}(i);return r.__decorate([s.property()],d.prototype,"items",void 0),r.__decorate([c.cast("items")],d.prototype,"castItems",null),r.__decorate([s.property()],d.prototype,"open",void 0),d=r.__decorate([u.subclass("esri.widgets.FeatureTable.Grid.support.ButtonMenuViewModel")],d),d}));