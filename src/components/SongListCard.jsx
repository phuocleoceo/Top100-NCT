import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPlay } from '../redux/slices/playSlice';

export default function SongListCard() {
	const songs = useSelector(state => state.song);
	const dispatch = useDispatch();

	return (
		<Container>
			<Row>
				{songs.map(s =>
					<Col sm={6} lg={4}>
						<Card className="card-home">
							<Card.Img variant="top"
								src={s.avatar}
								className="img-home"
								onClick={() => dispatch(setCurrentPlay(s))} />
							<Card.Body>
								<Card.Title>{s.title}</Card.Title>
								<Card.Text>{s.creator}</Card.Text>
							</Card.Body>
						</Card>
					</Col>)
				}
			</Row>
		</Container>
	)
}
