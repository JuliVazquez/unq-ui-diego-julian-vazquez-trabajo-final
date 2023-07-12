import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Launcher from "./components/Pages/Launcher/Launcher";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";
import GameTable from "./components/Pages/GameTable/GameTable";
import "./Game.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launcher />} />
        <Route path="/playground" element={<GameTable/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
