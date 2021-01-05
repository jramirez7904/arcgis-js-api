/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/has","../core/Logger","../core/accessorSupport/decorators/property","../core/accessorSupport/decorators/aliasOf","../core/accessorSupport/decorators/cast","../core/accessorSupport/decorators/subclass","../core/urlUtils","../core/uuid","../portal/support/resourceExtension","../core/Collection","../intl/locale","../intl/substitute","../intl/messages","../intl","../core/watchUtils","../core/HandleOwner","./support/widgetUtils","./support/decorators/messageBundle","./support/decorators/renderable","../chunks/index","./Widget","./FeatureTable/Grid/support/ButtonMenuItem","./FeatureTable/Grid/support/ButtonMenu","./FeatureTable/FeatureTableViewModel"],(function(e,t,l,i,o,s,n,r,a,d,c,u,h,p,m,v,g,_,f,w,b,M,y,C,E,O){"use strict";const I={header:!0,menu:!0,menuItems:{clearSelection:!0,refreshData:!0,toggleColumns:!0},selectionColumn:!0},S="esri-feature-table",F="esri-feature-table__header",R="esri-feature-table__title",T="esri-feature-table__content",k="esri-feature-table__loader",x="esri-feature-table__loader-container",H="esri-feature-table__menu",j="esri-icon-handle-horizontal",B="esri-icon-down",L="esri-icon-right",D="esri-icon-check-mark",z="esri-widget";let U=function(t){function l(e,l){var i;return(i=t.call(this,e,l)||this)._menu=null,i.attachmentsEnabled=null,i.columns=new u,i.editingEnabled=null,i.fieldConfigs=null,i.grid=null,i.highlightOnRowSelectEnabled=!0,i.label=void 0,i.layer=null,i.messages=null,i.menuConfig=null,i.view=null,i.viewModel=new O,i.visibleElements={...I},i}e._inheritsLoose(l,t);var i=l.prototype;return i.initialize=function(){var e,t,l;const i=async()=>this.messages=await m.fetchMessageBundle("esri/widgets/FeatureTable/t9n/FeatureTable");i(),this.handles.add([h.onLocaleChange(i),g.on(this,"grid.selectedItems","change",(e=>this._onSelectionChange(e))),g.watch(this,["viewModel.store.querying","viewModel.store.syncing","grid.size"],(()=>this.scheduleRender())),g.on(this,"viewModel.columns","change",(()=>this._updateMenuItems())),g.watch(this,"menuConfig",(()=>this._updateMenuItems())),g.watch(this,"messages",(()=>{var e;this._menu.label=null==(e=this.messages)?void 0:e.options,this._updateMenuItems()}))]),this._menu=new E({label:null==(e=this.messages)?void 0:e.options,iconClass:j,...this.menuConfig});const{attachmentsEnabled:o,relatedRecordsEnabled:s}=this;null==(t=this.viewModel)||null==(l=t.store)||l.set({attachmentsEnabled:o,relatedRecordsEnabled:s})},i.destroy=function(){this.clearSelection(),this.handles.removeAll()},i.castVisibleElements=function(e){var t;const l={...I,...e};return null==(t=this.grid)||t.set("visibleElements",{...this.grid.visibleElements,selectionColumn:l.selectionColumn}),l},i.clearHighlights=function(){},i.clearSelection=function(){},i.deselectRows=function(){},i.hideColumn=function(e){var t;null==(t=this.grid)||t.hideColumn(e),this._updateMenuItems()},i.refresh=function(){},i.showColumn=function(e){var t;null==(t=this.grid)||t.showColumn(e),this._updateMenuItems()},i.sortColumn=function(){},i.selectRows=function(){},i.render=function(){var e;return M.jsx("div",{bind:this,class:this.classes(S,z)},this.visibleElements.header?this._renderHeader():null,M.jsx("div",{class:T},"disabled"!==this.state&&(null==(e=this.grid)?void 0:e.render())))},i._renderHeader=function(){return M.jsx("div",{key:"header",class:F},this._renderLoader(),this._renderTitle(),this._renderMenu())},i._renderTitle=function(){return M.jsx("div",{class:R,key:"title"},this._getTitle())},i._getTitle=function(){const{grid:e,layer:{title:t},messages:l,viewModel:{size:i}}=this;return e?p.substitute(l.header,{title:t,count:i,selected:e.selectedItems.length||0}):""},i._renderLoader=function(){const{state:e,store:t}=this.viewModel,l="loading"===e||t.syncing||t.querying;return M.jsx("div",{class:x},l?M.jsx("div",{class:k,key:"loader"}):null)},i._renderMenu=function(){return M.jsx("div",{class:H},this._menu.render())},i._onSelectionChange=function(e){const{added:t,removed:l}=e;this.emit("selection-change",{added:[...t],removed:[...l]})},i._updateMenuItems=function(){var e,t;const l=null==(e=this.menuConfig)?void 0:e.items,i=this._getDefaultMenuItems(),o=[];(null==i?void 0:i.length)&&o.push(...i),(null==l?void 0:l.length)&&o.push(...l),o.length&&(null==(t=this._menu)||t.set("items",o))},i._getDefaultMenuItems=function(){var e;const{messages:t,viewModel:l,visibleElements:i}=this,{menuItems:o}=i,s=[];return(null==o?void 0:o.clearSelection)&&s.push(new C({selectionEnabled:!1,label:null==t?void 0:t.clearSelection,clickFunction:()=>this.clearSelection()})),(null==o?void 0:o.refreshData)&&s.push(new C({selectionEnabled:!1,label:null==t?void 0:t.refreshData,clickFunction:()=>this.refresh()})),(null==o?void 0:o.toggleColumns)&&s.push(new C({iconClass:L,label:null==t?void 0:t.toggleColumns,clickFunction:this._toggleMenuItemSelectedIcon,items:null==l||null==(e=l.columns)?void 0:e.items.map((({header:e,hidden:t,path:l})=>new C({label:e||l,selected:!t,selectionEnabled:!0,iconClass:D,clickFunction:()=>this._toggleColumnFromMenuItem(l)})))})),s.length?s:null},i._toggleMenuItemSelectedIcon=function({item:e}){null==e||e.set("iconClass",null!=e&&e.selected?B:L)},i._toggleColumnFromMenuItem=function(e){var t;const l=null==(t=this.viewModel)?void 0:t.findColumn(e);null!=l&&l.hidden?this.showColumn(e):this.hideColumn(e)},l}(_.HandleOwnerMixin(y));return t.__decorate([s.aliasOf("viewModel.attachmentsEnabled")],U.prototype,"attachmentsEnabled",void 0),t.__decorate([s.aliasOf("viewModel.columns")],U.prototype,"columns",void 0),t.__decorate([s.aliasOf("viewModel.editingEnabled")],U.prototype,"editingEnabled",void 0),t.__decorate([s.aliasOf("viewModel.fieldConfigs")],U.prototype,"fieldConfigs",void 0),t.__decorate([s.aliasOf("viewModel.grid")],U.prototype,"grid",void 0),t.__decorate([s.aliasOf("viewModel.highlightOnRowSelectEnabled")],U.prototype,"highlightOnRowSelectEnabled",void 0),t.__decorate([o.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],U.prototype,"label",void 0),t.__decorate([s.aliasOf("viewModel.layer")],U.prototype,"layer",void 0),t.__decorate([o.property(),b.renderable(),w.messageBundle("esri/widgets/FeatureTable/t9n/FeatureTable")],U.prototype,"messages",void 0),t.__decorate([o.property()],U.prototype,"menuConfig",void 0),t.__decorate([s.aliasOf("viewModel.relatedRecordsEnabled")],U.prototype,"relatedRecordsEnabled",void 0),t.__decorate([s.aliasOf("viewModel.state")],U.prototype,"state",void 0),t.__decorate([s.aliasOf("viewModel.view")],U.prototype,"view",void 0),t.__decorate([o.property(),b.renderable(["viewModel.attachmentsEnabled","viewModel.columns","viewModel.editingEnabled","viewModel.layer","viewModel.relatedRecordsEnabled","viewModel.state"])],U.prototype,"viewModel",void 0),t.__decorate([o.property(),b.renderable()],U.prototype,"visibleElements",void 0),t.__decorate([n.cast("visibleElements")],U.prototype,"castVisibleElements",null),t.__decorate([s.aliasOf("viewModel.clearHighlights")],U.prototype,"clearHighlights",null),t.__decorate([s.aliasOf("viewModel.clearSelection")],U.prototype,"clearSelection",null),t.__decorate([s.aliasOf("viewModel.deselectRows")],U.prototype,"deselectRows",null),t.__decorate([s.aliasOf("viewModel.refresh")],U.prototype,"refresh",null),t.__decorate([s.aliasOf("viewModel.sortColumn")],U.prototype,"sortColumn",null),t.__decorate([s.aliasOf("viewModel.selectRows")],U.prototype,"selectRows",null),U=t.__decorate([r.subclass("esri.widgets.FeatureTable")],U),U}));