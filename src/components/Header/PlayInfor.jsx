import React from 'react';
import { useSelector } from 'react-redux';
import { Nav, Image } from 'react-bootstrap';

export default function PlayInfor() {
	const play = useSelector(state => state.play);

	return (
		<Nav className="mr-auto">
			<Image
				src={play.avatar}
				className="logo-play"
				alt="Logo"
			/>
			<Nav.Item className="infor-play">
				<p className="pTitle">{play.title}</p>
				<p className="pCreator">{play.creator}</p>
			</Nav.Item>
		</Nav>
	)
}
