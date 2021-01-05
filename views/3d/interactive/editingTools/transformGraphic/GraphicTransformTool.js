/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/tslib.es6","../../../../../core/has","../../../../../core/maybe","../../../../../core/Logger","../../../../../core/accessorSupport/ensureType","../../../../../core/handleUtils","../../../../../core/accessorSupport/decorators/property","../../../../../core/accessorSupport/decorators/subclass","../../../../../core/urlUtils","../../../../../core/uuid","../../../../../portal/support/resourceExtension","../../../../../core/Evented","../../../../../chunks/common","../../../../../core/Handles","../../../../../support/elevationInfoUtils","../../../../interactive/InteractiveToolBase","../../manipulatorUtils","../manipulatorUtils","../../../layers/graphics/GraphicState","../visualElementUtils","../manipulations/config","../manipulations/MoveManipulation","./GraphicScaleRotateTransform"],(function(t,e,a,i,o,n,s,r,l,c,h,p,u,d,v,m,g,y,f,M,S,b,T,R,_){"use strict";t.GraphicTransformTool=function(t){function a(e){var a;return(a=t.call(this,e)||this).enableZ=!0,a.enableRotation=!0,a.enableScaling=!0,a.type="transform-3d",a.handles=new m,a.scaleRotate=null,a}e._inheritsLoose(a,t);var i=a.prototype;return i.initialize=function(){if(this.graphicState=new S.GraphicState({graphic:this.graphic}),this.moveManipulation=new R.MoveManipulation({tool:this,view:this.view,snapToScene:this.snapToScene,xyAvailable:!0,xyAxisAvailable:!0,zAvailable:this.enableZ&&M.canMoveZ(this.graphic),radius:R.MoveManipulation.radiusForSymbol(this.graphic.symbol)}),this.moveManipulation.forEachManipulator((t=>this.handles.add(t.events.on("immediate-click",(t=>t.stopPropagation()))))),this.moveManipulation.elevationInfo=g.getGraphicEffectiveElevationInfo(this.graphic),this.moveManipulation.createGraphicDragPipeline(this.graphicState,(t=>{const{action:e,graphic:a,dxScreen:i,dyScreen:o}=t,n={graphic:a,dxScreen:i,dyScreen:o};switch(e){case"start":this.emit("graphic-translate-start",n);break;case"update":this.emit("graphic-translate",n);break;case"end":this.emit("graphic-translate-stop",n)}})),this.moveManipulation.angle=this.symbolRotationAngle,this.enableScaling||this.enableRotation){const t=this.enableScaling&&this.enableRotation?null:this.enableScaling?"scale":"rotate";this.scaleRotate=new _.GraphicScaleRotateTransform({tool:this,mode:t}),this.handles.add(this.scaleRotate.events.on("scale-changed",(()=>this.onScaleChanged())))}this.handles.add([b.createVisualElements({view:this.view,graphic:this.graphic,forEachManipulator:t=>this.forEachManipulator(t),onManipulatorsChanged:()=>r.makeHandle()}),this.graphic.watch("symbol",(()=>this.updateMoveAngle())),this.graphicState.on("changed",(()=>this.onGeometryChanged())),this.hideManipulatorsForGraphicState(),this.view.watch("scale",(()=>this.updateMoveAngle()))]),this.handles.add(this.view.trackGraphicState(this.graphicState)),this.onGeometryChanged()},i.forEachManipulator=function(t){this.moveManipulation.forEachManipulator(t),o.isSome(this.scaleRotate)&&this.scaleRotate.forEachManipulator(t)},i.hideManipulatorsForGraphicState=function(){return this.graphicState.watch("displaying",(t=>{this.forEachManipulator((e=>e.available=t)),this.moveManipulation.zManipulation.available=t&&this.enableZ&&M.canMoveZ(this.graphic)}))},i.destroy=function(){this.handles.destroy(),this.moveManipulation.destroy(),o.isSome(this.scaleRotate)&&(this.scaleRotate.destroy(),this.scaleRotate=null),this._set("view",null),this._set("graphic",null)},i.reset=function(){},i.onDetach=function(){o.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()},i.onHide=function(){o.isSome(this.scaleRotate)&&this.scaleRotate.cancelActiveAnimation()},i.onScaleChanged=function(){if(o.isNone(this.scaleRotate))return;const t=this.scaleRotate.getScale();this.moveManipulation.displayScale=t},i.updateMoveAngle=function(){"local"===this.view.viewingMode||this.view.scale<T.ALIGN_ARROWS_SCALE_THRESHOLD?this.moveManipulation.angle=this.symbolRotationAngle:this.moveManipulation.angle=0},i.onGeometryChanged=function(){f.placeAtGraphic(this.view,this.moveManipulation,this.graphic)},e._createClass(a,[{key:"snapToScene",set:function(t){this.moveManipulation&&(this.moveManipulation.snapToScene=t),this._set("snapToScene",t)}},{key:"symbolRotationAngle",get:function(){const t=this.graphic.symbol;if(t){const e=t.symbolLayers.find((t=>"object"===t.type)),a=e&&e.heading||0;return v.toRadian(-a)}return 0}},{key:"test",get:function(){return{discManipulator:this.moveManipulation.xyManipulation.test.discManipulator,ringManipulator:o.isSome(this.scaleRotate)?this.scaleRotate.test.ringManipulator:null,arrowManipulators:this.moveManipulation.xyAxisManipulation.test.arrowManipulators}}}]),a}(d.EventedMixin(y.InteractiveToolBase)),a.__decorate([l.property({constructOnly:!0,nonNullable:!0})],t.GraphicTransformTool.prototype,"view",void 0),a.__decorate([l.property({constructOnly:!0,nonNullable:!0})],t.GraphicTransformTool.prototype,"graphic",void 0),a.__decorate([l.property({constructOnly:!0,nonNullable:!0})],t.GraphicTransformTool.prototype,"enableZ",void 0),a.__decorate([l.property()],t.GraphicTransformTool.prototype,"enableRotation",void 0),a.__decorate([l.property()],t.GraphicTransformTool.prototype,"enableScaling",void 0),a.__decorate([l.property({value:!1})],t.GraphicTransformTool.prototype,"snapToScene",null),a.__decorate([l.property({readOnly:!0})],t.GraphicTransformTool.prototype,"type",void 0),t.GraphicTransformTool=a.__decorate([c.subclass("esri.views.3d.interactive.editingTools.graphicTransform3D.GraphicTransformTool")],t.GraphicTransformTool),Object.defineProperty(t,"__esModule",{value:!0})}));