import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IMyGoalsPageProps {}

const MyGoalsPage: React.FunctionComponent<IMyGoalsPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>My Goals Page</p>
        </div>
    )
}

export default MyGoalsPage;