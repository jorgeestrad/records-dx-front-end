import React,{ useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../public/styleLogIn.css'
import { Subscriber } from "../models/subscriber";
import { Col } from 'react-bootstrap';
import { OrganizeImportsMode } from 'typescript';


 const Register = () => {
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

         fetch("http://localhost:3005/auth/register/",requestOptions)
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
      <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Registro de usuario</h2>
               <div><hr /></div>
               <Form noValidate validated={validated} onSubmit={handleSubmit}>
               <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <div className='username'>
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
                  <div className='email'>
                     <label htmlFor="email">Correo Electrónico</label>
                     <Form.Control type='email'
                        id='email' name='email'
                        size="sm"
                        placeholder="Ingrese su correo electrónico"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Contraseña</label>
                     <Form.Control type='password'
                        id='password' name='password'
                        size="sm"
                        placeholder="Ingrese su contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Confirme su Contraseña</label>
                     <Form.Control type='password'
                        id='passwordConfirm' name='passwordConfirm'
                        size="sm"
                        placeholder="Confirme su contraseña"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required />
                  </div>
                  <div>API Status: {statusMessage}</div>
                  <Button variant="primary" type='button' onClick={handleSubmit}> 
                      Enviar
                  </Button>
              </Form.Group>
              </Form>
            </div>
         </div>
    );
}

export default Register;