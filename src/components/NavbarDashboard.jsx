import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { navLinksDashboard, navLinksDashboardPenulis } from "../data/index";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";

import nadia from "../assets/img/testimonial/nadia.jpg";

const NavbarDashboard = ({ dashboardType }) => {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", changeBgColor);
    return () => window.removeEventListener("scroll", changeBgColor);
  }, []);

  const changeBgColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const links = dashboardType === "penulis" ? navLinksDashboardPenulis : navLinksDashboard;

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href={"/"}>
            <div className="logo">
              <img src={logo} alt="SarasSingkat" />
              <div className="nameLogo ">SarasSingkat</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-container">
              {links.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>
            <div className="name-profile fw-bold">Bayu</div>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
                <img src={nadia} alt="profile" style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="dropdown-header text-center">
                  <img src={nadia} alt="profile" style={{ borderRadius: "50%", width: "60px", height: "60px" }} />
                  <div className="fw-bold">Bayu</div>
                  <div className="text-muted">Penulis</div>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/profile">
                  <FaUser className="me-2" /> Profil
                </Dropdown.Item>
                <Dropdown.Item>
                  <FaSignOutAlt className="me-2" /> Keluar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarDashboard;
