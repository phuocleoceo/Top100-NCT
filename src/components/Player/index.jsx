import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextPlay, getPreviousPlay } from '../../redux/slices/playSlice';
import { shuffleList } from '../../redux/slices/listSlice';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './style.css';

export default function Player() {
	const play = useSelector(state => state.play);
	const list = useSelector(state => state.list);
	const dispatch = useDispatch();

	const handleNextPlay = () => dispatch(getNextPlay(list));
	const handlePreviousPlay = () => dispatch(getPreviousPlay(list));
	const handleShufflePlay = () => dispatch(shuffleList());

	return (
		<AudioPlayer
			className="player-bar"
			style={{ backgroundColor: "black" }}
			autoPlay
			src={play.music}
			showSkipControls
			onClickNext={handleNextPlay}
			onClickPrevious={handlePreviousPlay}
			onEnded={handleNextPlay}
			onError={handleNextPlay}
			customAdditionalControls={
				[
					RHAP_UI.LOOP,
					<input type="image" src="/shuffle.png"
						alt="shuffle"
						className="shuffle-button"
						onClick={handleShufflePlay} />
				]
			}
		/>
	)
}
