const Web3 = require('web3');
const { PolyjuiceHttpProvider, PolyjuiceAccounts } = require("@polyjuice-provider/web3");

const ACCOUNT_PRIVATE_KEY = 'cf28c3416204ca33c9309ea6de0c92fb4a298ac1f5a9c620fe2c2aac686ffbe8'; // Replace this with your Ethereum private key with funds on Layer 2.
const CONTRACT_ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "itemId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "item",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "ItemCreated",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "Creator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allItems",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "getItem",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "owners",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allItemsLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "createItem",
    "outputs": [
      {
        "internalType": "address",
        "name": "item",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]; // this should be an Array []
const CONTRACT_ADDRESS = '0xd9c27ea79D792159BDE6B24cAE6B66a61f07b55d';

const polyjuiceConfig = {
    web3Url: 'https://godwoken-testnet-web3-rpc.ckbapp.dev'
};
  
const provider = new PolyjuiceHttpProvider(
    polyjuiceConfig.web3Url,
    polyjuiceConfig,
);

const web3 = new Web3(provider);
web3.eth.accounts = new PolyjuiceAccounts(polyjuiceConfig);
const account = web3.eth.accounts.wallet.add(ACCOUNT_PRIVATE_KEY);
web3.eth.Contract.setProvider(provider, web3.eth.accounts); 

async function handleCreateItem(){
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  const tx = contract.methods.createItem('0x256807C23d5085ad22CC124c00852eE60989fC3E').send(
      {
          from: account.address,
          gas: 6000000
      }
  );

  tx.on('transactionHash', hash => console.log(`Write call transaction hash: ${hash}`));

  const receipt = await tx;

  console.log('Write call transaction receipt: ', receipt);

}

(async () => {
  const balance = BigInt(await web3.eth.getBalance(account.address));

  if (balance === 0n) {
      console.log(`Insufficient balance. Can't issue a smart contract call. Please deposit funds to your Ethereum address: ${account.address}`);
      return;
  }

  console.log('Calling contract...');

  // Check smart contract state before state change.
  handleCreateItem();

})();
