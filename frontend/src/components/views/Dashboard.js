import React, {Fragment} from 'react';
import Navbar from '../../components/Layout/Navbar'
import Sidebar from '../../components/Layout/Sidebar'


import AlumnoAlta from '../AltaAlumno';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Login';


function Dashboard() {
  
  return (
   
     <Fragment>
    <Navbar/>
    <main className='app row'>

      <Sidebar></Sidebar>
     
        <Routes>
          <Route path="/AltaAlumno" element={<AlumnoAlta/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          </Routes>
        
      </main>
    </Fragment>

     
  );
}

export default Dashboard;
