import React from 'react';
import './Buttons.css';

const Buttons = ({ buttonClick, bgColor }) => {
  return (
    <div>
      <button className="button" onClick={buttonClick} style={{backgroundColor:bgColor}}>BUTTON 1</button>
    </div>
  )
}

export default Buttons;