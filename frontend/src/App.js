import React, {Fragment, useState, useEffect} from 'react';
import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AlumnoAlta from './components/AltaAlumno';

import Dashboard from './components/views/Dashboard';
import Login from './components/views/Login';
import Sidebar from './components/Layout/Sidebar';
function App() {

  return (
    <BrowserRouter>
       <Routes>
       <Route path="/*" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
       </Routes>
    </BrowserRouter>
  

     
   
   
  );
}

export default App;
