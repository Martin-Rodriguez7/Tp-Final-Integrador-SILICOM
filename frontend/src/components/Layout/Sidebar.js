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
      <div id="sidebar" className="shadow-lg ps-4 pe-4 pt-2">  
    
          <ul className="list-unstyled components">    
            <li className=" text-light text-center fs-5">
            {userRole === 'docente' && <li><Link to='/Alumno'>Alumnos</Link></li>}    
            </li>
            
            <li className=" text-light text-center fs-5">
            <Link to="/cursos">Cursos</Link>
            </li>
          </ul>
      
      </div>
        </>
            )};
export default Sidebar;