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

define({documentTypes:{data:{caption:"ISO 19115 (Данные)",description:""},service:{caption:"ISO 19119 (Сервис)",description:""},gmi:{caption:"ISO 19115-2 (Изображения и сетки)",description:""}},general:{reference:"Литература"},sections:{metadata:"Метаданные",identification:"Идентификация",distribution:"Распространение",quality:"Качество",acquisition:"Приобретение"},metadataSection:{identifier:"Идентификатор",contact:"Контакт",date:"Дата",standard:"Стандартные",reference:"Литература"},identificationSection:{citation:"Ссылка",description:"Описание",contact:"Контакт",thumbnail:"Образец",keywords:"Ключевые слова",constraints:"Ограничения",resource:"Источник",resourceTab:{representation:"Представление",language:"Язык",classification:"Классификация",extent:"Экстент"},serviceResourceTab:{serviceType:"Тип сервиса",extent:"Экстент",couplingType:"Тип сдваивания",operation:"Операция",operatesOn:"Работает над"}},distributionSection:{},qualitySection:{scope:"Область",conformance:"Соответствие",lineage:"Происхождение"},acquisitionSection:{requirement:"Требование",objective:"Объект",instrument:"Инструмент",plan:"План",operation:"Операция",platform:"Платформа",environment:"Среда"},AbstractMD_Identification:{sAbstract:"Краткое описание",purpose:"Цель",credit:"Сведения об авторах",pointOfContact:"Точка контакта",resourceMaintenance:"Обслуживание",graphicOverview:"Обзор графики",descriptiveKeywords:"Набор ключевых слов",resourceConstraints:"Ограничения"},CI_Address:{deliveryPoint:"Точка доставки",city:"Город",administrativeArea:"Административная единица",postalCode:"Почтовый индекс",country:"Страна",electronicMailAddress:"Адрес email"},CI_Citation:{title:"Название",alternateTitle:"Дополнительный заголовок",identifier:"Уникальный идентификатор ресурса",resource:{title:"Имя ресурса",date:"Дата ресурса"},specification:{title:"Имя спецификации",date:"Дата спецификации"}},CI_Contact:{phone:"Телефон",address:"Адрес",onlineResource:"Онлайн ресурс",hoursOfService:"Часы сервиса",contactInstructions:"Инструкции по контактам"},CI_Date:{date:"Дата",dateType:"Тип даты"},CI_DateTypeCode:{caption:"Тип даты",creation:"Дата создания",publication:"Дата публикации",revision:"Дата ревизии"},CI_OnLineFunctionCode:{caption:"Функция",download:"Скачать",information:"Информация",offlineAccess:"Оффлайн-доступ",order:"Порядок",search:"Поиск"},CI_OnlineResource:{caption:"Онлайн ресурс",linkage:"URL-адрес",protocol:"Протокол",applicationProfile:"Профиль приложения",name:"Имя",description:"Описание",sFunction:"Функция"},CI_ResponsibleParty:{caption:"Точка контакта",individualName:"Ответственное лицо",organisationName:"Название организации",positionName:"Название должности",contactInfo:"Контактная информация",role:"Роль"},CI_RoleCode:{caption:"Роль",resourceProvider:"Поставщик ресурсов",custodian:"Хранитель",owner:"Владелец",user:"Пользователь",distributor:"Дистрибьютор",originator:"Автор",pointOfContact:"Точка контакта",principalInvestigator:"Ответственный исполнитель",processor:"Обработчик",publisher:"Издатель",author:"Автор"},CI_Telephone:{voice:"Голос",facsimile:"Факс"},DCPList:{caption:"DCP",XML:"xml",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"WebServices"},DQ_ConformanceResult:{caption:"Отчет о согласовании",explanation:"Описание",degree:{caption:"Степень",validationPerformed:"Проверка выполнена",conformant:"Совместимость",nonConformant:"Несовместимость"}},DQ_DataQuality:{report:"Отчет"},DQ_Scope:{level:"Объем (информации о качестве, примененной к)",levelDescription:"Описание уровня"},EX_Extent:{caption:"Экстент",description:"Описание",geographicElement:"Пространственный экстент",temporalElement:"Временной экстент",verticalElement:"Вертикальный экстент"},EX_GeographicBoundingBox:{westBoundLongitude:"Долгота западной границы",eastBoundLongitude:"Долгота восточной границы",southBoundLatitude:"Широта южной границы",northBoundLatitude:"Широта северной границы"},EX_GeographicDescription:{caption:"Географическое описание"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Дата начала",endPosition:"Дата окончания"}},EX_VerticalExtent:{minimumValue:"Минимальное значение",maximumValue:"Максимальное значение",verticalCRS:"Вертикальная CRS"},Length:{caption:"Длина",uom:"Единицы измерения",km:"Километры",m:"Метры",mi:"Мили",ft:"Футы"},LI_Lineage:{statement:"Статус происхождения"},MD_BrowseGraphic:{fileName:"URL-адрес обзора графики",fileDescription:"Заголовок обзора графики",fileType:"Обзор типа графики"},MD_ClassificationCode:{unclassified:"Неклассифицированный",restricted:"Ограничено",confidential:"Конфиденциально",secret:"Секретно",topSecret:"Совершенно секретно"},MD_Constraints:{caption:"Ограничения на использование",useLimitation:"Ограничение использования"},MD_DataIdentification:{spatialRepresentationType:"Тип пространственного представления",spatialResolution:"Пространственное разрешение",language:"Язык ресурса",supplementalInformation:"Дополнительный"},MD_DigitalTransferOptions:{onLine:"Онлайн"},MD_Distribution:{distributionFormat:"Формат распространения",transferOptions:"Опции переноса"},MD_Format:{name:"Название формата",version:"Версия формата"},MD_Identifier:{caption:"URI",identifierCaption:"Идентификатор",code:"Код"},MD_Keywords:{delimitedCaption:"Ключевые слова",thesaurusName:"Связанный тезаурус"},MD_KeywordTypeCode:{caption:"Тип ключевого слова",discipline:"Дисциплина",place:"Место",stratum:"Ступень",temporal:"Временной",theme:"Тема"},MD_LegalConstraints:{caption:"Допустимые ограничения",accessConstraints:"Ограничения доступа",useConstraints:"Ограничения на использование",otherConstraints:"Другие ограничения"},MD_MaintenanceFrequencyCode:{caption:"Частота",continual:"Непрерывно",daily:"Ежедневно",weekly:"Каждую неделю",fortnightly:"Раз в две недели",monthly:"Каждый месяц",quarterly:"Ежеквартально",biannually:"Дважды в год",annually:"Ежегодно",asNeeded:"По необходимости",irregular:"Нерегулярно",notPlanned:"Не планируется",unknown:"Нет данных"},MD_Metadata:{caption:"Метаданные",fileIdentifier:"Идентификатор файла",language:"Язык метаданных",hierarchyLevel:"Иерархический уровень",hierarchyLevelName:"Название иерархического уровня",contact:"Контакт метаданных",dateStamp:"Дата метаданных",metadataStandardName:"Имя стандарта метаданных",metadataStandardVersion:"Версия стандарта метаданных",referenceSystemInfo:"Система привязки",identificationInfo:"Идентификация",distributionInfo:"Распространение",dataQualityInfo:"Качество"},MD_ProgressCode:{caption:"Код выполнения",completed:"Завершено",historicalArchive:"Исторический архив",obsolete:"Устаревший",onGoing:"В процессе",planned:"Планируется",required:"Необходимо",underDevelopment:"В разработке"},MD_RepresentativeFraction:{denominator:"Знаменатель"},MD_Resolution:{equivalentScale:"Эквивалентный масштаб",distance:"Расстояние"},MD_RestrictionCode:{copyright:"Авторское право",patent:"Патент",patentPending:"Патент заявлен",trademark:"Торговая марка",license:"Лицензия",intellectualPropertyRights:"Права на интеллектуальную собственность",restricted:"Ограничено",otherRestrictions:"Другие ограничения"},MD_ScopeCode:{attribute:"Атрибут",attributeType:"Тип атрибута",collectionHardware:"Аппаратное обеспечение для сбора",collectionSession:"Сеанс сбора",dataset:"Набор данных",series:"Серии",nonGeographicDataset:"Не географический набор данных",dimensionGroup:"Группа измерений",feature:"Пространственный объект",featureType:"Тип пространственного объекта",propertyType:"Тип свойства",fieldSession:"Полевой сеанс",software:"Программное обеспечение",service:"Сервис",model:"Модель",tile:"Лист"},MD_ScopeDescription:{attributes:"Атрибуты",features:"Пространственные объекты",featureInstances:"Экземпляры объектов",attributeInstances:"Экземпляры атрибутов",dataset:"Набор данных",other:"Прочее"},MD_SecurityConstraints:{caption:"Ограничения безопасности",classification:"Классификация",userNote:"Пользовательская заметка",classificationSystem:"Система классификации",handlingDescription:"Описание обработки"},MD_SpatialRepresentationTypeCode:{caption:"Тип пространственного представления",vector:"Вектор",grid:"Сетка",textTable:"Текстовая таблица",tin:"TIN",stereoModel:"Стереомодель",video:"Видео"},MD_TopicCategoryCode:{caption:"Категория тем",boundaries:"Административные и государственные границы",farming:"Земледелие и сельское хозяйство",climatologyMeteorologyAtmosphere:"Атмосфера и климат",biota:"Биология и экология",economy:"Бизнес и экономика",planningCadastre:"Кадастровые данные",society:"Демография, культура, общество",elevation:"Высоты и производные продукты",environment:"Охрана окружающей среды",structure:"Здания и сооружения",geoscientificInformation:"Геология и геофизика",health:"Здравоохранение",imageryBaseMapsEarthCover:"Снимки и базовые карты",inlandWaters:"Ресурсы внутренних вод",location:"Места и геодезические сети",intelligenceMilitary:"Военный",oceans:"Океаны и эстуарии",transportation:"Транспортные сети",utilitiesCommunication:"Коммунальные службы и связь"},MI_ContextCode:{caption:"Контекст",acquisition:"Приобретение",pass:"Проход",wayPoint:"Промежуточная точка"},MI_EnvironmentalRecord:{caption:"Условия среды",averageAirTemperature:"Средняя температура воздуха",maxRelativeHumidity:"Максимальная относительная влажность",maxAltitude:"Макс.высота",meterologicalConditions:"Метеорологические условия"},MI_Event:{identifier:"Идентификатор события",time:"Время",expectedObjectiveReference:"Ожидаемая инструкция (Идентификатор инструкции)",relatedSensorReference:"Связанный сенсор (Идентификатор инструмента)",relatedPassReference:"Связанный проход (Идентификатор прохода платформы)"},MI_GeometryTypeCode:{point:"Точка",linear:"Линейный",areal:"Площадной",strip:"Полоса"},MI_Instrument:{citation:"Цитирование инструмента",identifier:"Идентификатор инструмента",sType:"Тип инструмента",description:"Описание инструмента",mountedOn:"Смонтировано на",mountedOnPlatformReference:"Смонтировано на (Идентификатор платформы)"},MI_Metadata:{acquisitionInformation:"Приобретение"},MI_Objective:{caption:"Объект",identifier:"Идентификатор инструкции",priority:"Приоритет цели",sFunction:"Функция инструкции",extent:"Экстент",pass:"Проход платформы",sensingInstrumentReference:"Сенсор (Идентификатор инструмента)",objectiveOccurrence:"События",sections:{identification:"Идентификация",extent:"Экстент",pass:"Проход",sensingInstrument:"Сенсор",objectiveOccurrence:"События"}},MI_ObjectiveTypeCode:{caption:"Тип (Техника сбора для инструкции)",instantaneousCollection:"Мгновенный сбор",persistentView:"Стабильный вид",survey:"Съемка"},MI_Operation:{caption:"Операция",description:"Описание операции",citation:"Цитирование операции",identifier:"Идентификатор операции",status:"Статус операции",objectiveReference:"Связанная инструкция (Идентификатор инструкции)",planReference:"Связанный план (Идентификатор плана)",significantEventReference:"Связанное событие (Идентификатор события)",platformReference:"Связанная платформа (Идентификатор платформы)",sections:{identification:"Идентификация",related:"Связанно"}},MI_OperationTypeCode:{caption:"Тип операции",real:"Реально",simulated:"Симуляция",synthesized:"Синтезировано"},MI_Plan:{sType:"Выборка геометрии для сбора данных",status:"Статус плана",citation:"Цитирование источника, запрашивающего сбор",satisfiedRequirementReference:"Удовлетворительное требование (Идентификатор требования)",operationReference:"Связанная операция (Идентификатор операции)"},MI_Platform:{citation:"Цитирование платформы",identifier:"Идентификатор платформы",description:"Описание платформы, поддерживающей инструмент",sponsor:"Спонсорская организация для платформы",instrument:"Инструменты смонтированы на платформе",instrumentReference:"Идентификатор инструмента",sections:{identification:"Идентификация",sponsor:"Спонсор",instruments:"Инструменты"}},MI_PlatformPass:{identifier:"Идентификатор прохода платформы",extent:"Экстент прохода платформы",relatedEventReference:"Связанное событие (Идентификатор события)"},MI_PriorityCode:{critical:"Критический",highImportance:"Высокая важность",mediumImportance:"Средняя важность",lowImportance:"Низкая важность"},MI_RequestedDate:{requestedDateOfCollection:"Запрашиваемая дата сбора",latestAcceptableDate:"Последняя приемлемая дата"},MI_Requirement:{caption:"Требование",citation:"Цитирование руководства по обеспечению требований",identifier:"Идентификатор требования",requestor:"Запросчик требования",recipient:"Получатель результатов требования",priority:"Приоритет требования",requestedDate:"Дата запроса",expiryDate:"Дата окончания",satisifiedPlanReference:"Удовлетворительный план (Идентификатор плана)",sections:{identification:"Идентификация",requestor:"Запросчик",recipient:"Получатель",priorityAndDates:"Приоритет и даты",satisifiedPlan:"Удовлетворительный план"}},MI_SequenceCode:{caption:"Последовательность",start:"Начать",end:"В конце",instantaneous:"Мгновенно"},MI_TriggerCode:{caption:"Триггер",automatic:"Автоматически",manual:"Вручную",preProgrammed:"Запрограммировано"},ObjectReference:{uuidref:"Справка UUID",xlinkref:"Справка URL"},RS_Identifier:{caption:"Код места и ID",code:"Код",codeSpace:"Код места"},SV_CouplingType:{loose:"Свободный",mixed:"Совмещенный",tight:"Сжатый"},SV_OperationMetadata:{operationName:"Название операции",DCP:"DCP",connectPoint:"Соединить точки"},SV_ServiceIdentification:{serviceType:"Тип сервиса",couplingType:"Тип сдваивания",containsOperations:"Операционные метаданные",operatesOn:"Работает над"},TM_Primitive:{indeterminatePosition:"Неопределенное положение",indeterminates:{before:"До",after:"После",now:"Сейчас",unknown:"Нет данных"}},gemet:{concept:{gemetConceptKeyword:"Ключевое слово GEMET",tool:"Поиск...",dialogTitle:"GEMET – Ключевое слово",searchLabel:"Поиск:",searchTip:"Поиск в GEMET"},theme:{tool:"Поиск...",dialogTitle:"GEMET – Тема данных Inspire"},ioerror:"Произошла ошибка при взаимодействии с сервисом GEMET: {url}",searching:"Поиск в GEMET...",noMatch:"Совпадающие результаты не найдены.",languages:{bg:"Болгарский",cs:"Чешский",da:"Датский",nl:"Нидерландский",en:"Английский",et:"Эстонский",fi:"Финский",fr:"Французский",de:"Немецкий",el:"Греческий",hu:"Венгерский",ga:"Гэльский (Ирландский)",it:"Итальянский",lv:"Латышский",lt:"Литовский",mt:"Мальтийский",pl:"Польский",pt:"Португальский",ro:"Румынский",sk:"Словацкий",sl:"Словенский",es:"Испанский",sv:"Шведский"}}});