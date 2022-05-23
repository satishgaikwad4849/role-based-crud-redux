import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Row, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function Users() {
const items = useSelector(state => state.items);
	return (
		<div>
			<Container className="App">
				<Row>
					<Col md={4}></Col>
						<Col md={4}> 
							<Table striped bordered hover>
								<thead>
									<tr>
									<th>Id</th>
									<th>Name</th>
									<th>Quantity</th>
									</tr>
								</thead>
									<tbody>
										{
											items.length > 1 ? 
											items.map((item) => (
												<tr>
													<td>{item.id}</td>
													<td>{item.name}</td>
													<td>{item.quantity}</td>
												</tr>
												))
												:null 
											} 
									</tbody>
							</Table>
						</Col>
							<Col md={4}><Button variant="danger"><Link to="/" class="text-white" style={{textDecoration:"none"}}>Logout</Link></Button></Col>
					</Row> 
				</Container>
			</div>
	)
}
