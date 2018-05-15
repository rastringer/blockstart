import Web3 from 'web3'

let web3;

// Check if Metamask is available and whether we are running in the browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is running
    // Configure the web3 injected by Metamask
    web3 = new Web3(window.web3.currentProvider);
} else {
  // We're on the server OR the user isn't running Metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/YviVyR4KqepTKV4v78dE'
  );

  web3 = new Web3(provider);
}

export default web3;
