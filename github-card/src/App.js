import React from 'react';
import axios from 'axios';
import Card from './components/Card';

import './App.css';

const url = 'https://api.github.com/users/Juan-Rivera';
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cardInfo: []
    }
  }
  componentDidMount() {
    axios
    .get(url)
    .then(res => {
       console.log(res.data)
    })

  }
  render(){
    return(
      <div className='App'>
      This is on the screen :)
      <Card />
      </div>
    )
  }
}

export default App;
