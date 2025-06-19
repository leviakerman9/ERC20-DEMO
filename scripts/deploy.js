const { ethers } = require("hardhat");

async function main() {
  const Router = await ethers.getContractFactory("MyToken");
    const totalSupply = ethers.utils.parseUnits("1000000", 18);
  const router = await Router.deploy("harshcoin","HCI",totalSupply);
  console.log("here");
  await router.deployed();
  console.log("MyToken deployed to:", router.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});