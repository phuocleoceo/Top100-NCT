import React from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Player() {
	const play = useSelector(state => state.play);

	return (
		<Navbar bg="dark" expand="lg" fixed="bottom">
			<Nav>
				<Image
					width="100 % "
					height="auto"
					src={play.avatar}
					className="img-avatar-play"
				/>
				<Nav.Item className="infor-play">
					<p className="pTitle">{play.title}</p>
					<p className="pCreator">{play.creator}</p>
				</Nav.Item>

				<div className="player-bar">
					<AudioPlayer
						autoPlay
						src={play.music}
					/>
				</div>
			</Nav >
		</Navbar >
	)
}
