import React from "react";
import "./Scoreboard.css"

const Scoreboard = ({ playerWins, iaWins }) => {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="score">
          <div className="score-row">
            <div className="score-label">Jugador:</div>
            <div className="score-value">{playerWins}</div>
          </div>
          <div className="score-row">
            <div className="score-label">IA:</div>
            <div className="score-value">{iaWins}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;

