<<<<<<< Updated upstream
=======
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
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

//other staking contracts
import "./Bobot.sol";
import "./InstallationCoreChamber.sol";

//$MAGIC transactions
import "./Magic20.sol";

contract BobotMegaBot is Bobot {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address;
    using CountersUpgradeable for CountersUpgradeable.Counter;
    using Strings for uint256;

  
    uint256 mintCost = 1 ether;

    //revealed and unrevealed uri
    string public baseRevealedURI;

    string public baseExtention = ".json";
    uint256 public maxSupply = 1000;
    uint256 public maxMintAmount = 1;


    //max bobots per account
    uint256 public nftPerAddressLimit = 5;
    
    //is the contract running
    bool public paused = false;



 function initialize(  address _magicAddress) external initializer {
        __ERC721Enumerable_init();
        __Ownable_init();

        magic = IERC20Upgradeable(_magicAddress);
 

 }
    function getBobotType(uint256 _tokenID)
        external
        view
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
    function mintBobot(address _address,uint256 _amount ) public payable {
        //is contract running?
        require(!paused);

        uint256 mintCount = 0;

        for (uint256 i = 1; i <= _amount; ++i) {
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

}
>>>>>>> Stashed changes
