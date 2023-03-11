import React, { Fragment } from 'react';
import "../../Bootstrap/bootstrap.min.css";
import "../../css/estilos.css";
import "../AltaAlumno.js";
import { NavLink } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
function Navbar() {
const token = localStorage.getItem('token');
const navigate = useNavigate();
let decodedToken;
let btn_Sesion;
let username;
if(token){
  decodedToken = jwt_decode(token);
  username =  decodedToken.username
  btn_Sesion = "Cerrar Sesión"
}else{
  username= "usuario"
  btn_Sesion = "Iniciar Sesión"
}

function Sesion() {
  
  if(token){

    localStorage.removeItem("token");
    navigate('/');
  }else{
    navigate('/login');
  }
}
  return (

    <>
   <div className="w-100 navbr">
        <nav id='navbar' className="navbar d-flex navbar-expand-lg navbar-light bg-light shadow">
        <div className="logo text-center m-1 col-3">
          <img  src={require("../../img/silicon.svg").default} width="150" height="75" alt="logosilicon" className="m-2" />
        </div>
          <div className="container-fluid col-7">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <form className="d-flex form-check-inline position-relative my-2 d-inline-block">
                                <button onClick={Sesion} className="btn btn-primary btn-buscar p-1 ms-1">{btn_Sesion}</button>
                               
                            </form>
                            <div className="nav-item dropdown d-flex">
                                <a className="nav-link fw-bold fs-5 pt-2 m-0" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bienvenido {username}
                                </a>
                            </div>
                        </ul>
                </div>
            </nav>
        </div>
           
        </>
            )};
export default Navbar;