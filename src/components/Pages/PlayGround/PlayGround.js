import React from "react";
import { useNavigate } from "react-router-dom";
import PlayerMenu from "../../Molecules/PlayerMenu/PlayerMenu";
import "./Playground.css";


const Playground = () => {
  const navigate = useNavigate();
  
  return (
    <div className="playground-container">
      <PlayerMenu />
    </div>
  );
};

export default Playground;
