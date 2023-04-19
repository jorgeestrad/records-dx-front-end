import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_books.png';

export interface IBooksPageProps {}

const BooksPage: React.FunctionComponent<IBooksPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Books Page</p>
        </div>
    )
}

export default BooksPage;