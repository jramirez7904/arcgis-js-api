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

define({documentTypes:{data:{caption:"INSPIRE (数据)",description:""},service:{caption:"INSPIRE (服务)",description:""}},dataThemeKeywords:{caption:"Inspire 数据主题"},inspireServiceType:{discovery:"发现服务",view:"查看服务",download:"下载服务",transformation:"转换服务",invoke:"调用服务",other:"其他服务"},keywordSections:{dataTheme:"Inspire 数据主题",serviceCategory:"ISO 19119 服务类别",gemetConcept:"GEMET 概念",otherKeywords:"其他关键字"},LanguageCode:{bul:"保加利亚语",cze:"捷克语",dan:"丹麦语",dut:"荷兰语",eng:"英语",est:"爱沙尼亚语",fin:"芬兰语",fre:"法语",ger:"德语",gre:"希腊语",hun:"匈牙利语",gle:"盖尔语(爱尔兰语)",ita:"意大利语",lav:"拉脱维亚语",lit:"立陶宛语",mlt:"马耳他语",pol:"波兰语",por:"葡萄牙语",rum:"罗马尼亚语",slo:"斯洛伐克语",slv:"斯洛文尼亚语",spa:"西班牙语",swe:"瑞典语",chi:"中文",kor:"韩语",nor:"挪威语",rus:"俄语",tur:"土耳其语"},otherConstraints:{noLimitations:"无限制",confidentialityOfProceedings:"公共机构行动的机密性",internationalRelations:"国际关系、公共安全或国防",courseOfJustice:"司法公正，任何人接受公平审判的权利...",confidentialityOfCommercial:"商业或行业信息的机密性...",intellectualProperty:"知识产权",confidentialityOfPersonalData:"个人数据和/或文件的机密性...",interestsOrProtection:"信息提供者的权益或保护...",protectionOfEnvironment:"与此类信息相关的环境的保护...",freeText:"自由文本"},serviceType:{humanInteractionService:"100 地理人类交互服务",humanCatalogueViewer:"101 目录查看器",humanGeographicViewer:"102 地理查看器",humanGeographicSpreadsheetViewer:"103 地理电子表格查看器",humanServiceEditor:"104 服务编辑器",humanChainDefinitionEditor:"105 链定义编辑器",humanWorkflowEnactmentManager:"106 工作流实施管理器",humanGeographicFeatureEditor:"107 地理要素编辑器",humanGeographicSymbolEditor:"108 地理符号编辑器 ",humanFeatureGeneralizationEditor:"109 要素综合编辑器",humanGeographicDataStructureViewer:"110 地理数据结构查看器",infoManagementService:"200 地理模型/信息管理服务",infoFeatureAccessService:"201 要素访问服务",infoMapAccessService:"202 地图访问服务",infoCoverageAccessService:"203 覆盖访问服务",infoSensorDescriptionService:"204 传感器描述服务",infoProductAccessService:"205 产品访问服务",infoFeatureTypeService:"206 要素类型服务",infoCatalogueService:"207 目录服务",infoRegistryService:"208 注册服务",infoGazetteerService:"209 地名词典服务",infoOrderHandlingService:"210 订单处理服务",infoStandingOrderService:"211 长期订单服务",taskManagementService:"300 地理工作流/任务管理服务",chainDefinitionService:"301 链定义服务",workflowEnactmentService:"302 工作流实施服务",subscriptionService:"303 订阅服务",spatialProcessingService:"400 地理处理服务 - 空间",spatialCoordinateConversionService:"401 坐标转换服务",spatialCoordinateTransformationService:"402 坐标变换服务",spatialCoverageVectorConversionService:"403 覆盖/矢量转换服务",spatialImageCoordinateConversionService:"404 影像坐标转换服务",spatialRectificationService:"405 校正服务",spatialOrthorectificationService:"406 正射校正服务",spatialSensorGeometryModelAdjustmentService:"407 传感器几何模型校正服务",spatialImageGeometryModelConversionService:"408 影像几何模型转换服务",spatialSubsettingService:"409 子集服务",spatialSamplingService:"410 采样服务",spatialTilingChangeService:"411 切片更改服务",spatialDimensionMeasurementService:"412 尺寸测量服务",spatialFeatureManipulationService:"413 要素处理服务",spatialFeatureMatchingService:"414 要素匹配服务",spatialFeatureGeneralizationService:"415 要素综合服务",spatialRouteDeterminationService:"416 路径确定服务",spatialPositioningService:"417 定位服务",spatialProximityAnalysisService:"418 邻域分析服务",thematicProcessingService:"500 地理处理服务 - 专题",thematicGoparameterCalculationService:"501 地理参数计算服务",thematicClassificationService:"502 专题分类服务",thematicFeatureGeneralizationService:"503 要素综合服务",thematicSubsettingService:"504 子集服务",thematicSpatialCountingService:"505 空间计算服务",thematicChangeDetectionService:"506 更改检测服务",thematicGeographicInformationExtractionService:"507 地理信息提取服务",thematicImageProcessingService:"508 影像处理服务",thematicReducedResolutionGenerationService:"509 分辨率降低生成服务",thematicImageManipulationService:"510 影像处理服务",thematicImageUnderstandingService:"511 影像理解服务",thematicImageSynthesisService:"512 影像合成服务",thematicMultibandImageManipulationService:"513 多波段影像处理",thematicObjectDetectionService:"514 对象检测服务",thematicGeoparsingService:"515 地理解析服务",thematicGeocodingService:"516 地理编码服务",temporalProcessingService:"600 地理处理服务 - 时间",temporalReferenceSystemTransformationService:"601 时间参考系统变换服务",temporalSubsettingService:"602 子集服务",temporalSamplingService:"603 采样服务",temporalProximityAnalysisService:"604 时间邻域分析服务",metadataProcessingService:"700 地理处理服务 - 元数据",metadataStatisticalCalculationService:"701 统计计算服务",metadataGeographicAnnotationService:"702 地理注记服务",comService:"800 地理通信服务",comEncodingService:"801 编码服务",comTransferService:"802 传输服务",comGeographicCompressionService:"803 地理压缩服务",comGeographicFormatConversionService:"804 地理格式转换服务",comMessagingService:"805 消息传递服务",comRemoteFileAndExecutableManagement:"806 远程文件和可执行文件管理"},useLimitation:{noCondition:"无适用条件",unknownCondition:"未知条件",freeText:"自由文本"}});