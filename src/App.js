import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./Data";
import React from "react";

function App() {
  let [cloth] = useState(data);
  return (
    <div className="App">
      {/*                  NavBar                */}
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/*                  //NavBar                */}
      {/* 메인 배경 이미지 */}
      <div className="main-bg  "></div>
      <div className="container-fluid">
        <div className="row">
          {cloth.map(function (cloth, i) {
            return (
              <React.Fragment key={i}>
                <Card cloth={cloth} i={i} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '/img/ct'+(props.i+1)+'.png'} />
      <h4>{props.cloth.title}</h4>
      <p>{props.cloth.content}</p>
      <p>{props.cloth.price}</p>
    </div>
  );
}


export default App;
