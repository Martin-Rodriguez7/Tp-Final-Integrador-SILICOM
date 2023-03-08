import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/views/Dashboard';
import Login from '../components/views/Login';
import PrivateRoute from './privateRoute';




function RoutesUser() {
  //<PrivateRoute exact path="/" component={Home} />
  //
  return (
   <BrowserRouter>
    <Routes>
    
    <Route exact path="/" element={<Login/>}/>

    <PrivateRoute exact path="/Dashboard" component={<Dashboard/>} />   
    </Routes>
    </BrowserRouter>

  );
}

export default RoutesUser;