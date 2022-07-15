import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
