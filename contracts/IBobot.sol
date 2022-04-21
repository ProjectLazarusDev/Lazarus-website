pragma solidity ^0.8.13;


interface IBobot  {
    
    enum BobotType
    {
        BOBOT_GEN,
        BOBOT_NANO,
        BOBOT_MEGA
    }  

    //is it a nano/gen/mega bot
    function getBobotType(uint256 _tokenID) external view  returns (BobotType);

}
