import { useEffect, useState } from 'react';
import AlumList from './AlumList'
import Form from '../components/Form'

function AlumnoAlta() {

  const [alumno, setAlumno] = useState({
    nombre: '',
    apellido: '',
    dni: 0
  })

  const [alumnos, setAlumnos] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getAlumnos = () => {
      fetch('http://localhost:9000/api/AltaAlumno')
      .then(res => res.json())
      .then(res => setAlumnos(res))
    }
    getAlumnos()
    setListUpdated(false)
  }, [listUpdated])

  return (
   
    <div className="d-flex">
      <div className="m-5 col-7">
        <h2 style={{textAlign: 'center'}}>Lista de alumnos</h2>
        <AlumList alumno={alumno} setAlumno={setAlumno} Alumnos={alumnos} setListUpdated={setListUpdated}/>
      </div>
      <div className="m-5 col-5">
        <h2 style={{textAlign: 'center'}}>Alta de Alumnos</h2>
        <Form alumno={alumno} setAlumno={setAlumno}/>
      </div>
    </div>
 
  );
}

export default AlumnoAlta;