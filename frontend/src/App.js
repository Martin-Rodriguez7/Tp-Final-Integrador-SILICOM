import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Layout/Navbar'
import {Slideshow, Slide, TextoSlide} from './components/Layout/Slideshow'
import AlumnoAlta from './components/AltaAlumno';
import {BrowserRouter,Routes,Route} from "react-router-dom";


import img1 from './img/imgCarosel/1.jpg';
import img2 from './img/imgCarosel/2.jpg';
import img3 from './img/imgCarosel/3.jpg';
import img4 from './img/imgCarosel/4.jpg';
import Sidebar from './components/Layout/Sidebar';
import LoginForm from './components/views/Login';
import RoutesUser from './routes/RoutesUser';
import Dashboard from './components/views/Dashboard';
import Login from './components/views/Login';
function App() {
  
  return (
    
    <BrowserRouter>

      <Dashboard></Dashboard>
       <Routes>
        
        <Route path="/AltaAlumno" element={<AlumnoAlta/>}></Route>
        
         <Route path="/login" element={<Login />}></Route>

         </Routes>
       
   </BrowserRouter>
   
  );
}

export default App;
