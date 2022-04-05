
const hre = require("hardhat");

async function main() 
{
  
  //genesis contract deploy
  const BobotGenesis = await hre.ethers.getContractFactory("BobotGenesis");
  const bobotGenesis = await BobotGenesis.deploy("mint","mint","mint");

  await bobotGenesis.deployed();

  console.log("BobotGenesis deployed to:", BobotGenesis.address);


  //land nft deploy
  const BobotInstallation = await hre.ethers.getContractFactory("BobotInstallation");
  const bobotInstallation = await BobotInstallation.deploy("mint","mint","mint");

  await bobotInstallation.deployed();

  console.log("BobotInstallation deployed to:", bobotInstallation.address);


  //core chamber deploy - staking code
  const CoreChamber = await hre.ethers.getContractFactory("CoreChamber");
  const coreChamber = await CoreChamber.deploy("0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9",1);

  await coreChamber.deployed();

  console.log("CoreChamber deployed to:", coreChamber.address);

  //magic 20 deploy
  const Magic20 = await hre.ethers.getContractFactory("Magic20");
  const magic20 = await Magic20.deploy();

  await magic20.deployed();

  console.log("Magic20 deployed to:", magic20.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
