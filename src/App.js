import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongList } from './redux/slices/songSlice';
import SongListCard from './components/SongListCard';
import Player from './components/Player';
import Header from './components/Header';

function App() {
	const play = useSelector(state => state.play);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSongList());
	}, [dispatch]);

	useEffect(() => {
		if (play.music) {
			document.title = play.title + " - " + play.creator;
		}
	}, [play]);

	return (
		<>
			<Header />
			<SongListCard />
			<Player />
		</>
	);
}

export default App;
