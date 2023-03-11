import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CursoList() {
const navigate = useNavigate();
const [cursos, setCursos] = useState([]);
//Modal de añadir curso
const [showModal, setShowModal] = useState(false);
const handleCloseModal = () => setShowModal(false);
const handleShowModal = () => setShowModal(true);
const [cursoAdd, setCursoAdd] = useState({
    nombre: '',
    descripcion: '',
    imagen: '',
    anio: '',
    activo: 0
});
let{nombre, descripcion, imagen,anio,activo} = cursoAdd;
const [listUpdated, setListUpdated] = useState(false)
const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCursoAdd({ ...cursoAdd, [name]: value }); 
  };


 
  const handleSubmit = () => {
   
    console.log(cursoAdd)
    //validación de los datos
    if (cursoAdd.nombre === '' || cursoAdd.descripcion === '' || cursoAdd.anio <= 0 ) {
        alert('Todos los campos son obligatorios')
        return
    }

    //consulta
    const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cursoAdd)
    }
    fetch('http://localhost:9000/api/cursoadd', requestInit)
    .then(res => res.text())
    .then(res =>  console.log(res))
    handleCloseModal()
    
}
  // borrar curso 
  const handleDelete = id => {
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:9000/api/cursodel/' + id, requestInit)
    .then(res => res.text())
    .then(res => console.log(res))

    setListUpdated(true)
}



  useEffect(() => {
    const getCursos = () =>{ fetch('http://localhost:9000/api/cursos')
      .then(response => response.json())
      .then(data => setCursos(data));}
      getCursos()
      setListUpdated(false)
}, [listUpdated])

const handleGestionarAlumnos = (cursoid) => {
    console.log(cursoid)
    navigate(`/cursos/${cursoid}/gestion_alumnos`);
  };
function CursoCard({ curso }) {

    return (
      <>
     <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={curso.imagen} />
        <Card.Body>
          <Card.Title>{curso.titulo}</Card.Title>
          <Card.Text>{curso.descripcion}</Card.Text>
          <Card.Text>Año: {curso.anio}</Card.Text>
          <Button onClick={() =>handleGestionarAlumnos(curso.id)} variant="primary">Ver alumnos</Button>
          <Button variant="danger" className='ms-2' onClick={() => handleDelete(curso.id)} >Eliminar</Button>
         
        </Card.Body>
      </Card>
  
  
  </>
    );
  }
  return (
    <>
    <Container className='border rounded shadow mt-5'>
         <Button variant="primary" className='mt-3 mb-1'onClick={handleShowModal} >Agregar</Button>
      <Row>
        {cursos.map(curso => (
          <Col key={curso.id}>
            <CursoCard curso={curso} />
          </Col>
        ))}
      </Row>
    </Container>

<Modal show={showModal} onHide={handleCloseModal}>
<Modal.Header closeButton>
  <Modal.Title>Agregar nuevo curso</Modal.Title>
</Modal.Header>
<Modal.Body>
<form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del curso:</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleInputChange}  className="form-control"/><br />

        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion"name="descripcion" value={descripcion} onChange={handleInputChange} className="form-control"></textarea><br />

        <label htmlFor="imagen">URL de la imagen:</label>
        <input type="text" id="imagen" name="imagen" value={imagen} onChange={handleInputChange} className="form-control" /><br />

        <label htmlFor="anio">Año:</label>
        <input type="number" id="anio" name="anio" value={anio} onChange={handleInputChange}  className="form-control"/><br />
         
          <label htmlFor="anio">Activo</label>
        <input type="checkbox" id="activo" name="activo" value={activo} onChange={handleInputChange}  className=" m-2 mb-3"/><br />
        <button type="submit" className="btn btn-primary">Agregar curso</button>
      </form>
</Modal.Body>
</Modal>
</>
  );
}

export default CursoList;