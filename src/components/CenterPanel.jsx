

import TopBar from './CenterPanel/TopBar';
import ArtistPicture from './CenterPanel/ArtistPicture';
import Playlist from './CenterPanel/Playlist';

export default function CenterPanel(){
    return (
        <div className="center-panel">
            <TopBar/>
            <ArtistPicture/>
            <Playlist/>
        </div>
    );
}