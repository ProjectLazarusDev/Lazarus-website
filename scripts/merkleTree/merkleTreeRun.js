
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const MerkleWallets = require("../../src/merkleWallets.json");
const MerkleWallets2 = require("../../src/merkleWallet2.json");

//check address
var addr = "0xB59999023972a078976C8EA882ba52669f562AF5";

const whitelistAddresses = MerkleWallets.wallets;
const whitelistAddresses2 = MerkleWallets2.wallets;

const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const leafNodes2 = whitelistAddresses2.map(addr => keccak256(addr));

const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
const merkleTree2 = new MerkleTree(leafNodes2, keccak256, { sortPairs: true});

const rootHash = merkleTree.getRoot();
const rootHash2 = merkleTree2.getRoot();

const rootHashBytes32 = '0x' + merkleTree.getRoot().toString('hex');
const rootHashBytes322 = '0x' + merkleTree2.getRoot().toString('hex');

console.log("First Root Hash32 for the contract: ", rootHashBytes32);
console.log("Second Root Hash32 for the contract: ", rootHashBytes322);


//after here is just to get a proof to test, change the wallet bellow to get the proof from =)
const claimingAddress = keccak256(addr);
const claimingAddress2 = keccak256(addr);

const hexProof = merkleTree.getHexProof(claimingAddress);
const hexProof2 = merkleTree2.getHexProof(claimingAddress2);

console.log("First HexProof for Remix: ", hexProof);
console.log("First HexProof for EtherScan: ", hexProof.toString('hex'));

console.log("Second HexProof for Remix: ", hexProof2);
console.log("Second HexProof for EtherScan: ", hexProof2.toString('hex'));

console.log("First Verification: ", merkleTree.verify(hexProof, claimingAddress, rootHash));
console.log("Second Verification: ", merkleTree.verify(hexProof2, claimingAddress2, rootHash2));
