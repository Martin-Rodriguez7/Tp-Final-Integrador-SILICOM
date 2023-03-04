import React from 'react';

const Form = ({alumno, setAlumno}) => {

    const handleChange = e => {
        setAlumno({
            ...alumno,
            [e.target.name]: e.target.value
        })
    }

    let{nombre, apellido, dni} = alumno

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
            body: JSON.stringify(alumno)
        }
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de libro
        setAlumno({
            nombre: '',
            apellido: '',
            dni: 0
        })
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Nombew</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="title" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Apellido</label>
                <input value={apellido} name="apellido" onChange={handleChange} type="text" id="author" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edition" className="form-label">DNI</label>
                <input value={dni}  name="dni" onChange={handleChange} type="number" id="edition" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
}
 
export default Form;