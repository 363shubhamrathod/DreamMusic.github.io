import { useState, useEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import ReactHowler from "react-howler";
import { SONG_LIBRARY } from "../data";
import ProgessBar from "./ProgessBar";


export default function TPlayCard({
	setCurrentPlayingSong,
	currentPlayingSong,
	toggleMusic,
	setToggleMusic,
}) {
	const player = useRef();
	function handleToggle() {
		setToggleMusic((prv) => !prv);
		// console.log(player);
		// console.log(player.current.duration());
		// console.log(player.current.seek());
	}
	function handleVolup() {
		if (player.current.volume() < 1) {
			player.current.volume(player.current.volume() + 0.1);
		}
	}
	function handleVoldo() {
		if (player.current.volume() > 0) {
			player.current.volume(player.current.volume() - 0.1);
		}
	}
	return (
		<div className="right-panel-playcard">
			<ReactHowler
				src={SONG_LIBRARY[currentPlayingSong]["loc"]}
				playing={toggleMusic}
				onEnd={handleToggle}
				ref={player}
			/>
			<div className="right-panel-playcard-statusbar">playing</div>
			<div className="right-panel-playcard-picture">
				<img src={SONG_LIBRARY[currentPlayingSong]["imageUrl"]} alt="" />
			</div>
			<ProgessBar player={player}/>
			<div className="right-panel-playcard-controls">
				<button
					onClick={() => {
						setCurrentPlayingSong((prv) => (prv > 1 ? prv - 1 : prv));
					}}
				>
					⏮️
				</button>
				<button onClick={handleToggle}>{toggleMusic ? "⏸️" : "▶️"}</button>
				<button
					onClick={() => {
						setCurrentPlayingSong((prv) => (prv < 8 ? prv + 1 : prv));
					}}
				>
					⏭️
				</button>
			</div>
			<div className="right-panel-playcard-controls">
				<button onClick={handleVoldo}>-</button>
				{/* <button>🔇🔊</button> */}
				{/* <input type="range" min={0} ></input> */}
				<span>Volume controls</span>
				<button onClick={handleVolup}>+</button>
			</div>
		</div>
	);
}
