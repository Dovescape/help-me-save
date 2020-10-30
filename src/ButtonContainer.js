import React from 'react';
import './ButtonContainer.css';
import Button from './Button';

const ButtonContainer = () => {
  return (
    <div>
      <div className="pageHeader">
        <h1>Welcome! What would you like to save for?</h1>
      </div>
      <div className="container">
        <div className="containerbuttons">
          <Button text="Travel"/>
          <Button text="Car"/>
          <Button text="House" />
          <Button text="Retirement" />
          <Button text="Boat" />
          <Button text="Gift" />
          <Button text="Pet" />
          <Button text="Electronic" />
        </div>
      </div>
    </div>
  )
}

export default ButtonContainer;