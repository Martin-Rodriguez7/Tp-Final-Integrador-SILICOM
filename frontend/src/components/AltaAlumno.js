import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CrudComponent = () => {
  //Modal de añadir alumno
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
//Modal de editar alumno
  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleCloseModalEdit = () => setShowModalEdit(false);
  const handleShowModalEdit = () => setShowModalEdit(true);

  const [alumnoAdd, setAlumnoAdd] = useState({
    nombre: '',
    apellido: '',
    dni: ''
  });
  const [alumnoEdit, setAlumnoEdit] = useState({});
  const [Alumnos, setAlumnos] = useState([])


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAlumnoAdd({ ...alumnoAdd, [name]: value });
    setAlumnoEdit({ ...alumnoEdit, [name]: value });
  };

  let{nombre, apellido, dni} = alumnoAdd;
//agregar alumno
  const handleSubmit = () => {

    dni = parseInt(dni, 10)
    //validación de los datos
    if (nombre === '' || apellido === '' || dni <= 0 ) {
        alert('Todos los campos son obligatorios')
        return
    }
    //consulta
    const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(alumnoAdd)
    }
    fetch('http://localhost:9000/api/alumnoadd', requestInit)
    .then(res => res.text())
    .then(res => console.log(res))
}
  const [listUpdated, setListUpdated] = useState(false)
  useEffect(() => {
    const getAlumnos = () => {
      fetch('http://localhost:9000/api/Alumnos')
      .then(res => res.json())
      .then(res => setAlumnos(res))
    }
    getAlumnos()
    setListUpdated(false)
  }, [listUpdated])

  //listar alumnos en tabla 
  const handleDelete = id => {
    const requestInit = {
        method: 'DELETE'
    }
    fetch('http://localhost:9000/api/Alumno/' + id, requestInit)
    .then(res => res.text())
    .then(res => console.log(res))

    setListUpdated(true)
}


//editar alum
const AbrirModalEdit = (alumno) => {
  setAlumnoEdit(alumno);
  handleShowModalEdit();
}
const handleUpdate = (alumno,event) => {
  event.preventDefault();
  console.log(alumno)

  dni = parseInt(dni, 10)
  //validación de los datos
  if (alumnoEdit.nombre === '' ||alumnoEdit.apellido === '' || alumnoEdit.dni <= 0 ) {
      alert('Todos los campos son obligatorios')
      
  }else{
    const requestInit = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(alumnoEdit)
  }
  fetch('http://localhost:9000/api/Alumno/' + alumnoEdit.id, requestInit)
  .then(res => res.text())
  .then(res => console.log(res))

  setListUpdated(true)
};
}
  

  return (
    <div className="container mt-3 border shadow rounded p-3">
      <h2>Lista de alumnos</h2>
      <Button variant="primary" className='mt-1 mb-1' onClick={handleShowModal}>Agregar</Button>
      <table className="table table-striped">
            <thead className='thead-dark text-center'>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody>
                {Alumnos.map(alum=> (
                    <tr className='rounded border text-center' key={alum.id}>
                        <td>{alum.id}</td>
                        <td>{alum.nombre}</td>
                        <td>{alum.apellido}</td>
                        <td>{alum.dni}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(alum.id)} className="btn m- btn-danger">Borrar</button>
                                <button onClick={() => AbrirModalEdit(alum)} className="btn m-1 btn-dark">Modificar</button>               
                            </div>        
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
     

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar nuevo alumno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value={nombre} name="nombre" onChange={handleInputChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input value={apellido} name="apellido" onChange={handleInputChange} type="text" id="apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input value={dni}  name="dni" onChange={handleInputChange} type="number" id="dni" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </Modal.Body>
      </Modal>
   
{/**MODAL DE EDITAR */}
<Modal show={showModalEdit} onHide={handleCloseModalEdit}>
  <Modal.Header closeButton>
    <Modal.Title>
    Editar Alumno
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <form onSubmit={handleUpdate}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          value={alumnoEdit.nombre|| ""}
          name="nombre"
          onChange={handleInputChange}
          type="text"
          id="nombre"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          value={alumnoEdit.apellido|| ""}
          name="apellido"
          onChange={handleInputChange}
          type="text"
          id="apellido"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dni" className="form-label">
          DNI
        </label>
        <input
          value={alumnoEdit.dni || ""}
          name="dni"
          onChange={handleInputChange}
          type="number"
          id="editor"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
      Actualizar
      </button>
    </form>
  </Modal.Body>
</Modal>

    </div>
  );
};

export default CrudComponent;