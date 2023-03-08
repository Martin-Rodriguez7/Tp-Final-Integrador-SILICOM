import React, { Fragment } from 'react';
import "../../Bootstrap/bootstrap.min.css";
import "../../css/estilos.css";
import { Link} from 'react-router-dom';
import "../AltaAlumno.js";
import jwt_decode from "jwt-decode";

function Sidebar() {
  let userRole;
const token = localStorage.getItem('token');
if(token){
  const decodedToken = jwt_decode(token);
  userRole = decodedToken.role;
}


  return (
    <>
      <div id="sidebar-container" className=" d-flex sidebar bg-primary shadow-lg d-none d-sm-inline ps-4 pe-4 pt-2">  
      <div className="menu">
          <ul className="nav mt-2 d-flex navsid">    
            <li className="navsidebar text-light text-center fs-5">
            {userRole === 'docente' && <li><Link to='/AltaAlumno'>Alumnos</Link></li>}    
            </li>
            
            <li className="navsidebar text-light text-center fs-5">
            <Link to="/cursos">Cursos</Link>
            </li>
          </ul>
        </div>
      </div>
        </>
            )};
export default Sidebar;