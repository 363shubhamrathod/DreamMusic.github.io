import TopBar from "./CenterPanel/TopBar";
import ArtistPicture from "./CenterPanel/ArtistPicture";
import Playlist from "./CenterPanel/Playlist";

export default function CenterPanel({
	setCurrentPlayingSong,
	currentPlayingSong,
    toggleMusic,
    setToggleMusic
}) {
	return (
		<div className="center-panel">
			<TopBar />
			<ArtistPicture />
			<Playlist
				setCurrentPlayingSong={setCurrentPlayingSong}
				currentPlayingSong={currentPlayingSong}
				toggleMusic={toggleMusic}
				setToggleMusic={setToggleMusic}
			/>
		</div>
	);
}
