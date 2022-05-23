import { Container, Row, Col} from "react-bootstrap";
import { React } from 'react';
import { AddItem } from './AddItem';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../actions/item.actions';
import { Button} from 'react-bootstrap'
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import '../App.css';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";

export const ItemList = ()=> {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  return(
    <>
     <Container className="App">
      <Row>
        <Col md={3}></Col>
        <Col md={6}> 
          <Form>
            <Form.Control type="text" className="mb-3" value={name} placeholder='Enter Name' onChange={ (e) => { setName(e.target.value) } }/>
            <Form.Control type="text" className="mb-3" value={quantity} placeholder='Enter Quantity' onChange={ (e) => { setQuantity(e.target.value) } }/>
          </Form>
          <Button   variant="info" className="mb-3" onClick={ () => { dispatch(addItem({ name,quantity})) } }>
            Add Item
          </Button>   
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
            <AddItem key={item.id} item={item}></AddItem>
          ))
          :null 
          }  
          </tbody>
          </Table>
        </Col>
          <Col md={3}><Button  variant="danger"><Link to="/" class="text-white" style={{textDecoration:"none"}}>Logout</Link></Button></Col>
        </Row>
      </Container>
    </>
  );
}