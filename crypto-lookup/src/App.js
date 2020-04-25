import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  //have to start with a constructor using state to put the cryptos in an array
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
      }
  }

  //use componentdidmount method and axios to fetch the data from the API
  componentDidMount() {

      axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,XRP&tsyms=USD,EUR")
      .then(results => {
        const cryptos = results.data;
        this.setState({cryptos: cryptos});
      })
  }

//next use render to display the data on DOM
  render() {

      const { cryptos } = this.state;

//list and map out the cryptos and prices
      return (
        
        <div className="App">
          <div id="header">
            <h1>Crypto Lookup</h1>
          </div>

          <div id="searchbar">
            <input name="text" type="text" />
            <button>search</button>
          </div>

          <div id="header2">
            <h3>Today's Top 5!</h3>
          </div>

          {Object.keys(this.state.cryptos).map((key) => (
            <div id="crypto">
              <span className="left">{key}</span>
              <span className="right">{this.state.cryptos[key].USD}</span>
              <span className="middle">{this.state.cryptos[key].EUR}</span>
            </div>
            
          ))}
        </div>
    
      );

  }

}

export default App;
