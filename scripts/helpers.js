const { ethers } = require("ethers");
const { getContractAt } = require("@nomiclabs/hardhat-ethers/internal/helpers");
require('dotenv').config();


CONTRACT_ADDRESS = '0x5D04aD77a84DfF4744dF14e512c10b9bA6D5D44B';

// Helper method for fetching environment variables from .env
function getEnvVariable(key, defaultValue) {
    if (process.env[key]) {
        return process.env[key];
    }
    if (!defaultValue) {
        throw `${key} is not defined and no default value was provided`;
    }
    return defaultValue;
}

// Helper method for fetching a connection provider to the Ethereum network
function getProvider() {
    return ethers.getDefaultProvider('goerli', {
        alchemy: process.env['ALCHEMY_API_KEY'],
    });
}

// Helper method for fetching a wallet account using an environment variable for the PK
function getAccount() {
    return new ethers.Wallet(getEnvVariable("ACCOUNT_PRIVATE_KEY"), getProvider());
}

// Helper method for fetching a contract instance at a given address
function getContract(contractName, hre) {
    const account = getAccount();
    return getContractAt(hre, contractName, CONTRACT_ADDRESS, account);
}
module.exports = {
    getEnvVariable,
    getProvider,
    getAccount,
    getContract,
}