import React from "react";
import { Routes, Route } from "react-router-dom";
import AlumnoAlta from "./AltaAlumno";
import CursoList from "./CursosList";
import GestionAlumnos from "./GestionALumnos";
import Sidebar from "./Layout/Sidebar";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";

const NavPage = () => {
    return (
      <>
    
          <Routes>
          <Route path="/ALumno" element={<AlumnoAlta />} />
          <Route path="/cursos" element={<CursoList />} />
          <Route path="/cursos/:cursoid/gestion_alumnos" element={<GestionAlumnos />} />
          </Routes>
       
      </>
    );
  };
  
  export default NavPage;