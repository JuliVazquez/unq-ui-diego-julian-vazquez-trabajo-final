import React from 'react';
import './CustomButton.css';

const CustomButton = ({ onClick, backgroundColor, size, textColor, children }) => {
  const buttonStyle = {
    backgroundColor,
    padding: size === 'small' ? '15px 30px' : '25px 45px',
    fontSize: size === 'small' ? '35px' : '45px',
    fontWeight: 'bold',
    color: textColor,
    cursor: 'pointer',
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
