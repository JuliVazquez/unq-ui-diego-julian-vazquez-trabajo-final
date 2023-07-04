import React, { useState } from 'react';
import './Launcher.css';
import ModalRules from '../../Molecules/ModalRules';

const Launcher = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="launcher-container">
      <p>Launcher</p>
      <button className="button">Nuevo juego</button>
      <button className="button" onClick={handleOpenModal}>Reglas</button>
      {isModalOpen && <ModalRules onClose={handleCloseModal} />}
    </div>
  );
};


export default Launcher;
