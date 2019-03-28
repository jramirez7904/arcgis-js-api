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

define("esri/layers/vectorTiles/core/workers/nls/worker-init_de",{"dojo/cldr/nls/number":{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"·",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000 Bio'.'","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"#,##0.00 ¤",perMille:"‰",group:".",percentFormat:"#,##0 %","decimalFormat-long":"000 Billionen",decimalFormat:"#,##0.###",decimal:",","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E",_localized:{}},"dojo/cldr/nls/gregorian":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],"months-format-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"field-second-relative+0":"jetzt","quarters-standAlone-narrow":["1","2","3","4"],"field-weekday":"Wochentag","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yMEd":"E, d.M.y","field-wed-relative+0":"diesen Mittwoch","field-wed-relative+1":"nächsten Mittwoch","dateFormatItem-GyMMMEd":"E, d. MMM y G","dateFormatItem-MMMEd":"E, d. MMM",eraNarrow:["v. Chr.","v. u. Z.","n. Chr.","u. Z."],"field-tue-relative+-1":"letzten Dienstag","days-format-short":["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"d. MMMM y","field-fri-relative+-1":"letzten Freitag","field-wed-relative+-1":"letzten Mittwoch","months-format-wide":["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"dateTimeFormat-medium":"{1}, {0}","dayPeriods-format-wide-pm":"nachm.","dateFormat-full":"EEEE, d. MMMM y","field-thu-relative+-1":"letzten Donnerstag","dateFormatItem-Md":"d.M.","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"mittags","dateFormatItem-yMd":"d.M.y","field-era":"Epoche","dateFormatItem-yM":"M.y","months-standAlone-wide":["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],"timeFormat-short":"HH:mm","quarters-format-wide":["1. Quartal","2. Quartal","3. Quartal","4. Quartal"],"dateFormatItem-yQQQQ":"QQQQ y","timeFormat-long":"HH:mm:ss z","field-year":"Jahr","dateFormatItem-yMMM":"MMM y","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"Stunde","months-format-abbr":["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],"field-sat-relative+0":"diesen Samstag","field-sat-relative+1":"nächsten Samstag","timeFormat-full":"HH:mm:ss zzzz","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","field-day-relative+0":"heute","field-thu-relative+0":"diesen Donnerstag","field-day-relative+1":"morgen","field-thu-relative+1":"nächsten Donnerstag","dateFormatItem-GyMMMd":"d. MMM y G","dateFormatItem-H":"HH 'Uhr'","months-standAlone-abbr":["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],"quarters-format-abbr":["Q1","Q2","Q3","Q4"],"quarters-standAlone-wide":["1. Quartal","2. Quartal","3. Quartal","4. Quartal"],"dateFormatItem-Gy":"y G","dateFormatItem-M":"L","days-standAlone-wide":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"HH:mm:ss","field-sun-relative+0":"diesen Sonntag","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"nächsten Sonntag","quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],eraAbbr:["v. Chr.","n. Chr."],"field-minute":"Minute","field-dayperiod":"Tageshälfte","days-standAlone-abbr":["So","Mo","Di","Mi","Do","Fr","Sa"],"dateFormatItem-d":"d","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1","2","3","4"],"field-day-relative+-1":"gestern","dateTimeFormat-long":"{1} 'um' {0}","dayPeriods-format-narrow-am":"a","dateFormatItem-h":"h a","dateFormatItem-MMMd":"d. MMM","dateFormatItem-MEd":"E, d.M.","dateTimeFormat-full":"{1} 'um' {0}","field-fri-relative+0":"diesen Freitag","field-fri-relative+1":"nächsten Freitag","field-day":"Tag","days-format-wide":["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],"field-zone":"Zeitzone","months-standAlone-narrow":["J","F","M","A","M","J","J","A","S","O","N","D"],"dateFormatItem-y":"y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"letztes Jahr","field-month-relative+-1":"letzten Monat","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"h:mm a","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],eraNames:["v. Chr.","n. Chr."],"dateFormatItem-yMMMd":"d. MMM y","days-format-narrow":["S","M","D","M","D","F","S"],"field-month":"Monat","days-standAlone-narrow":["S","M","D","M","D","F","S"],"dateFormatItem-MMM":"LLL","field-tue-relative+0":"diesen Dienstag","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","field-tue-relative+1":"nächsten Dienstag","dayPeriods-format-wide-am":"vorm.","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E, HH:mm","field-mon-relative+0":"diesen Montag","field-mon-relative+1":"nächsten Montag","dateFormat-short":"dd.MM.yy","dateFormatItem-EHms":"E, HH:mm:ss","dateFormatItem-Ehms":"E, h:mm:ss a","dayPeriods-format-narrow-noon":"n","field-second":"Sekunde","field-sat-relative+-1":"letzten Samstag","dateFormatItem-yMMMEd":"E, d. MMM y","field-sun-relative+-1":"letzten Sonntag","field-month-relative+0":"diesen Monat","field-month-relative+1":"nächsten Monat","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"E, d.","field-week":"Woche","dateFormat-medium":"dd.MM.y","field-week-relative+-1":"letzte Woche","field-year-relative+0":"dieses Jahr","field-year-relative+1":"nächstes Jahr","dayPeriods-format-narrow-pm":"p","dateTimeFormat-short":"{1}, {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-GyMMM":"MMM y G","field-mon-relative+-1":"letzten Montag","field-week-relative+0":"diese Woche","field-week-relative+1":"nächste Woche","dateFormatItem-yMM":"MM.y","dayPeriods-format-wide-earlyMorning":"morgens","dayPeriods-format-wide-morning":"vormittags","dayPeriods-format-wide-evening":"abends","dateFormatItem-MMdd":"dd.MM.","field-day-relative+2":"übermorgen","dateFormatItem-yMMdd":"dd.MM.y","dayPeriods-format-wide-night":"nachts","field-day-relative+-2":"vorgestern","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-MMMMEd":"E, d. MMMM","dateFormatItem-MMd":"d.MM.","dayPeriods-format-wide-afternoon":"nachmittags",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}}});