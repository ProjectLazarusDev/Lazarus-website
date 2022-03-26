const { tasks } = require("hardhat");

required("@nomiclabs/hardhat-waffle");


module.exports = {

    solidity: {
        version: "0.8.4",
        networks: {
            hardhat: {
                chainId: 1337,
            },
        },
    },
};