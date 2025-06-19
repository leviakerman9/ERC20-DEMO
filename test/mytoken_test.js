const { expect } = require("chai");
const { ethers } =require("hardhat");

describe("MyToken", function () {
  let token;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    token = await MyToken.deploy("HarshCoin", "HCI", ethers.utils.parseUnits("1000000", 18));
    await token.deployed();
  });

  it("Should assign total supply to the owner", async function () {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(await token.totalSupply());
  });

  it("Should transfer tokens to another address", async function () {
    await token.transfer(addr1.address, ethers.utils.parseUnits("100", 18));
    const addr1Balance = await token.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(ethers.utils.parseUnits("100", 18));
  });

  it("Should return correct balance for any address", async function () {
  const balance = await token.balanceOf(owner.address);
  console.log("Balance:", ethers.utils.formatUnits(balance, 18));
});
});



