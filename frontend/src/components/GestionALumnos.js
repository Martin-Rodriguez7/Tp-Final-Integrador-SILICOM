import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function GestionAlumnos({ cursoId }) {
  const [alumnosInscritos, setAlumnosInscritos] = useState([]);

  useEffect(() => {
    obtenerAlumnosInscritos(cursoId);
  }, [cursoId]);

  const obtenerAlumnosInscritos = async (cursoId) => {
    let cursoid =cursoId
    try {
        
      const response = await fetch(`http://localhost:9000/api/cursos/${cursoid}/gestion_alumnos`);
      if (response.ok) {
        const data = await response.json();
        setAlumnosInscritos(data);
      } else {
        throw new Error('Error al obtener la lista de alumnos inscritos');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Gestión de Alumnos Inscritos en el Curso</h1>
      <h2>Curso Seleccionado: {cursoId}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
          </tr>
        </thead>
        <tbody>
          {alumnosInscritos.map((alumno, index) => (
            <tr key={alumno.id}>
              <td>{index + 1}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.correo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default GestionAlumnos;