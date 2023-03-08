import React, {Fragment, useState, useEffect} from 'react';
import Navbar from '../../components/Layout/Navbar'
import Sidebar from '../../components/Layout/Sidebar'


import AlumnoAlta from '../AltaAlumno';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function Dashboard() {
  
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

export default Dashboard;
