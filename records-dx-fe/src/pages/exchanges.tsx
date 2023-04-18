import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IExchangePageProps {}

const ExchangePage: React.FunctionComponent<IExchangePageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Exchange Page</p>
        </div>
    )
}

export default ExchangePage;