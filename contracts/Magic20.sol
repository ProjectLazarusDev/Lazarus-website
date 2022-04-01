pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Magic20 {
    address tokenContract;

    constructor(address token) {
        tokenContract = token;
    }

    function checkBalance(address holder) public view returns (uint256) {
        IERC20 magic = IERC20(tokenContract);
        return magic.balanceOf(holder);
    }
}
