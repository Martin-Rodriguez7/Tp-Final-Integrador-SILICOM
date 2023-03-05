import React, { Fragment } from 'react';
import "../Bootstrap/bootstrap.min.css";
import "../css/estilos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import "./AltaAlumno.js";

function Sidebar() {
  return (
    <>
      <div id="sidebar-container" className=" d-flex sidebar bg-primary shadow-lg d-none d-sm-inline ps-4 pe-4 pt-2">
        <div className="mt-2 border-bottom border-secondary text-center">
        </div>
        <div className="estado fs-5 border-bottom border-secondary text-center pt-2 pb-2">
          <a className="navsidebar status">
            Estado: <FontAwesomeIcon icon={faCircle} className="statusCir" /> <span>Activo</span>
          </a>
        </div>
        <div className="menu">
          <ul className="nav mt-2 nav-pills container">
           
            <p className="navsidebar d-block pt-2 text-light text-center fs-5">
            <NavLink to="/AltaAlumno">Alta Alumno</NavLink>
            </p>
           
          </ul>
        </div>
      </div>

      
        
    
        
        </>
            )};
export default Sidebar;