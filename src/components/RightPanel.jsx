import Notification from "./RightPanel/Notification";
import RecentPlaylist from "./RightPanel/RecentPlaylist";
import PlayCard from "./RightPanel/PlayCard";
import TPlayCard from "./RightPanel/TPlayCard";
import PPlayCard from "./RightPanel/PPlayCard";

export default function RightPanel({
	setCurrentPlayingSong,
	currentPlayingSong,
    toggleMusic,
    setToggleMusic
}) {
	return (
		<div className="right-panel">
			<Notification />
			<RecentPlaylist />
			{/* <PlayCard/>*/}
			<TPlayCard
				setCurrentPlayingSong={setCurrentPlayingSong}
				currentPlayingSong={currentPlayingSong}
				toggleMusic={toggleMusic}
				setToggleMusic={setToggleMusic}
			/>
			{/* <PPlayCard/> */}
		</div>
	);
}
