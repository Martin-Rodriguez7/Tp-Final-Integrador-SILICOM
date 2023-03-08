import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/views/Dashboard';





function RoutesUser() {
  //<PrivateRoute exact path="/" component={Home} />
  //
  return (
   <BrowserRouter>
    <Routes>
  
    <Route exact path="/Dashboard" component={<Dashboard/>} />   
    </Routes>
    </BrowserRouter>

  );
}

export default RoutesUser;