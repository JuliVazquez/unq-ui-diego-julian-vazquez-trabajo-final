import React, { useState } from "react";
import "./PlayerMenu.css";
import GameButton from "../../Atoms/GameButton/GameButton";
import piedraImg from "../../../assets/images/piedra.jpg"
import papelImg from "../../../assets/images/papel.jpg";
import tijeraImg from "../../../assets/images/tijera.jpg";
import lagartoImg from "../../../assets/images/lagarto.jpg";
import spockImg from "../../../assets/images/spock.jpg";

const PlayerMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(option);
  };

  const handleJugar = () => {
    // Lógica para manejar el evento al presionar el botón "Jugar"
    console.log("Botón 'Jugar' presionado");
    // Aquí puedes agregar cualquier otra lógica que desees ejecutar al presionar el botón
  };

  const getImageForOption = (option) => {
    switch (option) {
      case "Piedra":
        return piedraImg;
      case "Papel":
        return papelImg;
      case "Tijera":
        return tijeraImg;
      case "Lagarto":
        return lagartoImg;
      case "Spock":
        return spockImg;
      default:
        return null;
    }
  };

  const selectedOptionImage = getImageForOption(selectedOption);

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

        <div className="playground-button">
          <GameButton onClick={handleJugar}>Jugar</GameButton>
        </div>
        
        {selectedOption && (
          <div className="option-image-container">
            <img src={selectedOptionImage} alt={selectedOption} className="option-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerMenu;
