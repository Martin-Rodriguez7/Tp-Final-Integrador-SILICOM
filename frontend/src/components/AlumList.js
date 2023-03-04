import React from 'react';

const AlumnoList = ({alum, setAlumno, Alumnos, setListUpdated}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{nombre, apellido, dni} = Alumnos
    const handleUpdate = id => {
        dni = parseInt(dni, 10)
        //validación de los datos
        if (nombre === '' || apellido === '' || dni <= 0 ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(Alumnos)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setAlumno({
            nombre: '',
            apellido: '',
            dni: 0
        })

        setListUpdated(true)
    }


    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                </tr>
            </thead>
            <tbody>
                {Alumnos.map(alum=> (
                    <tr key={alum.id}>
                        <td>{alum.id}</td>
                        <td>{alum.nombre}</td>
                        <td>{alum.apellido}</td>
                        <td>{alum.dni}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(alum.id)} className="btn btn-danger">Borrar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(alum.id)} className="btn btn-dark">Modificar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default AlumnoList;