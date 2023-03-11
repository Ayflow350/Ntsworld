import Web3 from 'web3'
import Web3Contract from 'web3-eth-contract'
import { setGlobalState, getGlobalState, setAlert } from './store'
import abi from './abis/TimelessNFT.json'
const networks = {
  local: {
    id: 31337,
    chainName: 'Local 8545',
    rpcUrl: 'http://127.0.0.1:8545',
    serverRpcUrl: 'http://127.0.0.1:8545',
    add_data: {
      chainId: 31337,
      chainName: 'Local 8545',
      rpcUrls: ['http://127.0.0.1:8545'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com'],
      nativeCurrency: {
        name: 'LOCAL8545',
        symbol: 'ETH', // 2-6 characters long
        decimals: 18,
      },
    }
  },
  polygon: {
    id: 31337,
    chainName: 'Polygon Mainnet',
    rpcUrl: 'http://127.0.0.1:8545',
    serverRpcUrl: 'http://127.0.0.1:8545',
    add_data: {
      chainId: 31337,
      chainName: 'Polygon Mainnet',
      rpcUrls: ['http://127.0.0.1:8545'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com'],
      nativeCurrency: {
        name: 'LOCAL8545',
        symbol: 'ETH', // 2-6 characters long
        decimals: 18,
      },
    }
  },
  mumbai: {
    id: 80001,
    chainName: 'Mumbai Testnet',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com',
    // serverRpcUrl: 'https://matic-mumbai.chainstacklabs.com',
    serverRpcUrl: 'https://polygon-mumbai.infura.io/v3/2fe5101c39df4d91a7cbefc5a5d6e988',
    add_data: {
      chainId: `0x${(80001).toString(16)}`,
      chainName: 'Mumbai Testnet',
      rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com'],
      nativeCurrency: {
        name: 'Mumbai',
        symbol: 'MATIC', // 2-6 characters long
        decimals: 18,
      },
    }
  }
}
const { ethereum } = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)

const getEtheriumPublicContract = async () => {
  const network = "mumbai"
  console.log('network',network);
  Web3Contract.setProvider(networks[network].serverRpcUrl)
  const networkId = networks[network].id
  console.log('networkId',networkId);
  const networkData = abi.networks[networkId]

  if (networkData) {
    const contract = new Web3Contract(abi.abi, networkData.address)
    return contract
  } else {
    return null
  }
}
const getEtheriumContract = async () => {
  const connectedAccount = getGlobalState('connectedAccount')

  if (connectedAccount) {
    const web3 = window.web3
    const networkId = await web3.eth.net.getId()
    const networkData = abi.networks[networkId]

    if (networkData) {
      const contract = new web3.eth.Contract(abi.abi, networkData.address)
      return contract
    } else {
      return null
    }
  } else {
    return getGlobalState('contract')
  }
}

const connectWallet = async () => {
  try {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {

  }
}

const isWallectConnected = async () => {
  try {

    const accounts = await ethereum.request({ method: 'eth_accounts' })

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload()
    })

    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0].toLowerCase())
      await isWallectConnected()
    })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0].toLowerCase())
    } else {

      console.log('No accounts found.')
    }
  } catch (error) {

  }
}

const structuredNfts = (nfts) => {
  return nfts
    .map((nft) => ({
      id: Number(nft.id),
      owner: nft.owner.toLowerCase(),
      cost: window.web3.utils.fromWei(nft.cost),
      title: nft.title,
      description: nft.description,
      metadataURI: nft.metadataURI,
      timestamp: nft.timestamp,
    }))
    .reverse()
}

const getAllNFTs = async () => {
  try {


    const contract = await getEtheriumPublicContract()
    const nfts = await contract.methods.getAllNFTs().call()
    const transactions = await contract.methods.getAllTransactions().call()

    setGlobalState('nfts', structuredNfts(nfts))
    setGlobalState('transactions', structuredNfts(transactions))
  } catch (error) {

  }
}



// const structuredOwnedNfts = (nfts, account) => {
//   return nfts
//     .filter((nft) => nft.owner.toLowerCase() === account.toLowerCase())
//     .map((nft) => ({
//       id: Number(nft.id),
//       owner: nft.owner.toLowerCase(),
//       cost: window.web3.utils.fromWei(nft.cost),
//       title: nft.title,
//       description: nft.description,
//       metadataURI: nft.metadataURI,
//       timestamp: nft.timestamp,
//     }))
//     .reverse();
// };

// const getConnectedAccountNFTs = async () => {
//   try {
//     const contract = await getEtheriumPublicContract();
//     const nfts = await contract.methods.getAllNFTs().call();
//     const account = getGlobalState('connectedAccount')
//     const filteredNfts = structuredOwnedNfts (nfts, account);
//     setGlobalState('nfts', filteredNfts);
//   } catch (error) {
//     console.error(error);
//   }
// };



const structuredOwnedNfts = (mnfts, account) => {
  return mnfts
    .filter((mnft) => mnft.owner.toLowerCase() === account.toLowerCase())
    .map((mnft) => ({
      id: Number(mnft.id),
      owner: mnft.owner.toLowerCase(),
      cost: window.web3.utils.fromWei(mnft.cost),
      title: mnft.title,
      description: mnft.description,
      metadataURI: mnft.metadataURI,
      timestamp: mnft.timestamp,
    }))
    .reverse();
};

const getConnectedAccountNFTs = async () => {
  try {
    const contract = await getEtheriumPublicContract();
    const mnfts = await contract.methods.getAllNFTs().call();
    const account = getGlobalState('connectedAccount')
    const filteredNfts = structuredOwnedNfts(mnfts, account);
    console.log(filteredNfts); // Add this line to log the result
    setGlobalState('mnfts', filteredNfts);
    
  } catch (error) {
    console.error(error);
  }
};


const mintNFT = async ({ title, description, metadataURI, price }) => {
  try {
    price = window.web3.utils.toWei(price.toString(), 'ether')
    const contract = await getEtheriumContract()
    const account = getGlobalState('connectedAccount')
    const mintPrice = window.web3.utils.toWei('0.01', 'ether')

    await contract.methods
      .payToMint(title, description, metadataURI, price)
      .send({ from: account, value: mintPrice })

    return true

  } catch (error) {
    setAlert(JSON.stringify(error), 'red')
  }
}

const buyNFT = async ({ id, cost }) => {
  try {
    cost = window.web3.utils.toWei(cost.toString(), 'ether')
    const contract = await getEtheriumContract()
    const buyer = getGlobalState('connectedAccount')

    await contract.methods
      .payToBuy(Number(id))
      .send({ from: buyer, value: cost })

    return true
    
  } catch (error) {
    setAlert(JSON.stringify(error), 'red')
  }
}

const updateNFT = async ({ id, cost }) => {
  try {
    cost = window.web3.utils.toWei(cost.toString(), 'ether')
    const contract = await getEtheriumContract()
    const buyer = getGlobalState('connectedAccount')

    await contract.methods.changePrice(Number(id), cost).send({ from: buyer })
  } catch (error) {
    setAlert(JSON.stringify(error), 'red')
  }
}

// const reportError = (error) => {
//   setAlert(JSON.stringify(error), 'red')
//   throw new Error('No ethereum object.')
// }

export {
  getAllNFTs,
  connectWallet,
  getConnectedAccountNFTs,
  mintNFT,
  buyNFT,
  updateNFT,
  isWallectConnected,
}
