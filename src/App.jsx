import { useState } from "react";
import "./App.css";

import LeftPanel from "./components/LeftPanel";
import CenterPanel from "./components/CenterPanel";
import RightPanel from "./components/RightPanel";

function App() {
	const [currentPlayingSong, setCurrentPlayingSong] = useState(1);
	const [toggleMusic, setToggleMusic] = useState(false);
	return (
		<div className="main-page">
			<LeftPanel />
			<CenterPanel
				setCurrentPlayingSong={setCurrentPlayingSong}
				currentPlayingSong={currentPlayingSong}
				toggleMusic={toggleMusic}
				setToggleMusic={setToggleMusic}
			/>
			<RightPanel
				setCurrentPlayingSong={setCurrentPlayingSong}
				currentPlayingSong={currentPlayingSong}
                toggleMusic={toggleMusic}
				setToggleMusic={setToggleMusic}
			/>
		</div>
	);
}

export default App;
