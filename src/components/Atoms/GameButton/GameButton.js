import React from "react";


const GameButton = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default GameButton;
