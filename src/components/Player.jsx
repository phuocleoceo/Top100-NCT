import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNextPlay, getPreviousPlay } from '../redux/slices/playSlice';
import { setShuffleList } from '../redux/slices/listSlice';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
	const dispatch = useDispatch();
	const play = useSelector(state => state.play);
	const list = useSelector(state => state.list);

	return (
		<AudioPlayer
			className="player-bar"
			style={{ backgroundColor: "black" }}
			autoPlay
			src={play.music}
			showSkipControls
			onClickNext={() => dispatch(getNextPlay(list))}
			onClickPrevious={() => dispatch(getPreviousPlay(list))}
			onEnded={() => dispatch(getNextPlay(list))}
			onError={() => dispatch(getNextPlay(list))}
			customAdditionalControls={
				[
					RHAP_UI.LOOP,
					<img src="/shuffle.png"
						width="25" height="30"
						alt="shuffle"
						className="shuffle-button"
						onClick={() => dispatch(setShuffleList())} />
				]
			}
		/>
	)
}
