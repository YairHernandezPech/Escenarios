// import { Fragment, useState } from "react";
//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Formulario from './Components/inicio/form';
import Escenario1 from './Components/Scenary1/Escenario1';
import Escenario3 from './Components/Scenary3/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />}></Route>
        <Route path="/escenario1" element={<Escenario1 />}></Route>

        <Route path="/escenario3" element={<Escenario3 />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
