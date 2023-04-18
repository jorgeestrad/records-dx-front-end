import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>News Page</p>
        </div>
    )
}

export default NewsPage;