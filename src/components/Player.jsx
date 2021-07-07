import React, { useEffect, useRef } from 'react';
import { Nav, Navbar, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Player() {
	const play = useSelector(state => state.play);
	const audioRef = useRef();
	useEffect(() => {
		const dom = audioRef.current;
		dom.src = play.music;
	}, [play])
	//State for src cannot make component re-render != img src
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

				<audio controls autoPlay ref={audioRef}>
					<source src=""
						type="audio/mp3" />
				</audio>
			</Nav >
		</Navbar >
	)
}
