import React, { useState, useEffect, useRef } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
				<audio controls autoPlay ref={audioRef}>
					<source src=""
						type="audio/mp3" />
				</audio>
			</Nav>
		</Navbar>
	)
}
