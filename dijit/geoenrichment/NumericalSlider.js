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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/on","dojox/timing","dojo/Evented","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DnDUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/ObjectUtil","dojo/text!./templates/NumericalSlider.html"],function(t,e,i,a,u,n,s,l,h,o,r,m,x,V,c){var d=r.isMobileDevice()?40:20;return t([l,h,s],{templateString:c,decimals:0,minValue:0,maxValue:0,lowerValue:0,upperValue:0,maxNumStatBlocks:20,minNumStatBlocks:10,minNumDataForStatistics:2,value:null,timeIntervalLength:null,_timer:null,constructor:function(t){t&&this.setData(t)},postCreate:function(){this.inherited(arguments),this.label?this.divLabel.innerHTML=this.label:x.hide(this.divLabel),r.isMobileDevice()&&i.add(this.domNode,"isMobile"),this._createMinTextBox(),this._createMaxTextBox(),this._updateTextBoxes(),this._createThumbs()},_createMinTextBox:function(){var t=this;this.tbxMinValue=(new o).placeAt(this.divMinValue),u(this.tbxMinValue.textbox,"keyup",function(e){13===e.keyCode&&t._onChangeMinValue()}),this.own(this.tbxMinValue),u(this.tbxMinValue,r.clickOrRelease,function(e){t.tbxMinValue.textbox.select()})},_createMaxTextBox:function(){var t=this;this.tbxMaxValue=(new o).placeAt(this.divMaxValue),u(this.tbxMaxValue.textbox,"keyup",function(e){13===e.keyCode&&t._onChangeMaxValue()}),this.own(this.tbxMaxValue),u(this.tbxMaxValue,r.clickOrRelease,function(e){t.tbxMaxValue.textbox.select()})},_createThumbs:function(){var t=this;m.addGlobalDragHanlder({node:this.minThumbDiv,tolerance:0,dragMoved:function(e,i,a){t.minThumbDiv.style.left=t.minThumbDiv.offsetLeft+i+"px",t.lowerValue=Math.min(t.upperValue,Math.max(t.minValue,t._thumbToValue(t.minThumbDiv))),t._updateThumbs(),t._updateTextBoxes(),t._emitChangeEvent()}}),m.addGlobalDragHanlder({node:this.maxThumbDiv,tolerance:0,dragMoved:function(e,i,a){t.maxThumbDiv.style.left=t.maxThumbDiv.offsetLeft+i+"px",t.upperValue=Math.max(t.lowerValue,Math.min(t.maxValue,t._thumbToValue(t.maxThumbDiv))),t._updateThumbs(),t._updateTextBoxes(),t._emitChangeEvent()}}),this._updateThumbs()},setData:function(t){t.timeIntervalLength&&(t.timeIntervalLength=parseInt(t.timeIntervalLength),this._timer=new n.Timer,this._timer.onTick=this._onTick.bind(this)),t.minValue?t.minValue=parseFloat(t.minValue):t.dataArray&&(t.minValue=Math.min.apply(null,t.dataArray)),t.maxValue?t.maxValue=parseFloat(t.maxValue):t.dataArray&&(t.maxValue=Math.max.apply(null,t.dataArray)),parseFloat(t.lowerValue)&&0!==t.lowerValue||(t.lowerValue=t.minValue),parseFloat(t.upperValue)&&0!==t.upperValue||(t.upperValue=t.maxValue),e.mixin(this,t)},setValue:function(t){var e="rtl"===document.dir?1:0,i="rtl"===document.dir?0:1;this.lowerValue=t[e],this.upperValue=t[i],this._updateTextBoxes(),this._updateThumbs()},_updateTextBoxes:function(){this._setMinValue(this.numberToText(this.lowerValue)),this._setMaxValue(this.numberToText(this.upperValue))},_setMinValue:function(t){this.tbxMinValue.set("value",t),this.tbxMinValue.textbox.title=t},_setMaxValue:function(t){this.tbxMaxValue.set("value",t),this.tbxMaxValue.textbox.title=t},_updateThumbs:function(){this._valueToThumb(this.minThumbDiv,this.lowerValue),this._valueToThumb(this.maxThumbDiv,this.upperValue)},_valueToThumb:function(t,e){var i=this.hLineDiv.clientWidth||115,a=t.clientWidth||d,u=this.hLineDiv.offsetLeft||5;t.style.left=(e-this.minValue)/(this.maxValue-this.minValue)*i-a/2+u+"px"},_thumbToValue:function(t){var e=this.hLineDiv.clientWidth||115,i=t.clientWidth||d,a=this.hLineDiv.offsetLeft||5;return(t.offsetLeft+i/2-a)/e*(this.maxValue-this.minValue)+this.minValue},_onChangeMinValue:function(t){var e=this.tbxMinValue.get("value");e=this.textToNumber?this.textToNumber(e):parseFloat(e),e=Math.min(this.maxValue,Math.max(this.minValue,e)),isNaN(e)||(this.lowerValue=e,this.upperValue=e<=this.upperValue?this.upperValue:e,this.setValue([this.lowerValue,this.upperValue]),this._emitChangeEvent()),this._updateTextBoxes()},_onChangeMaxValue:function(t){var e=this.tbxMaxValue.get("value");e=this.textToNumber?this.textToNumber(e):parseFloat(e),e=Math.min(this.maxValue,Math.max(this.minValue,e)),isNaN(e)||(this.lowerValue=e>=this.lowerValue?this.lowerValue:e,this.upperValue=e,this.setValue([this.lowerValue,this.upperValue]),this.upperValue=e,this._emitChangeEvent()),this._updateTextBoxes()},_emitChangeEvent:function(){this._timer?(this._timer.stop(),this._timer.setInterval(this.timeIntervalLength),this._timer.start()):this._onTick()},_onTick:function(){var t={lowerValue:this.lowerValue,upperValue:this.upperValue};this._timer&&this._timer.stop(),this.onChange(t)},setStatistics:function(t){if(t=t.filter(function(t){return t>=this.minValue&&t<=this.maxValue},this),!(t.length<this.minNumDataForStatistics)){t.sort(function(t,e){return t-e});for(var e=1/0,i=0;i<t.length;i++)if(0!==i){var u=Math.abs(t[i]-t[i-1]);u>0&&(e=Math.min(u))}var n=isFinite(e)?Math.max(Math.round((this.maxValue-this.minValue)/e)+1,this.minNumStatBlocks):1e6,s=Math.min(this.maxNumStatBlocks,n),l=(this.maxValue-this.minValue)/s,h=this.minValue+l,o=[0],r=0,m=Math.max(1,V.getBestPrecision(this.maxValue));t.forEach(function(t){if(V.roundNumber(t,m)<=V.roundNumber(h,m))o[o.length-1]++;else{for(;V.roundNumber(t,m)>V.roundNumber(h,m);)h+=l,o.push(0);o[o.length-1]++}r=Math.max(r,o[o.length-1])}),a.empty(this.statisticsContainer);var x=(this.statisticsContainer.clientWidth||115)/s;o.forEach(function(t,e){var i=a.create("div",{class:"esriGENumericalSlider_statisticsContainerBlock"},this.statisticsContainer);i.style.width=x-1+"px";var u=t>0?18*t/r+2:0;i.style.height=u+"px",i.style.left=x*e+"px",i.style.top=20-u+"px"},this)}},numberToText:function(t){return t.toFixed(this.decimals)},textToNumber:function(t){return parseFloat(t)},round:function(t){return this.textToNumber(this.numberToText(t))},onChange:function(t){}})});