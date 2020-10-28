import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div>
      <div>
        <h1 class="header">Welcome! What would you like to save for?</h1>
      </div>
      <div className="savebuttons1">
        <button className="button travel">Travel</button>
        <button className="button car">Car</button>
        <button className="button toy">Toy/Electronic</button>
        <button className="button boat">Boat</button>
      </div>
      <div className="savebuttons2">
        <button className="button gift">Gift</button>
        <button className="button house">House</button>
        <button className="button pet">Pet</button>
        <button className="button retire">Retirement</button>
      </div>
      <div className="go">
        <button className="button">Go!</button>
      </div>
    </div>
  );
}

export default Card;