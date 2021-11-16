import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import "./navbar.css";

function NavBar() {
  return (
      <div>
        {/* FIRST NAVBAR */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <i className="sale">
                    SALE UP TO 70% OFF. USE CODE "SALE70%" .
                  </i>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <i className="shopNow highlight">SHOP NOW </i>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Nav.Link>
                  <i className="navLink">Create Account</i>
                </Nav.Link>
                <Nav.Link href="/Login">
                  <i className="navLink" >Login</i>
                </Nav.Link>
                <Nav.Link>
                  <i className="navLink">Help</i>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <i className="cart">
                    <FaCartPlus />
                  </i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* SECOND NAVBAR */}
        <Navbar>
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <i className="phone">
                    <MdCall />
                  </i>
                  <i className="orderOnline">
                    Order online or call us : (+0123) 234 567
                  </i>
                </Nav.Link>
              </Nav>
              <Nav className="me-auto">
                <Navbar.Brand className="d-flex justify-content-center  highlight">
                  <i className="brandName">SUPER MARKET</i>
                </Navbar.Brand>
              </Nav>
              <Nav>
                <Nav.Link>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search for a Product"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button
                      variant="warning"
                      className="btn btn-primary"
                      style={{ color: "#fe9126;" }}
                    >
                      <i>
                        <FaSearch />
                      </i>
                    </Button>
                  </Form>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* THIRD NAVBAR */}
        <Navbar className="thirdBar">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">
                  {" "}
                  <i className="thirdNavLink ms-4">Home </i>
                </Nav.Link>
                <NavDropdown title="Groceries" id="collasible-nav-dropdown">
                  <Navbar.Brand className="highlight">
                    <i className="brandName">All Groceries</i>
                  </Navbar.Brand>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Dal & Pulses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Almonds
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Cashews
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Dry Fruit
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Mukhwas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Rice & Rice Products
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Household"
                  id="collasible-nav-dropdown"
                  style={{ color: "white;" }}
                >
                  <Navbar.Brand className="d-flex justify-content-center  highlight">
                    <i className="brandName">All Household</i>
                  </Navbar.Brand>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Cookware
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dust Pans
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Scrubbers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Dust Cloth
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mops</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Kitchenware
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Personal Care" id="collasible-nav-dropdown">
                  <Navbar.Brand className="d-flex justify-content-center  highlight">
                    <i className="brandName">Baby Care</i>
                  </Navbar.Brand>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Baby Soap
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Baby Care Accessories
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Baby Oil & Shampoos
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Baby Creams & Lotion
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Baby Powder
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Diapers & Wipes
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Packaged Food" id="collasible-nav-dropdown">
                  <Navbar.Brand className="d-flex justify-content-center  highlight">
                    <i className="brandName">All Accessories</i>
                  </Navbar.Brand>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Baby Food
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Dessert Items
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Biscuits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Breakfast Cereals
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Canned Food
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Chocolates & Sweets
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Beverages" id="collasible-nav-dropdown">
                  <Navbar.Brand className="d-flex justify-content-center  highlight">
                    <i className="brandName">Tea & Coffee</i>
                  </Navbar.Brand>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Green Tea
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Ground Coffee
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Herbal Tea
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Instant Coffee
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Tea</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Tea Bags
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#Home">
                  {" "}
                  <i className="thirdNavLink">Gourmet </i>
                </Nav.Link>
                <Nav.Link href="#Offers">
                  {" "}
                  <i className="thirdNavLink">Offers</i>
                </Nav.Link>
                <Nav.Link href="/Contact">
                  {" "}
                  <i className="thirdNavLink">Contact</i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
  );
}

export default NavBar;
