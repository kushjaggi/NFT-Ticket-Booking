const { createPandoraExpressSDK } = require("pandora-express");

init = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
};

createCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
 const result = await ExpressSDK.erc1155.collection.createCollection(
    web3,
    chainId,
    accounts[0],
    collectionURI.value,
    collectionDescription.value,
    [[accounts[0], collectionRoyalties.value]]
  );

  console.log(result);
};

mintInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
 const result = await ExpressSDK.erc1155.collection.mint(
    web3,
    collectionAddress.value,
    tokenID.value,
    itemColNumber.value,
    tokenURI.value,
    accounts[0]
  );
  console.log(result)
};

sellInCollection = async () => {
  let ExpressSDK = createPandoraExpressSDK();
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  const result = await ExpressSDK.erc1155.collection.sellNFT(
    web3,
    chainId,
    sellCollectionAddress.value,
    sellTokenId.value,
    sellPrice.value,
    accounts[0],
    itemSellNumber.value
  );
  console.log(result)
};

const collectionURI = document.getElementById("collection1155Uri");
const collectionDescription = document.getElementById("collection1155Description");
const collectionRoyalties = document.getElementById("collection1155Royalties");
const CollectionButton = document.getElementById("btnCreateCollection1155");
CollectionButton.onclick = createCollection;

const collectionAddress = document.getElementById("collection1155Address");
const tokenURI = document.getElementById("token1155URI");
const tokenID = document.getElementById("token1155Id");
const itemColNumber = document.getElementById("numMintInCol1155Amount");
const btnMintInCollection = document.getElementById("btnMintInCollection1155");
btnMintInCollection.onclick = mintInCollection;

const sellCollectionAddress = document.getElementById("sellCollection1155Address");
const sellTokenId = document.getElementById("sell1155TokenId");
const sellPrice = document.getElementById("sell1155Price");
const itemSellNumber = document.getElementById("numSellInCol1155Amount");
const btnSellInCollection = document.getElementById("btnSellInCollection1155");
btnSellInCollection.onclick = sellInCollection;

init();
