import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSongList } from './redux/slices/songSlice';
import SongListCard from './components/SongListCard';
import Player from './components/Player';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSongList());
	}, [dispatch]);

	return (
		<>
			<SongListCard />
			<Player />
		</>
	);
}

export default App;
