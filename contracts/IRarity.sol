// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;


interface IRarity  {
    
    enum RarityType
    {
        LAND_GOLD,
        LAND_SILVER,
        LAND_BRONZE
    }  

    //is it a gold/silver/bronze
    function getRarityType(uint256 _tokenID) external view  returns (RarityType);

}
