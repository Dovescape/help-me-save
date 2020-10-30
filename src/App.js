import React from 'react';
import './App.css';
import Buttons from './Buttons';

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      bgColor: '',
      clickState: true
    }
  }

  buttonClick = (event) => {
    console.log(this.state.clickState);
    if (this.state.clickState === true) {
      this.setState({ bgColor: '#4CAf50'});
      this.setState({ clickState: false });
    } else {
      this.setState({ bgColor: '' });
      this.setState({ clickState: true });
    }
    
  }

  render(){
    return (
      <div>
        <Buttons 
          buttonClick={this.buttonClick}
          bgColor={this.state.bgColor}/>
      </div>
    )
  }
}

export default App;
