import React from 'react';
import MenuHorizontal from '../components/MenuHorizontal';
import HeaderPage from '../components/HeaderPage';

export interface IVideoPageProps {}

const VideoPage: React.FunctionComponent<IVideoPageProps> = (props) => {
    return (
        <div>
            <MenuHorizontal />
            <p>Video Page</p>
        </div>
    )
}

export default VideoPage;