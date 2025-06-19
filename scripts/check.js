require("dotenv").config();

async function main() {
  const [sender] = await ethers.getSigners(); // or use wallet connected to Sepolia
  const tokenAddress = process.env.TOKEN_ADDRESS;
  const token = await ethers.getContractAt("MyToken", tokenAddress);

  const balance = await token.balanceOf(sender.address);
  console.log(`Sender Balance: ${sender.address}`, ethers.utils.formatUnits(balance, 18));

  const recipient = process.env.RECEIVER_ADDRESS; // replace with the recipient's address

  const balanceR = await token.balanceOf(recipient);
  
  console.log(`Balance of receiver: ${recipient}:`, ethers.utils.formatUnits(balanceR, 18), "tokens");
}

main()
.then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });