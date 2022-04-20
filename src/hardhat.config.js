const { tasks } = require("hardhat");

required("@nomiclabs/hardhat-waffle");


module.exports = {

    solidity: {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
};