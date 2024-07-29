

import Notification from './RightPanel/Notification';
import RecentPlaylist from './RightPanel/RecentPlaylist';
import PlayCard from './RightPanel/PlayCard';


export default function RightPanel(){
    return (
    <div className="right-panel">
            <Notification/>
            <RecentPlaylist/>
            <PlayCard />
    </div>
    );
}