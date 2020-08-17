// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/has","dijit/_CssStateMixin","../Util","./ToolbarBase","../tools/ButtonToolBase","../tools/Cut","../tools/Union","../tools/Reshape","../tools/Editing","../tools/EditingTools","../tools/Selection","../tools/SelectionTools","../../../kernel"],(function(t,i,s,o,e,h,n,l,d,a,_,c,r,E,T,g,C){var b=t([l,h],{declaredClass:"esri.dijit.editing.toolbars.Drawing",onShowAttributeInspector:function(){},_activateTool:function(t,i){this._settings.editor._activeTool=t,"EDITING"!==t&&this._settings.templatePicker.clearSelection(),"ATTRIBUTES"!==t&&this._settings.editor._hideAttributeInspector(),"CLEAR"!==t&&this.inherited(arguments)},_initializeToolbar:function(){var t=this._settings.layers;s.forEach(t,(function(t){this._tbConnects.push(o.connect(t,"onSelectionComplete",this,"_updateUI"))}),this)},activateEditing:function(t,i){this._tools.EDITING._activateTool(t,i.geometryType),this._activeTool=this._tools.EDITING,this._activeTool.setChecked(!0)},_updateUI:function(){this._settings.undoManager&&(this._tools.UNDO.set("disabled",!1===this._settings.undoManager.canUndo),this._tools.REDO.set("disabled",!1===this._settings.undoManager.canRedo)),this._selectedFeatures=n.getSelection(this._settings.layers);var t=this._selectedFeatures.length;this._tools.DELETE&&this._tools.DELETE.set("disabled",t<=0),this._tools.CLEAR&&this._tools.CLEAR.set("disabled",t<=0),this._tools.ATTRIBUTES&&this._tools.ATTRIBUTES.set("disabled",t<=0),this._tools.UNION&&this._tools.UNION.set("disabled",t<2)},_toolFinished:function(t){"ATTRIBUTES"===t&&this._selectedFeatures&&this._selectedFeatures.length&&this.onShowAttributeInspector(this._selectedFeatures[0]),"SELECT"!==t&&"CUT"!==t&&"RESHAPING"!==t&&"EDITING"!==t||(this._activeTool.deactivate(),this._activeTool.setChecked(!1),this._activeTool=null),"DELETE"===t&&this.onDelete(),this._settings.editor._activeTool=null,this._updateUI()},_createTools:function(){this._tools.SELECT=new T({settings:this._settings,onClick:i.hitch(this,"_activateTool","SELECT",!0),onFinished:i.hitch(this,"_toolFinished","SELECT")}),this.addChild(this._tools.SELECT),this._tools.CLEAR=new d(i.mixin(g.selectClear,{settings:this._settings,onClick:i.hitch(this._settings.editor,"_clearSelection",!1)})),this.addChild(this._tools.CLEAR),this._createSeparator(),this._tools.ATTRIBUTES=new d(i.mixin(E.attributes,{settings:this._settings,onClick:i.hitch(this,"_toolFinished","ATTRIBUTES")})),this.addChild(this._tools.ATTRIBUTES),this._createSeparator(),this._tools.EDITING=new r({settings:this._settings,onClick:i.hitch(this,"_activateTool","EDITING",!0),onApplyEdits:i.hitch(this,"onApplyEdits"),onFinished:i.hitch(this,"_toolFinished","EDITING")}),this.addChild(this._tools.EDITING),this._tools.DELETE=new d(i.mixin(E.del,{settings:this._settings,onClick:i.hitch(this,"_toolFinished","DELETE")})),this.addChild(this._tools.DELETE),this._settings.toolbarOptions&&((this._settings.toolbarOptions.cutVisible||this._settings.toolbarOptions.mergeVisible||this._settings.toolbarOptions.reshapeVisible)&&this._createSeparator(),this._settings.toolbarOptions.cutVisible&&(this._tools.CUT=new a({settings:this._settings,onFinished:i.hitch(this,"_toolFinished","CUT"),onClick:i.hitch(this,"_activateTool","CUT",!0),onApplyEdits:i.hitch(this,"onApplyEdits")}),this.addChild(this._tools.CUT)),this._settings.toolbarOptions.mergeVisible&&(this._tools.UNION=new _({settings:this._settings,onFinished:i.hitch(this,"_toolFinished","UNION"),onApplyEdits:i.hitch(this,"onApplyEdits")}),this.addChild(this._tools.UNION)),this._settings.toolbarOptions.reshapeVisible&&(this._tools.RESHAPING=new c({settings:this._settings,onClick:i.hitch(this,"_activateTool","RESHAPING",!0),onFinished:i.hitch(this,"_toolFinished","RESHAPING"),onApplyEdits:i.hitch(this,"onApplyEdits")}),this.addChild(this._tools.RESHAPING))),this._settings.enableUndoRedo&&(this._createSeparator(),this._tools.UNDO=new d(i.mixin(E.undo,{settings:this._settings,disabled:!0,onClick:i.hitch(this,(function(){this._tools.UNDO.set("disabled",!0),this._tools.REDO.set("disabled",!0),this._settings.editor._undo()}))})),this.addChild(this._tools.UNDO),this._tools.REDO=new d(i.mixin(E.redo,{settings:this._settings,disabled:!0,onClick:i.hitch(this,(function(){this._tools.UNDO.set("disabled",!0),this._tools.REDO.set("disabled",!0),this._settings.editor._redo()}))})),this.addChild(this._tools.REDO))}});return e("extend-esri")&&i.setObject("dijit.editing.toolbars.Drawing",b,C),b}));