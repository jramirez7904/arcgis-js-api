/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","./Element","./inputs/AttachmentInput"],(function(e,t,r,o,i,n,s,p,a,c,u,l){"use strict";var d;let y=d=function(t){function r(e){var r;return(r=t.call(this,e)||this).attachmentKeyword=null,r.editable=!0,r.input=null,r.type="attachment",r}return e._inheritsLoose(r,t),r.prototype.clone=function(){return new d({attachmentKeyword:this.attachmentKeyword,description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})},r}(u.Element);return t.__decorate([n.property({type:String,json:{write:!0}})],y.prototype,"attachmentKeyword",void 0),t.__decorate([n.property({type:Boolean,json:{default:!0,write:!0}})],y.prototype,"editable",void 0),t.__decorate([n.property({type:l,json:{read:{source:"inputType"},write:{target:"inputType"}}})],y.prototype,"input",void 0),t.__decorate([n.property({type:["attachment"],json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=d=t.__decorate([s.subclass("esri.form.elements.AttachmentElement")],y),y}));