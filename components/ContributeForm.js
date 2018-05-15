import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    // Allow for loading screens
    loading: false
  }

  onSubmit = async event => {
    event.preventDefault();

    const campaign = Campaign(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          // Use web3 to convert Ether values to Wei
          value: web3.utils.toWei(this.state.value, 'ether')
        });
        // Refresh page once a user has contributed etc
        Router.replaceRoute(`/campaigns/${this.props.address}`)
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    // Reset loading, value of contribution amount
    this.setState({ loading: false, value: '' })
  };

  render() {
    return (
      // Call to above onSubmit handler to prevent auto submission
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          value={this.state.value}
          onChange={event => this.setState({ value: event.target.value })}
          label="ether"
          labelPosition="right"
        />
      </Form.Field>

      <Message error header="Oops!" content={this.state.errorMessage} />
      <Button primary loading={this.state.loading}>
        Contribute!
      </Button>
    </Form>
    )
  }
}

export default ContributeForm;
