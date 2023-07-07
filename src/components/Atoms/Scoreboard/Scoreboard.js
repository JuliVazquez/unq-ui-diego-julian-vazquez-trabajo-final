import React from "react";

const Scoreboard = ({ playerWins, iaWins }) => {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <h2>Marcador</h2>
        <div className="score">
          <div>
            <span>Jugador:</span>
            <span>{playerWins}</span>
          </div>
          <div>
            <span>IA:</span>
            <span>{iaWins}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
