import React from 'react';
import './Button.css';

class Button extends React.Component {
  constructor() {
    super()
    this.state ={
      bgColor: '',
      clickState: false
    }
  }

  buttonClick = () => {
    this.setState({
      clickState: this.state.clickState = !this.state.clickState
    });
    console.log(this.state.clickState);
    if (this.state.clickState === true) {
      this.setState({ bgColor: '#4CAf50'});
    } else {
      this.setState({ bgColor: '' });
    }
    
  }

  render() {
    return (
      <div>
        <button
          className="button"
          style={{backgroundColor: this.state.bgColor}}
          onClick={this.buttonClick}>{ this.props.text }</button>
      </div>
    )
  }
}


export default Button;