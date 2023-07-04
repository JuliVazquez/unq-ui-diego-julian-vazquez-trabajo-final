import React from "react";
import { useNavigate } from "react-router-dom";
import PlayerMenu from '../../Molecules/PlayerMenu/PlayerMenu'
import './Playground.css';


const Playground = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="playground-container">
    <PlayerMenu />
    <div className="playground-content">
      <h2>Playground</h2>
      <button onClick={handleNavigateHome}>End Game</button>
    </div>
  </div>
  );
};

export default Playground;

