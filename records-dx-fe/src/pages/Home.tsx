import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage />
        </div>
    )
}

export default HomePage;