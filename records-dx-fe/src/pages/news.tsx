import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_news.png';

export interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>News Page</p>
        </div>
    )
}

export default NewsPage;