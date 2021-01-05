/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/Collection","../core/collectionUtils"],(function(e,t,r,s,o,n,i,a,l,c,u,p,d){"use strict";const f="esri.support.TablesMixin",b=o.getLogger(f);function y(e){return e&&"group"===e.type}function h(e,t,r){if(e)for(let s=0,o=e.length;s<o;s++){const o=e.getItemAt(s);if(o[t]===r)return o;if(y(o)){const e=h(o.tables,t,r);if(e)return e}}}e.TablesMixin=e=>{let s=function(e){function r(...r){var s;return(s=e.call(this,...r)||this).tables=new p,s.tables.on("after-add",(e=>{const r=e.item;r.parent&&r.parent!==t._assertThisInitialized(s)&&"tables"in r.parent&&r.parent.tables.remove(r),r.parent=t._assertThisInitialized(s),"feature"!==r.type&&b.error(`Layer 'title:${r.title}, id:${r.id}' of type '${r.type}' is not supported as a table and will therefore be ignored.`)})),s.tables.on("after-remove",(e=>{e.item.parent=null})),s}t._inheritsLoose(r,e);var s=r.prototype;return s.destroy=function(){const e=this.tables.removeAll();for(const t of e)t.destroy();this.tables.destroy()},s.findTableById=function(e){return h(this.tables,"id",e)},s.findTableByUid=function(e){return h(this.tables,"uid",e)},t._createClass(r,[{key:"tables",set:function(e){this._set("tables",d.referenceSetter(e,this._get("tables")))}}]),r}(e);return r.__decorate([i.property()],s.prototype,"tables",null),s=r.__decorate([a.subclass(f)],s),s},Object.defineProperty(e,"__esModule",{value:!0})}));