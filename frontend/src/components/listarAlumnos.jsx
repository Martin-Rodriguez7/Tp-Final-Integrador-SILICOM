import React, { useState, useEffect } from 'react';

function AlumnosList() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    // Al cargar el componente, obtener la lista de alumnos
    fetch('/alumnos')   
      .then(response => response.json())
      .then(data => setAlumnos(data))
      .catch(error => console.error(error));
      
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/alumnos/${id}`, { method: 'DELETE' });
      if (response.ok) {
        setAlumnos(alumnos.filter(alumno => alumno.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
   
    <div>
      <h2>Lista de Alumnos</h2>
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>
             alert(alumno.id);
            {alumno.nombre} {alumno.apellido} ({alumno.dni})
            <button onClick={() => handleDelete(alumno.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlumnosList;