import React,{ useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../public/styleLogIn.css'
import { Col } from 'react-bootstrap';

interface SignUpProps {
    name?: any;
    value?: any;
 }
 
 interface SignUpState {
    username: string,
    email: string,
    password: string,
    errors: {
       username: string,
       email: string,
       password: string
    }
 }

 type resultProps = {
    email: string;
    gender: string;
  };

 const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

 const Register = () => {
   
   const [validated, setValidated] = useState(false); 
      const [statusMessage, setStatusMessage] = useState("TBD");
      const [userName, setUserName] = useState('');
        
   
    const handleChange = (event : any) => {
      event.preventDefault();
           
     
    }
    
    const handleSubmit = (event : any) => {
      const form = event.currentTarget;
      
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
       
        alert(validated);
      }else
      {
         alert(validated);
         fetchData();
      }
      setValidated(true);
      
    };
   
     const fetchData = () => {

      if (validated && userName.length > 0 ){
         fetch("https://api.weather.gov/")
         .then((response) => response.json())
         .then((response) => {
            setStatusMessage(response.status);
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
               <div><hr /><br /></div>
               <Form noValidate validated={validated} onSubmit={handleSubmit}>
               <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <div className='username'>
                     <label htmlFor="username">Nombre del usuario</label>
                     <Form.Control type='text'
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
                        required />
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Contraseña</label>
                     <Form.Control type='password'
                        id='password' name='password'
                        size="sm"
                        placeholder="Ingrese su contraseña"
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