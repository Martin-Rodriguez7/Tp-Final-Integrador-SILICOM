import React, {Fragment} from 'react';
import Navbar from '../../components/Layout/Navbar'
import Sidebar from '../../components/Layout/Sidebar'
import NavPage from '../NavPage';

function Dashboard() {


  return (
    
    <Fragment>
    
    <Navbar />

      <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
        <Sidebar />
        </div>
        <div className="col-md-8">
        <NavPage/>
        </div>
      </div>
    </div>
      
    </Fragment> 
    
  );
}

export default Dashboard;
