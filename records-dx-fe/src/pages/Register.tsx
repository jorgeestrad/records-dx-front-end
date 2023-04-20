import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_register.png';
import Footer from '../components/Footer';
import { SignUp } from '../components/SignUp';


export interface IRegisterPageProps {}

const RegisterPage: React.FunctionComponent<IRegisterPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <SignUp/>
            <Footer />
        </div>
    )
}

export default RegisterPage;