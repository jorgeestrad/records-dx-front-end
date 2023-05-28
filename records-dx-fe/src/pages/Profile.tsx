import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/banner.png';
import Footer from '../components/Footer';
import Profile from '../components/Profile';


export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <Profile/>
            <Footer />
        </div>
    )
}

export default AboutPage;