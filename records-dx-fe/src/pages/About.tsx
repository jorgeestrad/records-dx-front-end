import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>About Page</p>
        </div>
    )
}

export default AboutPage;