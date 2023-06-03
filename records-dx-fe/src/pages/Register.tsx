import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/banner.png';
import Footer from '../components/Footer';
import { SignUp } from '../components/SignUp';
import Register from '../components/Register';


export interface IRegisterPageProps {}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <Register/>
            <Footer />
        </div>
    )
}

export default RegisterPage;