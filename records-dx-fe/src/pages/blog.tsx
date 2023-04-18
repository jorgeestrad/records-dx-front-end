import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IBlogPageProps {}

const BlogPage: React.FunctionComponent<IBlogPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Blog Page</p>
        </div>
    )
}

export default BlogPage;