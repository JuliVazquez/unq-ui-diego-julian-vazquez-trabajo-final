import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Atoms/CustomButton/CutomButton";
import MoveOptionButton from "../../Atoms/MoveOptionButton/MoveOptionButton";
import Scoreboard from "../../Atoms/Scoreboard/Scoreboard";
import images from "../../../assets/images/images";
import "./Playground.css";

const Playground = () => {
  const navigate = useNavigate();
  const [selectedPlayerOption, setSelectedPlayerOption] = useState(images.backing);
  const [selectedIAOption, setSelectedIAOption] = useState(null);
  const [playerWins, setPlayerWins] = useState(0);
  const [iaWins, setIaWins] = useState(0);
  const [roundWinner, setRoundWinner] = useState(null);
  const [showWinner, setShowWinner] = useState(false);
  const [disableInteraction, setDisableInteraction] = useState(false);
  const [showTerminarButton, setShowTerminarButton] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setSelectedIAOption(images.backing);
  }, []);

  const handleOptionClick = (option) => {
    if (!disableInteraction) {
      setSelectedPlayerOption(option);
    }
  };

  const handleJugar = () => {
    if(!disableInteraction){ 
      if (selectedPlayerOption !== images.backing) {
        setShowError(false);
        setShowTerminarButton(false);
        const iaOptions = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
        const randomIndex = Math.floor(Math.random() * iaOptions.length);
        const iaSelection = iaOptions[randomIndex];
        setSelectedIAOption(iaSelection);
        
        const result = getResult(selectedPlayerOption, iaSelection);
        if (result === "player") {
          setPlayerWins((prevWins) => prevWins + 1);
          setRoundWinner("Jugador");
        } else if (result === "ia") {
          setIaWins((prevWins) => prevWins + 1);
          setRoundWinner("IA");
        } else {
          setRoundWinner("Empate");
        }
        setTimeout(() => {
          setSelectedPlayerOption(images.backing);
          setSelectedIAOption(images.backing);
          setRoundWinner(null);
          setShowWinner(false);
          setShowTerminarButton(true);
        }, 2000);
      } else {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 2000);
      }
    }
  };

  const getResult = (playerOption, iaOption) => {
    if (
      (playerOption === "Piedra" && (iaOption === "Tijera" || iaOption === "Lagarto")) ||
      (playerOption === "Papel" && (iaOption === "Piedra" || iaOption === "Spock")) ||
      (playerOption === "Tijera" && (iaOption === "Papel" || iaOption === "Lagarto")) ||
      (playerOption === "Lagarto" && (iaOption === "Papel" || iaOption === "Spock")) ||
      (playerOption === "Spock" && (iaOption === "Piedra" || iaOption === "Tijera"))
    ) {
      return "player";
    } else if (playerOption === iaOption) {
      return "empate";
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
    setShowError(false);
    setShowWinner(true);
    setDisableInteraction(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const playerOptionImage = getImageForOption(selectedPlayerOption);
  const iaOptionImage = selectedIAOption ? getImageForOption(selectedIAOption) : images.backing;

  return (
    <div className={`general-container_left ${disableInteraction ? "disable-interaction" : ""}`}>
      <div className="side-menu-left">
        <div className="buttons-list-menu">
          <MoveOptionButton
            option="Piedra"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
            disabled={disableInteraction}
          />
          <MoveOptionButton
            option="Papel"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
            disabled={disableInteraction}
          />
          <MoveOptionButton
            option="Tijera"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
            disabled={disableInteraction}
          />
          <MoveOptionButton
            option="Lagarto"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
            disabled={disableInteraction}
          />
          <MoveOptionButton
            option="Spock"
            selectedOption={selectedPlayerOption}
            onClick={handleOptionClick}
            disabled={disableInteraction}
          />
        </div>

        <div className="playground-button">
          <CustomButton
            onClick={handleJugar}
            backgroundColor="white"
            size="large"
            textColor="black"
            disabled={disableInteraction}
          >
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

          {roundWinner && (
            <div className={`round-winner ${roundWinner === "Empate" ? "white-text" : ""}`}>
              {roundWinner === "Empate" ? "Empate" : <span className="orange-text">{roundWinner}</span>}
              {roundWinner !== "Empate" && " ha ganado esta mano"}
            </div>
          )}

          {showError && (
            <div className="error-message">
              <p>Debes seleccionar una opción antes de jugar</p>
            </div>
          )}
      
        </div>

        <div className="playground-button-terminar">
        {showTerminarButton && ( 
          <CustomButton
            onClick={terminarPartida}
            backgroundColor="white"
            size="small"
            textColor="black"
            disabled={disableInteraction}
          >
            Terminar
          </CustomButton>
        )}
      </div>
    </div>

    <div className="side-menu-right">
      {selectedIAOption && (
        <div className="option-image-container">
          <img src={images.evilIA} alt="Nueva Imagen" className="option-image" />
        </div>
      )}

      {selectedIAOption && (
        <div className="option-image-container">
          <img src={iaOptionImage} alt={selectedIAOption} className="option-image" />
        </div>
      )}
    </div>

    {showWinner && (
      <div className="winner-message">
        <div className="winner-message-content">
          El ganador es: <span className="orange-text">{playerWins > iaWins ? "Jugador" : "IA"}</span>
          <div className="loading-image-container">
            <img src={images.loading} alt="Loading" className="loading-image" />
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Playground;
