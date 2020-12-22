pragma solidity >=0.4.24;

import "hardhat/console.sol";

contract Hello{
    uint256 M = 1;
    constructor() public{
    }
    function get() public view returns(uint256){
        console.log("get",M);
        return M;
    }
    function set(uint256 _m) public returns(uint256){
        console.log("set",_m);
        M = _m;
        console.log("set",M,_m);
        return M;
    }
}
