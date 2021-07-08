import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongList } from './redux/slices/songSlice';
import SongListCard from './components/SongListCard';
import Player from './components/Player';
import Header from './components/Header';

function App() {
	const songs = useSelector(state => state.song);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchSongList());
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path='/' exact>
					<SongListCard type="Nhạc Trẻ" area="top100_VN" />
				</Route>
				{
					// Return a array like ["top100_VN","top100_AM"]
					Object.getOwnPropertyNames(songs).map(top =>
						(songs[top] !== undefined) &&
						songs[top].map((s) =>
							<Route path={"/" + s.name.replace(" ", "")}>
								<SongListCard type={s.name} area={top} />
							</Route>
						)
					)
				}
			</Switch>
			<Player />
		</BrowserRouter >
	);
}

export default App;
