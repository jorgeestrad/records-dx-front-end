import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_supplies.png';

export interface ISuppliesPageProps {}

const SuppliesPage: React.FunctionComponent<ISuppliesPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Supplies Page</p>
        </div>
    )
}

export default SuppliesPage;