import React, {Fragment, useState, useEffect} from 'react';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Dashboard from './components/views/Dashboard';
import Login from './components/views/Login';
function App() {
  
  return (
    
    <BrowserRouter>

       <Routes>
        
         <Route path="/" element={<Dashboard />}></Route>
         <Route path="/Dashboard" element={<Dashboard />}></Route>
         <Route path="/login" element={<Login />}></Route>

         </Routes>

   </BrowserRouter>
   
  );
}

export default App;
