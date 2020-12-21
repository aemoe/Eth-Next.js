// SPDX-License-Identifier: MIT
pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";


/**
 *author wwy
 *title 证照目录管理
 */
contract LicenceCatalog {
    using SafeMath for uint256;
    
    //基础目录信息
    struct CatalogInfo {
        string catalogInfoId; //目录对应UUID(唯一标识)
        string catalogName; //目录名称
        string orgCode; // 组织机构
        string licenseType; // 证照类型
        string catalogType;// 目录类别
        string orgLevel;// 颁发机构级别
        string modeCode; // 管理方式
        string matterCode;// 关联事项代码
        string matterName;// 关联事项名称
        string catalogDescribe;// 目录摘要
        CustomCatalogInfo[] customCatalogInfos;  //证照属性目录项数组
    }
    
    //目录信息项
    struct CustomCatalogInfo {
        string CustomCatalogInfoID; //证照目录项ID(唯一标识)
        string name; //证照属性名称
        string isDictionaries; //是否字典项
        string isFace; //是否照面信息 
        string isRequire; //是否必填
        string sensitiveRule; //敏感规则
        string licAttrFormat;//证照属性格式
        string licAttrStyle; //证照属性样式
        string licAttrSource; //证照属性来源
        string licAttrDesc; //证照属性摘要
    }
    // 基础目录信息id
    string[] public catalogInfoUUIDArray;
    //目录映射
    mapping(string => CatalogInfo) catalogInfos;
    
    
    //事件
    event CatalogInfoEvent(CatalogInfo _catalogInfo);
    
    /**
      * title 保存或编辑基础目录信息
      * param 参数 
     */
    function insertCatalogInfo(CatalogInfo memory _catalogInfo) public  returns (CatalogInfo){
        
        catalogInfos[_catalogInfo.catalogInfoId].catalogInfoId = _catalogInfo.catalogInfoId;
        catalogInfos[_catalogInfo.catalogInfoId].catalogName = _catalogInfo.catalogName;
        catalogInfos[_catalogInfo.catalogInfoId].orgCode = _catalogInfo.orgCode;
        catalogInfos[_catalogInfo.catalogInfoId].licenseType = _catalogInfo.licenseType;
        catalogInfos[_catalogInfo.catalogInfoId].catalogType = _catalogInfo.catalogType;
        catalogInfos[_catalogInfo.catalogInfoId].orgLevel = _catalogInfo.orgLevel;
        catalogInfos[_catalogInfo.catalogInfoId].modeCode = _catalogInfo.modeCode;
        catalogInfos[_catalogInfo.catalogInfoId].matterCode = _catalogInfo.matterCode;
        catalogInfos[_catalogInfo.catalogInfoId].matterName = _catalogInfo.matterName;
        catalogInfos[_catalogInfo.catalogInfoId].catalogDescribe = _catalogInfo.catalogDescribe;
        catalogInfoUUIDArray.push(_catalogInfo.catalogInfoId);
        uint256 length = _catalogInfo.customCatalogInfos.length;
        catalogInfos[_catalogInfo.catalogInfoId].customCatalogInfos.length = 0;
        for (uint256 i = 0; i < length; i++) {
            catalogInfos[_catalogInfo.catalogInfoId].customCatalogInfos.push(_catalogInfo.customCatalogInfos[i]);
        }
        emit CatalogInfoEvent(_catalogInfo);
        return _catalogInfo;
    }
    
    function getCatalogInfoByUUID(string uuid) public view returns (CatalogInfo){
        return catalogInfos[uuid];
    }
    
    /**
      * title 查询目录列表(可分页、可排序)
      * param 参数为页号pageNo、每页展示条数pageSize、排序sort、审核状态state
      * return 返回数组 CatalogInfo[]
     */
    // function getCatalogInfoList(uint256 _pageNo, uint256 _pageSize, bool _sort) public view returns(uint256 count , CatalogInfo[] memory){
    //     uint256 len = catalogInfoUUIDArray.length;
    //     require(len > 0,"catalogInfoArr.length is 0.");
        
    //     uint256 length = _pageSize;
    //     if(_pageSize > len){
    //         length = len;
    //     }
        
    //     CatalogInfo[] memory catalogInfoArr = new CatalogInfo[](length);
    //     uint256 index = 0;
    //     uint256 newIdx = 0;
        
    //     if(!_sort) {
    //         index = len.sub(1);
    //     }
        
    //     if(_pageNo >= 1 && _pageSize >= 10) {
    //         index = (_pageNo - 1).mul(_pageSize);
    //         if(len > _pageSize) {
    //             len = _pageSize;
    //         }
    //     }
        
    //     while(catalogInfoUUIDArray.length < len) {
    //         string uuid = catalogInfoUUIDArray[index];
    //         catalogInfoArr[newIdx] = catalogInfos[uuid];
    //         newIdx = newIdx.add(1);
            
    //         if(_sort) {
    //             index = index.add(1);
    //         }else {
    //             index = index.sub(1);
    //         }
    //     }

    //     return (catalogInfoUUIDArray.length,catalogInfoArr);
    // }
}