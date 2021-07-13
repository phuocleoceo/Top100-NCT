import React, { useEffect } from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPlay } from '../../redux/slices/playSlice';
import { setList } from '../../redux/slices/listSlice';
import './style.css';

export default function SongListCard() {
	const songs = useSelector(state => state.song);
	const list = useSelector(state => state.list);
	const dispatch = useDispatch();
	useEffect(() => {
		const action = setList({
			type: "Nhạc Trẻ",
			area: "top100_VN",
			songs: songs
		});
		dispatch(action);
	}, [dispatch, songs]);

	const handleClickCard = (s) => {
		document.title = s.title + " - " + s.creator;
		dispatch(setCurrentPlay(s));
	}


	return (
		<Container className="container-margin">
			<Row>
				{
					list.map(s =>
						<Col sm={6} lg={3}>
							<Card className="card-home"
								onClick={() => handleClickCard(s)} >
								<Card.Img variant="top"
									src={s.avatar}
									className="img-home" />
								<Card.Body>
									<Card.Title>{s.title}</Card.Title>
									<Card.Text>{s.creator}</Card.Text>
									<div className="overlay"></div>
									<Card.Img src="/playbutton.png"
										className="playbutton" />
								</Card.Body>
							</Card>
						</Col>)
				}
			</Row>
		</Container>
	)
}
