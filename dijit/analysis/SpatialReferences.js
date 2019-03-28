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

define(["dojo/_base/lang","dojo/has","../../kernel"],function(e,n,t){for(var a=[{name:"Spatial References"},{name:"PCS",parent:"Spatial References"},{name:"UTM",parent:"PCS"},{name:"World",parent:"PCS"},{name:"Continental",parent:"World"},{name:"Sinusoidal",type:"PCS",sRef:{wkid:54008},parent:"World"},{name:"Winkel Tripel (NGS version)",type:"PCS",sRef:{wkid:54042},parent:"World"},{name:"NAD 1983 Contiguous USA Albers",type:"PCS",sRef:{wkid:5070},parent:"Continental"},{name:"GDA 1994 Australia Albers",type:"PCS",sRef:{wkid:3577},parent:"Continental"},{name:"ETRS 1989 Lambert Azimuthal Equal Area Coord Ref Sys",type:"PCS",sRef:{wkid:3035},parent:"Continental"},{name:"ETRS 1989 Lambert Conformal Conic Coord Ref Sys",type:"PCS",sRef:{wkid:3034},parent:"Continental"},{name:"NAD 1983 Albers Canada",type:"PCS",sRef:{wkid:102001},parent:"Continental"},{name:"NAD 1983 Lambert Canada",type:"PCS",sRef:{wkid:102002},parent:"Continental"},{name:"NAD 1983 Lambert contiguous USA",type:"PCS",sRef:{wkid:102004},parent:"Continental"},{name:"NAD 1983 Albers Alaska",type:"PCS",sRef:{wkid:3338},parent:"Continental"},{name:"NAD 1983 Albers Hawaii",type:"PCS",sRef:{wkid:102007},parent:"Continental"},{name:"NAD 1983 Albers North America",type:"PCS",sRef:{wkid:102008},parent:"Continental"},{name:"NAD 1983 Lambert North America",type:"PCS",sRef:{wkid:102009},parent:"Continental"},{name:"WGS 1984 Sinusoidal Africa",type:"PCS",sRef:{wkid:102011},parent:"Continental"},{name:"WGS 1984 Lambert Asia",type:"PCS",sRef:{wkid:102012},parent:"Continental"},{name:"SAD 1969 Lambert South America",type:"PCS",sRef:{wkid:102015},parent:"Continental"},{name:"WGS 1984 Lambert Azimuthal EqArea North Pole",type:"PCS",sRef:{wkid:102017},parent:"Continental"},{name:"WGS 1984 Stereographic North Pole",type:"PCS",sRef:{wkid:102018},parent:"Continental"},{name:"WGS 1984 Lambert Azimuthal EqArea South Pole",type:"PCS",sRef:{wkid:102020},parent:"Continental"},{name:"WGS 1984 Stereographic South Pole",type:"PCS",sRef:{wkid:102021},parent:"Continental"},{name:"WGS 1984 Lambert for Africa",type:"PCS",sRef:{wkid:102024},parent:"Continental"},{name:"WGS 1984 Albers for Northern Asia",type:"PCS",sRef:{wkid:102025},parent:"Continental"},{name:"WGS 1984 Lambert for Northern Asia",type:"PCS",sRef:{wkid:102027},parent:"Continental"},{name:"WGS 1984 Albers for Southern Asia",type:"PCS",sRef:{wkid:102028},parent:"Continental"},{name:"WGS 1984 Lambert for Southern Asia",type:"PCS",sRef:{wkid:102030},parent:"Continental"},{name:"SAD 1969 Albers South America",type:"PCS",sRef:{wkid:102033},parent:"Continental"},{name:"NAD 1983 USGS Contiguous USA Albers",type:"PCS",sRef:{wkid:102039},parent:"Continental"},{name:"WGS 1984 UTM Zone 1N",type:"PCS",sRef:{wkid:32601},parent:"UTM"},{name:"WGS 1984 UTM Zone 2N",type:"PCS",sRef:{wkid:32602},parent:"UTM"},{name:"WGS 1984 UTM Zone 3N",type:"PCS",sRef:{wkid:32603},parent:"UTM"},{name:"WGS 1984 UTM Zone 4N",type:"PCS",sRef:{wkid:32604},parent:"UTM"},{name:"WGS 1984 UTM Zone 5N",type:"PCS",sRef:{wkid:32605},parent:"UTM"},{name:"WGS 1984 UTM Zone 6N",type:"PCS",sRef:{wkid:32606},parent:"UTM"},{name:"WGS 1984 UTM Zone 7N",type:"PCS",sRef:{wkid:32607},parent:"UTM"},{name:"WGS 1984 UTM Zone 8N",type:"PCS",sRef:{wkid:32608},parent:"UTM"},{name:"WGS 1984 UTM Zone 9N",type:"PCS",sRef:{wkid:32609},parent:"UTM"},{name:"WGS 1984 UTM Zone 10N",type:"PCS",sRef:{wkid:32610},parent:"UTM"},{name:"WGS 1984 UTM Zone 11N",type:"PCS",sRef:{wkid:32611},parent:"UTM"},{name:"WGS 1984 UTM Zone 12N",type:"PCS",sRef:{wkid:32612},parent:"UTM"},{name:"WGS 1984 UTM Zone 13N",type:"PCS",sRef:{wkid:32613},parent:"UTM"},{name:"WGS 1984 UTM Zone 14N",type:"PCS",sRef:{wkid:32614},parent:"UTM"},{name:"WGS 1984 UTM Zone 15N",type:"PCS",sRef:{wkid:32615},parent:"UTM"},{name:"WGS 1984 UTM Zone 16N",type:"PCS",sRef:{wkid:32616},parent:"UTM"},{name:"WGS 1984 UTM Zone 17N",type:"PCS",sRef:{wkid:32617},parent:"UTM"},{name:"WGS 1984 UTM Zone 18N",type:"PCS",sRef:{wkid:32618},parent:"UTM"},{name:"WGS 1984 UTM Zone 19N",type:"PCS",sRef:{wkid:32619},parent:"UTM"},{name:"WGS 1984 UTM Zone 20N",type:"PCS",sRef:{wkid:32620},parent:"UTM"},{name:"WGS 1984 UTM Zone 21N",type:"PCS",sRef:{wkid:32621},parent:"UTM"},{name:"WGS 1984 UTM Zone 22N",type:"PCS",sRef:{wkid:32622},parent:"UTM"},{name:"WGS 1984 UTM Zone 23N",type:"PCS",sRef:{wkid:32623},parent:"UTM"},{name:"WGS 1984 UTM Zone 24N",type:"PCS",sRef:{wkid:32624},parent:"UTM"},{name:"WGS 1984 UTM Zone 25N",type:"PCS",sRef:{wkid:32625},parent:"UTM"},{name:"WGS 1984 UTM Zone 26N",type:"PCS",sRef:{wkid:32626},parent:"UTM"},{name:"WGS 1984 UTM Zone 27N",type:"PCS",sRef:{wkid:32627},parent:"UTM"},{name:"WGS 1984 UTM Zone 28N",type:"PCS",sRef:{wkid:32628},parent:"UTM"},{name:"WGS 1984 UTM Zone 29N",type:"PCS",sRef:{wkid:32629},parent:"UTM"},{name:"WGS 1984 UTM Zone 30N",type:"PCS",sRef:{wkid:32630},parent:"UTM"},{name:"WGS 1984 UTM Zone 31N",type:"PCS",sRef:{wkid:32631},parent:"UTM"},{name:"WGS 1984 UTM Zone 32N",type:"PCS",sRef:{wkid:32632},parent:"UTM"},{name:"WGS 1984 UTM Zone 33N",type:"PCS",sRef:{wkid:32633},parent:"UTM"},{name:"WGS 1984 UTM Zone 34N",type:"PCS",sRef:{wkid:32634},parent:"UTM"},{name:"WGS 1984 UTM Zone 35N",type:"PCS",sRef:{wkid:32635},parent:"UTM"},{name:"WGS 1984 UTM Zone 36N",type:"PCS",sRef:{wkid:32636},parent:"UTM"},{name:"WGS 1984 UTM Zone 37N",type:"PCS",sRef:{wkid:32637},parent:"UTM"},{name:"WGS 1984 UTM Zone 38N",type:"PCS",sRef:{wkid:32638},parent:"UTM"},{name:"WGS 1984 UTM Zone 39N",type:"PCS",sRef:{wkid:32639},parent:"UTM"},{name:"WGS 1984 UTM Zone 40N",type:"PCS",sRef:{wkid:32640},parent:"UTM"},{name:"WGS 1984 UTM Zone 41N",type:"PCS",sRef:{wkid:32641},parent:"UTM"},{name:"WGS 1984 UTM Zone 42N",type:"PCS",sRef:{wkid:32642},parent:"UTM"},{name:"WGS 1984 UTM Zone 43N",type:"PCS",sRef:{wkid:32643},parent:"UTM"},{name:"WGS 1984 UTM Zone 44N",type:"PCS",sRef:{wkid:32644},parent:"UTM"},{name:"WGS 1984 UTM Zone 45N",type:"PCS",sRef:{wkid:32645},parent:"UTM"},{name:"WGS 1984 UTM Zone 46N",type:"PCS",sRef:{wkid:32646},parent:"UTM"},{name:"WGS 1984 UTM Zone 47N",type:"PCS",sRef:{wkid:32647},parent:"UTM"},{name:"WGS 1984 UTM Zone 48N",type:"PCS",sRef:{wkid:32648},parent:"UTM"},{name:"WGS 1984 UTM Zone 49N",type:"PCS",sRef:{wkid:32649},parent:"UTM"},{name:"WGS 1984 UTM Zone 50N",type:"PCS",sRef:{wkid:32650},parent:"UTM"},{name:"WGS 1984 UTM Zone 51N",type:"PCS",sRef:{wkid:32651},parent:"UTM"},{name:"WGS 1984 UTM Zone 52N",type:"PCS",sRef:{wkid:32652},parent:"UTM"},{name:"WGS 1984 UTM Zone 53N",type:"PCS",sRef:{wkid:32653},parent:"UTM"},{name:"WGS 1984 UTM Zone 54N",type:"PCS",sRef:{wkid:32654},parent:"UTM"},{name:"WGS 1984 UTM Zone 55N",type:"PCS",sRef:{wkid:32655},parent:"UTM"},{name:"WGS 1984 UTM Zone 56N",type:"PCS",sRef:{wkid:32656},parent:"UTM"},{name:"WGS 1984 UTM Zone 57N",type:"PCS",sRef:{wkid:32657},parent:"UTM"},{name:"WGS 1984 UTM Zone 58N",type:"PCS",sRef:{wkid:32658},parent:"UTM"},{name:"WGS 1984 UTM Zone 59N",type:"PCS",sRef:{wkid:32659},parent:"UTM"},{name:"WGS 1984 UTM Zone 60N",type:"PCS",sRef:{wkid:32660},parent:"UTM"}],S=0;S<a.length;++S)a[S].hasChildren=void 0===a[S].type;var p={identifier:"name",items:a};return n("extend-esri")&&e.setObject("dijit.analysis.SpatialReferences",p,t),p});