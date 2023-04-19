import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_audio.png';


export interface IAudioPageProps {}

const AudioPage: React.FunctionComponent<IAudioPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Audio Page</p>
        </div>
    )
}

export default AudioPage;