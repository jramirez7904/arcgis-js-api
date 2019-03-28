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

define({documentTypes:{data:{caption:"INSPIRE (Дані)",description:""},service:{caption:"INSPIRE (Сервіс)",description:""}},dataThemeKeywords:{caption:"Тема даних Inspire"},inspireServiceType:{discovery:"Сервіс виявлення",view:"Сервіс перегляду",download:"Сервіс завантаження",transformation:"Сервіс перетворення",invoke:"Сервіс виклику",other:"Інший сервіс"},keywordSections:{dataTheme:"Тема даних Inspire",serviceCategory:"Категорія сервісів ISO 19119",gemetConcept:"Концепція GEMET",otherKeywords:"Інші ключові слова"},LanguageCode:{bul:"Болгарська",cze:"Чеська",dan:"Данська",dut:"Голландська",eng:"Англійська",est:"Естонська",fin:"Фінська",fre:"Французька",ger:"Німецька",gre:"Грецька",hun:"Угорська",gle:"Ґельська (ірландська)",ita:"Італійська",lav:"Латвійська",lit:"Литовська",mlt:"Мальтійська",pol:"Польська",por:"Португальська",rum:"Румунська",slo:"Словацька",slv:"Словенська",spa:"Іспанська",swe:"Шведська",chi:"Китайська",kor:"Корейська",nor:"Норвезька",rus:"Російська",tur:"Турецька"},otherConstraints:{noLimitations:"Немає обмежень",confidentialityOfProceedings:"Конфіденційність дій органів державної влади...",internationalRelations:"Міжнародні відносини, безпека суспільства або національна оборона",courseOfJustice:"Відправлення правосуддя, можливість будь-якої особи отримувати справедливий суд...",confidentialityOfCommercial:"Конфіденційність комерційної або промислової інформації...",intellectualProperty:"Права інтелектуальної власності",confidentialityOfPersonalData:"Конфіденційність особистих даних та/або файлів...",interestsOrProtection:"Інтереси або захист будь-якої особи, що надала інформацію...",protectionOfEnvironment:"Захист навколишнього середовища, до якого відноситься така інформація...",freeText:"Довільний текст"},serviceType:{humanInteractionService:"100 Географічні сервіси взаємодій людей",humanCatalogueViewer:"101 Вьюер каталогу",humanGeographicViewer:"102 Географічний вьюер",humanGeographicSpreadsheetViewer:"103 Географічний вьюер електронних таблиць",humanServiceEditor:"104 Редактор сервісів",humanChainDefinitionEditor:"105 Редактор ланцюгових визначень",humanWorkflowEnactmentManager:"106 Диспетчер реалізації робочих процесів",humanGeographicFeatureEditor:"107 Редактор географічних об'єктів",humanGeographicSymbolEditor:"108 Редактор географічних символів ",humanFeatureGeneralizationEditor:"109 Редактор генералізації об'єктів",humanGeographicDataStructureViewer:"110 Вьюер структур географічних даних",infoManagementService:"200 Сервіс керування географічною моделлю/інформацією",infoFeatureAccessService:"201 Сервіс доступу до об'єктів",infoMapAccessService:"202 Сервіс доступу до карт",infoCoverageAccessService:"203 Сервіс доступу до покриття",infoSensorDescriptionService:"204 Сервіс опису датчиків",infoProductAccessService:"205 Сервіс доступу до продуктів",infoFeatureTypeService:"206 Сервіс типу об'єктів",infoCatalogueService:"207 Сервіс каталогу",infoRegistryService:"208 Сервіс реєстру",infoGazetteerService:"209 Сервіс газетіру",infoOrderHandlingService:"210 Сервіс обробки замовлень",infoStandingOrderService:"211 Сервіс постійних замовлень",taskManagementService:"300 Географічні сервіси керування робочими процесами/задачами",chainDefinitionService:"301 Сервіс ланцюгових визначень",workflowEnactmentService:"302 Сервіс реалізації робочих процесів",subscriptionService:"303 Сервіс підписок",spatialProcessingService:"400 Сервіси географічної обробки - просторові",spatialCoordinateConversionService:"401 Сервіс конвертації координат",spatialCoordinateTransformationService:"402 Сервіс перетворення координат",spatialCoverageVectorConversionService:"403 Сервіс конвертації покриття/векторів",spatialImageCoordinateConversionService:"404 Сервіс конвертації координат зображень",spatialRectificationService:"405 Сервіс корекції",spatialOrthorectificationService:"406 Сервіс ортотрансформування",spatialSensorGeometryModelAdjustmentService:"407 Сервіс регулювання моделі геометрії датчиків",spatialImageGeometryModelConversionService:"408 Сервіс конвертації моделі геометрії зображень",spatialSubsettingService:"409 Сервіс піднастройок",spatialSamplingService:"410 Сервіс відбіру зразків",spatialTilingChangeService:"411 Сервіс зміни тайлів",spatialDimensionMeasurementService:"412 Сервіс вимірювання розмірів",spatialFeatureManipulationService:"413 Сервіс маніпулювання об'єктами",spatialFeatureMatchingService:"414 Сервіс зіставлення об'єктів",spatialFeatureGeneralizationService:"415 Сервіс генералізації об'єктів",spatialRouteDeterminationService:"416 Сервіс визначення маршрутів",spatialPositioningService:"417 Сервіс позиціонування",spatialProximityAnalysisService:"418 Сервіс аналізу близькості",thematicProcessingService:"500 Сервіси географічної обробки - тематичні",thematicGoparameterCalculationService:"501 Сервіс обчислення геопараметрів",thematicClassificationService:"502 Сервіс тематичної класифікації",thematicFeatureGeneralizationService:"503 Сервіс генералізації об'єктів",thematicSubsettingService:"504 Сервіс підналаштувань",thematicSpatialCountingService:"505 Сервіс просторових розрахунків",thematicChangeDetectionService:"506 Сервіс виявлення змін",thematicGeographicInformationExtractionService:"507 Сервіси отримання географічної інформації",thematicImageProcessingService:"508 Сервіс обробки зображень",thematicReducedResolutionGenerationService:"509 Сервіс генерування зменшеної роздільної здатності",thematicImageManipulationService:"510 Сервіси маніпулювання зображеннями",thematicImageUnderstandingService:"511 Сервіси розуміння зображень",thematicImageSynthesisService:"512 Сервіси синтезу зображень",thematicMultibandImageManipulationService:"513 Маніпулювання багатоканальними зображеннями",thematicObjectDetectionService:"514 Сервіс виявлення об'єктів",thematicGeoparsingService:"515 Сервіс геоаналізу",thematicGeocodingService:"516 Сервіс геокодування",temporalProcessingService:"600 Сервіси географічної обробки - часові",temporalReferenceSystemTransformationService:"601 Сервіс перетворення системи часової прив'язки",temporalSubsettingService:"602 Сервіс підналаштувань",temporalSamplingService:"603 Сервіс відбіру зразків",temporalProximityAnalysisService:"604 Сервіс аналізу часової близькості",metadataProcessingService:"700 Сервіси географічної обробки - метадані",metadataStatisticalCalculationService:"701 Сервіс статистичного обчислення",metadataGeographicAnnotationService:"702 Сервіси географічних анотацій",comService:"800 Сервіси передачі географічних даних",comEncodingService:"801 Сервіс кодування",comTransferService:"802 Сервіс передачі",comGeographicCompressionService:"803 Сервіс стиснення географічних даних",comGeographicFormatConversionService:"804 Сервіс конвертації формату географічних даних",comMessagingService:"805 Сервіс повідомлень",comRemoteFileAndExecutableManagement:"806 Керування віддаленими та виконуваними файлами"},useLimitation:{noCondition:"Жодні умови не застосовуються",unknownCondition:"Умови невідомі",freeText:"Довільний текст"}});