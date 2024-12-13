const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const KeyManager = await hre.ethers.getContractFactory("KeyManager");
  const keyManager = await KeyManager.deploy();

  await keyManager.deployed();
  console.log("KeyManager deployed to:", keyManager.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
