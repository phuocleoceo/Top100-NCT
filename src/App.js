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
					(songs.top100_VN !== undefined) &&
					songs.top100_VN.map((s) =>
						<Route path={"/" + s.name.replace(" ", "")}>
							<SongListCard type={s.name} area="top100_VN" />
						</Route>
					)
				}

				{
					(songs.top100_AM !== undefined) &&
					songs.top100_AM.map((s) =>
						<Route path={"/" + s.name.replace(" ", "")}>
							<SongListCard type={s.name} area="top100_AM" />
						</Route>
					)
				}

				{
					(songs.top100_CA !== undefined) &&
					songs.top100_CA.map((s) =>
						<Route path={"/" + s.name.replace(" ", "")}>
							<SongListCard type={s.name} area="top100_CA" />
						</Route>
					)
				}

				{
					(songs.top100_KL !== undefined) &&
					songs.top100_KL.map((s) =>
						<Route path={"/" + s.name.replace(" ", "")}>
							<SongListCard type={s.name} area="top100_KL" />
						</Route>
					)
				}
			</Switch>
			<Player />
		</BrowserRouter >
	);
}

export default App;
