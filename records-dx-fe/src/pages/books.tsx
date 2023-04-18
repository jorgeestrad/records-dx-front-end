import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IBooksPageProps {}

const BooksPage: React.FunctionComponent<IBooksPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Books Page</p>
        </div>
    )
}

export default BooksPage;