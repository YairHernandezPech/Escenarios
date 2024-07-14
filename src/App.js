// import { Fragment, useState } from "react";
//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Formulario from './Components/inicio/form';
import AppScenary1 from './Components/Escenarios/Scenary1/index';
import AppScenary2 from './Components/Escenarios/Scenary2/index';
import Escenario3 from './Components/Escenarios/Scenary3/index';
import Escenario4 from './Components/Escenarios/Scenary4/index';
import Organizador from './Components/Organizador/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />}></Route>
        <Route path="/escenario1" element={<AppScenary1 />}></Route>
        <Route path="/escenario2" element={<AppScenary2 />}></Route>
        <Route path="/escenario3" element={<Escenario3 />}></Route>
        <Route path="/escenario4" element={<Escenario4 />}></Route>
        <Route path="/organizador" element={<Organizador />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
