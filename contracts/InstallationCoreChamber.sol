// SPDX-License-Identifier: MIT

//,,,,,,,,,,,,,,,,,,,***************************************,*,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,**,,,,***********************,*,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,****,,,*,,,**,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,((*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*%%#(*/&%( #( %#.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*###(*....         #(,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,(###(,,...          .,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,(#%%(*,,,...         ,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/#%%%#**,,,,,... ,,   ,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/###((/**,,,,*,,,,,*.  ,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,(##((#%%%%%##//##((/( ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*((/*........      .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,,,(%&&&&&&&&&&&&&%%%%%%%%%#/,,,,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,,,,,,,,,,********,,,....                ,,,,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,#(/,,,,,,*@%(#%%%%%&&&&&&&&%%%%%%%(((//,..  /,,,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,##(/,,&&&&&&&&&&&&&&&&&&&&&%%%%%%%%%%%%%%%%%/*,,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,##,.,*/((##(((//****,,,....                  .,,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,,((* .(####(***,,,,,#%%%%%%%%%%%%%#####%%%%%%((/,,,,,,,,,,,,,,,,
//,,,,,,,,,,,,,,,,*&(%%#%%%%###(((((//#%%%######%%%%%%%###########, ,,,,,,,,,,,,,,
//*,,,,,,,,,,,,,,,,((%%%%%%%%###((((//#%%#(    .(##%########(/   (. ,,,,,,,,,,,,,,
//*,*,,,,,,,,,,,,,,/#%%%%%%%####((((//#%%#(    ,(#####   .(#(/   (. ,,,,,,,,,,,,,,
//*******,,,,,*/ .,(&(#%%%%%%###((((//#%%%%#####%%%%%%%%%%%#######, ,,,,,,,,,,,,,,
//********,*,///  ,/##&####(///*****(##%%%%%%%%%%%%%%%%%%%%%%##### ,,,,,,,,,,,,,,,
//********,*/(//  ,,##/.,,,,,,,,,,,,,,,,,*((*,,,,,,,,,,,,(     .*.,,,,,,,,,,,,,,,,
//**********(((*   *,,,..*(/,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,#(#(/,   ,,,,,,,,,,,,,,,
//*********&&&%*,  ,**((((#(//,/(%&&&%/*,   .%%%%%   ,*,#%## ((,,  (#/,,,,,,,,,,,,
//*********&&&&(##((,.,%%%%(*. ,#%##&&&&((    #%%%%.   ##%/.#/,   *,.. .,,,,,,,,,,
//*********@@@&#%(/*,..%@&%#/, .%%###((*, (&& . .**/(&&     /#(.  (*,. .,,,,,,,*,,
//********(@@@&#%(/*,..***/%%#* .%%%###((////*  %#((((///* .*%#/  #/*,..*,,,,*****
//********(&&@&#%(/*,.*******#.((%%%%%##////((((%#(/**//((((*,%%%#%(*,.***********
//*********#####%(/*,,*******#*(%%%%%%%########***%%%%%%%#/****%%#%%/,,,**********
//                      ____   ____  ____   ____ _______ _____                  //
//                     |  _ \ / __ \|  _ \ / __ \__   __/ ____|                 //
//                     | |_) | |  | | |_) | |  | | | | | (___                   //
//                     |  _ <| |  | |  _ <| |  | | | |  \___ \                  //
//                     | |_) | |__| | |_) | |__| | | |  ____)                   //
//                     |____/ \____/|____/ \____/  |_| |_____/                  //
//////////////////////////////////////////////////////////////////////////////////

pragma solidity ^0.8.13;
import "./ERC721NES.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


//import Bobot genesis
import "./BobotGenesis.sol";
import "./BobotMegaBot.sol";


contract CoreChamber is OwnableUpgradeable
{
    uint256 public constant WEEK = 7 days;

    uint256 public corePointsPerWeekGenesis;
    uint256 public corePointsPerWeekMegabot;

    //bobots genesis contract
    BobotGenesis public bobotGenesis;

    //bobots megabots contract 
    BobotMegaBot public bobotMegabot;
   
    uint256 public totalIqStored;

    uint256 public lastRewardTimestamp;

    uint256 public genesisSupply;
    uint256 public megabotSupply;

    mapping(uint256 => uint256) public genesisTimestampJoined;
    mapping(uint256 => uint256) public megabotTimestampJoined;

    modifier atCoreChamberGenesis(uint256 _tokenId, bool atCore) {
        require(isAtCoreChamberGenesis(_tokenId) == atCore, "Core chamber: wrong attendance");
        _;
    }
    function isAtCoreChamberGenesis(uint256 _tokenId) public view returns (bool) {
        return genesisTimestampJoined[_tokenId] > 0;
    }
    modifier atCoreChamberMegabot(uint256 _tokenId, bool atCore) {
        require(isAtCoreChamberMegabot(_tokenId) == atCore, "Core chamber: wrong attendance");
        _;
    }
    function isAtCoreChamberMegabot(uint256 _tokenId) public view returns (bool) {
        return megabotTimestampJoined[_tokenId] > 0;
    }
    modifier onlyGenesisOwner(uint256 _tokenId) {
        require(bobotGenesis.ownerOf(_tokenId) == msg.sender, "Genesis: only owner can send to core chamber");
        _;
    }
    modifier onlyMegabotOwner(uint256 _tokenId) {
        require(bobotMegabot.ownerOf(_tokenId) == msg.sender, "Megabot: only megabot owner can send to core chamber");
        _;
    }
    modifier updateTotalCorePoints(bool isJoining, BobotType _bobotType) {
        if (genesisSupply > 0) {
            totalIqStored = totalIQ();
        }
        lastRewardTimestamp = block.timestamp;
        if(_bobotType == BobotType.BOBOT_GEN)
            isJoining ? genesisSupply++ : genesisSupply--;
        if(_bobotType == BobotType.BOBOT_MEGA)
            isJoining ? megabotSupply++ :  megabotSupply--;
        _;
    }

    /**************************************************************************/
    /*!
       \brief returns the current bobot level
    */
    /**************************************************************************/
    function getCurrentBobotLevel(uint256 tokenID) 
        public 
        view 
        returns (uint256)
    {
        if (BobotGenesis.getCurrentBobotLevel(tokenID))
        {
            return BobotGenesis.getCurrentBobotLevel(tokenID);
        }

        if (BobotMegaBot.getCurrentBobotLevel(tokenID))
        {
            return BobotMegaBot.getCurrentBobotLevel(tokenID);
        }
        else 
        {
            return -1;
        }
    }
    function totalCorePoints() public view returns (uint256) {
        uint256 timeDelta = block.timestamp - lastRewardTimestamp;
        return totalIqStored +
         (genesisSupply * iqPerWeek * timeDelta / WEEK) + 
         (megabotSupply * iqPerWeek * timeDelta / WEEK);
    }


    function corePointsEarnedGenesis(uint256 _tokenId) public view 
    returns (uint256 points) 
    {
        if (timestampJoined[_tokenId] == 0) return 0;
        uint256 timedelta = block.timestamp -  genesisTimestampJoined[_tokenId];
        points = corePointsPerWeekGenesis * timedelta / WEEK;
    }
    function corePointsEarnedMegabot(uint256 _tokenId) public view 
    returns (uint256 points) 
    {
        if (timestampJoined[_tokenId] == 0) return 0;
        uint256 timedelta = block.timestamp -  genesisTimestampJoined[_tokenId];
        points = corePointsPerWeekMegabot * timedelta / WEEK;
    }
    function stakeGenesis(uint256 tokenId)  
        external
        onlyGenesisOwner(_tokenId)
        atCoreChamberGenesis(_tokenId, false)
        updateTotalCorePoints(true,BobotType.BOBOT_GEN) {
        genesisTimestampJoined[_tokenId] = block.timestamp;
    }

    function unstakeGenesis(uint256 tokenId) 
        external
        onlyGenesisOwner(_tokenId)
        atCoreChamberGenesis(_tokenId, true)
        updateTotalCorePoints(false,BobotType.BOBOT_GEN)
        {
        bobotsGenesis.coreChamberCorePointUpdate(_tokenId, corePointsEarnedGenesis(_tokenId));
        genesisTimestampJoined[_tokenId] = 0;
    }
    function stakeMegabot(uint256 tokenId)  
        external
        onlyMegabotOwner(_tokenId)
        atCoreChamberMegabot(_tokenId, false)
        updateTotalCorePoints(true,BobotType.BOBOT_GEN) {
        genesisTimestampJoined[_tokenId] = block.timestamp;
    }

    function unstakeMegabot(uint256 tokenId) 
        external
        onlyMegabotOwner(_tokenId)
        atCoreChamberMegabot(_tokenId, true)
        updateTotalCorePoints(false,BobotType.BOBOT_GEN)
        {
        bobotsGenesis.coreChamberCorePointUpdate(_tokenId, corePointsEarnedGenesis(_tokenId));
        genesisTimestampJoined[_tokenId] = 0;
    }
  
    //admin function

    /**************************************************************************/
    /*!
       \brief Set Bobot Genesis contract
    */
    /**************************************************************************/
    function setBobotGenesis(address _bobotGenesis) external onlyOwner {
        bobotGenesis = BobotGenesis(_bobotGenesis);
    }
   function setBobotMegabot(address _bobotMegabot) external onlyOwner {
        bobotMegabot = BobotMegabot(_bobotMegabot);
    }

    /**************************************************************************/
    /*!
       \brief Set multiplier
    */
    /**************************************************************************/
    // function setLevelMultiplier() onlyOwner
    // {
        
    // }
 function setIqPerWeek(uint256 _iqPerWeek) external onlyOwner {
        iqPerWeek = _iqPerWeek;
        emit SetIqPerWeek(_iqPerWeek);
    }
}
