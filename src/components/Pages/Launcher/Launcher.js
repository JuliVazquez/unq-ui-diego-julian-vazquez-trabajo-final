import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Launcher.css';
import ModalRules from '../../Molecules/ModalRules/ModalRules';

const Launcher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNewGame = () => {
    navigate('/playground');
  };

  return (
    <div className="launcher-container">
      <p>Launcher</p>
      <button className="button" onClick={handleNewGame}>Nuevo juego</button>
      <button className="button" onClick={handleOpenModal}>Reglas</button>
      {isModalOpen && <ModalRules onClose={handleCloseModal} />}
    </div>
  );
};

export default Launcher;
