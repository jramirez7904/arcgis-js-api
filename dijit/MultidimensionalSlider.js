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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/on","dojo/json","dijit/form/VerticalSlider","dojox/form/VerticalRangeSlider","dijit/form/VerticalRule","dijit/form/VerticalRuleLabels","dijit/form/HorizontalSlider","dojox/form/HorizontalRangeSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","dijit/_Widget","dijit/_Templated","dojox/timing/_base","dojo/_base/array","dojo/Deferred","dojo/DeferredList","../layers/MosaicRule","../layers/DimensionalDefinition","../kernel","../lang","./_EventedWidget","dojo/text!./templates/MultidimensionalSlider_vertical.html","dojo/text!./templates/MultidimensionalSlider_horizontal.html","dojo/i18n!../nls/jsapi","dojo/dom-class","dojo/dom-style","dojo/dom-geometry","dojo/touch","dojo/query","dojo/dom-construct"],function(i,e,s,t,n,a,l,h,o,r,u,d,m,c,_,f,g,p,v,V,b,y,S,R,L,C,D,N,I,x,j,O,M){var A={LAYOUT_VERTICAL:"vertical",LAYOUT_HORIZONTAL:"horizontal"},H=i([R,c,_],{declaredClass:"esri.dijit.MultidimensionalSlider",widgetsInTemplate:!0,templateString:L,nLabels:10,_thumbCount:1,useRanges:void 0,loop:!0,useLayersDimSlices:!0,prefetch:!0,prefetchedValues:{},showPlayButton:!0,prefetchFactor:2,_hasUnitConflict:!1,_update:!0,useDefaults:!1,playDirectionAscending:!0,unitSymbols:{meter:"m",pascal:"Pa"},_eventMap:{"dimension-value-change":!0,play:!0,pause:!0,next:!0,previous:!0,change:!0,"dimension-array-create":!0},onChange:function(){},onPlay:function(){},onPause:function(){},onDimensionValueChange:function(){},_onPlay:function(){this.playing=!this.playing,this._updateUI(),this.playing?(this._timer.start(),this.onPlay()):(this._timer.stop(),this.onPause())},constructor:function(e,s){i.safeMixin(this,e),this.playing=!1,this._iconClass="mdsButton mdsPlayButton",this.map&&this._getImageLayers(),this.layout===A.LAYOUT_HORIZONTAL&&(this.templateString=C),this.thumbMovingRate=this.thumbMovingRate||3e3,this._i18n=D,this.prefetchImgNodes={}},postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);var i=this;this._getAllLayersMDInfo().then(function(){i._sortDimensionValues(),i.dimensionValues=i.dimensionValues&&i.dimensionValues.length&&!i.useLayersDimSlices?i.dimensionValues:i._mapSortedDimensionValues,i.getUnit(),i._setupSlider()}),this._timer=new f.Timer,this._timer.setInterval(this.thumbMovingRate),this._timer.onTick=e.hitch(this,function(){this.playDirectionAscending?this._bumpSlider(1):this._bumpSlider(-1)}),this.layout===A.LAYOUT_VERTICAL&&(this.computeSliderStyle(),this.on("resize",e.hitch(this,"computeSliderStyle"))),this._setupHandles()},_insertPassiveLabels:function(){var i=O(".dijitSliderMoveable.dijitSliderMoveableV",this.domNode);this._passiveLbl1=M.create("div"),N.add(this._passiveLbl1,"esriMdSliderPassiveLbl"),M.place(this._passiveLbl1,i[0]),2===this._thumbCount&&(this._passiveLbl2=M.create("div"),N.add(this._passiveLbl2,"esriMdSliderPassiveLbl"),M.place(this._passiveLbl2,i[1]))},_setupHandles:function(){this._eventHandles=[],this._eventHandles.push(t(this.domNode,"mouseover",e.hitch(this,"activateSlider"))),this._eventHandles.push(t(this.domNode,"mouseleave",e.hitch(this,"deactivateSlider"))),this._eventHandles.push(t(this.domNode,j.press,e.hitch(this,"activateSlider"))),this._eventHandles.push(t(this.domNode,j.release,e.hitch(this,"deactivateSlider"))),this._eventHandles.push(t(this.prevBtn.domNode,j.press,e.hitch(this,"activateSlider"))),this._eventHandles.push(t(this.playPauseBtn.domNode,j.press,e.hitch(this,"activateSlider"))),this._eventHandles.push(t(this.nextBtn.domNode,j.press,e.hitch(this,"activateSlider")));var i=O(".dijitSliderImageHandle.dijitSliderImageHandleV",this.domNode);g.forEach(i,function(i){this._eventHandles.push(t(i,j.press,e.hitch(this,"activateSlider"))),this._eventHandles.push(t(i,j.release,e.hitch(this,"deactivateSlider")))},this)},_removeHandles:function(){g.forEach(this._eventHandles,function(i){i&&i.remove()})},activateSlider:function(){dojo.isIE<9&&dojo.style(this.domNode,"background","#fff"),this.sliderActive=!0,this.deactivateTimer&&clearTimeout(this.deactivateTimer),N.remove(this.domNode,"esriMdSliderPassive"),N.add(this.domNode,"esriMdSliderActive"),I.set(this._passiveLbl1,"display","none"),this._passiveLbl2&&I.set(this._passiveLbl2,"display","none")},deactivateSlider:function(){if(!(dojo.isIE<10)){var i=this;this.deactivateTimer=setTimeout(function(){i.sliderActive=!1,i.updatePassiveLabels(),N.remove(i.domNode,"esriMdSliderActive"),N.add(i.domNode,"esriMdSliderPassive"),i._showPassiveLabels()},2500)}},updatePassiveLabels:function(){this._slider&&S.isDefined(this._slider.value)&&(this._passiveLbl1.innerHTML=this.value.length?this.value[0]:this.value,this._slider.value.length&&(this._passiveLbl2.innerHTML=this.value[1]),this.sliderActive||this._showPassiveLabels())},_showPassiveLabels:function(){S.isDefined(this.value)&&(I.set(this._passiveLbl1,"display","inline-block"),this.value.length?I.set(this._passiveLbl2,"display","inline-block"):this._passiveLbl2&&I.set(this._passiveLbl2,"display","none"))},increment:function(){var i=1;!this.playDirectionAscending&&this.playing&&(i=-1),this._bumpSlider(i)},decrement:function(){var i=-1;!this.playDirectionAscending&&this.playing&&(i=1),this._bumpSlider(i)},_setDimensionAttr:function(i){this._slider&&(i.dimension&&(this.dimension=i.dimension),i.dimensionValues&&i.dimensionValues.length?this.dimensionValues=i.dimensionValues:this.dimensionValues=[],this.update())},update:function(){var i=this;this._mapSortedDimensionValues=[],this._getImageLayers(),this.value=this.dimensionValues[this._slider.value],this._getAllLayersMDInfo().then(function(){i._sortDimensionValues(),i.getUnit(),i.dimensionValues&&i.dimensionValues.length&&!i.useLayersDimSlices||(i.dimensionValues=i._mapSortedDimensionValues),i._setupSlider()})},pause:function(){this.playing=!1,this._updateUI(),this._timer.stop()},play:function(i){!0!==this.playing&&(i=!!i,this.playing=!1,this._onPlay())},_setupSlider:function(){this._destroySlider(),this.dimensionValues&&this.dimensionValues.length&&(this.sliderNode=document.createElement("div"),this._getDimensionAlias(),this._layers&&this._layers.length&&1===this._layers.length&&this._readMosaicRule(),this._createRule(),this._createLabels(),this._createSlider(),this._insertPassiveLabels(),this._slider.onChange(this._slider.value))},_createLabels:function(){this.layout===A.LAYOUT_HORIZONTAL?this._createHorizontalLabels():this._createVerticalLabels()},_createRule:function(){this.layout===A.LAYOUT_HORIZONTAL?this._createHorizontalRule():this._createVerticalRule()},_createVerticalLabels:function(){this.labelsNode=document.createElement("div"),this.sliderNode.appendChild(this.labelsNode),this._sliderLabels=new o({labels:this._filterLabels(),labelStyle:"font-size: 83%; padding-left: 5px;"},this.labelsNode)},_createVerticalRule:function(){this.rulesNode=document.createElement("div"),this.sliderNode.appendChild(this.rulesNode),this.dimensionValues.length<=100&&(this._sliderRules=new h({count:this.dimensionValues.length,style:"width:5px;"},this.rulesNode),this._sliderRules.startup())},_createHorizontalLabels:function(){this.labelsNode=document.createElement("div"),this.sliderNode.appendChild(this.labelsNode),this._sliderLabels=new m({labels:this._filterLabels(),labelStyle:"font-size: 83%"},this.labelsNode)},_createHorizontalRule:function(){this.rulesNode=document.createElement("div"),this.sliderNode.appendChild(this.rulesNode),this.dimensionValues.length<=100&&(this._sliderRules=new d({count:this.dimensionValues.length,style:"height:5px;"},this.rulesNode),this._sliderRules.startup())},_createHorizontalSingleSlider:function(i){i=i||(this.playDirectionAscending?0:this.dimensionValues.length-1),this._slider=new r({name:"horizontal",minimum:0,maximum:this.dimensionValues.length-1,intermediateChanges:!1,discreteValues:this.dimensionValues.length,style:"width: 100%;",increment:e.hitch(this,"increment"),decrement:e.hitch(this,"decrement"),value:i||0,onChange:e.hitch(this,this._onSingleSliderChange),showButtons:!1},this.sliderNode),this._slider.startup()},_createHorizontalRangeSlider:function(i){i=i||(this.playDirectionAscending?[0,1]:[this.dimensionValues.length-2,this.dimensionValues.length-1]),this._slider=new u({name:"horizontal",minimum:0,maximum:this.dimensionValues.length-1,intermediateChanges:!1,discreteValues:this.dimensionValues.length,style:"width:100%;",increment:e.hitch(this,"increment"),decrement:e.hitch(this,"decrement"),value:i||[0,1],onChange:e.hitch(this,this._onRangeSliderChange),showButtons:!1},this.sliderNode),this._slider.startup(),t(this._slider.incrementButton,"click",this._slider.increment),t(this._slider.decrementButton,"click",this._slider.decrement),this._slider._typematicCallback=function(){}},_createVerticalSingleSlider:function(i){i=S.isDefined(i)?i:this.playDirectionAscending?0:this.dimensionValues.length-1,this._slider=new a({name:"vertical",minimum:0,maximum:this.dimensionValues.length-1,intermediateChanges:!1,discreteValues:this.dimensionValues.length,style:this.computeSliderStyle(),increment:e.hitch(this,"increment"),decrement:e.hitch(this,"decrement"),value:i||0,onChange:e.hitch(this,this._onSingleSliderChange),showButtons:!1},this.sliderNode),this._slider.startup()},_createVerticalRangeSlider:function(i){i=i||(this.playDirectionAscending?[0,1]:[this.dimensionValues.length-2,this.dimensionValues.length-1]),this._slider=new l({name:"vertical",minimum:0,maximum:this.dimensionValues.length-1,intermediateChanges:!1,discreteValues:this.dimensionValues.length,style:this.computeSliderStyle(),increment:e.hitch(this,"increment"),decrement:e.hitch(this,"decrement"),value:i||[0,1],onChange:e.hitch(this,this._onRangeSliderChange),showButtons:!1},this.sliderNode),this._slider.startup(),this._slider._typematicCallback=function(){}},_onSingleSliderChange:function(i){var e=this.dimensionValues[i];this.setDimensionInfoText(e),g.forEach(this._layers,function(s){this._updateMosaicRule(s,e),this.prefetch&&this.playing&&this._prefetchData(i,s)},this),this._oldValue=i,this.value=e,this.updatePassiveLabels(),this.onChange(e)},_onRangeSliderChange:function(i){if(this._update){this._snap&&(i=this._snapToNearestRange(i));var s=[this.dimensionValues[i[1]],this.dimensionValues[i[0]]];s.sort(this._sortCompareFunction),this.value=s,this.setDimensionInfoText(s),this.updatePassiveLabels(),g.forEach(this._layers,function(e){this._updateMosaicRule(e,s),this.prefetch&&this.playing&&this._prefetchData(i,e)},this),this._update=!0,this._oldValue=e.clone(i),this.onChange(s)}},destroy:function(){this.inherited(arguments),this._timer.stop(),this._destroySlider(),this._removeHandles()},_destroySlider:function(){if(this._slider)try{this._slider.destroy()}catch(i){this._slider.domNode&&M.destroy(this._slider.domNode)}finally{this._slider=null}},_createSlider:function(){var i,e;this.mdSliderCell.appendChild(this.sliderNode),this.value&&this.value.length&&g.indexOf(this.dimensionValues,this.value[0])>=0&&g.indexOf(this.dimensionValues,this.value[1])>=0?i=[g.indexOf(this.dimensionValues,this.value[0]),g.indexOf(this.dimensionValues,this.value[1])]:S.isDefined(this.value)&&(e=g.indexOf(this.dimensionValues,this.value))>=0&&(i=e),S.isDefined(i)||(i=this._getDefaultSliderValue()),this.useDefaults&&S.isDefined(i)&&(i===this.dimensionValues.length-1||i.length&&g.indexOf(i,this.dimensionValues.length-1)>=0)&&(this.playDirectionAscending=!1),2===this._thumbCount?this.layout===A.LAYOUT_HORIZONTAL?this._createHorizontalRangeSlider(i):this._createVerticalRangeSlider(i):this.layout===A.LAYOUT_HORIZONTAL?this._createHorizontalSingleSlider(i):this._createVerticalSingleSlider(i)},_getDefaultSliderValue:function(){if(this.dimensionValues&&this.dimensionValues.length){var i,e,s,t,n,a=1/0,l=1;if(this.dimension&&"stdz"===this.dimension.toLowerCase())for(t=0;t<this.dimensionValues.length&&(n=this.dimensionValues[t],e=Math.abs(n-0),e<a&&(a=e,i=n),0!==e);t++);else i=this.dimensionValues[0];return s=g.indexOf(this.dimensionValues,i),s=s<0?0:s,2===this._thumbCount&&(s===this.dimensionValues.length-1&&(l=-1),s=[s,s+l]),s}},_getMultidimensionalInfo:function(i){function e(){i.getMultidimensionalInfo().then(function(e){i.multidimensionalInfo=e,s.resolve(i)},function(i){s.reject(i)})}var s=new p;return i.multidimensionalInfo?s.resolve(i):i.loaded?e():i.on("load",function(){e()}),s},_getAllLayersMDInfo:function(){var i=[];return g.forEach(this._layers,function(e){i.push(this._getMultidimensionalInfo(e))},this),new v(i)},_getImageLayers:function(){var i,e=this.map.layerIds.concat(this.map.graphicsLayerIds);return this._layers=[],g.forEach(e,function(e){i=this.map.getLayer(e),"esri.layers.ArcGISImageServiceLayer"!==i.declaredClass&&"esri.layers.ArcGISImageServiceVectorLayer"!==i.declaredClass&&"esri.layers.RasterLayer"!==i.declaredClass||this._layers.push(i)},this),this._layers},_sortCompareFunction:function(i,e){return!(!S.isDefined(i)||!S.isDefined(e))&&i-e},_getDimensionObjects:function(){function i(i){if(i&&i.values&&i.hasRanges){var e=[];g.forEach(i.values,function(i){i.length?e=s(e,i):e.push.apply(s(e.sort(this._sortCompareFunction),[i]))},this),e=e.sort(t._sortCompareFunction),i.decodedValues=e}return i}var s=this._merge,t=this;this._allRangeValues=!0,this._thumbCount=1,this._snap=!1,this._dimensionObjects=[],this._layers=this._filterLayers(),g.forEach(this._layers,function(i){i.multidimensionalInfo&&g.some(i.multidimensionalInfo.variables,function(i){g.some(i.dimensions,function(i){if(i.name===this.dimension&&!i.hasRanges)return void(this._allRangeValues=!1)},this)},this)},this),this.useRanges?(this._thumbCount=2,this._snap=!1):this._allRangeValues&&this.useLayersDimSlices?(this._thumbCount=2,this._snap=!0):this._snap=!1,g.forEach(this._layers,function(s){s.multidimensionalInfo&&g.some(s.multidimensionalInfo.variables,function(s){g.some(s.dimensions,function(s){s.name===this.dimension&&(this._allRangeValues&&s.hasRanges||this.useRanges?this._dimensionObjects.push(i(e.clone(s))):!this._allRangeValues&&s.hasRanges||this._dimensionObjects.push(e.clone(s)))},this)},this)},this)},_merge:function(i,e){for(var s=[],t=0,n=0;t<i.length&&n<e.length;)i[t]<e[n]?s.push(i[t++]):i[t]>e[n]?s.push(e[n++]):(s.push(e[n++]),t++);return s=s.concat(i.slice(t)).concat(e.slice(n)),s=g.filter(s,function(i,e,s){return s.indexOf(i)===e})},_mergeRangeArrays:function(i,e){for(var s=[],t=0,n=0;t<i.length&&n<e.length;)i[t][0]<e[n][0]||i[t][0]===e[n][0]&&i[t][1]<e[n][1]?s.push(i[t++]):i[t][0]>e[n][0]||i[t][0]===e[n][0]&&i[t][1]>e[n][1]?s.push(e[n++]):(s.push(e[n++]),t++);return s=s.concat(i.slice(t)).concat(e.slice(n)),s=g.filter(s,function(i,e,s){return s.indexOf(i)===e},this)},_sortDimensionValues:function(){var i=0,e=this._merge,s=this._mergeRangeArrays;if(this._getDimensionObjects(),this._dimensionObjects.length>=1&&(this._mapSortedDimensionValues=this._dimensionObjects[0].decodedValues||this._dimensionObjects[0].values,this._allRangeValues&&(this._dimensionRangeValues=this._dimensionObjects[0].values)),this._dimensionObjects.length>1)for(i=1;i<this._dimensionObjects.length;i++)this._mapSortedDimensionValues=e(this._mapSortedDimensionValues,this._dimensionObjects[i].decodedValues||this._dimensionObjects[i].values),this._allRangeValues&&(this._dimensionRangeValues=s(this._dimensionRangeValues,this._dimensionObjects[i].values))},_createDimensionalDefinition:function(i,e){var s=[i];return new b({variableName:e,dimensionName:this.dimension,values:s,isSlice:1===s.length})},_updateMosaicRule:function(i,e){var s=!1,t=i.mosaicRule||i.defaultMosaicRule||new V({multidimensionalDefinition:[]}),n=t.multidimensionalDefinition||[];e.length&&e.sort(this._sortCompareFunction),g.forEach(n,function(i){i.dimensionName===this.dimension&&(i.values=[e],i.isSlice=!this.useRanges,s=!0)},this),s||g.some(i.multidimensionalInfo.variables,function(i){if(g.some(i.dimensions,function(i){if(i.name===this.dimension)return!0},this))return!0},this)&&(n.push(this._createDimensionalDefinition(e,"")),s=!0),s&&(t.multidimensionalDefinition=n,i.setMosaicRule(t))},_prefetchData:function(i,s){if(s&&s.mosaicRule){var t,a,l,h,o,r=!1,u=this;for(this.prefetchedValues[s.id]||(this.prefetchedValues[s.id]=[]),this.prefetchImgNodes[s.id]=[],a=e.clone(s._params),l=e.clone(s.mosaicRule),t=1;t<=this.prefetchFactor;t++)r=!1,g.forEach(l.multidimensionalDefinition,function(e){e.dimensionName===this.dimension&&(this.playDirectionAscending?i.length?(this.snap?(h=this._getNextRangeIndex(i)||i,e.values=[this.dimensionValues[h[0]],this.dimensionValues[h[1]]]):e.values=[this.dimensionValues[(i[0]+t)%this.dimensionValues.length],this.dimensionValues[(i[1]+t)%this.dimensionValues.length]],e.values.sort(this._sortCompareFunction)):e.values=[this.dimensionValues[(i+t)%this.dimensionValues.length]]:i.length?(this.snap?(h=this._getNextRangeIndex(i,-1)||i,e.values=[this.dimensionValues[h[0]],this.dimensionValues[h[1]]]):e.values=[this.dimensionValues[(this.dimensionValues.length+i[0]-t)%this.dimensionValues.length],this.dimensionValues[(this.dimensionValues.length+i[1]-t)%this.dimensionValues.length]],e.values.sort(this._sortCompareFunction)):e.values=[this.dimensionValues[(this.dimensionValues.length+i-t)%this.dimensionValues.length]],g.some(this.prefetchedValues[s.id],function(i){if(n.stringify(i)===n.stringify(e.values))return!0})||(r=!0,this.prefetchedValues[s.id].push(e.values)))},this),r&&(a.mosaicRule=n.stringify(l.toJson()),s.getImageUrl(this.map.extent,this.map.width,this.map.height,function(i){o=new Image,u.prefetchImgNodes[s.id].push(o),o.src=i},a))}},setDimensionInfoText:function(i){if(S.isDefined(i)){var s=this.unitSymbol||this.unit;if("number"!=typeof i){var t=e.clone(i.sort(this._sortCompareFunction));t[0]%1==0&&t[1]%1==0||(t[0]=parseFloat(t[0].toFixed(2)),t[1]=parseFloat(t[1].toFixed(2))),i="["+t[0]+", "+t[1]+"]"}else i%1!=0&&(i=i.toFixed(2));this.unitSymbol?this.dimensionInfo.innerHTML="<label style='font-weight:700;'>"+this.dimensionAlias+" ("+s+")</label>":this.dimensionInfo.innerHTML="<label style='font-weight:700;'>"+this.dimensionAlias+"</label>",this.layout===A.LAYOUT_HORIZONTAL?this.dimensionInfo.innerHTML+=": "+i:this.dimensionInfo.innerHTML+="<br/> "+i}},setLabels:function(i){},_filterLabels:function(){if(this.nLabels&&this.dimensionValues&&this.dimensionValues.length){var i=Math.ceil(this.dimensionValues.length/this.nLabels);return g.map(this.dimensionValues,function(e,s){return s%i==0||s===this.dimensionValues.length-1?(e%1!=0&&(e=parseFloat(e.toFixed(2))),e):""},this)}},_filterLayers:function(){return g.filter(this._layers,function(i){if(i.multidimensionalInfo&&i.visible&&i.useMapDimensionValue&&g.some(i.multidimensionalInfo.variables,function(i){if(g.some(i.dimensions,function(i){if(i.name===this.dimension)return!0},this))return!0},this))return!0},this)},_updateUI:function(){N.remove(this.playPauseBtn.iconNode,this._iconClass),this._iconClass=this.playing?"mdsButton mdsPauseButton":"mdsButton mdsPlayButton",N.add(this.playPauseBtn.iconNode,this._iconClass)},_bumpSlider:function(i){var e=this._slider.value;i>=0?!this._snap&&(e<0||e>=this.dimensionValues.length-1||e[0]>=this.dimensionValues.length-1||e[1]>=this.dimensionValues.length-1)?this._timer.isRunning&&(this.loop?(this._timer.stop(),this.prefetchedValues={},this.prefetchImgNodes={},2===this._thumbCount?this._snap?this._slider.set("value",this._getNextRangeIndex(e)):this._slider.set("value",[0,Math.abs(e[0]-e[1])]):this._slider.set("value",0),this._timer.start(),this.playing=!0):this.pause()):2===this._thumbCount&&!this._snap&&e[0]<this.dimensionValues.length-1&&e[1]<this.dimensionValues.length-1?this._slider.set("value",[e[0]+1,e[1]+1]):1===this._thumbCount&&e<this.dimensionValues.length-1?this._slider.set("value",e+1):this._snap&&this._slider.set("value",this._getNextRangeIndex(e)):e<=0||e[0]<=0||e[1]<=0?this._timer.isRunning&&(this.loop?(this._timer.stop(),this.prefetchedValues={},2===this._thumbCount?this._snap?this._slider.set("value",this._getNextRangeIndex(e,-1)):this._slider.set("value",[this.dimensionValues.length-1,this.dimensionValues.length-1-Math.abs(e[0]-e[1])]):this._slider.set("value",this.dimensionValues.length-1),this._timer.start(),this.playing=!0):this.pause()):(e>=0||e[1]>=0)&&(2===this._thumbCount&&e[1]>0&&e[0]>0?this._snap?this._slider.set("value",this._getNextRangeIndex(e,-1)):this._slider.set("value",[e[0]-1,e[1]-1]):1===this._thumbCount&&e>0&&this._slider.set("value",e-1))},setThumbMovingRate:function(i){this.thumbMovingRate=i,this._timer&&this._timer.setInterval(this.thumbMovingRate)},getFullDimensionRange:function(i){i=i||this.dimension;var e,s;return g.forEach(this._layers,function(t){t.multidimensionalInfo&&t.multidimensionalInfo.variables&&g.forEach(t.multidimensionalInfo.variables,function(t){g.forEach(t.dimensions,function(t){t.name===i&&t.extent&&t.extent.length&&t.extent.length>1&&((!S.isDefined(e)||t.extent[0]<e)&&(e=t.extent[0]),(!S.isDefined(s)||t.extent[1]>s)&&(s=t.extent[1]))},this)},this)},this),[e,s]},setThumbCount:function(i){this._thumbCount=2==i?2:1,this.value=this.dimensionValues[this._slider.value],this._setupSlider()},clearDimensionalDefinition:function(i){var e,s,t=[];i&&i.mosaicRule&&i.mosaicRule.multidimensionalDefinition&&(s=i.mosaicRule,e=s.multidimensionalDefinition,g.forEach(e,function(i){i.dimensionName!==this.dimension&&t.push(i)},this),s.multidimensionalDefinition=t,i.setMosaicRule(s))},getUnit:function(){var i=null,e=!1;return this.unit=null,g.forEach(this._layers,function(s){s.multidimensionalInfo&&g.forEach(s.multidimensionalInfo.variables,function(s){g.forEach(s.dimensions,function(s){if(s.name===this.dimension&&s.unit)if(null!=i||e){if(S.isDefined(s.unit)&&s.unit.replace("esri","").toLowerCase()!==i.toLowerCase())return i=null,void(e=!0)}else i=s.unit.replace("esri","")},this)},this)},this),i&&(i=i.replace("esri","")),this.unit=i,this.unitSymbol=this.getUnitSymbol(),this._hasUnitConflict=e,i},_getDimensionAlias:function(){this.dimensionAlias=this.dimension,g.some(this._layers,function(i){if(i.fields&&i.fields.length&&g.some(i.fields,function(i){if(i.name&&i.name===this.dimension&&i.alias)return this.dimensionAlias=i.alias,!0},this))return!0},this)},_readMosaicRule:function(){var i;g.forEach(this._layers,function(e){e.mosaicRule&&e.mosaicRule.multidimensionalDefinition&&g.forEach(e.mosaicRule.multidimensionalDefinition,function(e){e&&e.dimensionName===this.dimension&&e.values&&(i=e.values.length&&e.values[0]&&e.values[0].length?e.values[0]:e.values)},this)},this),this.useRanges=S.isDefined(this.useRanges)?this.useRanges:!(!i||1===i.length),i&&(this.useRanges?(this._thumbCount=2,1===i.length?this.value=[i[0],this.dimensionValues[this.dimensionValues.length-1]]:this.value=i):i.length>1&&this._snap?(this._thumbCount=2,this.value=i):(this._thumbCount=1,this.useRanges=!1,this.value=i[0]))},hasUnitConflict:function(){return this.getUnit(),this._hasUnitConflict},resizeSlider:function(i,e){I.set(this.domNode,{height:i+"px",width:e+"px"}),I.set(this.mdSliderTable,{height:i+"px",width:e+"px"}),this.computeSliderStyle()},computeSliderStyle:function(){var i,e;return i=x.getContentBox(this.domNode).h-x.getContentBox(this.dimensionInfo).h-(x.getContentBox(this.playPauseBtnRow).h+20),s("ie")<=10&&(i-=53),e="height: "+i+"px;",this._slider&&this._slider.domNode&&I.set(this._slider.domNode,"height",i+"px"),e},getUnitSymbol:function(){if(!S.isDefined(this.unit))return null;var i=this.unit.toLowerCase();return"meters"===i||"meter"===i?this.unitSymbols.meter:"pascal"===i||"pascals"===i?this.unitSymbols.pascal:void 0},_snapToNearestRange:function(i){if(i&&i.length&&this._snap){var s,t,n,a,l,h,o,r,u=this;return a=[this.dimensionValues[i[1]],this.dimensionValues[i[0]]],(a.sort(this._sortCompareFunction),g.some(this._dimensionObjects,function(i){if(g.some(i.values,function(i){if(i&&i.length&&i[0]===a[0]&&i[1]===a[1])return!0}))return!0},this))?i:(g.some(this._dimensionObjects,function(i){if(g.some(i.values,function(i){if(i&&i.length&&i[0]===a[0])return s=e.clone(i.sort(this._sortCompareFunction)),!0},this))return!0},this)&&(g.some(this.dimensionValues,function(i,e){i===s[0]&&(t=e),i===s[1]&&(n=e)}),o=Math.abs(i[0]-t),l=[t,n]),g.some(this._dimensionObjects,function(i){if(g.some(i.values,function(i){if(i&&i.length&&i[1]===a[1])return s=e.clone(i.sort(this._sortCompareFunction)),!0},this))return!0},this)&&(g.some(this.dimensionValues,function(i,e){i===s[1]&&(n=e),i===s[0]&&(t=e)}),r=Math.abs(i[1]-n),h=[t,n]),i=o&&r?this._oldValue&&this._oldValue.length&&this._arraysEqual(this._oldValue,l)?h:this._oldValue&&this._oldValue.length&&this._arraysEqual(this._oldValue,h)?l:o<=r?l:h:l||h||i,this._update=!1,setTimeout(function(){u._slider.set("value",i)},100),i)}},_arraysEqual:function(i,e){var s;if(!S.isDefined(i)||!S.isDefined(e))return!1;if(i===e)return!0;if(i.length!==e.length)return!1;for(i.sort(this._sortCompareFunction),e.sort(this._sortCompareFunction),s=0;s<i.length;++s)if(i[s]!==e[s])return!1;return!0},_getNextRangeIndex:function(i,e){if(!this._dimensionRangeValues||!this._dimensionRangeValues.length)return null;var s,t,n,a,l;return e=S.isDefined(e)?e:1,g.some(this._dimensionRangeValues,function(e,t){if(this._arraysEqual(e,[this.dimensionValues[i[0]],this.dimensionValues[i[1]]]))return s=t,!0},this),t=e>0?(s+1)%this._dimensionRangeValues.length:(this._dimensionRangeValues.length+s-1)%this._dimensionRangeValues.length,n=this._dimensionRangeValues[t],g.some(this.dimensionValues,function(i,e){if(i===n[0]&&(a=e),i===n[1]&&(l=e),a&&l)return!0},this),[a,l]}});return e.mixin(H,A),s("extend-esri")&&e.setObject("dijit.MultidimensionalSlider",H,y),H});