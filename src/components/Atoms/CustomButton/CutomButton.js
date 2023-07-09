import React, { useState } from 'react';
import './CustomButton.css';

const CustomButton = ({ onClick, backgroundColor, size, textColor, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    backgroundColor,
    padding: size === 'small' ? '15px 30px' : '25px 45px',
    fontSize: size === 'small' ? '35px' : '45px',
    fontWeight: 'bold',
    color: textColor,
    cursor: 'pointer',
    backgroundColor: isHovered ? 'rgb(240, 129, 3)' : backgroundColor,
    color: isHovered ? 'white' : textColor,
  };

  return (
    <button
      className="custom-button"
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default CustomButton;
