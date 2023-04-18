import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface ISuppliesPageProps {}

const SuppliesPage: React.FunctionComponent<ISuppliesPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Supplies Page</p>
        </div>
    )
}

export default SuppliesPage;