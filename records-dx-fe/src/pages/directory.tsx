import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IDirectoryPageProps {}

const DirectoryPage: React.FunctionComponent<IDirectoryPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Directory Page</p>
        </div>
    )
}

export default DirectoryPage;