// This file makes it easier to access the deployed instance from elsewhere in the application

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

// create contract instance deployed to specific address
const factory = new web3.eth.Contract(
  // Contract ABI
  JSON.parse(CampaignFactory.interface),
  // Address to which contract deployed
  '0x4415AAFA3BCB1Bb231928A320FdE0173c614D73e'
);

export default factory;
