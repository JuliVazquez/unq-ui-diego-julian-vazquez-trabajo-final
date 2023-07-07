import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameButton from "../../Atoms/GameButton/GameButton";
import Scoreboard from "../../Atoms/Scoreboard/Scoreboard"
import piedraImg from "../../../assets/images/piedra.jpg";
import papelImg from "../../../assets/images/papel.jpg";
import tijeraImg from "../../../assets/images/tijera.jpg";
import lagartoImg from "../../../assets/images/lagarto.jpg";
import spockImg from "../../../assets/images/spock.jpg";
import backing from "../../../assets/images/backing-card.jpg";
import "./Playground.css"

const Playground = () => {
  const [selectedPlayerOption, setSelectedPlayerOption] = useState(backing);
  const [selectedIAOption, setSelectedIAOption] = useState(null);
  const [playerWins, setPlayerWins] = useState(0);
  const [iaWins, setIaWins] = useState(0);

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

      // Verificar el resultado del juego y actualizar los marcadores
      const result = getResult(selectedPlayerOption, iaSelection);
      if (result === "player") {
        setPlayerWins((prevWins) => prevWins + 1);
      } else if (result === "ia") {
        setIaWins((prevWins) => prevWins + 1);
      }

      // Reiniciar los estados después de 5 segundos
      setTimeout(() => {
        setSelectedPlayerOption(backing);
        setSelectedIAOption(backing);
      }, 5000);
    } else {
      alert("Debes seleccionar una opción antes de jugar");
    }
  };

  const getResult = (playerOption, iaOption) => {
    // Implementa tu lógica para determinar el resultado del juego (ejemplo)
    if (
      (playerOption === "Piedra" && (iaOption === "Tijera" || iaOption === "Lagarto")) ||
      (playerOption === "Papel" && (iaOption === "Piedra" || iaOption === "Spock")) ||
      (playerOption === "Tijera" && (iaOption === "Papel" || iaOption === "Lagarto")) ||
      (playerOption === "Lagarto" && (iaOption === "Papel" || iaOption === "Spock")) ||
      (playerOption === "Spock" && (iaOption === "Piedra" || iaOption === "Tijera"))
    ) {
      return "player";
    } else if (playerOption === iaOption) {
      return "draw";
    } else {
      return "ia";
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
    <div classname=".playground-container">
      
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

        <div className="center-container">
          <Scoreboard playerWins={playerWins} iaWins={iaWins} />
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
    </div>
  );
};

export default Playground;
