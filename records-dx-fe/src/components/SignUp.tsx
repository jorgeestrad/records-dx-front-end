import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../public/styleLogIn.css'
import axios from "axios";

interface SignUpProps {
   name?: any;
   value?: any;
}

interface SignUpState {
   username : string,
   email : string,
   password : string,
   errors : {
      username :  string,
      email : string,
      password : string
   }
}


const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);


export class SignUp extends React.Component<SignUpProps, SignUpState>{

   
    constructor(props: SignUpProps) {
      super(props);
      const initialState = {
         username : '',
         email : '',
         password : '',
         errors : {
           username : '',
           email : '',
           password : ''
         } 
       }

           
       this.state = initialState;
       this.handleChange = this.handleChange.bind(this);
   }


   handleChange = (event : any) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
      
      switch (name) {
        case 'username':
           errors.username = value.length < 7? 'Debe tener al menos 7 caracteres': '';
           break;
        case 'email':
           errors.email = Regex.test(value)? '': 'Correo electrónico no válido!';
           break;
        case 'password':
           errors.password = value.length < 8 ? 'Contraseña incorrecta!': '';
           break;
        default:
          break;
      }
      this.setState(Object.assign(this.state, { errors,[name]: value }));
      console.log(this.state.errors);
    }


    handleSubmit = (event : any) => { 
      event.preventDefault();

      
      const { name, value } = event.target;
      let validity = true;
      let errors = this.state.errors;

      let userName = this.state.username;
      let email = this.state.email;;
      let password = this.state.password;

      if  (userName!.toString() === ''){ 
            errors.username = 'Debe ingresar su nombre del usuario!';
            validity = false;
      }
      if  (email!.toString() === ''){ 
         errors.email = 'Debe ingresar su correo electrónico!';
         validity = false;
      }
      if  (password!.toString() === ''){ 
         errors.password = 'Debe ingresar su contraseña!';
         validity = false;
      }
      this.setState(Object.assign(this.state, { errors,[name]: value }));
      if (validity) {
       alert('Ok');
      }
   }

    render() {
      const {errors} = this.state  
       return (
         <div className='wrapper'>
           <div className='form-wrapper'>
              <h2>Registro de usuario</h2>
              <div><hr /><br /></div>
              <form onSubmit={this.handleSubmit} noValidate >
                 <div className='username'>
                    <label htmlFor="username">Nombre del usuario</label>
                    <Form.Control type='text' 
                                 id='username' name='username' 
                                 size="sm"
                                 placeholder="Ingrese su alias/nombre de usuario" 
                                 onChange={this.handleChange} />
                    {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
                 </div>
                 <div className='email'>
                    <label htmlFor="email">Correo Electrónico</label>
                    <Form.Control type='email' 
                                 id='email' name='email' 
                                 size="sm"
                                 placeholder="Ingrese su correo electrónico" 
                                 onChange={this.handleChange} />
                    {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
                 </div>
                 <div className='password'>
                    <label htmlFor="password">Contraseña</label>
                    <Form.Control type='password' 
                                 id='password' name='password' 
                                 size="sm"
                                 placeholder="Ingrese su contraseña" 
                                 onChange={this.handleChange} />
                    {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
                 </div>     
                 <Button variant="primary" type="submit">
                     Enviar
                 </Button>         
            </form>
        </div>
     </div>
    );
   }
  }


