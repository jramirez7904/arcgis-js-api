/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","../../core/promiseUtils","../../intl/messages","../../symbols/TextSymbol","../../chunks/symbols","../../layers/support/LabelExpressionInfo","../../layers/support/LabelClass","../heuristics/clusterMinSize","../support/clusterUtils","../../views/2d/layers/support/clusterUtils"],(function(e,n,t,s,r,a,l,o,i,u,c){"use strict";async function f(e){const{layer:s,renderer:r,view:a}=e;await t.all([s.load(),a.when()]);const l=r||s.renderer;return c.isClusterCompatibleRenderer(l)?{layer:s,renderer:l,view:a}:t.reject(new n("clusters-label-schemes:invalid-parameters","'renderer' is not valid"))}async function p(e){const{renderer:n,view:t,statInfo:s}=e,a=null==s?void 0:s.statisticType,c=s?u.getClusterField(s.attributeInfo,a):u.clusterCountField,f=function(e){const n=new r({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});return new o({symbol:n,deconflictionStrategy:"none",labelPlacement:"center-center",labelExpressionInfo:new l({expression:e})})}("type"===a?function(e,n,t){const s="unique-value"===e.type?e.uniqueValueInfos:[];return u.getPredominantTypeExpression(s,n,t)}(n,c,e.noneValueLabel):function(e){return`\n  $feature["${e}"];\n  var value = $feature["${e}"];\n  var num = Count(Text(Round(value)));\n  var label = When(\n    num < 4, Text(value, "#.#"),\n    num == 4, Text(value / Pow(10, 3), "#.0k"),\n    num <= 6, Text(value / Pow(10, 3), "#k"),\n    num == 7, Text(value / Pow(10, 6), "#.0m"),\n    num > 7, Text(value / Pow(10, 6), "#m"),\n    Text(value, "#,###")\n  );\n  return label;\n  `}(c));return{name:s?`clusters-${a}-${u.getClusterFieldHash(c,a)}`:"clusters-count",labelingInfo:[f],clusterMinSize:await i(f.symbol,t),fieldName:c}}e.getLabelSchemes=async function(e){const[{renderer:n,layer:r,view:a},l]=await t.all([f(e),s.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!n)return null;let o=null;const i=[],c=function(e){const n=new Map;for(const t of e)"size"===t.attributeInfo.vvType?n.set(t.statisticHash,t):n.has(t.statisticHash)||n.set(t.statisticHash,t);return[...n.values()]}(u.getStatisticInfos(r,n,!1));for(const e of c){const t=await p({renderer:n,view:a,statInfo:e,noneValueLabel:l.clusters.predominantNoneValue});"size"===e.attributeInfo.vvType?o=t:i.push(t)}const m=await p({renderer:n,view:a});return o?i.unshift(m):o=m,{primaryScheme:o,secondarySchemes:i}},Object.defineProperty(e,"__esModule",{value:!0})}));