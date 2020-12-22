pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

import "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import "./LicenceCatalog.sol";
import "hardhat/console.sol";


contract Licence is LicenceCatalog{
    using SafeMath for uint256;
    
    //证件内容项值结构体
    struct CatalogItem {
        string catalogItemId;
        string name;
        string formata;
        string value;
    }
    
    //证件结构体
    struct License {
        string licenseId;
        string catalogInfoId;
        CatalogInfo catalogInfo;
        CatalogItem[] catalogItems;
    }
    
    //ID映射证件结构体
    mapping(string => License) licenses;
    string[] public licenseUUIDArray;
    
    //初始化方法赋值目录地址
    constructor(){
    }
    
    event CreateLicese(License);
    
    //添加证件
    function insertLicese(License memory _license) public  returns(License){
        licenses[_license.licenseId].licenseId = _license.licenseId;
        licenses[_license.licenseId].catalogInfoId = _license.catalogInfoId;
        uint256 length = _license.catalogItems.length;
        licenses[_license.licenseId].catalogItems.length = 0;
        for (uint256 i = 0; i < length; i++) {
            licenses[_license.licenseId].catalogItems.push(_license.catalogItems[i]);
        }
        licenseUUIDArray.push(_license.licenseId);
        console.log(_license.licenseId,"证件UUID");
        emit CreateLicese(_license);
        return _license;
    }
    
    //获取证件
    function getLicenseByUUID(string _licenseId) public view returns (License memory) {
        License _license = licenses[_licenseId];
        _license.catalogInfo = catalogInfos[licenses[_licenseId].catalogInfoId];
        return _license;
    }
    
    // function getLicenseList(uint256 _pageNo, uint256 _pageSize, bool _sort) public view returns(uint256 count , License[] memory){
    //     uint256 len = licenseUUIDArray.length;
    //     require(len > 0,"catalogInfoArr.length is 0.");
        
    //     uint256 length = _pageSize;
    //     if(_pageSize > len){
    //         length = len;
    //     }
        
    //     License[] memory licenseArr = new License[](length);
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
        
    //     while(licenseUUIDArray.length < len) {
    //         string uuid = licenseUUIDArray[index];
    //         licenseArr[newIdx] = licenses[uuid];
    //         newIdx = newIdx.add(1);
            
    //         if(_sort) {
    //             index = index.add(1);
    //         }else {
    //             index = index.sub(1);
    //         }
    //     }

    //     return (licenseUUIDArray.length,licenseArr);
    // }
}