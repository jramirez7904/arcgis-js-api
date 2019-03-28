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

define({documentTypes:{arcgis:{caption:"Siêu dữ liệu ArcGIS",editorCaption:"Siêu dữ liệu",description:""}},emptyOption:"Trống",conditionals:{ISO19139A1_ROW4:"Nếu Mức Phân cấp Siêu dữ liệu là Tập dữ liệu, yêu cầu có thông tin Vùng Bao Địa lý hoặc Mô tả Địa lý.",ISO19139A1_ROW6:"Yêu cầu phải có Mã nhận dạng Tập dữ liệu hoặc Tên Tập dữ liệu.",ISO19139A1_ROW7:"Nếu Hạn chế khác được chọn, yêu cầu phải có Ràng buộc khác.",ISO19139A1_ROW9:"Nếu Phạm vi không phải là Tập dữ liệu hoặc Chuỗi, yêu cầu phải có Mô tả về Mức độ.",ISO19139A1_ROW10_11_12:"Nếu Phạm vi là Tập dữ liệu hoặc Chuỗi; yêu cầu phải có một trong những thông tin về Trình bày, Bước Quy trình, hoặc Nguồn Dữ liệu.",ISO19139A1_ROW15:"Nếu Mức độ sẵn sàng của Điểm Kiểm tra được lựa chọn, yêu cầu phải có Mô tả Điểm Kiểm tra.",ISO19139A1_ROW18:"Nếu Sự Phân phối được ghi chép lại, yêu cầu phải có thông tin Định dạng hoặc Nhà cung cấp/Định dạng.",INSPIRE_AccessLimitation:" Yêu cầu phải có ít nhất một mã ràng buộc truy cập hợp pháp hoặc mã phân loại bảo mật. (INSPIRE)",INSPIRE_UseLimitation:" Yêu cầu phải có ít nhất một giới hạn sử dụng. (INSPIRE)",INSPIRE_ConformanceResult:"Báo cáo Thống nhất về Tên miền yêu cầu phải có Kết quả Phù hợp. (INSPIRE)",INSPIRE_DomainConsistency:"Yêu cầu phải có báo cáo Thống nhất về Tên miền. (INSPIRE)",INSPIRE_LineageStatement:"Nếu Phạm vi là Tập dữ liệu hoặc Chuỗi, yêu cầu phải có Trình bày Dòng. (INSPIRE).",FGDC_DescIfTemporal:"Yêu cầu phải có Mô tả cho Phạm vi theo Thời gian. (FGDC)",FGDC_Keywords:"Yêu cầu phải có Chủ đề, Thẻ hoặc Từ khóa theo Chủ đề. (FGDC)",FGDC_Reports:"Yêu cầu phải có báo cáo về Hoàn thiện Thiếu sót và Thống nhất Khái niệm. (FGDC)",FGDC_Temporal:"Yêu cầu phải có ít nhất một Phạm vi theo Thời gian. (FGDC)",NAP_Contact:"Yêu cầu phải có Địa chỉ/Điểm Giao hàng, số Điện thoại/Hòm thư thoại hoặc Tài nguyên Trực tuyến/URL. (NAP)",GEN_BoundingBox:"Yêu cầu có ít nhất một Vùng Bao Địa lý.",GEN_ReportResult:"Yêu cầu phải có một kết quả Định lượng hoặc Hợp chuẩn.",minLessThanMax:"Giá trị Tối thiểu phải nhỏ hơn Giá trị Tối đa."},hints:{integerGreaterThanZero:"(nhập số nguyên > 0)",integerGreaterThanOne:"(nhập số nguyên > 1)",integer0To100:"(nhập số nguyên 0..100)",maxScale:"(nhập số nguyên > 0, ví dụ 50000)",minScale:"(nhập số nguyên > 0, ví dụ 150000000)",number0To100:"(nhập số nguyên 0..100)",number0To360:"(nhập số 0..360)",number90To90:"(nhập số -90..90)",listOfDoubles:"(nhập danh sách số, dùng dấu cách để phân cách)"},htmlEditor:{button:"Chỉnh sửa..."},sections:{overview:"Tổng quan",esri:"Esri",resource:"Tài nguyên",reference:"Tham chiếu",content:"Nội dung",distribution:"Phân phối",quality:"Chất lượng",eainfo:"Trường",representation:"Biểu diễn",metadata:"Siêu dữ liệu"},metadataStyle:{caption:"Kiểu Siêu dữ liệu ArcGIS",changeButton:"Thay đổi...",dialogTitle:"Chọn Kiểu Siêu dữ liệu",updating:"Đang cập nhật tài liệu...","Item Description":"Mô tả Mục","FGDC CSDGM Metadata":"Siêu dữ liệu FGDC CSDGM","ISO 19139 Metadata Implementation Specification":"ISO 19139 Quy chuẩn kỹ thuật Triển khai Siêu dữ liệu","ISO 19139 Metadata Implementation Specification GML3.2":"ISO 19139 Quy chuẩn kỹ thuật Triển khai Siêu dữ liệu GML3.2","INSPIRE Metadata Directive":"Chỉ thị về Siêu dữ liệu INSPIRE","North American Profile of ISO19115 2003":"Hồ sơ ISO19115 2003 khu vực Bắc Mỹ"},aggrInfo:{caption:"Thông tin Tổng hợp",datasetHint:"Yêu cầu phải có thông tin Nhận dạng Tập dữ liệu hoặc Tên Tập dữ liệu.",aggrDSIdent:"Mã nhận dạng Tập dữ liệu",aggrDSName:"Tên Bộ dữ liệu"},appSchInfo:{caption:"Giản đồ Ứng dụng",asName:"Tên Giản đồ",asSchLang:"Ngôn ngữ Giản đồ",asCstLang:"Ngôn ngữ Ràng buộc",asAscii:"ASCII",asGraFile:"Tệp Đồ họa",asGraFile_src:"Nguồn Tệp Đồ họa",asSwDevFile:"Tệp Phát triển Phần mềm",asSwDevFile_src:"Nguồn Tệp Phát triển Phần mềm",asSwDevFiFt:"Định dạng Tệp Phát triển Phần mềm"},citation:{caption:"Trích dẫn",section:{titlesAndDates:"Tiêu đề & Ngày",links:"URL",identifiers:"Mã nhận dạng",presentation:"Biểu mẫu",other:"Khác",edition:"Ấn bản",series:"Chuỗi"},conditionalDate:{caption:"Ngày Trích dẫn",msg:"Yêu cầu có Ngày Tạo, Ngày Xuất bản hoặc Ngày Sửa.",msg_nap:"Yêu cầu có ngày trích dẫn."},resTitle:"Tiêu đề",resAltTitle:"Tiêu đề Thay thế",collTitle:"Tiêu đề Chung",date:{createDate:"Ngày tạo",pubDate:"Ngày Xuất bản",reviseDate:"Ngày Sửa",notavailDate:"Ngày Không sẵn sàng",inforceDate:"Ngày có Hiệu lực",adoptDate:"Ngày Chấp nhận",deprecDate:"Ngày Phản đối",supersDate:"Ngày Thay thế"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Mã nhận dạng",identCode:"Mã",identAuth:"Trích dẫn Quyền"},resEd:"Ấn bản",resEdDate:"Ngày Phát hành",datasetSeries:{seriesName:"Tên",issId:"Phát hành",artPage:"Trang"},otherCitDet:"Thông tin chi tiết Khác",contactCaption:"Liên hệ Trích dẫn"},cntAddress:{caption:"Địa chỉ",delPoint:"Điểm Giao hàng",city:"Thành phố",adminArea:"Khu vực Hành chính",postCode:"Mã Bưu điện",country:"Quốc gia",eMailAdd:"Email",addressType:{caption:"Loại địa chỉ",postal:"Bưu điện",physical:"Địa chỉ thực",both:"Cả hai"}},cntOnlineRes:{caption:"Tài nguyên Trực tuyến",linkage:"URL",protocol:"Giao thức",appProfile:"Thông tin Ứng dụng",orName:"Tên",orDesc:"Mô tả"},cntPhone:{caption:"Điện thoại",voiceNum:"Hòm thư thoại",faxNum:"Fax",tddtty:"TDD/TTY?"},codeRef:{caption:"Mã nhận dạng",identCode:"Mã",idCodeSpace:"Không gian Mã",idVersion:"Phiên bản",identAuth:"Trích dẫn Quyền"},constraints:{caption:"Ràng buộc",useLimit:"Giới hạn Sử dụng",general:{caption:"Tổng quan"},legal:{caption:"Pháp lý",accessConsts:"Ràng buộc Truy cập",useConsts:"Ràng buộc về sử dụng",othConsts:"Ràng buộc Khác"},security:{caption:"Bảo mật",classSys:"Hệ thống Phân loại",userNote:"Ghi chú Người dùng",handDesc:"Mô tả việc Xử lý"}},contInfo:{caption:"Thông tin Nội dung",section:{CovDesc:"Mô tả Phạm vi địa lý",ImgDesc:"Mô tả Hình ảnh",FetCatDesc:"Danh mục Đối tượng"},attDesc:"Mô tả Thuộc tính",covDim:{caption:"Phạm vi hoặc Dải sóng",seqID:"Mã nhận dạng Trình tự",seqIDType:"Loại Mã nhận dạng Trình tự",dimDescrp:"Người mô tả"},RangeDim:{caption:"Kích thước Phạm vi"},Band:{caption:"Dải sóng",minVal:"Giá trị Tối thiểu",maxVal:"Giá trị Tối đa",valUnit:"Các Đơn vị Giá trị",pkResp:"Độ nhạy Tối đa",bitsPerVal:"Số bit trên mỗi Giá trị",toneGrad:"Thay đổi Tông màu",sclFac:"Hệ số Tỷ lệ",offset:"Mầm cây"},CovDesc:{caption:"Mô tả Phạm vi địa lý",section:{description:"Mô tả",rangesAndBands:"Phạm vi và Dải sóng"}},ImgDesc:{caption:"Mô tả Hình ảnh",section:{description:"Mô tả",rangesAndBands:"Phạm vi và Dải sóng"},illElevAng:"Góc Thiên đỉnh",illAziAng:"Góc Phương vị",cloudCovPer:"Tỷ lệ  Mây Che phủ",cmpGenQuan:"Chất lượng Nén",trianInd:"Chỉ báo Phép đo tam giác?",radCalDatAv:"Mức độ khả dụng của Dữ liệu Hiệu Chuẩn Phóng xạ?",camCalInAv:"Mức độ khả dụng của Thông tin Hiệu chuẩn Máy ảnh?",filmDistInAv:"Mức độ khả dụng của Thông tin Độ Méo Phim?",lensDistInAv:"Mức độ khả dụng của Thông tin Độ Méo Ống kính?",imagQuCode:"Mã Chất lượng",prcTypCde:"Mã Mức Xử lý"},FetCatDesc:{caption:"Danh mục Đối tượng",section:{description:"Mô tả",featureTypes:"Loại Đối tượng",citation:"Trích dẫn"},compCode:"Tuân thủ ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Trích dẫn Danh mục Đối tượng",catFetTyps:{caption:"Loại Đối tượng",genericName:"Tên",codeSpace:"Mã Không gian"}}},contact:{caption:"Liên hệ",section:{name:"Tên Người liên hệ",info:"Thông tin Liên hệ",hoursAndInstructions:"Số giờ & Hướng dẫn"},conditionalName:{caption:"Tên Người liên hệ",msg:"Yêu cầu Tên Cá nhân, Tên Tổ chức hoặc Tên Vị trí.",msg_fgdc:"Yêu cầu Tên Cá nhân hoặc Tên Tổ chức."},rpIndName:"Tên Cá nhân",rpOrgName:"Tên Tổ chức",rpPosName:"Tên Vị trí",rpCntInfo:"Thông tin Liên hệ",cntHours:"Số giờ Dịch vụ",cntInstr:"Hướng dẫn Liên hệ"},distInfo:{caption:"Thông tin Phân phối",section:{format:"Định dạng",distributor:"Nhà phân phối",transfer:"Các Tùy chọn Chuyển"},distFormat:{caption:"Định dạng Phân phối",formatName:"Tên Định dạng",formatVer:"Phiên bản Định dạng",formatAmdNum:"Số Sửa đổi",formatSpec:"Quy chuẩn kỹ thuật",fileDecmTech:"Kỹ thuật Giải nén",formatInfo:"Nội dung Thông tin"},distributor:{caption:"Nhà phân phối"},distTranOps:{caption:"Các Tùy chọn Chuyển đổi Kỹ thuật số",section:{unitsAndSize:"Đơn vị"},unitsODist:"Các Đơn vị Phân phối",transSize:"Kích thước Chuyển đổi",offLineMed:{caption:"Phương tiện Ngoại tuyến",medDensity:"Mật độ",medDenUnits:"Các Đơn vị Mật độ",medVol:"Khối lượng",medNote:"Ghi chú Phương tiện"}},distorOrdPrc:{caption:"Quy trình Yêu cầu",resFees:"Lệ phí",planAvDtTm:"Ngày Khả dụng",planAvTmPd:{caption:"Khoảng Ngày Khả dụng",tmBegin:"Ngày/Giờ Bắt đầu",tmEnd:"Ngày/Giờ Kết thúc"},ordInstr:"Các Hướng dẫn Yêu cầu",ordTurn:"Xoay vòng"}},dqInfo:{caption:"Chất lượng Dữ liệu",section:{scope:"Phạm vi",report:"Báo cáo",lineage:"Dòng in"},dqScope:{section:{level:"Mức",extent:"Phạm vi"},scpLvl:"Mức Phạm vi",scpLvlDesc:"Mô tả Mức",scpExt:"Giới hạn Phạm vi"},report:{section:{measure:"Đo lường",evaluation:"Đánh giá",result:"Kết quả",conformance:"Tuân thủ"},measDesc:"Mô tả Phép đo",measName:"Tên Phép đo",measDateTm:"Ngày đo",measId:"Mã nhận dạng Phép đo",evalMethDesc:"Phương pháp Đánh giá",evalProc:"Trích dẫn Thủ tục",ConResult:{caption:"Kết quả Tuân thủ",conExpl:"Giải thích",conSpec:"Quy chuẩn kỹ thuật",conPass:{caption:"Độ",_1:"Tuân thủ",_0:"Không Tuân thủ"}},QuanResult:{caption:"Kết quả Định lượng",quanVal:"Giá trị",quanValType:"Loại Giá trị",quanValUnit:"Các Đơn vị Giá trị",errStat:"Thống kê Lỗi"}},dataLineage:{section:{statement:"Trình bày",dataSource:"Nguồn dữ liệu",prcStep:"Bước Quy trình"},statement:"Trình bày Dòng in",dataSource:{caption:"Nguồn dữ liệu",section:{description:"Mô tả",srcRefSys:"Hệ Tham chiếu",srcExt:"Phạm vi",srcCitatn:"Trích dẫn"},srcDesc:"Mô tả Nguồn",srcScale:{rfDenom:"Mẫu số Tỷ lệ"},srcRefSys:"Hệ Tham chiếu Nguồn",srcExt:"Giới hạn Nguồn",srcCitatn:"Trích dẫn Nguồn"},prcStep:{caption:"Bước Quy trình",section:{description:"Mô tả",stepProc:"Người xử lý",stepSrc:"Nguồn dữ liệu"},stepDesc:"Mô tả Quy trình",stepRat:"Phân tích nguồn gốc",stepDateTm:"Bước Quy trình theo Ngày",stepProc:"Người xử lý",stepSrc:"Nguồn dữ liệu"}}},eainfo:{caption:"Thông tin Thực thể và Thuộc tính",section:{detailed:"Chi tiết",overview:"Tổng quan"},detailed:{caption:"Thông tin chi tiết Thực thể và Thuộc tính",section:{enttyp:"Thực thể",attr:"Thuộc tính"},enttyp:{caption:"Loại Thực thể",enttypl:"Nhãn",enttypt:"Đối tượng",enttypc:"Số lượng",enttypd:"Định nghĩa",enttypds:"Nguồn Định nghĩa"},attr:{caption:"Thuộc tính",section:{description:"Mô tả",value:"Giá trị",domain:"Miền"},attrlabl:"Nhãn",attalias:"Bí danh",attrdef:"Định nghĩa",attrdefs:"Nguồn Định nghĩa",attrtype:"Loại",attwidth:"Chiều rộng",atprecis:"Độ chính xác",attscale:"Tỷ lệ",atindex:"Được lập chỉ mục",attrvai:{attrva:"Giải thích Giá trị",attrvae:"Độ chính xác của Giá trị"},attrmfrq:"Tần suất Đo Giá trị",begdatea:"Ngày Bắt đầu của Giá trị",enddatea:"Ngày Kết thúc của Giá trị",attrdomv:{caption:"Miền",edom:{caption:"Được liệt kê",edomv:"Giá trị",edomvd:"Định nghĩa",edomvds:"Nguồn Định nghĩa"},rdom:{caption:"Khoảng",rdommin:"Giá trị Tối thiểu",rdommax:"Giá trị Tối đa",rdommean:"Trung bình",rdomstdv:"Độ lệch chuẩn",attrunit:"Đơn vị",attrmres:"Giải pháp Đo lường"},codesetd:{caption:"Tập mã",codesetn:"Tên",codesets:"Nguồn"},udom:{caption:"Không thể thể hiện"}}}},overview:{caption:"Tổng quan",eaover:"Tóm tắt",eadetcit:"Trích dẫn"}},extent:{caption:"Phạm vi",section:{description:"Mô tả",geographic:"Địa lý",temporal:"Thời gian",vertical:"Dọc"},exDesc:"Mô tả Phạm vi",geoEle:{caption:"Phạm vi Địa lý",GeoBndBox:{caption:"Vùng Bao",esriExtentType:"Phạm vi tìm kiếm?",exTypeCode:"Phạm vi chứa tài nguyên?",westBL:"Kinh độ Bao phía Tây",eastBL:"Kinh độ Bao phía Đông",southBL:"Vĩ độ Bao phía Nam",northBL:"Vĩ độ Bao phía Bắc"},GeoDesc:{caption:"Mô tả Địa lý",exTypeCode:"Mô tả chứa tài nguyên?",identCode:"Mã"}},tempEle:{caption:"Phạm vi theo Thời gian",TM_Period:"Khoảng thời gian",TM_Instant:"Thời điểm",tmPosition:"Ngày",tmBegin:"Ngày Bắt đầu",tmEnd:"Ngày Kết thúc"},vertEle:{caption:"Phạm vi Dọc",vertMinVal:"Giá trị Tối thiểu",vertMaxVal:"Giá trị Tối đa"}},graphOver:{caption:"Duyệt tìm Đồ Họa",bgFileName:"Duyệt tìm URL Đồ họa",bgFileDesc:"Duyệt tìm Mô tả Đồ họa",bgFileType:"Duyệt tìm Loại Tệp Đồ họa"},keywords:{caption:"Từ khóa",section:{topicCategory:"Chủ đề",searchKeys:"Từ khóa",themeKeys:"Chủ đề",placeKeys:"Địa điểm",tempKeys:"Thời gian",discKeys:"Quy tắc",stratKeys:"Địa tầng",productKeys:"Sản phẩm",subTopicCatKeys:"Chủ đề con",otherKeys:"Khác"},delimited:"Từ khóa",searchKeys:"Từ khóa",themeKeys:"Từ khóa Chủ đề",placeKeys:"Từ khóa Địa điểm",tempKeys:"Từ khóa Thời gian",discKeys:"Từ khóa Quy tắc",stratKeys:"Từ khóa Địa tầng",productKeys:"Từ khóa Sản phẩm",subTopicCatKeys:"Từ khóa Chủ đề con",otherKeys:"Từ khóa Khác",thesaName:"Trích dẫn Từ điển chuyên đề",thesaLang:"Ngôn ngữ Từ điển chuyên đề"},locales:{caption:"Bản địa",locale:"Bản địa",resTitle:"Tiêu đề",idAbs:"Tóm tắt"},maintenance:{caption:"Bảo trì",section:{frequency:"Tần suất",scope:"Phạm vi",note:"Lưu ý"},usrDefFreq:"Tần suất Tùy chỉnh",dateNext:"Cập nhật Tiếp theo",maintScp:"Phạm vi Cập nhật",upScpDesc:{caption:"Mô tả Phạm vi",attribSet:"Thuộc tính",attribIntSet:"Trường hợp Thuộc tính",featSet:"Tính năng",featIntSet:"Trường hợp Đối tượng",datasetSet:"Bộ dữ liệu",other:"Trường hợp Khác"},maintNote:"Ghi chú Bảo trì",maintCont:"Liên hệ Bảo trì"},metadata:{section:{profile:"Hồ sơ",details:"Phạm vi"},mdFileID:"Mã nhận dạng Tệp",mdParentID:"Mã nhận dạng Chính",datasetURI:"URI Tập dữ liệu",dataSetFn:"Chức năng Tập dữ liệu",mdDateSt:"Ngày Siêu dữ liệu",mdLang:"Ngôn ngữ Siêu dữ liệu",mdChar:"Tập Ký tự",mdHrLv:"Mức Phân cấp",mdHrLvName:"Tên Mức Phân cấp",mdContact:"Liên hệ Siêu dữ liệu",mdMaint:"Bảo trì Siêu dữ liệu",mdConst:"Ràng buộc Siêu dữ liệu"},porCatInfo:{caption:"Trích dẫn Miêu tả"},refSysInfo:{caption:"Tham chiếu Không gian"},resource:{section:{citation:"Trích dẫn",details:"Chi tiết",description:"Mô tả",keywords:"Từ khóa",status:"Trạng thái",resolution:"Giải pháp",representation:"Biểu diễn",browse:"Duyệt Đồ họa",format:"Định dạng",usage:"Sử dụng",aggregateInfo:"Tổng hợp",additional:"Bổ sung"},idAbs:"Mô tả (Tóm tắt)",idPurp:"Tổng kết (Mục đích)",suppInfo:"Thông tin Bổ sung",idCredit:"Service Credits",envirDesc:"Môi trường Xử lý",dataLang:"Ngôn ngữ Tài nguyên",dataExt:"Giới hạn Tài nguyên",idPoC:"Đầu mối Liên hệ",resMaint:"Bảo trì Tài nguyên",resConst:"Ràng buộc Tài nguyên",dsFormat:"Định dạng Tài nguyên",dataScale:{caption:"Tỷ lệ Dữ liệu",equScale:"Độ phân giải Tỷ lệ",scaleDist:"Độ phân giải Khoảng cách",scaleDist_value:"Khoảng cách"},idSpecUse:{caption:"Sử dụng Tài nguyên",specUsage:"Sử dụng Cụ thể",usageDate:"Ngày Sử dụng",usrDetLim:"Giới hạn",usrCntInfo:"Liên hệ Sử dụng"}},service:{caption:"Dịch vụ",svType:"Loại Dịch vụ",svType_Name:"Tên",svAccProps:"Thuộc tính Truy cập",svCouplRes:{caption:"Tài nguyên Ghép nối",svOpName:"Tên Vận hành",svResCitId:"Mã nhận dạng Tài nguyên"},svCoupleType:"Loại Ghép nối"},scaleRange:{caption:"Phạm vi Tỷ lệ",maxScale:"Tỷ lệ Tối đa",minScale:"Tỷ lệ Tối thiểu"},spatRepInfo:{caption:"Biểu diễn Không gian",section:{dimension:"Kích thước",parameters:"Tham số"},numDims:"Số Kích thước",tranParaAv:"Mức độ khả dụng của Tham số Chuyển đổi?",axisDimension:{caption:"Kích thước",dimSize:"Kích cỡ",dimResol:{caption:"Giải pháp",_value:"Giá trị Độ phân giải",uom:"Đơn vị Độ phân giải"}},VectSpatRep:{caption:"Véc tơ",geometObjs:"Đối tượng Hình học",geoObjCnt:"Số Đối tượng"},GridSpatRep:{caption:"Lưới"},Georect:{caption:"Đã nắn chỉnh địa lý",section:{centerPoint:"Tâm Điểm",cornerPts:"Điểm Góc"},chkPtAv:"Mức độ khả dụng của Điểm Kiểm tra?",chkPtDesc:"Mô tả Điểm Kiểm tra",ptInPixel:"Điểm Ảnh",transDimDesc:"Mô tả Kích thước Chuyển đổi",transDimMap:"Lập bản đồ Kích thước Chuyển đổi",cornerPts:{caption:"Điểm Góc",pos:"Vị trí",gmlDesc:"Mô tả",gmlDescRef:"Tham chiếu",gmlIdent:"Mã nhận dạng",codeSpace:"Không gian mã của Mã nhận dạng"}},Georef:{caption:"Có thể tham chiếu địa lý",ctrlPtAv:"Mức độ khả dụng của Điểm Kiểm soát?",orieParaAv:"Mức độ khả dụng của Tham số Hướng?",orieParaDs:"Mô tả Tham số Hướng",georefPars:"Tham số đã Tham chiếu địa lý",paraCit:"Trích dẫn Tham số"},Indref:{caption:"Gián tiếp"}},booleanOptions:{_false:"Không",_true:"Có"},codelist:{CountryCode:"Quốc gia",LanguageCode:"Ngôn ngữ",MonetaryUnits:"Đơn vị Tiền tệ",MonetaryUnits_empty:"Không có tiền tệ chung",PresentationForm:"Biểu mẫu Trình bày Dữ liệu Không gian địa lý FGDC",CI_PresentationFormCode:"Biểu mẫu Trình bày",CI_RoleCode:"Vai trò",CI_OnLineFunctionCode:"Chức năng",IMS_ContentType:"Loại Nội dung",DQ_ElementDimension:"Kích thước",DQ_ElementType:"Loại Báo cáo",DQ_EvaluationMethodTypeCode:"Loại Đánh giá",DS_AssociationTypeCode:"Loại Kết hợp",DS_InitiativeTypeCode:"Loại Sáng kiến",LI_SourceType:"Loại Nguồn",MD_CellGeometryCode:"Hình học Tế bào",MD_CharacterSetCode:"Tập Ký tự",MD_ClassificationCode:"Phân loại",MD_CoverageContentTypeCode:"Loại Nội dung",MD_DimensionNameTypeCode:"Loại Kích thước",MD_GeometricObjectTypeCode:"Loại Đối tượng Hình học",MD_ImagingConditionCode:"Điều kiện Chụp ảnh",MD_MaintenanceFrequenceCode:"Tần suất Cập nhật",MD_MediumFormatCode:"Mã Định dạng",MD_MediumNameCode:"Tên Phương tiện",MD_PixelOrientationCode:"Hướng Điểm ảnh",MD_ProgressCode:"Trạng thái",MD_RestrictionCode:"Mã Hạn chế",MD_ScopeCode:"Phạm vi",MD_SpatialRepresentationTypeCode:"Loại Biểu diễn Không gian",MD_TopicCategoryCode:"Danh mục Chủ đề",MD_TopologyLevelCode:"Mức Topology",RS_Dimension:"Kích thước",SV_CouplingType:"Loại Ghép nối",UCUM:"Đơn vị",UCUM_Length:"Đơn vị Khoảng cách"}});