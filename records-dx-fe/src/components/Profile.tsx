import React,{ useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../public/styles/styleLogIn.css'
import { Subscriber } from "../models/subscriber";
import { Col } from 'react-bootstrap';
import { OrganizeImportsMode } from 'typescript';
import { useNavigate } from 'react-router-dom';
import {URL_SERVICES} from '../config_env/env';
import imguser from '../img/user.png';


 const Profile = () => {
      const [validated, setValidated] = useState(false); 
      const [statusMessage, setStatusMessage] = useState("TBD");
      const [userName, setUserName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [passwordConfirm,setPasswordConfirm] = useState('12dsdseererdfd fdfd');
      const [createdAt, setCreatedAt] = useState('');
       
      const handleSubmit = (event : any) => {

         const form = event.currentTarget;
         if (form.checkValidity() === false) {
           event.preventDefault();
           event.stopPropagation();
         }
     
         setValidated(true);

         if (password !== passwordConfirm) {
             setStatusMessage("La contraseña no es igual a la confirmación de la misma!")
         }else{
            alert('hola');
            postSubscriber();
         }
        
      };

      const navigate = useNavigate();
      const closeClick = () => navigate('/');
   
     const postSubscriber = () => {
      var jsonData = {
         "id" : 0,
         "subscriberTypeId" : 1,
         "countryId" : 1,
         "firstname" : "",
         "lastname"  : "",
         "alias"     : "",
         "code"      : "",
         "qsl"       : "",
         "phone"     : "",
         "addres"    : "",
         "createdAt" : createdAt,
         "email"     : email,
         "acceptDataPolicy" :false,
         "acceptAdvertaising" :false,
         "nui"       : "",
         "userName"  : userName,
         "password"  : password,
         "isPublic"  :false,
         "isEnabled" :false
      }
      if (validated && userName.length > 0 ){
         const d = new Date();
         setCreatedAt( d.toJSON())
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonData)
        };

         fetch(URL_SERVICES,requestOptions)
         .then((response) =>{
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .then(() => {
            setStatusMessage("Usuario Registrado correctamente!");
          })
         .catch(() => {
            setStatusMessage("ERROR");
         });
       }
    };
   
    return(
      <div >
            <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10'>
                     <h2>Mi Perfil</h2>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <div id='countryd'>
                                <label htmlFor="country">País</label>
                                  <Form.Select aria-label="Default select example">
                                    <option>Seleccione el país</option>
                                    <option value="1">Colombia</option>
                                    <option value="2">Brasil</option>
                                    <option value="3">Ecuador</option>
                                    <option value="3">Venezuela</option>
                                </Form.Select>
                            </div>
                            <div id='firstNamed'>
                                <label htmlFor="firstname">Nombres</label>
                                <Form.Control 
                                    type='text'
                                    id='firstname' name='firstname'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                       Ingrese sus nombres.
                                </Form.Control.Feedback>
                            </div>
                            <div id='qlsd'>
                                <label htmlFor="qsl">QSL</label>
                                <Form.Control 
                                    type='text'
                                    id='qld' name='qsl'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                            </div>
                             <div id='coded'>
                                <label htmlFor="code">Nombres</label>
                                <Form.Control 
                                    type='text'
                                    id='code' name='code'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                       Ingrese su código!.
                                </Form.Control.Feedback>
                            </div>
                            <div id='addressd'>
                                <label htmlFor="addres">Dirección</label>
                                <Form.Control 
                                    type='text'
                                    id='address' name='qsl'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                            </div>
                             <div id='ispublicd'>
                                <label htmlFor="ispublic">Información pública</label>
                                <Form.Check
                                    type='checkbox'
                                    id='ispublic'
                                />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <div id='userNamed'>
                                <label htmlFor="username">Nombre del usuario</label>
                                <Form.Control 
                                    type='text'
                                    id='username' name='username'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                        Ingrese su alias/nombre de usuario.
                                </Form.Control.Feedback>
                            </div>
                            <div id='lasttNamed'>
                                <label htmlFor="lastname">Apellidos</label>
                                <Form.Control 
                                    type='text'
                                    id='lastname' name='lastname'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                        Ingrese sus apellidos.
                                </Form.Control.Feedback>
                        </div>
                            <div id='emaild'>
                                <label htmlFor="email">Correo Electrónico</label>
                                <Form.Control type='email'
                                    id='email' name='email'
                                    size="sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                           <div id='phoned'>
                                <label htmlFor="phone">Teléfono</label>
                                <Form.Control 
                                    type='text'
                                    id='phone' name='phone'
                                    size="sm"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="1" controlId="validationCustom01">
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <div className="col-sm-6">
                            <br></br>
                            <img className='img-fluid' src= {imguser} alt='Foto'/>
                        </div>
                        </Form.Group>
                    </Form>
                </div>
                <div className='col-md-1'>
                </div>
                  
            </div>
            <div className='row'>
                 <div className='col-md-1'>
                </div>
                <div className='col-md-2'>
                    <Button variant="primary" type='button' onClick={handleSubmit}> 
                         Guardar
                    </Button>
                </div>
                  <div className='col-md-2'>
                    <Button variant= "success" type='button' onClick={handleSubmit}> 
                         Diseñar Perfil
                    </Button>
                </div>
            </div>
      </div>
    );
}

export default Profile;