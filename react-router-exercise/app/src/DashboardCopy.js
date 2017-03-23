import React, { Component } from 'react';
import { Link } from 'react-router';
import FormContainer from './containers/FormContainer';
import AddressList from './containers/AddressList';
// import '../styles/index.css';

class Dashboard extends Component{
  constructor(props){
    super(props);

    this.state = {addressList: []};

    this.addAddress = this.addAddress.bind(this);

  }

  addAddress(payload) {
    this.setState({ addressList: this.state.addressList.concat(payload)});
  }

  render(){
    return(
      <div id="wrapper">
        <div className="row">
          <div className="medium-6 medium-offset-3 small-12 columns">
            <FormContainer
              addAddress={this.addAddress}
            />
          </div>
          <div className="medium-6 medium-offset-3 small-12 columns">
            <AddressList
              list={this.state.addressList}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
