import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Launcher.css';
import ModalRules from '../../Molecules/ModalRules/ModalRules';
import backgroundImage from '../../../assets/images/background3.jpg';
import CustomButton from '../../Atoms/CustomButton/CutomButton';

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
    <div className="launcher-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="launcher-content">
        <p>PIEDRA, PAPEL, TIJERAS, LAGARTO, SPOCK</p>
      </div>
      <CustomButton onClick={handleNewGame} backgroundColor="white" size="large" textColor="black">
        Nuevo juego
      </CustomButton>
      <CustomButton onClick={handleOpenModal} backgroundColor="white" size="small" textColor="black">
        Reglas
      </CustomButton>
      {isModalOpen && <ModalRules onClose={handleCloseModal} />}
    </div>
  );
};

export default Launcher;
