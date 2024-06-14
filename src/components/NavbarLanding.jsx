import logo from "../assets/logo.svg";

import { useState, useEffect } from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

import { navLinks } from "../data/index";
import { Link, NavLink } from "react-router-dom";

const NavbarLanding = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBgColor();

    window.addEventListener("scroll", changeBgColor);
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href={"/"}>
            <div className="logo">
              <img src={logo} alt="SarasSingkat" />
              <div>SarasSingkat</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-container">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="text-center btn-login">
              <Link to={"/login"}>
                <button>Masuk</button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarLanding;
