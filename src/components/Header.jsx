import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';

export default function Header() {
	const play = useSelector(state => state.play);
	const songs = useSelector(state => state.song);
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
					<NavDropdown title={<span className="text-white">Nhạc Việt</span>}
						className="nav-down" id="basic-nav-dropdown">
						{
							(songs.top100_VN !== undefined) &&
							songs.top100_VN.map((s) =>
								<NavDropdown.Item>
									<Nav.Link as={Link} to={"/" + s.name.replace(" ", "")} className="d-inline p-2 text-dark">
										{s.name}
									</Nav.Link>
								</NavDropdown.Item>
							)
						}
					</NavDropdown>

					<NavDropdown title={<span className="text-white">Nhạc Âu Mỹ</span>}
						className="nav-down" id="basic-nav-dropdown">
						{
							(songs.top100_AM !== undefined) &&
							songs.top100_AM.map((s) =>
								<NavDropdown.Item>
									<Nav.Link as={Link} to={"/" + s.name.replace(" ", "")} className="d-inline p-2 text-dark">
										{s.name}
									</Nav.Link>
								</NavDropdown.Item>
							)
						}
					</NavDropdown>

					<NavDropdown title={<span className="text-white">Nhạc Châu Á</span>}
						className="nav-down" id="basic-nav-dropdown">
						{
							(songs.top100_CA !== undefined) &&
							songs.top100_CA.map((s) =>
								<NavDropdown.Item>
									<Nav.Link as={Link} to={"/" + s.name.replace(" ", "")} className="d-inline p-2 text-dark">
										{s.name}
									</Nav.Link>
								</NavDropdown.Item>
							)
						}
					</NavDropdown>

					<NavDropdown title={<span className="text-white">Nhạc Không Lời</span>}
						className="nav-down" id="basic-nav-dropdown">
						{
							(songs.top100_KL !== undefined) &&
							songs.top100_KL.map((s) =>
								<NavDropdown.Item>
									<Nav.Link as={Link} to={"/" + s.name.replace(" ", "")} className="d-inline p-2 text-dark">
										{s.name}
									</Nav.Link>
								</NavDropdown.Item>
							)
						}
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
