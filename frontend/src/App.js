import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import Form from './components/Form'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AlumnoAlta from './components/AltaAlumno';

function App() {

  
  return (
    <BrowserRouter>
    <Fragment>
      <Navbar/>
      <main className='content'>
      
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
