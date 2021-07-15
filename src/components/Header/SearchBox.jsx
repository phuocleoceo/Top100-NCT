import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchSong } from '../../redux/slices/listSlice';
import { FormControl, InputGroup, Nav, Button, Form, Image } from 'react-bootstrap';

export default function SearchBox() {
	const [showBox, setShowBox] = useState(false);
	const songs = useSelector(state => state.song);
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();
		const action = searchSong({
			searchValue: e.target.searchValue.value,
			songs: songs
		});
		dispatch(action);
	}
	return (
		<Nav>
			{
				showBox
					?
					<Form onSubmit={handleSearch}>
						<InputGroup style={{ width: "17rem" }}>
							<FormControl
								placeholder="Tên bài hoặc ca sĩ..."
								name="searchValue"
							/>
							<Button variant="dark"
								onClick={() => setShowBox(false)}>
								<Image src="/closeSearch.png"
									className="logo-close-search" />
							</Button>
						</InputGroup>
					</Form>
					:
					<Button variant="dark"
						onClick={() => setShowBox(true)}>
						<Image src="/search.svg" className="logo-search" />
					</Button>
			}
		</Nav>
	)
}
