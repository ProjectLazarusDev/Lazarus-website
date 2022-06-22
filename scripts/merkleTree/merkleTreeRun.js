
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const MerkleWallets = require("../../src/merkleWallets.json");

const whitelistAddresses = MerkleWallets.wallets;

const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const rootHash = merkleTree.getRoot();
const rootHashBytes32 = '0x' + merkleTree.getRoot().toString('hex');

console.log("Root Hash32: ", rootHashBytes32);

//after here is just to get a proof to test, change the wallet bellow to get the proof from =)

const claimingAddress = keccak256("0x5bBBBed03E7b05ECD43eb2f8079aAB51662604f1");

const hexProof = merkleTree.getHexProof(claimingAddress);

console.log("HexProof for Remix: ", hexProof);
console.log("HexProof for EtherScan: ", hexProof.toString('hex'));

console.log("Verification: ", merkleTree.verify(hexProof, claimingAddress, rootHash));
