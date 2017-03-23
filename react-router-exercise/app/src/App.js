import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Dashboard from './Dashboard'
import FormContainer from './containers/FormContainer'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }

    this.addAddress = this.addAddress.bind(this)
  }

  addAddress(payload) {
    this.setState({ addressList: this.state.addressList.concat(payload)});
  }

  render() {
    return(
      <div>
        <Router history={browserHistory} >
          <Route path="/" component={Dashboard}>
            <IndexRoute component={FormContainer} />

          </Route>
        </Router>
      </div>
    )
  }
}



export default App;
