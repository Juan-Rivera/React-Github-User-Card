import React from 'react';
import Card from './components/Card';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      cardInfo: []
    }
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
