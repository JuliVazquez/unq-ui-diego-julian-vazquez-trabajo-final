import React, { useRef, useEffect } from 'react';
import './ModalRules.css';
import CustomButton from '../../Atoms/CustomButton/CutomButton'
import rulesImage from "../../../assets/images/rules.png"

const ModalRules = ({ onClose }) => {
  const modalRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} ref={modalRef}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Cómo jugar?</h2>
        <p>Piedra, Papel, Tijeras, Lagarto, Spock es una expansón del clásico Piedra, Papel o Tijeras. Creado por Sam Kass, y popularizado por Sheldon Cooper en la serie The Big Bang Theory, 
          pone dos nuevas variantes a la triada original: un Largarto y al primer oficial Spock, de la serie Star Trek.</p>
        <p>El sistema es el siguiente:</p>
        <img src={rulesImage} alt="Reglas del juego" />
        <p>Tijera corta a Papel</p>
        <p>Papel tapa a Piedra</p>
        <p>Piedra aplasta a Lagarto</p>
        <p>Lagarto envenena a Spock</p>
        <p>Spock rompe a Tijera</p>
        <p>Tijera decapita a Lagarto</p>
        <p>Lagarto devora a Papel</p>
        <p>Papel desautoriza a Spock</p>
        <p>Spock vaporiza a Piedra</p>
        <p>Piedra aplasta a Tijera</p>
      </div>
    </div>
  );
};

export default ModalRules;
