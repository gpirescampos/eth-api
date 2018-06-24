import React, { Component } from 'react'
import ControllerContract from '../build/contracts/Controller.json'
import ObjectContract from '../build/contracts/Object.json'
import RouterContract from '../build/contracts/Router.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/bootstrap/bootstrap.css'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.addController = this.addController.bind(this);
    this.state = {
      endpointList: [],
      web3: null,
      value: '',
      account: null
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
      this.state.web3.eth.getAccounts((error, accounts) => {
        return this.setState({
          account: accounts[0]
        })
      })
      // Instantiate contract once web3 provided.
      this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }
  
  async addController() {
    const contract = require('truffle-contract')
    const routerContract = contract(RouterContract)
    routerContract.setProvider(this.state.web3.currentProvider)

    const routerInstance = await routerContract.deployed()
    console.log(routerInstance)
    await routerInstance.addController(this.state.value.toString(), {from: this.state.account, gas:5000000})
    window.location.reload();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async instantiateContract() {
    const contract = require('truffle-contract')
    const routerContract = contract(RouterContract)
    routerContract.setProvider(this.state.web3.currentProvider)

    const routerInstance = await routerContract.deployed()
    const controllersCount = await routerInstance.controllersCount.call()

    const tempArray = []
    if (controllersCount.toNumber() > 0) {
      for (let index = 0; index < controllersCount.toNumber(); index++) {
        tempArray.push(await routerInstance.controllers(index))
      }
    }
    return this.setState({
      endpointList: tempArray
    })
  }

  render() {
    return (
        <main className="container">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Solidity API</h1>
                <h2>Simulating a simple routing scheme with Ethereum smart contracts</h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>Number of controllers: {this.state.endpointList.length}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">   
                <form className="form-inline" onSubmit={this.addController}>
                  <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange} />
                  &nbsp;
                  <button className="btn btn-primary btn-sm" type="submit">Add controller</button>
                </form>
              </div>
            </div>
          </div>
        </main>
    );
  }
}

export default App
