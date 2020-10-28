import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="header" id="header">
        <h1>Welcome! What would you like to save for?</h1>
        <div>
          <button className="button">Let's Save!</button>
        </div>
      </div>
    );
  }
}

export default App;
