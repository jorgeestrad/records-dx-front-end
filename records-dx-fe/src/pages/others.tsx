import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IOthersPageProps {}

const OthersPage: React.FunctionComponent<IOthersPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Others Page</p>
        </div>
    )
}

export default OthersPage;