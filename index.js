const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('414818d8840159481f0bf318b61695297659f8324db90b46ae6a7fda944c97eb');
const myWalletAddress = myKey.getPublic('hex');

let elishaCoin = new Blockchain();

elishaCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
elishaCoin.addTransaction(tx1);

elishaCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
elishaCoin.addTransaction(tx2);

elishaCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of Elishas wallet is ${elishaCoin.getBalanceOfAddress(myWalletAddress)}`);

console.log();
console.log('Block chain valid? ', elishaCoin.isChainValid() ? 'Yes' : 'No');