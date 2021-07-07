import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [musicList, setMusicList] = useState([]);

	useEffect(() => {
		async function fetchMusic() {
			const response = await fetch("https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST");
			const responseJSON = await response.json();
			const list = responseJSON.songs.top100_VN[0].songs;
			setMusicList(list.slice(80));
		}
		fetchMusic();
	}, []);
	return (
		<div>
			{musicList.map((m) => (
				<div>{m.title} <audio src={m.music} controls /></div>
			))}
		</div>
	);
}

export default App;
