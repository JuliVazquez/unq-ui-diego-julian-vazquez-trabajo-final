import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from '../../Atoms/CustomButton/CutomButton'
import MoveOptionButton from '../../Atoms/MoveOptionButton/MoveOptionButton'

import GameButton from "../../Atoms/GameButton/GameButton";
import Scoreboard from "../../Atoms/Scoreboard/Scoreboard"


import images from "../../../assets/images/images";

import "./Playground.css"

const Playground = () => {
  const navigate = useNavigate();
  const [selectedPlayerOption, setSelectedPlayerOption] = useState(images.backing);
  const [selectedIAOption, setSelectedIAOption] = useState(null);
  const [playerWins, setPlayerWins] = useState(0);
  const [iaWins, setIaWins] = useState(0);

  useEffect(() => {
    setSelectedIAOption(images.backing);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedPlayerOption(option);
  };

  const handleJugar = () => {
    if (selectedPlayerOption !== images.backing) {
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
        setSelectedPlayerOption(images.backing);
        setSelectedIAOption(images.backing);
      }, 2000);
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
        return images.piedraImg;
      case "Papel":
        return images.papelImg;
      case "Tijera":
        return images.tijeraImg;
      case "Lagarto":
        return images.lagartoImg;
      case "Spock":
        return images.spockImg;
      default:
        return images.backing;
    }
  };

  const terminarPartida = () => {
    // Realizar el recuento y determinar el ganador
    const ganador = playerWins > iaWins ? "Jugador" : "IA";
    
    // Mostrar mensaje de alerta con el ganador
    alert(`El ganador es: ${ganador}`);
    
    // Navegar hacia el launcher
    navigate('/');
  };
  
  const playerOptionImage = getImageForOption(selectedPlayerOption);
  const iaOptionImage = selectedIAOption ? getImageForOption(selectedIAOption) : images.backing;

  return (

      
    <div className="general-container_left">




      <div className="side-menu-left">

        <div className="buttons-list-menu">
          <MoveOptionButton
            option="Piedra"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
          />
          <MoveOptionButton
            option="Papel"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
          />
          <MoveOptionButton
            option="Tijera"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
          />
          <MoveOptionButton
            option="Lagarto"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
          />
          <MoveOptionButton
            option="Spock"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
          />
        </div>

        <div className="playground-button">
          {/* <GameButton onClick={handleJugar}>Jugar</GameButton> */}
          <CustomButton onClick={handleJugar} backgroundColor="white" size="large" textColor="black">
          JUGAR!
          </CustomButton>
        </div>

      


        {selectedPlayerOption && (
          <div className="option-image-container">
            <img src={playerOptionImage} alt={selectedPlayerOption} className="option-image" />
          </div>
        )}
      </div>

      <div className="center-container">
        <div className="content-container">
          <Scoreboard playerWins={playerWins} iaWins={iaWins} />
        </div>

        <div className="playground-button-terminar">
          <CustomButton onClick={terminarPartida} backgroundColor="white" size="small" textColor="black">
            ABANDONAR
          </CustomButton>
        </div>
      </div>

      
      <div className="side-menu-right">

        {selectedIAOption && (
          <div className="option-image-container">
            <img src={iaOptionImage} alt={selectedIAOption} className="option-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Playground;
