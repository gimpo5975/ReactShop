import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./Data";
import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Card from "./Components/Card";
import Page404 from "./Components/Page404";
import Detail from "./pages/Detail";

function App() {
  let [cloth] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      {/*                  NavBar                */}
      <Navbar>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            KwjShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/*                  //NavBar                */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* 메인 배경 이미지 */}
              <div className="main-bg  "></div>
              <div className="container-fluid">
                <div className="row">
                  {cloth.map((cloth, i) => {
                    return (
                      <React.Fragment key={i}>
                        <Card cloth={cloth} i={i} />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <button onClick={()=>{
                
              }}>더보기</button>
            </>
          }
        />
        {/* //메인 페이지 라우터 */}

        <Route path="/detail/:id" element={<Detail cloth={cloth} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>로케이션</div>} />
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
} // end of App

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  );
} //end of About

function Event(){
  return(
      <>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
      </>
  );
}

export default App;
