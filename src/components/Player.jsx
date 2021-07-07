import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
	const play = useSelector(state => state.play);

	return (
		<AudioPlayer
			className="player-bar"
			style={{ backgroundColor: "black" }}
			autoPlay
			src={play.music}
		/>
	)
}
