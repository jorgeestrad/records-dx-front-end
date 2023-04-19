import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_directy.png';

export interface IDirectoryPageProps {}

const DirectoryPage: React.FunctionComponent<IDirectoryPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Directory Page</p>
        </div>
    )
}

export default DirectoryPage;