// import { Fragment, useState } from "react";
//import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Formulario from './Components/inicio/form';
import AppScenary1 from './Components/Scenary1/index';
import Escenario3 from './Components/Scenary3/index';
import Escenario4 from './Components/Scenary4/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />}></Route>
        <Route path="/escenario1" element={<AppScenary1 />}></Route>

        <Route path="/escenario3" element={<Escenario3 />}></Route>
        <Route path="/escenario4" element={<Escenario4 />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
