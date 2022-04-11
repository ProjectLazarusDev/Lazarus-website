//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract BobotGenesis is ERC721Enumerable, Ownable {
    using Strings for uint256;

    //revealed and unrevealed uri
    string public baseURI;
    string public baseHiddenURI;


    string public baseExtention = ".json";
    uint256 public maxSupply = 4040;
    uint256 public maxMintAmount = 1;

    //max bobots per account
    uint256 public nftPerAddressLimit = 5;

    //reveal whitelist variables
    bool public revealed = false;
    bool public onlyWhitelisted = true;

    //store whitelisted addresses
    address[] public whitelistedAddresses;

    //amount mintable per whitelist
    mapping(address => uint256) public addressMintedBalance;

    //which id is revealed
    mapping(uint256 => bool) public tokenIDRevealed;

    //is the contract running
    bool public paused = false;

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI,
        string memory _initHiddenURI
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
        setHiddenURI(_initHiddenURI);
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI; // return own base URI
    }

    // public
    function mintBobot(address _to, uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply);

        if (msg.sender != owner()) {
            if (onlyWhitelisted == true) {
                require(
                    isUserWhitelisted(msg.sender),
                    "user is not whitelisted"
                );
                uint256 ownerMintedCount = addressMintedBalance[msg.sender];
                require(
                    ownerMintedCount + _mintAmount <= nftPerAddressLimit,
                    "max NFT per address exceeded"
                );
            }
        }

        for (uint256 i = 1; i <= _mintAmount; ++i) {
            _safeMint(_to, supply + i);
            tokenIDRevealed[supply + i] = false;
        }
    }

    //reveal one bobot
    function revealTokenID (uint256 _id) public payable
    {
        if( tokenIDRevealed[_id] == false)
        {
            tokenIDRevealed[_id] = true;
        }
    }

    function checkRevealTokenID(uint256 _id) public view returns (bool)
    {
        return tokenIDRevealed[_id];
    }
    function reveal () public onlyOwner
    {
        revealed = true;
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIDs = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; ++i) {
            tokenIDs[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokenIDs;
    }

    function isUserWhitelisted(address _user) public view returns (bool) {
        for (uint256 i = 0; i < whitelistedAddresses.length; i++) {
            if (whitelistedAddresses[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function getTokenIds(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory _tokensOfOwner = new uint256[](
            ERC721.balanceOf(_owner)
        );
        uint256 i;

        for (i = 0; i < ERC721.balanceOf(_owner); i++) {
            _tokensOfOwner[i] = ERC721Enumerable.tokenOfOwnerByIndex(_owner, i);
        }
        return (_tokensOfOwner);
    }

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
        string memory currentBaseHiddenURI = _baseURI();

        bool IDRevealed = checkRevealTokenID(tokenID);

        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(IDRevealed ? baseURI : currentBaseHiddenURI, tokenID.toString(), baseExtention)
                )
                : "";
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }
    function setHiddenURI(string memory _newBaseURI) public onlyOwner {
        baseHiddenURI = _newBaseURI;
    }
    function setBaseExtentions(string memory _newBaseExtentions)
        public
        onlyOwner
    {
        baseExtention = _newBaseExtentions;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}
