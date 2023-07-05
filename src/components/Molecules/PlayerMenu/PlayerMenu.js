import React, { useState, useEffect } from "react";
import "./PlayerMenu.css";
import GameButton from "../../Atoms/GameButton/GameButton";
import piedraImg from "../../../assets/images/piedra.jpg";
import papelImg from "../../../assets/images/papel.jpg";
import tijeraImg from "../../../assets/images/tijera.jpg";
import lagartoImg from "../../../assets/images/lagarto.jpg";
import spockImg from "../../../assets/images/spock.jpg";
import backing from "../../../assets/images/backing-card.jpg";

const PlayerMenu = () => {
  const [selectedPlayerOption, setSelectedPlayerOption] = useState(backing);
  const [selectedIAOption, setSelectedIAOption] = useState(null);

  useEffect(() => {
    setSelectedIAOption(backing);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedPlayerOption(option);
  };

  const handleJugar = () => {
    if (selectedPlayerOption !== backing) {
      console.log("Botón 'Jugar' presionado");
      const iaOptions = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
      const randomIndex = Math.floor(Math.random() * iaOptions.length);
      const iaSelection = iaOptions[randomIndex];
      setSelectedIAOption(iaSelection);

      // Reiniciar los estados después de 5 segundos
      setTimeout(() => {
        setSelectedPlayerOption(backing);
        setSelectedIAOption(backing);
      }, 5000);
    } else {
      alert("Debes seleccionar una opción antes de jugar");
    }
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
        return backing;
    }
  };

  const playerOptionImage = getImageForOption(selectedPlayerOption);
  const iaOptionImage = selectedIAOption ? getImageForOption(selectedIAOption) : backing;

  return (
    <div className="general-container_left">
      <div className="side-menu-left">
        <div className="buttons-list-menu">
          <button
            className={`game-menu-item ${selectedPlayerOption === "Piedra" && "selected"}`}
            onClick={() => handleOptionClick("Piedra")}
          >
            Piedra
          </button>
          <button
            className={`game-menu-item ${selectedPlayerOption === "Papel" && "selected"}`}
            onClick={() => handleOptionClick("Papel")}
          >
            Papel
          </button>
          <button
            className={`game-menu-item ${selectedPlayerOption === "Tijera" && "selected"}`}
            onClick={() => handleOptionClick("Tijera")}
          >
            Tijera
          </button>
          <button
            className={`game-menu-item ${selectedPlayerOption === "Lagarto" && "selected"}`}
            onClick={() => handleOptionClick("Lagarto")}
          >
            Lagarto
          </button>
          <button
            className={`game-menu-item ${selectedPlayerOption === "Spock" &&"selected"}`}
            onClick={() => handleOptionClick("Spock")}
          >
            Spock
          </button>
        </div>

        <div className="playground-button">
          <GameButton onClick={handleJugar}>Jugar</GameButton>
        </div>

        {selectedPlayerOption && (
          <div className="option-image-container">
            <img src={playerOptionImage} alt={selectedPlayerOption} className="option-image" />
          </div>
        )}
      </div>

      <div className="side-menu-right">
        <div className="playground-button">
          <GameButton onClick={handleJugar}>Jugar</GameButton>
        </div>

        {selectedIAOption && (
          <div className="option-image-container">
            <img src={iaOptionImage} alt={selectedIAOption} className="option-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerMenu;
