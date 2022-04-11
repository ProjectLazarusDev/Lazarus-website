pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Magic20 {
   

    constructor() {
        //tokenContract = token;
    }

    function checkBalance(address token,address holder) public view returns (uint256) {
        IERC20 magic = IERC20(token);
        return magic.balanceOf(holder);
    }

    
}
