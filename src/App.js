import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongList } from './redux/slices/songSlice';
import SongListCard from './components/SongListCard';
import Player from './components/Player';
import Header from './components/Header';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSongList());
	}, [dispatch]);
	const songs = useSelector(state => state.song);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' exact>
					<SongListCard type="Nhạc Trẻ" />
				</Route>
				{
					songs.map((s) =>
						<Route path={"/" + s.name.replace(" ", "")}>
							<SongListCard type={s.name} />
						</Route>
					)
				}
			</Switch>
			<Player />
		</BrowserRouter >
	);
}

export default App;
