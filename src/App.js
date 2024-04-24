import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";

function App() {
  
  let [cloth] = useState();

  return (
    <div className="App">
      {/*                  NavBar                */}
      <Navbar bg="dark" data-bs-theme="dark">
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
      <Content />
    </div>
  );
}
// 컨텐츠 함수
function Content() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "/img/ct1.png"} />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "/img/ct2.png"} />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
        <div className="col-md-4">
          <img src={process.env.PUBLIC_URL + "/img/ct3.png"} />
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>
      </div>
    </div>
  );
}
export default App;
