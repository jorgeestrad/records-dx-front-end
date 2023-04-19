import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_login.png';


export interface ILogInPageProps {}

const LogInPage: React.FunctionComponent<ILogInPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Log In</p>
        </div>
    )
}

export default LogInPage;