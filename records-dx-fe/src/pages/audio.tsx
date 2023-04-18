import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IAudioPageProps {}

const AudioPage: React.FunctionComponent<IAudioPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Audio Page</p>
        </div>
    )
}

export default AudioPage;