import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout'
import { Link } from '../routes';

// Use factory instance to get list of addresses
class CampaignIndex extends Component {
  // Next's version of componentDidMount renders the component on the server
  // 'static' denotes a class function (no need to create instance)
  static getInitialProps = async () => {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {  campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: (
          // Backticks for dynamic routing/es6
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>),
        fluid: true
      }
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Open Campaigns</h3>
        <Link route='/campaigns/new'>
          <a>
            <Button
              floated='right'
              content='Create Campaign'
              icon='add circle'
              primary
            />
          </a>
        </Link>

        {this.renderCampaigns()}
      </Layout>
    );
  }
}

export default CampaignIndex;
