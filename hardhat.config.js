/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")
require("dotenv").config();


const privateKey = process.env.PRIVATE_KEY
const alchemyApiKey = process.env.ALCHEMY_API_KEY
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`,
      accounts: privateKey ? [privateKey] : [],
    }
  },
};
