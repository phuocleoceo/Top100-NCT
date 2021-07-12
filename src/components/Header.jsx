import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../redux/slices/listSlice';
import { changeTopName } from '../extension'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

export default function Header() {
	const play = useSelector(state => state.play);
	const songs = useSelector(state => state.song);
	const dispatch = useDispatch();

	const handleSetContent = (area, type) => {
		const action = setList({ area, type, songs });
		dispatch(action);
	}

	return (
		<Navbar bg="dark" expand="lg" fixed="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Image
						src={play.avatar}
						width="50rem"
						height="50rem"
						className="d-inline-block align-top"
						alt="Logo"
					/>
					<Nav.Item className="infor-play">
						<p className="pTitle">{play.title}</p>
						<p className="pCreator">{play.creator}</p>
					</Nav.Item>
				</Nav>

				<Nav>
					{
						// Return a array like ["top100_VN","top100_AM"]
						Object.getOwnPropertyNames(songs).map(top =>
							songs[top] &&
							<NavDropdown
								title={<span className="text-white">{changeTopName(top)}</span>}
								className="nav-down" id="basic-nav-dropdown"
							>
								{
									songs[top].map(s =>
										<NavDropdown.Item
											onClick={() => handleSetContent(top, s.name)}>
											{s.name}
										</NavDropdown.Item>
									)
								}
							</NavDropdown>
						)
					}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
