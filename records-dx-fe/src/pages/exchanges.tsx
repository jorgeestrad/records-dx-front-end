import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_exchanges.png';

export interface IExchangePageProps {}

const ExchangePage: React.FunctionComponent<IExchangePageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Exchange Page</p>
        </div>
    )
}

export default ExchangePage;