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

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

//other staking contracts
import "./IBobot.sol";
import "./InstallationCoreChamber.sol";
import "./InstallationMiningDrill.sol";
import "./InstallationLaunchPad.sol";

//$MAGIC transactions
import "./Magic20.sol";

abstract contract Bobot is
    ERC721EnumerableUpgradeable,
    OwnableUpgradeable,
    IBobot
{
    using SafeERC20Upgradeable for IERC20Upgradeable;

      //magic contract
    IERC20Upgradeable public magic;

    uint256 currencyExchange = (10**9);

    uint256 public maxLevelAmount = 10;
    uint256 public maxMintAmount = 1;
    //core chamber level update cost
    uint256 public coreChamberLevelCost = 100;


    //level cost
    uint256 levelCost;

    //core chamber
    CoreChamber public coreChamber;
    MiningDrill public miningDrill;
    LaunchPad public launchPad;

    //core points on a per bobot basis
    //one bobot -> core point
    mapping(uint256 => uint256) public bobotCorePoints;


    
    //modifiers
    /**************************************************************************/
    /*!
       \brief only core chamber can access this function
    */
    /**************************************************************************/
    modifier onlyCoreChamber() {
        require(msg.sender == address(coreChamber), "Bobots: !CoreChamber");
        _;
    }

    //core chamber functions
    /**************************************************************************/
    /*!
       \brief earning core points logic
    */
    /**************************************************************************/
    function coreChamberCorePointUpdate(uint256 _tokenId, uint256 _coreEarned)
        external
        onlyCoreChamber
    {
        bobotCorePoints[_tokenId] += _coreEarned;
    }

    /**************************************************************************/
    /*!
       \brief set Core Chamber Contract
    */
    /**************************************************************************/
    function setCoreChamber(address _coreChamber) external onlyOwner {
        coreChamber = CoreChamber(_coreChamber);
    }

    /**************************************************************************/
    /*!
       \brief set max mint amount
    */
    /**************************************************************************/
    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }
        /**************************************************************************/
    /*!
       \brief set magic address
    */
    /**************************************************************************/
    function setMagicAddress(address _address) public onlyOwner {
        magic = IERC20Upgradeable(_address);
    }


    /**************************************************************************/
    /*!
       \brief return all token ids a holder owns
    */
    /**************************************************************************/
    function getTokenIds(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 t = ERC721Upgradeable.balanceOf(_owner);
        uint256[] memory _tokensOfOwner = new uint256[](t);
        uint256 i;

        for (i = 0; i < ERC721Upgradeable.balanceOf(_owner); i++) {
            _tokensOfOwner[i] = ERC721EnumerableUpgradeable.tokenOfOwnerByIndex(
                _owner,
                i
            );
        }
        return (_tokensOfOwner);
    }

}
