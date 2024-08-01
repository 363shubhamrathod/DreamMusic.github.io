import { useEffect, useState } from "react";

export default function ProgessBar({ player }) {
	const [prog, setProg] = useState(0);
	useEffect(() => {
		const inter = setInterval(() => {
			setProg(player.current ? player.current.seek().toFixed(2) : 0);
		}, 30);
		return () => {
			clearInterval(inter);
		};
	}, []);

	return (
		<div className="right-panel-playcard-slider">
			{/* {console.log(player.current)} */}
			<span>{prog}</span>
			<input
				type="range"
				min={0}
				value={player.current ? player.current.seek().toFixed(2) : 0}
				max={player.current ? player.current.duration().toFixed(2) : 0}
				readOnly
			></input>
			<span>{player.current ? player.current.duration().toFixed(2) : 0}</span>
		</div>
	);
}
