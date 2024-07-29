import { useState } from "react";
import "./App.css";

import LeftPanel from './components/LeftPanel';
import CenterPanel from './components/CenterPanel';
import RightPanel from './components/RightPanel';

function App() {
	return (
		<div className="main-page">
            <LeftPanel/>
            <CenterPanel/>
            <RightPanel/>
		</div>
	);
}

export default App;
