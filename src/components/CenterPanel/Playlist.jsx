import { SONG_LIBRARY } from "../data";
const SONG_LIST = Object.values(SONG_LIBRARY);
export default function Playlist({
	setCurrentPlayingSong,
	currentPlayingSong,
	toggleMusic,
	setToggleMusic,
}) {
	return (
		<>
			<h3
				style={{
					textAlign: "left",
					marginBottom: "1.5%",
					alignSelf: "start",
					height: "1%",
				}}
			>
				Popular
			</h3>
			<div className="center-panel-playlist">
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Artist</th>
							<th>Time</th>
							<th>Album</th>
						</tr>
					</thead>

					<tbody>
						{SONG_LIST.map((songs, index) => (
							<tr key={index}>
								<td>
									<button
										onClick={() => {
                                            index + 1 == currentPlayingSong?
											setToggleMusic((prv)=>!prv):
                                            setCurrentPlayingSong(index + 1);
										}}
									>
										{index + 1 == currentPlayingSong
											? toggleMusic
												? "⏸️"
												: "▶️"
											: index + 1}
									</button>
								</td>
								<td>{songs["title"]}</td>
								<td>{songs["artist"]}</td>
								<td>{songs["artist"]}</td>
								<td>{songs["album"]}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
