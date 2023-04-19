import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_others.png';

export interface IOthersPageProps {}

const OthersPage: React.FunctionComponent<IOthersPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Others Page</p>
        </div>
    )
}

export default OthersPage;