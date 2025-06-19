const { ethers } = require("hardhat");

async function main() {
  // 1. Get signer (deployer/owner)
  const [owner] = await ethers.getSigners();

  // 2. Your deployed token contract address
  const tokenAddress = process.env.TOKEN_ADDRESS; // ⬅️ Replace with your actual address

  // 3. The recipient address
  const recipient = process.env.RECEIVER_ADDRESS; // ⬅️ Replace with recipient address

  // 4. Connect to the deployed contract
  const token = await ethers.getContractAt("MyToken", tokenAddress);

  // 5. Amount to send (e.g., 100 tokens)
  const amount = ethers.utils.parseUnits("100", 18); // ⬅️ Change 18 if your decimals differ

  // 6. Send the tokens from owner to recipient
  const tx = await token.connect(owner).transfer(recipient, amount);
  await tx.wait();

  console.log(`✅ Transferred 100 tokens to ${recipient}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
