import React from 'react';
import { Card, Row, Container, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPlay } from '../redux/slices/playSlice';

export default function SongListCard(props) {
	const songs = useSelector(state => state.song);
	const content = useSelector(state => state.content);
	const dispatch = useDispatch();
	const { type, area } = content;
	const list = songs[area] ? songs[area].find(x => x.name === type).songs : [];
	return (
		<Container style={{ marginTop: "9vh", marginBottom: "12vh" }}>
			<Row>
				{
					list.map(s =>
						<Col sm={6} lg={3}>
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
