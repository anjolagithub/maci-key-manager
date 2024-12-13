require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    bscTestnet: {
      url: process.env.BSC_RPC_URL, // BSC Testnet RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    opBNBTestnet: {
      url: process.env.OPBNB_RPC_URL, // opBNB Testnet RPC URL
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
