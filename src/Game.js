import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Launcher from "./components/Pages/Launcher/Launcher";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";
import Playground from "./components/Pages/Playground/Playground";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Launcher />} />
        <Route path="/playground" element={<Playground/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
