require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("./scripts/deploy.js");


/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };


module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
   hardhat: {},
   goerli: {
     url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
     accounts: [process.env.ACCOUNT_PRIVATE_KEY]
   }
 }
}