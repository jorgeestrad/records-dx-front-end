import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_logs.png';

export interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Blog Page</p>
        </div>
    )
}

export default BlogPage;