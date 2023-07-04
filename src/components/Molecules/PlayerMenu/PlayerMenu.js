import React, { useState } from "react";
import "./PlayerMenu.css";

const PlayerMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(option)
  };

  return (
    <div className="general-container">
      <div className="side-menu">
        <div className="buttons-list-menu">
          <button
            className={`game-menu-item ${selectedOption === "Piedra" && "selected"}`}
            onClick={() => handleOptionClick("Piedra")}
          >
            Piedra
          </button>
          <button
            className={`game-menu-item ${selectedOption === "Papel" && "selected"}`}
            onClick={() => handleOptionClick("Papel")}
          >
            Papel
          </button>
          <button
            className={`game-menu-item ${selectedOption === "Tijera" && "selected"}`}
            onClick={() => handleOptionClick("Tijera")}
          >
            Tijera
          </button>
          <button
            className={`game-menu-item ${selectedOption === "Lagarto" && "selected"}`}
            onClick={() => handleOptionClick("Lagarto")}
          >
            Lagarto
          </button>
          <button
            className={`game-menu-item ${selectedOption === "Spock" && "selected"}`}
            onClick={() => handleOptionClick("Spock")}
          >
            Spock
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerMenu;
