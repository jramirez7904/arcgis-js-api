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

define({documentTypes:{data:{caption:"ISO 19115 (Date)",description:""},service:{caption:"ISO 19119 (Serviciu)",description:""},gmi:{caption:"ISO 19115-2 (Imagini şi date în grilă)",description:""}},general:{reference:"Referinţă"},sections:{metadata:"Metadate",identification:"Identificare",distribution:"Distribuţie",quality:"Calitate",acquisition:"Achiziţie"},metadataSection:{identifier:"Identificator",contact:"Contact",date:"Dată",standard:"Standard",reference:"Referinţă"},identificationSection:{citation:"Citaţie",description:"Descriere",contact:"Contact",thumbnail:"Miniatură",keywords:"Keywords",constraints:"Restricţii",resource:"Resursă",resourceTab:{representation:"Reprezentare",language:"Limbă",classification:"Clasificare",extent:"Extindere"},serviceResourceTab:{serviceType:"Tip serviciu",extent:"Extindere",couplingType:"Tip cuplare",operation:"Operaţie",operatesOn:"Funcţionează pe"}},distributionSection:{},qualitySection:{scope:"Domeniu",conformance:"Conformitate",lineage:"Descendenţă"},acquisitionSection:{requirement:"Cerinţă",objective:"Obiectiv",instrument:"Instrument",plan:"Plan",operation:"Operaţie",platform:"Platformă",environment:"Mediu"},AbstractMD_Identification:{sAbstract:"Abstract",purpose:"Scop",credit:"Credite",pointOfContact:"Punct de contact",resourceMaintenance:"Întreţinere",graphicOverview:"Prezentare generală grafic",descriptiveKeywords:"Colecţie de cuvinte cheie",resourceConstraints:"Restricţii"},CI_Address:{deliveryPoint:"Punct livrare",city:"Oraş",administrativeArea:"Zonă administrativă",postalCode:"Cod poştal",country:"Ţară",electronicMailAddress:"Adresă de e-mail"},CI_Citation:{title:"Titlu",alternateTitle:"Titlu alternativ",identifier:"Identificator unic resursă",resource:{title:"Titlu resursă",date:"Dată resursă"},specification:{title:"Titlu specificaţie",date:"Dată specificaţie"}},CI_Contact:{phone:"Telefon",address:"Adresă",onlineResource:"Resursă online",hoursOfService:"Ore de serviciu",contactInstructions:"Instrucţiuni de contact"},CI_Date:{date:"Dată",dateType:"Tip dată"},CI_DateTypeCode:{caption:"Tip dată",creation:"Data creării",publication:"Data publicării",revision:"Data revizuirii"},CI_OnLineFunctionCode:{caption:"Funcţie",download:"Descărcare",information:"Informaţii",offlineAccess:"Acces offline",order:"Ordine",search:"Căutare"},CI_OnlineResource:{caption:"Resursă online",linkage:"URL",protocol:"Protocol",applicationProfile:"Profil aplicaţie",name:"Nume",description:"Descriere",sFunction:"Funcţie"},CI_ResponsibleParty:{caption:"Punct de contact",individualName:"Nume individual",organisationName:"Numele organizaţiei",positionName:"Nume poziţie",contactInfo:"Informaţii de contact",role:"Rol"},CI_RoleCode:{caption:"Rol",resourceProvider:"Furnizor de resurse",custodian:"Custode",owner:"Proprietar",user:"Utilizator",distributor:"Distribuitor",originator:"Autor",pointOfContact:"Punct de contact",principalInvestigator:"Investigator principal",processor:"Procesor",publisher:"Editor",author:"Creaţi"},CI_Telephone:{voice:"Voce",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Servicii web"},DQ_ConformanceResult:{caption:"Rezultat conformitate",explanation:"Explicaţie",degree:{caption:"Grad",validationPerformed:"Validare efectuată",conformant:"Conform",nonConformant:"Neconform"}},DQ_DataQuality:{report:"Raport"},DQ_Scope:{level:"Domeniu (informaţiile privind calitatea se aplică acestuia)",levelDescription:"Descriere nivel"},EX_Extent:{caption:"Extindere",description:"Descriere",geographicElement:"Extindere spaţială",temporalElement:"Extindere temporală",verticalElement:"Extindere verticală"},EX_GeographicBoundingBox:{westBoundLongitude:"Longitudine legătură vest",eastBoundLongitude:"Longitudine legătură est",southBoundLatitude:"Latitudine legătură sud",northBoundLatitude:"Latitudine legătură nord"},EX_GeographicDescription:{caption:"Descriere geografică"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Dată început",endPosition:"Data terminării"}},EX_VerticalExtent:{minimumValue:"Valoare minimă",maximumValue:"Valoare maximă",verticalCRS:"CRS vertical"},Length:{caption:"Lungime",uom:"Unităţi de măsură",km:"Kilometri",m:"Metri",mi:"Mile",ft:"Ft"},LI_Lineage:{statement:"Declaraţie descendenţă"},MD_BrowseGraphic:{fileName:"URL grafic parcurgere",fileDescription:"Subtitlu grafic parcurgere",fileType:"Tip grafic parcurgere"},MD_ClassificationCode:{unclassified:"Neclasificat",restricted:"Restricţionat",confidential:"Confidenţial",secret:"Secret",topSecret:"Secret de top"},MD_Constraints:{caption:"Restricţii utilizare",useLimitation:"Limitare utilizare"},MD_DataIdentification:{spatialRepresentationType:"Tip reprezentare spaţială",spatialResolution:"Rezoluţie spaţială",language:"Limbă resurse",supplementalInformation:"Suplimentar"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Format distribuţie",transferOptions:"Opţiuni transfer"},MD_Format:{name:"Nume format",version:"Versiune format"},MD_Identifier:{caption:"URI",identifierCaption:"Identificator",code:"Cod"},MD_Keywords:{delimitedCaption:"Keywords",thesaurusName:"Dicţionar asociat"},MD_KeywordTypeCode:{caption:"Tip cuvânt cheie",discipline:"Disciplină",place:"Loc",stratum:"Stratificare",temporal:"Temporal",theme:"Temă"},MD_LegalConstraints:{caption:"Restricţii legale",accessConstraints:"Restricţii de acces",useConstraints:"Utilizare restricţii",otherConstraints:"Alte restricţii"},MD_MaintenanceFrequencyCode:{caption:"Frecvenţă",continual:"Continuu",daily:"Zilnic",weekly:"Săptămânal",fortnightly:"Bilunar",monthly:"Lunar",quarterly:"Trimestrial",biannually:"Bianual",annually:"Anual",asNeeded:"După cum este necesar",irregular:"Neregulat",notPlanned:"Neplanificat",unknown:"Necunoscut"},MD_Metadata:{caption:"Metadate",fileIdentifier:"Identificator fişier",language:"Limbă metadate",hierarchyLevel:"Nivel ierarhic",hierarchyLevelName:"Nume nivel ierarhic",contact:"Contact metadate",dateStamp:"Dată metadate",metadataStandardName:"Nume standard metadate",metadataStandardVersion:"Versiune standard metadate",referenceSystemInfo:"Sistem referinţă",identificationInfo:"Identificare",distributionInfo:"Distribuţie",dataQualityInfo:"Calitate"},MD_ProgressCode:{caption:"Cod progres",completed:"Finalizat",historicalArchive:"Arhivă istorică",obsolete:"Perimat",onGoing:"În curs",planned:"Planificat",required:"Obligatoriu",underDevelopment:"În curs de dezvoltare"},MD_RepresentativeFraction:{denominator:"Numitor"},MD_Resolution:{equivalentScale:"Scară echivalentă",distance:"Distanţă"},MD_RestrictionCode:{copyright:"Drepturi de autor",patent:"Patent",patentPending:"Patent în aşteptare",trademark:"Marcă comercială",license:"Licenţă",intellectualPropertyRights:"Drepturi de proprietate intelectuală",restricted:"Restricţionat",otherRestrictions:"Alte restricţii"},MD_ScopeCode:{attribute:"Atribut",attributeType:"Tip atribut",collectionHardware:"Hardware colectare",collectionSession:"Sesiune colectare",dataset:"Set de date",series:"Serie",nonGeographicDataset:"Set de date non-geografice",dimensionGroup:"Grup dimensiune",feature:"Obiect spaţial",featureType:"Tip de obiect spaţial",propertyType:"Tip proprietate",fieldSession:"Sesiune de teren",software:"Software",service:"Serviciu",model:"Model",tile:"Tile"},MD_ScopeDescription:{attributes:"Atribute",features:"Caracteristici",featureInstances:"Instanţe obiecte spaţiale",attributeInstances:"Instanţe atribute",dataset:"Set de date",other:"Altul"},MD_SecurityConstraints:{caption:"Restricţii securitate",classification:"Clasificare",userNote:"Notă utilizator",classificationSystem:"Sistem de clasificare",handlingDescription:"Descriere gestionare"},MD_SpatialRepresentationTypeCode:{caption:"Tip reprezentare spaţială",vector:"Vector",grid:"Grilă",textTable:"Tabel text",tin:"TIN",stereoModel:"Model stereo",video:"Video"},MD_TopicCategoryCode:{caption:"Categorie de subiecte",boundaries:"Graniţe administrative şi politice",farming:"Agricultură şi ferme",climatologyMeteorologyAtmosphere:"Atmosferă şi climă",biota:"Biologie şi ecologie",economy:"Afaceri şi economie",planningCadastre:"Cadastru",society:"Cultură, societate şi demografie",elevation:"Elevaţie şi produse derivate",environment:"Mediu şi conservare",structure:"Facilităţi şi structuri",geoscientificInformation:"Geologie şi geofizică",health:"Sănătate umană şi boli",imageryBaseMapsEarthCover:"Imagini şi hărţi fundal",inlandWaters:"Resurse de apă continentale",location:"Locaţii şi reţele geodezice",intelligenceMilitary:"Militar",oceans:"Oceane şi estuare",transportation:"Reţele de transport",utilitiesCommunication:"Utilităţi şi comunicaţii"},MI_ContextCode:{caption:"Context",acquisition:"Achiziţie",pass:"Trecere",wayPoint:"Punct intermediar"},MI_EnvironmentalRecord:{caption:"Condiţii de mediu",averageAirTemperature:"Temperatură medie a aerului",maxRelativeHumidity:"Umiditate relativă maximă",maxAltitude:"Altitudine maximă",meterologicalConditions:"Condiţii meteo"},MI_Event:{identifier:"Identificator eveniment",time:"Timp",expectedObjectiveReference:"Obiectiv aşteptat (identificator obiectiv)",relatedSensorReference:"Senzor asociat (identificator instrument)",relatedPassReference:"Trecere asociată (identificator trecere platformă)"},MI_GeometryTypeCode:{point:"Punct",linear:"Liniar",areal:"Areal",strip:"Bandă"},MI_Instrument:{citation:"Citaţie instrument",identifier:"Identificator instrument",sType:"Tip instrument",description:"Descriere instrument",mountedOn:"Montat pe",mountedOnPlatformReference:"Montat pe (identificator platformă)"},MI_Metadata:{acquisitionInformation:"Achiziţie"},MI_Objective:{caption:"Obiectiv",identifier:"Identificator obiectiv",priority:"Prioritatea ţintei",sFunction:"Funcţia obiectivului",extent:"Extindere",pass:"Trecere platformă",sensingInstrumentReference:"Instrument detecţie (identificator instrument)",objectiveOccurrence:"Evenimente",sections:{identification:"Identificare",extent:"Extindere",pass:"Trecere",sensingInstrument:"Instrument detecţie",objectiveOccurrence:"Evenimente"}},MI_ObjectiveTypeCode:{caption:"Tip (tehnică de colectare pentru obiectiv)",instantaneousCollection:"Colectare instantanee",persistentView:"Vizualizare persistentă",survey:"Sondaje"},MI_Operation:{caption:"Operaţie",description:"Descriere operaţie",citation:"Citaţie operaţie",identifier:"Identificator operaţie",status:"Stare operaţie",objectiveReference:"Obiectiv asociat (identificator obiectiv)",planReference:"Plan asociat (identificator plan)",significantEventReference:"Eveniment asociat (identificator eveniment)",platformReference:"Platformă asociată (identificator platformă)",sections:{identification:"Identificare",related:"Asociat"}},MI_OperationTypeCode:{caption:"Tip operaţiune",real:"Reală",simulated:"Simulată",synthesized:"Sintetizată"},MI_Plan:{sType:"Eşantioane geometrie pentru colectare de date",status:"Stare plan",citation:"Citaţia autorităţii care solicită colectarea",satisfiedRequirementReference:"Cerinţă satisfăcută (identificator cerinţă)",operationReference:"Operaţie asociată (identificator operaţie)"},MI_Platform:{citation:"Citaţie platformă",identifier:"Identificator platformă",description:"Descriere platformei care susţine instrumentul",sponsor:"Organizaţie sponsor pentru platformă",instrument:"Instrumente montate pe platformă",instrumentReference:"Identificator instrument",sections:{identification:"Identificare",sponsor:"Sponsor",instruments:"Instrumente"}},MI_PlatformPass:{identifier:"Identificator trecere platformă",extent:"Extindere trecere platformă",relatedEventReference:"Eveniment asociat (identificator eveniment)"},MI_PriorityCode:{critical:"Critică",highImportance:"Importanţă mare",mediumImportance:"Importanţă medie",lowImportance:"Importanţă mică"},MI_RequestedDate:{requestedDateOfCollection:"Data solicitată a colectării",latestAcceptableDate:"Ultima dată acceptabilă"},MI_Requirement:{caption:"Cerinţă",citation:"Citaţie pentru materialul de îndrumare pentru cerinţe",identifier:"Identificator cerinţă",requestor:"Solicitant cerinţă",recipient:"Destinatarul rezultatelor cerinţelor",priority:"Prioritate cerinţă",requestedDate:"Data solicitării",expiryDate:"Data expirării",satisifiedPlanReference:"Plan îndeplinit (identificator plan)",sections:{identification:"Identificare",requestor:"Solicitant",recipient:"Destinatar",priorityAndDates:"Prioritate şi date",satisifiedPlan:"Plan îndeplinit"}},MI_SequenceCode:{caption:"Secvenţă",start:"Începere",end:"Terminare",instantaneous:"Instantaneu"},MI_TriggerCode:{caption:"Declanşator",automatic:"Automat",manual:"Manual",preProgrammed:"Preprogramat"},ObjectReference:{uuidref:"Referinţă UUID",xlinkref:"Referinţă URL"},RS_Identifier:{caption:"ID plus spaţiu cod",code:"Cod",codeSpace:"Spaţiu cod"},SV_CouplingType:{loose:"Destins",mixed:"Mixt",tight:"Strâns"},SV_OperationMetadata:{operationName:"Nume operaţiune",DCP:"DCP",connectPoint:"Punct conectare"},SV_ServiceIdentification:{serviceType:"Tip serviciu",couplingType:"Tip cuplare",containsOperations:"Metadate operaţie",operatesOn:"Funcţionează pe"},TM_Primitive:{indeterminatePosition:"Poziţie nedeterminată",indeterminates:{before:"Înainte",after:"După",now:"Acum",unknown:"Necunoscut"}},gemet:{concept:{gemetConceptKeyword:"Cuvânt cheie concept GEMET",tool:"Căutare...",dialogTitle:"GEMET - Cuvânt cheie concept",searchLabel:"Căutare:",searchTip:"Căutare GEMET"},theme:{tool:"Căutare...",dialogTitle:"GEMET - Temă date Inspire"},ioerror:"A apărut o eroare la comunicarea cu serviciul GEMET: {url}",searching:"Căutare GEMET...",noMatch:"Nu a fost găsit niciun rezultat corespunzător.",languages:{bg:"Bulgară",cs:"Cehă",da:"Daneză",nl:"Olandeză",en:"Engleză",et:"Estoniană",fi:"Finlandeză",fr:"Franceză",de:"Germană",el:"Greacă",hu:"Maghiară",ga:"Gaelică (irlandeză)",it:"Italiană",lv:"Letonă",lt:"Lituaniană",mt:"Malteză",pl:"Poloneză",pt:"Portugheză",ro:"Română",sk:"Slovacă",sl:"Slovenă",es:"Spaniolă",sv:"Suedeză"}}});