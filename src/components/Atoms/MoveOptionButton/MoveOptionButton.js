import React from "react";
import './MoveOptionButton.css'

const MoveOptionButton = ({ option, selectedOption, onClick }) => {
  return (
    <button
      className={`game-menu-item ${selectedOption === option ? "selected" : ""}`}
      onClick={() => onClick(option)}
    >
      {option}
    </button>
  );
};

export default MoveOptionButton;
