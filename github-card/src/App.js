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
       this.setState({
         cardInfo: res.data
       })
       console.log(this.state.cardInfo)
    })  
  }

  render(){
    return(
      <div className='App'>
        <Card card={this.state.cardInfo}/>
      </div>
    )
  }
}

export default App;
