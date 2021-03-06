import React from 'react';
import { Navbar } from 'react-bootstrap';
import PlayInfor from './PlayInfor';
import TypeList from './TypeList';
import SearchBox from './SearchBox';
import './style.css';

export default function Header() {
	return (
		<Navbar bg="dark" expand="lg" fixed="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<PlayInfor />
				<SearchBox />
				<TypeList />
			</Navbar.Collapse>
		</Navbar>
	)
}
