pragma solidity ^0.8.13;

import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/IERC721EnumerableUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
//other staking contracts
import "./InstallationCoreChamber.sol";
interface IBobot is IERC721EnumerableUpgradeable {

    enum BobotType
    {
        BOBOT_GEN,
        BOBOT_NANO,
        BOBOT_MEGA
    }  

    //is it a nano/gen/mega bot
    function getBobotType(uint256 _tokenID) external view  returns (BobotType);

}
