import React,{ useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../public/styles/styleLogIn.css'
import { Subscriber } from "../models/subscriber";
import { Col } from 'react-bootstrap';
import { OrganizeImportsMode } from 'typescript';
import { useNavigate } from 'react-router-dom';
import {URL_SERVICES} from '../config_env/env';


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
         
               <h2>Mi Perfil</h2>
               <hr />
                <div className='row'>
                <div className='col-md-1'>
                </div>
                <div className='col-md-10'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                        <div id='countryd'>
                                <label htmlFor="country">País</label>
                                <Form.Control 
                                    type='select'
                                    id='country' name='country'
                                    size="sm"
                                    placeholder="Seleccione el país"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                </Form.Control.Feedback>
                            </div>
                            <div id='firstNamed'>
                                <label htmlFor="firstname">Nombres</label>
                                <Form.Control 
                                    type='text'
                                    id='firstname' name='firstname'
                                    size="sm"
                                    placeholder="Ingrese sus nombres"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                </Form.Control.Feedback>
                            </div>
                           
                        </Form.Group>
                      
                        <Form.Group as={Col} md="5" controlId="validationCustom01">
                            <div id='userNamed'>
                                <label htmlFor="username">Nombre del usuario</label>
                                <Form.Control 
                                    type='text'
                                    id='username' name='username'
                                    size="sm"
                                    placeholder="Ingrese su alias/nombre de usuario"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                </Form.Control.Feedback>
                            </div>
                            <div id='lasttNamed'>
                                <label htmlFor="lastname">Apellidos</label>
                                <Form.Control 
                                    type='text'
                                    id='lastname' name='lastname'
                                    size="sm"
                                    placeholder="Ingrese sus apellidos"
                                    onChange={(e) => setUserName(e.target.value)}
                                    required />
                                <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                </Form.Control.Feedback>
                        </div>
                            <div id='emaild'>
                                <label htmlFor="email">Correo Electrónico</label>
                                <Form.Control type='email'
                                    id='email' name='email'
                                    size="sm"
                                    placeholder="Ingrese su correo electrónico"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                           
                            
                        </Form.Group>
                    </Form>
                    </div>
                    <div className='col-md-1'>
                    </div>
                    <div className='row'>
                    <div className='row'>
                                <div className='col-md-5'>
                                    <Button variant="primary" type='button' onClick={handleSubmit}> 
                                        Enviar
                                    </Button>
                                </div>
                               
                            </div>
                    </div>

                </div>
                      
         </div>
    );
}

export default Profile;