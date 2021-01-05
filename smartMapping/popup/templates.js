/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/Error","./classBreaks","./dotDensity","./heatmap","./predominance","./relationship","./simple","./uniqueValues"],(function(e,r,t,n,a,l,s,i,p){"use strict";e.getTemplates=async function(e){const{renderer:d,layer:o}=function(e){const{layer:t}=e,n=e.renderer||t.renderer;if(!n)throw new r("getTemplates:invalid-parameters","'renderer' or 'layer.renderer' must be provided");return{layer:t,renderer:n}}(e);if("simple"===d.type)return i.getTemplates({renderer:d,layer:o});if("class-breaks"===d.type)return t.getTemplates({renderer:d,layer:o});if("dot-density"===d.type)return n.getTemplates({renderer:d,layer:o});if("heatmap"===d.type)return a.getTemplates({renderer:d,layer:o});if("unique-value"===d.type){const e=d.authoringInfo&&d.authoringInfo.type;return"predominance"===e?l.getTemplates({renderer:d,layer:o}):"relationship"===e?s.getTemplates({renderer:d,layer:o}):p.getTemplates({renderer:d,layer:o})}return null},Object.defineProperty(e,"__esModule",{value:!0})}));