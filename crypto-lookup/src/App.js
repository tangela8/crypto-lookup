import React from 'react';

import './App.css';

//have to start with a constructor using state to put the items in an array
class App extends React.Component {

  constructor() {
      super();

      this.state = {
          items: []
      }

  }

  //use componentdidmount method to fetch the data from the API
  componentDidMount() {

      fetch("https://www.worldcoinindex.com/apiservice/v2getmarkets?key={vjYTfk0YgkCiouojpcQkmOM2CUF0Og}&fiat=btc")
          .then(results => results.json())
          .then(json => {
              this.setState({
                  items: json,
                  isLoaded: true, //use isloaded when true
              })
          });

  }



export default App;
