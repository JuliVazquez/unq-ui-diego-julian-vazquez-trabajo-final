import React from "react";
import "./MoveOptionButton.css"; // Importa el archivo CSS

const MoveOptionButton = ({ option, selectedOption, onClick }) => {
  return (
    <button
      className={`game-menu-item ${selectedOption === option && "selected"}`}
      onClick={() => onClick(option)}
    >
      {option}
    </button>
  );
};

export default MoveOptionButton;
