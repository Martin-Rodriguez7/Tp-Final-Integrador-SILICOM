import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from '../components/views/Dashboard';

import { Navigate } from 'react-router-dom';


function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    try {
      if(token){
        return true
      }
     ;
    } catch (err) {
      return false;
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
            <Dashboard/>
        ) : (
          Navigate('/login')
        )
      }
    />
  );
}

export default PrivateRoute;