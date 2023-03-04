import React, { Fragment } from 'react';
import "../Bootstrap/bootstrap.min.css";
import "../css/estilos.css";
//import "ionicons.min.css";
//import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import "./AltaAlumno.js";
function Navbar() {
  return (
    <>
    <div className="d-flex sid">
      <div id="sidebar-container" className="bg-primary shadow-lg d-none d-sm-inline ps-4 pe-4 pt-2">
        <div className="logo border-bottom border-secondary text-center">
          <img  src={require("../img/silicon.svg").default} width="200" height="75" alt="logosilicon" className="m-2" />
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

      </div>
        <div className="w-100">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="btn-group container-fluid d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-sm-none d-md-block">
                <ul className="nav mt-2 nav-pills container gap-2">
                  <a href="./altaUser.php" className="navcol p-1 border rounded">
                    Alta de usuarios
                  </a>
                  <a href="./listUser.php" className="navcol p-1 border rounded">
                    Lista de Usuarios
                  </a>
                  <a href="./tabinfo.php" className="navcol p-1 border rounded">
                    Informacion
                  </a>
                  <a href="./forms.php" className="navcol p-1 border rounded">
                    Formularios
                  </a>
                </ul>
              </div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <form className="d-flex form-check-inline position-relative my-2 d-inline-block">
                                <input className="rounded-2  p-2 btn-buscar" name="buscar" type="search" placeholder="Buscar" aria-label="Buscar"/>
                                <button className="btn btn-primary btn-buscar p-2 ms-1" type="submit"><i className="icon icon-search ion-md-search "></i></button>
                            </form>
                            <div className="nav-item dropdown d-flex">
                                <a className="nav-link dropdown-toggle fw-bold fs-5 pt-0 m-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="../img/user-perfil.jpeg" className="img-fluid rounded-1 me-2 avatar-perfil" alt="img-user-perfil"/>
                                    Rodriguez Martin
                                    <p className="user-rol fs-6 fw-light ms-5 position-absolute">Proyect
                                        Manager</p>
                                </a>
                                <ul className="dropdown-menu ms-3 position-absolute" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Mi Perfil</a></li>
                                    <li><a className="dropdown-item" href="#">Configuracion</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Cerrar Sesión</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
            )};
export default Navbar;