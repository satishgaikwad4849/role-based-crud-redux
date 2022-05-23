import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'

export default function Signin() {

const [firstName, setFirstName] = useState('');
const [password, setPassword] = useState('');
const users = useSelector(state => state.users);
const navigate = useNavigate();

const roleHandle = () => {
  
  const newUser = users.filter((newVal) => {
    return newVal.role === "admin"; 
  });
  const newAdminItem = newUser.forEach((user)=>{
    if(user.name==firstName && user.password==password){
      navigate("/admin");
    }
  })
  const newUser_=users.filter((newval) => {
    return newval.role === "user";
  })
  const newUserItem=newUser_.filter((item) => {
    if(item.name==firstName && item.password==password){
      navigate("/user");
    }
  })
};
return (
  <>
  <Container className="App">
    <Row>
      <Col md={4}></Col>
        <Col md={4}> 
        <Card >
          <Card.Body>
            <Form>
              <Form.Control type="text" className="mb-3 mt-3" value={firstName} placeholder='Name' onChange={ (e) => { setFirstName(e.target.value) } }/>
              <Form.Control type="text" className="mb-3" value={password} placeholder='Password' onChange={ (e) => { setPassword(e.target.value) } }/>
            </Form>
            <Button   variant="info" className="mb-3" onClick={roleHandle}>
              SignIn
            </Button>
          </Card.Body>
        </Card>       
        </Col>
        <Col md={4}></Col>
    </Row>
  </Container>
  </>
)
}
