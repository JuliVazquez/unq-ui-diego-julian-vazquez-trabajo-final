import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div>
      <p> Lo siento, la página no existe.</p>
      <button onClick={handleNavigateHome}>
        <span>Volver</span>
      </button>
    </div>
  );
};

export default NotFoundPage;

