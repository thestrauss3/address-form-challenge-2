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
      <div id="header">
        this is my header
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard;
