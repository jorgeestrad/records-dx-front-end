import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_mygoals.png';

export interface IMyGoalsPageProps {}

const MyGoalsPage: React.FunctionComponent<IMyGoalsPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>My Goals Page</p>
        </div>
    )
}

export default MyGoalsPage;