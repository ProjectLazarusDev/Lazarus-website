
const hre = require("hardhat");

async function main() {
  
  const BobotGenesis = await hre.ethers.getContractFactory("BobotGenesis");
  const bobotGenesis = await BobotGenesis.deploy("mint","mint","mint");

  await bobotGenesis.deployed();

  console.log("BobotGenesis deployed to:", BobotGenesis.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
