import { useState } from "react";
import "./App.css";
import { Button, Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./Data";
import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detai from "./pages/Detail";
import Card from "./Components/Card";
import Page404 from "./Components/Page404";

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
            </>
          }
        />
        {/* //메인 페이지 라우터 */}

        <Route path="/detail" element={<Detai />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<About />} />
          <Route path="location" element={<About />} />
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
    </div>
  );
} //end of About

export default App;
