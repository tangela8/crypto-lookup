import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
//have to start with a constructor using state to put the items in an array
class App extends Component {

  constructor(props) {

      super(props);

      this.state = {
          cryptos: []
      }

  }

  //use componentdidmount method to fetch the data from the API
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

//use ul to creat a list and map out the items
      return (
        <div className="App">
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
