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
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts-upgradeable/utils/StringsUpgradeable.sol";
//other staking contracts
import "./InstallationCoreChamber.sol";

//$MAGIC transactions
import "./Magic20.sol";

contract BobotGenesis is ERC721EnumerableUpgradeable, OwnableUpgradeable {
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address;
    using CountersUpgradeable for CountersUpgradeable.Counter;
    using StringsUpgradeable for uint256;

    //magic contract
    IERC20Upgradeable public magic;

    uint256 currencyExchange = (10**9);
    uint256 magicBalanceCost = 20;

    //revealed and unrevealed uri
    string public baseRevealedURI;
    string public baseHiddenURI;

    string public baseExtention = ".json";
    uint256 public maxSupply = 4040;
    uint256 public maxMintAmount = 1;
    uint256 public maxLevelAmount = 7;
    uint256 public currentLevelAmount = 0;

    //max bobots per account
    uint256 public nftPerAddressLimit = 5;

    //reveal whitelist variables
    bool public revealed = false;
    bool public onlyWhitelisted = true;

    //store whitelisted addresses
    address[] whitelistedAddressesGuardians;
    address[] whitelistedAddressesLunars;

    //root hash for merkle proof
    bytes32 public rootGuardiansHash;
    bytes32 public rootLunarsHash;

    //core chamber level update cost
    uint256 public coreChamberLevelCost = 1200;

    //token id counter
    CountersUpgradeable.Counter private _tokenIdCounter;

    //level cost
    uint256 levelCost;

    //amount mintable per whitelist
    mapping(address => bool) public whitelistedAddressesGuardiansClaimed;
    mapping(address => bool) public whitelistedAddressesLunarClaimed;

    //core chamber
    CoreChamber public coreChamber;

    //core points on a per bobot basis
    //one bobot -> core point
    mapping(uint256 => uint256) public bobotCorePoints;

    //is the contract running
    bool public paused = false;

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

    /**************************************************************************/
    /*!
       \brief view URI reveal / hidden
    */
    /**************************************************************************/
    function _baseURI() internal view virtual override returns (string memory) {
        return revealed ? baseRevealedURI : baseHiddenURI; // return own base URI
    }

    // public

    /**************************************************************************/
    /*!
       \brief mint a bobot - multiple things to check 
       does user have $MAGIC in their wallet?
    */
    /**************************************************************************/
    function mintBobot(
        bytes32[] calldata _merkleProof,
        bytes32[] calldata _merkleProof2
    ) public payable {
        //is contract running?
        require(!paused);
        require(
            magic.balanceOf(msg.sender) / currencyExchange > magicBalanceCost,
            "Not enough magic in wallet"
        );

        uint256 mintCount = 0;
        
        if (msg.sender != owner()) {
            //minter must be whitelisted
            if (onlyWhitelisted == true) {
                require(
                    whitelistedAddressesGuardiansClaimed[msg.sender] ||
                        whitelistedAddressesLunarClaimed[msg.sender],
                    "user already whitelisted"
                );

                // default max mint amount is 1 
                maxMintAmount = 1;

                bytes32 leaf = keccak256(abi.encodePacked(msg.sender));

                bool isGuardians = MerkleProof.verify(
                    _merkleProof,
                    rootGuardiansHash,
                    leaf
                );
                bool isLunars = MerkleProof.verify(
                    _merkleProof2,
                    rootLunarsHash,
                    leaf
                );

                //check if leaf is valid
                require(
                    !isGuardians && !isLunars,
                    "Invalid proof - not whitelisted"
                );

                //guardians will have 1 mint
                //lunars will have 2 mint

                if (isGuardians) {
                    require(_getNextTokenId() <= maxSupply);
                    setmaxMintAmount(1);
                    mintCount = 1;
                    whitelistedAddressesGuardiansClaimed[msg.sender] = true;
                }

                if (isLunars) {
                    require(_getNextTokenId() + 1 <= maxSupply);
                    setmaxMintAmount(2);
                    mintCount = 2;
                    whitelistedAddressesLunarClaimed[msg.sender] = true;
                }

                
            }
        }

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
        currentLevelAmount = Math.min(
            bobotCorePoints[tokenID] / coreChamberLevelCost,
            maxLevelAmount
        );

        string memory revealedURI = string(
            abi.encodePacked(
                baseRevealedURI,
                tokenID.toString(),
                "/",
                currentLevelAmount.toString(),
                baseExtention
            )
        );

        return
            bytes(currentBaseURI).length > 0
                ? (revealed ? revealedURI : baseHiddenURI)
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
       \brief returns the bobots current level
    */
    /**************************************************************************/
    function getCurrentBobotLevel(uint256 _tokenID) 
        public 
        view 
        returns (uint256)
    {

        return bobotCorePoints[_tokenID].currentLevelAmount;
    }

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

    //--------------- ADMIN FUNCTIONS ---------------------------------------------

    function setRootGuardiansHash(bytes32 _rootHash) external onlyOwner {
        rootGuardiansHash = _rootHash;
    }

    function setRootLunarsHash(bytes32 _rootHash) external onlyOwner {
        rootLunarsHash = _rootHash;
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
       \brief set whitelist guardians
    */
    /**************************************************************************/
    function setWhitelistGuardians(address[] calldata _address)
        public
        onlyOwner
    {
        delete whitelistedAddressesGuardians;
        whitelistedAddressesGuardians = _address;
    }

    /**************************************************************************/
    /*!
       \brief set whitelist lunar
    */
    /**************************************************************************/
    function setWhitelistLunars(address[] calldata _address) public onlyOwner {
        delete whitelistedAddressesLunars;
        whitelistedAddressesLunars = _address;
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
       \brief set magic balance cost
    */
    /**************************************************************************/
    function setMagicBalanceCost(uint256 _newAmount) public onlyOwner {
        magicBalanceCost = _newAmount;
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
       \brief set base URI
    */
    /**************************************************************************/
    function setBaseHiddenURI(string memory _newBaseURI) public onlyOwner {
        baseHiddenURI = _newBaseURI;
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
       \brief set new Level (for Bobots staking purposes)
    */
    /**************************************************************************/
    function setNewLevel(uint256 _newLevel)
        public 
        onlyOwner
    {
        currentLevelAmount = _newLevel;
    }

    /**************************************************************************/
    /*!
       \brief set Max Level
    */
    /**************************************************************************/
    function setMaxLevel(uint256 _newLevelAmount)
        public
        onlyOwner
    {
        maxLevelAmount = _newLevelAmount;
    }


    /**************************************************************************/
    /*!
       \brief pause smart contract (for safety purposes)
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
