import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

export default function Header() {
	const play = useSelector(state => state.play);
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
					<NavDropdown title={<span className="text-white">Đổi thể loại</span>}
						className="nav-down" id="basic-nav-dropdown">
						<NavDropdown.Item>
							<Nav.Link className="d-inline p-2 text-dark">
								Nhạc trẻ
							</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
