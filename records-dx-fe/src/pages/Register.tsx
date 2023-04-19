import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_register.png';


export interface IRegisterPageProps {}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Register</p>
        </div>
    )
}

export default RegisterPage;