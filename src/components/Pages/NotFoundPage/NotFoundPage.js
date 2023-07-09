import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFoundPage.css';
import images from "../../../assets/images/images";
import CustomButton from "../../Atoms/CustomButton/CutomButton";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <p>Lo siento, la página no existe.</p>
      <div className="image-container">
        <img src={images.notfound} alt="Not Found" />
      </div>
      <CustomButton
          onClick={handleNavigateHome}
          backgroundColor="white"
          size="small"
          textColor="black"
          >
          VOLVER
        </CustomButton>
    </div>
  );
};

export default NotFoundPage;
