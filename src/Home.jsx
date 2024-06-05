import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="navBar mx-0">
        <Navbar expand="lg" className=" navbar-dark bg-dark py-2 px-4">
          <Container fluid>
            <Navbar.Brand href="/Basic_Login_SignUp_Page/" className="text-primary">
              TechBlog
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="\">Home</Nav.Link>
                <Nav.Link href="\">About us</Nav.Link>
                <Nav.Link href="\">Contact us</Nav.Link>
                <NavDropdown title="More" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="https://www.w3schools.com/whatis/">
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://roadmap.sh/">
                    Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://www.kaggle.com/discussions/general/217218">
                    Machine Learning
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 mx-2 rounded"
                />

                <Button className="btn btn-sm btn-outline-success rounded text-white">
                  Search
                </Button>
              </div>
              <a className="px-2" href="/Basic_Login_SignUp_Page/Login">
                <button className="btn btn-sm btn-outline-success text-white rounded">
                  Sign In
                </button>
              </a>
              <a href="/Basic_Login_SignUp_Page/SignUp">
                <button className="btn btn-sm btn-outline-success text-white rounded">
                  SignUp
                </button>
              </a>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="cards d-flex justify-content-center p-4">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="cards d-flex justify-content-center p-4">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="cards d-flex justify-content-center p-4">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className="card bg-dark">
        <footer className="bg-dark py-2">
          <div className="container text-center text-white">
            <p className="my-2">
              &copy; 2024 My Landing Page. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
