import { useEffect, useState } from 'react';
import AlumList from './AlumList'
import Form from '../components/Form'

function AlumnoAlta() {
  const [id, setId] = useState('1');
  const [nombre, setNombre] = useState('caca');
  const [apellido, setApellido] = useState('cwcw');
  const [dni, setDni] = useState('21312');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('ID:', id);
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('DNI:', dni);
  }
  const [book, setBook] = useState({
    titulo: '',
    autor: '',
    edicion: 0
  })

  const [books, setBooks] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setBooks(res))
    }
    getBooks()
    setListUpdated(false)
  }, [listUpdated])
  
  return (
    <div className="container">
    <div className="row">
      <div className="col-7">
        <h2 style={{textAlign: 'center'}}>Lista de Alumnos</h2>
        <AlumList book={book} setBook={setBook} books={books} setListUpdated={setListUpdated}/>
      </div>
      <div className="col-5">
        <h2 style={{textAlign: 'center'}}>Alta Alumnos</h2>
        <Form book={book} setBook={setBook}/>
      </div>
    </div>
  </div>
  );
}

export default AlumnoAlta;