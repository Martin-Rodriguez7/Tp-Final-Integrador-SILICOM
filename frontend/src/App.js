import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import {Slideshow, Slide, TextoSlide} from './components/Slideshow'
import AlumnoAlta from './components/AltaAlumno';
import {BrowserRouter,Routes,Route} from "react-router-dom";


import img1 from './img/imgCarosel/1.jpg';
import img2 from './img/imgCarosel/2.jpg';
import img3 from './img/imgCarosel/3.jpg';
import img4 from './img/imgCarosel/4.jpg';
import Sidebar from './components/Sidebar';

function App() {
  
  return (
    <BrowserRouter>
    <Fragment>
    <Navbar/>
    <main className='app row'>
      
      <Sidebar></Sidebar>
     
        <Routes>
         
          <Route path="/AltaAlumno" element={<AlumnoAlta />}>
                       
          </Route>
          </Routes>
        
      </main>
    </Fragment>

    </BrowserRouter>
     
  );
}

export default App;
