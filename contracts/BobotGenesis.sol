//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BobotGenesis is ERC721Enumerable, Ownable {
    using Strings for uint256; 

    string public baseURI; 
    string public baseExtention = ".json";
    uint256 public cost = 0.02 ether; 
    uint256 public maxSupply = 3000; 
    uint256 public maxMintAmount = 20; 
    bool public paused = false; 

    constructor(
        string memory _name, 
        string memory _symbol, 
        string memory _initBaseURI
    )ERC721(_name, _symbol){
        setBaseURI(_initBaseURI);
       
    }

    // internal 
    function _baseURI() internal view virtual override returns (string memory){
        return baseURI; // return own base URI
    }

    // public
    function mintBobot(address _to, uint256 _mintAmount) public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(_mintAmount > 0);
        require(_mintAmount <= maxMintAmount);
        require(supply + _mintAmount <= maxSupply);

        if (msg.sender != owner()){
            require(msg.value >= cost * _mintAmount);
        }

        for (uint256 i = 1; i <= _mintAmount; ++i){
            _safeMint(_to, supply + i);
        }
    }

    function walletOfOwner(address _owner)
        public 
        view 
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIDs = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; ++i)
        {
            tokenIDs[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokenIDs;
    }

    function getTokenIds(address _owner)
     public 
     view 
     returns (uint[] memory) 
     {
        uint[] memory _tokensOfOwner = new uint[](ERC721.balanceOf(_owner));
        uint i;

        for (i=0;i<ERC721.balanceOf(_owner);i++)
        {
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
        return bytes(currentBaseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenID.toString(), baseExtention)) : "";
    }

    // only owner 
    function setCost(uint256 _newCost) public onlyOwner(){
        cost = _newCost;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner(){
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner() {
        baseURI = _newBaseURI;
    }

    function setBaseExtentions(string memory _newBaseExtentions) public onlyOwner() {
        baseExtention = _newBaseExtentions;
    }

    function pause(bool _state) public onlyOwner() {
        paused = _state;
    }

    function withdraw() public payable onlyOwner {
        require(payable(msg.sender).send(address(this).balance));
    }
}