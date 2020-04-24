import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import './App.css';
//have to start with a constructor using state to put the cryptos in an array

function Title() {
  return (
    <div className="Title">
      
    </div>
  )
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
      }
  }

  //use componentdidmount method and axios to fetch the data from the API
  componentDidMount() {

      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        this.setState({cryptos: cryptos});
      })
  }

//next use render to display the data on DOM
  render() {

      const { cryptos } = this.state;

//list and map out the cryptos
      return (
        
        <div className="App">

        <h1>Welcome to Crypto Lookup</h1>

        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{this.state.cryptos[key].USD}</span>
          </div>
        ))}
      </div>
    
      );

  }

}

export default App;
