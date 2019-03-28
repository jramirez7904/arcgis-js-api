// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","dojo/html","dojo/keys","dojo/on","dojo/query","dojo/string","dojo/store/Memory","dijit/focus","dijit/form/TextBox","dijit/registry","dijit/Tooltip","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","dgrid/OnDemandGrid","dgrid/Selection","dgrid/Keyboard","../kernel","../lang","dojo/i18n!../nls/jsapi","dojo/NodeList-traverse","dojo/NodeList-manipulate","dojo/_base/sniff"],function(t,i,e,s,h,r,a,d,o,n,_,c,l,u,g,f,C,S,m,T,E,p,L,v,I,y,x,O){var w=i([p,T,E],{declaredClass:"esri.dijit.Tags",templateString:'<div class="${baseClass}"></div>',baseClass:"esriTags",_attachmentNode:"",_autocompleteList:"",_grid:"",_store:"",_matchParam:"",_idProperty:"",_gridId:"",_filterId:"",_placeHolder:"",_noDataMsg:"",_maxWidth:"",_minWidth:"",_inputTextBox:"",_gridHasFocus:!1,_metaKeyPressed:!1,_shiftKeyPressed:!1,_CSS_STYLES:{CLASS_SELECTOR:".",ALL_SELECTOR:">",MULTI:"select2-container select2-container-multi",CHOICES:"select2-choices",CHOICE:"select2-search-choice",SEARCH_CHOICE_FOCUS:"select2-search-choice-focus",SEARCH_FIELD:"select2-search-field",CLOSE_ICON:"select2-search-choice-close"},values:[],_selRows:[],_CHOICE_SELECTOR:"",_CHOICE_FOCUS:"",_CHOICE_FOCUS_ALL:"",tooltipPosition:[],constructor:function(t){this._idProperty=t.idProperty||"tag",this._maxWidth=t.maxWidth||"auto",this._minWidth=t.minWidth||"auto",this._matchParam=t.matchParam||"first",this.values=[],this._selRows=[],this._CHOICE_ALL_SELECTOR=this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE+this._CSS_STYLES.ALL_SELECTOR,this._CHOICE_FOCUS=this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.SEARCH_CHOICE_FOCUS,this._CHOICE_FOCUS_ALL=this._CHOICE_FOCUS+this._CSS_STYLES.ALL_SELECTOR},postMixInProperties:function(){this.inherited(arguments);var t=(new Date).getTime();this._tagsId="userTags-"+t,this._gridId="grid-"+t,this._filterId="filter-"+t,this._isIE8=o("ie")<9,this.i18n={},e.mixin(this.i18n,O.widgets.tags)},postCreate:function(){if(this._isIE8)this._textTags=new C({trim:!0,placeHolder:this.i18n.addTags,style:{minWidth:this.minWidth,maxWidth:this.maxWidth}},a.create("div",{id:this._tagsId},this.domNode)),this._textTags.startup(),r.add(this._textTags.domNode,"ie8Style");else{this._attachmentNode=a.create("div",{id:this._tagsId,className:"grid_1"},this.domNode),this._createContainerNode(),this._createTagList(),this._createDropDownList(),this._createInput();var t=e.hitch(this,function(t,i,e){var s=this._inputTextBox?this._inputTextBox.get("value")+"":"";if(s.length<1)return!0;if(!t.tag)return!1;var h=(t.tag+"").toLowerCase(),r=h.match(new RegExp("^"+s.toLowerCase()));return null!==r&&r.length>0}),s=e.hitch(this,function(t,i,e){var s=this._inputTextBox?this._inputTextBox.get("value")+"":"";return s.length<1||!!t.tag&&!!(t.tag+"").toLowerCase().indexOf(s.toLowerCase())}),h=[{field:this._idProperty}],d=[{attribute:this._idProperty,ascending:!0}];this._store=new g({idProperty:this._idProperty,data:[]});var o=i([L,v,I]);this._grid=new o({store:this._store,showHeader:!1,noDataMessage:this.i18n.noTagsFound,selectionMode:"extended",allowSelectAll:!0,cellNavigation:!1,columns:h,sort:d,renderRow:this._renderItem},this._dropDownList),this._grid.startup(),r.add(this._grid.domNode,"gridHeightLimiter"),"first"===this._matchParam?this._grid.query=t:this._grid.query=s;var n;this.own(this._inputTextBox.watch("value",e.hitch(this,function(t,i,e){n&&(clearTimeout(n),n=null),this._grid.refresh()}))),this.own(this._grid.on(".dgrid-row:click",e.hitch(this,function(t){var i="";this._shiftKeyPressed||this._metaKeyPressed?t.shiftKey||t.metaKey||t.ctrlKey||(i=this._selRows[0],this._createTags(i),this._store.remove(i),this._grid.refresh(),this._resetInputTextBox()):(i=this._grid.row(t).data.tag,this._createTags(i),this._store.remove(i),this._grid.refresh(),this._resetInputTextBox())}))),this.own(this._grid.on("dgrid-deselect",e.hitch(this,function(t){this._selRows=[];for(var i in this._grid.selection)this._grid.selection.hasOwnProperty(i)&&this._selRows.push(i)}))),this.own(this._grid.on("dgrid-select",e.hitch(this,function(t){this._selRows=[];for(var i in this._grid.selection)this._grid.selection.hasOwnProperty(i)&&this._selRows.push(i)}))),this.own(this.connect(this.domNode,"keydown","_keydownHandler")),window.onkeydown=e.hitch(this,function(t){(t.shiftKey||t.ctrlKey||224===t.keyCode)&&(this._metaKeyPressed=!0)}),this.own(this.connect(document,"onkeydown",e.hitch(this,function(t){this._shiftKeyPressed=!0,this._metaKeyPressed=!0})))}},_keydownHandler:function(i){this._clearMessage();var h;void 0!==f.curNode.value&&(h=f.curNode.value.length);var r,o,n,c,g=l(this._CHOICE_FOCUS,s.byId(this.id)),C=l(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,s.byId(this.id)).last();switch(i.keyCode){case _.RIGHT_ARROW:this._navigate(g,h,C,"right"),this._hideGrid();break;case _.LEFT_ARROW:this._navigate(g,h,C,"left"),this._hideGrid();break;case _.DOWN_ARROW:i.preventDefault(),this._unhighlightTag(g),"none"===d.get(this._gridId,"display")&&this._showGrid(),this._gridHasFocus||(this._grid.focus(this._setFocusOnFirstRow(this._grid,0)),this._gridHasFocus=!0);break;case _.UP_ARROW:break;case _.BACKSPACE:var S;if(0===h&&0===l(this._CHOICE_FOCUS_ALL).length&&void 0!==l(this._CHOICE_ALL_SELECTOR)[l(this._CHOICE_ALL_SELECTOR).length-1]&&(S=l(this._CHOICE_ALL_SELECTOR)[l(this._CHOICE_ALL_SELECTOR).length-1].title,l("li",this._attachmentNode).length>0&&(a.destroy(C[0]),void 0!==S)))try{this._store.add({tag:S})}catch(t){}if(l(this._CHOICE_FOCUS_ALL).length>0&&(S=l(this._CHOICE_FOCUS_ALL).text(),a.destroy(g[0]),void 0!==S))try{this._store.add({tag:S})}catch(t){}this._grid.refresh(),0===h&&this._hideGrid(),this._removeTag(S),this._emitRemoved(S),this._emitChanged(),this.validate();break;case _.CTRL:case _.META:this._metaKeyPressed=!0;break;case _.SHIFT:this._shiftKeyPressed=!0;break;case _.ENTER:if(h>0)r=this._stripHTML(f.curNode.value),o=r.split(","),n=[],t.forEach(o,function(i,e){-1===t.indexOf(n,i)&&n.push(u.trim(i))}),t.forEach(n,e.hitch(this,function(t,i){this._isEmpty(t)||this._contains(this.values,t)||this._createTags(t)}));else{for(c=0;c<this._selRows.length;c++)this._createTags(this._selRows[c]),this._store.remove(this._selRows[c]);this._shiftKeyPressed=!1,this._metaKeyPressed=!1}this._resetInputTextBox(),i.preventDefault(),f.focus(s.byId(this._filterId));break;case _.TAB:if(f.curNode.id!==this._filterId||0!==h){if(h>0)r=this._stripHTML(f.curNode.value),o=r.split(","),n=[],t.forEach(o,function(i,e){-1===t.indexOf(n,i)&&n.push(u.trim(i))}),t.forEach(n,e.hitch(this,function(t,i){this._isEmpty(t)||this._contains(this.values,t)||this._createTags(t)}));else{for(c=0;c<this._selRows.length;c++)this._createTags(this._selRows[c]),this._store.remove(this._selRows[c]);this._shiftKeyPressed=!1,this._metaKeyPressed=!1}this._resetInputTextBox(),i.preventDefault(),f.focus(s.byId(this._filterId))}break;case _.ESCAPE:this._hideGrid();break;default:h>-1&&("none"===d.get(s.byId(this._gridId),"display")&&this._showGrid(),this._unhighlightTag(g)),this._metaKeyPressed=!1}},_blurHandler:function(i,s,h){if(!this.focused){var r=this._stripHTML(this._inputTextBox.value);if(r.length>0){var a=[],d=r.split(",");t.forEach(d,function(i,e){-1===t.indexOf(a,i)&&a.push(u.trim(i))}),t.forEach(a,e.hitch(this,function(t,i){this._isEmpty(t)||this._contains(this.values,t)||this._createTags(t)})),this._resetInputTextBox(),this._hideGrid()}else this._hideGrid()}this.validate()},isValid:function(){var t=this.get("value");return!this.required||x.isDefined(t)&&t.length>0},validate:function(){this._created&&!this.isValid()?(h.set(this.domNode,"aria-invalid","true"),this._displayMessage(this.i18n.required)):(h.set(this.domNode,"aria-invalid","false"),this._displayMessage(null))},_clearMessage:function(){this._displayMessage(null)},_displayMessage:function(t){var i=this._isIE8?this._textTags.domNode:s.byId(this._tagsId);t&&this.focused?m.show(t,i):m.hide(i)},_resetInputTextBox:function(){S.byId(this._filterId).set("value","")},_isEmpty:function(t){return t=t.replace(/^\s+|\s+$/,""),0===t.length},_navigate:function(t,i,e,s){t.length>0&&i<1?("right"===s?this._hightlightTag(t.next()):this._hightlightTag(t.prev()),this._unhighlightTag(t)):i<1&&this._hightlightTag(e)},_contains:function(i,e){return t.indexOf(i,e)>=0},_hightlightTag:function(t){t.addClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_unhighlightTag:function(t){t.removeClass(this._CSS_STYLES.SEARCH_CHOICE_FOCUS)},_removeTag:function(i){i&&-1!==t.indexOf(this.values,i)&&this.values.splice(t.indexOf(this.values,i),1)},_hideGrid:function(){s.byId(this._gridId)&&d.set(s.byId(this._gridId),"display","none"),this._gridHasFocus=!1},_showGrid:function(){d.set(s.byId(this._gridId),"display","block");var t=d.get(s.byId(this._attachmentNode),"width");d.set(s.byId(this._gridId),"width",t+"px")},_setFocusOnFirstRow:function(t,i){return l(".dgrid-content .dgrid-cell",this._grid.domNode)[i]||l(".dgrid-content .dgrid-row",this._grid.domNode)[i]},_createTags:function(t){l(this._CHOICE_FOCUS,s.byId(this.id)).removeClass("select2-search-choice-focus");var i=a.create("li",null,this._autocompleteList);r.add(i,this._CSS_STYLES.CHOICE);var h=a.create("div",{title:t},i);n.set(h,this._htmlEncode(t));var d=a.create("a",{href:"#"},h);r.add(d,this._CSS_STYLES.CLOSE_ICON),c(d,"click",e.hitch(this,function(t){var i=u.trim(t.target.parentElement.innerText||t.target.parentElement.textContent);try{this._store.add({tag:i})}catch(t){}this._grid.refresh(),this._removeTag(i),this._emitRemoved(i),this._emitChanged(),a.destroy(t.target.parentNode.parentNode),t.preventDefault()}));var o=S.byId(this._filterId);a.place(o.domNode,this._autocompleteList,"last"),this._hideGrid(),this.values.push(t),this._emitAdded(t),this._emitChanged()},_emitAdded:function(t){this.emit("tags-add",{tag:t})},_emitRemoved:function(t){this.emit("tags-remove",{tag:t})},_emitChanged:function(){this.emit("tags-change",{tags:this.get("tags")})},_renderItem:function(t){return a.create("div",{innerHTML:t.tag})},_createContainerNode:function(){this._containerNode=a.create("div",null,this._attachmentNode),r.add(this._containerNode,this._CSS_STYLES.MULTI),d.set(this._containerNode,"maxWidth",this._maxWidth),d.set(this._containerNode,"minWidth",this._minWidth)},_createTagList:function(){this._autocompleteList=a.create("ul",null,this._containerNode),r.add(this._autocompleteList,this._CSS_STYLES.CHOICES)},_createInput:function(){var t=a.create("li",null,this._autocompleteList,"last");r.add(t,this._CSS_STYLES.SEARCH_FIELD),this._inputTextBox=new C({id:this._filterId,placeHolder:this.i18n.addTags,intermediateChanges:!0,trim:!0,style:{border:"none"}},t),r.add(this._inputTextBox,"inputTextBox"),d.set(this._inputTextBox,"width",this._minWidth),(o("ie")>8||o("trident")>4)&&r.add(this._inputTextBox.domNode,"ieStyle"),this.own(f.watch("curNode",e.hitch(this,this._blurHandler)))},_createDropDownList:function(){this._dropDownList=a.create("div",{id:this._gridId},this._containerNode),r.add(this._dropDownList,"dropDownList"),d.set(this._dropDownList,"width",this._minWidth)},focus:function(){f.focus(this.domNode),this._isIE8?this._textTags.focus():this._inputTextBox.focus()},reset:function(){this.clearTags()},prepopulate:function(i){t.forEach(i,e.hitch(this,function(t,i){this._createTags(t),this._store.remove(t)}))},clearTags:function(){var i,h=l(this._CSS_STYLES.CLASS_SELECTOR+this._CSS_STYLES.CHOICE,s.byId(this.id)),r=!1;h.length>0&&(r=!0,t.forEach(h,e.hitch(this,function(t,e){try{i=l(this._CHOICE_ALL_SELECTOR,s.byId(this.id))[0].title,this._store.add({tag:i})}catch(t){}a.destroy(t),this._emitRemoved(i)})),this.values=[],r&&this._emitChanged())},addStyledTags:function(i,e){r.add(s.byId(e),this._CSS_STYLES.MULTI);var h=a.create("ul",null,s.byId(e));r.add(h,this._CSS_STYLES.CHOICES),d.set(h,"border","none"),t.forEach(i,function(t,i){var e=a.create("li",null,h);d.set(e,"padding","3px 5px 3px 5px"),r.add(e,"select2-search-resultSet");var s=a.create("div",{title:t},e);n.set(s,t)})},_getUniqueTags:function(i){var s,h=[];return t.forEach(i,e.hitch(this,function(t){s=this._stripHTML(t),x.isDefined(s)&&s.length>0&&h.push(s)})),t.filter(h,e.hitch(this,function(i,e){return t.indexOf(h,i)===e}))},_setValueAttr:function(t){this._setTagsAttr(t)},_getValueAttr:function(){return this._getTagsAttr()},_setTagsAttr:function(t){!t||t instanceof Array||(t=t.split(",")),this._isIE8?this._textTags&&this._textTags.set("value",this._getUniqueTags(t).join(",")):(this.clearTags(),this.prepopulate(t?this._getUniqueTags(t):[]))},_getTagsAttr:function(){return this._isIE8?this._textTags?this._textTags.get("value"):"":this.values?this.values.join(","):""},_setRequiredAttr:function(t){this.required=t},_getRequiredAttr:function(){return this.required},_setMinWidthAttr:function(t){this.minWidth=t},_setMaxWidthAttr:function(t){this.maxWidth=t},_setKnownTagsAttr:function(i){if(!this._isIE8){var e,s=[];for(e=0;e<i.length;e++)t.indexOf(this.values,i[e])<0&&s.push(i[e]);this._store=new g({idProperty:this._idProperty,data:s}),this._grid.set("store",this._store),this._grid.refresh()}},_stripHTML:function(t){return t&&t.replace(/<(?:.|\s)*?>/g,"")},_htmlEncode:function(t){return t?t.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;"):t}});return o("extend-esri")&&e.setObject("dijit.Tags",w,y),w});