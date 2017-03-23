import React, { Component } from 'react';
import Form from '../components/Form';
import '../styles/FormContainer.css';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payload: {
        "first-name": '',
        "last-name": '',
        "address": '',
        "city": '',
        "state": '',
        "zip-code": '',
        "phone-number": '',
        "email": ''
      },
      errors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleChange(event) {
    let oldPayload = this.state.payload;
    let newPayload = {};
    Object.keys(oldPayload).forEach(key => {
      if (key === event.target.id) {
        newPayload[key] = event.target.value;
      } else {
        newPayload[key] = oldPayload[key];
      }
    });
    this.setState({payload: newPayload});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateAddress()) {
      this.props.addAddress(this.state.payload);
      this.handleClearForm(event);
    }
  }

  validateAddress() {
    debugger;

    return true;
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      payload: {
        "first-name": '',
        "last-name": '',
        "address": '',
        "city": '',
        "state": '',
        "zip-code": '',
        "phone-number": '',
        "email": ''
      },
      errors: []
    });
  }

  render() {
    let keys = Object.keys(this.state.payload);
    let values = Object.values(this.state.payload);
    let allForms = keys.map((key, index) => {
      return (
        <Form
          key={index}
          handleChange={this.handleChange}
          value={values[index]}
          label={key}
        />
      )
    })
    return (
      <form className="callout" id="shipping-address-form" onSubmit={this.handleFormSubmit}>
        <h1>Shipping Address</h1>
        {allForms}

        <div className="button-group">
          <input type="submit" className="button" value="Submit "/>
          <button className="button" onClick={this.handleClearForm}>Clear</button>
        </div>
      </form>
    )
  }
}

export default FormContainer;
