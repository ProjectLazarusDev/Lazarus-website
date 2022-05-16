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
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

//other staking contracts
import "./Bobot.sol";

//$MAGIC transactions
import "./Magic20.sol";

contract BobotMegaBot is Bobot, ERC721EnumerableUpgradeable, OwnableUpgradeable
{
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address;
    using CountersUpgradeable for CountersUpgradeable.Counter;
    using StringsUpgradeable for uint256;

    //magic contract
    IERC20Upgradeable public magic;

    uint256 currencyExchange = (10**9);
    uint256 magicBalanceCost = 20;
    uint256 mintCost = 1 ether;

    //revealed and unrevealed uri
    string public baseRevealedURI;
    string public baseHiddenURI;

    string public baseExtention = ".json";
    uint256 public maxSupply = 1000;
    uint256 public maxLevelAmount = 20;
    uint256 public currentLevelAmount = 0;

    //core chamber level update cost
    uint256 public coreChamberLevelCost;

    // reveal variables
    bool public revealed = false;

    //core points on a per bobot basis
    //one bobot -> core point
    mapping(uint256 => uint256) public bobotCorePoints;

    //is the contract running
    bool public paused = false;
    
    //token id counter
    CountersUpgradeable.Counter public _tokenIdCounter;


    function initialize(address _magicAddress) external initializer {
        __ERC721Enumerable_init();
        __Ownable_init();

        magic = IERC20Upgradeable(_magicAddress);
 

    }
    
    function getBobotType(uint256 _tokenID)
        external
        pure
        override
        returns (BobotType)
    {
        
        return BobotType.BOBOT_MEGA;
    }


    /**************************************************************************/
    /*!
       \brief view URI reveal / hidden
    */
    /**************************************************************************/
    function _baseURI() internal view virtual override returns (string memory) {
        return baseRevealedURI ; // return own base URI
    }

    // public

    /**************************************************************************/
    /*!
       \brief mint a bobot - multiple things to check 
       does user have $MAGIC in their wallet?
    */
    /**************************************************************************/
    function mintBobot() public payable {
        //is contract running?
        require(!paused);

        uint256 mintCount = 0;

        for (uint256 i = 1; i <= mintCount; ++i) {
            uint256 nextTokenId = _getNextTokenId();
            _safeMint(msg.sender, nextTokenId + i);
        }
    }

    /**************************************************************************/
    /*!
       \brief mint a bobot - multiple things to check 
       does user have $MAGIC in their wallet?
    */
    /**************************************************************************/
    function mintBobotTest() public payable {
        //is contract running?
        require(!paused);
        uint256 nextTokenId = _getNextTokenId();
        _safeMint(msg.sender, nextTokenId);
    }


    /**************************************************************************/
    /*!
       \brief return URI of a token - could be revealed or hidden
    */
    /**************************************************************************/
    function tokenURI(uint256 tokenID)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenID),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        uint256 level = Math.min(
            bobotCorePoints[tokenID] / coreChamberLevelCost,
            maxLevelAmount
        );

        string memory revealedURI = string(
            abi.encodePacked(
                baseRevealedURI,
                tokenID.toString(),
                "/",
                level.toString(),
                baseExtention
            )
        );

        return
            bytes(currentBaseURI).length > 0
                ? (revealedURI)
                : "";
    }

    function _getNextTokenId() private view returns (uint256) {
        return (_tokenIdCounter.current() + 1);
        //return ( 1);
    }

    function _safeMint(address to, uint256 tokenId)
        internal
        override(ERC721Upgradeable)
    {
        super._safeMint(to, tokenId);
        _tokenIdCounter.increment();
    }

    /**************************************************************************/
    /*!
       \brief returns the bobots current level
    */
    /**************************************************************************/
    function getCurrentBobotLevel(uint256 _tokenID) 
        public 
        view 
        returns (uint256)
    {
        //return bobotCorePoints[_tokenID].currentLevelAmount;
    }


    /**************************************************************************/
    /*!
       \brief enable reveal phase
    */
    /**************************************************************************/
    function reveal(bool _revealed) external onlyOwner {
        revealed = _revealed;
    }


    /**************************************************************************/
    /*!
       \brief set base URI
    */
    /**************************************************************************/
    function setBaseRevealedURI(string memory _newBaseURI) public onlyOwner {
        baseRevealedURI = _newBaseURI;
    }

   
    /**************************************************************************/
    /*!
       \brief set Base Extensions
    */
    /**************************************************************************/
    function setBaseExtentions(string memory _newBaseExtentions)
        public
        onlyOwner
    {
        baseExtention = _newBaseExtentions;
    }

    /**************************************************************************/
    /*!
       \brief pause smart contract
    */
    /**************************************************************************/
    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    /**************************************************************************/
    /*!
       \brief withdraw
    */
    /**************************************************************************/
    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
