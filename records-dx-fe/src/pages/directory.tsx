import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/banner.png';
import Footer from '../components/Footer';
import Directory from '../components/Directory';

export interface IDirectoryPageProps {}

const DirectoryPage: React.FunctionComponent<IDirectoryPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <Directory/>
            <Footer />
        </div>
    )
}

export default DirectoryPage;