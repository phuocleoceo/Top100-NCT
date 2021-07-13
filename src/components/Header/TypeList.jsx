import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../../redux/slices/listSlice';
import { changeTopName } from '../../extension';
import { Nav, NavDropdown } from 'react-bootstrap';

export default function TypeList() {
	const songs = useSelector(state => state.song);
	const dispatch = useDispatch();

	const handleSetContent = (area, type) => {
		const action = setList({ area, type, songs });
		dispatch(action);
	}
	return (
		<Nav>
			{
				// Return a array like ["top100_VN","top100_AM"]
				Object.getOwnPropertyNames(songs).map(top =>
					songs[top] &&
					<NavDropdown className="nav-down" id="basic-nav-dropdown"
						title={<span className="text-white">{changeTopName(top)}</span>}
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
	)
}
