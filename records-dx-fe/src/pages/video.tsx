import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';
import banner from '../img/ban_video.png';

export interface IVideoPageProps {}

const VideoPage: React.FunctionComponent<IVideoPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <HeaderPage banner={banner}/>
            <p>Video Page</p>
        </div>
    )
}

export default VideoPage;