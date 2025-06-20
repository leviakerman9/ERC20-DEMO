# 🚀 MyToken – ERC-20 Token on Sepolia Testnet

This project implements a basic ERC-20 token called **HarshCoin (HCI)** using the Hardhat development environment and deploys it to the **Sepolia Testnet**.

---

## 🔧 Installation

```bash
git clone https://github.com/leviakerman9/ERC20-DEMO.git

npm install
npm install --save-dev hardhat
npm install --save-dev chai mocha
```

## 🧱 Compile the Contract
```bash
npx hardhat compile   
```
## 🚀 Deploy to Sepolia
Deploy your smart contract to the Sepolia test network:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## 📤 Transfer Tokens
To transfer tokens between addresses:

```bash
npx hardhat run scripts/transfer.js --network sepolia
```

## 📥 Check Token Balance
Check token balance for any wallet:

```bash
npx hardhat run scripts/checkBalance.js --network sepolia
```
## 🧪 Run Unit Tests
```bash
npx hardhat test
```

## 🧪 Expected Output:

MyToken

✔ Should assign total supply to the owner

✔ Should transfer tokens to another address
  
✔ Should return correct balance for any address

3 passing (2s)