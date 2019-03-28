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

define({documentTypes:{arcgis:{caption:"ArcGIS metapodaci",editorCaption:"Metapodaci",description:""}},emptyOption:"Prazno",conditionals:{ISO19139A1_ROW4:"Ako je Nivo hijerarhije metapodataka Skup podataka, potreban je Geografski granični pravougaonik ili Geografski opis.",ISO19139A1_ROW6:"Potreban je Identifikator skupa podataka ili Ime skupa podataka.",ISO19139A1_ROW7:"Ako je odabrana opcija Druga ograničenja, biće potrebna Druga ograničenja.",ISO19139A1_ROW9:"Ako Opseg nije Skup podataka, potreban je Opis nivoa.",ISO19139A1_ROW10_11_12:"Ako je Opseg Skup podataka ili Serija, potrebna je Izjava, Korak procesa ili Izvor podataka.",ISO19139A1_ROW15:"Ako je izabrana opcija Dostupnost kontrolne tačke, potreban je Opis kontrolne tačke.",ISO19139A1_ROW18:"Ako je Distribucija dokumentovana, potreban je Format ili Distributer/Format.",INSPIRE_AccessLimitation:" Potreban je najmanje jedan kod za zakonsko ograničenje pristupa ili bezbednosni klasifikacioni kod. (INSPIRE)",INSPIRE_UseLimitation:" Potrebno je najmanje jedno ograničenje korišćenja. (INSPIRE)",INSPIRE_ConformanceResult:"Izveštaj doslednosti domena zahteva Rezultat prilagođavanja. (INSPIRE)",INSPIRE_DomainConsistency:"Potreban je izveštaj Doslednosti domena. (INSPIRE)",INSPIRE_LineageStatement:"Ako je Opseg Skup podataka ili Serija, potrebna je Izjava o poreklu.",FGDC_DescIfTemporal:"Potreban je Opis za Vremenski obuhvat. (FGDC)",FGDC_Keywords:"Potrebna je Tema, Oznaka ili Ključna reč teme. (FGDC)",FGDC_Reports:"Potrebni su izveštaji Izostavljanje potpunosti i Konceptualna doslednost. (FGDC)",FGDC_Temporal:"Potreban je najmanje jedan Vremenski obuhvat. (INSPIRE)",NAP_Contact:"Potrebna je Adresa/Tačka isporuke, Broj telefona/Voice-a ili Resurs na mreži/URL adresa. (NAP)",GEN_BoundingBox:"Potreban je najmanje jedan Geografski granični pravougaonik.",GEN_ReportResult:"Potreban je rezultat prilagođavanja ili kvantitativni rezultat.",minLessThanMax:"Minimalna vrednost mora da bude manja od Maksimalne vrednosti."},hints:{integerGreaterThanZero:"(unesite ceo broj > 0)",integerGreaterThanOne:"(unesite ceo broj > 1)",integer0To100:"(unesite ceo broj od 0 do 100)",maxScale:"(unesite ceo broj > 0, npr. 50.000)",minScale:"(unesite ceo broj > 0, npr. 150.000.000)",number0To100:"(unesite broj od 0 do 100)",number0To360:"(unesite broj od 0 do 360)",number90To90:"(unesite broj od -90 do 90)",listOfDoubles:"(unesite listu brojeva, koristite razmak za razdvajanje)"},htmlEditor:{button:"Izmeni..."},sections:{overview:"Pregled",esri:"Esri",resource:"Resurs",reference:"Referenca",content:"Sadržaj",distribution:"Distribucija",quality:"Kvalitet",eainfo:"Polja",representation:"Predstavljanje",metadata:"Metapodaci"},metadataStyle:{caption:"ArcGIS stil metapodataka",changeButton:"Promeni...",dialogTitle:"Odaberite stil metapodataka",updating:"Ažuriranje dokumenta...","Item Description":"Opis stavke","FGDC CSDGM Metadata":"FGDC CSDGM metapodaci","ISO 19139 Metadata Implementation Specification":"ISO 19139 specifikacije za implementaciju metapodataka","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 specifikacija za implementaciju metapodataka GML3.2","INSPIRE Metadata Directive":"INSPIRE direktiva za metapodatke","North American Profile of ISO19115 2003":"Severnoamerički profil za ISO19115 2003"},aggrInfo:{caption:"Grupiši informacije",datasetHint:"Potreban je Identifikator skupa podataka ili Ime skupa podataka.",aggrDSIdent:"Identifikator skupa podataka",aggrDSName:"Ime skupa podataka"},appSchInfo:{caption:"Šema aplikacije",asName:"Ime šeme",asSchLang:"Jezik šeme",asCstLang:"Jezik ograničenja",asAscii:"ASCII",asGraFile:"Grafička datoteka",asGraFile_src:"Izvor grafičke datoteke",asSwDevFile:"Datoteka za razvoj softvera",asSwDevFile_src:"Izvor datoteke za razvoj softvera",asSwDevFiFt:"Format datoteke za razvoj softvera"},citation:{caption:"Citat",section:{titlesAndDates:"Naslovi i datumi",links:"URL adrese",identifiers:"Identifikatori",presentation:"Obrazac",other:"Ostalo",edition:"Izdanje",series:"Serija"},conditionalDate:{caption:"Datum citata",msg:"Potreban je Datum kreiranja, Datum objavljivanja ili Datum pregleda.",msg_nap:"Potreban je datum citata."},resTitle:"Naslov",resAltTitle:"Alternativni naslov",collTitle:"Kolektivni naslov",date:{createDate:"Datum kreiranja",pubDate:"Datum objavljivanja",reviseDate:"Datum pregleda",notavailDate:"Datum nedostupnosti",inforceDate:"Datum stupanja na snagu",adoptDate:"Datum usvajanja",deprecDate:"Datum zastarevanja",supersDate:"Datum zamene"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identifikator",identCode:"Kod",identAuth:"Citat institucije"},resEd:"Izdanje",resEdDate:"Datum izdanja",datasetSeries:{seriesName:"Naziv",issId:"Broj",artPage:"Stranica"},otherCitDet:"Drugi detalji",contactCaption:"Kontakt citata"},cntAddress:{caption:"Adresa",delPoint:"Tačka isporuke",city:"Grad",adminArea:"Administrativna oblast",postCode:"Poštanski broj",country:"Zemlja",eMailAdd:"E-adresa",addressType:{caption:"Tip adrese",postal:"Poštanski region",physical:"Fizička",both:"Oba"}},cntOnlineRes:{caption:"Resurs na mreži",linkage:"URL adresa",protocol:"Protokol",appProfile:"Profil aplikacije",orName:"Naziv",orDesc:"Opis"},cntPhone:{caption:"Telefon",voiceNum:"Voice",faxNum:"Faks",tddtty:"TDD/TTY?"},codeRef:{caption:"Identifikator",identCode:"Kod",idCodeSpace:"Kodni prostor",idVersion:"Verzija",identAuth:"Citat institucije"},constraints:{caption:"Ograničenja",useLimit:"Ograničenje upotrebe",general:{caption:"Opšte"},legal:{caption:"Pravno",accessConsts:"Ograničenja pristupa",useConsts:"Ograničenja upotrebe",othConsts:"Druga ograničenja"},security:{caption:"Bezbednost",classSys:"Klasifikacioni sistem",userNote:"Korisnička napomena",handDesc:"Opis rukovanja"}},contInfo:{caption:"Informacije o sadržaju",section:{CovDesc:"Opis pokrivenosti",ImgDesc:"Opis snimka",FetCatDesc:"Katalog geoobjekata"},attDesc:"Opis atributa",covDim:{caption:"Domet ili opseg",seqID:"Identifikator redosleda",seqIDType:"Tip identifikatora redosleda",dimDescrp:"Deskriptor"},RangeDim:{caption:"Dimenzija dometa"},Band:{caption:"Opseg",minVal:"Minimalna vrednost",maxVal:"Maksimalna vrednost",valUnit:"Jedinice vrednosti",pkResp:"Najveći odziv",bitsPerVal:"Bitova po vrednosti",toneGrad:"Gradacija nijanse",sclFac:"Faktor razmere",offset:"Pomak"},CovDesc:{caption:"Opis pokrivenosti",section:{description:"Opis",rangesAndBands:"Dometi i opsezi"}},ImgDesc:{caption:"Opis snimka",section:{description:"Opis",rangesAndBands:"Dometi i opsezi"},illElevAng:"Ugao elevacije osvetljavanja",illAziAng:"Ugao azimuta osvetljavanja",cloudCovPer:"Procenat pokrivenosti oblacima",cmpGenQuan:"Kvalitet kompresije",trianInd:"Indikator triangulacije?",radCalDatAv:"Dostupnost podataka o radiometrijskoj kalibraciji?",camCalInAv:"Dostupnost informacija o kalibraciji kamere?",filmDistInAv:"Dostupnost informacija o distorziji filma?",lensDistInAv:"Dostupnost informacija o distorziji objektiva?",imagQuCode:"Kod kvaliteta",prcTypCde:"Kod nivoa obrade"},FetCatDesc:{caption:"Katalog geoobjekata",section:{description:"Opis",featureTypes:"Tipovi geoobjekata",citation:"Citat"},compCode:"Usaglašeno sa ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Citat kataloga geoobjekata",catFetTyps:{caption:"Tip geoobjekta",genericName:"Naziv",codeSpace:"Kodni prostor"}}},contact:{caption:"Kontakt",section:{name:"Ime kontakta",info:"Kontakt podaci",hoursAndInstructions:"Radno vreme i uputstva"},conditionalName:{caption:"Ime kontakta",msg:"Potrebno je Ime pojedinca, Ime organizacije ili Naziv radnog mesta.",msg_fgdc:"Potrebno je Ime pojedinca ili Ime organizacije."},rpIndName:"Ime pojedinca",rpOrgName:"Ime organizacije",rpPosName:"Naziv radnog mesta",rpCntInfo:"Kontakt podaci",cntHours:"Radno vreme",cntInstr:"Uputstva kontakta"},distInfo:{caption:"Informacije o distribuciji",section:{format:"Format",distributor:"Distributer",transfer:"Opcije prenosa"},distFormat:{caption:"Format distribucije",formatName:"Ime formata",formatVer:"Verzija formata",formatAmdNum:"Broj izmene",formatSpec:"Specifikacija",fileDecmTech:"Tehnika dekomprimovanja",formatInfo:"Sadržaj informacija"},distributor:{caption:"Distributer"},distTranOps:{caption:"Opcije digitalnog prenosa",section:{unitsAndSize:"Jedinice"},unitsODist:"Jedinice distribucije",transSize:"Veličina prenosa",offLineMed:{caption:"Medijum van mreže",medDensity:"Gustina",medDenUnits:"Jedinice gustine",medVol:"Zapremine",medNote:"Napomena medijuma"}},distorOrdPrc:{caption:"Proces naručivanja",resFees:"Naknade",planAvDtTm:"Datum dostupnosti",planAvTmPd:{caption:"Period datuma dostupnosti",tmBegin:"Datum/vreme početka",tmEnd:"Datum/vreme završetka"},ordInstr:"Uputstva za naručivanje",ordTurn:"Okretanje"}},dqInfo:{caption:"Kvalitet podataka",section:{scope:"Opseg",report:"Izveštaj",lineage:"Poreklo"},dqScope:{section:{level:"Nivo",extent:"Obuhvat"},scpLvl:"Nivo opsega",scpLvlDesc:"Opis nivoa",scpExt:"Obuhvat opsega"},report:{section:{measure:"Mera",evaluation:"Procena",result:"Rezultat",conformance:"Prilagođavanje"},measDesc:"Opis merenja",measName:"Ime merenja",measDateTm:"Datum merenja",measId:"Identifikator merenja",evalMethDesc:"Metod procene",evalProc:"Citat postupka",ConResult:{caption:"Rezultat prilagođavanja",conExpl:"Objašnjenje",conSpec:"Specifikacija",conPass:{caption:"Stepen",_1:"Usklađeno",_0:"Neusklađeno"}},QuanResult:{caption:"Kvantitativni rezultat",quanVal:"Vrednost",quanValType:"Tip vrednosti",quanValUnit:"Jedinice vrednosti",errStat:"Statistika greške"}},dataLineage:{section:{statement:"Izjava",dataSource:"Izvor podataka",prcStep:"Korak procesa"},statement:"Izjava porekla",dataSource:{caption:"Izvor podataka",section:{description:"Opis",srcRefSys:"Referentni sistem",srcExt:"Obuhvat",srcCitatn:"Citat"},srcDesc:"Opis izvora",srcScale:{rfDenom:"Imenitelj razmere"},srcRefSys:"Referentni sistem izvora",srcExt:"Obuhvat izvora",srcCitatn:"Citat izvora"},prcStep:{caption:"Korak procesa",section:{description:"Opis",stepProc:"Procesor",stepSrc:"Izvor podataka"},stepDesc:"Opis procesa",stepRat:"Obrazloženje",stepDateTm:"Datum koraka procesa",stepProc:"Procesor",stepSrc:"Izvor podataka"}}},eainfo:{caption:"Informacije o entitetu i atributu",section:{detailed:"Detalji",overview:"Pregled"},detailed:{caption:"Detalji entiteta i atributa",section:{enttyp:"Entitet",attr:"Atributi"},enttyp:{caption:"Tip entiteta",enttypl:"Oznaka",enttypt:"Objekat",enttypc:"Broj",enttypd:"Definicija",enttypds:"Izvor definicije"},attr:{caption:"Atribut",section:{description:"Opis",value:"Vrednost",domain:"Domen"},attrlabl:"Oznaka",attalias:"Alias",attrdef:"Definicija",attrdefs:"Izvor definicije",attrtype:"Tip",attwidth:"Širina",atprecis:"Preciznost",attscale:"Razmera",atindex:"Indeksirano",attrvai:{attrva:"Opis vrednosti",attrvae:"Tačnost vrednosti"},attrmfrq:"Učestalost merenja vrednosti",begdatea:"Datum početka vrednosti",enddatea:"Datum završetka vrednosti",attrdomv:{caption:"Domen",edom:{caption:"Nabrojano",edomv:"Vrednost",edomvd:"Definicija",edomvds:"Izvor definicije"},rdom:{caption:"Opseg",rdommin:"Minimalna vrednost",rdommax:"Maksimalna vrednost",rdommean:"Sredina",rdomstdv:"Standardna devijacija",attrunit:"Jedinice",attrmres:"Rezolucija merenja"},codesetd:{caption:"Skup kodova",codesetn:"Naziv",codesets:"Izvor"},udom:{caption:"Nije moguće predstaviti"}}}},overview:{caption:"Pregled",eaover:"Rezime",eadetcit:"Citat"}},extent:{caption:"Obuhvat",section:{description:"Opis",geographic:"Geografski",temporal:"Vremenski",vertical:"Vertikalno"},exDesc:"Opis obuhvata",geoEle:{caption:"Geografski obuhvat",GeoBndBox:{caption:"Granični pravougaonik",esriExtentType:"Obuhvat je za pretragu?",exTypeCode:"Obuhvat sadrži resurs?",westBL:"Zapadna granična geografska dužina",eastBL:"Istočna granična geografska dužina",southBL:"Južna granična geografska širina",northBL:"Severna granična geografska širina"},GeoDesc:{caption:"Geografski opis",exTypeCode:"Opis sadrži resurs?",identCode:"Kod"}},tempEle:{caption:"Vremenski obuhvat",TM_Period:"Vremenski period",TM_Instant:"Vremenski momenat",tmPosition:"Datum",tmBegin:"Datum početka",tmEnd:"Datum završetka"},vertEle:{caption:"Vertikalni obuhvat",vertMinVal:"Minimalna vrednost",vertMaxVal:"Maksimalna vrednost"}},graphOver:{caption:"Pretraži grafiku",bgFileName:"Pretraži URL grafike",bgFileDesc:"Pretraži opis grafike",bgFileType:"Pretraži tip grafičke datoteke"},keywords:{caption:"Ključne reči",section:{topicCategory:"Tema",searchKeys:"Oznake",themeKeys:"Tema",placeKeys:"Mesto",tempKeys:"Vremenski",discKeys:"Disciplina",stratKeys:"Sloj",productKeys:"Proizvod",subTopicCatKeys:"Podtema",otherKeys:"Ostalo"},delimited:"Ključne reči",searchKeys:"Oznake",themeKeys:"Ključne reči teme",placeKeys:"Ključne reči mesta",tempKeys:"Ključne reči vremena",discKeys:"Ključne reči discipline",stratKeys:"Ključne reči sloja",productKeys:"Ključne reči proizvoda",subTopicCatKeys:"Ključne reči podteme",otherKeys:"Druge ključne reči",thesaName:"Citat iz tezaurusa",thesaLang:"Jezik tezaurusa"},locales:{caption:"Lokalni standardi",locale:"Lokalni standard",resTitle:"Naslov",idAbs:"Rezime"},maintenance:{caption:"Održavanje",section:{frequency:"Učestalost",scope:"Opseg",note:"Napomena"},usrDefFreq:"Prilagođena učestalost",dateNext:"Sledeće ažuriranje",maintScp:"Opseg ažuriranja",upScpDesc:{caption:"Opis opsega",attribSet:"Atributi",attribIntSet:"Instance atributa",featSet:"Geoobjekti",featIntSet:"Instance geoobjekta",datasetSet:"Skup podataka",other:"Druge instance"},maintNote:"Napomena za održavanje",maintCont:"Kontakt za održavanje"},metadata:{section:{profile:"Profil",details:"Opseg"},mdFileID:"Identifikator datoteke",mdParentID:"Identifikator nadređenog elementa",datasetURI:"URI skupa podataka",dataSetFn:"Funkcija skupa podataka",mdDateSt:"Datum metapodataka",mdLang:"Jezik metapodataka",mdChar:"Skup znakova",mdHrLv:"Hijerarhijski nivo",mdHrLvName:"Ime hijerarhijskog nivoa",mdContact:"Kontakt metapodataka",mdMaint:"Održavanje metapodataka",mdConst:"Ograničenja metapodataka"},porCatInfo:{caption:"Citat prikaza"},refSysInfo:{caption:"Prostorna referenca"},resource:{section:{citation:"Citat",details:"Detalji",description:"Opis",keywords:"Ključne reči",status:"Status",resolution:"Rezolucija",representation:"Predstavljanje",browse:"Pretraži grafiku",format:"Format",usage:"Korišćenje",aggregateInfo:"Grupisanje",additional:"Dodatno"},idAbs:"Opis (izvod)",idPurp:"Rezime (svrha)",suppInfo:"Dodatne informacije",idCredit:"Krediti",envirDesc:"Okruženje procesiranja",dataLang:"Jezik resursa",dataExt:"Obuhvat resursa",idPoC:"Tačka kontakta",resMaint:"Održavanje resursa",resConst:"Ograničenja resursa",dsFormat:"Format resursa",dataScale:{caption:"Razmera podataka",equScale:"Rezolucija razmere",scaleDist:"Rezolucija rastojanja",scaleDist_value:"Rastojanje"},idSpecUse:{caption:"Upotreba resursa",specUsage:"Specifična upotreba",usageDate:"Datum upotrebe",usrDetLim:"Ograničenja",usrCntInfo:"Kontakt upotrebe"}},service:{caption:"Servis",svType:"Tip servisa",svType_Name:"Naziv",svAccProps:"Svojstva pristupa",svCouplRes:{caption:"Spojeni resurs",svOpName:"Ime operacije",svResCitId:"Identifikator resursa"},svCoupleType:"Tip spajanja"},scaleRange:{caption:"Opseg razmere",maxScale:"Maksimalna razmera",minScale:"Minimalna razmera"},spatRepInfo:{caption:"Prostorno predstavljanje",section:{dimension:"Dimenzija",parameters:"Parametri"},numDims:"Broj dimenzija",tranParaAv:"Dostupnost parametra transformacije?",axisDimension:{caption:"Dimenzija",dimSize:"Veličina",dimResol:{caption:"Rezolucija",_value:"Vrednost rezolucije",uom:"Jedinice rezolucije"}},VectSpatRep:{caption:"Vektor",geometObjs:"Geometrijski objekti",geoObjCnt:"Broj objekata"},GridSpatRep:{caption:"Mreža"},Georect:{caption:"Georektifikovano",section:{centerPoint:"Središnja tačka",cornerPts:"Tačke u uglovima"},chkPtAv:"Dostupnost kontrolne tačke?",chkPtDesc:"Opis kontrolne tačke",ptInPixel:"Tačka u pikselima",transDimDesc:"Opis dimenzije transformacije",transDimMap:"Mapiranje dimenzije transformacije",cornerPts:{caption:"Tačka u uglu",pos:"Pozicija",gmlDesc:"Opis",gmlDescRef:"Referenca",gmlIdent:"Identifikator",codeSpace:"Identifikator kodnog prostora"}},Georef:{caption:"Georeferentabilno",ctrlPtAv:"Dostupnost kontrolne tačke?",orieParaAv:"Dostupnost parametra orijentacije?",orieParaDs:"Opis parametra orijentacije",georefPars:"Georeferencirani parametri",paraCit:"Citat parametra"},Indref:{caption:"Indirektno"}},booleanOptions:{_false:"Ne",_true:"Da"},codelist:{CountryCode:"Zemlja",LanguageCode:"Jezik",MonetaryUnits:"Novčane jedinice",MonetaryUnits_empty:"Nema univerzalne jedinice",PresentationForm:"FGDC obrazac prezentacije geoprostornih podataka",CI_PresentationFormCode:"Obrazac prezentacije",CI_RoleCode:"Uloga",CI_OnLineFunctionCode:"Funkcija",IMS_ContentType:"Tip sadržaja",DQ_ElementDimension:"Dimenzija",DQ_ElementType:"Tip izveštaja",DQ_EvaluationMethodTypeCode:"Tip procene",DS_AssociationTypeCode:"Tip asocijacije",DS_InitiativeTypeCode:"Tip inicijative",LI_SourceType:"Tip izvora",MD_CellGeometryCode:"Geometrija ćelije",MD_CharacterSetCode:"Skup znakova",MD_ClassificationCode:"Klasifikacija",MD_CoverageContentTypeCode:"Tip sadržaja",MD_DimensionNameTypeCode:"Tip dimenzije",MD_GeometricObjectTypeCode:"Tip geometrijskog objekta",MD_ImagingConditionCode:"Uslov pravljenja snimka",MD_MaintenanceFrequenceCode:"Učestalost ažuriranja",MD_MediumFormatCode:"Kod formata",MD_MediumNameCode:"Ime medijuma",MD_PixelOrientationCode:"Orijentacija piksela",MD_ProgressCode:"Status",MD_RestrictionCode:"Kod ograničenja",MD_ScopeCode:"Opseg",MD_SpatialRepresentationTypeCode:"Tip prostornog predstavljanja",MD_TopicCategoryCode:"Kategorija teme",MD_TopologyLevelCode:"Nivo topologije",RS_Dimension:"Dimenzija",SV_CouplingType:"Tip spajanja",UCUM:"Jedinice",UCUM_Length:"Jedinice rastojanja"}});