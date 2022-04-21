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

<<<<<<< Updated upstream
//other staking contracts
=======

>>>>>>> Stashed changes
import "./InstallationCoreChamber.sol";

//$MAGIC transactions
import "./Magic20.sol";

<<<<<<< Updated upstream
contract BobotGenesis is ERC721EnumerableUpgradeable, OwnableUpgradeable {
=======
//other staking contracts
import "./Bobot.sol";

contract BobotGenesis is Bobot {
>>>>>>> Stashed changes
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address;
    using CountersUpgradeable for CountersUpgradeable.Counter;
    using Strings for uint256;

    //magic contract
  
    uint256 magicBalanceCost = 25;

    //revealed and unrevealed uri
    string public baseRevealedURI;
    string public baseHiddenURI;

    string public baseExtention = ".json";

    uint256 public constant maxSupply = 4040;
    uint256 public maxMintAmount = 1;


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

    //amount mintable per whitelist
    mapping(address => bool) public whitelistedAddressesGuardiansClaimed;
    mapping(address => bool) public whitelistedAddressesLunarClaimed;


    //is the contract running
    bool public paused = false;

<<<<<<< Updated upstream
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
=======
    function initialize(address _magicAddress) external initializer {
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
        return BobotType.BOBOT_GEN;
    }

>>>>>>> Stashed changes

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

                if (isGuardians) {
                    require(
                        _getNextTokenId() <= maxSupply,
                        "Max supply exceeded"
                    );
                    mintCount = 1;
                    whitelistedAddressesGuardiansClaimed[msg.sender] = true;
                }

                if (isLunars) {
                    require(
                        _getNextTokenId() + 1 <= maxSupply,
                        "Max supply exceeded"
                    );
                    mintCount = 2;
                    whitelistedAddressesLunarClaimed[msg.sender] = true;
                }

                //guardians will have 1 mint
                //lunars will have 2 mint
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

    //admin functions

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
       \brief set max mint amount
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
