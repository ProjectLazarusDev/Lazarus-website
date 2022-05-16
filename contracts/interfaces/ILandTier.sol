// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface ILandTier  {
    
    enum LandTierType
    {
        TIER_GOLD,
        TIER_SILVER,
        TIER_BRONZE
    }  
    
    function getLandTierType(uint256 _tokenID) external view  returns (LandTierType);
    function setLandTierType(uint256 _tokenID, LandTierType _landTier) external;
}


