const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  // enter your mnemonic from metamask account
  'chief project quick wasp taste secret squirrel journey swamp luxury mention immune',
  // enter link with code infura will email when you sign up
  'https://rinkeby.infura.io/YviVyR4KqepTKV4v78dE'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  // lowercase web3 for instance
  // interface is the ABI
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};

deploy();

// deployed to address 0x793C2Fc474566e7597acB26cDcd9dC21F4f962bc
