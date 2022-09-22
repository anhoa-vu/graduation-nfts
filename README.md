# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Generate CAR file:
```shell
npx ipfs-car --pack images --output images.car
npx ipfs-car --pack metadata --output metadata.car
```

Deployment scripts:
```shell
npx hardhat compile
npx hardhat deploy
#Copy contract address to helpers.js
npx hardhat set-base-token-uri --base-url "<url>/metadata/"

npx hardhat mint --address "address"
npx hardhat run scripts/deploy.js
#fetch token metadata
npx hardhat token-uri --token-id 1
npx hardhat token-uri --token-id 2
```