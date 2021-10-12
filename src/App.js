import React, { useState } from 'react';
import { Navbar,Container,Nav,NavDropdown, Jumbotron,Button } from 'react-bootstrap'; 
import './App.css';
import Data from "./data";

function App() {

  let [data, data변경함수] = useState([Data]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Shoes Mall</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  <div className="intro">
    <div className="intro_text">
    <h1>20% season offf</h1>
    <p>
    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
    featured content or information.
    </p>
    <p>
    <Button variant="primary">Learn more</Button>
    </p>
    </div>
  </div>
  

  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      <h4>{ Data[0].title }</h4>
      <p>{ Data[0].content }</p>
      </div>
      <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
      <h4>{ Data[1].title }</h4>
      <p>{ Data[1].content }</p>
      </div>
      <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
      <h4>{ Data[2].title }</h4>
      <p>{ Data[2].content }</p>
      </div>
    </div>
  </div>

    </div>
  );
}

export default App;
