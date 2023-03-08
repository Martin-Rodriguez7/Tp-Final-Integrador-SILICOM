import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/estiloLogin.css'
import {Routes,Route} from "react-router-dom";
import Dashboard from './Dashboard';
const Login = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({ username: '', password: '' })

  

    const inputChange = ({ target }) => {
      const { name, value } = target
      setBody({
          ...body,
          [name]: value
      })
  }

  const onSubmit = () => {
   
      axios.post('http://localhost:9000/api/login', body)
          .then(({ data }) => {
            console.log(data)
              localStorage.setItem('token', data.token);
              <Routes>
              <Route path="/Dashboard" render={(props) => <Dashboard rol="Juan" {...props} />} />
          
              </Routes>
              navigate('/Dashboard')
          })
          .catch(({ response }) => {
              console.log(response.data)
          })
          
  }
 
    return (
      <div className='d-flex'>
      <div className="form-signin text-center rounded shadow-lg p-3 mb-5">
        <form id="formLogin"  method="POST">
          <img className="mb-4 mt-3" src={require("../../img/silicon.svg").default} alt="" width="150" height="57" />
          <div className="form-floating">
            <input type="text" className="form-control mb-3" id="user"  value={body.username}
                            onChange={inputChange} name="username" placeholder="User" />
            <label htmlFor="user">Usuario</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="pass" value={body.password}
                            onChange={inputChange} name='password'  placeholder="Password" />
            <label htmlFor="pass">Contraseña</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" onClick={onSubmit} type='button'>Ingresar</button>
        </form>
  
        <br />
       
      </div>
      </div>
    )
}
 
export default Login
