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
  
export default App;
